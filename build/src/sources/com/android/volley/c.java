package com.android.volley;

import android.os.Process;
import com.android.volley.b;
import java.util.concurrent.BlockingQueue;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends Thread {

    /* renamed from: r  reason: collision with root package name */
    private static final boolean f7763r = v.f7821b;

    /* renamed from: d  reason: collision with root package name */
    private final BlockingQueue f7764d;

    /* renamed from: e  reason: collision with root package name */
    private final BlockingQueue f7765e;

    /* renamed from: i  reason: collision with root package name */
    private final b f7766i;

    /* renamed from: o  reason: collision with root package name */
    private final q f7767o;

    /* renamed from: p  reason: collision with root package name */
    private volatile boolean f7768p = false;

    /* renamed from: q  reason: collision with root package name */
    private final w f7769q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n f7770d;

        a(n nVar) {
            this.f7770d = nVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                c.this.f7765e.put(this.f7770d);
            } catch (InterruptedException unused) {
                Thread.currentThread().interrupt();
            }
        }
    }

    public c(BlockingQueue blockingQueue, BlockingQueue blockingQueue2, b bVar, q qVar) {
        this.f7764d = blockingQueue;
        this.f7765e = blockingQueue2;
        this.f7766i = bVar;
        this.f7767o = qVar;
        this.f7769q = new w(this, blockingQueue2, qVar);
    }

    private void b() {
        c((n) this.f7764d.take());
    }

    void c(n nVar) {
        nVar.addMarker("cache-queue-take");
        nVar.sendEvent(1);
        try {
            if (nVar.isCanceled()) {
                nVar.finish("cache-discard-canceled");
                return;
            }
            b.a a10 = this.f7766i.a(nVar.getCacheKey());
            if (a10 == null) {
                nVar.addMarker("cache-miss");
                if (!this.f7769q.c(nVar)) {
                    this.f7765e.put(nVar);
                }
                return;
            }
            long currentTimeMillis = System.currentTimeMillis();
            if (a10.b(currentTimeMillis)) {
                nVar.addMarker("cache-hit-expired");
                nVar.setCacheEntry(a10);
                if (!this.f7769q.c(nVar)) {
                    this.f7765e.put(nVar);
                }
                return;
            }
            nVar.addMarker("cache-hit");
            p parseNetworkResponse = nVar.parseNetworkResponse(new k(a10.f7755a, a10.f7761g));
            nVar.addMarker("cache-hit-parsed");
            if (!parseNetworkResponse.b()) {
                nVar.addMarker("cache-parsing-failed");
                this.f7766i.b(nVar.getCacheKey(), true);
                nVar.setCacheEntry(null);
                if (!this.f7769q.c(nVar)) {
                    this.f7765e.put(nVar);
                }
                return;
            }
            if (!a10.c(currentTimeMillis)) {
                this.f7767o.a(nVar, parseNetworkResponse);
            } else {
                nVar.addMarker("cache-hit-refresh-needed");
                nVar.setCacheEntry(a10);
                parseNetworkResponse.f7817d = true;
                if (!this.f7769q.c(nVar)) {
                    this.f7767o.b(nVar, parseNetworkResponse, new a(nVar));
                } else {
                    this.f7767o.a(nVar, parseNetworkResponse);
                }
            }
        } finally {
            nVar.sendEvent(2);
        }
    }

    public void d() {
        this.f7768p = true;
        interrupt();
    }

    @Override // java.lang.Thread, java.lang.Runnable
    public void run() {
        if (f7763r) {
            v.e("start new dispatcher", new Object[0]);
        }
        Process.setThreadPriority(10);
        this.f7766i.initialize();
        while (true) {
            try {
                b();
            } catch (InterruptedException unused) {
                if (this.f7768p) {
                    Thread.currentThread().interrupt();
                    return;
                }
                v.c("Ignoring spurious interrupt of CacheDispatcher thread; use quit() to terminate it", new Object[0]);
            }
        }
    }
}
