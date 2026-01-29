package bd;

import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q {

    /* renamed from: a  reason: collision with root package name */
    public c f7425a;

    /* renamed from: b  reason: collision with root package name */
    public long f7426b;

    /* renamed from: c  reason: collision with root package name */
    public long f7427c;

    /* renamed from: d  reason: collision with root package name */
    public long f7428d;

    /* renamed from: e  reason: collision with root package name */
    public int f7429e;

    /* renamed from: f  reason: collision with root package name */
    public int f7430f;

    /* renamed from: l  reason: collision with root package name */
    public boolean f7436l;

    /* renamed from: n  reason: collision with root package name */
    public p f7438n;

    /* renamed from: p  reason: collision with root package name */
    public boolean f7440p;

    /* renamed from: q  reason: collision with root package name */
    public long f7441q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f7442r;

    /* renamed from: g  reason: collision with root package name */
    public long[] f7431g = new long[0];

    /* renamed from: h  reason: collision with root package name */
    public int[] f7432h = new int[0];

    /* renamed from: i  reason: collision with root package name */
    public int[] f7433i = new int[0];

    /* renamed from: j  reason: collision with root package name */
    public long[] f7434j = new long[0];

    /* renamed from: k  reason: collision with root package name */
    public boolean[] f7435k = new boolean[0];

    /* renamed from: m  reason: collision with root package name */
    public boolean[] f7437m = new boolean[0];

    /* renamed from: o  reason: collision with root package name */
    public final h0 f7439o = new h0();

    public void a(h0 h0Var) {
        h0Var.l(this.f7439o.e(), 0, this.f7439o.g());
        this.f7439o.U(0);
        this.f7440p = false;
    }

    public void b(tc.l lVar) {
        lVar.readFully(this.f7439o.e(), 0, this.f7439o.g());
        this.f7439o.U(0);
        this.f7440p = false;
    }

    public long c(int i10) {
        return this.f7434j[i10];
    }

    public void d(int i10) {
        this.f7439o.Q(i10);
        this.f7436l = true;
        this.f7440p = true;
    }

    public void e(int i10, int i11) {
        this.f7429e = i10;
        this.f7430f = i11;
        if (this.f7432h.length < i10) {
            this.f7431g = new long[i10];
            this.f7432h = new int[i10];
        }
        if (this.f7433i.length < i11) {
            int i12 = (i11 * 125) / 100;
            this.f7433i = new int[i12];
            this.f7434j = new long[i12];
            this.f7435k = new boolean[i12];
            this.f7437m = new boolean[i12];
        }
    }

    public void f() {
        this.f7429e = 0;
        this.f7441q = 0L;
        this.f7442r = false;
        this.f7436l = false;
        this.f7440p = false;
        this.f7438n = null;
    }

    public boolean g(int i10) {
        if (this.f7436l && this.f7437m[i10]) {
            return true;
        }
        return false;
    }
}
