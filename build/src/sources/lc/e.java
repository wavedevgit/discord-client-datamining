package lc;

import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.v1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements a0 {

    /* renamed from: a  reason: collision with root package name */
    private final le.p f37188a;

    /* renamed from: b  reason: collision with root package name */
    private final long f37189b;

    /* renamed from: c  reason: collision with root package name */
    private final long f37190c;

    /* renamed from: d  reason: collision with root package name */
    private final long f37191d;

    /* renamed from: e  reason: collision with root package name */
    private final long f37192e;

    /* renamed from: f  reason: collision with root package name */
    private final int f37193f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f37194g;

    /* renamed from: h  reason: collision with root package name */
    private final long f37195h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f37196i;

    /* renamed from: j  reason: collision with root package name */
    private int f37197j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f37198k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private le.p f37199a;

        /* renamed from: b  reason: collision with root package name */
        private int f37200b = 50000;

        /* renamed from: c  reason: collision with root package name */
        private int f37201c = 50000;

        /* renamed from: d  reason: collision with root package name */
        private int f37202d = 2500;

        /* renamed from: e  reason: collision with root package name */
        private int f37203e = 5000;

        /* renamed from: f  reason: collision with root package name */
        private int f37204f = -1;

        /* renamed from: g  reason: collision with root package name */
        private boolean f37205g = false;

        /* renamed from: h  reason: collision with root package name */
        private int f37206h = 0;

        /* renamed from: i  reason: collision with root package name */
        private boolean f37207i = false;

        /* renamed from: j  reason: collision with root package name */
        private boolean f37208j;

        public e a() {
            ne.a.g(!this.f37208j);
            this.f37208j = true;
            if (this.f37199a == null) {
                this.f37199a = new le.p(true, 65536);
            }
            return new e(this.f37199a, this.f37200b, this.f37201c, this.f37202d, this.f37203e, this.f37204f, this.f37205g, this.f37206h, this.f37207i);
        }

        public a b(le.p pVar) {
            ne.a.g(!this.f37208j);
            this.f37199a = pVar;
            return this;
        }

        public a c(int i10, int i11, int i12, int i13) {
            ne.a.g(!this.f37208j);
            e.b(i12, 0, "bufferForPlaybackMs", "0");
            e.b(i13, 0, "bufferForPlaybackAfterRebufferMs", "0");
            e.b(i10, i12, "minBufferMs", "bufferForPlaybackMs");
            e.b(i10, i13, "minBufferMs", "bufferForPlaybackAfterRebufferMs");
            e.b(i11, i10, "maxBufferMs", "minBufferMs");
            this.f37200b = i10;
            this.f37201c = i11;
            this.f37202d = i12;
            this.f37203e = i13;
            return this;
        }

        public a d(boolean z10) {
            ne.a.g(!this.f37208j);
            this.f37205g = z10;
            return this;
        }

        public a e(int i10) {
            ne.a.g(!this.f37208j);
            this.f37204f = i10;
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
        int i10 = this.f37193f;
        if (i10 == -1) {
            i10 = 13107200;
        }
        this.f37197j = i10;
        this.f37198k = false;
        if (z10) {
            this.f37188a.g();
        }
    }

    @Override // lc.a0
    public void c() {
        n(false);
    }

    @Override // lc.a0
    public boolean d() {
        return this.f37196i;
    }

    @Override // lc.a0
    public long e() {
        return this.f37195h;
    }

    @Override // lc.a0
    public boolean f(Timeline timeline, qd.q qVar, long j10, float f10, boolean z10, long j11) {
        long j12;
        long j02 = ne.w0.j0(j10, f10);
        if (z10) {
            j12 = this.f37192e;
        } else {
            j12 = this.f37191d;
        }
        if (j11 != -9223372036854775807L) {
            j12 = Math.min(j11 / 2, j12);
        }
        if (j12 > 0 && j02 < j12) {
            if (this.f37194g || this.f37188a.f() < this.f37197j) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // lc.a0
    public le.b g() {
        return this.f37188a;
    }

    @Override // lc.a0
    public void h() {
        n(true);
    }

    @Override // lc.a0
    public void i(Timeline timeline, qd.q qVar, v1[] v1VarArr, qd.w0 w0Var, com.google.android.exoplayer2.trackselection.g[] gVarArr) {
        int i10 = this.f37193f;
        if (i10 == -1) {
            i10 = l(v1VarArr, gVarArr);
        }
        this.f37197j = i10;
        this.f37188a.h(i10);
    }

    @Override // lc.a0
    public void j() {
        n(true);
    }

    @Override // lc.a0
    public boolean k(long j10, long j11, float f10) {
        boolean z10;
        boolean z11 = true;
        if (this.f37188a.f() >= this.f37197j) {
            z10 = true;
        } else {
            z10 = false;
        }
        long j12 = this.f37189b;
        if (f10 > 1.0f) {
            j12 = Math.min(ne.w0.e0(j12, f10), this.f37190c);
        }
        if (j11 < Math.max(j12, 500000L)) {
            if (!this.f37194g && z10) {
                z11 = false;
            }
            this.f37198k = z11;
            if (!z11 && j11 < 500000) {
                ne.y.i("DefaultLoadControl", "Target buffer size reached with less than 500ms of buffered media data.");
            }
        } else if (j11 >= this.f37190c || z10) {
            this.f37198k = false;
        }
        return this.f37198k;
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
        this.f37188a = pVar;
        this.f37189b = ne.w0.K0(i10);
        this.f37190c = ne.w0.K0(i11);
        this.f37191d = ne.w0.K0(i12);
        this.f37192e = ne.w0.K0(i13);
        this.f37193f = i14;
        this.f37197j = i14 == -1 ? 13107200 : i14;
        this.f37194g = z10;
        this.f37195h = ne.w0.K0(i15);
        this.f37196i = z11;
    }
}
