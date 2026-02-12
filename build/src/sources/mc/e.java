package mc;

import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.v1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements a0 {

    /* renamed from: a  reason: collision with root package name */
    private final me.p f36231a;

    /* renamed from: b  reason: collision with root package name */
    private final long f36232b;

    /* renamed from: c  reason: collision with root package name */
    private final long f36233c;

    /* renamed from: d  reason: collision with root package name */
    private final long f36234d;

    /* renamed from: e  reason: collision with root package name */
    private final long f36235e;

    /* renamed from: f  reason: collision with root package name */
    private final int f36236f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f36237g;

    /* renamed from: h  reason: collision with root package name */
    private final long f36238h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f36239i;

    /* renamed from: j  reason: collision with root package name */
    private int f36240j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f36241k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private me.p f36242a;

        /* renamed from: b  reason: collision with root package name */
        private int f36243b = 50000;

        /* renamed from: c  reason: collision with root package name */
        private int f36244c = 50000;

        /* renamed from: d  reason: collision with root package name */
        private int f36245d = 2500;

        /* renamed from: e  reason: collision with root package name */
        private int f36246e = 5000;

        /* renamed from: f  reason: collision with root package name */
        private int f36247f = -1;

        /* renamed from: g  reason: collision with root package name */
        private boolean f36248g = false;

        /* renamed from: h  reason: collision with root package name */
        private int f36249h = 0;

        /* renamed from: i  reason: collision with root package name */
        private boolean f36250i = false;

        /* renamed from: j  reason: collision with root package name */
        private boolean f36251j;

        public e a() {
            oe.a.g(!this.f36251j);
            this.f36251j = true;
            if (this.f36242a == null) {
                this.f36242a = new me.p(true, 65536);
            }
            return new e(this.f36242a, this.f36243b, this.f36244c, this.f36245d, this.f36246e, this.f36247f, this.f36248g, this.f36249h, this.f36250i);
        }

        public a b(me.p pVar) {
            oe.a.g(!this.f36251j);
            this.f36242a = pVar;
            return this;
        }

        public a c(int i10, int i11, int i12, int i13) {
            oe.a.g(!this.f36251j);
            e.b(i12, 0, "bufferForPlaybackMs", "0");
            e.b(i13, 0, "bufferForPlaybackAfterRebufferMs", "0");
            e.b(i10, i12, "minBufferMs", "bufferForPlaybackMs");
            e.b(i10, i13, "minBufferMs", "bufferForPlaybackAfterRebufferMs");
            e.b(i11, i10, "maxBufferMs", "minBufferMs");
            this.f36243b = i10;
            this.f36244c = i11;
            this.f36245d = i12;
            this.f36246e = i13;
            return this;
        }

        public a d(boolean z10) {
            oe.a.g(!this.f36251j);
            this.f36248g = z10;
            return this;
        }

        public a e(int i10) {
            oe.a.g(!this.f36251j);
            this.f36247f = i10;
            return this;
        }
    }

    public e() {
        this(new me.p(true, 65536), 50000, 50000, 2500, 5000, -1, false, 0, false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void b(int i10, int i11, String str, String str2) {
        boolean z10;
        if (i10 >= i11) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.b(z10, str + " cannot be less than " + str2);
    }

    private static int m(int i10) {
        switch (i10) {
            case -2:
                return 0;
            case -1:
            default:
                throw new IllegalArgumentException();
            case 0:
                return 144310272;
            case 1:
                return 13107200;
            case 2:
                return 131072000;
            case 3:
            case 4:
            case 5:
            case 6:
                return 131072;
        }
    }

    private void n(boolean z10) {
        int i10 = this.f36236f;
        if (i10 == -1) {
            i10 = 13107200;
        }
        this.f36240j = i10;
        this.f36241k = false;
        if (z10) {
            this.f36231a.g();
        }
    }

    @Override // mc.a0
    public void c() {
        n(false);
    }

    @Override // mc.a0
    public boolean d() {
        return this.f36239i;
    }

    @Override // mc.a0
    public long e() {
        return this.f36238h;
    }

    @Override // mc.a0
    public void f(Timeline timeline, rd.q qVar, v1[] v1VarArr, rd.w0 w0Var, com.google.android.exoplayer2.trackselection.g[] gVarArr) {
        int i10 = this.f36236f;
        if (i10 == -1) {
            i10 = l(v1VarArr, gVarArr);
        }
        this.f36240j = i10;
        this.f36231a.h(i10);
    }

    @Override // mc.a0
    public boolean g(Timeline timeline, rd.q qVar, long j10, float f10, boolean z10, long j11) {
        long j12;
        long j02 = oe.w0.j0(j10, f10);
        if (z10) {
            j12 = this.f36235e;
        } else {
            j12 = this.f36234d;
        }
        if (j11 != -9223372036854775807L) {
            j12 = Math.min(j11 / 2, j12);
        }
        if (j12 > 0 && j02 < j12) {
            if (this.f36237g || this.f36231a.f() < this.f36240j) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // mc.a0
    public me.b h() {
        return this.f36231a;
    }

    @Override // mc.a0
    public void i() {
        n(true);
    }

    @Override // mc.a0
    public void j() {
        n(true);
    }

    @Override // mc.a0
    public boolean k(long j10, long j11, float f10) {
        boolean z10;
        boolean z11 = true;
        if (this.f36231a.f() >= this.f36240j) {
            z10 = true;
        } else {
            z10 = false;
        }
        long j12 = this.f36232b;
        if (f10 > 1.0f) {
            j12 = Math.min(oe.w0.e0(j12, f10), this.f36233c);
        }
        if (j11 < Math.max(j12, 500000L)) {
            if (!this.f36237g && z10) {
                z11 = false;
            }
            this.f36241k = z11;
            if (!z11 && j11 < 500000) {
                oe.y.i("DefaultLoadControl", "Target buffer size reached with less than 500ms of buffered media data.");
            }
        } else if (j11 >= this.f36233c || z10) {
            this.f36241k = false;
        }
        return this.f36241k;
    }

    protected int l(v1[] v1VarArr, com.google.android.exoplayer2.trackselection.g[] gVarArr) {
        int i10 = 0;
        for (int i11 = 0; i11 < v1VarArr.length; i11++) {
            if (gVarArr[i11] != null) {
                i10 += m(v1VarArr[i11].e());
            }
        }
        return Math.max(13107200, i10);
    }

    protected e(me.p pVar, int i10, int i11, int i12, int i13, int i14, boolean z10, int i15, boolean z11) {
        b(i12, 0, "bufferForPlaybackMs", "0");
        b(i13, 0, "bufferForPlaybackAfterRebufferMs", "0");
        b(i10, i12, "minBufferMs", "bufferForPlaybackMs");
        b(i10, i13, "minBufferMs", "bufferForPlaybackAfterRebufferMs");
        b(i11, i10, "maxBufferMs", "minBufferMs");
        b(i15, 0, "backBufferDurationMs", "0");
        this.f36231a = pVar;
        this.f36232b = oe.w0.K0(i10);
        this.f36233c = oe.w0.K0(i11);
        this.f36234d = oe.w0.K0(i12);
        this.f36235e = oe.w0.K0(i13);
        this.f36236f = i14;
        this.f36240j = i14 == -1 ? 13107200 : i14;
        this.f36237g = z10;
        this.f36238h = oe.w0.K0(i15);
        this.f36239i = z11;
    }
}
