package com.google.android.exoplayer2;

import android.os.SystemClock;
import com.google.android.exoplayer2.MediaItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements v0 {

    /* renamed from: a  reason: collision with root package name */
    private final float f13189a;

    /* renamed from: b  reason: collision with root package name */
    private final float f13190b;

    /* renamed from: c  reason: collision with root package name */
    private final long f13191c;

    /* renamed from: d  reason: collision with root package name */
    private final float f13192d;

    /* renamed from: e  reason: collision with root package name */
    private final long f13193e;

    /* renamed from: f  reason: collision with root package name */
    private final long f13194f;

    /* renamed from: g  reason: collision with root package name */
    private final float f13195g;

    /* renamed from: h  reason: collision with root package name */
    private long f13196h;

    /* renamed from: i  reason: collision with root package name */
    private long f13197i;

    /* renamed from: j  reason: collision with root package name */
    private long f13198j;

    /* renamed from: k  reason: collision with root package name */
    private long f13199k;

    /* renamed from: l  reason: collision with root package name */
    private long f13200l;

    /* renamed from: m  reason: collision with root package name */
    private long f13201m;

    /* renamed from: n  reason: collision with root package name */
    private float f13202n;

    /* renamed from: o  reason: collision with root package name */
    private float f13203o;

    /* renamed from: p  reason: collision with root package name */
    private float f13204p;

    /* renamed from: q  reason: collision with root package name */
    private long f13205q;

    /* renamed from: r  reason: collision with root package name */
    private long f13206r;

    /* renamed from: s  reason: collision with root package name */
    private long f13207s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private float f13208a = 0.97f;

        /* renamed from: b  reason: collision with root package name */
        private float f13209b = 1.03f;

        /* renamed from: c  reason: collision with root package name */
        private long f13210c = 1000;

        /* renamed from: d  reason: collision with root package name */
        private float f13211d = 1.0E-7f;

        /* renamed from: e  reason: collision with root package name */
        private long f13212e = oe.w0.K0(20);

        /* renamed from: f  reason: collision with root package name */
        private long f13213f = oe.w0.K0(500);

        /* renamed from: g  reason: collision with root package name */
        private float f13214g = 0.999f;

        public h a() {
            return new h(this.f13208a, this.f13209b, this.f13210c, this.f13211d, this.f13212e, this.f13213f, this.f13214g);
        }
    }

    private void f(long j10) {
        long j11 = this.f13206r + (this.f13207s * 3);
        if (this.f13201m > j11) {
            float K0 = (float) oe.w0.K0(this.f13191c);
            this.f13201m = si.g.c(j11, this.f13198j, this.f13201m - (((this.f13204p - 1.0f) * K0) + ((this.f13202n - 1.0f) * K0)));
            return;
        }
        long r10 = oe.w0.r(j10 - (Math.max(0.0f, this.f13204p - 1.0f) / this.f13192d), this.f13201m, j11);
        this.f13201m = r10;
        long j12 = this.f13200l;
        if (j12 != -9223372036854775807L && r10 > j12) {
            this.f13201m = j12;
        }
    }

    private void g() {
        long j10 = this.f13196h;
        if (j10 != -9223372036854775807L) {
            long j11 = this.f13197i;
            if (j11 != -9223372036854775807L) {
                j10 = j11;
            }
            long j12 = this.f13199k;
            if (j12 != -9223372036854775807L && j10 < j12) {
                j10 = j12;
            }
            long j13 = this.f13200l;
            if (j13 != -9223372036854775807L && j10 > j13) {
                j10 = j13;
            }
        } else {
            j10 = -9223372036854775807L;
        }
        if (this.f13198j == j10) {
            return;
        }
        this.f13198j = j10;
        this.f13201m = j10;
        this.f13206r = -9223372036854775807L;
        this.f13207s = -9223372036854775807L;
        this.f13205q = -9223372036854775807L;
    }

    private static long h(long j10, long j11, float f10) {
        return (((float) j10) * f10) + ((1.0f - f10) * ((float) j11));
    }

    private void i(long j10, long j11) {
        long j12 = j10 - j11;
        long j13 = this.f13206r;
        if (j13 == -9223372036854775807L) {
            this.f13206r = j12;
            this.f13207s = 0L;
            return;
        }
        long max = Math.max(j12, h(j13, j12, this.f13195g));
        this.f13206r = max;
        this.f13207s = h(this.f13207s, Math.abs(j12 - max), this.f13195g);
    }

    @Override // com.google.android.exoplayer2.v0
    public void a(MediaItem.g gVar) {
        this.f13196h = oe.w0.K0(gVar.f12416d);
        this.f13199k = oe.w0.K0(gVar.f12417e);
        this.f13200l = oe.w0.K0(gVar.f12418i);
        float f10 = gVar.f12419o;
        if (f10 == -3.4028235E38f) {
            f10 = this.f13189a;
        }
        this.f13203o = f10;
        float f11 = gVar.f12420p;
        if (f11 == -3.4028235E38f) {
            f11 = this.f13190b;
        }
        this.f13202n = f11;
        if (f10 == 1.0f && f11 == 1.0f) {
            this.f13196h = -9223372036854775807L;
        }
        g();
    }

    @Override // com.google.android.exoplayer2.v0
    public float b(long j10, long j11) {
        if (this.f13196h == -9223372036854775807L) {
            return 1.0f;
        }
        i(j10, j11);
        if (this.f13205q != -9223372036854775807L && SystemClock.elapsedRealtime() - this.f13205q < this.f13191c) {
            return this.f13204p;
        }
        this.f13205q = SystemClock.elapsedRealtime();
        f(j10);
        long j12 = j10 - this.f13201m;
        if (Math.abs(j12) < this.f13193e) {
            this.f13204p = 1.0f;
        } else {
            this.f13204p = oe.w0.p((this.f13192d * ((float) j12)) + 1.0f, this.f13203o, this.f13202n);
        }
        return this.f13204p;
    }

    @Override // com.google.android.exoplayer2.v0
    public long c() {
        return this.f13201m;
    }

    @Override // com.google.android.exoplayer2.v0
    public void d() {
        long j10 = this.f13201m;
        if (j10 == -9223372036854775807L) {
            return;
        }
        long j11 = j10 + this.f13194f;
        this.f13201m = j11;
        long j12 = this.f13200l;
        if (j12 != -9223372036854775807L && j11 > j12) {
            this.f13201m = j12;
        }
        this.f13205q = -9223372036854775807L;
    }

    @Override // com.google.android.exoplayer2.v0
    public void e(long j10) {
        this.f13197i = j10;
        g();
    }

    private h(float f10, float f11, long j10, float f12, long j11, long j12, float f13) {
        this.f13189a = f10;
        this.f13190b = f11;
        this.f13191c = j10;
        this.f13192d = f12;
        this.f13193e = j11;
        this.f13194f = j12;
        this.f13195g = f13;
        this.f13196h = -9223372036854775807L;
        this.f13197i = -9223372036854775807L;
        this.f13199k = -9223372036854775807L;
        this.f13200l = -9223372036854775807L;
        this.f13203o = f10;
        this.f13202n = f11;
        this.f13204p = 1.0f;
        this.f13205q = -9223372036854775807L;
        this.f13198j = -9223372036854775807L;
        this.f13201m = -9223372036854775807L;
        this.f13206r = -9223372036854775807L;
        this.f13207s = -9223372036854775807L;
    }
}
