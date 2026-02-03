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
    Toolbar f1893a;

    /* renamed from: b  reason: collision with root package name */
    private int f1894b;

    /* renamed from: c  reason: collision with root package name */
    private View f1895c;

    /* renamed from: d  reason: collision with root package name */
    private View f1896d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f1897e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f1898f;

    /* renamed from: g  reason: collision with root package name */
    private Drawable f1899g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1900h;

    /* renamed from: i  reason: collision with root package name */
    CharSequence f1901i;

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f1902j;

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f1903k;

    /* renamed from: l  reason: collision with root package name */
    Window.Callback f1904l;

    /* renamed from: m  reason: collision with root package name */
    boolean f1905m;

    /* renamed from: n  reason: collision with root package name */
    private c f1906n;

    /* renamed from: o  reason: collision with root package name */
    private int f1907o;

    /* renamed from: p  reason: collision with root package name */
    private int f1908p;

    /* renamed from: q  reason: collision with root package name */
    private Drawable f1909q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final k.a f1910d;

        a() {
            this.f1910d = new k.a(z0.this.f1893a.getContext(), 0, 16908332, 0, 0, z0.this.f1901i);
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            z0 z0Var = z0.this;
            Window.Callback callback = z0Var.f1904l;
            if (callback != null && z0Var.f1905m) {
                callback.onMenuItemSelected(0, this.f1910d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends androidx.core.view.t0 {

        /* renamed from: a  reason: collision with root package name */
        private boolean f1912a = false;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f1913b;

        b(int i10) {
            this.f1913b = i10;
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void a(View view) {
            this.f1912a = true;
        }

        @Override // androidx.core.view.s0
        public void b(View view) {
            if (!this.f1912a) {
                z0.this.f1893a.setVisibility(this.f1913b);
            }
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void c(View view) {
            z0.this.f1893a.setVisibility(0);
        }
    }

    public z0(Toolbar toolbar, boolean z10) {
        this(toolbar, z10, f.h.f23400a, f.e.f23341n);
    }

    private void E(CharSequence charSequence) {
        this.f1901i = charSequence;
        if ((this.f1894b & 8) != 0) {
            this.f1893a.setTitle(charSequence);
            if (this.f1900h) {
                androidx.core.view.h0.q0(this.f1893a.getRootView(), charSequence);
            }
        }
    }

    private void F() {
        if ((this.f1894b & 4) != 0) {
            if (TextUtils.isEmpty(this.f1903k)) {
                this.f1893a.setNavigationContentDescription(this.f1908p);
            } else {
                this.f1893a.setNavigationContentDescription(this.f1903k);
            }
        }
    }

    private void G() {
        if ((this.f1894b & 4) != 0) {
            Toolbar toolbar = this.f1893a;
            Drawable drawable = this.f1899g;
            if (drawable == null) {
                drawable = this.f1909q;
            }
            toolbar.setNavigationIcon(drawable);
            return;
        }
        this.f1893a.setNavigationIcon((Drawable) null);
    }

    private void H() {
        Drawable drawable;
        int i10 = this.f1894b;
        if ((i10 & 2) != 0) {
            if ((i10 & 1) != 0) {
                drawable = this.f1898f;
                if (drawable == null) {
                    drawable = this.f1897e;
                }
            } else {
                drawable = this.f1897e;
            }
        } else {
            drawable = null;
        }
        this.f1893a.setLogo(drawable);
    }

    private int x() {
        if (this.f1893a.getNavigationIcon() != null) {
            this.f1909q = this.f1893a.getNavigationIcon();
            return 15;
        }
        return 11;
    }

    public void A(Drawable drawable) {
        this.f1898f = drawable;
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
        this.f1903k = charSequence;
        F();
    }

    public void D(CharSequence charSequence) {
        this.f1902j = charSequence;
        if ((this.f1894b & 8) != 0) {
            this.f1893a.setSubtitle(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public boolean a() {
        return this.f1893a.d();
    }

    @Override // androidx.appcompat.widget.z
    public boolean b() {
        return this.f1893a.w();
    }

    @Override // androidx.appcompat.widget.z
    public boolean c() {
        return this.f1893a.Q();
    }

    @Override // androidx.appcompat.widget.z
    public void collapseActionView() {
        this.f1893a.e();
    }

    @Override // androidx.appcompat.widget.z
    public void d(Menu menu, j.a aVar) {
        if (this.f1906n == null) {
            c cVar = new c(this.f1893a.getContext());
            this.f1906n = cVar;
            cVar.p(f.f.f23361h);
        }
        this.f1906n.c(aVar);
        this.f1893a.K((androidx.appcompat.view.menu.e) menu, this.f1906n);
    }

    @Override // androidx.appcompat.widget.z
    public boolean e() {
        return this.f1893a.B();
    }

    @Override // androidx.appcompat.widget.z
    public void f() {
        this.f1905m = true;
    }

    @Override // androidx.appcompat.widget.z
    public boolean g() {
        return this.f1893a.A();
    }

    @Override // androidx.appcompat.widget.z
    public Context getContext() {
        return this.f1893a.getContext();
    }

    @Override // androidx.appcompat.widget.z
    public CharSequence getTitle() {
        return this.f1893a.getTitle();
    }

    @Override // androidx.appcompat.widget.z
    public boolean h() {
        return this.f1893a.v();
    }

    @Override // androidx.appcompat.widget.z
    public void i(int i10) {
        View view;
        int i11 = this.f1894b ^ i10;
        this.f1894b = i10;
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
                    this.f1893a.setTitle(this.f1901i);
                    this.f1893a.setSubtitle(this.f1902j);
                } else {
                    this.f1893a.setTitle((CharSequence) null);
                    this.f1893a.setSubtitle((CharSequence) null);
                }
            }
            if ((i11 & 16) != 0 && (view = this.f1896d) != null) {
                if ((i10 & 16) != 0) {
                    this.f1893a.addView(view);
                } else {
                    this.f1893a.removeView(view);
                }
            }
        }
    }

    @Override // androidx.appcompat.widget.z
    public Menu j() {
        return this.f1893a.getMenu();
    }

    @Override // androidx.appcompat.widget.z
    public int k() {
        return this.f1907o;
    }

    @Override // androidx.appcompat.widget.z
    public androidx.core.view.r0 l(int i10, long j10) {
        float f10;
        androidx.core.view.r0 e10 = androidx.core.view.h0.e(this.f1893a);
        if (i10 == 0) {
            f10 = 1.0f;
        } else {
            f10 = 0.0f;
        }
        return e10.b(f10).e(j10).g(new b(i10));
    }

    @Override // androidx.appcompat.widget.z
    public ViewGroup m() {
        return this.f1893a;
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
        this.f1893a.setCollapsible(z10);
    }

    @Override // androidx.appcompat.widget.z
    public void q() {
        this.f1893a.f();
    }

    @Override // androidx.appcompat.widget.z
    public void r(p0 p0Var) {
        View view = this.f1895c;
        if (view != null) {
            ViewParent parent = view.getParent();
            Toolbar toolbar = this.f1893a;
            if (parent == toolbar) {
                toolbar.removeView(this.f1895c);
            }
        }
        this.f1895c = p0Var;
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
        this.f1900h = true;
        E(charSequence);
    }

    @Override // androidx.appcompat.widget.z
    public void setVisibility(int i10) {
        this.f1893a.setVisibility(i10);
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowCallback(Window.Callback callback) {
        this.f1904l = callback;
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowTitle(CharSequence charSequence) {
        if (!this.f1900h) {
            E(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public void t(j.a aVar, e.a aVar2) {
        this.f1893a.L(aVar, aVar2);
    }

    @Override // androidx.appcompat.widget.z
    public int u() {
        return this.f1894b;
    }

    @Override // androidx.appcompat.widget.z
    public void v() {
        Log.i("ToolbarWidgetWrapper", "Progress display unsupported");
    }

    @Override // androidx.appcompat.widget.z
    public void w(Drawable drawable) {
        this.f1899g = drawable;
        G();
    }

    public void y(View view) {
        View view2 = this.f1896d;
        if (view2 != null && (this.f1894b & 16) != 0) {
            this.f1893a.removeView(view2);
        }
        this.f1896d = view;
        if (view != null && (this.f1894b & 16) != 0) {
            this.f1893a.addView(view);
        }
    }

    public void z(int i10) {
        if (i10 != this.f1908p) {
            this.f1908p = i10;
            if (TextUtils.isEmpty(this.f1893a.getNavigationContentDescription())) {
                B(this.f1908p);
            }
        }
    }

    public z0(Toolbar toolbar, boolean z10, int i10, int i11) {
        Drawable drawable;
        this.f1907o = 0;
        this.f1908p = 0;
        this.f1893a = toolbar;
        this.f1901i = toolbar.getTitle();
        this.f1902j = toolbar.getSubtitle();
        this.f1900h = this.f1901i != null;
        this.f1899g = toolbar.getNavigationIcon();
        v0 v10 = v0.v(toolbar.getContext(), null, f.j.f23418a, f.a.f23282c, 0);
        this.f1909q = v10.g(f.j.f23473l);
        if (z10) {
            CharSequence p10 = v10.p(f.j.f23503r);
            if (!TextUtils.isEmpty(p10)) {
                setTitle(p10);
            }
            CharSequence p11 = v10.p(f.j.f23493p);
            if (!TextUtils.isEmpty(p11)) {
                D(p11);
            }
            Drawable g10 = v10.g(f.j.f23483n);
            if (g10 != null) {
                A(g10);
            }
            Drawable g11 = v10.g(f.j.f23478m);
            if (g11 != null) {
                setIcon(g11);
            }
            if (this.f1899g == null && (drawable = this.f1909q) != null) {
                w(drawable);
            }
            i(v10.k(f.j.f23453h, 0));
            int n10 = v10.n(f.j.f23448g, 0);
            if (n10 != 0) {
                y(LayoutInflater.from(this.f1893a.getContext()).inflate(n10, (ViewGroup) this.f1893a, false));
                i(this.f1894b | 16);
            }
            int m10 = v10.m(f.j.f23463j, 0);
            if (m10 > 0) {
                ViewGroup.LayoutParams layoutParams = this.f1893a.getLayoutParams();
                layoutParams.height = m10;
                this.f1893a.setLayoutParams(layoutParams);
            }
            int e10 = v10.e(f.j.f23443f, -1);
            int e11 = v10.e(f.j.f23438e, -1);
            if (e10 >= 0 || e11 >= 0) {
                this.f1893a.J(Math.max(e10, 0), Math.max(e11, 0));
            }
            int n11 = v10.n(f.j.f23508s, 0);
            if (n11 != 0) {
                Toolbar toolbar2 = this.f1893a;
                toolbar2.N(toolbar2.getContext(), n11);
            }
            int n12 = v10.n(f.j.f23498q, 0);
            if (n12 != 0) {
                Toolbar toolbar3 = this.f1893a;
                toolbar3.M(toolbar3.getContext(), n12);
            }
            int n13 = v10.n(f.j.f23488o, 0);
            if (n13 != 0) {
                this.f1893a.setPopupTheme(n13);
            }
        } else {
            this.f1894b = x();
        }
        v10.x();
        z(i10);
        this.f1903k = this.f1893a.getNavigationContentDescription();
        this.f1893a.setNavigationOnClickListener(new a());
    }

    @Override // androidx.appcompat.widget.z
    public void setIcon(Drawable drawable) {
        this.f1897e = drawable;
        H();
    }
}
