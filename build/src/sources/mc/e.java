package mc;

import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.v1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements a0 {

    /* renamed from: a  reason: collision with root package name */
    private final me.p f36799a;

    /* renamed from: b  reason: collision with root package name */
    private final long f36800b;

    /* renamed from: c  reason: collision with root package name */
    private final long f36801c;

    /* renamed from: d  reason: collision with root package name */
    private final long f36802d;

    /* renamed from: e  reason: collision with root package name */
    private final long f36803e;

    /* renamed from: f  reason: collision with root package name */
    private final int f36804f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f36805g;

    /* renamed from: h  reason: collision with root package name */
    private final long f36806h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f36807i;

    /* renamed from: j  reason: collision with root package name */
    private int f36808j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f36809k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private me.p f36810a;

        /* renamed from: b  reason: collision with root package name */
        private int f36811b = 50000;

        /* renamed from: c  reason: collision with root package name */
        private int f36812c = 50000;

        /* renamed from: d  reason: collision with root package name */
        private int f36813d = 2500;

        /* renamed from: e  reason: collision with root package name */
        private int f36814e = 5000;

        /* renamed from: f  reason: collision with root package name */
        private int f36815f = -1;

        /* renamed from: g  reason: collision with root package name */
        private boolean f36816g = false;

        /* renamed from: h  reason: collision with root package name */
        private int f36817h = 0;

        /* renamed from: i  reason: collision with root package name */
        private boolean f36818i = false;

        /* renamed from: j  reason: collision with root package name */
        private boolean f36819j;

        public e a() {
            oe.a.g(!this.f36819j);
            this.f36819j = true;
            if (this.f36810a == null) {
                this.f36810a = new me.p(true, 65536);
            }
            return new e(this.f36810a, this.f36811b, this.f36812c, this.f36813d, this.f36814e, this.f36815f, this.f36816g, this.f36817h, this.f36818i);
        }

        public a b(me.p pVar) {
            oe.a.g(!this.f36819j);
            this.f36810a = pVar;
            return this;
        }

        public a c(int i10, int i11, int i12, int i13) {
            oe.a.g(!this.f36819j);
            e.b(i12, 0, "bufferForPlaybackMs", "0");
            e.b(i13, 0, "bufferForPlaybackAfterRebufferMs", "0");
            e.b(i10, i12, "minBufferMs", "bufferForPlaybackMs");
            e.b(i10, i13, "minBufferMs", "bufferForPlaybackAfterRebufferMs");
            e.b(i11, i10, "maxBufferMs", "minBufferMs");
            this.f36811b = i10;
            this.f36812c = i11;
            this.f36813d = i12;
            this.f36814e = i13;
            return this;
        }

        public a d(boolean z10) {
            oe.a.g(!this.f36819j);
            this.f36816g = z10;
            return this;
        }

        public a e(int i10) {
            oe.a.g(!this.f36819j);
            this.f36815f = i10;
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
        int i10 = this.f36804f;
        if (i10 == -1) {
            i10 = 13107200;
        }
        this.f36808j = i10;
        this.f36809k = false;
        if (z10) {
            this.f36799a.g();
        }
    }

    @Override // mc.a0
    public void c() {
        n(false);
    }

    @Override // mc.a0
    public boolean d() {
        return this.f36807i;
    }

    @Override // mc.a0
    public long e() {
        return this.f36806h;
    }

    @Override // mc.a0
    public void f(Timeline timeline, rd.q qVar, v1[] v1VarArr, rd.w0 w0Var, com.google.android.exoplayer2.trackselection.g[] gVarArr) {
        int i10 = this.f36804f;
        if (i10 == -1) {
            i10 = l(v1VarArr, gVarArr);
        }
        this.f36808j = i10;
        this.f36799a.h(i10);
    }

    @Override // mc.a0
    public boolean g(Timeline timeline, rd.q qVar, long j10, float f10, boolean z10, long j11) {
        long j12;
        long j02 = oe.w0.j0(j10, f10);
        if (z10) {
            j12 = this.f36803e;
        } else {
            j12 = this.f36802d;
        }
        if (j11 != -9223372036854775807L) {
            j12 = Math.min(j11 / 2, j12);
        }
        if (j12 > 0 && j02 < j12) {
            if (this.f36805g || this.f36799a.f() < this.f36808j) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // mc.a0
    public me.b h() {
        return this.f36799a;
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
        if (this.f36799a.f() >= this.f36808j) {
            z10 = true;
        } else {
            z10 = false;
        }
        long j12 = this.f36800b;
        if (f10 > 1.0f) {
            j12 = Math.min(oe.w0.e0(j12, f10), this.f36801c);
        }
        if (j11 < Math.max(j12, 500000L)) {
            if (!this.f36805g && z10) {
                z11 = false;
            }
            this.f36809k = z11;
            if (!z11 && j11 < 500000) {
                oe.y.i("DefaultLoadControl", "Target buffer size reached with less than 500ms of buffered media data.");
            }
        } else if (j11 >= this.f36801c || z10) {
            this.f36809k = false;
        }
        return this.f36809k;
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
        this.f36799a = pVar;
        this.f36800b = oe.w0.K0(i10);
        this.f36801c = oe.w0.K0(i11);
        this.f36802d = oe.w0.K0(i12);
        this.f36803e = oe.w0.K0(i13);
        this.f36804f = i14;
        this.f36808j = i14 == -1 ? 13107200 : i14;
        this.f36805g = z10;
        this.f36806h = oe.w0.K0(i15);
        this.f36807i = z11;
    }
}
