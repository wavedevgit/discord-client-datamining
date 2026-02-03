package com.google.android.exoplayer2;

import android.os.SystemClock;
import com.google.android.exoplayer2.MediaItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements v0 {

    /* renamed from: a  reason: collision with root package name */
    private final float f13158a;

    /* renamed from: b  reason: collision with root package name */
    private final float f13159b;

    /* renamed from: c  reason: collision with root package name */
    private final long f13160c;

    /* renamed from: d  reason: collision with root package name */
    private final float f13161d;

    /* renamed from: e  reason: collision with root package name */
    private final long f13162e;

    /* renamed from: f  reason: collision with root package name */
    private final long f13163f;

    /* renamed from: g  reason: collision with root package name */
    private final float f13164g;

    /* renamed from: h  reason: collision with root package name */
    private long f13165h;

    /* renamed from: i  reason: collision with root package name */
    private long f13166i;

    /* renamed from: j  reason: collision with root package name */
    private long f13167j;

    /* renamed from: k  reason: collision with root package name */
    private long f13168k;

    /* renamed from: l  reason: collision with root package name */
    private long f13169l;

    /* renamed from: m  reason: collision with root package name */
    private long f13170m;

    /* renamed from: n  reason: collision with root package name */
    private float f13171n;

    /* renamed from: o  reason: collision with root package name */
    private float f13172o;

    /* renamed from: p  reason: collision with root package name */
    private float f13173p;

    /* renamed from: q  reason: collision with root package name */
    private long f13174q;

    /* renamed from: r  reason: collision with root package name */
    private long f13175r;

    /* renamed from: s  reason: collision with root package name */
    private long f13176s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private float f13177a = 0.97f;

        /* renamed from: b  reason: collision with root package name */
        private float f13178b = 1.03f;

        /* renamed from: c  reason: collision with root package name */
        private long f13179c = 1000;

        /* renamed from: d  reason: collision with root package name */
        private float f13180d = 1.0E-7f;

        /* renamed from: e  reason: collision with root package name */
        private long f13181e = ne.w0.K0(20);

        /* renamed from: f  reason: collision with root package name */
        private long f13182f = ne.w0.K0(500);

        /* renamed from: g  reason: collision with root package name */
        private float f13183g = 0.999f;

        public h a() {
            return new h(this.f13177a, this.f13178b, this.f13179c, this.f13180d, this.f13181e, this.f13182f, this.f13183g);
        }
    }

    private void f(long j10) {
        long j11 = this.f13175r + (this.f13176s * 3);
        if (this.f13170m > j11) {
            float K0 = (float) ne.w0.K0(this.f13160c);
            this.f13170m = li.g.c(j11, this.f13167j, this.f13170m - (((this.f13173p - 1.0f) * K0) + ((this.f13171n - 1.0f) * K0)));
            return;
        }
        long r10 = ne.w0.r(j10 - (Math.max(0.0f, this.f13173p - 1.0f) / this.f13161d), this.f13170m, j11);
        this.f13170m = r10;
        long j12 = this.f13169l;
        if (j12 != -9223372036854775807L && r10 > j12) {
            this.f13170m = j12;
        }
    }

    private void g() {
        long j10 = this.f13165h;
        if (j10 != -9223372036854775807L) {
            long j11 = this.f13166i;
            if (j11 != -9223372036854775807L) {
                j10 = j11;
            }
            long j12 = this.f13168k;
            if (j12 != -9223372036854775807L && j10 < j12) {
                j10 = j12;
            }
            long j13 = this.f13169l;
            if (j13 != -9223372036854775807L && j10 > j13) {
                j10 = j13;
            }
        } else {
            j10 = -9223372036854775807L;
        }
        if (this.f13167j == j10) {
            return;
        }
        this.f13167j = j10;
        this.f13170m = j10;
        this.f13175r = -9223372036854775807L;
        this.f13176s = -9223372036854775807L;
        this.f13174q = -9223372036854775807L;
    }

    private static long h(long j10, long j11, float f10) {
        return (((float) j10) * f10) + ((1.0f - f10) * ((float) j11));
    }

    private void i(long j10, long j11) {
        long j12 = j10 - j11;
        long j13 = this.f13175r;
        if (j13 == -9223372036854775807L) {
            this.f13175r = j12;
            this.f13176s = 0L;
            return;
        }
        long max = Math.max(j12, h(j13, j12, this.f13164g));
        this.f13175r = max;
        this.f13176s = h(this.f13176s, Math.abs(j12 - max), this.f13164g);
    }

    @Override // com.google.android.exoplayer2.v0
    public void a(MediaItem.g gVar) {
        this.f13165h = ne.w0.K0(gVar.f12447d);
        this.f13168k = ne.w0.K0(gVar.f12448e);
        this.f13169l = ne.w0.K0(gVar.f12449i);
        float f10 = gVar.f12450o;
        if (f10 == -3.4028235E38f) {
            f10 = this.f13158a;
        }
        this.f13172o = f10;
        float f11 = gVar.f12451p;
        if (f11 == -3.4028235E38f) {
            f11 = this.f13159b;
        }
        this.f13171n = f11;
        if (f10 == 1.0f && f11 == 1.0f) {
            this.f13165h = -9223372036854775807L;
        }
        g();
    }

    @Override // com.google.android.exoplayer2.v0
    public float b(long j10, long j11) {
        if (this.f13165h == -9223372036854775807L) {
            return 1.0f;
        }
        i(j10, j11);
        if (this.f13174q != -9223372036854775807L && SystemClock.elapsedRealtime() - this.f13174q < this.f13160c) {
            return this.f13173p;
        }
        this.f13174q = SystemClock.elapsedRealtime();
        f(j10);
        long j12 = j10 - this.f13170m;
        if (Math.abs(j12) < this.f13162e) {
            this.f13173p = 1.0f;
        } else {
            this.f13173p = ne.w0.p((this.f13161d * ((float) j12)) + 1.0f, this.f13172o, this.f13171n);
        }
        return this.f13173p;
    }

    @Override // com.google.android.exoplayer2.v0
    public long c() {
        return this.f13170m;
    }

    @Override // com.google.android.exoplayer2.v0
    public void d() {
        long j10 = this.f13170m;
        if (j10 == -9223372036854775807L) {
            return;
        }
        long j11 = j10 + this.f13163f;
        this.f13170m = j11;
        long j12 = this.f13169l;
        if (j12 != -9223372036854775807L && j11 > j12) {
            this.f13170m = j12;
        }
        this.f13174q = -9223372036854775807L;
    }

    @Override // com.google.android.exoplayer2.v0
    public void e(long j10) {
        this.f13166i = j10;
        g();
    }

    private h(float f10, float f11, long j10, float f12, long j11, long j12, float f13) {
        this.f13158a = f10;
        this.f13159b = f11;
        this.f13160c = j10;
        this.f13161d = f12;
        this.f13162e = j11;
        this.f13163f = j12;
        this.f13164g = f13;
        this.f13165h = -9223372036854775807L;
        this.f13166i = -9223372036854775807L;
        this.f13168k = -9223372036854775807L;
        this.f13169l = -9223372036854775807L;
        this.f13172o = f10;
        this.f13171n = f11;
        this.f13173p = 1.0f;
        this.f13174q = -9223372036854775807L;
        this.f13167j = -9223372036854775807L;
        this.f13170m = -9223372036854775807L;
        this.f13175r = -9223372036854775807L;
        this.f13176s = -9223372036854775807L;
    }
}
