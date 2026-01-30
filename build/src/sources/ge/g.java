package ge;

import android.text.Layout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private String f26718a;

    /* renamed from: b  reason: collision with root package name */
    private int f26719b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f26720c;

    /* renamed from: d  reason: collision with root package name */
    private int f26721d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f26722e;

    /* renamed from: k  reason: collision with root package name */
    private float f26728k;

    /* renamed from: l  reason: collision with root package name */
    private String f26729l;

    /* renamed from: o  reason: collision with root package name */
    private Layout.Alignment f26732o;

    /* renamed from: p  reason: collision with root package name */
    private Layout.Alignment f26733p;

    /* renamed from: r  reason: collision with root package name */
    private b f26735r;

    /* renamed from: f  reason: collision with root package name */
    private int f26723f = -1;

    /* renamed from: g  reason: collision with root package name */
    private int f26724g = -1;

    /* renamed from: h  reason: collision with root package name */
    private int f26725h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f26726i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f26727j = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f26730m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f26731n = -1;

    /* renamed from: q  reason: collision with root package name */
    private int f26734q = -1;

    /* renamed from: s  reason: collision with root package name */
    private float f26736s = Float.MAX_VALUE;

    private g r(g gVar, boolean z10) {
        int i10;
        Layout.Alignment alignment;
        Layout.Alignment alignment2;
        String str;
        if (gVar != null) {
            if (!this.f26720c && gVar.f26720c) {
                w(gVar.f26719b);
            }
            if (this.f26725h == -1) {
                this.f26725h = gVar.f26725h;
            }
            if (this.f26726i == -1) {
                this.f26726i = gVar.f26726i;
            }
            if (this.f26718a == null && (str = gVar.f26718a) != null) {
                this.f26718a = str;
            }
            if (this.f26723f == -1) {
                this.f26723f = gVar.f26723f;
            }
            if (this.f26724g == -1) {
                this.f26724g = gVar.f26724g;
            }
            if (this.f26731n == -1) {
                this.f26731n = gVar.f26731n;
            }
            if (this.f26732o == null && (alignment2 = gVar.f26732o) != null) {
                this.f26732o = alignment2;
            }
            if (this.f26733p == null && (alignment = gVar.f26733p) != null) {
                this.f26733p = alignment;
            }
            if (this.f26734q == -1) {
                this.f26734q = gVar.f26734q;
            }
            if (this.f26727j == -1) {
                this.f26727j = gVar.f26727j;
                this.f26728k = gVar.f26728k;
            }
            if (this.f26735r == null) {
                this.f26735r = gVar.f26735r;
            }
            if (this.f26736s == Float.MAX_VALUE) {
                this.f26736s = gVar.f26736s;
            }
            if (z10 && !this.f26722e && gVar.f26722e) {
                u(gVar.f26721d);
            }
            if (z10 && this.f26730m == -1 && (i10 = gVar.f26730m) != -1) {
                this.f26730m = i10;
            }
        }
        return this;
    }

    public g A(String str) {
        this.f26729l = str;
        return this;
    }

    public g B(boolean z10) {
        this.f26726i = z10 ? 1 : 0;
        return this;
    }

    public g C(boolean z10) {
        this.f26723f = z10 ? 1 : 0;
        return this;
    }

    public g D(Layout.Alignment alignment) {
        this.f26733p = alignment;
        return this;
    }

    public g E(int i10) {
        this.f26731n = i10;
        return this;
    }

    public g F(int i10) {
        this.f26730m = i10;
        return this;
    }

    public g G(float f10) {
        this.f26736s = f10;
        return this;
    }

    public g H(Layout.Alignment alignment) {
        this.f26732o = alignment;
        return this;
    }

    public g I(boolean z10) {
        this.f26734q = z10 ? 1 : 0;
        return this;
    }

    public g J(b bVar) {
        this.f26735r = bVar;
        return this;
    }

    public g K(boolean z10) {
        this.f26724g = z10 ? 1 : 0;
        return this;
    }

    public g a(g gVar) {
        return r(gVar, true);
    }

    public int b() {
        if (this.f26722e) {
            return this.f26721d;
        }
        throw new IllegalStateException("Background color has not been defined.");
    }

    public int c() {
        if (this.f26720c) {
            return this.f26719b;
        }
        throw new IllegalStateException("Font color has not been defined.");
    }

    public String d() {
        return this.f26718a;
    }

    public float e() {
        return this.f26728k;
    }

    public int f() {
        return this.f26727j;
    }

    public String g() {
        return this.f26729l;
    }

    public Layout.Alignment h() {
        return this.f26733p;
    }

    public int i() {
        return this.f26731n;
    }

    public int j() {
        return this.f26730m;
    }

    public float k() {
        return this.f26736s;
    }

    public int l() {
        int i10;
        int i11 = this.f26725h;
        if (i11 == -1 && this.f26726i == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f26726i == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public Layout.Alignment m() {
        return this.f26732o;
    }

    public boolean n() {
        if (this.f26734q == 1) {
            return true;
        }
        return false;
    }

    public b o() {
        return this.f26735r;
    }

    public boolean p() {
        return this.f26722e;
    }

    public boolean q() {
        return this.f26720c;
    }

    public boolean s() {
        if (this.f26723f == 1) {
            return true;
        }
        return false;
    }

    public boolean t() {
        if (this.f26724g == 1) {
            return true;
        }
        return false;
    }

    public g u(int i10) {
        this.f26721d = i10;
        this.f26722e = true;
        return this;
    }

    public g v(boolean z10) {
        this.f26725h = z10 ? 1 : 0;
        return this;
    }

    public g w(int i10) {
        this.f26719b = i10;
        this.f26720c = true;
        return this;
    }

    public g x(String str) {
        this.f26718a = str;
        return this;
    }

    public g y(float f10) {
        this.f26728k = f10;
        return this;
    }

    public g z(int i10) {
        this.f26727j = i10;
        return this;
    }
}
