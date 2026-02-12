package he;

import android.text.Layout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private String f27156a;

    /* renamed from: b  reason: collision with root package name */
    private int f27157b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f27158c;

    /* renamed from: d  reason: collision with root package name */
    private int f27159d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f27160e;

    /* renamed from: k  reason: collision with root package name */
    private float f27166k;

    /* renamed from: l  reason: collision with root package name */
    private String f27167l;

    /* renamed from: o  reason: collision with root package name */
    private Layout.Alignment f27170o;

    /* renamed from: p  reason: collision with root package name */
    private Layout.Alignment f27171p;

    /* renamed from: r  reason: collision with root package name */
    private b f27173r;

    /* renamed from: f  reason: collision with root package name */
    private int f27161f = -1;

    /* renamed from: g  reason: collision with root package name */
    private int f27162g = -1;

    /* renamed from: h  reason: collision with root package name */
    private int f27163h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f27164i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f27165j = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f27168m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f27169n = -1;

    /* renamed from: q  reason: collision with root package name */
    private int f27172q = -1;

    /* renamed from: s  reason: collision with root package name */
    private float f27174s = Float.MAX_VALUE;

    private g r(g gVar, boolean z10) {
        int i10;
        Layout.Alignment alignment;
        Layout.Alignment alignment2;
        String str;
        if (gVar != null) {
            if (!this.f27158c && gVar.f27158c) {
                w(gVar.f27157b);
            }
            if (this.f27163h == -1) {
                this.f27163h = gVar.f27163h;
            }
            if (this.f27164i == -1) {
                this.f27164i = gVar.f27164i;
            }
            if (this.f27156a == null && (str = gVar.f27156a) != null) {
                this.f27156a = str;
            }
            if (this.f27161f == -1) {
                this.f27161f = gVar.f27161f;
            }
            if (this.f27162g == -1) {
                this.f27162g = gVar.f27162g;
            }
            if (this.f27169n == -1) {
                this.f27169n = gVar.f27169n;
            }
            if (this.f27170o == null && (alignment2 = gVar.f27170o) != null) {
                this.f27170o = alignment2;
            }
            if (this.f27171p == null && (alignment = gVar.f27171p) != null) {
                this.f27171p = alignment;
            }
            if (this.f27172q == -1) {
                this.f27172q = gVar.f27172q;
            }
            if (this.f27165j == -1) {
                this.f27165j = gVar.f27165j;
                this.f27166k = gVar.f27166k;
            }
            if (this.f27173r == null) {
                this.f27173r = gVar.f27173r;
            }
            if (this.f27174s == Float.MAX_VALUE) {
                this.f27174s = gVar.f27174s;
            }
            if (z10 && !this.f27160e && gVar.f27160e) {
                u(gVar.f27159d);
            }
            if (z10 && this.f27168m == -1 && (i10 = gVar.f27168m) != -1) {
                this.f27168m = i10;
            }
        }
        return this;
    }

    public g A(String str) {
        this.f27167l = str;
        return this;
    }

    public g B(boolean z10) {
        this.f27164i = z10 ? 1 : 0;
        return this;
    }

    public g C(boolean z10) {
        this.f27161f = z10 ? 1 : 0;
        return this;
    }

    public g D(Layout.Alignment alignment) {
        this.f27171p = alignment;
        return this;
    }

    public g E(int i10) {
        this.f27169n = i10;
        return this;
    }

    public g F(int i10) {
        this.f27168m = i10;
        return this;
    }

    public g G(float f10) {
        this.f27174s = f10;
        return this;
    }

    public g H(Layout.Alignment alignment) {
        this.f27170o = alignment;
        return this;
    }

    public g I(boolean z10) {
        this.f27172q = z10 ? 1 : 0;
        return this;
    }

    public g J(b bVar) {
        this.f27173r = bVar;
        return this;
    }

    public g K(boolean z10) {
        this.f27162g = z10 ? 1 : 0;
        return this;
    }

    public g a(g gVar) {
        return r(gVar, true);
    }

    public int b() {
        if (this.f27160e) {
            return this.f27159d;
        }
        throw new IllegalStateException("Background color has not been defined.");
    }

    public int c() {
        if (this.f27158c) {
            return this.f27157b;
        }
        throw new IllegalStateException("Font color has not been defined.");
    }

    public String d() {
        return this.f27156a;
    }

    public float e() {
        return this.f27166k;
    }

    public int f() {
        return this.f27165j;
    }

    public String g() {
        return this.f27167l;
    }

    public Layout.Alignment h() {
        return this.f27171p;
    }

    public int i() {
        return this.f27169n;
    }

    public int j() {
        return this.f27168m;
    }

    public float k() {
        return this.f27174s;
    }

    public int l() {
        int i10;
        int i11 = this.f27163h;
        if (i11 == -1 && this.f27164i == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f27164i == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public Layout.Alignment m() {
        return this.f27170o;
    }

    public boolean n() {
        if (this.f27172q == 1) {
            return true;
        }
        return false;
    }

    public b o() {
        return this.f27173r;
    }

    public boolean p() {
        return this.f27160e;
    }

    public boolean q() {
        return this.f27158c;
    }

    public boolean s() {
        if (this.f27161f == 1) {
            return true;
        }
        return false;
    }

    public boolean t() {
        if (this.f27162g == 1) {
            return true;
        }
        return false;
    }

    public g u(int i10) {
        this.f27159d = i10;
        this.f27160e = true;
        return this;
    }

    public g v(boolean z10) {
        this.f27163h = z10 ? 1 : 0;
        return this;
    }

    public g w(int i10) {
        this.f27157b = i10;
        this.f27158c = true;
        return this;
    }

    public g x(String str) {
        this.f27156a = str;
        return this;
    }

    public g y(float f10) {
        this.f27166k = f10;
        return this;
    }

    public g z(int i10) {
        this.f27165j = i10;
        return this;
    }
}
