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
    Toolbar f2000a;

    /* renamed from: b  reason: collision with root package name */
    private int f2001b;

    /* renamed from: c  reason: collision with root package name */
    private View f2002c;

    /* renamed from: d  reason: collision with root package name */
    private View f2003d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f2004e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f2005f;

    /* renamed from: g  reason: collision with root package name */
    private Drawable f2006g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f2007h;

    /* renamed from: i  reason: collision with root package name */
    CharSequence f2008i;

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f2009j;

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f2010k;

    /* renamed from: l  reason: collision with root package name */
    Window.Callback f2011l;

    /* renamed from: m  reason: collision with root package name */
    boolean f2012m;

    /* renamed from: n  reason: collision with root package name */
    private c f2013n;

    /* renamed from: o  reason: collision with root package name */
    private int f2014o;

    /* renamed from: p  reason: collision with root package name */
    private int f2015p;

    /* renamed from: q  reason: collision with root package name */
    private Drawable f2016q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final k.a f2017d;

        a() {
            this.f2017d = new k.a(z0.this.f2000a.getContext(), 0, 16908332, 0, 0, z0.this.f2008i);
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            z0 z0Var = z0.this;
            Window.Callback callback = z0Var.f2011l;
            if (callback != null && z0Var.f2012m) {
                callback.onMenuItemSelected(0, this.f2017d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends androidx.core.view.t0 {

        /* renamed from: a  reason: collision with root package name */
        private boolean f2019a = false;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f2020b;

        b(int i10) {
            this.f2020b = i10;
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void a(View view) {
            this.f2019a = true;
        }

        @Override // androidx.core.view.s0
        public void b(View view) {
            if (!this.f2019a) {
                z0.this.f2000a.setVisibility(this.f2020b);
            }
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void c(View view) {
            z0.this.f2000a.setVisibility(0);
        }
    }

    public z0(Toolbar toolbar, boolean z10) {
        this(toolbar, z10, f.h.f22273a, f.e.f22214n);
    }

    private void E(CharSequence charSequence) {
        this.f2008i = charSequence;
        if ((this.f2001b & 8) != 0) {
            this.f2000a.setTitle(charSequence);
            if (this.f2007h) {
                androidx.core.view.h0.q0(this.f2000a.getRootView(), charSequence);
            }
        }
    }

    private void F() {
        if ((this.f2001b & 4) != 0) {
            if (TextUtils.isEmpty(this.f2010k)) {
                this.f2000a.setNavigationContentDescription(this.f2015p);
            } else {
                this.f2000a.setNavigationContentDescription(this.f2010k);
            }
        }
    }

    private void G() {
        if ((this.f2001b & 4) != 0) {
            Toolbar toolbar = this.f2000a;
            Drawable drawable = this.f2006g;
            if (drawable == null) {
                drawable = this.f2016q;
            }
            toolbar.setNavigationIcon(drawable);
            return;
        }
        this.f2000a.setNavigationIcon((Drawable) null);
    }

    private void H() {
        Drawable drawable;
        int i10 = this.f2001b;
        if ((i10 & 2) != 0) {
            if ((i10 & 1) != 0) {
                drawable = this.f2005f;
                if (drawable == null) {
                    drawable = this.f2004e;
                }
            } else {
                drawable = this.f2004e;
            }
        } else {
            drawable = null;
        }
        this.f2000a.setLogo(drawable);
    }

    private int x() {
        if (this.f2000a.getNavigationIcon() != null) {
            this.f2016q = this.f2000a.getNavigationIcon();
            return 15;
        }
        return 11;
    }

    public void A(Drawable drawable) {
        this.f2005f = drawable;
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
        this.f2010k = charSequence;
        F();
    }

    public void D(CharSequence charSequence) {
        this.f2009j = charSequence;
        if ((this.f2001b & 8) != 0) {
            this.f2000a.setSubtitle(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public boolean a() {
        return this.f2000a.d();
    }

    @Override // androidx.appcompat.widget.z
    public boolean b() {
        return this.f2000a.w();
    }

    @Override // androidx.appcompat.widget.z
    public boolean c() {
        return this.f2000a.Q();
    }

    @Override // androidx.appcompat.widget.z
    public void collapseActionView() {
        this.f2000a.e();
    }

    @Override // androidx.appcompat.widget.z
    public void d(Menu menu, j.a aVar) {
        if (this.f2013n == null) {
            c cVar = new c(this.f2000a.getContext());
            this.f2013n = cVar;
            cVar.p(f.f.f22234h);
        }
        this.f2013n.c(aVar);
        this.f2000a.K((androidx.appcompat.view.menu.e) menu, this.f2013n);
    }

    @Override // androidx.appcompat.widget.z
    public boolean e() {
        return this.f2000a.B();
    }

    @Override // androidx.appcompat.widget.z
    public void f() {
        this.f2012m = true;
    }

    @Override // androidx.appcompat.widget.z
    public boolean g() {
        return this.f2000a.A();
    }

    @Override // androidx.appcompat.widget.z
    public Context getContext() {
        return this.f2000a.getContext();
    }

    @Override // androidx.appcompat.widget.z
    public CharSequence getTitle() {
        return this.f2000a.getTitle();
    }

    @Override // androidx.appcompat.widget.z
    public boolean h() {
        return this.f2000a.v();
    }

    @Override // androidx.appcompat.widget.z
    public void i(int i10) {
        View view;
        int i11 = this.f2001b ^ i10;
        this.f2001b = i10;
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
                    this.f2000a.setTitle(this.f2008i);
                    this.f2000a.setSubtitle(this.f2009j);
                } else {
                    this.f2000a.setTitle((CharSequence) null);
                    this.f2000a.setSubtitle((CharSequence) null);
                }
            }
            if ((i11 & 16) != 0 && (view = this.f2003d) != null) {
                if ((i10 & 16) != 0) {
                    this.f2000a.addView(view);
                } else {
                    this.f2000a.removeView(view);
                }
            }
        }
    }

    @Override // androidx.appcompat.widget.z
    public Menu j() {
        return this.f2000a.getMenu();
    }

    @Override // androidx.appcompat.widget.z
    public int k() {
        return this.f2014o;
    }

    @Override // androidx.appcompat.widget.z
    public androidx.core.view.r0 l(int i10, long j10) {
        float f10;
        androidx.core.view.r0 e10 = androidx.core.view.h0.e(this.f2000a);
        if (i10 == 0) {
            f10 = 1.0f;
        } else {
            f10 = 0.0f;
        }
        return e10.b(f10).e(j10).g(new b(i10));
    }

    @Override // androidx.appcompat.widget.z
    public ViewGroup m() {
        return this.f2000a;
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
        this.f2000a.setCollapsible(z10);
    }

    @Override // androidx.appcompat.widget.z
    public void q() {
        this.f2000a.f();
    }

    @Override // androidx.appcompat.widget.z
    public void r(p0 p0Var) {
        View view = this.f2002c;
        if (view != null) {
            ViewParent parent = view.getParent();
            Toolbar toolbar = this.f2000a;
            if (parent == toolbar) {
                toolbar.removeView(this.f2002c);
            }
        }
        this.f2002c = p0Var;
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
        this.f2007h = true;
        E(charSequence);
    }

    @Override // androidx.appcompat.widget.z
    public void setVisibility(int i10) {
        this.f2000a.setVisibility(i10);
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowCallback(Window.Callback callback) {
        this.f2011l = callback;
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowTitle(CharSequence charSequence) {
        if (!this.f2007h) {
            E(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public void t(j.a aVar, e.a aVar2) {
        this.f2000a.L(aVar, aVar2);
    }

    @Override // androidx.appcompat.widget.z
    public int u() {
        return this.f2001b;
    }

    @Override // androidx.appcompat.widget.z
    public void v() {
        Log.i("ToolbarWidgetWrapper", "Progress display unsupported");
    }

    @Override // androidx.appcompat.widget.z
    public void w(Drawable drawable) {
        this.f2006g = drawable;
        G();
    }

    public void y(View view) {
        View view2 = this.f2003d;
        if (view2 != null && (this.f2001b & 16) != 0) {
            this.f2000a.removeView(view2);
        }
        this.f2003d = view;
        if (view != null && (this.f2001b & 16) != 0) {
            this.f2000a.addView(view);
        }
    }

    public void z(int i10) {
        if (i10 != this.f2015p) {
            this.f2015p = i10;
            if (TextUtils.isEmpty(this.f2000a.getNavigationContentDescription())) {
                B(this.f2015p);
            }
        }
    }

    public z0(Toolbar toolbar, boolean z10, int i10, int i11) {
        Drawable drawable;
        this.f2014o = 0;
        this.f2015p = 0;
        this.f2000a = toolbar;
        this.f2008i = toolbar.getTitle();
        this.f2009j = toolbar.getSubtitle();
        this.f2007h = this.f2008i != null;
        this.f2006g = toolbar.getNavigationIcon();
        v0 v10 = v0.v(toolbar.getContext(), null, f.j.f22291a, f.a.f22155c, 0);
        this.f2016q = v10.g(f.j.f22346l);
        if (z10) {
            CharSequence p10 = v10.p(f.j.f22376r);
            if (!TextUtils.isEmpty(p10)) {
                setTitle(p10);
            }
            CharSequence p11 = v10.p(f.j.f22366p);
            if (!TextUtils.isEmpty(p11)) {
                D(p11);
            }
            Drawable g10 = v10.g(f.j.f22356n);
            if (g10 != null) {
                A(g10);
            }
            Drawable g11 = v10.g(f.j.f22351m);
            if (g11 != null) {
                setIcon(g11);
            }
            if (this.f2006g == null && (drawable = this.f2016q) != null) {
                w(drawable);
            }
            i(v10.k(f.j.f22326h, 0));
            int n10 = v10.n(f.j.f22321g, 0);
            if (n10 != 0) {
                y(LayoutInflater.from(this.f2000a.getContext()).inflate(n10, (ViewGroup) this.f2000a, false));
                i(this.f2001b | 16);
            }
            int m10 = v10.m(f.j.f22336j, 0);
            if (m10 > 0) {
                ViewGroup.LayoutParams layoutParams = this.f2000a.getLayoutParams();
                layoutParams.height = m10;
                this.f2000a.setLayoutParams(layoutParams);
            }
            int e10 = v10.e(f.j.f22316f, -1);
            int e11 = v10.e(f.j.f22311e, -1);
            if (e10 >= 0 || e11 >= 0) {
                this.f2000a.J(Math.max(e10, 0), Math.max(e11, 0));
            }
            int n11 = v10.n(f.j.f22381s, 0);
            if (n11 != 0) {
                Toolbar toolbar2 = this.f2000a;
                toolbar2.N(toolbar2.getContext(), n11);
            }
            int n12 = v10.n(f.j.f22371q, 0);
            if (n12 != 0) {
                Toolbar toolbar3 = this.f2000a;
                toolbar3.M(toolbar3.getContext(), n12);
            }
            int n13 = v10.n(f.j.f22361o, 0);
            if (n13 != 0) {
                this.f2000a.setPopupTheme(n13);
            }
        } else {
            this.f2001b = x();
        }
        v10.x();
        z(i10);
        this.f2010k = this.f2000a.getNavigationContentDescription();
        this.f2000a.setNavigationOnClickListener(new a());
    }

    @Override // androidx.appcompat.widget.z
    public void setIcon(Drawable drawable) {
        this.f2004e = drawable;
        H();
    }
}
