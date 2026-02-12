package com.google.android.exoplayer2;

import android.os.SystemClock;
import com.google.android.exoplayer2.MediaItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements v0 {

    /* renamed from: a  reason: collision with root package name */
    private final float f13190a;

    /* renamed from: b  reason: collision with root package name */
    private final float f13191b;

    /* renamed from: c  reason: collision with root package name */
    private final long f13192c;

    /* renamed from: d  reason: collision with root package name */
    private final float f13193d;

    /* renamed from: e  reason: collision with root package name */
    private final long f13194e;

    /* renamed from: f  reason: collision with root package name */
    private final long f13195f;

    /* renamed from: g  reason: collision with root package name */
    private final float f13196g;

    /* renamed from: h  reason: collision with root package name */
    private long f13197h;

    /* renamed from: i  reason: collision with root package name */
    private long f13198i;

    /* renamed from: j  reason: collision with root package name */
    private long f13199j;

    /* renamed from: k  reason: collision with root package name */
    private long f13200k;

    /* renamed from: l  reason: collision with root package name */
    private long f13201l;

    /* renamed from: m  reason: collision with root package name */
    private long f13202m;

    /* renamed from: n  reason: collision with root package name */
    private float f13203n;

    /* renamed from: o  reason: collision with root package name */
    private float f13204o;

    /* renamed from: p  reason: collision with root package name */
    private float f13205p;

    /* renamed from: q  reason: collision with root package name */
    private long f13206q;

    /* renamed from: r  reason: collision with root package name */
    private long f13207r;

    /* renamed from: s  reason: collision with root package name */
    private long f13208s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private float f13209a = 0.97f;

        /* renamed from: b  reason: collision with root package name */
        private float f13210b = 1.03f;

        /* renamed from: c  reason: collision with root package name */
        private long f13211c = 1000;

        /* renamed from: d  reason: collision with root package name */
        private float f13212d = 1.0E-7f;

        /* renamed from: e  reason: collision with root package name */
        private long f13213e = oe.w0.K0(20);

        /* renamed from: f  reason: collision with root package name */
        private long f13214f = oe.w0.K0(500);

        /* renamed from: g  reason: collision with root package name */
        private float f13215g = 0.999f;

        public h a() {
            return new h(this.f13209a, this.f13210b, this.f13211c, this.f13212d, this.f13213e, this.f13214f, this.f13215g);
        }
    }

    private void f(long j10) {
        long j11 = this.f13207r + (this.f13208s * 3);
        if (this.f13202m > j11) {
            float K0 = (float) oe.w0.K0(this.f13192c);
            this.f13202m = si.g.c(j11, this.f13199j, this.f13202m - (((this.f13205p - 1.0f) * K0) + ((this.f13203n - 1.0f) * K0)));
            return;
        }
        long r10 = oe.w0.r(j10 - (Math.max(0.0f, this.f13205p - 1.0f) / this.f13193d), this.f13202m, j11);
        this.f13202m = r10;
        long j12 = this.f13201l;
        if (j12 != -9223372036854775807L && r10 > j12) {
            this.f13202m = j12;
        }
    }

    private void g() {
        long j10 = this.f13197h;
        if (j10 != -9223372036854775807L) {
            long j11 = this.f13198i;
            if (j11 != -9223372036854775807L) {
                j10 = j11;
            }
            long j12 = this.f13200k;
            if (j12 != -9223372036854775807L && j10 < j12) {
                j10 = j12;
            }
            long j13 = this.f13201l;
            if (j13 != -9223372036854775807L && j10 > j13) {
                j10 = j13;
            }
        } else {
            j10 = -9223372036854775807L;
        }
        if (this.f13199j == j10) {
            return;
        }
        this.f13199j = j10;
        this.f13202m = j10;
        this.f13207r = -9223372036854775807L;
        this.f13208s = -9223372036854775807L;
        this.f13206q = -9223372036854775807L;
    }

    private static long h(long j10, long j11, float f10) {
        return (((float) j10) * f10) + ((1.0f - f10) * ((float) j11));
    }

    private void i(long j10, long j11) {
        long j12 = j10 - j11;
        long j13 = this.f13207r;
        if (j13 == -9223372036854775807L) {
            this.f13207r = j12;
            this.f13208s = 0L;
            return;
        }
        long max = Math.max(j12, h(j13, j12, this.f13196g));
        this.f13207r = max;
        this.f13208s = h(this.f13208s, Math.abs(j12 - max), this.f13196g);
    }

    @Override // com.google.android.exoplayer2.v0
    public void a(MediaItem.g gVar) {
        this.f13197h = oe.w0.K0(gVar.f12417d);
        this.f13200k = oe.w0.K0(gVar.f12418e);
        this.f13201l = oe.w0.K0(gVar.f12419i);
        float f10 = gVar.f12420o;
        if (f10 == -3.4028235E38f) {
            f10 = this.f13190a;
        }
        this.f13204o = f10;
        float f11 = gVar.f12421p;
        if (f11 == -3.4028235E38f) {
            f11 = this.f13191b;
        }
        this.f13203n = f11;
        if (f10 == 1.0f && f11 == 1.0f) {
            this.f13197h = -9223372036854775807L;
        }
        g();
    }

    @Override // com.google.android.exoplayer2.v0
    public float b(long j10, long j11) {
        if (this.f13197h == -9223372036854775807L) {
            return 1.0f;
        }
        i(j10, j11);
        if (this.f13206q != -9223372036854775807L && SystemClock.elapsedRealtime() - this.f13206q < this.f13192c) {
            return this.f13205p;
        }
        this.f13206q = SystemClock.elapsedRealtime();
        f(j10);
        long j12 = j10 - this.f13202m;
        if (Math.abs(j12) < this.f13194e) {
            this.f13205p = 1.0f;
        } else {
            this.f13205p = oe.w0.p((this.f13193d * ((float) j12)) + 1.0f, this.f13204o, this.f13203n);
        }
        return this.f13205p;
    }

    @Override // com.google.android.exoplayer2.v0
    public long c() {
        return this.f13202m;
    }

    @Override // com.google.android.exoplayer2.v0
    public void d() {
        long j10 = this.f13202m;
        if (j10 == -9223372036854775807L) {
            return;
        }
        long j11 = j10 + this.f13195f;
        this.f13202m = j11;
        long j12 = this.f13201l;
        if (j12 != -9223372036854775807L && j11 > j12) {
            this.f13202m = j12;
        }
        this.f13206q = -9223372036854775807L;
    }

    @Override // com.google.android.exoplayer2.v0
    public void e(long j10) {
        this.f13198i = j10;
        g();
    }

    private h(float f10, float f11, long j10, float f12, long j11, long j12, float f13) {
        this.f13190a = f10;
        this.f13191b = f11;
        this.f13192c = j10;
        this.f13193d = f12;
        this.f13194e = j11;
        this.f13195f = j12;
        this.f13196g = f13;
        this.f13197h = -9223372036854775807L;
        this.f13198i = -9223372036854775807L;
        this.f13200k = -9223372036854775807L;
        this.f13201l = -9223372036854775807L;
        this.f13204o = f10;
        this.f13203n = f11;
        this.f13205p = 1.0f;
        this.f13206q = -9223372036854775807L;
        this.f13199j = -9223372036854775807L;
        this.f13202m = -9223372036854775807L;
        this.f13207r = -9223372036854775807L;
        this.f13208s = -9223372036854775807L;
    }
}
