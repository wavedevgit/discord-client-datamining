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
    Toolbar f1974a;

    /* renamed from: b  reason: collision with root package name */
    private int f1975b;

    /* renamed from: c  reason: collision with root package name */
    private View f1976c;

    /* renamed from: d  reason: collision with root package name */
    private View f1977d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f1978e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f1979f;

    /* renamed from: g  reason: collision with root package name */
    private Drawable f1980g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1981h;

    /* renamed from: i  reason: collision with root package name */
    CharSequence f1982i;

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f1983j;

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f1984k;

    /* renamed from: l  reason: collision with root package name */
    Window.Callback f1985l;

    /* renamed from: m  reason: collision with root package name */
    boolean f1986m;

    /* renamed from: n  reason: collision with root package name */
    private c f1987n;

    /* renamed from: o  reason: collision with root package name */
    private int f1988o;

    /* renamed from: p  reason: collision with root package name */
    private int f1989p;

    /* renamed from: q  reason: collision with root package name */
    private Drawable f1990q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final k.a f1991d;

        a() {
            this.f1991d = new k.a(z0.this.f1974a.getContext(), 0, 16908332, 0, 0, z0.this.f1982i);
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            z0 z0Var = z0.this;
            Window.Callback callback = z0Var.f1985l;
            if (callback != null && z0Var.f1986m) {
                callback.onMenuItemSelected(0, this.f1991d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends androidx.core.view.t0 {

        /* renamed from: a  reason: collision with root package name */
        private boolean f1993a = false;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f1994b;

        b(int i10) {
            this.f1994b = i10;
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void a(View view) {
            this.f1993a = true;
        }

        @Override // androidx.core.view.s0
        public void b(View view) {
            if (!this.f1993a) {
                z0.this.f1974a.setVisibility(this.f1994b);
            }
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void c(View view) {
            z0.this.f1974a.setVisibility(0);
        }
    }

    public z0(Toolbar toolbar, boolean z10) {
        this(toolbar, z10, f.h.f22017a, f.e.f21958n);
    }

    private void E(CharSequence charSequence) {
        this.f1982i = charSequence;
        if ((this.f1975b & 8) != 0) {
            this.f1974a.setTitle(charSequence);
            if (this.f1981h) {
                androidx.core.view.h0.q0(this.f1974a.getRootView(), charSequence);
            }
        }
    }

    private void F() {
        if ((this.f1975b & 4) != 0) {
            if (TextUtils.isEmpty(this.f1984k)) {
                this.f1974a.setNavigationContentDescription(this.f1989p);
            } else {
                this.f1974a.setNavigationContentDescription(this.f1984k);
            }
        }
    }

    private void G() {
        if ((this.f1975b & 4) != 0) {
            Toolbar toolbar = this.f1974a;
            Drawable drawable = this.f1980g;
            if (drawable == null) {
                drawable = this.f1990q;
            }
            toolbar.setNavigationIcon(drawable);
            return;
        }
        this.f1974a.setNavigationIcon((Drawable) null);
    }

    private void H() {
        Drawable drawable;
        int i10 = this.f1975b;
        if ((i10 & 2) != 0) {
            if ((i10 & 1) != 0) {
                drawable = this.f1979f;
                if (drawable == null) {
                    drawable = this.f1978e;
                }
            } else {
                drawable = this.f1978e;
            }
        } else {
            drawable = null;
        }
        this.f1974a.setLogo(drawable);
    }

    private int x() {
        if (this.f1974a.getNavigationIcon() != null) {
            this.f1990q = this.f1974a.getNavigationIcon();
            return 15;
        }
        return 11;
    }

    public void A(Drawable drawable) {
        this.f1979f = drawable;
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
        this.f1984k = charSequence;
        F();
    }

    public void D(CharSequence charSequence) {
        this.f1983j = charSequence;
        if ((this.f1975b & 8) != 0) {
            this.f1974a.setSubtitle(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public boolean a() {
        return this.f1974a.d();
    }

    @Override // androidx.appcompat.widget.z
    public boolean b() {
        return this.f1974a.w();
    }

    @Override // androidx.appcompat.widget.z
    public boolean c() {
        return this.f1974a.Q();
    }

    @Override // androidx.appcompat.widget.z
    public void collapseActionView() {
        this.f1974a.e();
    }

    @Override // androidx.appcompat.widget.z
    public void d(Menu menu, j.a aVar) {
        if (this.f1987n == null) {
            c cVar = new c(this.f1974a.getContext());
            this.f1987n = cVar;
            cVar.p(f.f.f21978h);
        }
        this.f1987n.c(aVar);
        this.f1974a.K((androidx.appcompat.view.menu.e) menu, this.f1987n);
    }

    @Override // androidx.appcompat.widget.z
    public boolean e() {
        return this.f1974a.B();
    }

    @Override // androidx.appcompat.widget.z
    public void f() {
        this.f1986m = true;
    }

    @Override // androidx.appcompat.widget.z
    public boolean g() {
        return this.f1974a.A();
    }

    @Override // androidx.appcompat.widget.z
    public Context getContext() {
        return this.f1974a.getContext();
    }

    @Override // androidx.appcompat.widget.z
    public CharSequence getTitle() {
        return this.f1974a.getTitle();
    }

    @Override // androidx.appcompat.widget.z
    public boolean h() {
        return this.f1974a.v();
    }

    @Override // androidx.appcompat.widget.z
    public void i(int i10) {
        View view;
        int i11 = this.f1975b ^ i10;
        this.f1975b = i10;
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
                    this.f1974a.setTitle(this.f1982i);
                    this.f1974a.setSubtitle(this.f1983j);
                } else {
                    this.f1974a.setTitle((CharSequence) null);
                    this.f1974a.setSubtitle((CharSequence) null);
                }
            }
            if ((i11 & 16) != 0 && (view = this.f1977d) != null) {
                if ((i10 & 16) != 0) {
                    this.f1974a.addView(view);
                } else {
                    this.f1974a.removeView(view);
                }
            }
        }
    }

    @Override // androidx.appcompat.widget.z
    public Menu j() {
        return this.f1974a.getMenu();
    }

    @Override // androidx.appcompat.widget.z
    public int k() {
        return this.f1988o;
    }

    @Override // androidx.appcompat.widget.z
    public androidx.core.view.r0 l(int i10, long j10) {
        float f10;
        androidx.core.view.r0 e10 = androidx.core.view.h0.e(this.f1974a);
        if (i10 == 0) {
            f10 = 1.0f;
        } else {
            f10 = 0.0f;
        }
        return e10.b(f10).e(j10).g(new b(i10));
    }

    @Override // androidx.appcompat.widget.z
    public ViewGroup m() {
        return this.f1974a;
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
        this.f1974a.setCollapsible(z10);
    }

    @Override // androidx.appcompat.widget.z
    public void q() {
        this.f1974a.f();
    }

    @Override // androidx.appcompat.widget.z
    public void r(p0 p0Var) {
        View view = this.f1976c;
        if (view != null) {
            ViewParent parent = view.getParent();
            Toolbar toolbar = this.f1974a;
            if (parent == toolbar) {
                toolbar.removeView(this.f1976c);
            }
        }
        this.f1976c = p0Var;
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
        this.f1981h = true;
        E(charSequence);
    }

    @Override // androidx.appcompat.widget.z
    public void setVisibility(int i10) {
        this.f1974a.setVisibility(i10);
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowCallback(Window.Callback callback) {
        this.f1985l = callback;
    }

    @Override // androidx.appcompat.widget.z
    public void setWindowTitle(CharSequence charSequence) {
        if (!this.f1981h) {
            E(charSequence);
        }
    }

    @Override // androidx.appcompat.widget.z
    public void t(j.a aVar, e.a aVar2) {
        this.f1974a.L(aVar, aVar2);
    }

    @Override // androidx.appcompat.widget.z
    public int u() {
        return this.f1975b;
    }

    @Override // androidx.appcompat.widget.z
    public void v() {
        Log.i("ToolbarWidgetWrapper", "Progress display unsupported");
    }

    @Override // androidx.appcompat.widget.z
    public void w(Drawable drawable) {
        this.f1980g = drawable;
        G();
    }

    public void y(View view) {
        View view2 = this.f1977d;
        if (view2 != null && (this.f1975b & 16) != 0) {
            this.f1974a.removeView(view2);
        }
        this.f1977d = view;
        if (view != null && (this.f1975b & 16) != 0) {
            this.f1974a.addView(view);
        }
    }

    public void z(int i10) {
        if (i10 != this.f1989p) {
            this.f1989p = i10;
            if (TextUtils.isEmpty(this.f1974a.getNavigationContentDescription())) {
                B(this.f1989p);
            }
        }
    }

    public z0(Toolbar toolbar, boolean z10, int i10, int i11) {
        Drawable drawable;
        this.f1988o = 0;
        this.f1989p = 0;
        this.f1974a = toolbar;
        this.f1982i = toolbar.getTitle();
        this.f1983j = toolbar.getSubtitle();
        this.f1981h = this.f1982i != null;
        this.f1980g = toolbar.getNavigationIcon();
        v0 v10 = v0.v(toolbar.getContext(), null, f.j.f22035a, f.a.f21899c, 0);
        this.f1990q = v10.g(f.j.f22090l);
        if (z10) {
            CharSequence p10 = v10.p(f.j.f22120r);
            if (!TextUtils.isEmpty(p10)) {
                setTitle(p10);
            }
            CharSequence p11 = v10.p(f.j.f22110p);
            if (!TextUtils.isEmpty(p11)) {
                D(p11);
            }
            Drawable g10 = v10.g(f.j.f22100n);
            if (g10 != null) {
                A(g10);
            }
            Drawable g11 = v10.g(f.j.f22095m);
            if (g11 != null) {
                setIcon(g11);
            }
            if (this.f1980g == null && (drawable = this.f1990q) != null) {
                w(drawable);
            }
            i(v10.k(f.j.f22070h, 0));
            int n10 = v10.n(f.j.f22065g, 0);
            if (n10 != 0) {
                y(LayoutInflater.from(this.f1974a.getContext()).inflate(n10, (ViewGroup) this.f1974a, false));
                i(this.f1975b | 16);
            }
            int m10 = v10.m(f.j.f22080j, 0);
            if (m10 > 0) {
                ViewGroup.LayoutParams layoutParams = this.f1974a.getLayoutParams();
                layoutParams.height = m10;
                this.f1974a.setLayoutParams(layoutParams);
            }
            int e10 = v10.e(f.j.f22060f, -1);
            int e11 = v10.e(f.j.f22055e, -1);
            if (e10 >= 0 || e11 >= 0) {
                this.f1974a.J(Math.max(e10, 0), Math.max(e11, 0));
            }
            int n11 = v10.n(f.j.f22125s, 0);
            if (n11 != 0) {
                Toolbar toolbar2 = this.f1974a;
                toolbar2.N(toolbar2.getContext(), n11);
            }
            int n12 = v10.n(f.j.f22115q, 0);
            if (n12 != 0) {
                Toolbar toolbar3 = this.f1974a;
                toolbar3.M(toolbar3.getContext(), n12);
            }
            int n13 = v10.n(f.j.f22105o, 0);
            if (n13 != 0) {
                this.f1974a.setPopupTheme(n13);
            }
        } else {
            this.f1975b = x();
        }
        v10.x();
        z(i10);
        this.f1984k = this.f1974a.getNavigationContentDescription();
        this.f1974a.setNavigationOnClickListener(new a());
    }

    @Override // androidx.appcompat.widget.z
    public void setIcon(Drawable drawable) {
        this.f1978e = drawable;
        H();
    }
}
