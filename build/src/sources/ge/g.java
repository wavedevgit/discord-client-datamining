package ge;

import android.text.Layout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private String f25026a;

    /* renamed from: b  reason: collision with root package name */
    private int f25027b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f25028c;

    /* renamed from: d  reason: collision with root package name */
    private int f25029d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f25030e;

    /* renamed from: k  reason: collision with root package name */
    private float f25036k;

    /* renamed from: l  reason: collision with root package name */
    private String f25037l;

    /* renamed from: o  reason: collision with root package name */
    private Layout.Alignment f25040o;

    /* renamed from: p  reason: collision with root package name */
    private Layout.Alignment f25041p;

    /* renamed from: r  reason: collision with root package name */
    private b f25043r;

    /* renamed from: f  reason: collision with root package name */
    private int f25031f = -1;

    /* renamed from: g  reason: collision with root package name */
    private int f25032g = -1;

    /* renamed from: h  reason: collision with root package name */
    private int f25033h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f25034i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f25035j = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f25038m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f25039n = -1;

    /* renamed from: q  reason: collision with root package name */
    private int f25042q = -1;

    /* renamed from: s  reason: collision with root package name */
    private float f25044s = Float.MAX_VALUE;

    private g r(g gVar, boolean z10) {
        int i10;
        Layout.Alignment alignment;
        Layout.Alignment alignment2;
        String str;
        if (gVar != null) {
            if (!this.f25028c && gVar.f25028c) {
                w(gVar.f25027b);
            }
            if (this.f25033h == -1) {
                this.f25033h = gVar.f25033h;
            }
            if (this.f25034i == -1) {
                this.f25034i = gVar.f25034i;
            }
            if (this.f25026a == null && (str = gVar.f25026a) != null) {
                this.f25026a = str;
            }
            if (this.f25031f == -1) {
                this.f25031f = gVar.f25031f;
            }
            if (this.f25032g == -1) {
                this.f25032g = gVar.f25032g;
            }
            if (this.f25039n == -1) {
                this.f25039n = gVar.f25039n;
            }
            if (this.f25040o == null && (alignment2 = gVar.f25040o) != null) {
                this.f25040o = alignment2;
            }
            if (this.f25041p == null && (alignment = gVar.f25041p) != null) {
                this.f25041p = alignment;
            }
            if (this.f25042q == -1) {
                this.f25042q = gVar.f25042q;
            }
            if (this.f25035j == -1) {
                this.f25035j = gVar.f25035j;
                this.f25036k = gVar.f25036k;
            }
            if (this.f25043r == null) {
                this.f25043r = gVar.f25043r;
            }
            if (this.f25044s == Float.MAX_VALUE) {
                this.f25044s = gVar.f25044s;
            }
            if (z10 && !this.f25030e && gVar.f25030e) {
                u(gVar.f25029d);
            }
            if (z10 && this.f25038m == -1 && (i10 = gVar.f25038m) != -1) {
                this.f25038m = i10;
            }
        }
        return this;
    }

    public g A(String str) {
        this.f25037l = str;
        return this;
    }

    public g B(boolean z10) {
        this.f25034i = z10 ? 1 : 0;
        return this;
    }

    public g C(boolean z10) {
        this.f25031f = z10 ? 1 : 0;
        return this;
    }

    public g D(Layout.Alignment alignment) {
        this.f25041p = alignment;
        return this;
    }

    public g E(int i10) {
        this.f25039n = i10;
        return this;
    }

    public g F(int i10) {
        this.f25038m = i10;
        return this;
    }

    public g G(float f10) {
        this.f25044s = f10;
        return this;
    }

    public g H(Layout.Alignment alignment) {
        this.f25040o = alignment;
        return this;
    }

    public g I(boolean z10) {
        this.f25042q = z10 ? 1 : 0;
        return this;
    }

    public g J(b bVar) {
        this.f25043r = bVar;
        return this;
    }

    public g K(boolean z10) {
        this.f25032g = z10 ? 1 : 0;
        return this;
    }

    public g a(g gVar) {
        return r(gVar, true);
    }

    public int b() {
        if (this.f25030e) {
            return this.f25029d;
        }
        throw new IllegalStateException("Background color has not been defined.");
    }

    public int c() {
        if (this.f25028c) {
            return this.f25027b;
        }
        throw new IllegalStateException("Font color has not been defined.");
    }

    public String d() {
        return this.f25026a;
    }

    public float e() {
        return this.f25036k;
    }

    public int f() {
        return this.f25035j;
    }

    public String g() {
        return this.f25037l;
    }

    public Layout.Alignment h() {
        return this.f25041p;
    }

    public int i() {
        return this.f25039n;
    }

    public int j() {
        return this.f25038m;
    }

    public float k() {
        return this.f25044s;
    }

    public int l() {
        int i10;
        int i11 = this.f25033h;
        if (i11 == -1 && this.f25034i == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f25034i == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public Layout.Alignment m() {
        return this.f25040o;
    }

    public boolean n() {
        if (this.f25042q == 1) {
            return true;
        }
        return false;
    }

    public b o() {
        return this.f25043r;
    }

    public boolean p() {
        return this.f25030e;
    }

    public boolean q() {
        return this.f25028c;
    }

    public boolean s() {
        if (this.f25031f == 1) {
            return true;
        }
        return false;
    }

    public boolean t() {
        if (this.f25032g == 1) {
            return true;
        }
        return false;
    }

    public g u(int i10) {
        this.f25029d = i10;
        this.f25030e = true;
        return this;
    }

    public g v(boolean z10) {
        this.f25033h = z10 ? 1 : 0;
        return this;
    }

    public g w(int i10) {
        this.f25027b = i10;
        this.f25028c = true;
        return this;
    }

    public g x(String str) {
        this.f25026a = str;
        return this;
    }

    public g y(float f10) {
        this.f25036k = f10;
        return this;
    }

    public g z(int i10) {
        this.f25035j = i10;
        return this;
    }
}
