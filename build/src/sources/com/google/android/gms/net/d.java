package com.google.android.gms.net;

import android.content.Context;
import android.os.SystemClock;
import java.util.concurrent.ThreadLocalRandom;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements AutoCloseable {

    /* renamed from: i  reason: collision with root package name */
    private final int f15156i;

    /* renamed from: o  reason: collision with root package name */
    private final Context f15157o;

    /* renamed from: p  reason: collision with root package name */
    private final float f15158p;

    /* renamed from: q  reason: collision with root package name */
    private int f15159q = 13;

    /* renamed from: d  reason: collision with root package name */
    private final long f15154d = System.currentTimeMillis();

    /* renamed from: e  reason: collision with root package name */
    private final long f15155e = SystemClock.uptimeMillis();

    public d(Context context, int i10, float f10) {
        this.f15156i = i10;
        this.f15157o = context;
        this.f15158p = f10;
    }

    public final void a() {
        this.f15159q = 0;
    }

    @Override // java.lang.AutoCloseable
    public final void close() {
        c a10 = c.a(this.f15157o);
        int i10 = this.f15159q;
        long currentTimeMillis = System.currentTimeMillis();
        long uptimeMillis = SystemClock.uptimeMillis() - this.f15155e;
        if (ThreadLocalRandom.current().nextFloat() < this.f15158p) {
            int i11 = (int) uptimeMillis;
            a10.b(this.f15156i, i10, this.f15154d, currentTimeMillis, i11);
        }
    }
}
