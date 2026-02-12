package com.android.volley;

import android.os.Process;
import com.android.volley.b;
import java.util.concurrent.BlockingQueue;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends Thread {

    /* renamed from: r  reason: collision with root package name */
    private static final boolean f8765r = v.f8823b;

    /* renamed from: d  reason: collision with root package name */
    private final BlockingQueue f8766d;

    /* renamed from: e  reason: collision with root package name */
    private final BlockingQueue f8767e;

    /* renamed from: i  reason: collision with root package name */
    private final b f8768i;

    /* renamed from: o  reason: collision with root package name */
    private final q f8769o;

    /* renamed from: p  reason: collision with root package name */
    private volatile boolean f8770p = false;

    /* renamed from: q  reason: collision with root package name */
    private final w f8771q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n f8772d;

        a(n nVar) {
            this.f8772d = nVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                c.this.f8767e.put(this.f8772d);
            } catch (InterruptedException unused) {
                Thread.currentThread().interrupt();
            }
        }
    }

    public c(BlockingQueue blockingQueue, BlockingQueue blockingQueue2, b bVar, q qVar) {
        this.f8766d = blockingQueue;
        this.f8767e = blockingQueue2;
        this.f8768i = bVar;
        this.f8769o = qVar;
        this.f8771q = new w(this, blockingQueue2, qVar);
    }

    private void b() {
        c((n) this.f8766d.take());
    }

    void c(n nVar) {
        nVar.addMarker("cache-queue-take");
        nVar.sendEvent(1);
        try {
            if (nVar.isCanceled()) {
                nVar.finish("cache-discard-canceled");
                return;
            }
            b.a a10 = this.f8768i.a(nVar.getCacheKey());
            if (a10 == null) {
                nVar.addMarker("cache-miss");
                if (!this.f8771q.c(nVar)) {
                    this.f8767e.put(nVar);
                }
                return;
            }
            long currentTimeMillis = System.currentTimeMillis();
            if (a10.b(currentTimeMillis)) {
                nVar.addMarker("cache-hit-expired");
                nVar.setCacheEntry(a10);
                if (!this.f8771q.c(nVar)) {
                    this.f8767e.put(nVar);
                }
                return;
            }
            nVar.addMarker("cache-hit");
            p parseNetworkResponse = nVar.parseNetworkResponse(new k(a10.f8757a, a10.f8763g));
            nVar.addMarker("cache-hit-parsed");
            if (!parseNetworkResponse.b()) {
                nVar.addMarker("cache-parsing-failed");
                this.f8768i.b(nVar.getCacheKey(), true);
                nVar.setCacheEntry(null);
                if (!this.f8771q.c(nVar)) {
                    this.f8767e.put(nVar);
                }
                return;
            }
            if (!a10.c(currentTimeMillis)) {
                this.f8769o.a(nVar, parseNetworkResponse);
            } else {
                nVar.addMarker("cache-hit-refresh-needed");
                nVar.setCacheEntry(a10);
                parseNetworkResponse.f8819d = true;
                if (!this.f8771q.c(nVar)) {
                    this.f8769o.b(nVar, parseNetworkResponse, new a(nVar));
                } else {
                    this.f8769o.a(nVar, parseNetworkResponse);
                }
            }
        } finally {
            nVar.sendEvent(2);
        }
    }

    public void d() {
        this.f8770p = true;
        interrupt();
    }

    @Override // java.lang.Thread, java.lang.Runnable
    public void run() {
        if (f8765r) {
            v.e("start new dispatcher", new Object[0]);
        }
        Process.setThreadPriority(10);
        this.f8768i.initialize();
        while (true) {
            try {
                b();
            } catch (InterruptedException unused) {
                if (this.f8770p) {
                    Thread.currentThread().interrupt();
                    return;
                }
                v.c("Ignoring spurious interrupt of CacheDispatcher thread; use quit() to terminate it", new Object[0]);
            }
        }
    }
}
