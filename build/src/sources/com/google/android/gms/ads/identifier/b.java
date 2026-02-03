package com.google.android.gms.ads.identifier;

import java.lang.ref.WeakReference;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends Thread {

    /* renamed from: d  reason: collision with root package name */
    private final WeakReference f14330d;

    /* renamed from: e  reason: collision with root package name */
    private final long f14331e;

    /* renamed from: i  reason: collision with root package name */
    final CountDownLatch f14332i = new CountDownLatch(1);

    /* renamed from: o  reason: collision with root package name */
    boolean f14333o = false;

    public b(AdvertisingIdClient advertisingIdClient, long j10) {
        this.f14330d = new WeakReference(advertisingIdClient);
        this.f14331e = j10;
        start();
    }

    private final void a() {
        AdvertisingIdClient advertisingIdClient = (AdvertisingIdClient) this.f14330d.get();
        if (advertisingIdClient != null) {
            advertisingIdClient.b();
            this.f14333o = true;
        }
    }

    @Override // java.lang.Thread, java.lang.Runnable
    public final void run() {
        try {
            if (!this.f14332i.await(this.f14331e, TimeUnit.MILLISECONDS)) {
                a();
            }
        } catch (InterruptedException unused) {
            a();
        }
    }
}
