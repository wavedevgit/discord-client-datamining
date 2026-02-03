package ge;

import android.text.Layout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private String f26026a;

    /* renamed from: b  reason: collision with root package name */
    private int f26027b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f26028c;

    /* renamed from: d  reason: collision with root package name */
    private int f26029d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f26030e;

    /* renamed from: k  reason: collision with root package name */
    private float f26036k;

    /* renamed from: l  reason: collision with root package name */
    private String f26037l;

    /* renamed from: o  reason: collision with root package name */
    private Layout.Alignment f26040o;

    /* renamed from: p  reason: collision with root package name */
    private Layout.Alignment f26041p;

    /* renamed from: r  reason: collision with root package name */
    private b f26043r;

    /* renamed from: f  reason: collision with root package name */
    private int f26031f = -1;

    /* renamed from: g  reason: collision with root package name */
    private int f26032g = -1;

    /* renamed from: h  reason: collision with root package name */
    private int f26033h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f26034i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f26035j = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f26038m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f26039n = -1;

    /* renamed from: q  reason: collision with root package name */
    private int f26042q = -1;

    /* renamed from: s  reason: collision with root package name */
    private float f26044s = Float.MAX_VALUE;

    private g r(g gVar, boolean z10) {
        int i10;
        Layout.Alignment alignment;
        Layout.Alignment alignment2;
        String str;
        if (gVar != null) {
            if (!this.f26028c && gVar.f26028c) {
                w(gVar.f26027b);
            }
            if (this.f26033h == -1) {
                this.f26033h = gVar.f26033h;
            }
            if (this.f26034i == -1) {
                this.f26034i = gVar.f26034i;
            }
            if (this.f26026a == null && (str = gVar.f26026a) != null) {
                this.f26026a = str;
            }
            if (this.f26031f == -1) {
                this.f26031f = gVar.f26031f;
            }
            if (this.f26032g == -1) {
                this.f26032g = gVar.f26032g;
            }
            if (this.f26039n == -1) {
                this.f26039n = gVar.f26039n;
            }
            if (this.f26040o == null && (alignment2 = gVar.f26040o) != null) {
                this.f26040o = alignment2;
            }
            if (this.f26041p == null && (alignment = gVar.f26041p) != null) {
                this.f26041p = alignment;
            }
            if (this.f26042q == -1) {
                this.f26042q = gVar.f26042q;
            }
            if (this.f26035j == -1) {
                this.f26035j = gVar.f26035j;
                this.f26036k = gVar.f26036k;
            }
            if (this.f26043r == null) {
                this.f26043r = gVar.f26043r;
            }
            if (this.f26044s == Float.MAX_VALUE) {
                this.f26044s = gVar.f26044s;
            }
            if (z10 && !this.f26030e && gVar.f26030e) {
                u(gVar.f26029d);
            }
            if (z10 && this.f26038m == -1 && (i10 = gVar.f26038m) != -1) {
                this.f26038m = i10;
            }
        }
        return this;
    }

    public g A(String str) {
        this.f26037l = str;
        return this;
    }

    public g B(boolean z10) {
        this.f26034i = z10 ? 1 : 0;
        return this;
    }

    public g C(boolean z10) {
        this.f26031f = z10 ? 1 : 0;
        return this;
    }

    public g D(Layout.Alignment alignment) {
        this.f26041p = alignment;
        return this;
    }

    public g E(int i10) {
        this.f26039n = i10;
        return this;
    }

    public g F(int i10) {
        this.f26038m = i10;
        return this;
    }

    public g G(float f10) {
        this.f26044s = f10;
        return this;
    }

    public g H(Layout.Alignment alignment) {
        this.f26040o = alignment;
        return this;
    }

    public g I(boolean z10) {
        this.f26042q = z10 ? 1 : 0;
        return this;
    }

    public g J(b bVar) {
        this.f26043r = bVar;
        return this;
    }

    public g K(boolean z10) {
        this.f26032g = z10 ? 1 : 0;
        return this;
    }

    public g a(g gVar) {
        return r(gVar, true);
    }

    public int b() {
        if (this.f26030e) {
            return this.f26029d;
        }
        throw new IllegalStateException("Background color has not been defined.");
    }

    public int c() {
        if (this.f26028c) {
            return this.f26027b;
        }
        throw new IllegalStateException("Font color has not been defined.");
    }

    public String d() {
        return this.f26026a;
    }

    public float e() {
        return this.f26036k;
    }

    public int f() {
        return this.f26035j;
    }

    public String g() {
        return this.f26037l;
    }

    public Layout.Alignment h() {
        return this.f26041p;
    }

    public int i() {
        return this.f26039n;
    }

    public int j() {
        return this.f26038m;
    }

    public float k() {
        return this.f26044s;
    }

    public int l() {
        int i10;
        int i11 = this.f26033h;
        if (i11 == -1 && this.f26034i == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f26034i == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public Layout.Alignment m() {
        return this.f26040o;
    }

    public boolean n() {
        if (this.f26042q == 1) {
            return true;
        }
        return false;
    }

    public b o() {
        return this.f26043r;
    }

    public boolean p() {
        return this.f26030e;
    }

    public boolean q() {
        return this.f26028c;
    }

    public boolean s() {
        if (this.f26031f == 1) {
            return true;
        }
        return false;
    }

    public boolean t() {
        if (this.f26032g == 1) {
            return true;
        }
        return false;
    }

    public g u(int i10) {
        this.f26029d = i10;
        this.f26030e = true;
        return this;
    }

    public g v(boolean z10) {
        this.f26033h = z10 ? 1 : 0;
        return this;
    }

    public g w(int i10) {
        this.f26027b = i10;
        this.f26028c = true;
        return this;
    }

    public g x(String str) {
        this.f26026a = str;
        return this;
    }

    public g y(float f10) {
        this.f26036k = f10;
        return this;
    }

    public g z(int i10) {
        this.f26035j = i10;
        return this;
    }
}
