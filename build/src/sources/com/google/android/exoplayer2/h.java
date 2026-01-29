package com.google.android.exoplayer2;

import android.os.SystemClock;
import com.google.android.exoplayer2.MediaItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements v0 {

    /* renamed from: a  reason: collision with root package name */
    private final float f13529a;

    /* renamed from: b  reason: collision with root package name */
    private final float f13530b;

    /* renamed from: c  reason: collision with root package name */
    private final long f13531c;

    /* renamed from: d  reason: collision with root package name */
    private final float f13532d;

    /* renamed from: e  reason: collision with root package name */
    private final long f13533e;

    /* renamed from: f  reason: collision with root package name */
    private final long f13534f;

    /* renamed from: g  reason: collision with root package name */
    private final float f13535g;

    /* renamed from: h  reason: collision with root package name */
    private long f13536h;

    /* renamed from: i  reason: collision with root package name */
    private long f13537i;

    /* renamed from: j  reason: collision with root package name */
    private long f13538j;

    /* renamed from: k  reason: collision with root package name */
    private long f13539k;

    /* renamed from: l  reason: collision with root package name */
    private long f13540l;

    /* renamed from: m  reason: collision with root package name */
    private long f13541m;

    /* renamed from: n  reason: collision with root package name */
    private float f13542n;

    /* renamed from: o  reason: collision with root package name */
    private float f13543o;

    /* renamed from: p  reason: collision with root package name */
    private float f13544p;

    /* renamed from: q  reason: collision with root package name */
    private long f13545q;

    /* renamed from: r  reason: collision with root package name */
    private long f13546r;

    /* renamed from: s  reason: collision with root package name */
    private long f13547s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private float f13548a = 0.97f;

        /* renamed from: b  reason: collision with root package name */
        private float f13549b = 1.03f;

        /* renamed from: c  reason: collision with root package name */
        private long f13550c = 1000;

        /* renamed from: d  reason: collision with root package name */
        private float f13551d = 1.0E-7f;

        /* renamed from: e  reason: collision with root package name */
        private long f13552e = ne.w0.K0(20);

        /* renamed from: f  reason: collision with root package name */
        private long f13553f = ne.w0.K0(500);

        /* renamed from: g  reason: collision with root package name */
        private float f13554g = 0.999f;

        public h a() {
            return new h(this.f13548a, this.f13549b, this.f13550c, this.f13551d, this.f13552e, this.f13553f, this.f13554g);
        }
    }

    private void f(long j10) {
        long j11 = this.f13546r + (this.f13547s * 3);
        if (this.f13541m > j11) {
            float K0 = (float) ne.w0.K0(this.f13531c);
            this.f13541m = li.g.c(j11, this.f13538j, this.f13541m - (((this.f13544p - 1.0f) * K0) + ((this.f13542n - 1.0f) * K0)));
            return;
        }
        long r10 = ne.w0.r(j10 - (Math.max(0.0f, this.f13544p - 1.0f) / this.f13532d), this.f13541m, j11);
        this.f13541m = r10;
        long j12 = this.f13540l;
        if (j12 != -9223372036854775807L && r10 > j12) {
            this.f13541m = j12;
        }
    }

    private void g() {
        long j10 = this.f13536h;
        if (j10 != -9223372036854775807L) {
            long j11 = this.f13537i;
            if (j11 != -9223372036854775807L) {
                j10 = j11;
            }
            long j12 = this.f13539k;
            if (j12 != -9223372036854775807L && j10 < j12) {
                j10 = j12;
            }
            long j13 = this.f13540l;
            if (j13 != -9223372036854775807L && j10 > j13) {
                j10 = j13;
            }
        } else {
            j10 = -9223372036854775807L;
        }
        if (this.f13538j == j10) {
            return;
        }
        this.f13538j = j10;
        this.f13541m = j10;
        this.f13546r = -9223372036854775807L;
        this.f13547s = -9223372036854775807L;
        this.f13545q = -9223372036854775807L;
    }

    private static long h(long j10, long j11, float f10) {
        return (((float) j10) * f10) + ((1.0f - f10) * ((float) j11));
    }

    private void i(long j10, long j11) {
        long j12 = j10 - j11;
        long j13 = this.f13546r;
        if (j13 == -9223372036854775807L) {
            this.f13546r = j12;
            this.f13547s = 0L;
            return;
        }
        long max = Math.max(j12, h(j13, j12, this.f13535g));
        this.f13546r = max;
        this.f13547s = h(this.f13547s, Math.abs(j12 - max), this.f13535g);
    }

    @Override // com.google.android.exoplayer2.v0
    public void a(MediaItem.g gVar) {
        this.f13536h = ne.w0.K0(gVar.f12818d);
        this.f13539k = ne.w0.K0(gVar.f12819e);
        this.f13540l = ne.w0.K0(gVar.f12820i);
        float f10 = gVar.f12821o;
        if (f10 == -3.4028235E38f) {
            f10 = this.f13529a;
        }
        this.f13543o = f10;
        float f11 = gVar.f12822p;
        if (f11 == -3.4028235E38f) {
            f11 = this.f13530b;
        }
        this.f13542n = f11;
        if (f10 == 1.0f && f11 == 1.0f) {
            this.f13536h = -9223372036854775807L;
        }
        g();
    }

    @Override // com.google.android.exoplayer2.v0
    public float b(long j10, long j11) {
        if (this.f13536h == -9223372036854775807L) {
            return 1.0f;
        }
        i(j10, j11);
        if (this.f13545q != -9223372036854775807L && SystemClock.elapsedRealtime() - this.f13545q < this.f13531c) {
            return this.f13544p;
        }
        this.f13545q = SystemClock.elapsedRealtime();
        f(j10);
        long j12 = j10 - this.f13541m;
        if (Math.abs(j12) < this.f13533e) {
            this.f13544p = 1.0f;
        } else {
            this.f13544p = ne.w0.p((this.f13532d * ((float) j12)) + 1.0f, this.f13543o, this.f13542n);
        }
        return this.f13544p;
    }

    @Override // com.google.android.exoplayer2.v0
    public long c() {
        return this.f13541m;
    }

    @Override // com.google.android.exoplayer2.v0
    public void d() {
        long j10 = this.f13541m;
        if (j10 == -9223372036854775807L) {
            return;
        }
        long j11 = j10 + this.f13534f;
        this.f13541m = j11;
        long j12 = this.f13540l;
        if (j12 != -9223372036854775807L && j11 > j12) {
            this.f13541m = j12;
        }
        this.f13545q = -9223372036854775807L;
    }

    @Override // com.google.android.exoplayer2.v0
    public void e(long j10) {
        this.f13537i = j10;
        g();
    }

    private h(float f10, float f11, long j10, float f12, long j11, long j12, float f13) {
        this.f13529a = f10;
        this.f13530b = f11;
        this.f13531c = j10;
        this.f13532d = f12;
        this.f13533e = j11;
        this.f13534f = j12;
        this.f13535g = f13;
        this.f13536h = -9223372036854775807L;
        this.f13537i = -9223372036854775807L;
        this.f13539k = -9223372036854775807L;
        this.f13540l = -9223372036854775807L;
        this.f13543o = f10;
        this.f13542n = f11;
        this.f13544p = 1.0f;
        this.f13545q = -9223372036854775807L;
        this.f13538j = -9223372036854775807L;
        this.f13541m = -9223372036854775807L;
        this.f13546r = -9223372036854775807L;
        this.f13547s = -9223372036854775807L;
    }
}
