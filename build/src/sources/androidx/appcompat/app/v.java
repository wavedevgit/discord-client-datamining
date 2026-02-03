package androidx.appcompat.app;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.res.Configuration;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.util.TypedValue;
import android.view.ContextThemeWrapper;
import android.view.KeyCharacterMap;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.DecelerateInterpolator;
import android.view.animation.Interpolator;
import androidx.appcompat.view.ActionMode;
import androidx.appcompat.view.menu.e;
import androidx.appcompat.widget.ActionBarContainer;
import androidx.appcompat.widget.ActionBarContextView;
import androidx.appcompat.widget.ActionBarOverlayLayout;
import androidx.appcompat.widget.Toolbar;
import androidx.appcompat.widget.z;
import androidx.core.view.h0;
import androidx.core.view.r0;
import androidx.core.view.s0;
import androidx.core.view.t0;
import androidx.core.view.u0;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class v extends ActionBar implements ActionBarOverlayLayout.d {
    private static final Interpolator D = new AccelerateInterpolator();
    private static final Interpolator E = new DecelerateInterpolator();

    /* renamed from: a  reason: collision with root package name */
    Context f1151a;

    /* renamed from: b  reason: collision with root package name */
    private Context f1152b;

    /* renamed from: c  reason: collision with root package name */
    private Activity f1153c;

    /* renamed from: d  reason: collision with root package name */
    ActionBarOverlayLayout f1154d;

    /* renamed from: e  reason: collision with root package name */
    ActionBarContainer f1155e;

    /* renamed from: f  reason: collision with root package name */
    z f1156f;

    /* renamed from: g  reason: collision with root package name */
    ActionBarContextView f1157g;

    /* renamed from: h  reason: collision with root package name */
    View f1158h;

    /* renamed from: k  reason: collision with root package name */
    private boolean f1161k;

    /* renamed from: l  reason: collision with root package name */
    d f1162l;

    /* renamed from: m  reason: collision with root package name */
    ActionMode f1163m;

    /* renamed from: n  reason: collision with root package name */
    ActionMode.Callback f1164n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f1165o;

    /* renamed from: q  reason: collision with root package name */
    private boolean f1167q;

    /* renamed from: t  reason: collision with root package name */
    boolean f1170t;

    /* renamed from: u  reason: collision with root package name */
    boolean f1171u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f1172v;

    /* renamed from: x  reason: collision with root package name */
    androidx.appcompat.view.f f1174x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f1175y;

    /* renamed from: z  reason: collision with root package name */
    boolean f1176z;

    /* renamed from: i  reason: collision with root package name */
    private ArrayList f1159i = new ArrayList();

    /* renamed from: j  reason: collision with root package name */
    private int f1160j = -1;

    /* renamed from: p  reason: collision with root package name */
    private ArrayList f1166p = new ArrayList();

    /* renamed from: r  reason: collision with root package name */
    private int f1168r = 0;

    /* renamed from: s  reason: collision with root package name */
    boolean f1169s = true;

    /* renamed from: w  reason: collision with root package name */
    private boolean f1173w = true;
    final s0 A = new a();
    final s0 B = new b();
    final u0 C = new c();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends t0 {
        a() {
        }

        @Override // androidx.core.view.s0
        public void b(View view) {
            View view2;
            v vVar = v.this;
            if (vVar.f1169s && (view2 = vVar.f1158h) != null) {
                view2.setTranslationY(0.0f);
                v.this.f1155e.setTranslationY(0.0f);
            }
            v.this.f1155e.setVisibility(8);
            v.this.f1155e.setTransitioning(false);
            v vVar2 = v.this;
            vVar2.f1174x = null;
            vVar2.B();
            ActionBarOverlayLayout actionBarOverlayLayout = v.this.f1154d;
            if (actionBarOverlayLayout != null) {
                h0.k0(actionBarOverlayLayout);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends t0 {
        b() {
        }

        @Override // androidx.core.view.s0
        public void b(View view) {
            v vVar = v.this;
            vVar.f1174x = null;
            vVar.f1155e.requestLayout();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements u0 {
        c() {
        }

        @Override // androidx.core.view.u0
        public void a(View view) {
            ((View) v.this.f1155e.getParent()).invalidate();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends ActionMode implements e.a {

        /* renamed from: i  reason: collision with root package name */
        private final Context f1180i;

        /* renamed from: o  reason: collision with root package name */
        private final androidx.appcompat.view.menu.e f1181o;

        /* renamed from: p  reason: collision with root package name */
        private ActionMode.Callback f1182p;

        /* renamed from: q  reason: collision with root package name */
        private WeakReference f1183q;

        public d(Context context, ActionMode.Callback callback) {
            this.f1180i = context;
            this.f1182p = callback;
            androidx.appcompat.view.menu.e T = new androidx.appcompat.view.menu.e(context).T(1);
            this.f1181o = T;
            T.S(this);
        }

        @Override // androidx.appcompat.view.menu.e.a
        public boolean a(androidx.appcompat.view.menu.e eVar, MenuItem menuItem) {
            ActionMode.Callback callback = this.f1182p;
            if (callback != null) {
                return callback.c(this, menuItem);
            }
            return false;
        }

        @Override // androidx.appcompat.view.menu.e.a
        public void b(androidx.appcompat.view.menu.e eVar) {
            if (this.f1182p == null) {
                return;
            }
            k();
            v.this.f1157g.l();
        }

        @Override // androidx.appcompat.view.ActionMode
        public void c() {
            v vVar = v.this;
            if (vVar.f1162l != this) {
                return;
            }
            if (!v.A(vVar.f1170t, vVar.f1171u, false)) {
                v vVar2 = v.this;
                vVar2.f1163m = this;
                vVar2.f1164n = this.f1182p;
            } else {
                this.f1182p.a(this);
            }
            this.f1182p = null;
            v.this.z(false);
            v.this.f1157g.g();
            v vVar3 = v.this;
            vVar3.f1154d.setHideOnContentScrollEnabled(vVar3.f1176z);
            v.this.f1162l = null;
        }

        @Override // androidx.appcompat.view.ActionMode
        public View d() {
            WeakReference weakReference = this.f1183q;
            if (weakReference != null) {
                return (View) weakReference.get();
            }
            return null;
        }

        @Override // androidx.appcompat.view.ActionMode
        public Menu e() {
            return this.f1181o;
        }

        @Override // androidx.appcompat.view.ActionMode
        public MenuInflater f() {
            return new androidx.appcompat.view.e(this.f1180i);
        }

        @Override // androidx.appcompat.view.ActionMode
        public CharSequence g() {
            return v.this.f1157g.getSubtitle();
        }

        @Override // androidx.appcompat.view.ActionMode
        public CharSequence i() {
            return v.this.f1157g.getTitle();
        }

        @Override // androidx.appcompat.view.ActionMode
        public void k() {
            if (v.this.f1162l != this) {
                return;
            }
            this.f1181o.e0();
            try {
                this.f1182p.d(this, this.f1181o);
            } finally {
                this.f1181o.d0();
            }
        }

        @Override // androidx.appcompat.view.ActionMode
        public boolean l() {
            return v.this.f1157g.j();
        }

        @Override // androidx.appcompat.view.ActionMode
        public void m(View view) {
            v.this.f1157g.setCustomView(view);
            this.f1183q = new WeakReference(view);
        }

        @Override // androidx.appcompat.view.ActionMode
        public void n(int i10) {
            o(v.this.f1151a.getResources().getString(i10));
        }

        @Override // androidx.appcompat.view.ActionMode
        public void o(CharSequence charSequence) {
            v.this.f1157g.setSubtitle(charSequence);
        }

        @Override // androidx.appcompat.view.ActionMode
        public void q(int i10) {
            r(v.this.f1151a.getResources().getString(i10));
        }

        @Override // androidx.appcompat.view.ActionMode
        public void r(CharSequence charSequence) {
            v.this.f1157g.setTitle(charSequence);
        }

        @Override // androidx.appcompat.view.ActionMode
        public void s(boolean z10) {
            super.s(z10);
            v.this.f1157g.setTitleOptional(z10);
        }

        public boolean t() {
            this.f1181o.e0();
            try {
                return this.f1182p.b(this, this.f1181o);
            } finally {
                this.f1181o.d0();
            }
        }
    }

    public v(Activity activity, boolean z10) {
        this.f1153c = activity;
        View decorView = activity.getWindow().getDecorView();
        H(decorView);
        if (z10) {
            return;
        }
        this.f1158h = decorView.findViewById(16908290);
    }

    static boolean A(boolean z10, boolean z11, boolean z12) {
        if (z12) {
            return true;
        }
        return (z10 || z11) ? false : true;
    }

    private z E(View view) {
        String str;
        if (view instanceof z) {
            return (z) view;
        }
        if (view instanceof Toolbar) {
            return ((Toolbar) view).getWrapper();
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Can't make a decor toolbar out of ");
        if (view != null) {
            str = view.getClass().getSimpleName();
        } else {
            str = "null";
        }
        sb2.append(str);
        throw new IllegalStateException(sb2.toString());
    }

    private void G() {
        if (this.f1172v) {
            this.f1172v = false;
            ActionBarOverlayLayout actionBarOverlayLayout = this.f1154d;
            if (actionBarOverlayLayout != null) {
                actionBarOverlayLayout.setShowingForActionMode(false);
            }
            P(false);
        }
    }

    private void H(View view) {
        boolean z10;
        boolean z11;
        ActionBarOverlayLayout actionBarOverlayLayout = (ActionBarOverlayLayout) view.findViewById(f.f.f23370q);
        this.f1154d = actionBarOverlayLayout;
        if (actionBarOverlayLayout != null) {
            actionBarOverlayLayout.setActionBarVisibilityCallback(this);
        }
        this.f1156f = E(view.findViewById(f.f.f23354a));
        this.f1157g = (ActionBarContextView) view.findViewById(f.f.f23360g);
        ActionBarContainer actionBarContainer = (ActionBarContainer) view.findViewById(f.f.f23356c);
        this.f1155e = actionBarContainer;
        z zVar = this.f1156f;
        if (zVar != null && this.f1157g != null && actionBarContainer != null) {
            this.f1151a = zVar.getContext();
            if ((this.f1156f.u() & 4) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                this.f1161k = true;
            }
            androidx.appcompat.view.a b10 = androidx.appcompat.view.a.b(this.f1151a);
            if (!b10.a() && !z10) {
                z11 = false;
            } else {
                z11 = true;
            }
            M(z11);
            K(b10.e());
            TypedArray obtainStyledAttributes = this.f1151a.obtainStyledAttributes(null, f.j.f23418a, f.a.f23282c, 0);
            if (obtainStyledAttributes.getBoolean(f.j.f23468k, false)) {
                L(true);
            }
            int dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(f.j.f23458i, 0);
            if (dimensionPixelSize != 0) {
                J(dimensionPixelSize);
            }
            obtainStyledAttributes.recycle();
            return;
        }
        throw new IllegalStateException(getClass().getSimpleName() + " can only be used with a compatible window decor layout");
    }

    private void K(boolean z10) {
        boolean z11;
        boolean z12;
        this.f1167q = z10;
        if (!z10) {
            this.f1156f.r(null);
            this.f1155e.setTabContainer(null);
        } else {
            this.f1155e.setTabContainer(null);
            this.f1156f.r(null);
        }
        boolean z13 = false;
        if (F() == 2) {
            z11 = true;
        } else {
            z11 = false;
        }
        z zVar = this.f1156f;
        if (!this.f1167q && z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        zVar.p(z12);
        ActionBarOverlayLayout actionBarOverlayLayout = this.f1154d;
        if (!this.f1167q && z11) {
            z13 = true;
        }
        actionBarOverlayLayout.setHasNonEmbeddedTabs(z13);
    }

    private boolean N() {
        return this.f1155e.isLaidOut();
    }

    private void O() {
        if (!this.f1172v) {
            this.f1172v = true;
            ActionBarOverlayLayout actionBarOverlayLayout = this.f1154d;
            if (actionBarOverlayLayout != null) {
                actionBarOverlayLayout.setShowingForActionMode(true);
            }
            P(false);
        }
    }

    private void P(boolean z10) {
        if (A(this.f1170t, this.f1171u, this.f1172v)) {
            if (!this.f1173w) {
                this.f1173w = true;
                D(z10);
            }
        } else if (this.f1173w) {
            this.f1173w = false;
            C(z10);
        }
    }

    void B() {
        ActionMode.Callback callback = this.f1164n;
        if (callback != null) {
            callback.a(this.f1163m);
            this.f1163m = null;
            this.f1164n = null;
        }
    }

    public void C(boolean z10) {
        View view;
        int[] iArr;
        androidx.appcompat.view.f fVar = this.f1174x;
        if (fVar != null) {
            fVar.a();
        }
        if (this.f1168r == 0 && (this.f1175y || z10)) {
            this.f1155e.setAlpha(1.0f);
            this.f1155e.setTransitioning(true);
            androidx.appcompat.view.f fVar2 = new androidx.appcompat.view.f();
            float f10 = -this.f1155e.getHeight();
            if (z10) {
                this.f1155e.getLocationInWindow(new int[]{0, 0});
                f10 -= iArr[1];
            }
            r0 l10 = h0.e(this.f1155e).l(f10);
            l10.j(this.C);
            fVar2.c(l10);
            if (this.f1169s && (view = this.f1158h) != null) {
                fVar2.c(h0.e(view).l(f10));
            }
            fVar2.f(D);
            fVar2.e(250L);
            fVar2.g(this.A);
            this.f1174x = fVar2;
            fVar2.h();
            return;
        }
        this.A.b(null);
    }

    public void D(boolean z10) {
        View view;
        View view2;
        int[] iArr;
        androidx.appcompat.view.f fVar = this.f1174x;
        if (fVar != null) {
            fVar.a();
        }
        this.f1155e.setVisibility(0);
        if (this.f1168r == 0 && (this.f1175y || z10)) {
            this.f1155e.setTranslationY(0.0f);
            float f10 = -this.f1155e.getHeight();
            if (z10) {
                this.f1155e.getLocationInWindow(new int[]{0, 0});
                f10 -= iArr[1];
            }
            this.f1155e.setTranslationY(f10);
            androidx.appcompat.view.f fVar2 = new androidx.appcompat.view.f();
            r0 l10 = h0.e(this.f1155e).l(0.0f);
            l10.j(this.C);
            fVar2.c(l10);
            if (this.f1169s && (view2 = this.f1158h) != null) {
                view2.setTranslationY(f10);
                fVar2.c(h0.e(this.f1158h).l(0.0f));
            }
            fVar2.f(E);
            fVar2.e(250L);
            fVar2.g(this.B);
            this.f1174x = fVar2;
            fVar2.h();
        } else {
            this.f1155e.setAlpha(1.0f);
            this.f1155e.setTranslationY(0.0f);
            if (this.f1169s && (view = this.f1158h) != null) {
                view.setTranslationY(0.0f);
            }
            this.B.b(null);
        }
        ActionBarOverlayLayout actionBarOverlayLayout = this.f1154d;
        if (actionBarOverlayLayout != null) {
            h0.k0(actionBarOverlayLayout);
        }
    }

    public int F() {
        return this.f1156f.k();
    }

    public void I(int i10, int i11) {
        int u10 = this.f1156f.u();
        if ((i11 & 4) != 0) {
            this.f1161k = true;
        }
        this.f1156f.i((i10 & i11) | ((~i11) & u10));
    }

    public void J(float f10) {
        h0.v0(this.f1155e, f10);
    }

    public void L(boolean z10) {
        if (z10 && !this.f1154d.r()) {
            throw new IllegalStateException("Action bar must be in overlay mode (Window.FEATURE_OVERLAY_ACTION_BAR) to enable hide on content scroll");
        }
        this.f1176z = z10;
        this.f1154d.setHideOnContentScrollEnabled(z10);
    }

    public void M(boolean z10) {
        this.f1156f.n(z10);
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void a() {
        if (this.f1171u) {
            this.f1171u = false;
            P(true);
        }
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void b() {
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void c(boolean z10) {
        this.f1169s = z10;
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void d() {
        if (!this.f1171u) {
            this.f1171u = true;
            P(true);
        }
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void e() {
        androidx.appcompat.view.f fVar = this.f1174x;
        if (fVar != null) {
            fVar.a();
            this.f1174x = null;
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean g() {
        z zVar = this.f1156f;
        if (zVar != null && zVar.h()) {
            this.f1156f.collapseActionView();
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void h(boolean z10) {
        if (z10 != this.f1165o) {
            this.f1165o = z10;
            if (this.f1166p.size() <= 0) {
                return;
            }
            android.support.v4.media.session.b.a(this.f1166p.get(0));
            throw null;
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public int i() {
        return this.f1156f.u();
    }

    @Override // androidx.appcompat.app.ActionBar
    public Context j() {
        if (this.f1152b == null) {
            TypedValue typedValue = new TypedValue();
            this.f1151a.getTheme().resolveAttribute(f.a.f23284e, typedValue, true);
            int i10 = typedValue.resourceId;
            if (i10 != 0) {
                this.f1152b = new ContextThemeWrapper(this.f1151a, i10);
            } else {
                this.f1152b = this.f1151a;
            }
        }
        return this.f1152b;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void k() {
        if (!this.f1170t) {
            this.f1170t = true;
            P(false);
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public void m(Configuration configuration) {
        K(androidx.appcompat.view.a.b(this.f1151a).e());
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean o(int i10, KeyEvent keyEvent) {
        Menu e10;
        int i11;
        d dVar = this.f1162l;
        if (dVar == null || (e10 = dVar.e()) == null) {
            return false;
        }
        if (keyEvent != null) {
            i11 = keyEvent.getDeviceId();
        } else {
            i11 = -1;
        }
        boolean z10 = true;
        if (KeyCharacterMap.load(i11).getKeyboardType() == 1) {
            z10 = false;
        }
        e10.setQwertyMode(z10);
        return e10.performShortcut(i10, keyEvent, 0);
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void onWindowVisibilityChanged(int i10) {
        this.f1168r = i10;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void r(boolean z10) {
        if (!this.f1161k) {
            s(z10);
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public void s(boolean z10) {
        int i10;
        if (z10) {
            i10 = 4;
        } else {
            i10 = 0;
        }
        I(i10, 4);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void t(boolean z10) {
        int i10;
        if (z10) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        I(i10, 8);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void u(Drawable drawable) {
        this.f1156f.w(drawable);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void v(boolean z10) {
        androidx.appcompat.view.f fVar;
        this.f1175y = z10;
        if (!z10 && (fVar = this.f1174x) != null) {
            fVar.a();
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public void w(CharSequence charSequence) {
        this.f1156f.setTitle(charSequence);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void x(CharSequence charSequence) {
        this.f1156f.setWindowTitle(charSequence);
    }

    @Override // androidx.appcompat.app.ActionBar
    public ActionMode y(ActionMode.Callback callback) {
        d dVar = this.f1162l;
        if (dVar != null) {
            dVar.c();
        }
        this.f1154d.setHideOnContentScrollEnabled(false);
        this.f1157g.k();
        d dVar2 = new d(this.f1157g.getContext(), callback);
        if (dVar2.t()) {
            this.f1162l = dVar2;
            dVar2.k();
            this.f1157g.h(dVar2);
            z(true);
            return dVar2;
        }
        return null;
    }

    public void z(boolean z10) {
        r0 l10;
        r0 f10;
        if (z10) {
            O();
        } else {
            G();
        }
        if (N()) {
            if (z10) {
                f10 = this.f1156f.l(4, 100L);
                l10 = this.f1157g.f(0, 200L);
            } else {
                l10 = this.f1156f.l(0, 200L);
                f10 = this.f1157g.f(8, 100L);
            }
            androidx.appcompat.view.f fVar = new androidx.appcompat.view.f();
            fVar.d(f10, l10);
            fVar.h();
        } else if (z10) {
            this.f1156f.setVisibility(4);
            this.f1157g.setVisibility(0);
        } else {
            this.f1156f.setVisibility(0);
            this.f1157g.setVisibility(8);
        }
    }

    public v(Dialog dialog) {
        H(dialog.getWindow().getDecorView());
    }
}
