package he;

import android.text.Layout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private String f25937a;

    /* renamed from: b  reason: collision with root package name */
    private int f25938b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f25939c;

    /* renamed from: d  reason: collision with root package name */
    private int f25940d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f25941e;

    /* renamed from: k  reason: collision with root package name */
    private float f25947k;

    /* renamed from: l  reason: collision with root package name */
    private String f25948l;

    /* renamed from: o  reason: collision with root package name */
    private Layout.Alignment f25951o;

    /* renamed from: p  reason: collision with root package name */
    private Layout.Alignment f25952p;

    /* renamed from: r  reason: collision with root package name */
    private b f25954r;

    /* renamed from: f  reason: collision with root package name */
    private int f25942f = -1;

    /* renamed from: g  reason: collision with root package name */
    private int f25943g = -1;

    /* renamed from: h  reason: collision with root package name */
    private int f25944h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f25945i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f25946j = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f25949m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f25950n = -1;

    /* renamed from: q  reason: collision with root package name */
    private int f25953q = -1;

    /* renamed from: s  reason: collision with root package name */
    private float f25955s = Float.MAX_VALUE;

    private g r(g gVar, boolean z10) {
        int i10;
        Layout.Alignment alignment;
        Layout.Alignment alignment2;
        String str;
        if (gVar != null) {
            if (!this.f25939c && gVar.f25939c) {
                w(gVar.f25938b);
            }
            if (this.f25944h == -1) {
                this.f25944h = gVar.f25944h;
            }
            if (this.f25945i == -1) {
                this.f25945i = gVar.f25945i;
            }
            if (this.f25937a == null && (str = gVar.f25937a) != null) {
                this.f25937a = str;
            }
            if (this.f25942f == -1) {
                this.f25942f = gVar.f25942f;
            }
            if (this.f25943g == -1) {
                this.f25943g = gVar.f25943g;
            }
            if (this.f25950n == -1) {
                this.f25950n = gVar.f25950n;
            }
            if (this.f25951o == null && (alignment2 = gVar.f25951o) != null) {
                this.f25951o = alignment2;
            }
            if (this.f25952p == null && (alignment = gVar.f25952p) != null) {
                this.f25952p = alignment;
            }
            if (this.f25953q == -1) {
                this.f25953q = gVar.f25953q;
            }
            if (this.f25946j == -1) {
                this.f25946j = gVar.f25946j;
                this.f25947k = gVar.f25947k;
            }
            if (this.f25954r == null) {
                this.f25954r = gVar.f25954r;
            }
            if (this.f25955s == Float.MAX_VALUE) {
                this.f25955s = gVar.f25955s;
            }
            if (z10 && !this.f25941e && gVar.f25941e) {
                u(gVar.f25940d);
            }
            if (z10 && this.f25949m == -1 && (i10 = gVar.f25949m) != -1) {
                this.f25949m = i10;
            }
        }
        return this;
    }

    public g A(String str) {
        this.f25948l = str;
        return this;
    }

    public g B(boolean z10) {
        this.f25945i = z10 ? 1 : 0;
        return this;
    }

    public g C(boolean z10) {
        this.f25942f = z10 ? 1 : 0;
        return this;
    }

    public g D(Layout.Alignment alignment) {
        this.f25952p = alignment;
        return this;
    }

    public g E(int i10) {
        this.f25950n = i10;
        return this;
    }

    public g F(int i10) {
        this.f25949m = i10;
        return this;
    }

    public g G(float f10) {
        this.f25955s = f10;
        return this;
    }

    public g H(Layout.Alignment alignment) {
        this.f25951o = alignment;
        return this;
    }

    public g I(boolean z10) {
        this.f25953q = z10 ? 1 : 0;
        return this;
    }

    public g J(b bVar) {
        this.f25954r = bVar;
        return this;
    }

    public g K(boolean z10) {
        this.f25943g = z10 ? 1 : 0;
        return this;
    }

    public g a(g gVar) {
        return r(gVar, true);
    }

    public int b() {
        if (this.f25941e) {
            return this.f25940d;
        }
        throw new IllegalStateException("Background color has not been defined.");
    }

    public int c() {
        if (this.f25939c) {
            return this.f25938b;
        }
        throw new IllegalStateException("Font color has not been defined.");
    }

    public String d() {
        return this.f25937a;
    }

    public float e() {
        return this.f25947k;
    }

    public int f() {
        return this.f25946j;
    }

    public String g() {
        return this.f25948l;
    }

    public Layout.Alignment h() {
        return this.f25952p;
    }

    public int i() {
        return this.f25950n;
    }

    public int j() {
        return this.f25949m;
    }

    public float k() {
        return this.f25955s;
    }

    public int l() {
        int i10;
        int i11 = this.f25944h;
        if (i11 == -1 && this.f25945i == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f25945i == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public Layout.Alignment m() {
        return this.f25951o;
    }

    public boolean n() {
        if (this.f25953q == 1) {
            return true;
        }
        return false;
    }

    public b o() {
        return this.f25954r;
    }

    public boolean p() {
        return this.f25941e;
    }

    public boolean q() {
        return this.f25939c;
    }

    public boolean s() {
        if (this.f25942f == 1) {
            return true;
        }
        return false;
    }

    public boolean t() {
        if (this.f25943g == 1) {
            return true;
        }
        return false;
    }

    public g u(int i10) {
        this.f25940d = i10;
        this.f25941e = true;
        return this;
    }

    public g v(boolean z10) {
        this.f25944h = z10 ? 1 : 0;
        return this;
    }

    public g w(int i10) {
        this.f25938b = i10;
        this.f25939c = true;
        return this;
    }

    public g x(String str) {
        this.f25937a = str;
        return this;
    }

    public g y(float f10) {
        this.f25947k = f10;
        return this;
    }

    public g z(int i10) {
        this.f25946j = i10;
        return this;
    }
}
