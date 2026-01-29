package lc;

import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.v1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements a0 {

    /* renamed from: a  reason: collision with root package name */
    private final le.p f37058a;

    /* renamed from: b  reason: collision with root package name */
    private final long f37059b;

    /* renamed from: c  reason: collision with root package name */
    private final long f37060c;

    /* renamed from: d  reason: collision with root package name */
    private final long f37061d;

    /* renamed from: e  reason: collision with root package name */
    private final long f37062e;

    /* renamed from: f  reason: collision with root package name */
    private final int f37063f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f37064g;

    /* renamed from: h  reason: collision with root package name */
    private final long f37065h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f37066i;

    /* renamed from: j  reason: collision with root package name */
    private int f37067j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f37068k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private le.p f37069a;

        /* renamed from: b  reason: collision with root package name */
        private int f37070b = 50000;

        /* renamed from: c  reason: collision with root package name */
        private int f37071c = 50000;

        /* renamed from: d  reason: collision with root package name */
        private int f37072d = 2500;

        /* renamed from: e  reason: collision with root package name */
        private int f37073e = 5000;

        /* renamed from: f  reason: collision with root package name */
        private int f37074f = -1;

        /* renamed from: g  reason: collision with root package name */
        private boolean f37075g = false;

        /* renamed from: h  reason: collision with root package name */
        private int f37076h = 0;

        /* renamed from: i  reason: collision with root package name */
        private boolean f37077i = false;

        /* renamed from: j  reason: collision with root package name */
        private boolean f37078j;

        public e a() {
            ne.a.g(!this.f37078j);
            this.f37078j = true;
            if (this.f37069a == null) {
                this.f37069a = new le.p(true, 65536);
            }
            return new e(this.f37069a, this.f37070b, this.f37071c, this.f37072d, this.f37073e, this.f37074f, this.f37075g, this.f37076h, this.f37077i);
        }

        public a b(le.p pVar) {
            ne.a.g(!this.f37078j);
            this.f37069a = pVar;
            return this;
        }

        public a c(int i10, int i11, int i12, int i13) {
            ne.a.g(!this.f37078j);
            e.b(i12, 0, "bufferForPlaybackMs", "0");
            e.b(i13, 0, "bufferForPlaybackAfterRebufferMs", "0");
            e.b(i10, i12, "minBufferMs", "bufferForPlaybackMs");
            e.b(i10, i13, "minBufferMs", "bufferForPlaybackAfterRebufferMs");
            e.b(i11, i10, "maxBufferMs", "minBufferMs");
            this.f37070b = i10;
            this.f37071c = i11;
            this.f37072d = i12;
            this.f37073e = i13;
            return this;
        }

        public a d(boolean z10) {
            ne.a.g(!this.f37078j);
            this.f37075g = z10;
            return this;
        }

        public a e(int i10) {
            ne.a.g(!this.f37078j);
            this.f37074f = i10;
            return this;
        }
    }

    public e() {
        this(new le.p(true, 65536), 50000, 50000, 2500, 5000, -1, false, 0, false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void b(int i10, int i11, String str, String str2) {
        boolean z10;
        if (i10 >= i11) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.b(z10, str + " cannot be less than " + str2);
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
        int i10 = this.f37063f;
        if (i10 == -1) {
            i10 = 13107200;
        }
        this.f37067j = i10;
        this.f37068k = false;
        if (z10) {
            this.f37058a.g();
        }
    }

    @Override // lc.a0
    public void c() {
        n(false);
    }

    @Override // lc.a0
    public boolean d() {
        return this.f37066i;
    }

    @Override // lc.a0
    public long e() {
        return this.f37065h;
    }

    @Override // lc.a0
    public boolean f(Timeline timeline, qd.q qVar, long j10, float f10, boolean z10, long j11) {
        long j12;
        long j02 = ne.w0.j0(j10, f10);
        if (z10) {
            j12 = this.f37062e;
        } else {
            j12 = this.f37061d;
        }
        if (j11 != -9223372036854775807L) {
            j12 = Math.min(j11 / 2, j12);
        }
        if (j12 > 0 && j02 < j12) {
            if (this.f37064g || this.f37058a.f() < this.f37067j) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // lc.a0
    public le.b g() {
        return this.f37058a;
    }

    @Override // lc.a0
    public void h() {
        n(true);
    }

    @Override // lc.a0
    public void i(Timeline timeline, qd.q qVar, v1[] v1VarArr, qd.w0 w0Var, com.google.android.exoplayer2.trackselection.g[] gVarArr) {
        int i10 = this.f37063f;
        if (i10 == -1) {
            i10 = l(v1VarArr, gVarArr);
        }
        this.f37067j = i10;
        this.f37058a.h(i10);
    }

    @Override // lc.a0
    public void j() {
        n(true);
    }

    @Override // lc.a0
    public boolean k(long j10, long j11, float f10) {
        boolean z10;
        boolean z11 = true;
        if (this.f37058a.f() >= this.f37067j) {
            z10 = true;
        } else {
            z10 = false;
        }
        long j12 = this.f37059b;
        if (f10 > 1.0f) {
            j12 = Math.min(ne.w0.e0(j12, f10), this.f37060c);
        }
        if (j11 < Math.max(j12, 500000L)) {
            if (!this.f37064g && z10) {
                z11 = false;
            }
            this.f37068k = z11;
            if (!z11 && j11 < 500000) {
                ne.y.i("DefaultLoadControl", "Target buffer size reached with less than 500ms of buffered media data.");
            }
        } else if (j11 >= this.f37060c || z10) {
            this.f37068k = false;
        }
        return this.f37068k;
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

    protected e(le.p pVar, int i10, int i11, int i12, int i13, int i14, boolean z10, int i15, boolean z11) {
        b(i12, 0, "bufferForPlaybackMs", "0");
        b(i13, 0, "bufferForPlaybackAfterRebufferMs", "0");
        b(i10, i12, "minBufferMs", "bufferForPlaybackMs");
        b(i10, i13, "minBufferMs", "bufferForPlaybackAfterRebufferMs");
        b(i11, i10, "maxBufferMs", "minBufferMs");
        b(i15, 0, "backBufferDurationMs", "0");
        this.f37058a = pVar;
        this.f37059b = ne.w0.K0(i10);
        this.f37060c = ne.w0.K0(i11);
        this.f37061d = ne.w0.K0(i12);
        this.f37062e = ne.w0.K0(i13);
        this.f37063f = i14;
        this.f37067j = i14 == -1 ? 13107200 : i14;
        this.f37064g = z10;
        this.f37065h = ne.w0.K0(i15);
        this.f37066i = z11;
    }
}
