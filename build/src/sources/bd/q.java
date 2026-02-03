package bd;

import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q {

    /* renamed from: a  reason: collision with root package name */
    public c f6476a;

    /* renamed from: b  reason: collision with root package name */
    public long f6477b;

    /* renamed from: c  reason: collision with root package name */
    public long f6478c;

    /* renamed from: d  reason: collision with root package name */
    public long f6479d;

    /* renamed from: e  reason: collision with root package name */
    public int f6480e;

    /* renamed from: f  reason: collision with root package name */
    public int f6481f;

    /* renamed from: l  reason: collision with root package name */
    public boolean f6487l;

    /* renamed from: n  reason: collision with root package name */
    public p f6489n;

    /* renamed from: p  reason: collision with root package name */
    public boolean f6491p;

    /* renamed from: q  reason: collision with root package name */
    public long f6492q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f6493r;

    /* renamed from: g  reason: collision with root package name */
    public long[] f6482g = new long[0];

    /* renamed from: h  reason: collision with root package name */
    public int[] f6483h = new int[0];

    /* renamed from: i  reason: collision with root package name */
    public int[] f6484i = new int[0];

    /* renamed from: j  reason: collision with root package name */
    public long[] f6485j = new long[0];

    /* renamed from: k  reason: collision with root package name */
    public boolean[] f6486k = new boolean[0];

    /* renamed from: m  reason: collision with root package name */
    public boolean[] f6488m = new boolean[0];

    /* renamed from: o  reason: collision with root package name */
    public final h0 f6490o = new h0();

    public void a(h0 h0Var) {
        h0Var.l(this.f6490o.e(), 0, this.f6490o.g());
        this.f6490o.U(0);
        this.f6491p = false;
    }

    public void b(tc.l lVar) {
        lVar.readFully(this.f6490o.e(), 0, this.f6490o.g());
        this.f6490o.U(0);
        this.f6491p = false;
    }

    public long c(int i10) {
        return this.f6485j[i10];
    }

    public void d(int i10) {
        this.f6490o.Q(i10);
        this.f6487l = true;
        this.f6491p = true;
    }

    public void e(int i10, int i11) {
        this.f6480e = i10;
        this.f6481f = i11;
        if (this.f6483h.length < i10) {
            this.f6482g = new long[i10];
            this.f6483h = new int[i10];
        }
        if (this.f6484i.length < i11) {
            int i12 = (i11 * 125) / 100;
            this.f6484i = new int[i12];
            this.f6485j = new long[i12];
            this.f6486k = new boolean[i12];
            this.f6488m = new boolean[i12];
        }
    }

    public void f() {
        this.f6480e = 0;
        this.f6492q = 0L;
        this.f6493r = false;
        this.f6487l = false;
        this.f6491p = false;
        this.f6489n = null;
    }

    public boolean g(int i10) {
        if (this.f6487l && this.f6488m[i10]) {
            return true;
        }
        return false;
    }
}
