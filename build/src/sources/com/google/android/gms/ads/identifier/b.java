package com.google.android.gms.ads.identifier;

import java.lang.ref.WeakReference;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends Thread {

    /* renamed from: d  reason: collision with root package name */
    private final WeakReference f14361d;

    /* renamed from: e  reason: collision with root package name */
    private final long f14362e;

    /* renamed from: i  reason: collision with root package name */
    final CountDownLatch f14363i = new CountDownLatch(1);

    /* renamed from: o  reason: collision with root package name */
    boolean f14364o = false;

    public b(AdvertisingIdClient advertisingIdClient, long j10) {
        this.f14361d = new WeakReference(advertisingIdClient);
        this.f14362e = j10;
        start();
    }

    private final void a() {
        AdvertisingIdClient advertisingIdClient = (AdvertisingIdClient) this.f14361d.get();
        if (advertisingIdClient != null) {
            advertisingIdClient.b();
            this.f14364o = true;
        }
    }

    @Override // java.lang.Thread, java.lang.Runnable
    public final void run() {
        try {
            if (!this.f14363i.await(this.f14362e, TimeUnit.MILLISECONDS)) {
                a();
            }
        } catch (InterruptedException unused) {
            a();
        }
    }
}
