package com.google.android.gms.net;

import android.content.Context;
import android.os.SystemClock;
import java.util.concurrent.ThreadLocalRandom;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements AutoCloseable {

    /* renamed from: i  reason: collision with root package name */
    private final int f15155i;

    /* renamed from: o  reason: collision with root package name */
    private final Context f15156o;

    /* renamed from: p  reason: collision with root package name */
    private final float f15157p;

    /* renamed from: q  reason: collision with root package name */
    private int f15158q = 13;

    /* renamed from: d  reason: collision with root package name */
    private final long f15153d = System.currentTimeMillis();

    /* renamed from: e  reason: collision with root package name */
    private final long f15154e = SystemClock.uptimeMillis();

    public d(Context context, int i10, float f10) {
        this.f15155i = i10;
        this.f15156o = context;
        this.f15157p = f10;
    }

    public final void a() {
        this.f15158q = 0;
    }

    @Override // java.lang.AutoCloseable
    public final void close() {
        c a10 = c.a(this.f15156o);
        int i10 = this.f15158q;
        long currentTimeMillis = System.currentTimeMillis();
        long uptimeMillis = SystemClock.uptimeMillis() - this.f15154e;
        if (ThreadLocalRandom.current().nextFloat() < this.f15157p) {
            int i11 = (int) uptimeMillis;
            a10.b(this.f15155i, i10, this.f15153d, currentTimeMillis, i11);
        }
    }
}
