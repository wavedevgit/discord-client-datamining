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
    Toolbar f2003a;

    /* renamed from: b  reason: collision with root package name */
    private int f2004b;

    /* renamed from: c  reason: collision with root package name */
    private View f2005c;

    /* renamed from: d  reason: collision with root package name */
    private View f2006d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f2007e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f2008f;

    /* renamed from: g  reason: collision with root package name */
    private Drawable f2009g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f2010h;

    /* renamed from: i  reason: collision with root package name */
    CharSequence f2011i;

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f2012j;

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f2013k;

    /* renamed from: l  reason: collision with root package name */
    Window.Callback f2014l;

    /* renamed from: m  reason: collision with root package name */
    boolean f2015m;

    /* renamed from: n  reason: collision with root package name */
    private c f2016n;

    /* renamed from: o  reason: collision with root package name */
    private int f2017o;

    /* renamed from: p  reason: collision with root package name */
    private int f2018p;

    /* renamed from: q  reason: collision with root package name */
    private Drawable f2019q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final k.a f2020d;

        a() {
            this.f2020d = new k.a(z0.this.f2003a.getContext(), 0, 16908332, 0, 0, z0.this.f2011i);
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            z0 z0Var = z0.this;
            Window.Callback callback = z0Var.f2014l;
            if (callback != null && z0Var.f2015m) {
                callback.onMenuItemSelected(0, this.f2020d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends androidx.core.view.u0 {

        /* renamed from: a  reason: collision with root package name */
        private boolean f2022a = false;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f2023b;

        b(int i10) {
            this.f2023b = i10;
        }

        @Override // androidx.core.view.u0, androidx.core.view.t0
        public void a(View view) {
            this.f2022a = true;
        }

        @Override // androidx.core.view.t0
        public void b(View view) {
            if (!this.f2022a) {
                z0.this.f2003a.setVisibility(this.f2023b);
            }
        }

        @Override // androidx.core.view.u0, androidx.core.view.t0
        public void c(View view) {
            z0.this.f2003a.setVisibility(0);
        }
    }

    public z0(Toolbar toolbar, boolean z10) {
        this(toolbar, z10, f.h.f23397a, f.e.f23338n);
    }

    private void E(CharSequence charSequence) {
        this.f2011i = charSequence;
        if ((this.f2004b & 8) != 0) {
            this.f2003a.setTitle(charSequence);
            if (this.f2010h) {
                androidx.core.view.i0.n0(this.f2003a.getRootView(), charSequence);
            }
        }
    }

    private void F() {
        if ((this.f2004b & 4) != 0) {
            if (TextUtils.isEmpty(this.f2013k)) {
                this.f2003a.setNavigationContentDescription(this.f2018p);
            } else {
                this.f2003a.setNavigationContentDescription(this.f2013k);
            }
        }
    }

    private void G() {
        if ((this.f2004b & 4) != 0) {
            Toolbar toolbar = this.f2003a;
            Drawable drawable = this.f2009g;
            if (drawable == null) {
                drawable = this.f2019q;
            }
            toolbar.setNavigationIcon(drawable);
            return;
        }
        this.f2003a.setNavigationIcon((Drawable) null);
    }

    private void H() {
        Drawable drawable;
        int i10 = this.f2004b;
        if ((i10 & 2) != 0) {
            if ((i10 & 1) != 0) {
                drawable = this.f2008f;
                if (drawable == null) {
                    drawable = this.f2007e;
                }
            } else {
                drawable = this.f2007e;
            }
        } else {
            drawable = null;
        }
        this.f2003a.setLogo(drawable);
    }

    private int x() {
        if (this.f2003a.getNavigationIcon() != null) {
            this.f2019q = this.f2003a.getNavigationIcon();
            return 15;
        }
        return 11;
    }

    public void A(Drawable drawable) {
        this.f2008f = drawable;
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
        this.f2013k = charSequence;
        F();
    }

    public void D(CharSequence charSequence) {
        this.f2012j = charSequence;
        if ((this.f2004b & 8) != 0) {
            this.f2003a.setSubtitle(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public boolean a() {
        return this.f2003a.d();
    }

    @Override // androidx.appcompat.widget.z
    public boolean b() {
        return this.f2003a.w();
    }

    @Override // androidx.appcompat.widget.z
    public boolean c() {
        return this.f2003a.Q();
    }

    @Override // androidx.appcompat.widget.z
    public void collapseActionView() {
        this.f2003a.e();
    }

    @Override // androidx.appcompat.widget.z
    public void d(Menu menu, j.a aVar) {
        if (this.f2016n == null) {
            c cVar = new c(this.f2003a.getContext());
            this.f2016n = cVar;
            cVar.r(f.f.f23358h);
        }
        this.f2016n.c(aVar);
        this.f2003a.K((androidx.appcompat.view.menu.e) menu, this.f2016n);
    }

    @Override // androidx.appcompat.widget.z
    public boolean e() {
        return this.f2003a.B();
    }

    @Override // androidx.appcompat.widget.z
    public void f() {
        this.f2015m = true;
    }

    @Override // androidx.appcompat.widget.z
    public boolean g() {
        return this.f2003a.A();
    }

    @Override // androidx.appcompat.widget.z
    public Context getContext() {
        return this.f2003a.getContext();
    }

    @Override // androidx.appcompat.widget.z
    public CharSequence getTitle() {
        return this.f2003a.getTitle();
    }

    @Override // androidx.appcompat.widget.z
    public boolean h() {
        return this.f2003a.v();
    }

    @Override // androidx.appcompat.widget.z
    public void i(int i10) {
        View view;
        int i11 = this.f2004b ^ i10;
        this.f2004b = i10;
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
                    this.f2003a.setTitle(this.f2011i);
                    this.f2003a.setSubtitle(this.f2012j);
                } else {
                    this.f2003a.setTitle((CharSequence) null);
                    this.f2003a.setSubtitle((CharSequence) null);
                }
            }
            if ((i11 & 16) != 0 && (view = this.f2006d) != null) {
                if ((i10 & 16) != 0) {
                    this.f2003a.addView(view);
                } else {
                    this.f2003a.removeView(view);
                }
            }
        }
    }

    @Override // androidx.appcompat.widget.z
    public Menu j() {
        return this.f2003a.getMenu();
    }

    @Override // androidx.appcompat.widget.z
    public int k() {
        return this.f2017o;
    }

    @Override // androidx.appcompat.widget.z
    public androidx.core.view.s0 l(int i10, long j10) {
        float f10;
        androidx.core.view.s0 e10 = androidx.core.view.i0.e(this.f2003a);
        if (i10 == 0) {
            f10 = 1.0f;
        } else {
            f10 = 0.0f;
        }
        return e10.b(f10).e(j10).g(new b(i10));
    }

    @Override // androidx.appcompat.widget.z
    public ViewGroup m() {
        return this.f2003a;
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
        this.f2003a.setCollapsible(z10);
    }

    @Override // androidx.appcompat.widget.z
    public void q() {
        this.f2003a.f();
    }

    @Override // androidx.appcompat.widget.z
    public void r(p0 p0Var) {
        View view = this.f2005c;
        if (view != null) {
            ViewParent parent = view.getParent();
            Toolbar toolbar = this.f2003a;
            if (parent == toolbar) {
                toolbar.removeView(this.f2005c);
            }
        }
        this.f2005c = p0Var;
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
        this.f2010h = true;
        E(charSequence);
    }

    @Override // androidx.appcompat.widget.z
    public void setVisibility(int i10) {
        this.f2003a.setVisibility(i10);
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowCallback(Window.Callback callback) {
        this.f2014l = callback;
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowTitle(CharSequence charSequence) {
        if (!this.f2010h) {
            E(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public void t(j.a aVar, e.a aVar2) {
        this.f2003a.L(aVar, aVar2);
    }

    @Override // androidx.appcompat.widget.z
    public int u() {
        return this.f2004b;
    }

    @Override // androidx.appcompat.widget.z
    public void v() {
        Log.i("ToolbarWidgetWrapper", "Progress display unsupported");
    }

    @Override // androidx.appcompat.widget.z
    public void w(Drawable drawable) {
        this.f2009g = drawable;
        G();
    }

    public void y(View view) {
        View view2 = this.f2006d;
        if (view2 != null && (this.f2004b & 16) != 0) {
            this.f2003a.removeView(view2);
        }
        this.f2006d = view;
        if (view != null && (this.f2004b & 16) != 0) {
            this.f2003a.addView(view);
        }
    }

    public void z(int i10) {
        if (i10 != this.f2018p) {
            this.f2018p = i10;
            if (TextUtils.isEmpty(this.f2003a.getNavigationContentDescription())) {
                B(this.f2018p);
            }
        }
    }

    public z0(Toolbar toolbar, boolean z10, int i10, int i11) {
        Drawable drawable;
        this.f2017o = 0;
        this.f2018p = 0;
        this.f2003a = toolbar;
        this.f2011i = toolbar.getTitle();
        this.f2012j = toolbar.getSubtitle();
        this.f2010h = this.f2011i != null;
        this.f2009g = toolbar.getNavigationIcon();
        v0 v10 = v0.v(toolbar.getContext(), null, f.j.f23417a, f.a.f23279c, 0);
        this.f2019q = v10.g(f.j.f23472l);
        if (z10) {
            CharSequence p10 = v10.p(f.j.f23502r);
            if (!TextUtils.isEmpty(p10)) {
                setTitle(p10);
            }
            CharSequence p11 = v10.p(f.j.f23492p);
            if (!TextUtils.isEmpty(p11)) {
                D(p11);
            }
            Drawable g10 = v10.g(f.j.f23482n);
            if (g10 != null) {
                A(g10);
            }
            Drawable g11 = v10.g(f.j.f23477m);
            if (g11 != null) {
                setIcon(g11);
            }
            if (this.f2009g == null && (drawable = this.f2019q) != null) {
                w(drawable);
            }
            i(v10.k(f.j.f23452h, 0));
            int n10 = v10.n(f.j.f23447g, 0);
            if (n10 != 0) {
                y(LayoutInflater.from(this.f2003a.getContext()).inflate(n10, (ViewGroup) this.f2003a, false));
                i(this.f2004b | 16);
            }
            int m10 = v10.m(f.j.f23462j, 0);
            if (m10 > 0) {
                ViewGroup.LayoutParams layoutParams = this.f2003a.getLayoutParams();
                layoutParams.height = m10;
                this.f2003a.setLayoutParams(layoutParams);
            }
            int e10 = v10.e(f.j.f23442f, -1);
            int e11 = v10.e(f.j.f23437e, -1);
            if (e10 >= 0 || e11 >= 0) {
                this.f2003a.J(Math.max(e10, 0), Math.max(e11, 0));
            }
            int n11 = v10.n(f.j.f23507s, 0);
            if (n11 != 0) {
                Toolbar toolbar2 = this.f2003a;
                toolbar2.N(toolbar2.getContext(), n11);
            }
            int n12 = v10.n(f.j.f23497q, 0);
            if (n12 != 0) {
                Toolbar toolbar3 = this.f2003a;
                toolbar3.M(toolbar3.getContext(), n12);
            }
            int n13 = v10.n(f.j.f23487o, 0);
            if (n13 != 0) {
                this.f2003a.setPopupTheme(n13);
            }
        } else {
            this.f2004b = x();
        }
        v10.x();
        z(i10);
        this.f2013k = this.f2003a.getNavigationContentDescription();
        this.f2003a.setNavigationOnClickListener(new a());
    }

    @Override // androidx.appcompat.widget.z
    public void setIcon(Drawable drawable) {
        this.f2007e = drawable;
        H();
    }
}
