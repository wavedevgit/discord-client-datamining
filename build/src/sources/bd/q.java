package bd;

import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q {

    /* renamed from: a  reason: collision with root package name */
    public c f6662a;

    /* renamed from: b  reason: collision with root package name */
    public long f6663b;

    /* renamed from: c  reason: collision with root package name */
    public long f6664c;

    /* renamed from: d  reason: collision with root package name */
    public long f6665d;

    /* renamed from: e  reason: collision with root package name */
    public int f6666e;

    /* renamed from: f  reason: collision with root package name */
    public int f6667f;

    /* renamed from: l  reason: collision with root package name */
    public boolean f6673l;

    /* renamed from: n  reason: collision with root package name */
    public p f6675n;

    /* renamed from: p  reason: collision with root package name */
    public boolean f6677p;

    /* renamed from: q  reason: collision with root package name */
    public long f6678q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f6679r;

    /* renamed from: g  reason: collision with root package name */
    public long[] f6668g = new long[0];

    /* renamed from: h  reason: collision with root package name */
    public int[] f6669h = new int[0];

    /* renamed from: i  reason: collision with root package name */
    public int[] f6670i = new int[0];

    /* renamed from: j  reason: collision with root package name */
    public long[] f6671j = new long[0];

    /* renamed from: k  reason: collision with root package name */
    public boolean[] f6672k = new boolean[0];

    /* renamed from: m  reason: collision with root package name */
    public boolean[] f6674m = new boolean[0];

    /* renamed from: o  reason: collision with root package name */
    public final h0 f6676o = new h0();

    public void a(h0 h0Var) {
        h0Var.l(this.f6676o.e(), 0, this.f6676o.g());
        this.f6676o.U(0);
        this.f6677p = false;
    }

    public void b(tc.l lVar) {
        lVar.readFully(this.f6676o.e(), 0, this.f6676o.g());
        this.f6676o.U(0);
        this.f6677p = false;
    }

    public long c(int i10) {
        return this.f6671j[i10];
    }

    public void d(int i10) {
        this.f6676o.Q(i10);
        this.f6673l = true;
        this.f6677p = true;
    }

    public void e(int i10, int i11) {
        this.f6666e = i10;
        this.f6667f = i11;
        if (this.f6669h.length < i10) {
            this.f6668g = new long[i10];
            this.f6669h = new int[i10];
        }
        if (this.f6670i.length < i11) {
            int i12 = (i11 * 125) / 100;
            this.f6670i = new int[i12];
            this.f6671j = new long[i12];
            this.f6672k = new boolean[i12];
            this.f6674m = new boolean[i12];
        }
    }

    public void f() {
        this.f6666e = 0;
        this.f6678q = 0L;
        this.f6679r = false;
        this.f6673l = false;
        this.f6677p = false;
        this.f6675n = null;
    }

    public boolean g(int i10) {
        if (this.f6673l && this.f6674m[i10]) {
            return true;
        }
        return false;
    }
}
