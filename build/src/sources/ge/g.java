package ge;

import android.text.Layout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private String f26702a;

    /* renamed from: b  reason: collision with root package name */
    private int f26703b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f26704c;

    /* renamed from: d  reason: collision with root package name */
    private int f26705d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f26706e;

    /* renamed from: k  reason: collision with root package name */
    private float f26712k;

    /* renamed from: l  reason: collision with root package name */
    private String f26713l;

    /* renamed from: o  reason: collision with root package name */
    private Layout.Alignment f26716o;

    /* renamed from: p  reason: collision with root package name */
    private Layout.Alignment f26717p;

    /* renamed from: r  reason: collision with root package name */
    private b f26719r;

    /* renamed from: f  reason: collision with root package name */
    private int f26707f = -1;

    /* renamed from: g  reason: collision with root package name */
    private int f26708g = -1;

    /* renamed from: h  reason: collision with root package name */
    private int f26709h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f26710i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f26711j = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f26714m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f26715n = -1;

    /* renamed from: q  reason: collision with root package name */
    private int f26718q = -1;

    /* renamed from: s  reason: collision with root package name */
    private float f26720s = Float.MAX_VALUE;

    private g r(g gVar, boolean z10) {
        int i10;
        Layout.Alignment alignment;
        Layout.Alignment alignment2;
        String str;
        if (gVar != null) {
            if (!this.f26704c && gVar.f26704c) {
                w(gVar.f26703b);
            }
            if (this.f26709h == -1) {
                this.f26709h = gVar.f26709h;
            }
            if (this.f26710i == -1) {
                this.f26710i = gVar.f26710i;
            }
            if (this.f26702a == null && (str = gVar.f26702a) != null) {
                this.f26702a = str;
            }
            if (this.f26707f == -1) {
                this.f26707f = gVar.f26707f;
            }
            if (this.f26708g == -1) {
                this.f26708g = gVar.f26708g;
            }
            if (this.f26715n == -1) {
                this.f26715n = gVar.f26715n;
            }
            if (this.f26716o == null && (alignment2 = gVar.f26716o) != null) {
                this.f26716o = alignment2;
            }
            if (this.f26717p == null && (alignment = gVar.f26717p) != null) {
                this.f26717p = alignment;
            }
            if (this.f26718q == -1) {
                this.f26718q = gVar.f26718q;
            }
            if (this.f26711j == -1) {
                this.f26711j = gVar.f26711j;
                this.f26712k = gVar.f26712k;
            }
            if (this.f26719r == null) {
                this.f26719r = gVar.f26719r;
            }
            if (this.f26720s == Float.MAX_VALUE) {
                this.f26720s = gVar.f26720s;
            }
            if (z10 && !this.f26706e && gVar.f26706e) {
                u(gVar.f26705d);
            }
            if (z10 && this.f26714m == -1 && (i10 = gVar.f26714m) != -1) {
                this.f26714m = i10;
            }
        }
        return this;
    }

    public g A(String str) {
        this.f26713l = str;
        return this;
    }

    public g B(boolean z10) {
        this.f26710i = z10 ? 1 : 0;
        return this;
    }

    public g C(boolean z10) {
        this.f26707f = z10 ? 1 : 0;
        return this;
    }

    public g D(Layout.Alignment alignment) {
        this.f26717p = alignment;
        return this;
    }

    public g E(int i10) {
        this.f26715n = i10;
        return this;
    }

    public g F(int i10) {
        this.f26714m = i10;
        return this;
    }

    public g G(float f10) {
        this.f26720s = f10;
        return this;
    }

    public g H(Layout.Alignment alignment) {
        this.f26716o = alignment;
        return this;
    }

    public g I(boolean z10) {
        this.f26718q = z10 ? 1 : 0;
        return this;
    }

    public g J(b bVar) {
        this.f26719r = bVar;
        return this;
    }

    public g K(boolean z10) {
        this.f26708g = z10 ? 1 : 0;
        return this;
    }

    public g a(g gVar) {
        return r(gVar, true);
    }

    public int b() {
        if (this.f26706e) {
            return this.f26705d;
        }
        throw new IllegalStateException("Background color has not been defined.");
    }

    public int c() {
        if (this.f26704c) {
            return this.f26703b;
        }
        throw new IllegalStateException("Font color has not been defined.");
    }

    public String d() {
        return this.f26702a;
    }

    public float e() {
        return this.f26712k;
    }

    public int f() {
        return this.f26711j;
    }

    public String g() {
        return this.f26713l;
    }

    public Layout.Alignment h() {
        return this.f26717p;
    }

    public int i() {
        return this.f26715n;
    }

    public int j() {
        return this.f26714m;
    }

    public float k() {
        return this.f26720s;
    }

    public int l() {
        int i10;
        int i11 = this.f26709h;
        if (i11 == -1 && this.f26710i == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f26710i == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public Layout.Alignment m() {
        return this.f26716o;
    }

    public boolean n() {
        if (this.f26718q == 1) {
            return true;
        }
        return false;
    }

    public b o() {
        return this.f26719r;
    }

    public boolean p() {
        return this.f26706e;
    }

    public boolean q() {
        return this.f26704c;
    }

    public boolean s() {
        if (this.f26707f == 1) {
            return true;
        }
        return false;
    }

    public boolean t() {
        if (this.f26708g == 1) {
            return true;
        }
        return false;
    }

    public g u(int i10) {
        this.f26705d = i10;
        this.f26706e = true;
        return this;
    }

    public g v(boolean z10) {
        this.f26709h = z10 ? 1 : 0;
        return this;
    }

    public g w(int i10) {
        this.f26703b = i10;
        this.f26704c = true;
        return this;
    }

    public g x(String str) {
        this.f26702a = str;
        return this;
    }

    public g y(float f10) {
        this.f26712k = f10;
        return this;
    }

    public g z(int i10) {
        this.f26711j = i10;
        return this;
    }
}
