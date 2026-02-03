package ge;

import android.text.Layout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private String f26813a;

    /* renamed from: b  reason: collision with root package name */
    private int f26814b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f26815c;

    /* renamed from: d  reason: collision with root package name */
    private int f26816d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f26817e;

    /* renamed from: k  reason: collision with root package name */
    private float f26823k;

    /* renamed from: l  reason: collision with root package name */
    private String f26824l;

    /* renamed from: o  reason: collision with root package name */
    private Layout.Alignment f26827o;

    /* renamed from: p  reason: collision with root package name */
    private Layout.Alignment f26828p;

    /* renamed from: r  reason: collision with root package name */
    private b f26830r;

    /* renamed from: f  reason: collision with root package name */
    private int f26818f = -1;

    /* renamed from: g  reason: collision with root package name */
    private int f26819g = -1;

    /* renamed from: h  reason: collision with root package name */
    private int f26820h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f26821i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f26822j = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f26825m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f26826n = -1;

    /* renamed from: q  reason: collision with root package name */
    private int f26829q = -1;

    /* renamed from: s  reason: collision with root package name */
    private float f26831s = Float.MAX_VALUE;

    private g r(g gVar, boolean z10) {
        int i10;
        Layout.Alignment alignment;
        Layout.Alignment alignment2;
        String str;
        if (gVar != null) {
            if (!this.f26815c && gVar.f26815c) {
                w(gVar.f26814b);
            }
            if (this.f26820h == -1) {
                this.f26820h = gVar.f26820h;
            }
            if (this.f26821i == -1) {
                this.f26821i = gVar.f26821i;
            }
            if (this.f26813a == null && (str = gVar.f26813a) != null) {
                this.f26813a = str;
            }
            if (this.f26818f == -1) {
                this.f26818f = gVar.f26818f;
            }
            if (this.f26819g == -1) {
                this.f26819g = gVar.f26819g;
            }
            if (this.f26826n == -1) {
                this.f26826n = gVar.f26826n;
            }
            if (this.f26827o == null && (alignment2 = gVar.f26827o) != null) {
                this.f26827o = alignment2;
            }
            if (this.f26828p == null && (alignment = gVar.f26828p) != null) {
                this.f26828p = alignment;
            }
            if (this.f26829q == -1) {
                this.f26829q = gVar.f26829q;
            }
            if (this.f26822j == -1) {
                this.f26822j = gVar.f26822j;
                this.f26823k = gVar.f26823k;
            }
            if (this.f26830r == null) {
                this.f26830r = gVar.f26830r;
            }
            if (this.f26831s == Float.MAX_VALUE) {
                this.f26831s = gVar.f26831s;
            }
            if (z10 && !this.f26817e && gVar.f26817e) {
                u(gVar.f26816d);
            }
            if (z10 && this.f26825m == -1 && (i10 = gVar.f26825m) != -1) {
                this.f26825m = i10;
            }
        }
        return this;
    }

    public g A(String str) {
        this.f26824l = str;
        return this;
    }

    public g B(boolean z10) {
        this.f26821i = z10 ? 1 : 0;
        return this;
    }

    public g C(boolean z10) {
        this.f26818f = z10 ? 1 : 0;
        return this;
    }

    public g D(Layout.Alignment alignment) {
        this.f26828p = alignment;
        return this;
    }

    public g E(int i10) {
        this.f26826n = i10;
        return this;
    }

    public g F(int i10) {
        this.f26825m = i10;
        return this;
    }

    public g G(float f10) {
        this.f26831s = f10;
        return this;
    }

    public g H(Layout.Alignment alignment) {
        this.f26827o = alignment;
        return this;
    }

    public g I(boolean z10) {
        this.f26829q = z10 ? 1 : 0;
        return this;
    }

    public g J(b bVar) {
        this.f26830r = bVar;
        return this;
    }

    public g K(boolean z10) {
        this.f26819g = z10 ? 1 : 0;
        return this;
    }

    public g a(g gVar) {
        return r(gVar, true);
    }

    public int b() {
        if (this.f26817e) {
            return this.f26816d;
        }
        throw new IllegalStateException("Background color has not been defined.");
    }

    public int c() {
        if (this.f26815c) {
            return this.f26814b;
        }
        throw new IllegalStateException("Font color has not been defined.");
    }

    public String d() {
        return this.f26813a;
    }

    public float e() {
        return this.f26823k;
    }

    public int f() {
        return this.f26822j;
    }

    public String g() {
        return this.f26824l;
    }

    public Layout.Alignment h() {
        return this.f26828p;
    }

    public int i() {
        return this.f26826n;
    }

    public int j() {
        return this.f26825m;
    }

    public float k() {
        return this.f26831s;
    }

    public int l() {
        int i10;
        int i11 = this.f26820h;
        if (i11 == -1 && this.f26821i == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f26821i == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public Layout.Alignment m() {
        return this.f26827o;
    }

    public boolean n() {
        if (this.f26829q == 1) {
            return true;
        }
        return false;
    }

    public b o() {
        return this.f26830r;
    }

    public boolean p() {
        return this.f26817e;
    }

    public boolean q() {
        return this.f26815c;
    }

    public boolean s() {
        if (this.f26818f == 1) {
            return true;
        }
        return false;
    }

    public boolean t() {
        if (this.f26819g == 1) {
            return true;
        }
        return false;
    }

    public g u(int i10) {
        this.f26816d = i10;
        this.f26817e = true;
        return this;
    }

    public g v(boolean z10) {
        this.f26820h = z10 ? 1 : 0;
        return this;
    }

    public g w(int i10) {
        this.f26814b = i10;
        this.f26815c = true;
        return this;
    }

    public g x(String str) {
        this.f26813a = str;
        return this;
    }

    public g y(float f10) {
        this.f26823k = f10;
        return this;
    }

    public g z(int i10) {
        this.f26822j = i10;
        return this;
    }
}
