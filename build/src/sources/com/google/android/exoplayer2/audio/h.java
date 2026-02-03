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
    private final a f11862a;

    /* renamed from: b  reason: collision with root package name */
    private final long[] f11863b;

    /* renamed from: c  reason: collision with root package name */
    private AudioTrack f11864c;

    /* renamed from: d  reason: collision with root package name */
    private int f11865d;

    /* renamed from: e  reason: collision with root package name */
    private int f11866e;

    /* renamed from: f  reason: collision with root package name */
    private g f11867f;

    /* renamed from: g  reason: collision with root package name */
    private int f11868g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f11869h;

    /* renamed from: i  reason: collision with root package name */
    private long f11870i;

    /* renamed from: j  reason: collision with root package name */
    private float f11871j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f11872k;

    /* renamed from: l  reason: collision with root package name */
    private long f11873l;

    /* renamed from: m  reason: collision with root package name */
    private long f11874m;

    /* renamed from: n  reason: collision with root package name */
    private Method f11875n;

    /* renamed from: o  reason: collision with root package name */
    private long f11876o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f11877p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f11878q;

    /* renamed from: r  reason: collision with root package name */
    private long f11879r;

    /* renamed from: s  reason: collision with root package name */
    private long f11880s;

    /* renamed from: t  reason: collision with root package name */
    private long f11881t;

    /* renamed from: u  reason: collision with root package name */
    private long f11882u;

    /* renamed from: v  reason: collision with root package name */
    private long f11883v;

    /* renamed from: w  reason: collision with root package name */
    private int f11884w;

    /* renamed from: x  reason: collision with root package name */
    private int f11885x;

    /* renamed from: y  reason: collision with root package name */
    private long f11886y;

    /* renamed from: z  reason: collision with root package name */
    private long f11887z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(int i10, long j10);

        void b(long j10);

        void c(long j10);

        void d(long j10, long j11, long j12, long j13);

        void e(long j10, long j11, long j12, long j13);
    }

    public h(a aVar) {
        this.f11862a = (a) ne.a.e(aVar);
        if (w0.f40197a >= 18) {
            try {
                this.f11875n = AudioTrack.class.getMethod("getLatency", null);
            } catch (NoSuchMethodException unused) {
            }
        }
        this.f11863b = new long[10];
    }

    private boolean a() {
        if (this.f11869h && ((AudioTrack) ne.a.e(this.f11864c)).getPlayState() == 2 && d() == 0) {
            return true;
        }
        return false;
    }

    private long d() {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        long j10 = this.f11886y;
        if (j10 != -9223372036854775807L) {
            return Math.min(this.B, this.A + w0.B(w0.e0((elapsedRealtime * 1000) - j10, this.f11871j), this.f11868g));
        }
        if (elapsedRealtime - this.f11880s >= 5) {
            u(elapsedRealtime);
            this.f11880s = elapsedRealtime;
        }
        return this.f11881t + (this.f11882u << 32);
    }

    private long e() {
        return w0.W0(d(), this.f11868g);
    }

    private void k(long j10) {
        g gVar = (g) ne.a.e(this.f11867f);
        if (!gVar.e(j10)) {
            return;
        }
        long c10 = gVar.c();
        long b10 = gVar.b();
        long e10 = e();
        if (Math.abs(c10 - j10) > 5000000) {
            this.f11862a.e(b10, c10, j10, e10);
            gVar.f();
        } else if (Math.abs(w0.W0(b10, this.f11868g) - e10) > 5000000) {
            this.f11862a.d(b10, c10, j10, e10);
            gVar.f();
        } else {
            gVar.a();
        }
    }

    private void l() {
        long nanoTime = System.nanoTime() / 1000;
        if (nanoTime - this.f11874m >= 30000) {
            long e10 = e();
            if (e10 != 0) {
                this.f11863b[this.f11884w] = w0.j0(e10, this.f11871j) - nanoTime;
                this.f11884w = (this.f11884w + 1) % 10;
                int i10 = this.f11885x;
                if (i10 < 10) {
                    this.f11885x = i10 + 1;
                }
                this.f11874m = nanoTime;
                this.f11873l = 0L;
                int i11 = 0;
                while (true) {
                    int i12 = this.f11885x;
                    if (i11 >= i12) {
                        break;
                    }
                    this.f11873l += this.f11863b[i11] / i12;
                    i11++;
                }
            } else {
                return;
            }
        }
        if (this.f11869h) {
            return;
        }
        k(nanoTime);
        m(nanoTime);
    }

    private void m(long j10) {
        Method method;
        if (this.f11878q && (method = this.f11875n) != null && j10 - this.f11879r >= 500000) {
            try {
                long intValue = (((Integer) w0.j((Integer) method.invoke(ne.a.e(this.f11864c), null))).intValue() * 1000) - this.f11870i;
                this.f11876o = intValue;
                long max = Math.max(intValue, 0L);
                this.f11876o = max;
                if (max > 5000000) {
                    this.f11862a.c(max);
                    this.f11876o = 0L;
                }
            } catch (Exception unused) {
                this.f11875n = null;
            }
            this.f11879r = j10;
        }
    }

    private static boolean n(int i10) {
        if (w0.f40197a < 23) {
            if (i10 == 5 || i10 == 6) {
                return true;
            }
            return false;
        }
        return false;
    }

    private void q() {
        this.f11873l = 0L;
        this.f11885x = 0;
        this.f11884w = 0;
        this.f11874m = 0L;
        this.D = 0L;
        this.G = 0L;
        this.f11872k = false;
    }

    private void u(long j10) {
        AudioTrack audioTrack;
        int playState = ((AudioTrack) ne.a.e(this.f11864c)).getPlayState();
        if (playState != 1) {
            long playbackHeadPosition = audioTrack.getPlaybackHeadPosition() & 4294967295L;
            if (this.f11869h) {
                if (playState == 2 && playbackHeadPosition == 0) {
                    this.f11883v = this.f11881t;
                }
                playbackHeadPosition += this.f11883v;
            }
            if (w0.f40197a <= 29) {
                if (playbackHeadPosition == 0 && this.f11881t > 0 && playState == 3) {
                    if (this.f11887z == -9223372036854775807L) {
                        this.f11887z = j10;
                        return;
                    }
                    return;
                }
                this.f11887z = -9223372036854775807L;
            }
            if (this.f11881t > playbackHeadPosition) {
                this.f11882u++;
            }
            this.f11881t = playbackHeadPosition;
        }
    }

    public int b(long j10) {
        return this.f11866e - ((int) (j10 - (d() * this.f11865d)));
    }

    public long c(boolean z10) {
        long e02;
        if (((AudioTrack) ne.a.e(this.f11864c)).getPlayState() == 3) {
            l();
        }
        long nanoTime = System.nanoTime() / 1000;
        g gVar = (g) ne.a.e(this.f11867f);
        boolean d10 = gVar.d();
        if (d10) {
            e02 = w0.W0(gVar.b(), this.f11868g) + w0.e0(nanoTime - gVar.c(), this.f11871j);
        } else {
            if (this.f11885x == 0) {
                e02 = e();
            } else {
                e02 = w0.e0(this.f11873l + nanoTime, this.f11871j);
            }
            if (!z10) {
                e02 = Math.max(0L, e02 - this.f11876o);
            }
        }
        if (this.E != d10) {
            this.G = this.D;
            this.F = this.C;
        }
        long j10 = nanoTime - this.G;
        if (j10 < 1000000) {
            long j11 = (j10 * 1000) / 1000000;
            e02 = ((e02 * j11) + ((1000 - j11) * (this.F + w0.e0(j10, this.f11871j)))) / 1000;
        }
        if (!this.f11872k) {
            long j12 = this.C;
            if (e02 > j12) {
                this.f11872k = true;
                this.f11862a.b(System.currentTimeMillis() - w0.p1(w0.j0(w0.p1(e02 - j12), this.f11871j)));
            }
        }
        this.D = nanoTime;
        this.C = e02;
        this.E = d10;
        return e02;
    }

    public void f(long j10) {
        this.A = d();
        this.f11886y = SystemClock.elapsedRealtime() * 1000;
        this.B = j10;
    }

    public boolean g(long j10) {
        if (j10 <= w0.B(c(false), this.f11868g) && !a()) {
            return false;
        }
        return true;
    }

    public boolean h() {
        if (((AudioTrack) ne.a.e(this.f11864c)).getPlayState() == 3) {
            return true;
        }
        return false;
    }

    public boolean i(long j10) {
        if (this.f11887z != -9223372036854775807L && j10 > 0 && SystemClock.elapsedRealtime() - this.f11887z >= 200) {
            return true;
        }
        return false;
    }

    public boolean j(long j10) {
        int playState = ((AudioTrack) ne.a.e(this.f11864c)).getPlayState();
        if (this.f11869h) {
            if (playState == 2) {
                this.f11877p = false;
                return false;
            } else if (playState == 1 && d() == 0) {
                return false;
            }
        }
        boolean z10 = this.f11877p;
        boolean g10 = g(j10);
        this.f11877p = g10;
        if (z10 && !g10 && playState != 1) {
            this.f11862a.a(this.f11866e, w0.p1(this.f11870i));
        }
        return true;
    }

    public boolean o() {
        q();
        if (this.f11886y == -9223372036854775807L) {
            ((g) ne.a.e(this.f11867f)).g();
            return true;
        }
        return false;
    }

    public void p() {
        q();
        this.f11864c = null;
        this.f11867f = null;
    }

    public void r(AudioTrack audioTrack, boolean z10, int i10, int i11, int i12) {
        boolean z11;
        long j10;
        this.f11864c = audioTrack;
        this.f11865d = i11;
        this.f11866e = i12;
        this.f11867f = new g(audioTrack);
        this.f11868g = audioTrack.getSampleRate();
        if (z10 && n(i10)) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f11869h = z11;
        boolean E0 = w0.E0(i10);
        this.f11878q = E0;
        if (E0) {
            j10 = w0.W0(i12 / i11, this.f11868g);
        } else {
            j10 = -9223372036854775807L;
        }
        this.f11870i = j10;
        this.f11881t = 0L;
        this.f11882u = 0L;
        this.f11883v = 0L;
        this.f11877p = false;
        this.f11886y = -9223372036854775807L;
        this.f11887z = -9223372036854775807L;
        this.f11879r = 0L;
        this.f11876o = 0L;
        this.f11871j = 1.0f;
    }

    public void s(float f10) {
        this.f11871j = f10;
        g gVar = this.f11867f;
        if (gVar != null) {
            gVar.g();
        }
        q();
    }

    public void t() {
        ((g) ne.a.e(this.f11867f)).g();
    }
}
