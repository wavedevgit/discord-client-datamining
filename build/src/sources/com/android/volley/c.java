package com.android.volley;

import android.os.Process;
import com.android.volley.b;
import java.util.concurrent.BlockingQueue;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends Thread {

    /* renamed from: r  reason: collision with root package name */
    private static final boolean f8148r = v.f8206b;

    /* renamed from: d  reason: collision with root package name */
    private final BlockingQueue f8149d;

    /* renamed from: e  reason: collision with root package name */
    private final BlockingQueue f8150e;

    /* renamed from: i  reason: collision with root package name */
    private final b f8151i;

    /* renamed from: o  reason: collision with root package name */
    private final q f8152o;

    /* renamed from: p  reason: collision with root package name */
    private volatile boolean f8153p = false;

    /* renamed from: q  reason: collision with root package name */
    private final w f8154q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n f8155d;

        a(n nVar) {
            this.f8155d = nVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                c.this.f8150e.put(this.f8155d);
            } catch (InterruptedException unused) {
                Thread.currentThread().interrupt();
            }
        }
    }

    public c(BlockingQueue blockingQueue, BlockingQueue blockingQueue2, b bVar, q qVar) {
        this.f8149d = blockingQueue;
        this.f8150e = blockingQueue2;
        this.f8151i = bVar;
        this.f8152o = qVar;
        this.f8154q = new w(this, blockingQueue2, qVar);
    }

    private void b() {
        c((n) this.f8149d.take());
    }

    void c(n nVar) {
        nVar.addMarker("cache-queue-take");
        nVar.sendEvent(1);
        try {
            if (nVar.isCanceled()) {
                nVar.finish("cache-discard-canceled");
                return;
            }
            b.a a10 = this.f8151i.a(nVar.getCacheKey());
            if (a10 == null) {
                nVar.addMarker("cache-miss");
                if (!this.f8154q.c(nVar)) {
                    this.f8150e.put(nVar);
                }
                return;
            }
            long currentTimeMillis = System.currentTimeMillis();
            if (a10.b(currentTimeMillis)) {
                nVar.addMarker("cache-hit-expired");
                nVar.setCacheEntry(a10);
                if (!this.f8154q.c(nVar)) {
                    this.f8150e.put(nVar);
                }
                return;
            }
            nVar.addMarker("cache-hit");
            p parseNetworkResponse = nVar.parseNetworkResponse(new k(a10.f8140a, a10.f8146g));
            nVar.addMarker("cache-hit-parsed");
            if (!parseNetworkResponse.b()) {
                nVar.addMarker("cache-parsing-failed");
                this.f8151i.b(nVar.getCacheKey(), true);
                nVar.setCacheEntry(null);
                if (!this.f8154q.c(nVar)) {
                    this.f8150e.put(nVar);
                }
                return;
            }
            if (!a10.c(currentTimeMillis)) {
                this.f8152o.a(nVar, parseNetworkResponse);
            } else {
                nVar.addMarker("cache-hit-refresh-needed");
                nVar.setCacheEntry(a10);
                parseNetworkResponse.f8202d = true;
                if (!this.f8154q.c(nVar)) {
                    this.f8152o.b(nVar, parseNetworkResponse, new a(nVar));
                } else {
                    this.f8152o.a(nVar, parseNetworkResponse);
                }
            }
        } finally {
            nVar.sendEvent(2);
        }
    }

    public void d() {
        this.f8153p = true;
        interrupt();
    }

    @Override // java.lang.Thread, java.lang.Runnable
    public void run() {
        if (f8148r) {
            v.e("start new dispatcher", new Object[0]);
        }
        Process.setThreadPriority(10);
        this.f8151i.initialize();
        while (true) {
            try {
                b();
            } catch (InterruptedException unused) {
                if (this.f8153p) {
                    Thread.currentThread().interrupt();
                    return;
                }
                v.c("Ignoring spurious interrupt of CacheDispatcher thread; use quit() to terminate it", new Object[0]);
            }
        }
    }
}
