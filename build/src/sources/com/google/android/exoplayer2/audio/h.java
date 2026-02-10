package com.google.android.exoplayer2.audio;

import android.media.AudioTrack;
import android.os.SystemClock;
import java.lang.reflect.Method;
import oe.w0;
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
    private final a f12863a;

    /* renamed from: b  reason: collision with root package name */
    private final long[] f12864b;

    /* renamed from: c  reason: collision with root package name */
    private AudioTrack f12865c;

    /* renamed from: d  reason: collision with root package name */
    private int f12866d;

    /* renamed from: e  reason: collision with root package name */
    private int f12867e;

    /* renamed from: f  reason: collision with root package name */
    private g f12868f;

    /* renamed from: g  reason: collision with root package name */
    private int f12869g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f12870h;

    /* renamed from: i  reason: collision with root package name */
    private long f12871i;

    /* renamed from: j  reason: collision with root package name */
    private float f12872j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12873k;

    /* renamed from: l  reason: collision with root package name */
    private long f12874l;

    /* renamed from: m  reason: collision with root package name */
    private long f12875m;

    /* renamed from: n  reason: collision with root package name */
    private Method f12876n;

    /* renamed from: o  reason: collision with root package name */
    private long f12877o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f12878p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f12879q;

    /* renamed from: r  reason: collision with root package name */
    private long f12880r;

    /* renamed from: s  reason: collision with root package name */
    private long f12881s;

    /* renamed from: t  reason: collision with root package name */
    private long f12882t;

    /* renamed from: u  reason: collision with root package name */
    private long f12883u;

    /* renamed from: v  reason: collision with root package name */
    private long f12884v;

    /* renamed from: w  reason: collision with root package name */
    private int f12885w;

    /* renamed from: x  reason: collision with root package name */
    private int f12886x;

    /* renamed from: y  reason: collision with root package name */
    private long f12887y;

    /* renamed from: z  reason: collision with root package name */
    private long f12888z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(int i10, long j10);

        void b(long j10);

        void c(long j10);

        void d(long j10, long j11, long j12, long j13);

        void e(long j10, long j11, long j12, long j13);
    }

    public h(a aVar) {
        this.f12863a = (a) oe.a.e(aVar);
        if (w0.f39037a >= 18) {
            try {
                this.f12876n = AudioTrack.class.getMethod("getLatency", null);
            } catch (NoSuchMethodException unused) {
            }
        }
        this.f12864b = new long[10];
    }

    private boolean a() {
        if (this.f12870h && ((AudioTrack) oe.a.e(this.f12865c)).getPlayState() == 2 && d() == 0) {
            return true;
        }
        return false;
    }

    private long d() {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        long j10 = this.f12887y;
        if (j10 != -9223372036854775807L) {
            return Math.min(this.B, this.A + w0.B(w0.e0((elapsedRealtime * 1000) - j10, this.f12872j), this.f12869g));
        }
        if (elapsedRealtime - this.f12881s >= 5) {
            u(elapsedRealtime);
            this.f12881s = elapsedRealtime;
        }
        return this.f12882t + (this.f12883u << 32);
    }

    private long e() {
        return w0.W0(d(), this.f12869g);
    }

    private void k(long j10) {
        g gVar = (g) oe.a.e(this.f12868f);
        if (!gVar.e(j10)) {
            return;
        }
        long c10 = gVar.c();
        long b10 = gVar.b();
        long e10 = e();
        if (Math.abs(c10 - j10) > 5000000) {
            this.f12863a.e(b10, c10, j10, e10);
            gVar.f();
        } else if (Math.abs(w0.W0(b10, this.f12869g) - e10) > 5000000) {
            this.f12863a.d(b10, c10, j10, e10);
            gVar.f();
        } else {
            gVar.a();
        }
    }

    private void l() {
        long nanoTime = System.nanoTime() / 1000;
        if (nanoTime - this.f12875m >= 30000) {
            long e10 = e();
            if (e10 != 0) {
                this.f12864b[this.f12885w] = w0.j0(e10, this.f12872j) - nanoTime;
                this.f12885w = (this.f12885w + 1) % 10;
                int i10 = this.f12886x;
                if (i10 < 10) {
                    this.f12886x = i10 + 1;
                }
                this.f12875m = nanoTime;
                this.f12874l = 0L;
                int i11 = 0;
                while (true) {
                    int i12 = this.f12886x;
                    if (i11 >= i12) {
                        break;
                    }
                    this.f12874l += this.f12864b[i11] / i12;
                    i11++;
                }
            } else {
                return;
            }
        }
        if (this.f12870h) {
            return;
        }
        k(nanoTime);
        m(nanoTime);
    }

    private void m(long j10) {
        Method method;
        if (this.f12879q && (method = this.f12876n) != null && j10 - this.f12880r >= 500000) {
            try {
                long intValue = (((Integer) w0.j((Integer) method.invoke(oe.a.e(this.f12865c), null))).intValue() * 1000) - this.f12871i;
                this.f12877o = intValue;
                long max = Math.max(intValue, 0L);
                this.f12877o = max;
                if (max > 5000000) {
                    this.f12863a.c(max);
                    this.f12877o = 0L;
                }
            } catch (Exception unused) {
                this.f12876n = null;
            }
            this.f12880r = j10;
        }
    }

    private static boolean n(int i10) {
        if (w0.f39037a < 23) {
            if (i10 == 5 || i10 == 6) {
                return true;
            }
            return false;
        }
        return false;
    }

    private void q() {
        this.f12874l = 0L;
        this.f12886x = 0;
        this.f12885w = 0;
        this.f12875m = 0L;
        this.D = 0L;
        this.G = 0L;
        this.f12873k = false;
    }

    private void u(long j10) {
        AudioTrack audioTrack;
        int playState = ((AudioTrack) oe.a.e(this.f12865c)).getPlayState();
        if (playState != 1) {
            long playbackHeadPosition = audioTrack.getPlaybackHeadPosition() & 4294967295L;
            if (this.f12870h) {
                if (playState == 2 && playbackHeadPosition == 0) {
                    this.f12884v = this.f12882t;
                }
                playbackHeadPosition += this.f12884v;
            }
            if (w0.f39037a <= 29) {
                if (playbackHeadPosition == 0 && this.f12882t > 0 && playState == 3) {
                    if (this.f12888z == -9223372036854775807L) {
                        this.f12888z = j10;
                        return;
                    }
                    return;
                }
                this.f12888z = -9223372036854775807L;
            }
            if (this.f12882t > playbackHeadPosition) {
                this.f12883u++;
            }
            this.f12882t = playbackHeadPosition;
        }
    }

    public int b(long j10) {
        return this.f12867e - ((int) (j10 - (d() * this.f12866d)));
    }

    public long c(boolean z10) {
        long e02;
        if (((AudioTrack) oe.a.e(this.f12865c)).getPlayState() == 3) {
            l();
        }
        long nanoTime = System.nanoTime() / 1000;
        g gVar = (g) oe.a.e(this.f12868f);
        boolean d10 = gVar.d();
        if (d10) {
            e02 = w0.W0(gVar.b(), this.f12869g) + w0.e0(nanoTime - gVar.c(), this.f12872j);
        } else {
            if (this.f12886x == 0) {
                e02 = e();
            } else {
                e02 = w0.e0(this.f12874l + nanoTime, this.f12872j);
            }
            if (!z10) {
                e02 = Math.max(0L, e02 - this.f12877o);
            }
        }
        if (this.E != d10) {
            this.G = this.D;
            this.F = this.C;
        }
        long j10 = nanoTime - this.G;
        if (j10 < 1000000) {
            long j11 = (j10 * 1000) / 1000000;
            e02 = ((e02 * j11) + ((1000 - j11) * (this.F + w0.e0(j10, this.f12872j)))) / 1000;
        }
        if (!this.f12873k) {
            long j12 = this.C;
            if (e02 > j12) {
                this.f12873k = true;
                this.f12863a.b(System.currentTimeMillis() - w0.p1(w0.j0(w0.p1(e02 - j12), this.f12872j)));
            }
        }
        this.D = nanoTime;
        this.C = e02;
        this.E = d10;
        return e02;
    }

    public void f(long j10) {
        this.A = d();
        this.f12887y = SystemClock.elapsedRealtime() * 1000;
        this.B = j10;
    }

    public boolean g(long j10) {
        if (j10 <= w0.B(c(false), this.f12869g) && !a()) {
            return false;
        }
        return true;
    }

    public boolean h() {
        if (((AudioTrack) oe.a.e(this.f12865c)).getPlayState() == 3) {
            return true;
        }
        return false;
    }

    public boolean i(long j10) {
        if (this.f12888z != -9223372036854775807L && j10 > 0 && SystemClock.elapsedRealtime() - this.f12888z >= 200) {
            return true;
        }
        return false;
    }

    public boolean j(long j10) {
        int playState = ((AudioTrack) oe.a.e(this.f12865c)).getPlayState();
        if (this.f12870h) {
            if (playState == 2) {
                this.f12878p = false;
                return false;
            } else if (playState == 1 && d() == 0) {
                return false;
            }
        }
        boolean z10 = this.f12878p;
        boolean g10 = g(j10);
        this.f12878p = g10;
        if (z10 && !g10 && playState != 1) {
            this.f12863a.a(this.f12867e, w0.p1(this.f12871i));
        }
        return true;
    }

    public boolean o() {
        q();
        if (this.f12887y == -9223372036854775807L) {
            ((g) oe.a.e(this.f12868f)).g();
            return true;
        }
        return false;
    }

    public void p() {
        q();
        this.f12865c = null;
        this.f12868f = null;
    }

    public void r(AudioTrack audioTrack, boolean z10, int i10, int i11, int i12) {
        boolean z11;
        long j10;
        this.f12865c = audioTrack;
        this.f12866d = i11;
        this.f12867e = i12;
        this.f12868f = new g(audioTrack);
        this.f12869g = audioTrack.getSampleRate();
        if (z10 && n(i10)) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f12870h = z11;
        boolean E0 = w0.E0(i10);
        this.f12879q = E0;
        if (E0) {
            j10 = w0.W0(i12 / i11, this.f12869g);
        } else {
            j10 = -9223372036854775807L;
        }
        this.f12871i = j10;
        this.f12882t = 0L;
        this.f12883u = 0L;
        this.f12884v = 0L;
        this.f12878p = false;
        this.f12887y = -9223372036854775807L;
        this.f12888z = -9223372036854775807L;
        this.f12880r = 0L;
        this.f12877o = 0L;
        this.f12872j = 1.0f;
    }

    public void s(float f10) {
        this.f12872j = f10;
        g gVar = this.f12868f;
        if (gVar != null) {
            gVar.g();
        }
        q();
    }

    public void t() {
        ((g) oe.a.e(this.f12868f)).g();
    }
}
