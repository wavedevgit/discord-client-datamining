package com.android.volley;

import android.os.Process;
import com.android.volley.b;
import java.util.concurrent.BlockingQueue;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends Thread {

    /* renamed from: r  reason: collision with root package name */
    private static final boolean f8795r = v.f8853b;

    /* renamed from: d  reason: collision with root package name */
    private final BlockingQueue f8796d;

    /* renamed from: e  reason: collision with root package name */
    private final BlockingQueue f8797e;

    /* renamed from: i  reason: collision with root package name */
    private final b f8798i;

    /* renamed from: o  reason: collision with root package name */
    private final q f8799o;

    /* renamed from: p  reason: collision with root package name */
    private volatile boolean f8800p = false;

    /* renamed from: q  reason: collision with root package name */
    private final w f8801q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n f8802d;

        a(n nVar) {
            this.f8802d = nVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                c.this.f8797e.put(this.f8802d);
            } catch (InterruptedException unused) {
                Thread.currentThread().interrupt();
            }
        }
    }

    public c(BlockingQueue blockingQueue, BlockingQueue blockingQueue2, b bVar, q qVar) {
        this.f8796d = blockingQueue;
        this.f8797e = blockingQueue2;
        this.f8798i = bVar;
        this.f8799o = qVar;
        this.f8801q = new w(this, blockingQueue2, qVar);
    }

    private void b() {
        c((n) this.f8796d.take());
    }

    void c(n nVar) {
        nVar.addMarker("cache-queue-take");
        nVar.sendEvent(1);
        try {
            if (nVar.isCanceled()) {
                nVar.finish("cache-discard-canceled");
                return;
            }
            b.a a10 = this.f8798i.a(nVar.getCacheKey());
            if (a10 == null) {
                nVar.addMarker("cache-miss");
                if (!this.f8801q.c(nVar)) {
                    this.f8797e.put(nVar);
                }
                return;
            }
            long currentTimeMillis = System.currentTimeMillis();
            if (a10.b(currentTimeMillis)) {
                nVar.addMarker("cache-hit-expired");
                nVar.setCacheEntry(a10);
                if (!this.f8801q.c(nVar)) {
                    this.f8797e.put(nVar);
                }
                return;
            }
            nVar.addMarker("cache-hit");
            p parseNetworkResponse = nVar.parseNetworkResponse(new k(a10.f8787a, a10.f8793g));
            nVar.addMarker("cache-hit-parsed");
            if (!parseNetworkResponse.b()) {
                nVar.addMarker("cache-parsing-failed");
                this.f8798i.b(nVar.getCacheKey(), true);
                nVar.setCacheEntry(null);
                if (!this.f8801q.c(nVar)) {
                    this.f8797e.put(nVar);
                }
                return;
            }
            if (!a10.c(currentTimeMillis)) {
                this.f8799o.a(nVar, parseNetworkResponse);
            } else {
                nVar.addMarker("cache-hit-refresh-needed");
                nVar.setCacheEntry(a10);
                parseNetworkResponse.f8849d = true;
                if (!this.f8801q.c(nVar)) {
                    this.f8799o.b(nVar, parseNetworkResponse, new a(nVar));
                } else {
                    this.f8799o.a(nVar, parseNetworkResponse);
                }
            }
        } finally {
            nVar.sendEvent(2);
        }
    }

    public void d() {
        this.f8800p = true;
        interrupt();
    }

    @Override // java.lang.Thread, java.lang.Runnable
    public void run() {
        if (f8795r) {
            v.e("start new dispatcher", new Object[0]);
        }
        Process.setThreadPriority(10);
        this.f8798i.initialize();
        while (true) {
            try {
                b();
            } catch (InterruptedException unused) {
                if (this.f8800p) {
                    Thread.currentThread().interrupt();
                    return;
                }
                v.c("Ignoring spurious interrupt of CacheDispatcher thread; use quit() to terminate it", new Object[0]);
            }
        }
    }
}
