package lc;

import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.v1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements a0 {

    /* renamed from: a  reason: collision with root package name */
    private final le.p f36584a;

    /* renamed from: b  reason: collision with root package name */
    private final long f36585b;

    /* renamed from: c  reason: collision with root package name */
    private final long f36586c;

    /* renamed from: d  reason: collision with root package name */
    private final long f36587d;

    /* renamed from: e  reason: collision with root package name */
    private final long f36588e;

    /* renamed from: f  reason: collision with root package name */
    private final int f36589f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f36590g;

    /* renamed from: h  reason: collision with root package name */
    private final long f36591h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f36592i;

    /* renamed from: j  reason: collision with root package name */
    private int f36593j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f36594k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private le.p f36595a;

        /* renamed from: b  reason: collision with root package name */
        private int f36596b = 50000;

        /* renamed from: c  reason: collision with root package name */
        private int f36597c = 50000;

        /* renamed from: d  reason: collision with root package name */
        private int f36598d = 2500;

        /* renamed from: e  reason: collision with root package name */
        private int f36599e = 5000;

        /* renamed from: f  reason: collision with root package name */
        private int f36600f = -1;

        /* renamed from: g  reason: collision with root package name */
        private boolean f36601g = false;

        /* renamed from: h  reason: collision with root package name */
        private int f36602h = 0;

        /* renamed from: i  reason: collision with root package name */
        private boolean f36603i = false;

        /* renamed from: j  reason: collision with root package name */
        private boolean f36604j;

        public e a() {
            ne.a.g(!this.f36604j);
            this.f36604j = true;
            if (this.f36595a == null) {
                this.f36595a = new le.p(true, 65536);
            }
            return new e(this.f36595a, this.f36596b, this.f36597c, this.f36598d, this.f36599e, this.f36600f, this.f36601g, this.f36602h, this.f36603i);
        }

        public a b(le.p pVar) {
            ne.a.g(!this.f36604j);
            this.f36595a = pVar;
            return this;
        }

        public a c(int i10, int i11, int i12, int i13) {
            ne.a.g(!this.f36604j);
            e.b(i12, 0, "bufferForPlaybackMs", "0");
            e.b(i13, 0, "bufferForPlaybackAfterRebufferMs", "0");
            e.b(i10, i12, "minBufferMs", "bufferForPlaybackMs");
            e.b(i10, i13, "minBufferMs", "bufferForPlaybackAfterRebufferMs");
            e.b(i11, i10, "maxBufferMs", "minBufferMs");
            this.f36596b = i10;
            this.f36597c = i11;
            this.f36598d = i12;
            this.f36599e = i13;
            return this;
        }

        public a d(boolean z10) {
            ne.a.g(!this.f36604j);
            this.f36601g = z10;
            return this;
        }

        public a e(int i10) {
            ne.a.g(!this.f36604j);
            this.f36600f = i10;
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
        int i10 = this.f36589f;
        if (i10 == -1) {
            i10 = 13107200;
        }
        this.f36593j = i10;
        this.f36594k = false;
        if (z10) {
            this.f36584a.g();
        }
    }

    @Override // lc.a0
    public void c() {
        n(false);
    }

    @Override // lc.a0
    public boolean d() {
        return this.f36592i;
    }

    @Override // lc.a0
    public long e() {
        return this.f36591h;
    }

    @Override // lc.a0
    public boolean f(Timeline timeline, qd.q qVar, long j10, float f10, boolean z10, long j11) {
        long j12;
        long j02 = ne.w0.j0(j10, f10);
        if (z10) {
            j12 = this.f36588e;
        } else {
            j12 = this.f36587d;
        }
        if (j11 != -9223372036854775807L) {
            j12 = Math.min(j11 / 2, j12);
        }
        if (j12 > 0 && j02 < j12) {
            if (this.f36590g || this.f36584a.f() < this.f36593j) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // lc.a0
    public le.b g() {
        return this.f36584a;
    }

    @Override // lc.a0
    public void h() {
        n(true);
    }

    @Override // lc.a0
    public void i(Timeline timeline, qd.q qVar, v1[] v1VarArr, qd.w0 w0Var, com.google.android.exoplayer2.trackselection.g[] gVarArr) {
        int i10 = this.f36589f;
        if (i10 == -1) {
            i10 = l(v1VarArr, gVarArr);
        }
        this.f36593j = i10;
        this.f36584a.h(i10);
    }

    @Override // lc.a0
    public void j() {
        n(true);
    }

    @Override // lc.a0
    public boolean k(long j10, long j11, float f10) {
        boolean z10;
        boolean z11 = true;
        if (this.f36584a.f() >= this.f36593j) {
            z10 = true;
        } else {
            z10 = false;
        }
        long j12 = this.f36585b;
        if (f10 > 1.0f) {
            j12 = Math.min(ne.w0.e0(j12, f10), this.f36586c);
        }
        if (j11 < Math.max(j12, 500000L)) {
            if (!this.f36590g && z10) {
                z11 = false;
            }
            this.f36594k = z11;
            if (!z11 && j11 < 500000) {
                ne.y.i("DefaultLoadControl", "Target buffer size reached with less than 500ms of buffered media data.");
            }
        } else if (j11 >= this.f36586c || z10) {
            this.f36594k = false;
        }
        return this.f36594k;
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
        this.f36584a = pVar;
        this.f36585b = ne.w0.K0(i10);
        this.f36586c = ne.w0.K0(i11);
        this.f36587d = ne.w0.K0(i12);
        this.f36588e = ne.w0.K0(i13);
        this.f36589f = i14;
        this.f36593j = i14 == -1 ? 13107200 : i14;
        this.f36590g = z10;
        this.f36591h = ne.w0.K0(i15);
        this.f36592i = z11;
    }
}
