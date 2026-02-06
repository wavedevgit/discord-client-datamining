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
    Toolbar f2303a;

    /* renamed from: b  reason: collision with root package name */
    private int f2304b;

    /* renamed from: c  reason: collision with root package name */
    private View f2305c;

    /* renamed from: d  reason: collision with root package name */
    private View f2306d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f2307e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f2308f;

    /* renamed from: g  reason: collision with root package name */
    private Drawable f2309g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f2310h;

    /* renamed from: i  reason: collision with root package name */
    CharSequence f2311i;

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f2312j;

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f2313k;

    /* renamed from: l  reason: collision with root package name */
    Window.Callback f2314l;

    /* renamed from: m  reason: collision with root package name */
    boolean f2315m;

    /* renamed from: n  reason: collision with root package name */
    private c f2316n;

    /* renamed from: o  reason: collision with root package name */
    private int f2317o;

    /* renamed from: p  reason: collision with root package name */
    private int f2318p;

    /* renamed from: q  reason: collision with root package name */
    private Drawable f2319q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final k.a f2320d;

        a() {
            this.f2320d = new k.a(z0.this.f2303a.getContext(), 0, 16908332, 0, 0, z0.this.f2311i);
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            z0 z0Var = z0.this;
            Window.Callback callback = z0Var.f2314l;
            if (callback != null && z0Var.f2315m) {
                callback.onMenuItemSelected(0, this.f2320d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends androidx.core.view.t0 {

        /* renamed from: a  reason: collision with root package name */
        private boolean f2322a = false;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f2323b;

        b(int i10) {
            this.f2323b = i10;
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void a(View view) {
            this.f2322a = true;
        }

        @Override // androidx.core.view.s0
        public void b(View view) {
            if (!this.f2322a) {
                z0.this.f2303a.setVisibility(this.f2323b);
            }
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void c(View view) {
            z0.this.f2303a.setVisibility(0);
        }
    }

    public z0(Toolbar toolbar, boolean z10) {
        this(toolbar, z10, f.h.f22318a, f.e.f22259n);
    }

    private void E(CharSequence charSequence) {
        this.f2311i = charSequence;
        if ((this.f2304b & 8) != 0) {
            this.f2303a.setTitle(charSequence);
            if (this.f2310h) {
                androidx.core.view.h0.q0(this.f2303a.getRootView(), charSequence);
            }
        }
    }

    private void F() {
        if ((this.f2304b & 4) != 0) {
            if (TextUtils.isEmpty(this.f2313k)) {
                this.f2303a.setNavigationContentDescription(this.f2318p);
            } else {
                this.f2303a.setNavigationContentDescription(this.f2313k);
            }
        }
    }

    private void G() {
        if ((this.f2304b & 4) != 0) {
            Toolbar toolbar = this.f2303a;
            Drawable drawable = this.f2309g;
            if (drawable == null) {
                drawable = this.f2319q;
            }
            toolbar.setNavigationIcon(drawable);
            return;
        }
        this.f2303a.setNavigationIcon((Drawable) null);
    }

    private void H() {
        Drawable drawable;
        int i10 = this.f2304b;
        if ((i10 & 2) != 0) {
            if ((i10 & 1) != 0) {
                drawable = this.f2308f;
                if (drawable == null) {
                    drawable = this.f2307e;
                }
            } else {
                drawable = this.f2307e;
            }
        } else {
            drawable = null;
        }
        this.f2303a.setLogo(drawable);
    }

    private int x() {
        if (this.f2303a.getNavigationIcon() != null) {
            this.f2319q = this.f2303a.getNavigationIcon();
            return 15;
        }
        return 11;
    }

    public void A(Drawable drawable) {
        this.f2308f = drawable;
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
        this.f2313k = charSequence;
        F();
    }

    public void D(CharSequence charSequence) {
        this.f2312j = charSequence;
        if ((this.f2304b & 8) != 0) {
            this.f2303a.setSubtitle(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public boolean a() {
        return this.f2303a.d();
    }

    @Override // androidx.appcompat.widget.z
    public boolean b() {
        return this.f2303a.w();
    }

    @Override // androidx.appcompat.widget.z
    public boolean c() {
        return this.f2303a.Q();
    }

    @Override // androidx.appcompat.widget.z
    public void collapseActionView() {
        this.f2303a.e();
    }

    @Override // androidx.appcompat.widget.z
    public void d(Menu menu, j.a aVar) {
        if (this.f2316n == null) {
            c cVar = new c(this.f2303a.getContext());
            this.f2316n = cVar;
            cVar.p(f.f.f22279h);
        }
        this.f2316n.c(aVar);
        this.f2303a.K((androidx.appcompat.view.menu.e) menu, this.f2316n);
    }

    @Override // androidx.appcompat.widget.z
    public boolean e() {
        return this.f2303a.B();
    }

    @Override // androidx.appcompat.widget.z
    public void f() {
        this.f2315m = true;
    }

    @Override // androidx.appcompat.widget.z
    public boolean g() {
        return this.f2303a.A();
    }

    @Override // androidx.appcompat.widget.z
    public Context getContext() {
        return this.f2303a.getContext();
    }

    @Override // androidx.appcompat.widget.z
    public CharSequence getTitle() {
        return this.f2303a.getTitle();
    }

    @Override // androidx.appcompat.widget.z
    public boolean h() {
        return this.f2303a.v();
    }

    @Override // androidx.appcompat.widget.z
    public void i(int i10) {
        View view;
        int i11 = this.f2304b ^ i10;
        this.f2304b = i10;
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
                    this.f2303a.setTitle(this.f2311i);
                    this.f2303a.setSubtitle(this.f2312j);
                } else {
                    this.f2303a.setTitle((CharSequence) null);
                    this.f2303a.setSubtitle((CharSequence) null);
                }
            }
            if ((i11 & 16) != 0 && (view = this.f2306d) != null) {
                if ((i10 & 16) != 0) {
                    this.f2303a.addView(view);
                } else {
                    this.f2303a.removeView(view);
                }
            }
        }
    }

    @Override // androidx.appcompat.widget.z
    public Menu j() {
        return this.f2303a.getMenu();
    }

    @Override // androidx.appcompat.widget.z
    public int k() {
        return this.f2317o;
    }

    @Override // androidx.appcompat.widget.z
    public androidx.core.view.r0 l(int i10, long j10) {
        float f10;
        androidx.core.view.r0 e10 = androidx.core.view.h0.e(this.f2303a);
        if (i10 == 0) {
            f10 = 1.0f;
        } else {
            f10 = 0.0f;
        }
        return e10.b(f10).e(j10).g(new b(i10));
    }

    @Override // androidx.appcompat.widget.z
    public ViewGroup m() {
        return this.f2303a;
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
        this.f2303a.setCollapsible(z10);
    }

    @Override // androidx.appcompat.widget.z
    public void q() {
        this.f2303a.f();
    }

    @Override // androidx.appcompat.widget.z
    public void r(p0 p0Var) {
        View view = this.f2305c;
        if (view != null) {
            ViewParent parent = view.getParent();
            Toolbar toolbar = this.f2303a;
            if (parent == toolbar) {
                toolbar.removeView(this.f2305c);
            }
        }
        this.f2305c = p0Var;
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
        this.f2310h = true;
        E(charSequence);
    }

    @Override // androidx.appcompat.widget.z
    public void setVisibility(int i10) {
        this.f2303a.setVisibility(i10);
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowCallback(Window.Callback callback) {
        this.f2314l = callback;
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowTitle(CharSequence charSequence) {
        if (!this.f2310h) {
            E(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public void t(j.a aVar, e.a aVar2) {
        this.f2303a.L(aVar, aVar2);
    }

    @Override // androidx.appcompat.widget.z
    public int u() {
        return this.f2304b;
    }

    @Override // androidx.appcompat.widget.z
    public void v() {
        Log.i("ToolbarWidgetWrapper", "Progress display unsupported");
    }

    @Override // androidx.appcompat.widget.z
    public void w(Drawable drawable) {
        this.f2309g = drawable;
        G();
    }

    public void y(View view) {
        View view2 = this.f2306d;
        if (view2 != null && (this.f2304b & 16) != 0) {
            this.f2303a.removeView(view2);
        }
        this.f2306d = view;
        if (view != null && (this.f2304b & 16) != 0) {
            this.f2303a.addView(view);
        }
    }

    public void z(int i10) {
        if (i10 != this.f2318p) {
            this.f2318p = i10;
            if (TextUtils.isEmpty(this.f2303a.getNavigationContentDescription())) {
                B(this.f2318p);
            }
        }
    }

    public z0(Toolbar toolbar, boolean z10, int i10, int i11) {
        Drawable drawable;
        this.f2317o = 0;
        this.f2318p = 0;
        this.f2303a = toolbar;
        this.f2311i = toolbar.getTitle();
        this.f2312j = toolbar.getSubtitle();
        this.f2310h = this.f2311i != null;
        this.f2309g = toolbar.getNavigationIcon();
        v0 v10 = v0.v(toolbar.getContext(), null, f.j.f22336a, f.a.f22200c, 0);
        this.f2319q = v10.g(f.j.f22391l);
        if (z10) {
            CharSequence p10 = v10.p(f.j.f22421r);
            if (!TextUtils.isEmpty(p10)) {
                setTitle(p10);
            }
            CharSequence p11 = v10.p(f.j.f22411p);
            if (!TextUtils.isEmpty(p11)) {
                D(p11);
            }
            Drawable g10 = v10.g(f.j.f22401n);
            if (g10 != null) {
                A(g10);
            }
            Drawable g11 = v10.g(f.j.f22396m);
            if (g11 != null) {
                setIcon(g11);
            }
            if (this.f2309g == null && (drawable = this.f2319q) != null) {
                w(drawable);
            }
            i(v10.k(f.j.f22371h, 0));
            int n10 = v10.n(f.j.f22366g, 0);
            if (n10 != 0) {
                y(LayoutInflater.from(this.f2303a.getContext()).inflate(n10, (ViewGroup) this.f2303a, false));
                i(this.f2304b | 16);
            }
            int m10 = v10.m(f.j.f22381j, 0);
            if (m10 > 0) {
                ViewGroup.LayoutParams layoutParams = this.f2303a.getLayoutParams();
                layoutParams.height = m10;
                this.f2303a.setLayoutParams(layoutParams);
            }
            int e10 = v10.e(f.j.f22361f, -1);
            int e11 = v10.e(f.j.f22356e, -1);
            if (e10 >= 0 || e11 >= 0) {
                this.f2303a.J(Math.max(e10, 0), Math.max(e11, 0));
            }
            int n11 = v10.n(f.j.f22426s, 0);
            if (n11 != 0) {
                Toolbar toolbar2 = this.f2303a;
                toolbar2.N(toolbar2.getContext(), n11);
            }
            int n12 = v10.n(f.j.f22416q, 0);
            if (n12 != 0) {
                Toolbar toolbar3 = this.f2303a;
                toolbar3.M(toolbar3.getContext(), n12);
            }
            int n13 = v10.n(f.j.f22406o, 0);
            if (n13 != 0) {
                this.f2303a.setPopupTheme(n13);
            }
        } else {
            this.f2304b = x();
        }
        v10.x();
        z(i10);
        this.f2313k = this.f2303a.getNavigationContentDescription();
        this.f2303a.setNavigationOnClickListener(new a());
    }

    @Override // androidx.appcompat.widget.z
    public void setIcon(Drawable drawable) {
        this.f2307e = drawable;
        H();
    }
}
