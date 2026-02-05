package com.android.volley;

import android.net.TrafficStats;
import android.os.Process;
import android.os.SystemClock;
import java.util.concurrent.BlockingQueue;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends Thread {

    /* renamed from: d  reason: collision with root package name */
    private final BlockingQueue f8169d;

    /* renamed from: e  reason: collision with root package name */
    private final h f8170e;

    /* renamed from: i  reason: collision with root package name */
    private final b f8171i;

    /* renamed from: o  reason: collision with root package name */
    private final q f8172o;

    /* renamed from: p  reason: collision with root package name */
    private volatile boolean f8173p = false;

    public i(BlockingQueue blockingQueue, h hVar, b bVar, q qVar) {
        this.f8169d = blockingQueue;
        this.f8170e = hVar;
        this.f8171i = bVar;
        this.f8172o = qVar;
    }

    private void a(n nVar) {
        TrafficStats.setThreadStatsTag(nVar.getTrafficStatsTag());
    }

    private void b(n nVar, u uVar) {
        this.f8172o.c(nVar, nVar.parseNetworkError(uVar));
    }

    private void c() {
        d((n) this.f8169d.take());
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
                    k a10 = this.f8170e.a(nVar);
                    nVar.addMarker("network-http-complete");
                    if (a10.f8178e && nVar.hasHadResponseDelivered()) {
                        nVar.finish("not-modified");
                        nVar.notifyListenerResponseNotUsable();
                        return;
                    }
                    p parseNetworkResponse = nVar.parseNetworkResponse(a10);
                    nVar.addMarker("network-parse-complete");
                    if (nVar.shouldCache() && parseNetworkResponse.f8200b != null) {
                        this.f8171i.c(nVar.getCacheKey(), parseNetworkResponse.f8200b);
                        nVar.addMarker("network-cache-written");
                    }
                    nVar.markDelivered();
                    this.f8172o.a(nVar, parseNetworkResponse);
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
                this.f8172o.c(nVar, uVar);
                nVar.notifyListenerResponseNotUsable();
            }
        } finally {
            nVar.sendEvent(4);
        }
    }

    public void e() {
        this.f8173p = true;
        interrupt();
    }

    @Override // java.lang.Thread, java.lang.Runnable
    public void run() {
        Process.setThreadPriority(10);
        while (true) {
            try {
                c();
            } catch (InterruptedException unused) {
                if (this.f8173p) {
                    Thread.currentThread().interrupt();
                    return;
                }
                v.c("Ignoring spurious interrupt of NetworkDispatcher thread; use quit() to terminate it", new Object[0]);
            }
        }
    }
}
