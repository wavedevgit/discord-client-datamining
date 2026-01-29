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
    Toolbar f1849a;

    /* renamed from: b  reason: collision with root package name */
    private int f1850b;

    /* renamed from: c  reason: collision with root package name */
    private View f1851c;

    /* renamed from: d  reason: collision with root package name */
    private View f1852d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f1853e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f1854f;

    /* renamed from: g  reason: collision with root package name */
    private Drawable f1855g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1856h;

    /* renamed from: i  reason: collision with root package name */
    CharSequence f1857i;

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f1858j;

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f1859k;

    /* renamed from: l  reason: collision with root package name */
    Window.Callback f1860l;

    /* renamed from: m  reason: collision with root package name */
    boolean f1861m;

    /* renamed from: n  reason: collision with root package name */
    private c f1862n;

    /* renamed from: o  reason: collision with root package name */
    private int f1863o;

    /* renamed from: p  reason: collision with root package name */
    private int f1864p;

    /* renamed from: q  reason: collision with root package name */
    private Drawable f1865q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final k.a f1866d;

        a() {
            this.f1866d = new k.a(z0.this.f1849a.getContext(), 0, 16908332, 0, 0, z0.this.f1857i);
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            z0 z0Var = z0.this;
            Window.Callback callback = z0Var.f1860l;
            if (callback != null && z0Var.f1861m) {
                callback.onMenuItemSelected(0, this.f1866d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends androidx.core.view.t0 {

        /* renamed from: a  reason: collision with root package name */
        private boolean f1868a = false;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f1869b;

        b(int i10) {
            this.f1869b = i10;
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void a(View view) {
            this.f1868a = true;
        }

        @Override // androidx.core.view.s0
        public void b(View view) {
            if (!this.f1868a) {
                z0.this.f1849a.setVisibility(this.f1869b);
            }
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void c(View view) {
            z0.this.f1849a.setVisibility(0);
        }
    }

    public z0(Toolbar toolbar, boolean z10) {
        this(toolbar, z10, f.h.f24189a, f.e.f24130n);
    }

    private void E(CharSequence charSequence) {
        this.f1857i = charSequence;
        if ((this.f1850b & 8) != 0) {
            this.f1849a.setTitle(charSequence);
            if (this.f1856h) {
                androidx.core.view.h0.q0(this.f1849a.getRootView(), charSequence);
            }
        }
    }

    private void F() {
        if ((this.f1850b & 4) != 0) {
            if (TextUtils.isEmpty(this.f1859k)) {
                this.f1849a.setNavigationContentDescription(this.f1864p);
            } else {
                this.f1849a.setNavigationContentDescription(this.f1859k);
            }
        }
    }

    private void G() {
        if ((this.f1850b & 4) != 0) {
            Toolbar toolbar = this.f1849a;
            Drawable drawable = this.f1855g;
            if (drawable == null) {
                drawable = this.f1865q;
            }
            toolbar.setNavigationIcon(drawable);
            return;
        }
        this.f1849a.setNavigationIcon((Drawable) null);
    }

    private void H() {
        Drawable drawable;
        int i10 = this.f1850b;
        if ((i10 & 2) != 0) {
            if ((i10 & 1) != 0) {
                drawable = this.f1854f;
                if (drawable == null) {
                    drawable = this.f1853e;
                }
            } else {
                drawable = this.f1853e;
            }
        } else {
            drawable = null;
        }
        this.f1849a.setLogo(drawable);
    }

    private int x() {
        if (this.f1849a.getNavigationIcon() != null) {
            this.f1865q = this.f1849a.getNavigationIcon();
            return 15;
        }
        return 11;
    }

    public void A(Drawable drawable) {
        this.f1854f = drawable;
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
        this.f1859k = charSequence;
        F();
    }

    public void D(CharSequence charSequence) {
        this.f1858j = charSequence;
        if ((this.f1850b & 8) != 0) {
            this.f1849a.setSubtitle(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public boolean a() {
        return this.f1849a.d();
    }

    @Override // androidx.appcompat.widget.z
    public boolean b() {
        return this.f1849a.w();
    }

    @Override // androidx.appcompat.widget.z
    public boolean c() {
        return this.f1849a.Q();
    }

    @Override // androidx.appcompat.widget.z
    public void collapseActionView() {
        this.f1849a.e();
    }

    @Override // androidx.appcompat.widget.z
    public void d(Menu menu, j.a aVar) {
        if (this.f1862n == null) {
            c cVar = new c(this.f1849a.getContext());
            this.f1862n = cVar;
            cVar.p(f.f.f24150h);
        }
        this.f1862n.c(aVar);
        this.f1849a.K((androidx.appcompat.view.menu.e) menu, this.f1862n);
    }

    @Override // androidx.appcompat.widget.z
    public boolean e() {
        return this.f1849a.B();
    }

    @Override // androidx.appcompat.widget.z
    public void f() {
        this.f1861m = true;
    }

    @Override // androidx.appcompat.widget.z
    public boolean g() {
        return this.f1849a.A();
    }

    @Override // androidx.appcompat.widget.z
    public Context getContext() {
        return this.f1849a.getContext();
    }

    @Override // androidx.appcompat.widget.z
    public CharSequence getTitle() {
        return this.f1849a.getTitle();
    }

    @Override // androidx.appcompat.widget.z
    public boolean h() {
        return this.f1849a.v();
    }

    @Override // androidx.appcompat.widget.z
    public void i(int i10) {
        View view;
        int i11 = this.f1850b ^ i10;
        this.f1850b = i10;
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
                    this.f1849a.setTitle(this.f1857i);
                    this.f1849a.setSubtitle(this.f1858j);
                } else {
                    this.f1849a.setTitle((CharSequence) null);
                    this.f1849a.setSubtitle((CharSequence) null);
                }
            }
            if ((i11 & 16) != 0 && (view = this.f1852d) != null) {
                if ((i10 & 16) != 0) {
                    this.f1849a.addView(view);
                } else {
                    this.f1849a.removeView(view);
                }
            }
        }
    }

    @Override // androidx.appcompat.widget.z
    public Menu j() {
        return this.f1849a.getMenu();
    }

    @Override // androidx.appcompat.widget.z
    public int k() {
        return this.f1863o;
    }

    @Override // androidx.appcompat.widget.z
    public androidx.core.view.r0 l(int i10, long j10) {
        float f10;
        androidx.core.view.r0 e10 = androidx.core.view.h0.e(this.f1849a);
        if (i10 == 0) {
            f10 = 1.0f;
        } else {
            f10 = 0.0f;
        }
        return e10.b(f10).e(j10).g(new b(i10));
    }

    @Override // androidx.appcompat.widget.z
    public ViewGroup m() {
        return this.f1849a;
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
        this.f1849a.setCollapsible(z10);
    }

    @Override // androidx.appcompat.widget.z
    public void q() {
        this.f1849a.f();
    }

    @Override // androidx.appcompat.widget.z
    public void r(p0 p0Var) {
        View view = this.f1851c;
        if (view != null) {
            ViewParent parent = view.getParent();
            Toolbar toolbar = this.f1849a;
            if (parent == toolbar) {
                toolbar.removeView(this.f1851c);
            }
        }
        this.f1851c = p0Var;
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
        this.f1856h = true;
        E(charSequence);
    }

    @Override // androidx.appcompat.widget.z
    public void setVisibility(int i10) {
        this.f1849a.setVisibility(i10);
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowCallback(Window.Callback callback) {
        this.f1860l = callback;
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowTitle(CharSequence charSequence) {
        if (!this.f1856h) {
            E(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public void t(j.a aVar, e.a aVar2) {
        this.f1849a.L(aVar, aVar2);
    }

    @Override // androidx.appcompat.widget.z
    public int u() {
        return this.f1850b;
    }

    @Override // androidx.appcompat.widget.z
    public void v() {
        Log.i("ToolbarWidgetWrapper", "Progress display unsupported");
    }

    @Override // androidx.appcompat.widget.z
    public void w(Drawable drawable) {
        this.f1855g = drawable;
        G();
    }

    public void y(View view) {
        View view2 = this.f1852d;
        if (view2 != null && (this.f1850b & 16) != 0) {
            this.f1849a.removeView(view2);
        }
        this.f1852d = view;
        if (view != null && (this.f1850b & 16) != 0) {
            this.f1849a.addView(view);
        }
    }

    public void z(int i10) {
        if (i10 != this.f1864p) {
            this.f1864p = i10;
            if (TextUtils.isEmpty(this.f1849a.getNavigationContentDescription())) {
                B(this.f1864p);
            }
        }
    }

    public z0(Toolbar toolbar, boolean z10, int i10, int i11) {
        Drawable drawable;
        this.f1863o = 0;
        this.f1864p = 0;
        this.f1849a = toolbar;
        this.f1857i = toolbar.getTitle();
        this.f1858j = toolbar.getSubtitle();
        this.f1856h = this.f1857i != null;
        this.f1855g = toolbar.getNavigationIcon();
        v0 v10 = v0.v(toolbar.getContext(), null, f.j.f24207a, f.a.f24071c, 0);
        this.f1865q = v10.g(f.j.f24262l);
        if (z10) {
            CharSequence p10 = v10.p(f.j.f24292r);
            if (!TextUtils.isEmpty(p10)) {
                setTitle(p10);
            }
            CharSequence p11 = v10.p(f.j.f24282p);
            if (!TextUtils.isEmpty(p11)) {
                D(p11);
            }
            Drawable g10 = v10.g(f.j.f24272n);
            if (g10 != null) {
                A(g10);
            }
            Drawable g11 = v10.g(f.j.f24267m);
            if (g11 != null) {
                setIcon(g11);
            }
            if (this.f1855g == null && (drawable = this.f1865q) != null) {
                w(drawable);
            }
            i(v10.k(f.j.f24242h, 0));
            int n10 = v10.n(f.j.f24237g, 0);
            if (n10 != 0) {
                y(LayoutInflater.from(this.f1849a.getContext()).inflate(n10, (ViewGroup) this.f1849a, false));
                i(this.f1850b | 16);
            }
            int m10 = v10.m(f.j.f24252j, 0);
            if (m10 > 0) {
                ViewGroup.LayoutParams layoutParams = this.f1849a.getLayoutParams();
                layoutParams.height = m10;
                this.f1849a.setLayoutParams(layoutParams);
            }
            int e10 = v10.e(f.j.f24232f, -1);
            int e11 = v10.e(f.j.f24227e, -1);
            if (e10 >= 0 || e11 >= 0) {
                this.f1849a.J(Math.max(e10, 0), Math.max(e11, 0));
            }
            int n11 = v10.n(f.j.f24297s, 0);
            if (n11 != 0) {
                Toolbar toolbar2 = this.f1849a;
                toolbar2.N(toolbar2.getContext(), n11);
            }
            int n12 = v10.n(f.j.f24287q, 0);
            if (n12 != 0) {
                Toolbar toolbar3 = this.f1849a;
                toolbar3.M(toolbar3.getContext(), n12);
            }
            int n13 = v10.n(f.j.f24277o, 0);
            if (n13 != 0) {
                this.f1849a.setPopupTheme(n13);
            }
        } else {
            this.f1850b = x();
        }
        v10.x();
        z(i10);
        this.f1859k = this.f1849a.getNavigationContentDescription();
        this.f1849a.setNavigationOnClickListener(new a());
    }

    @Override // androidx.appcompat.widget.z
    public void setIcon(Drawable drawable) {
        this.f1853e = drawable;
        H();
    }
}
