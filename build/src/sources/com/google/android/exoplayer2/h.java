package com.google.android.exoplayer2;

import android.os.SystemClock;
import com.google.android.exoplayer2.MediaItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements v0 {

    /* renamed from: a  reason: collision with root package name */
    private final float f12612a;

    /* renamed from: b  reason: collision with root package name */
    private final float f12613b;

    /* renamed from: c  reason: collision with root package name */
    private final long f12614c;

    /* renamed from: d  reason: collision with root package name */
    private final float f12615d;

    /* renamed from: e  reason: collision with root package name */
    private final long f12616e;

    /* renamed from: f  reason: collision with root package name */
    private final long f12617f;

    /* renamed from: g  reason: collision with root package name */
    private final float f12618g;

    /* renamed from: h  reason: collision with root package name */
    private long f12619h;

    /* renamed from: i  reason: collision with root package name */
    private long f12620i;

    /* renamed from: j  reason: collision with root package name */
    private long f12621j;

    /* renamed from: k  reason: collision with root package name */
    private long f12622k;

    /* renamed from: l  reason: collision with root package name */
    private long f12623l;

    /* renamed from: m  reason: collision with root package name */
    private long f12624m;

    /* renamed from: n  reason: collision with root package name */
    private float f12625n;

    /* renamed from: o  reason: collision with root package name */
    private float f12626o;

    /* renamed from: p  reason: collision with root package name */
    private float f12627p;

    /* renamed from: q  reason: collision with root package name */
    private long f12628q;

    /* renamed from: r  reason: collision with root package name */
    private long f12629r;

    /* renamed from: s  reason: collision with root package name */
    private long f12630s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private float f12631a = 0.97f;

        /* renamed from: b  reason: collision with root package name */
        private float f12632b = 1.03f;

        /* renamed from: c  reason: collision with root package name */
        private long f12633c = 1000;

        /* renamed from: d  reason: collision with root package name */
        private float f12634d = 1.0E-7f;

        /* renamed from: e  reason: collision with root package name */
        private long f12635e = oe.w0.K0(20);

        /* renamed from: f  reason: collision with root package name */
        private long f12636f = oe.w0.K0(500);

        /* renamed from: g  reason: collision with root package name */
        private float f12637g = 0.999f;

        public h a() {
            return new h(this.f12631a, this.f12632b, this.f12633c, this.f12634d, this.f12635e, this.f12636f, this.f12637g);
        }
    }

    private void f(long j10) {
        long j11 = this.f12629r + (this.f12630s * 3);
        if (this.f12624m > j11) {
            float K0 = (float) oe.w0.K0(this.f12614c);
            this.f12624m = qi.g.c(j11, this.f12621j, this.f12624m - (((this.f12627p - 1.0f) * K0) + ((this.f12625n - 1.0f) * K0)));
            return;
        }
        long r10 = oe.w0.r(j10 - (Math.max(0.0f, this.f12627p - 1.0f) / this.f12615d), this.f12624m, j11);
        this.f12624m = r10;
        long j12 = this.f12623l;
        if (j12 != -9223372036854775807L && r10 > j12) {
            this.f12624m = j12;
        }
    }

    private void g() {
        long j10 = this.f12619h;
        if (j10 != -9223372036854775807L) {
            long j11 = this.f12620i;
            if (j11 != -9223372036854775807L) {
                j10 = j11;
            }
            long j12 = this.f12622k;
            if (j12 != -9223372036854775807L && j10 < j12) {
                j10 = j12;
            }
            long j13 = this.f12623l;
            if (j13 != -9223372036854775807L && j10 > j13) {
                j10 = j13;
            }
        } else {
            j10 = -9223372036854775807L;
        }
        if (this.f12621j == j10) {
            return;
        }
        this.f12621j = j10;
        this.f12624m = j10;
        this.f12629r = -9223372036854775807L;
        this.f12630s = -9223372036854775807L;
        this.f12628q = -9223372036854775807L;
    }

    private static long h(long j10, long j11, float f10) {
        return (((float) j10) * f10) + ((1.0f - f10) * ((float) j11));
    }

    private void i(long j10, long j11) {
        long j12 = j10 - j11;
        long j13 = this.f12629r;
        if (j13 == -9223372036854775807L) {
            this.f12629r = j12;
            this.f12630s = 0L;
            return;
        }
        long max = Math.max(j12, h(j13, j12, this.f12618g));
        this.f12629r = max;
        this.f12630s = h(this.f12630s, Math.abs(j12 - max), this.f12618g);
    }

    @Override // com.google.android.exoplayer2.v0
    public void a(MediaItem.g gVar) {
        this.f12619h = oe.w0.K0(gVar.f11839d);
        this.f12622k = oe.w0.K0(gVar.f11840e);
        this.f12623l = oe.w0.K0(gVar.f11841i);
        float f10 = gVar.f11842o;
        if (f10 == -3.4028235E38f) {
            f10 = this.f12612a;
        }
        this.f12626o = f10;
        float f11 = gVar.f11843p;
        if (f11 == -3.4028235E38f) {
            f11 = this.f12613b;
        }
        this.f12625n = f11;
        if (f10 == 1.0f && f11 == 1.0f) {
            this.f12619h = -9223372036854775807L;
        }
        g();
    }

    @Override // com.google.android.exoplayer2.v0
    public float b(long j10, long j11) {
        if (this.f12619h == -9223372036854775807L) {
            return 1.0f;
        }
        i(j10, j11);
        if (this.f12628q != -9223372036854775807L && SystemClock.elapsedRealtime() - this.f12628q < this.f12614c) {
            return this.f12627p;
        }
        this.f12628q = SystemClock.elapsedRealtime();
        f(j10);
        long j12 = j10 - this.f12624m;
        if (Math.abs(j12) < this.f12616e) {
            this.f12627p = 1.0f;
        } else {
            this.f12627p = oe.w0.p((this.f12615d * ((float) j12)) + 1.0f, this.f12626o, this.f12625n);
        }
        return this.f12627p;
    }

    @Override // com.google.android.exoplayer2.v0
    public long c() {
        return this.f12624m;
    }

    @Override // com.google.android.exoplayer2.v0
    public void d() {
        long j10 = this.f12624m;
        if (j10 == -9223372036854775807L) {
            return;
        }
        long j11 = j10 + this.f12617f;
        this.f12624m = j11;
        long j12 = this.f12623l;
        if (j12 != -9223372036854775807L && j11 > j12) {
            this.f12624m = j12;
        }
        this.f12628q = -9223372036854775807L;
    }

    @Override // com.google.android.exoplayer2.v0
    public void e(long j10) {
        this.f12620i = j10;
        g();
    }

    private h(float f10, float f11, long j10, float f12, long j11, long j12, float f13) {
        this.f12612a = f10;
        this.f12613b = f11;
        this.f12614c = j10;
        this.f12615d = f12;
        this.f12616e = j11;
        this.f12617f = j12;
        this.f12618g = f13;
        this.f12619h = -9223372036854775807L;
        this.f12620i = -9223372036854775807L;
        this.f12622k = -9223372036854775807L;
        this.f12623l = -9223372036854775807L;
        this.f12626o = f10;
        this.f12625n = f11;
        this.f12627p = 1.0f;
        this.f12628q = -9223372036854775807L;
        this.f12621j = -9223372036854775807L;
        this.f12624m = -9223372036854775807L;
        this.f12629r = -9223372036854775807L;
        this.f12630s = -9223372036854775807L;
    }
}
