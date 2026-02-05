package com.google.android.exoplayer2.audio;

import android.media.AudioTrack;
import android.os.SystemClock;
import java.lang.reflect.Method;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h {
    private long A;
    private long B;
    private long C;
    private long D;
    private boolean E;
    private long F;
    private long G;

    /* renamed from: a  reason: collision with root package name */
    private final a f12247a;

    /* renamed from: b  reason: collision with root package name */
    private final long[] f12248b;

    /* renamed from: c  reason: collision with root package name */
    private AudioTrack f12249c;

    /* renamed from: d  reason: collision with root package name */
    private int f12250d;

    /* renamed from: e  reason: collision with root package name */
    private int f12251e;

    /* renamed from: f  reason: collision with root package name */
    private g f12252f;

    /* renamed from: g  reason: collision with root package name */
    private int f12253g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f12254h;

    /* renamed from: i  reason: collision with root package name */
    private long f12255i;

    /* renamed from: j  reason: collision with root package name */
    private float f12256j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12257k;

    /* renamed from: l  reason: collision with root package name */
    private long f12258l;

    /* renamed from: m  reason: collision with root package name */
    private long f12259m;

    /* renamed from: n  reason: collision with root package name */
    private Method f12260n;

    /* renamed from: o  reason: collision with root package name */
    private long f12261o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f12262p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f12263q;

    /* renamed from: r  reason: collision with root package name */
    private long f12264r;

    /* renamed from: s  reason: collision with root package name */
    private long f12265s;

    /* renamed from: t  reason: collision with root package name */
    private long f12266t;

    /* renamed from: u  reason: collision with root package name */
    private long f12267u;

    /* renamed from: v  reason: collision with root package name */
    private long f12268v;

    /* renamed from: w  reason: collision with root package name */
    private int f12269w;

    /* renamed from: x  reason: collision with root package name */
    private int f12270x;

    /* renamed from: y  reason: collision with root package name */
    private long f12271y;

    /* renamed from: z  reason: collision with root package name */
    private long f12272z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(int i10, long j10);

        void b(long j10);

        void c(long j10);

        void d(long j10, long j11, long j12, long j13);

        void e(long j10, long j11, long j12, long j13);
    }

    public h(a aVar) {
        this.f12247a = (a) ne.a.e(aVar);
        if (w0.f39657a >= 18) {
            try {
                this.f12260n = AudioTrack.class.getMethod("getLatency", null);
            } catch (NoSuchMethodException unused) {
            }
        }
        this.f12248b = new long[10];
    }

    private boolean a() {
        if (this.f12254h && ((AudioTrack) ne.a.e(this.f12249c)).getPlayState() == 2 && d() == 0) {
            return true;
        }
        return false;
    }

    private long d() {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        long j10 = this.f12271y;
        if (j10 != -9223372036854775807L) {
            return Math.min(this.B, this.A + w0.B(w0.e0((elapsedRealtime * 1000) - j10, this.f12256j), this.f12253g));
        }
        if (elapsedRealtime - this.f12265s >= 5) {
            u(elapsedRealtime);
            this.f12265s = elapsedRealtime;
        }
        return this.f12266t + (this.f12267u << 32);
    }

    private long e() {
        return w0.W0(d(), this.f12253g);
    }

    private void k(long j10) {
        g gVar = (g) ne.a.e(this.f12252f);
        if (!gVar.e(j10)) {
            return;
        }
        long c10 = gVar.c();
        long b10 = gVar.b();
        long e10 = e();
        if (Math.abs(c10 - j10) > 5000000) {
            this.f12247a.e(b10, c10, j10, e10);
            gVar.f();
        } else if (Math.abs(w0.W0(b10, this.f12253g) - e10) > 5000000) {
            this.f12247a.d(b10, c10, j10, e10);
            gVar.f();
        } else {
            gVar.a();
        }
    }

    private void l() {
        long nanoTime = System.nanoTime() / 1000;
        if (nanoTime - this.f12259m >= 30000) {
            long e10 = e();
            if (e10 != 0) {
                this.f12248b[this.f12269w] = w0.j0(e10, this.f12256j) - nanoTime;
                this.f12269w = (this.f12269w + 1) % 10;
                int i10 = this.f12270x;
                if (i10 < 10) {
                    this.f12270x = i10 + 1;
                }
                this.f12259m = nanoTime;
                this.f12258l = 0L;
                int i11 = 0;
                while (true) {
                    int i12 = this.f12270x;
                    if (i11 >= i12) {
                        break;
                    }
                    this.f12258l += this.f12248b[i11] / i12;
                    i11++;
                }
            } else {
                return;
            }
        }
        if (this.f12254h) {
            return;
        }
        k(nanoTime);
        m(nanoTime);
    }

    private void m(long j10) {
        Method method;
        if (this.f12263q && (method = this.f12260n) != null && j10 - this.f12264r >= 500000) {
            try {
                long intValue = (((Integer) w0.j((Integer) method.invoke(ne.a.e(this.f12249c), null))).intValue() * 1000) - this.f12255i;
                this.f12261o = intValue;
                long max = Math.max(intValue, 0L);
                this.f12261o = max;
                if (max > 5000000) {
                    this.f12247a.c(max);
                    this.f12261o = 0L;
                }
            } catch (Exception unused) {
                this.f12260n = null;
            }
            this.f12264r = j10;
        }
    }

    private static boolean n(int i10) {
        if (w0.f39657a < 23) {
            if (i10 == 5 || i10 == 6) {
                return true;
            }
            return false;
        }
        return false;
    }

    private void q() {
        this.f12258l = 0L;
        this.f12270x = 0;
        this.f12269w = 0;
        this.f12259m = 0L;
        this.D = 0L;
        this.G = 0L;
        this.f12257k = false;
    }

    private void u(long j10) {
        AudioTrack audioTrack;
        int playState = ((AudioTrack) ne.a.e(this.f12249c)).getPlayState();
        if (playState != 1) {
            long playbackHeadPosition = audioTrack.getPlaybackHeadPosition() & 4294967295L;
            if (this.f12254h) {
                if (playState == 2 && playbackHeadPosition == 0) {
                    this.f12268v = this.f12266t;
                }
                playbackHeadPosition += this.f12268v;
            }
            if (w0.f39657a <= 29) {
                if (playbackHeadPosition == 0 && this.f12266t > 0 && playState == 3) {
                    if (this.f12272z == -9223372036854775807L) {
                        this.f12272z = j10;
                        return;
                    }
                    return;
                }
                this.f12272z = -9223372036854775807L;
            }
            if (this.f12266t > playbackHeadPosition) {
                this.f12267u++;
            }
            this.f12266t = playbackHeadPosition;
        }
    }

    public int b(long j10) {
        return this.f12251e - ((int) (j10 - (d() * this.f12250d)));
    }

    public long c(boolean z10) {
        long e02;
        if (((AudioTrack) ne.a.e(this.f12249c)).getPlayState() == 3) {
            l();
        }
        long nanoTime = System.nanoTime() / 1000;
        g gVar = (g) ne.a.e(this.f12252f);
        boolean d10 = gVar.d();
        if (d10) {
            e02 = w0.W0(gVar.b(), this.f12253g) + w0.e0(nanoTime - gVar.c(), this.f12256j);
        } else {
            if (this.f12270x == 0) {
                e02 = e();
            } else {
                e02 = w0.e0(this.f12258l + nanoTime, this.f12256j);
            }
            if (!z10) {
                e02 = Math.max(0L, e02 - this.f12261o);
            }
        }
        if (this.E != d10) {
            this.G = this.D;
            this.F = this.C;
        }
        long j10 = nanoTime - this.G;
        if (j10 < 1000000) {
            long j11 = (j10 * 1000) / 1000000;
            e02 = ((e02 * j11) + ((1000 - j11) * (this.F + w0.e0(j10, this.f12256j)))) / 1000;
        }
        if (!this.f12257k) {
            long j12 = this.C;
            if (e02 > j12) {
                this.f12257k = true;
                this.f12247a.b(System.currentTimeMillis() - w0.p1(w0.j0(w0.p1(e02 - j12), this.f12256j)));
            }
        }
        this.D = nanoTime;
        this.C = e02;
        this.E = d10;
        return e02;
    }

    public void f(long j10) {
        this.A = d();
        this.f12271y = SystemClock.elapsedRealtime() * 1000;
        this.B = j10;
    }

    public boolean g(long j10) {
        if (j10 <= w0.B(c(false), this.f12253g) && !a()) {
            return false;
        }
        return true;
    }

    public boolean h() {
        if (((AudioTrack) ne.a.e(this.f12249c)).getPlayState() == 3) {
            return true;
        }
        return false;
    }

    public boolean i(long j10) {
        if (this.f12272z != -9223372036854775807L && j10 > 0 && SystemClock.elapsedRealtime() - this.f12272z >= 200) {
            return true;
        }
        return false;
    }

    public boolean j(long j10) {
        int playState = ((AudioTrack) ne.a.e(this.f12249c)).getPlayState();
        if (this.f12254h) {
            if (playState == 2) {
                this.f12262p = false;
                return false;
            } else if (playState == 1 && d() == 0) {
                return false;
            }
        }
        boolean z10 = this.f12262p;
        boolean g10 = g(j10);
        this.f12262p = g10;
        if (z10 && !g10 && playState != 1) {
            this.f12247a.a(this.f12251e, w0.p1(this.f12255i));
        }
        return true;
    }

    public boolean o() {
        q();
        if (this.f12271y == -9223372036854775807L) {
            ((g) ne.a.e(this.f12252f)).g();
            return true;
        }
        return false;
    }

    public void p() {
        q();
        this.f12249c = null;
        this.f12252f = null;
    }

    public void r(AudioTrack audioTrack, boolean z10, int i10, int i11, int i12) {
        boolean z11;
        long j10;
        this.f12249c = audioTrack;
        this.f12250d = i11;
        this.f12251e = i12;
        this.f12252f = new g(audioTrack);
        this.f12253g = audioTrack.getSampleRate();
        if (z10 && n(i10)) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f12254h = z11;
        boolean E0 = w0.E0(i10);
        this.f12263q = E0;
        if (E0) {
            j10 = w0.W0(i12 / i11, this.f12253g);
        } else {
            j10 = -9223372036854775807L;
        }
        this.f12255i = j10;
        this.f12266t = 0L;
        this.f12267u = 0L;
        this.f12268v = 0L;
        this.f12262p = false;
        this.f12271y = -9223372036854775807L;
        this.f12272z = -9223372036854775807L;
        this.f12264r = 0L;
        this.f12261o = 0L;
        this.f12256j = 1.0f;
    }

    public void s(float f10) {
        this.f12256j = f10;
        g gVar = this.f12252f;
        if (gVar != null) {
            gVar.g();
        }
        q();
    }

    public void t() {
        ((g) ne.a.e(this.f12252f)).g();
    }
}
