package com.google.android.exoplayer2;

import android.os.SystemClock;
import com.google.android.exoplayer2.MediaItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements v0 {

    /* renamed from: a  reason: collision with root package name */
    private final float f12511a;

    /* renamed from: b  reason: collision with root package name */
    private final float f12512b;

    /* renamed from: c  reason: collision with root package name */
    private final long f12513c;

    /* renamed from: d  reason: collision with root package name */
    private final float f12514d;

    /* renamed from: e  reason: collision with root package name */
    private final long f12515e;

    /* renamed from: f  reason: collision with root package name */
    private final long f12516f;

    /* renamed from: g  reason: collision with root package name */
    private final float f12517g;

    /* renamed from: h  reason: collision with root package name */
    private long f12518h;

    /* renamed from: i  reason: collision with root package name */
    private long f12519i;

    /* renamed from: j  reason: collision with root package name */
    private long f12520j;

    /* renamed from: k  reason: collision with root package name */
    private long f12521k;

    /* renamed from: l  reason: collision with root package name */
    private long f12522l;

    /* renamed from: m  reason: collision with root package name */
    private long f12523m;

    /* renamed from: n  reason: collision with root package name */
    private float f12524n;

    /* renamed from: o  reason: collision with root package name */
    private float f12525o;

    /* renamed from: p  reason: collision with root package name */
    private float f12526p;

    /* renamed from: q  reason: collision with root package name */
    private long f12527q;

    /* renamed from: r  reason: collision with root package name */
    private long f12528r;

    /* renamed from: s  reason: collision with root package name */
    private long f12529s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private float f12530a = 0.97f;

        /* renamed from: b  reason: collision with root package name */
        private float f12531b = 1.03f;

        /* renamed from: c  reason: collision with root package name */
        private long f12532c = 1000;

        /* renamed from: d  reason: collision with root package name */
        private float f12533d = 1.0E-7f;

        /* renamed from: e  reason: collision with root package name */
        private long f12534e = ne.w0.K0(20);

        /* renamed from: f  reason: collision with root package name */
        private long f12535f = ne.w0.K0(500);

        /* renamed from: g  reason: collision with root package name */
        private float f12536g = 0.999f;

        public h a() {
            return new h(this.f12530a, this.f12531b, this.f12532c, this.f12533d, this.f12534e, this.f12535f, this.f12536g);
        }
    }

    private void f(long j10) {
        long j11 = this.f12528r + (this.f12529s * 3);
        if (this.f12523m > j11) {
            float K0 = (float) ne.w0.K0(this.f12513c);
            this.f12523m = oi.g.c(j11, this.f12520j, this.f12523m - (((this.f12526p - 1.0f) * K0) + ((this.f12524n - 1.0f) * K0)));
            return;
        }
        long r10 = ne.w0.r(j10 - (Math.max(0.0f, this.f12526p - 1.0f) / this.f12514d), this.f12523m, j11);
        this.f12523m = r10;
        long j12 = this.f12522l;
        if (j12 != -9223372036854775807L && r10 > j12) {
            this.f12523m = j12;
        }
    }

    private void g() {
        long j10 = this.f12518h;
        if (j10 != -9223372036854775807L) {
            long j11 = this.f12519i;
            if (j11 != -9223372036854775807L) {
                j10 = j11;
            }
            long j12 = this.f12521k;
            if (j12 != -9223372036854775807L && j10 < j12) {
                j10 = j12;
            }
            long j13 = this.f12522l;
            if (j13 != -9223372036854775807L && j10 > j13) {
                j10 = j13;
            }
        } else {
            j10 = -9223372036854775807L;
        }
        if (this.f12520j == j10) {
            return;
        }
        this.f12520j = j10;
        this.f12523m = j10;
        this.f12528r = -9223372036854775807L;
        this.f12529s = -9223372036854775807L;
        this.f12527q = -9223372036854775807L;
    }

    private static long h(long j10, long j11, float f10) {
        return (((float) j10) * f10) + ((1.0f - f10) * ((float) j11));
    }

    private void i(long j10, long j11) {
        long j12 = j10 - j11;
        long j13 = this.f12528r;
        if (j13 == -9223372036854775807L) {
            this.f12528r = j12;
            this.f12529s = 0L;
            return;
        }
        long max = Math.max(j12, h(j13, j12, this.f12517g));
        this.f12528r = max;
        this.f12529s = h(this.f12529s, Math.abs(j12 - max), this.f12517g);
    }

    @Override // com.google.android.exoplayer2.v0
    public void a(MediaItem.g gVar) {
        this.f12518h = ne.w0.K0(gVar.f11800d);
        this.f12521k = ne.w0.K0(gVar.f11801e);
        this.f12522l = ne.w0.K0(gVar.f11802i);
        float f10 = gVar.f11803o;
        if (f10 == -3.4028235E38f) {
            f10 = this.f12511a;
        }
        this.f12525o = f10;
        float f11 = gVar.f11804p;
        if (f11 == -3.4028235E38f) {
            f11 = this.f12512b;
        }
        this.f12524n = f11;
        if (f10 == 1.0f && f11 == 1.0f) {
            this.f12518h = -9223372036854775807L;
        }
        g();
    }

    @Override // com.google.android.exoplayer2.v0
    public float b(long j10, long j11) {
        if (this.f12518h == -9223372036854775807L) {
            return 1.0f;
        }
        i(j10, j11);
        if (this.f12527q != -9223372036854775807L && SystemClock.elapsedRealtime() - this.f12527q < this.f12513c) {
            return this.f12526p;
        }
        this.f12527q = SystemClock.elapsedRealtime();
        f(j10);
        long j12 = j10 - this.f12523m;
        if (Math.abs(j12) < this.f12515e) {
            this.f12526p = 1.0f;
        } else {
            this.f12526p = ne.w0.p((this.f12514d * ((float) j12)) + 1.0f, this.f12525o, this.f12524n);
        }
        return this.f12526p;
    }

    @Override // com.google.android.exoplayer2.v0
    public long c() {
        return this.f12523m;
    }

    @Override // com.google.android.exoplayer2.v0
    public void d() {
        long j10 = this.f12523m;
        if (j10 == -9223372036854775807L) {
            return;
        }
        long j11 = j10 + this.f12516f;
        this.f12523m = j11;
        long j12 = this.f12522l;
        if (j12 != -9223372036854775807L && j11 > j12) {
            this.f12523m = j12;
        }
        this.f12527q = -9223372036854775807L;
    }

    @Override // com.google.android.exoplayer2.v0
    public void e(long j10) {
        this.f12519i = j10;
        g();
    }

    private h(float f10, float f11, long j10, float f12, long j11, long j12, float f13) {
        this.f12511a = f10;
        this.f12512b = f11;
        this.f12513c = j10;
        this.f12514d = f12;
        this.f12515e = j11;
        this.f12516f = j12;
        this.f12517g = f13;
        this.f12518h = -9223372036854775807L;
        this.f12519i = -9223372036854775807L;
        this.f12521k = -9223372036854775807L;
        this.f12522l = -9223372036854775807L;
        this.f12525o = f10;
        this.f12524n = f11;
        this.f12526p = 1.0f;
        this.f12527q = -9223372036854775807L;
        this.f12520j = -9223372036854775807L;
        this.f12523m = -9223372036854775807L;
        this.f12528r = -9223372036854775807L;
        this.f12529s = -9223372036854775807L;
    }
}
