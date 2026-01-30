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
    private final a f13265a;

    /* renamed from: b  reason: collision with root package name */
    private final long[] f13266b;

    /* renamed from: c  reason: collision with root package name */
    private AudioTrack f13267c;

    /* renamed from: d  reason: collision with root package name */
    private int f13268d;

    /* renamed from: e  reason: collision with root package name */
    private int f13269e;

    /* renamed from: f  reason: collision with root package name */
    private g f13270f;

    /* renamed from: g  reason: collision with root package name */
    private int f13271g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f13272h;

    /* renamed from: i  reason: collision with root package name */
    private long f13273i;

    /* renamed from: j  reason: collision with root package name */
    private float f13274j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f13275k;

    /* renamed from: l  reason: collision with root package name */
    private long f13276l;

    /* renamed from: m  reason: collision with root package name */
    private long f13277m;

    /* renamed from: n  reason: collision with root package name */
    private Method f13278n;

    /* renamed from: o  reason: collision with root package name */
    private long f13279o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f13280p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f13281q;

    /* renamed from: r  reason: collision with root package name */
    private long f13282r;

    /* renamed from: s  reason: collision with root package name */
    private long f13283s;

    /* renamed from: t  reason: collision with root package name */
    private long f13284t;

    /* renamed from: u  reason: collision with root package name */
    private long f13285u;

    /* renamed from: v  reason: collision with root package name */
    private long f13286v;

    /* renamed from: w  reason: collision with root package name */
    private int f13287w;

    /* renamed from: x  reason: collision with root package name */
    private int f13288x;

    /* renamed from: y  reason: collision with root package name */
    private long f13289y;

    /* renamed from: z  reason: collision with root package name */
    private long f13290z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(int i10, long j10);

        void b(long j10);

        void c(long j10);

        void d(long j10, long j11, long j12, long j13);

        void e(long j10, long j11, long j12, long j13);
    }

    public h(a aVar) {
        this.f13265a = (a) ne.a.e(aVar);
        if (w0.f40295a >= 18) {
            try {
                this.f13278n = AudioTrack.class.getMethod("getLatency", null);
            } catch (NoSuchMethodException unused) {
            }
        }
        this.f13266b = new long[10];
    }

    private boolean a() {
        if (this.f13272h && ((AudioTrack) ne.a.e(this.f13267c)).getPlayState() == 2 && d() == 0) {
            return true;
        }
        return false;
    }

    private long d() {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        long j10 = this.f13289y;
        if (j10 != -9223372036854775807L) {
            return Math.min(this.B, this.A + w0.B(w0.e0((elapsedRealtime * 1000) - j10, this.f13274j), this.f13271g));
        }
        if (elapsedRealtime - this.f13283s >= 5) {
            u(elapsedRealtime);
            this.f13283s = elapsedRealtime;
        }
        return this.f13284t + (this.f13285u << 32);
    }

    private long e() {
        return w0.W0(d(), this.f13271g);
    }

    private void k(long j10) {
        g gVar = (g) ne.a.e(this.f13270f);
        if (!gVar.e(j10)) {
            return;
        }
        long c10 = gVar.c();
        long b10 = gVar.b();
        long e10 = e();
        if (Math.abs(c10 - j10) > 5000000) {
            this.f13265a.e(b10, c10, j10, e10);
            gVar.f();
        } else if (Math.abs(w0.W0(b10, this.f13271g) - e10) > 5000000) {
            this.f13265a.d(b10, c10, j10, e10);
            gVar.f();
        } else {
            gVar.a();
        }
    }

    private void l() {
        long nanoTime = System.nanoTime() / 1000;
        if (nanoTime - this.f13277m >= 30000) {
            long e10 = e();
            if (e10 != 0) {
                this.f13266b[this.f13287w] = w0.j0(e10, this.f13274j) - nanoTime;
                this.f13287w = (this.f13287w + 1) % 10;
                int i10 = this.f13288x;
                if (i10 < 10) {
                    this.f13288x = i10 + 1;
                }
                this.f13277m = nanoTime;
                this.f13276l = 0L;
                int i11 = 0;
                while (true) {
                    int i12 = this.f13288x;
                    if (i11 >= i12) {
                        break;
                    }
                    this.f13276l += this.f13266b[i11] / i12;
                    i11++;
                }
            } else {
                return;
            }
        }
        if (this.f13272h) {
            return;
        }
        k(nanoTime);
        m(nanoTime);
    }

    private void m(long j10) {
        Method method;
        if (this.f13281q && (method = this.f13278n) != null && j10 - this.f13282r >= 500000) {
            try {
                long intValue = (((Integer) w0.j((Integer) method.invoke(ne.a.e(this.f13267c), null))).intValue() * 1000) - this.f13273i;
                this.f13279o = intValue;
                long max = Math.max(intValue, 0L);
                this.f13279o = max;
                if (max > 5000000) {
                    this.f13265a.c(max);
                    this.f13279o = 0L;
                }
            } catch (Exception unused) {
                this.f13278n = null;
            }
            this.f13282r = j10;
        }
    }

    private static boolean n(int i10) {
        if (w0.f40295a < 23) {
            if (i10 == 5 || i10 == 6) {
                return true;
            }
            return false;
        }
        return false;
    }

    private void q() {
        this.f13276l = 0L;
        this.f13288x = 0;
        this.f13287w = 0;
        this.f13277m = 0L;
        this.D = 0L;
        this.G = 0L;
        this.f13275k = false;
    }

    private void u(long j10) {
        AudioTrack audioTrack;
        int playState = ((AudioTrack) ne.a.e(this.f13267c)).getPlayState();
        if (playState != 1) {
            long playbackHeadPosition = audioTrack.getPlaybackHeadPosition() & 4294967295L;
            if (this.f13272h) {
                if (playState == 2 && playbackHeadPosition == 0) {
                    this.f13286v = this.f13284t;
                }
                playbackHeadPosition += this.f13286v;
            }
            if (w0.f40295a <= 29) {
                if (playbackHeadPosition == 0 && this.f13284t > 0 && playState == 3) {
                    if (this.f13290z == -9223372036854775807L) {
                        this.f13290z = j10;
                        return;
                    }
                    return;
                }
                this.f13290z = -9223372036854775807L;
            }
            if (this.f13284t > playbackHeadPosition) {
                this.f13285u++;
            }
            this.f13284t = playbackHeadPosition;
        }
    }

    public int b(long j10) {
        return this.f13269e - ((int) (j10 - (d() * this.f13268d)));
    }

    public long c(boolean z10) {
        long e02;
        if (((AudioTrack) ne.a.e(this.f13267c)).getPlayState() == 3) {
            l();
        }
        long nanoTime = System.nanoTime() / 1000;
        g gVar = (g) ne.a.e(this.f13270f);
        boolean d10 = gVar.d();
        if (d10) {
            e02 = w0.W0(gVar.b(), this.f13271g) + w0.e0(nanoTime - gVar.c(), this.f13274j);
        } else {
            if (this.f13288x == 0) {
                e02 = e();
            } else {
                e02 = w0.e0(this.f13276l + nanoTime, this.f13274j);
            }
            if (!z10) {
                e02 = Math.max(0L, e02 - this.f13279o);
            }
        }
        if (this.E != d10) {
            this.G = this.D;
            this.F = this.C;
        }
        long j10 = nanoTime - this.G;
        if (j10 < 1000000) {
            long j11 = (j10 * 1000) / 1000000;
            e02 = ((e02 * j11) + ((1000 - j11) * (this.F + w0.e0(j10, this.f13274j)))) / 1000;
        }
        if (!this.f13275k) {
            long j12 = this.C;
            if (e02 > j12) {
                this.f13275k = true;
                this.f13265a.b(System.currentTimeMillis() - w0.p1(w0.j0(w0.p1(e02 - j12), this.f13274j)));
            }
        }
        this.D = nanoTime;
        this.C = e02;
        this.E = d10;
        return e02;
    }

    public void f(long j10) {
        this.A = d();
        this.f13289y = SystemClock.elapsedRealtime() * 1000;
        this.B = j10;
    }

    public boolean g(long j10) {
        if (j10 <= w0.B(c(false), this.f13271g) && !a()) {
            return false;
        }
        return true;
    }

    public boolean h() {
        if (((AudioTrack) ne.a.e(this.f13267c)).getPlayState() == 3) {
            return true;
        }
        return false;
    }

    public boolean i(long j10) {
        if (this.f13290z != -9223372036854775807L && j10 > 0 && SystemClock.elapsedRealtime() - this.f13290z >= 200) {
            return true;
        }
        return false;
    }

    public boolean j(long j10) {
        int playState = ((AudioTrack) ne.a.e(this.f13267c)).getPlayState();
        if (this.f13272h) {
            if (playState == 2) {
                this.f13280p = false;
                return false;
            } else if (playState == 1 && d() == 0) {
                return false;
            }
        }
        boolean z10 = this.f13280p;
        boolean g10 = g(j10);
        this.f13280p = g10;
        if (z10 && !g10 && playState != 1) {
            this.f13265a.a(this.f13269e, w0.p1(this.f13273i));
        }
        return true;
    }

    public boolean o() {
        q();
        if (this.f13289y == -9223372036854775807L) {
            ((g) ne.a.e(this.f13270f)).g();
            return true;
        }
        return false;
    }

    public void p() {
        q();
        this.f13267c = null;
        this.f13270f = null;
    }

    public void r(AudioTrack audioTrack, boolean z10, int i10, int i11, int i12) {
        boolean z11;
        long j10;
        this.f13267c = audioTrack;
        this.f13268d = i11;
        this.f13269e = i12;
        this.f13270f = new g(audioTrack);
        this.f13271g = audioTrack.getSampleRate();
        if (z10 && n(i10)) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f13272h = z11;
        boolean E0 = w0.E0(i10);
        this.f13281q = E0;
        if (E0) {
            j10 = w0.W0(i12 / i11, this.f13271g);
        } else {
            j10 = -9223372036854775807L;
        }
        this.f13273i = j10;
        this.f13284t = 0L;
        this.f13285u = 0L;
        this.f13286v = 0L;
        this.f13280p = false;
        this.f13289y = -9223372036854775807L;
        this.f13290z = -9223372036854775807L;
        this.f13282r = 0L;
        this.f13279o = 0L;
        this.f13274j = 1.0f;
    }

    public void s(float f10) {
        this.f13274j = f10;
        g gVar = this.f13270f;
        if (gVar != null) {
            gVar.g();
        }
        q();
    }

    public void t() {
        ((g) ne.a.e(this.f13270f)).g();
    }
}
