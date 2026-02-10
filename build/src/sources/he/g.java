package he;

import android.text.Layout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private String f27155a;

    /* renamed from: b  reason: collision with root package name */
    private int f27156b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f27157c;

    /* renamed from: d  reason: collision with root package name */
    private int f27158d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f27159e;

    /* renamed from: k  reason: collision with root package name */
    private float f27165k;

    /* renamed from: l  reason: collision with root package name */
    private String f27166l;

    /* renamed from: o  reason: collision with root package name */
    private Layout.Alignment f27169o;

    /* renamed from: p  reason: collision with root package name */
    private Layout.Alignment f27170p;

    /* renamed from: r  reason: collision with root package name */
    private b f27172r;

    /* renamed from: f  reason: collision with root package name */
    private int f27160f = -1;

    /* renamed from: g  reason: collision with root package name */
    private int f27161g = -1;

    /* renamed from: h  reason: collision with root package name */
    private int f27162h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f27163i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f27164j = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f27167m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f27168n = -1;

    /* renamed from: q  reason: collision with root package name */
    private int f27171q = -1;

    /* renamed from: s  reason: collision with root package name */
    private float f27173s = Float.MAX_VALUE;

    private g r(g gVar, boolean z10) {
        int i10;
        Layout.Alignment alignment;
        Layout.Alignment alignment2;
        String str;
        if (gVar != null) {
            if (!this.f27157c && gVar.f27157c) {
                w(gVar.f27156b);
            }
            if (this.f27162h == -1) {
                this.f27162h = gVar.f27162h;
            }
            if (this.f27163i == -1) {
                this.f27163i = gVar.f27163i;
            }
            if (this.f27155a == null && (str = gVar.f27155a) != null) {
                this.f27155a = str;
            }
            if (this.f27160f == -1) {
                this.f27160f = gVar.f27160f;
            }
            if (this.f27161g == -1) {
                this.f27161g = gVar.f27161g;
            }
            if (this.f27168n == -1) {
                this.f27168n = gVar.f27168n;
            }
            if (this.f27169o == null && (alignment2 = gVar.f27169o) != null) {
                this.f27169o = alignment2;
            }
            if (this.f27170p == null && (alignment = gVar.f27170p) != null) {
                this.f27170p = alignment;
            }
            if (this.f27171q == -1) {
                this.f27171q = gVar.f27171q;
            }
            if (this.f27164j == -1) {
                this.f27164j = gVar.f27164j;
                this.f27165k = gVar.f27165k;
            }
            if (this.f27172r == null) {
                this.f27172r = gVar.f27172r;
            }
            if (this.f27173s == Float.MAX_VALUE) {
                this.f27173s = gVar.f27173s;
            }
            if (z10 && !this.f27159e && gVar.f27159e) {
                u(gVar.f27158d);
            }
            if (z10 && this.f27167m == -1 && (i10 = gVar.f27167m) != -1) {
                this.f27167m = i10;
            }
        }
        return this;
    }

    public g A(String str) {
        this.f27166l = str;
        return this;
    }

    public g B(boolean z10) {
        this.f27163i = z10 ? 1 : 0;
        return this;
    }

    public g C(boolean z10) {
        this.f27160f = z10 ? 1 : 0;
        return this;
    }

    public g D(Layout.Alignment alignment) {
        this.f27170p = alignment;
        return this;
    }

    public g E(int i10) {
        this.f27168n = i10;
        return this;
    }

    public g F(int i10) {
        this.f27167m = i10;
        return this;
    }

    public g G(float f10) {
        this.f27173s = f10;
        return this;
    }

    public g H(Layout.Alignment alignment) {
        this.f27169o = alignment;
        return this;
    }

    public g I(boolean z10) {
        this.f27171q = z10 ? 1 : 0;
        return this;
    }

    public g J(b bVar) {
        this.f27172r = bVar;
        return this;
    }

    public g K(boolean z10) {
        this.f27161g = z10 ? 1 : 0;
        return this;
    }

    public g a(g gVar) {
        return r(gVar, true);
    }

    public int b() {
        if (this.f27159e) {
            return this.f27158d;
        }
        throw new IllegalStateException("Background color has not been defined.");
    }

    public int c() {
        if (this.f27157c) {
            return this.f27156b;
        }
        throw new IllegalStateException("Font color has not been defined.");
    }

    public String d() {
        return this.f27155a;
    }

    public float e() {
        return this.f27165k;
    }

    public int f() {
        return this.f27164j;
    }

    public String g() {
        return this.f27166l;
    }

    public Layout.Alignment h() {
        return this.f27170p;
    }

    public int i() {
        return this.f27168n;
    }

    public int j() {
        return this.f27167m;
    }

    public float k() {
        return this.f27173s;
    }

    public int l() {
        int i10;
        int i11 = this.f27162h;
        if (i11 == -1 && this.f27163i == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f27163i == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public Layout.Alignment m() {
        return this.f27169o;
    }

    public boolean n() {
        if (this.f27171q == 1) {
            return true;
        }
        return false;
    }

    public b o() {
        return this.f27172r;
    }

    public boolean p() {
        return this.f27159e;
    }

    public boolean q() {
        return this.f27157c;
    }

    public boolean s() {
        if (this.f27160f == 1) {
            return true;
        }
        return false;
    }

    public boolean t() {
        if (this.f27161g == 1) {
            return true;
        }
        return false;
    }

    public g u(int i10) {
        this.f27158d = i10;
        this.f27159e = true;
        return this;
    }

    public g v(boolean z10) {
        this.f27162h = z10 ? 1 : 0;
        return this;
    }

    public g w(int i10) {
        this.f27156b = i10;
        this.f27157c = true;
        return this;
    }

    public g x(String str) {
        this.f27155a = str;
        return this;
    }

    public g y(float f10) {
        this.f27165k = f10;
        return this;
    }

    public g z(int i10) {
        this.f27164j = i10;
        return this;
    }
}
