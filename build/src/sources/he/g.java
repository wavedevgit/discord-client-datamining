package he;

import android.text.Layout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private String f27724a;

    /* renamed from: b  reason: collision with root package name */
    private int f27725b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f27726c;

    /* renamed from: d  reason: collision with root package name */
    private int f27727d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f27728e;

    /* renamed from: k  reason: collision with root package name */
    private float f27734k;

    /* renamed from: l  reason: collision with root package name */
    private String f27735l;

    /* renamed from: o  reason: collision with root package name */
    private Layout.Alignment f27738o;

    /* renamed from: p  reason: collision with root package name */
    private Layout.Alignment f27739p;

    /* renamed from: r  reason: collision with root package name */
    private b f27741r;

    /* renamed from: f  reason: collision with root package name */
    private int f27729f = -1;

    /* renamed from: g  reason: collision with root package name */
    private int f27730g = -1;

    /* renamed from: h  reason: collision with root package name */
    private int f27731h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f27732i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f27733j = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f27736m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f27737n = -1;

    /* renamed from: q  reason: collision with root package name */
    private int f27740q = -1;

    /* renamed from: s  reason: collision with root package name */
    private float f27742s = Float.MAX_VALUE;

    private g r(g gVar, boolean z10) {
        int i10;
        Layout.Alignment alignment;
        Layout.Alignment alignment2;
        String str;
        if (gVar != null) {
            if (!this.f27726c && gVar.f27726c) {
                w(gVar.f27725b);
            }
            if (this.f27731h == -1) {
                this.f27731h = gVar.f27731h;
            }
            if (this.f27732i == -1) {
                this.f27732i = gVar.f27732i;
            }
            if (this.f27724a == null && (str = gVar.f27724a) != null) {
                this.f27724a = str;
            }
            if (this.f27729f == -1) {
                this.f27729f = gVar.f27729f;
            }
            if (this.f27730g == -1) {
                this.f27730g = gVar.f27730g;
            }
            if (this.f27737n == -1) {
                this.f27737n = gVar.f27737n;
            }
            if (this.f27738o == null && (alignment2 = gVar.f27738o) != null) {
                this.f27738o = alignment2;
            }
            if (this.f27739p == null && (alignment = gVar.f27739p) != null) {
                this.f27739p = alignment;
            }
            if (this.f27740q == -1) {
                this.f27740q = gVar.f27740q;
            }
            if (this.f27733j == -1) {
                this.f27733j = gVar.f27733j;
                this.f27734k = gVar.f27734k;
            }
            if (this.f27741r == null) {
                this.f27741r = gVar.f27741r;
            }
            if (this.f27742s == Float.MAX_VALUE) {
                this.f27742s = gVar.f27742s;
            }
            if (z10 && !this.f27728e && gVar.f27728e) {
                u(gVar.f27727d);
            }
            if (z10 && this.f27736m == -1 && (i10 = gVar.f27736m) != -1) {
                this.f27736m = i10;
            }
        }
        return this;
    }

    public g A(String str) {
        this.f27735l = str;
        return this;
    }

    public g B(boolean z10) {
        this.f27732i = z10 ? 1 : 0;
        return this;
    }

    public g C(boolean z10) {
        this.f27729f = z10 ? 1 : 0;
        return this;
    }

    public g D(Layout.Alignment alignment) {
        this.f27739p = alignment;
        return this;
    }

    public g E(int i10) {
        this.f27737n = i10;
        return this;
    }

    public g F(int i10) {
        this.f27736m = i10;
        return this;
    }

    public g G(float f10) {
        this.f27742s = f10;
        return this;
    }

    public g H(Layout.Alignment alignment) {
        this.f27738o = alignment;
        return this;
    }

    public g I(boolean z10) {
        this.f27740q = z10 ? 1 : 0;
        return this;
    }

    public g J(b bVar) {
        this.f27741r = bVar;
        return this;
    }

    public g K(boolean z10) {
        this.f27730g = z10 ? 1 : 0;
        return this;
    }

    public g a(g gVar) {
        return r(gVar, true);
    }

    public int b() {
        if (this.f27728e) {
            return this.f27727d;
        }
        throw new IllegalStateException("Background color has not been defined.");
    }

    public int c() {
        if (this.f27726c) {
            return this.f27725b;
        }
        throw new IllegalStateException("Font color has not been defined.");
    }

    public String d() {
        return this.f27724a;
    }

    public float e() {
        return this.f27734k;
    }

    public int f() {
        return this.f27733j;
    }

    public String g() {
        return this.f27735l;
    }

    public Layout.Alignment h() {
        return this.f27739p;
    }

    public int i() {
        return this.f27737n;
    }

    public int j() {
        return this.f27736m;
    }

    public float k() {
        return this.f27742s;
    }

    public int l() {
        int i10;
        int i11 = this.f27731h;
        if (i11 == -1 && this.f27732i == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f27732i == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public Layout.Alignment m() {
        return this.f27738o;
    }

    public boolean n() {
        if (this.f27740q == 1) {
            return true;
        }
        return false;
    }

    public b o() {
        return this.f27741r;
    }

    public boolean p() {
        return this.f27728e;
    }

    public boolean q() {
        return this.f27726c;
    }

    public boolean s() {
        if (this.f27729f == 1) {
            return true;
        }
        return false;
    }

    public boolean t() {
        if (this.f27730g == 1) {
            return true;
        }
        return false;
    }

    public g u(int i10) {
        this.f27727d = i10;
        this.f27728e = true;
        return this;
    }

    public g v(boolean z10) {
        this.f27731h = z10 ? 1 : 0;
        return this;
    }

    public g w(int i10) {
        this.f27725b = i10;
        this.f27726c = true;
        return this;
    }

    public g x(String str) {
        this.f27724a = str;
        return this;
    }

    public g y(float f10) {
        this.f27734k = f10;
        return this;
    }

    public g z(int i10) {
        this.f27733j = i10;
        return this;
    }
}
