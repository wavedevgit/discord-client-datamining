package cd;

import oe.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q {

    /* renamed from: a  reason: collision with root package name */
    public c f7503a;

    /* renamed from: b  reason: collision with root package name */
    public long f7504b;

    /* renamed from: c  reason: collision with root package name */
    public long f7505c;

    /* renamed from: d  reason: collision with root package name */
    public long f7506d;

    /* renamed from: e  reason: collision with root package name */
    public int f7507e;

    /* renamed from: f  reason: collision with root package name */
    public int f7508f;

    /* renamed from: l  reason: collision with root package name */
    public boolean f7514l;

    /* renamed from: n  reason: collision with root package name */
    public p f7516n;

    /* renamed from: p  reason: collision with root package name */
    public boolean f7518p;

    /* renamed from: q  reason: collision with root package name */
    public long f7519q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f7520r;

    /* renamed from: g  reason: collision with root package name */
    public long[] f7509g = new long[0];

    /* renamed from: h  reason: collision with root package name */
    public int[] f7510h = new int[0];

    /* renamed from: i  reason: collision with root package name */
    public int[] f7511i = new int[0];

    /* renamed from: j  reason: collision with root package name */
    public long[] f7512j = new long[0];

    /* renamed from: k  reason: collision with root package name */
    public boolean[] f7513k = new boolean[0];

    /* renamed from: m  reason: collision with root package name */
    public boolean[] f7515m = new boolean[0];

    /* renamed from: o  reason: collision with root package name */
    public final h0 f7517o = new h0();

    public void a(h0 h0Var) {
        h0Var.l(this.f7517o.e(), 0, this.f7517o.g());
        this.f7517o.U(0);
        this.f7518p = false;
    }

    public void b(uc.l lVar) {
        lVar.readFully(this.f7517o.e(), 0, this.f7517o.g());
        this.f7517o.U(0);
        this.f7518p = false;
    }

    public long c(int i10) {
        return this.f7512j[i10];
    }

    public void d(int i10) {
        this.f7517o.Q(i10);
        this.f7514l = true;
        this.f7518p = true;
    }

    public void e(int i10, int i11) {
        this.f7507e = i10;
        this.f7508f = i11;
        if (this.f7510h.length < i10) {
            this.f7509g = new long[i10];
            this.f7510h = new int[i10];
        }
        if (this.f7511i.length < i11) {
            int i12 = (i11 * 125) / 100;
            this.f7511i = new int[i12];
            this.f7512j = new long[i12];
            this.f7513k = new boolean[i12];
            this.f7515m = new boolean[i12];
        }
    }

    public void f() {
        this.f7507e = 0;
        this.f7519q = 0L;
        this.f7520r = false;
        this.f7514l = false;
        this.f7518p = false;
        this.f7516n = null;
    }

    public boolean g(int i10) {
        if (this.f7514l && this.f7515m[i10]) {
            return true;
        }
        return false;
    }
}
