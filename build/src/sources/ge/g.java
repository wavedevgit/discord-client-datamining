package ge;

import android.text.Layout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private String f24978a;

    /* renamed from: b  reason: collision with root package name */
    private int f24979b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f24980c;

    /* renamed from: d  reason: collision with root package name */
    private int f24981d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f24982e;

    /* renamed from: k  reason: collision with root package name */
    private float f24988k;

    /* renamed from: l  reason: collision with root package name */
    private String f24989l;

    /* renamed from: o  reason: collision with root package name */
    private Layout.Alignment f24992o;

    /* renamed from: p  reason: collision with root package name */
    private Layout.Alignment f24993p;

    /* renamed from: r  reason: collision with root package name */
    private b f24995r;

    /* renamed from: f  reason: collision with root package name */
    private int f24983f = -1;

    /* renamed from: g  reason: collision with root package name */
    private int f24984g = -1;

    /* renamed from: h  reason: collision with root package name */
    private int f24985h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f24986i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f24987j = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f24990m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f24991n = -1;

    /* renamed from: q  reason: collision with root package name */
    private int f24994q = -1;

    /* renamed from: s  reason: collision with root package name */
    private float f24996s = Float.MAX_VALUE;

    private g r(g gVar, boolean z10) {
        int i10;
        Layout.Alignment alignment;
        Layout.Alignment alignment2;
        String str;
        if (gVar != null) {
            if (!this.f24980c && gVar.f24980c) {
                w(gVar.f24979b);
            }
            if (this.f24985h == -1) {
                this.f24985h = gVar.f24985h;
            }
            if (this.f24986i == -1) {
                this.f24986i = gVar.f24986i;
            }
            if (this.f24978a == null && (str = gVar.f24978a) != null) {
                this.f24978a = str;
            }
            if (this.f24983f == -1) {
                this.f24983f = gVar.f24983f;
            }
            if (this.f24984g == -1) {
                this.f24984g = gVar.f24984g;
            }
            if (this.f24991n == -1) {
                this.f24991n = gVar.f24991n;
            }
            if (this.f24992o == null && (alignment2 = gVar.f24992o) != null) {
                this.f24992o = alignment2;
            }
            if (this.f24993p == null && (alignment = gVar.f24993p) != null) {
                this.f24993p = alignment;
            }
            if (this.f24994q == -1) {
                this.f24994q = gVar.f24994q;
            }
            if (this.f24987j == -1) {
                this.f24987j = gVar.f24987j;
                this.f24988k = gVar.f24988k;
            }
            if (this.f24995r == null) {
                this.f24995r = gVar.f24995r;
            }
            if (this.f24996s == Float.MAX_VALUE) {
                this.f24996s = gVar.f24996s;
            }
            if (z10 && !this.f24982e && gVar.f24982e) {
                u(gVar.f24981d);
            }
            if (z10 && this.f24990m == -1 && (i10 = gVar.f24990m) != -1) {
                this.f24990m = i10;
            }
        }
        return this;
    }

    public g A(String str) {
        this.f24989l = str;
        return this;
    }

    public g B(boolean z10) {
        this.f24986i = z10 ? 1 : 0;
        return this;
    }

    public g C(boolean z10) {
        this.f24983f = z10 ? 1 : 0;
        return this;
    }

    public g D(Layout.Alignment alignment) {
        this.f24993p = alignment;
        return this;
    }

    public g E(int i10) {
        this.f24991n = i10;
        return this;
    }

    public g F(int i10) {
        this.f24990m = i10;
        return this;
    }

    public g G(float f10) {
        this.f24996s = f10;
        return this;
    }

    public g H(Layout.Alignment alignment) {
        this.f24992o = alignment;
        return this;
    }

    public g I(boolean z10) {
        this.f24994q = z10 ? 1 : 0;
        return this;
    }

    public g J(b bVar) {
        this.f24995r = bVar;
        return this;
    }

    public g K(boolean z10) {
        this.f24984g = z10 ? 1 : 0;
        return this;
    }

    public g a(g gVar) {
        return r(gVar, true);
    }

    public int b() {
        if (this.f24982e) {
            return this.f24981d;
        }
        throw new IllegalStateException("Background color has not been defined.");
    }

    public int c() {
        if (this.f24980c) {
            return this.f24979b;
        }
        throw new IllegalStateException("Font color has not been defined.");
    }

    public String d() {
        return this.f24978a;
    }

    public float e() {
        return this.f24988k;
    }

    public int f() {
        return this.f24987j;
    }

    public String g() {
        return this.f24989l;
    }

    public Layout.Alignment h() {
        return this.f24993p;
    }

    public int i() {
        return this.f24991n;
    }

    public int j() {
        return this.f24990m;
    }

    public float k() {
        return this.f24996s;
    }

    public int l() {
        int i10;
        int i11 = this.f24985h;
        if (i11 == -1 && this.f24986i == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f24986i == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public Layout.Alignment m() {
        return this.f24992o;
    }

    public boolean n() {
        if (this.f24994q == 1) {
            return true;
        }
        return false;
    }

    public b o() {
        return this.f24995r;
    }

    public boolean p() {
        return this.f24982e;
    }

    public boolean q() {
        return this.f24980c;
    }

    public boolean s() {
        if (this.f24983f == 1) {
            return true;
        }
        return false;
    }

    public boolean t() {
        if (this.f24984g == 1) {
            return true;
        }
        return false;
    }

    public g u(int i10) {
        this.f24981d = i10;
        this.f24982e = true;
        return this;
    }

    public g v(boolean z10) {
        this.f24985h = z10 ? 1 : 0;
        return this;
    }

    public g w(int i10) {
        this.f24979b = i10;
        this.f24980c = true;
        return this;
    }

    public g x(String str) {
        this.f24978a = str;
        return this;
    }

    public g y(float f10) {
        this.f24988k = f10;
        return this;
    }

    public g z(int i10) {
        this.f24987j = i10;
        return this;
    }
}
