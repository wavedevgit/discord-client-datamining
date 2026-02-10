package com.google.android.gms.net;

import android.content.Context;
import android.os.SystemClock;
import java.util.concurrent.ThreadLocalRandom;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements AutoCloseable {

    /* renamed from: i  reason: collision with root package name */
    private final int f14578i;

    /* renamed from: o  reason: collision with root package name */
    private final Context f14579o;

    /* renamed from: p  reason: collision with root package name */
    private final float f14580p;

    /* renamed from: q  reason: collision with root package name */
    private int f14581q = 13;

    /* renamed from: d  reason: collision with root package name */
    private final long f14576d = System.currentTimeMillis();

    /* renamed from: e  reason: collision with root package name */
    private final long f14577e = SystemClock.uptimeMillis();

    public d(Context context, int i10, float f10) {
        this.f14578i = i10;
        this.f14579o = context;
        this.f14580p = f10;
    }

    public final void a() {
        this.f14581q = 0;
    }

    @Override // java.lang.AutoCloseable
    public final void close() {
        c a10 = c.a(this.f14579o);
        int i10 = this.f14581q;
        long currentTimeMillis = System.currentTimeMillis();
        long uptimeMillis = SystemClock.uptimeMillis() - this.f14577e;
        if (ThreadLocalRandom.current().nextFloat() < this.f14580p) {
            int i11 = (int) uptimeMillis;
            a10.b(this.f14578i, i10, this.f14576d, currentTimeMillis, i11);
        }
    }
}
