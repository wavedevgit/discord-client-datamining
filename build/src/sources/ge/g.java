package ge;

import android.text.Layout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private String f24725a;

    /* renamed from: b  reason: collision with root package name */
    private int f24726b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f24727c;

    /* renamed from: d  reason: collision with root package name */
    private int f24728d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f24729e;

    /* renamed from: k  reason: collision with root package name */
    private float f24735k;

    /* renamed from: l  reason: collision with root package name */
    private String f24736l;

    /* renamed from: o  reason: collision with root package name */
    private Layout.Alignment f24739o;

    /* renamed from: p  reason: collision with root package name */
    private Layout.Alignment f24740p;

    /* renamed from: r  reason: collision with root package name */
    private b f24742r;

    /* renamed from: f  reason: collision with root package name */
    private int f24730f = -1;

    /* renamed from: g  reason: collision with root package name */
    private int f24731g = -1;

    /* renamed from: h  reason: collision with root package name */
    private int f24732h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f24733i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f24734j = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f24737m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f24738n = -1;

    /* renamed from: q  reason: collision with root package name */
    private int f24741q = -1;

    /* renamed from: s  reason: collision with root package name */
    private float f24743s = Float.MAX_VALUE;

    private g r(g gVar, boolean z10) {
        int i10;
        Layout.Alignment alignment;
        Layout.Alignment alignment2;
        String str;
        if (gVar != null) {
            if (!this.f24727c && gVar.f24727c) {
                w(gVar.f24726b);
            }
            if (this.f24732h == -1) {
                this.f24732h = gVar.f24732h;
            }
            if (this.f24733i == -1) {
                this.f24733i = gVar.f24733i;
            }
            if (this.f24725a == null && (str = gVar.f24725a) != null) {
                this.f24725a = str;
            }
            if (this.f24730f == -1) {
                this.f24730f = gVar.f24730f;
            }
            if (this.f24731g == -1) {
                this.f24731g = gVar.f24731g;
            }
            if (this.f24738n == -1) {
                this.f24738n = gVar.f24738n;
            }
            if (this.f24739o == null && (alignment2 = gVar.f24739o) != null) {
                this.f24739o = alignment2;
            }
            if (this.f24740p == null && (alignment = gVar.f24740p) != null) {
                this.f24740p = alignment;
            }
            if (this.f24741q == -1) {
                this.f24741q = gVar.f24741q;
            }
            if (this.f24734j == -1) {
                this.f24734j = gVar.f24734j;
                this.f24735k = gVar.f24735k;
            }
            if (this.f24742r == null) {
                this.f24742r = gVar.f24742r;
            }
            if (this.f24743s == Float.MAX_VALUE) {
                this.f24743s = gVar.f24743s;
            }
            if (z10 && !this.f24729e && gVar.f24729e) {
                u(gVar.f24728d);
            }
            if (z10 && this.f24737m == -1 && (i10 = gVar.f24737m) != -1) {
                this.f24737m = i10;
            }
        }
        return this;
    }

    public g A(String str) {
        this.f24736l = str;
        return this;
    }

    public g B(boolean z10) {
        this.f24733i = z10 ? 1 : 0;
        return this;
    }

    public g C(boolean z10) {
        this.f24730f = z10 ? 1 : 0;
        return this;
    }

    public g D(Layout.Alignment alignment) {
        this.f24740p = alignment;
        return this;
    }

    public g E(int i10) {
        this.f24738n = i10;
        return this;
    }

    public g F(int i10) {
        this.f24737m = i10;
        return this;
    }

    public g G(float f10) {
        this.f24743s = f10;
        return this;
    }

    public g H(Layout.Alignment alignment) {
        this.f24739o = alignment;
        return this;
    }

    public g I(boolean z10) {
        this.f24741q = z10 ? 1 : 0;
        return this;
    }

    public g J(b bVar) {
        this.f24742r = bVar;
        return this;
    }

    public g K(boolean z10) {
        this.f24731g = z10 ? 1 : 0;
        return this;
    }

    public g a(g gVar) {
        return r(gVar, true);
    }

    public int b() {
        if (this.f24729e) {
            return this.f24728d;
        }
        throw new IllegalStateException("Background color has not been defined.");
    }

    public int c() {
        if (this.f24727c) {
            return this.f24726b;
        }
        throw new IllegalStateException("Font color has not been defined.");
    }

    public String d() {
        return this.f24725a;
    }

    public float e() {
        return this.f24735k;
    }

    public int f() {
        return this.f24734j;
    }

    public String g() {
        return this.f24736l;
    }

    public Layout.Alignment h() {
        return this.f24740p;
    }

    public int i() {
        return this.f24738n;
    }

    public int j() {
        return this.f24737m;
    }

    public float k() {
        return this.f24743s;
    }

    public int l() {
        int i10;
        int i11 = this.f24732h;
        if (i11 == -1 && this.f24733i == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f24733i == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public Layout.Alignment m() {
        return this.f24739o;
    }

    public boolean n() {
        if (this.f24741q == 1) {
            return true;
        }
        return false;
    }

    public b o() {
        return this.f24742r;
    }

    public boolean p() {
        return this.f24729e;
    }

    public boolean q() {
        return this.f24727c;
    }

    public boolean s() {
        if (this.f24730f == 1) {
            return true;
        }
        return false;
    }

    public boolean t() {
        if (this.f24731g == 1) {
            return true;
        }
        return false;
    }

    public g u(int i10) {
        this.f24728d = i10;
        this.f24729e = true;
        return this;
    }

    public g v(boolean z10) {
        this.f24732h = z10 ? 1 : 0;
        return this;
    }

    public g w(int i10) {
        this.f24726b = i10;
        this.f24727c = true;
        return this;
    }

    public g x(String str) {
        this.f24725a = str;
        return this;
    }

    public g y(float f10) {
        this.f24735k = f10;
        return this;
    }

    public g z(int i10) {
        this.f24734j = i10;
        return this;
    }
}
