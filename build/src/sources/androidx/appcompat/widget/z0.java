package androidx.appcompat.widget;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.text.TextUtils;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.Window;
import androidx.appcompat.view.menu.e;
import androidx.appcompat.view.menu.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z0 implements z {

    /* renamed from: a  reason: collision with root package name */
    Toolbar f1862a;

    /* renamed from: b  reason: collision with root package name */
    private int f1863b;

    /* renamed from: c  reason: collision with root package name */
    private View f1864c;

    /* renamed from: d  reason: collision with root package name */
    private View f1865d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f1866e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f1867f;

    /* renamed from: g  reason: collision with root package name */
    private Drawable f1868g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1869h;

    /* renamed from: i  reason: collision with root package name */
    CharSequence f1870i;

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f1871j;

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f1872k;

    /* renamed from: l  reason: collision with root package name */
    Window.Callback f1873l;

    /* renamed from: m  reason: collision with root package name */
    boolean f1874m;

    /* renamed from: n  reason: collision with root package name */
    private c f1875n;

    /* renamed from: o  reason: collision with root package name */
    private int f1876o;

    /* renamed from: p  reason: collision with root package name */
    private int f1877p;

    /* renamed from: q  reason: collision with root package name */
    private Drawable f1878q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final k.a f1879d;

        a() {
            this.f1879d = new k.a(z0.this.f1862a.getContext(), 0, 16908332, 0, 0, z0.this.f1870i);
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            z0 z0Var = z0.this;
            Window.Callback callback = z0Var.f1873l;
            if (callback != null && z0Var.f1874m) {
                callback.onMenuItemSelected(0, this.f1879d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends androidx.core.view.t0 {

        /* renamed from: a  reason: collision with root package name */
        private boolean f1881a = false;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f1882b;

        b(int i10) {
            this.f1882b = i10;
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void a(View view) {
            this.f1881a = true;
        }

        @Override // androidx.core.view.s0
        public void b(View view) {
            if (!this.f1881a) {
                z0.this.f1862a.setVisibility(this.f1882b);
            }
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void c(View view) {
            z0.this.f1862a.setVisibility(0);
        }
    }

    public z0(Toolbar toolbar, boolean z10) {
        this(toolbar, z10, f.h.f22992a, f.e.f22933n);
    }

    private void E(CharSequence charSequence) {
        this.f1870i = charSequence;
        if ((this.f1863b & 8) != 0) {
            this.f1862a.setTitle(charSequence);
            if (this.f1869h) {
                androidx.core.view.h0.q0(this.f1862a.getRootView(), charSequence);
            }
        }
    }

    private void F() {
        if ((this.f1863b & 4) != 0) {
            if (TextUtils.isEmpty(this.f1872k)) {
                this.f1862a.setNavigationContentDescription(this.f1877p);
            } else {
                this.f1862a.setNavigationContentDescription(this.f1872k);
            }
        }
    }

    private void G() {
        if ((this.f1863b & 4) != 0) {
            Toolbar toolbar = this.f1862a;
            Drawable drawable = this.f1868g;
            if (drawable == null) {
                drawable = this.f1878q;
            }
            toolbar.setNavigationIcon(drawable);
            return;
        }
        this.f1862a.setNavigationIcon((Drawable) null);
    }

    private void H() {
        Drawable drawable;
        int i10 = this.f1863b;
        if ((i10 & 2) != 0) {
            if ((i10 & 1) != 0) {
                drawable = this.f1867f;
                if (drawable == null) {
                    drawable = this.f1866e;
                }
            } else {
                drawable = this.f1866e;
            }
        } else {
            drawable = null;
        }
        this.f1862a.setLogo(drawable);
    }

    private int x() {
        if (this.f1862a.getNavigationIcon() != null) {
            this.f1878q = this.f1862a.getNavigationIcon();
            return 15;
        }
        return 11;
    }

    public void A(Drawable drawable) {
        this.f1867f = drawable;
        H();
    }

    public void B(int i10) {
        String string;
        if (i10 == 0) {
            string = null;
        } else {
            string = getContext().getString(i10);
        }
        C(string);
    }

    public void C(CharSequence charSequence) {
        this.f1872k = charSequence;
        F();
    }

    public void D(CharSequence charSequence) {
        this.f1871j = charSequence;
        if ((this.f1863b & 8) != 0) {
            this.f1862a.setSubtitle(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public boolean a() {
        return this.f1862a.d();
    }

    @Override // androidx.appcompat.widget.z
    public boolean b() {
        return this.f1862a.w();
    }

    @Override // androidx.appcompat.widget.z
    public boolean c() {
        return this.f1862a.Q();
    }

    @Override // androidx.appcompat.widget.z
    public void collapseActionView() {
        this.f1862a.e();
    }

    @Override // androidx.appcompat.widget.z
    public void d(Menu menu, j.a aVar) {
        if (this.f1875n == null) {
            c cVar = new c(this.f1862a.getContext());
            this.f1875n = cVar;
            cVar.p(f.f.f22953h);
        }
        this.f1875n.c(aVar);
        this.f1862a.K((androidx.appcompat.view.menu.e) menu, this.f1875n);
    }

    @Override // androidx.appcompat.widget.z
    public boolean e() {
        return this.f1862a.B();
    }

    @Override // androidx.appcompat.widget.z
    public void f() {
        this.f1874m = true;
    }

    @Override // androidx.appcompat.widget.z
    public boolean g() {
        return this.f1862a.A();
    }

    @Override // androidx.appcompat.widget.z
    public Context getContext() {
        return this.f1862a.getContext();
    }

    @Override // androidx.appcompat.widget.z
    public CharSequence getTitle() {
        return this.f1862a.getTitle();
    }

    @Override // androidx.appcompat.widget.z
    public boolean h() {
        return this.f1862a.v();
    }

    @Override // androidx.appcompat.widget.z
    public void i(int i10) {
        View view;
        int i11 = this.f1863b ^ i10;
        this.f1863b = i10;
        if (i11 != 0) {
            if ((i11 & 4) != 0) {
                if ((i10 & 4) != 0) {
                    F();
                }
                G();
            }
            if ((i11 & 3) != 0) {
                H();
            }
            if ((i11 & 8) != 0) {
                if ((i10 & 8) != 0) {
                    this.f1862a.setTitle(this.f1870i);
                    this.f1862a.setSubtitle(this.f1871j);
                } else {
                    this.f1862a.setTitle((CharSequence) null);
                    this.f1862a.setSubtitle((CharSequence) null);
                }
            }
            if ((i11 & 16) != 0 && (view = this.f1865d) != null) {
                if ((i10 & 16) != 0) {
                    this.f1862a.addView(view);
                } else {
                    this.f1862a.removeView(view);
                }
            }
        }
    }

    @Override // androidx.appcompat.widget.z
    public Menu j() {
        return this.f1862a.getMenu();
    }

    @Override // androidx.appcompat.widget.z
    public int k() {
        return this.f1876o;
    }

    @Override // androidx.appcompat.widget.z
    public androidx.core.view.r0 l(int i10, long j10) {
        float f10;
        androidx.core.view.r0 e10 = androidx.core.view.h0.e(this.f1862a);
        if (i10 == 0) {
            f10 = 1.0f;
        } else {
            f10 = 0.0f;
        }
        return e10.b(f10).e(j10).g(new b(i10));
    }

    @Override // androidx.appcompat.widget.z
    public ViewGroup m() {
        return this.f1862a;
    }

    @Override // androidx.appcompat.widget.z
    public void n(boolean z10) {
    }

    @Override // androidx.appcompat.widget.z
    public void o() {
        Log.i("ToolbarWidgetWrapper", "Progress display unsupported");
    }

    @Override // androidx.appcompat.widget.z
    public void p(boolean z10) {
        this.f1862a.setCollapsible(z10);
    }

    @Override // androidx.appcompat.widget.z
    public void q() {
        this.f1862a.f();
    }

    @Override // androidx.appcompat.widget.z
    public void r(p0 p0Var) {
        View view = this.f1864c;
        if (view != null) {
            ViewParent parent = view.getParent();
            Toolbar toolbar = this.f1862a;
            if (parent == toolbar) {
                toolbar.removeView(this.f1864c);
            }
        }
        this.f1864c = p0Var;
    }

    @Override // androidx.appcompat.widget.z
    public void s(int i10) {
        Drawable drawable;
        if (i10 != 0) {
            drawable = g.a.b(getContext(), i10);
        } else {
            drawable = null;
        }
        A(drawable);
    }

    @Override // androidx.appcompat.widget.z
    public void setIcon(int i10) {
        setIcon(i10 != 0 ? g.a.b(getContext(), i10) : null);
    }

    @Override // androidx.appcompat.widget.z
    public void setTitle(CharSequence charSequence) {
        this.f1869h = true;
        E(charSequence);
    }

    @Override // androidx.appcompat.widget.z
    public void setVisibility(int i10) {
        this.f1862a.setVisibility(i10);
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowCallback(Window.Callback callback) {
        this.f1873l = callback;
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowTitle(CharSequence charSequence) {
        if (!this.f1869h) {
            E(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public void t(j.a aVar, e.a aVar2) {
        this.f1862a.L(aVar, aVar2);
    }

    @Override // androidx.appcompat.widget.z
    public int u() {
        return this.f1863b;
    }

    @Override // androidx.appcompat.widget.z
    public void v() {
        Log.i("ToolbarWidgetWrapper", "Progress display unsupported");
    }

    @Override // androidx.appcompat.widget.z
    public void w(Drawable drawable) {
        this.f1868g = drawable;
        G();
    }

    public void y(View view) {
        View view2 = this.f1865d;
        if (view2 != null && (this.f1863b & 16) != 0) {
            this.f1862a.removeView(view2);
        }
        this.f1865d = view;
        if (view != null && (this.f1863b & 16) != 0) {
            this.f1862a.addView(view);
        }
    }

    public void z(int i10) {
        if (i10 != this.f1877p) {
            this.f1877p = i10;
            if (TextUtils.isEmpty(this.f1862a.getNavigationContentDescription())) {
                B(this.f1877p);
            }
        }
    }

    public z0(Toolbar toolbar, boolean z10, int i10, int i11) {
        Drawable drawable;
        this.f1876o = 0;
        this.f1877p = 0;
        this.f1862a = toolbar;
        this.f1870i = toolbar.getTitle();
        this.f1871j = toolbar.getSubtitle();
        this.f1869h = this.f1870i != null;
        this.f1868g = toolbar.getNavigationIcon();
        v0 v10 = v0.v(toolbar.getContext(), null, f.j.f23010a, f.a.f22874c, 0);
        this.f1878q = v10.g(f.j.f23065l);
        if (z10) {
            CharSequence p10 = v10.p(f.j.f23095r);
            if (!TextUtils.isEmpty(p10)) {
                setTitle(p10);
            }
            CharSequence p11 = v10.p(f.j.f23085p);
            if (!TextUtils.isEmpty(p11)) {
                D(p11);
            }
            Drawable g10 = v10.g(f.j.f23075n);
            if (g10 != null) {
                A(g10);
            }
            Drawable g11 = v10.g(f.j.f23070m);
            if (g11 != null) {
                setIcon(g11);
            }
            if (this.f1868g == null && (drawable = this.f1878q) != null) {
                w(drawable);
            }
            i(v10.k(f.j.f23045h, 0));
            int n10 = v10.n(f.j.f23040g, 0);
            if (n10 != 0) {
                y(LayoutInflater.from(this.f1862a.getContext()).inflate(n10, (ViewGroup) this.f1862a, false));
                i(this.f1863b | 16);
            }
            int m10 = v10.m(f.j.f23055j, 0);
            if (m10 > 0) {
                ViewGroup.LayoutParams layoutParams = this.f1862a.getLayoutParams();
                layoutParams.height = m10;
                this.f1862a.setLayoutParams(layoutParams);
            }
            int e10 = v10.e(f.j.f23035f, -1);
            int e11 = v10.e(f.j.f23030e, -1);
            if (e10 >= 0 || e11 >= 0) {
                this.f1862a.J(Math.max(e10, 0), Math.max(e11, 0));
            }
            int n11 = v10.n(f.j.f23100s, 0);
            if (n11 != 0) {
                Toolbar toolbar2 = this.f1862a;
                toolbar2.N(toolbar2.getContext(), n11);
            }
            int n12 = v10.n(f.j.f23090q, 0);
            if (n12 != 0) {
                Toolbar toolbar3 = this.f1862a;
                toolbar3.M(toolbar3.getContext(), n12);
            }
            int n13 = v10.n(f.j.f23080o, 0);
            if (n13 != 0) {
                this.f1862a.setPopupTheme(n13);
            }
        } else {
            this.f1863b = x();
        }
        v10.x();
        z(i10);
        this.f1872k = this.f1862a.getNavigationContentDescription();
        this.f1862a.setNavigationOnClickListener(new a());
    }

    @Override // androidx.appcompat.widget.z
    public void setIcon(Drawable drawable) {
        this.f1866e = drawable;
        H();
    }
}
