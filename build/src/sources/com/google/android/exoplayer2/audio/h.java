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
    private final a f12286a;

    /* renamed from: b  reason: collision with root package name */
    private final long[] f12287b;

    /* renamed from: c  reason: collision with root package name */
    private AudioTrack f12288c;

    /* renamed from: d  reason: collision with root package name */
    private int f12289d;

    /* renamed from: e  reason: collision with root package name */
    private int f12290e;

    /* renamed from: f  reason: collision with root package name */
    private g f12291f;

    /* renamed from: g  reason: collision with root package name */
    private int f12292g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f12293h;

    /* renamed from: i  reason: collision with root package name */
    private long f12294i;

    /* renamed from: j  reason: collision with root package name */
    private float f12295j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12296k;

    /* renamed from: l  reason: collision with root package name */
    private long f12297l;

    /* renamed from: m  reason: collision with root package name */
    private long f12298m;

    /* renamed from: n  reason: collision with root package name */
    private Method f12299n;

    /* renamed from: o  reason: collision with root package name */
    private long f12300o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f12301p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f12302q;

    /* renamed from: r  reason: collision with root package name */
    private long f12303r;

    /* renamed from: s  reason: collision with root package name */
    private long f12304s;

    /* renamed from: t  reason: collision with root package name */
    private long f12305t;

    /* renamed from: u  reason: collision with root package name */
    private long f12306u;

    /* renamed from: v  reason: collision with root package name */
    private long f12307v;

    /* renamed from: w  reason: collision with root package name */
    private int f12308w;

    /* renamed from: x  reason: collision with root package name */
    private int f12309x;

    /* renamed from: y  reason: collision with root package name */
    private long f12310y;

    /* renamed from: z  reason: collision with root package name */
    private long f12311z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(int i10, long j10);

        void b(long j10);

        void c(long j10);

        void d(long j10, long j11, long j12, long j13);

        void e(long j10, long j11, long j12, long j13);
    }

    public h(a aVar) {
        this.f12286a = (a) oe.a.e(aVar);
        if (w0.f40711a >= 18) {
            try {
                this.f12299n = AudioTrack.class.getMethod("getLatency", null);
            } catch (NoSuchMethodException unused) {
            }
        }
        this.f12287b = new long[10];
    }

    private boolean a() {
        if (this.f12293h && ((AudioTrack) oe.a.e(this.f12288c)).getPlayState() == 2 && d() == 0) {
            return true;
        }
        return false;
    }

    private long d() {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        long j10 = this.f12310y;
        if (j10 != -9223372036854775807L) {
            return Math.min(this.B, this.A + w0.B(w0.e0((elapsedRealtime * 1000) - j10, this.f12295j), this.f12292g));
        }
        if (elapsedRealtime - this.f12304s >= 5) {
            u(elapsedRealtime);
            this.f12304s = elapsedRealtime;
        }
        return this.f12305t + (this.f12306u << 32);
    }

    private long e() {
        return w0.W0(d(), this.f12292g);
    }

    private void k(long j10) {
        g gVar = (g) oe.a.e(this.f12291f);
        if (!gVar.e(j10)) {
            return;
        }
        long c10 = gVar.c();
        long b10 = gVar.b();
        long e10 = e();
        if (Math.abs(c10 - j10) > 5000000) {
            this.f12286a.e(b10, c10, j10, e10);
            gVar.f();
        } else if (Math.abs(w0.W0(b10, this.f12292g) - e10) > 5000000) {
            this.f12286a.d(b10, c10, j10, e10);
            gVar.f();
        } else {
            gVar.a();
        }
    }

    private void l() {
        long nanoTime = System.nanoTime() / 1000;
        if (nanoTime - this.f12298m >= 30000) {
            long e10 = e();
            if (e10 != 0) {
                this.f12287b[this.f12308w] = w0.j0(e10, this.f12295j) - nanoTime;
                this.f12308w = (this.f12308w + 1) % 10;
                int i10 = this.f12309x;
                if (i10 < 10) {
                    this.f12309x = i10 + 1;
                }
                this.f12298m = nanoTime;
                this.f12297l = 0L;
                int i11 = 0;
                while (true) {
                    int i12 = this.f12309x;
                    if (i11 >= i12) {
                        break;
                    }
                    this.f12297l += this.f12287b[i11] / i12;
                    i11++;
                }
            } else {
                return;
            }
        }
        if (this.f12293h) {
            return;
        }
        k(nanoTime);
        m(nanoTime);
    }

    private void m(long j10) {
        Method method;
        if (this.f12302q && (method = this.f12299n) != null && j10 - this.f12303r >= 500000) {
            try {
                long intValue = (((Integer) w0.j((Integer) method.invoke(oe.a.e(this.f12288c), null))).intValue() * 1000) - this.f12294i;
                this.f12300o = intValue;
                long max = Math.max(intValue, 0L);
                this.f12300o = max;
                if (max > 5000000) {
                    this.f12286a.c(max);
                    this.f12300o = 0L;
                }
            } catch (Exception unused) {
                this.f12299n = null;
            }
            this.f12303r = j10;
        }
    }

    private static boolean n(int i10) {
        if (w0.f40711a < 23) {
            if (i10 == 5 || i10 == 6) {
                return true;
            }
            return false;
        }
        return false;
    }

    private void q() {
        this.f12297l = 0L;
        this.f12309x = 0;
        this.f12308w = 0;
        this.f12298m = 0L;
        this.D = 0L;
        this.G = 0L;
        this.f12296k = false;
    }

    private void u(long j10) {
        AudioTrack audioTrack;
        int playState = ((AudioTrack) oe.a.e(this.f12288c)).getPlayState();
        if (playState != 1) {
            long playbackHeadPosition = audioTrack.getPlaybackHeadPosition() & 4294967295L;
            if (this.f12293h) {
                if (playState == 2 && playbackHeadPosition == 0) {
                    this.f12307v = this.f12305t;
                }
                playbackHeadPosition += this.f12307v;
            }
            if (w0.f40711a <= 29) {
                if (playbackHeadPosition == 0 && this.f12305t > 0 && playState == 3) {
                    if (this.f12311z == -9223372036854775807L) {
                        this.f12311z = j10;
                        return;
                    }
                    return;
                }
                this.f12311z = -9223372036854775807L;
            }
            if (this.f12305t > playbackHeadPosition) {
                this.f12306u++;
            }
            this.f12305t = playbackHeadPosition;
        }
    }

    public int b(long j10) {
        return this.f12290e - ((int) (j10 - (d() * this.f12289d)));
    }

    public long c(boolean z10) {
        long e02;
        if (((AudioTrack) oe.a.e(this.f12288c)).getPlayState() == 3) {
            l();
        }
        long nanoTime = System.nanoTime() / 1000;
        g gVar = (g) oe.a.e(this.f12291f);
        boolean d10 = gVar.d();
        if (d10) {
            e02 = w0.W0(gVar.b(), this.f12292g) + w0.e0(nanoTime - gVar.c(), this.f12295j);
        } else {
            if (this.f12309x == 0) {
                e02 = e();
            } else {
                e02 = w0.e0(this.f12297l + nanoTime, this.f12295j);
            }
            if (!z10) {
                e02 = Math.max(0L, e02 - this.f12300o);
            }
        }
        if (this.E != d10) {
            this.G = this.D;
            this.F = this.C;
        }
        long j10 = nanoTime - this.G;
        if (j10 < 1000000) {
            long j11 = (j10 * 1000) / 1000000;
            e02 = ((e02 * j11) + ((1000 - j11) * (this.F + w0.e0(j10, this.f12295j)))) / 1000;
        }
        if (!this.f12296k) {
            long j12 = this.C;
            if (e02 > j12) {
                this.f12296k = true;
                this.f12286a.b(System.currentTimeMillis() - w0.p1(w0.j0(w0.p1(e02 - j12), this.f12295j)));
            }
        }
        this.D = nanoTime;
        this.C = e02;
        this.E = d10;
        return e02;
    }

    public void f(long j10) {
        this.A = d();
        this.f12310y = SystemClock.elapsedRealtime() * 1000;
        this.B = j10;
    }

    public boolean g(long j10) {
        if (j10 <= w0.B(c(false), this.f12292g) && !a()) {
            return false;
        }
        return true;
    }

    public boolean h() {
        if (((AudioTrack) oe.a.e(this.f12288c)).getPlayState() == 3) {
            return true;
        }
        return false;
    }

    public boolean i(long j10) {
        if (this.f12311z != -9223372036854775807L && j10 > 0 && SystemClock.elapsedRealtime() - this.f12311z >= 200) {
            return true;
        }
        return false;
    }

    public boolean j(long j10) {
        int playState = ((AudioTrack) oe.a.e(this.f12288c)).getPlayState();
        if (this.f12293h) {
            if (playState == 2) {
                this.f12301p = false;
                return false;
            } else if (playState == 1 && d() == 0) {
                return false;
            }
        }
        boolean z10 = this.f12301p;
        boolean g10 = g(j10);
        this.f12301p = g10;
        if (z10 && !g10 && playState != 1) {
            this.f12286a.a(this.f12290e, w0.p1(this.f12294i));
        }
        return true;
    }

    public boolean o() {
        q();
        if (this.f12310y == -9223372036854775807L) {
            ((g) oe.a.e(this.f12291f)).g();
            return true;
        }
        return false;
    }

    public void p() {
        q();
        this.f12288c = null;
        this.f12291f = null;
    }

    public void r(AudioTrack audioTrack, boolean z10, int i10, int i11, int i12) {
        boolean z11;
        long j10;
        this.f12288c = audioTrack;
        this.f12289d = i11;
        this.f12290e = i12;
        this.f12291f = new g(audioTrack);
        this.f12292g = audioTrack.getSampleRate();
        if (z10 && n(i10)) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f12293h = z11;
        boolean E0 = w0.E0(i10);
        this.f12302q = E0;
        if (E0) {
            j10 = w0.W0(i12 / i11, this.f12292g);
        } else {
            j10 = -9223372036854775807L;
        }
        this.f12294i = j10;
        this.f12305t = 0L;
        this.f12306u = 0L;
        this.f12307v = 0L;
        this.f12301p = false;
        this.f12310y = -9223372036854775807L;
        this.f12311z = -9223372036854775807L;
        this.f12303r = 0L;
        this.f12300o = 0L;
        this.f12295j = 1.0f;
    }

    public void s(float f10) {
        this.f12295j = f10;
        g gVar = this.f12291f;
        if (gVar != null) {
            gVar.g();
        }
        q();
    }

    public void t() {
        ((g) oe.a.e(this.f12291f)).g();
    }
}
