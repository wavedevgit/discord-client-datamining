package com.google.android.exoplayer2;

import android.os.SystemClock;
import com.google.android.exoplayer2.MediaItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements v0 {

    /* renamed from: a  reason: collision with root package name */
    private final float f12126a;

    /* renamed from: b  reason: collision with root package name */
    private final float f12127b;

    /* renamed from: c  reason: collision with root package name */
    private final long f12128c;

    /* renamed from: d  reason: collision with root package name */
    private final float f12129d;

    /* renamed from: e  reason: collision with root package name */
    private final long f12130e;

    /* renamed from: f  reason: collision with root package name */
    private final long f12131f;

    /* renamed from: g  reason: collision with root package name */
    private final float f12132g;

    /* renamed from: h  reason: collision with root package name */
    private long f12133h;

    /* renamed from: i  reason: collision with root package name */
    private long f12134i;

    /* renamed from: j  reason: collision with root package name */
    private long f12135j;

    /* renamed from: k  reason: collision with root package name */
    private long f12136k;

    /* renamed from: l  reason: collision with root package name */
    private long f12137l;

    /* renamed from: m  reason: collision with root package name */
    private long f12138m;

    /* renamed from: n  reason: collision with root package name */
    private float f12139n;

    /* renamed from: o  reason: collision with root package name */
    private float f12140o;

    /* renamed from: p  reason: collision with root package name */
    private float f12141p;

    /* renamed from: q  reason: collision with root package name */
    private long f12142q;

    /* renamed from: r  reason: collision with root package name */
    private long f12143r;

    /* renamed from: s  reason: collision with root package name */
    private long f12144s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private float f12145a = 0.97f;

        /* renamed from: b  reason: collision with root package name */
        private float f12146b = 1.03f;

        /* renamed from: c  reason: collision with root package name */
        private long f12147c = 1000;

        /* renamed from: d  reason: collision with root package name */
        private float f12148d = 1.0E-7f;

        /* renamed from: e  reason: collision with root package name */
        private long f12149e = ne.w0.K0(20);

        /* renamed from: f  reason: collision with root package name */
        private long f12150f = ne.w0.K0(500);

        /* renamed from: g  reason: collision with root package name */
        private float f12151g = 0.999f;

        public h a() {
            return new h(this.f12145a, this.f12146b, this.f12147c, this.f12148d, this.f12149e, this.f12150f, this.f12151g);
        }
    }

    private void f(long j10) {
        long j11 = this.f12143r + (this.f12144s * 3);
        if (this.f12138m > j11) {
            float K0 = (float) ne.w0.K0(this.f12128c);
            this.f12138m = li.g.c(j11, this.f12135j, this.f12138m - (((this.f12141p - 1.0f) * K0) + ((this.f12139n - 1.0f) * K0)));
            return;
        }
        long r10 = ne.w0.r(j10 - (Math.max(0.0f, this.f12141p - 1.0f) / this.f12129d), this.f12138m, j11);
        this.f12138m = r10;
        long j12 = this.f12137l;
        if (j12 != -9223372036854775807L && r10 > j12) {
            this.f12138m = j12;
        }
    }

    private void g() {
        long j10 = this.f12133h;
        if (j10 != -9223372036854775807L) {
            long j11 = this.f12134i;
            if (j11 != -9223372036854775807L) {
                j10 = j11;
            }
            long j12 = this.f12136k;
            if (j12 != -9223372036854775807L && j10 < j12) {
                j10 = j12;
            }
            long j13 = this.f12137l;
            if (j13 != -9223372036854775807L && j10 > j13) {
                j10 = j13;
            }
        } else {
            j10 = -9223372036854775807L;
        }
        if (this.f12135j == j10) {
            return;
        }
        this.f12135j = j10;
        this.f12138m = j10;
        this.f12143r = -9223372036854775807L;
        this.f12144s = -9223372036854775807L;
        this.f12142q = -9223372036854775807L;
    }

    private static long h(long j10, long j11, float f10) {
        return (((float) j10) * f10) + ((1.0f - f10) * ((float) j11));
    }

    private void i(long j10, long j11) {
        long j12 = j10 - j11;
        long j13 = this.f12143r;
        if (j13 == -9223372036854775807L) {
            this.f12143r = j12;
            this.f12144s = 0L;
            return;
        }
        long max = Math.max(j12, h(j13, j12, this.f12132g));
        this.f12143r = max;
        this.f12144s = h(this.f12144s, Math.abs(j12 - max), this.f12132g);
    }

    @Override // com.google.android.exoplayer2.v0
    public void a(MediaItem.g gVar) {
        this.f12133h = ne.w0.K0(gVar.f11415d);
        this.f12136k = ne.w0.K0(gVar.f11416e);
        this.f12137l = ne.w0.K0(gVar.f11417i);
        float f10 = gVar.f11418o;
        if (f10 == -3.4028235E38f) {
            f10 = this.f12126a;
        }
        this.f12140o = f10;
        float f11 = gVar.f11419p;
        if (f11 == -3.4028235E38f) {
            f11 = this.f12127b;
        }
        this.f12139n = f11;
        if (f10 == 1.0f && f11 == 1.0f) {
            this.f12133h = -9223372036854775807L;
        }
        g();
    }

    @Override // com.google.android.exoplayer2.v0
    public float b(long j10, long j11) {
        if (this.f12133h == -9223372036854775807L) {
            return 1.0f;
        }
        i(j10, j11);
        if (this.f12142q != -9223372036854775807L && SystemClock.elapsedRealtime() - this.f12142q < this.f12128c) {
            return this.f12141p;
        }
        this.f12142q = SystemClock.elapsedRealtime();
        f(j10);
        long j12 = j10 - this.f12138m;
        if (Math.abs(j12) < this.f12130e) {
            this.f12141p = 1.0f;
        } else {
            this.f12141p = ne.w0.p((this.f12129d * ((float) j12)) + 1.0f, this.f12140o, this.f12139n);
        }
        return this.f12141p;
    }

    @Override // com.google.android.exoplayer2.v0
    public long c() {
        return this.f12138m;
    }

    @Override // com.google.android.exoplayer2.v0
    public void d() {
        long j10 = this.f12138m;
        if (j10 == -9223372036854775807L) {
            return;
        }
        long j11 = j10 + this.f12131f;
        this.f12138m = j11;
        long j12 = this.f12137l;
        if (j12 != -9223372036854775807L && j11 > j12) {
            this.f12138m = j12;
        }
        this.f12142q = -9223372036854775807L;
    }

    @Override // com.google.android.exoplayer2.v0
    public void e(long j10) {
        this.f12134i = j10;
        g();
    }

    private h(float f10, float f11, long j10, float f12, long j11, long j12, float f13) {
        this.f12126a = f10;
        this.f12127b = f11;
        this.f12128c = j10;
        this.f12129d = f12;
        this.f12130e = j11;
        this.f12131f = j12;
        this.f12132g = f13;
        this.f12133h = -9223372036854775807L;
        this.f12134i = -9223372036854775807L;
        this.f12136k = -9223372036854775807L;
        this.f12137l = -9223372036854775807L;
        this.f12140o = f10;
        this.f12139n = f11;
        this.f12141p = 1.0f;
        this.f12142q = -9223372036854775807L;
        this.f12135j = -9223372036854775807L;
        this.f12138m = -9223372036854775807L;
        this.f12143r = -9223372036854775807L;
        this.f12144s = -9223372036854775807L;
    }
}
