package com.google.android.exoplayer2;

import android.os.SystemClock;
import com.google.android.exoplayer2.MediaItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements v0 {

    /* renamed from: a  reason: collision with root package name */
    private final float f12472a;

    /* renamed from: b  reason: collision with root package name */
    private final float f12473b;

    /* renamed from: c  reason: collision with root package name */
    private final long f12474c;

    /* renamed from: d  reason: collision with root package name */
    private final float f12475d;

    /* renamed from: e  reason: collision with root package name */
    private final long f12476e;

    /* renamed from: f  reason: collision with root package name */
    private final long f12477f;

    /* renamed from: g  reason: collision with root package name */
    private final float f12478g;

    /* renamed from: h  reason: collision with root package name */
    private long f12479h;

    /* renamed from: i  reason: collision with root package name */
    private long f12480i;

    /* renamed from: j  reason: collision with root package name */
    private long f12481j;

    /* renamed from: k  reason: collision with root package name */
    private long f12482k;

    /* renamed from: l  reason: collision with root package name */
    private long f12483l;

    /* renamed from: m  reason: collision with root package name */
    private long f12484m;

    /* renamed from: n  reason: collision with root package name */
    private float f12485n;

    /* renamed from: o  reason: collision with root package name */
    private float f12486o;

    /* renamed from: p  reason: collision with root package name */
    private float f12487p;

    /* renamed from: q  reason: collision with root package name */
    private long f12488q;

    /* renamed from: r  reason: collision with root package name */
    private long f12489r;

    /* renamed from: s  reason: collision with root package name */
    private long f12490s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private float f12491a = 0.97f;

        /* renamed from: b  reason: collision with root package name */
        private float f12492b = 1.03f;

        /* renamed from: c  reason: collision with root package name */
        private long f12493c = 1000;

        /* renamed from: d  reason: collision with root package name */
        private float f12494d = 1.0E-7f;

        /* renamed from: e  reason: collision with root package name */
        private long f12495e = ne.w0.K0(20);

        /* renamed from: f  reason: collision with root package name */
        private long f12496f = ne.w0.K0(500);

        /* renamed from: g  reason: collision with root package name */
        private float f12497g = 0.999f;

        public h a() {
            return new h(this.f12491a, this.f12492b, this.f12493c, this.f12494d, this.f12495e, this.f12496f, this.f12497g);
        }
    }

    private void f(long j10) {
        long j11 = this.f12489r + (this.f12490s * 3);
        if (this.f12484m > j11) {
            float K0 = (float) ne.w0.K0(this.f12474c);
            this.f12484m = pi.g.c(j11, this.f12481j, this.f12484m - (((this.f12487p - 1.0f) * K0) + ((this.f12485n - 1.0f) * K0)));
            return;
        }
        long r10 = ne.w0.r(j10 - (Math.max(0.0f, this.f12487p - 1.0f) / this.f12475d), this.f12484m, j11);
        this.f12484m = r10;
        long j12 = this.f12483l;
        if (j12 != -9223372036854775807L && r10 > j12) {
            this.f12484m = j12;
        }
    }

    private void g() {
        long j10 = this.f12479h;
        if (j10 != -9223372036854775807L) {
            long j11 = this.f12480i;
            if (j11 != -9223372036854775807L) {
                j10 = j11;
            }
            long j12 = this.f12482k;
            if (j12 != -9223372036854775807L && j10 < j12) {
                j10 = j12;
            }
            long j13 = this.f12483l;
            if (j13 != -9223372036854775807L && j10 > j13) {
                j10 = j13;
            }
        } else {
            j10 = -9223372036854775807L;
        }
        if (this.f12481j == j10) {
            return;
        }
        this.f12481j = j10;
        this.f12484m = j10;
        this.f12489r = -9223372036854775807L;
        this.f12490s = -9223372036854775807L;
        this.f12488q = -9223372036854775807L;
    }

    private static long h(long j10, long j11, float f10) {
        return (((float) j10) * f10) + ((1.0f - f10) * ((float) j11));
    }

    private void i(long j10, long j11) {
        long j12 = j10 - j11;
        long j13 = this.f12489r;
        if (j13 == -9223372036854775807L) {
            this.f12489r = j12;
            this.f12490s = 0L;
            return;
        }
        long max = Math.max(j12, h(j13, j12, this.f12478g));
        this.f12489r = max;
        this.f12490s = h(this.f12490s, Math.abs(j12 - max), this.f12478g);
    }

    @Override // com.google.android.exoplayer2.v0
    public void a(MediaItem.g gVar) {
        this.f12479h = ne.w0.K0(gVar.f11699d);
        this.f12482k = ne.w0.K0(gVar.f11700e);
        this.f12483l = ne.w0.K0(gVar.f11701i);
        float f10 = gVar.f11702o;
        if (f10 == -3.4028235E38f) {
            f10 = this.f12472a;
        }
        this.f12486o = f10;
        float f11 = gVar.f11703p;
        if (f11 == -3.4028235E38f) {
            f11 = this.f12473b;
        }
        this.f12485n = f11;
        if (f10 == 1.0f && f11 == 1.0f) {
            this.f12479h = -9223372036854775807L;
        }
        g();
    }

    @Override // com.google.android.exoplayer2.v0
    public float b(long j10, long j11) {
        if (this.f12479h == -9223372036854775807L) {
            return 1.0f;
        }
        i(j10, j11);
        if (this.f12488q != -9223372036854775807L && SystemClock.elapsedRealtime() - this.f12488q < this.f12474c) {
            return this.f12487p;
        }
        this.f12488q = SystemClock.elapsedRealtime();
        f(j10);
        long j12 = j10 - this.f12484m;
        if (Math.abs(j12) < this.f12476e) {
            this.f12487p = 1.0f;
        } else {
            this.f12487p = ne.w0.p((this.f12475d * ((float) j12)) + 1.0f, this.f12486o, this.f12485n);
        }
        return this.f12487p;
    }

    @Override // com.google.android.exoplayer2.v0
    public long c() {
        return this.f12484m;
    }

    @Override // com.google.android.exoplayer2.v0
    public void d() {
        long j10 = this.f12484m;
        if (j10 == -9223372036854775807L) {
            return;
        }
        long j11 = j10 + this.f12477f;
        this.f12484m = j11;
        long j12 = this.f12483l;
        if (j12 != -9223372036854775807L && j11 > j12) {
            this.f12484m = j12;
        }
        this.f12488q = -9223372036854775807L;
    }

    @Override // com.google.android.exoplayer2.v0
    public void e(long j10) {
        this.f12480i = j10;
        g();
    }

    private h(float f10, float f11, long j10, float f12, long j11, long j12, float f13) {
        this.f12472a = f10;
        this.f12473b = f11;
        this.f12474c = j10;
        this.f12475d = f12;
        this.f12476e = j11;
        this.f12477f = j12;
        this.f12478g = f13;
        this.f12479h = -9223372036854775807L;
        this.f12480i = -9223372036854775807L;
        this.f12482k = -9223372036854775807L;
        this.f12483l = -9223372036854775807L;
        this.f12486o = f10;
        this.f12485n = f11;
        this.f12487p = 1.0f;
        this.f12488q = -9223372036854775807L;
        this.f12481j = -9223372036854775807L;
        this.f12484m = -9223372036854775807L;
        this.f12489r = -9223372036854775807L;
        this.f12490s = -9223372036854775807L;
    }
}
