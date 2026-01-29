package com.android.volley;

import android.net.TrafficStats;
import android.os.Process;
import android.os.SystemClock;
import java.util.concurrent.BlockingQueue;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends Thread {

    /* renamed from: d  reason: collision with root package name */
    private final BlockingQueue f9187d;

    /* renamed from: e  reason: collision with root package name */
    private final h f9188e;

    /* renamed from: i  reason: collision with root package name */
    private final b f9189i;

    /* renamed from: o  reason: collision with root package name */
    private final q f9190o;

    /* renamed from: p  reason: collision with root package name */
    private volatile boolean f9191p = false;

    public i(BlockingQueue blockingQueue, h hVar, b bVar, q qVar) {
        this.f9187d = blockingQueue;
        this.f9188e = hVar;
        this.f9189i = bVar;
        this.f9190o = qVar;
    }

    private void a(n nVar) {
        TrafficStats.setThreadStatsTag(nVar.getTrafficStatsTag());
    }

    private void b(n nVar, u uVar) {
        this.f9190o.c(nVar, nVar.parseNetworkError(uVar));
    }

    private void c() {
        d((n) this.f9187d.take());
    }

    void d(n nVar) {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        nVar.sendEvent(3);
        try {
            try {
                try {
                    nVar.addMarker("network-queue-take");
                    if (nVar.isCanceled()) {
                        nVar.finish("network-discard-cancelled");
                        nVar.notifyListenerResponseNotUsable();
                        return;
                    }
                    a(nVar);
                    k a10 = this.f9188e.a(nVar);
                    nVar.addMarker("network-http-complete");
                    if (a10.f9196e && nVar.hasHadResponseDelivered()) {
                        nVar.finish("not-modified");
                        nVar.notifyListenerResponseNotUsable();
                        return;
                    }
                    p parseNetworkResponse = nVar.parseNetworkResponse(a10);
                    nVar.addMarker("network-parse-complete");
                    if (nVar.shouldCache() && parseNetworkResponse.f9218b != null) {
                        this.f9189i.c(nVar.getCacheKey(), parseNetworkResponse.f9218b);
                        nVar.addMarker("network-cache-written");
                    }
                    nVar.markDelivered();
                    this.f9190o.a(nVar, parseNetworkResponse);
                    nVar.notifyListenerResponseReceived(parseNetworkResponse);
                } catch (u e10) {
                    e10.a(SystemClock.elapsedRealtime() - elapsedRealtime);
                    b(nVar, e10);
                    nVar.notifyListenerResponseNotUsable();
                }
            } catch (Exception e11) {
                v.d(e11, "Unhandled exception %s", e11.toString());
                u uVar = new u(e11);
                uVar.a(SystemClock.elapsedRealtime() - elapsedRealtime);
                this.f9190o.c(nVar, uVar);
                nVar.notifyListenerResponseNotUsable();
            }
        } finally {
            nVar.sendEvent(4);
        }
    }

    public void e() {
        this.f9191p = true;
        interrupt();
    }

    @Override // java.lang.Thread, java.lang.Runnable
    public void run() {
        Process.setThreadPriority(10);
        while (true) {
            try {
                c();
            } catch (InterruptedException unused) {
                if (this.f9191p) {
                    Thread.currentThread().interrupt();
                    return;
                }
                v.c("Ignoring spurious interrupt of NetworkDispatcher thread; use quit() to terminate it", new Object[0]);
            }
        }
    }
}
