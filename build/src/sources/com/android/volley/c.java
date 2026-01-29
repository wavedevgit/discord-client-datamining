package com.android.volley;

import android.os.Process;
import com.android.volley.b;
import java.util.concurrent.BlockingQueue;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends Thread {

    /* renamed from: r  reason: collision with root package name */
    private static final boolean f9166r = v.f9224b;

    /* renamed from: d  reason: collision with root package name */
    private final BlockingQueue f9167d;

    /* renamed from: e  reason: collision with root package name */
    private final BlockingQueue f9168e;

    /* renamed from: i  reason: collision with root package name */
    private final b f9169i;

    /* renamed from: o  reason: collision with root package name */
    private final q f9170o;

    /* renamed from: p  reason: collision with root package name */
    private volatile boolean f9171p = false;

    /* renamed from: q  reason: collision with root package name */
    private final w f9172q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n f9173d;

        a(n nVar) {
            this.f9173d = nVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                c.this.f9168e.put(this.f9173d);
            } catch (InterruptedException unused) {
                Thread.currentThread().interrupt();
            }
        }
    }

    public c(BlockingQueue blockingQueue, BlockingQueue blockingQueue2, b bVar, q qVar) {
        this.f9167d = blockingQueue;
        this.f9168e = blockingQueue2;
        this.f9169i = bVar;
        this.f9170o = qVar;
        this.f9172q = new w(this, blockingQueue2, qVar);
    }

    private void b() {
        c((n) this.f9167d.take());
    }

    void c(n nVar) {
        nVar.addMarker("cache-queue-take");
        nVar.sendEvent(1);
        try {
            if (nVar.isCanceled()) {
                nVar.finish("cache-discard-canceled");
                return;
            }
            b.a a10 = this.f9169i.a(nVar.getCacheKey());
            if (a10 == null) {
                nVar.addMarker("cache-miss");
                if (!this.f9172q.c(nVar)) {
                    this.f9168e.put(nVar);
                }
                return;
            }
            long currentTimeMillis = System.currentTimeMillis();
            if (a10.b(currentTimeMillis)) {
                nVar.addMarker("cache-hit-expired");
                nVar.setCacheEntry(a10);
                if (!this.f9172q.c(nVar)) {
                    this.f9168e.put(nVar);
                }
                return;
            }
            nVar.addMarker("cache-hit");
            p parseNetworkResponse = nVar.parseNetworkResponse(new k(a10.f9158a, a10.f9164g));
            nVar.addMarker("cache-hit-parsed");
            if (!parseNetworkResponse.b()) {
                nVar.addMarker("cache-parsing-failed");
                this.f9169i.b(nVar.getCacheKey(), true);
                nVar.setCacheEntry(null);
                if (!this.f9172q.c(nVar)) {
                    this.f9168e.put(nVar);
                }
                return;
            }
            if (!a10.c(currentTimeMillis)) {
                this.f9170o.a(nVar, parseNetworkResponse);
            } else {
                nVar.addMarker("cache-hit-refresh-needed");
                nVar.setCacheEntry(a10);
                parseNetworkResponse.f9220d = true;
                if (!this.f9172q.c(nVar)) {
                    this.f9170o.b(nVar, parseNetworkResponse, new a(nVar));
                } else {
                    this.f9170o.a(nVar, parseNetworkResponse);
                }
            }
        } finally {
            nVar.sendEvent(2);
        }
    }

    public void d() {
        this.f9171p = true;
        interrupt();
    }

    @Override // java.lang.Thread, java.lang.Runnable
    public void run() {
        if (f9166r) {
            v.e("start new dispatcher", new Object[0]);
        }
        Process.setThreadPriority(10);
        this.f9169i.initialize();
        while (true) {
            try {
                b();
            } catch (InterruptedException unused) {
                if (this.f9171p) {
                    Thread.currentThread().interrupt();
                    return;
                }
                v.c("Ignoring spurious interrupt of CacheDispatcher thread; use quit() to terminate it", new Object[0]);
            }
        }
    }
}
