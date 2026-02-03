package bd;

import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q {

    /* renamed from: a  reason: collision with root package name */
    public c f6522a;

    /* renamed from: b  reason: collision with root package name */
    public long f6523b;

    /* renamed from: c  reason: collision with root package name */
    public long f6524c;

    /* renamed from: d  reason: collision with root package name */
    public long f6525d;

    /* renamed from: e  reason: collision with root package name */
    public int f6526e;

    /* renamed from: f  reason: collision with root package name */
    public int f6527f;

    /* renamed from: l  reason: collision with root package name */
    public boolean f6533l;

    /* renamed from: n  reason: collision with root package name */
    public p f6535n;

    /* renamed from: p  reason: collision with root package name */
    public boolean f6537p;

    /* renamed from: q  reason: collision with root package name */
    public long f6538q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f6539r;

    /* renamed from: g  reason: collision with root package name */
    public long[] f6528g = new long[0];

    /* renamed from: h  reason: collision with root package name */
    public int[] f6529h = new int[0];

    /* renamed from: i  reason: collision with root package name */
    public int[] f6530i = new int[0];

    /* renamed from: j  reason: collision with root package name */
    public long[] f6531j = new long[0];

    /* renamed from: k  reason: collision with root package name */
    public boolean[] f6532k = new boolean[0];

    /* renamed from: m  reason: collision with root package name */
    public boolean[] f6534m = new boolean[0];

    /* renamed from: o  reason: collision with root package name */
    public final h0 f6536o = new h0();

    public void a(h0 h0Var) {
        h0Var.l(this.f6536o.e(), 0, this.f6536o.g());
        this.f6536o.U(0);
        this.f6537p = false;
    }

    public void b(tc.l lVar) {
        lVar.readFully(this.f6536o.e(), 0, this.f6536o.g());
        this.f6536o.U(0);
        this.f6537p = false;
    }

    public long c(int i10) {
        return this.f6531j[i10];
    }

    public void d(int i10) {
        this.f6536o.Q(i10);
        this.f6533l = true;
        this.f6537p = true;
    }

    public void e(int i10, int i11) {
        this.f6526e = i10;
        this.f6527f = i11;
        if (this.f6529h.length < i10) {
            this.f6528g = new long[i10];
            this.f6529h = new int[i10];
        }
        if (this.f6530i.length < i11) {
            int i12 = (i11 * 125) / 100;
            this.f6530i = new int[i12];
            this.f6531j = new long[i12];
            this.f6532k = new boolean[i12];
            this.f6534m = new boolean[i12];
        }
    }

    public void f() {
        this.f6526e = 0;
        this.f6538q = 0L;
        this.f6539r = false;
        this.f6533l = false;
        this.f6537p = false;
        this.f6535n = null;
    }

    public boolean g(int i10) {
        if (this.f6533l && this.f6534m[i10]) {
            return true;
        }
        return false;
    }
}
