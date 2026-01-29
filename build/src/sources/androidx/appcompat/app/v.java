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
    Context f1107a;

    /* renamed from: b  reason: collision with root package name */
    private Context f1108b;

    /* renamed from: c  reason: collision with root package name */
    private Activity f1109c;

    /* renamed from: d  reason: collision with root package name */
    ActionBarOverlayLayout f1110d;

    /* renamed from: e  reason: collision with root package name */
    ActionBarContainer f1111e;

    /* renamed from: f  reason: collision with root package name */
    z f1112f;

    /* renamed from: g  reason: collision with root package name */
    ActionBarContextView f1113g;

    /* renamed from: h  reason: collision with root package name */
    View f1114h;

    /* renamed from: k  reason: collision with root package name */
    private boolean f1117k;

    /* renamed from: l  reason: collision with root package name */
    d f1118l;

    /* renamed from: m  reason: collision with root package name */
    ActionMode f1119m;

    /* renamed from: n  reason: collision with root package name */
    ActionMode.Callback f1120n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f1121o;

    /* renamed from: q  reason: collision with root package name */
    private boolean f1123q;

    /* renamed from: t  reason: collision with root package name */
    boolean f1126t;

    /* renamed from: u  reason: collision with root package name */
    boolean f1127u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f1128v;

    /* renamed from: x  reason: collision with root package name */
    androidx.appcompat.view.f f1130x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f1131y;

    /* renamed from: z  reason: collision with root package name */
    boolean f1132z;

    /* renamed from: i  reason: collision with root package name */
    private ArrayList f1115i = new ArrayList();

    /* renamed from: j  reason: collision with root package name */
    private int f1116j = -1;

    /* renamed from: p  reason: collision with root package name */
    private ArrayList f1122p = new ArrayList();

    /* renamed from: r  reason: collision with root package name */
    private int f1124r = 0;

    /* renamed from: s  reason: collision with root package name */
    boolean f1125s = true;

    /* renamed from: w  reason: collision with root package name */
    private boolean f1129w = true;
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
            if (vVar.f1125s && (view2 = vVar.f1114h) != null) {
                view2.setTranslationY(0.0f);
                v.this.f1111e.setTranslationY(0.0f);
            }
            v.this.f1111e.setVisibility(8);
            v.this.f1111e.setTransitioning(false);
            v vVar2 = v.this;
            vVar2.f1130x = null;
            vVar2.B();
            ActionBarOverlayLayout actionBarOverlayLayout = v.this.f1110d;
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
            vVar.f1130x = null;
            vVar.f1111e.requestLayout();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements u0 {
        c() {
        }

        @Override // androidx.core.view.u0
        public void a(View view) {
            ((View) v.this.f1111e.getParent()).invalidate();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends ActionMode implements e.a {

        /* renamed from: i  reason: collision with root package name */
        private final Context f1136i;

        /* renamed from: o  reason: collision with root package name */
        private final androidx.appcompat.view.menu.e f1137o;

        /* renamed from: p  reason: collision with root package name */
        private ActionMode.Callback f1138p;

        /* renamed from: q  reason: collision with root package name */
        private WeakReference f1139q;

        public d(Context context, ActionMode.Callback callback) {
            this.f1136i = context;
            this.f1138p = callback;
            androidx.appcompat.view.menu.e T = new androidx.appcompat.view.menu.e(context).T(1);
            this.f1137o = T;
            T.S(this);
        }

        @Override // androidx.appcompat.view.menu.e.a
        public boolean a(androidx.appcompat.view.menu.e eVar, MenuItem menuItem) {
            ActionMode.Callback callback = this.f1138p;
            if (callback != null) {
                return callback.c(this, menuItem);
            }
            return false;
        }

        @Override // androidx.appcompat.view.menu.e.a
        public void b(androidx.appcompat.view.menu.e eVar) {
            if (this.f1138p == null) {
                return;
            }
            k();
            v.this.f1113g.l();
        }

        @Override // androidx.appcompat.view.ActionMode
        public void c() {
            v vVar = v.this;
            if (vVar.f1118l != this) {
                return;
            }
            if (!v.A(vVar.f1126t, vVar.f1127u, false)) {
                v vVar2 = v.this;
                vVar2.f1119m = this;
                vVar2.f1120n = this.f1138p;
            } else {
                this.f1138p.a(this);
            }
            this.f1138p = null;
            v.this.z(false);
            v.this.f1113g.g();
            v vVar3 = v.this;
            vVar3.f1110d.setHideOnContentScrollEnabled(vVar3.f1132z);
            v.this.f1118l = null;
        }

        @Override // androidx.appcompat.view.ActionMode
        public View d() {
            WeakReference weakReference = this.f1139q;
            if (weakReference != null) {
                return (View) weakReference.get();
            }
            return null;
        }

        @Override // androidx.appcompat.view.ActionMode
        public Menu e() {
            return this.f1137o;
        }

        @Override // androidx.appcompat.view.ActionMode
        public MenuInflater f() {
            return new androidx.appcompat.view.e(this.f1136i);
        }

        @Override // androidx.appcompat.view.ActionMode
        public CharSequence g() {
            return v.this.f1113g.getSubtitle();
        }

        @Override // androidx.appcompat.view.ActionMode
        public CharSequence i() {
            return v.this.f1113g.getTitle();
        }

        @Override // androidx.appcompat.view.ActionMode
        public void k() {
            if (v.this.f1118l != this) {
                return;
            }
            this.f1137o.e0();
            try {
                this.f1138p.d(this, this.f1137o);
            } finally {
                this.f1137o.d0();
            }
        }

        @Override // androidx.appcompat.view.ActionMode
        public boolean l() {
            return v.this.f1113g.j();
        }

        @Override // androidx.appcompat.view.ActionMode
        public void m(View view) {
            v.this.f1113g.setCustomView(view);
            this.f1139q = new WeakReference(view);
        }

        @Override // androidx.appcompat.view.ActionMode
        public void n(int i10) {
            o(v.this.f1107a.getResources().getString(i10));
        }

        @Override // androidx.appcompat.view.ActionMode
        public void o(CharSequence charSequence) {
            v.this.f1113g.setSubtitle(charSequence);
        }

        @Override // androidx.appcompat.view.ActionMode
        public void q(int i10) {
            r(v.this.f1107a.getResources().getString(i10));
        }

        @Override // androidx.appcompat.view.ActionMode
        public void r(CharSequence charSequence) {
            v.this.f1113g.setTitle(charSequence);
        }

        @Override // androidx.appcompat.view.ActionMode
        public void s(boolean z10) {
            super.s(z10);
            v.this.f1113g.setTitleOptional(z10);
        }

        public boolean t() {
            this.f1137o.e0();
            try {
                return this.f1138p.b(this, this.f1137o);
            } finally {
                this.f1137o.d0();
            }
        }
    }

    public v(Activity activity, boolean z10) {
        this.f1109c = activity;
        View decorView = activity.getWindow().getDecorView();
        H(decorView);
        if (z10) {
            return;
        }
        this.f1114h = decorView.findViewById(16908290);
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
        if (this.f1128v) {
            this.f1128v = false;
            ActionBarOverlayLayout actionBarOverlayLayout = this.f1110d;
            if (actionBarOverlayLayout != null) {
                actionBarOverlayLayout.setShowingForActionMode(false);
            }
            P(false);
        }
    }

    private void H(View view) {
        boolean z10;
        boolean z11;
        ActionBarOverlayLayout actionBarOverlayLayout = (ActionBarOverlayLayout) view.findViewById(f.f.f24159q);
        this.f1110d = actionBarOverlayLayout;
        if (actionBarOverlayLayout != null) {
            actionBarOverlayLayout.setActionBarVisibilityCallback(this);
        }
        this.f1112f = E(view.findViewById(f.f.f24143a));
        this.f1113g = (ActionBarContextView) view.findViewById(f.f.f24149g);
        ActionBarContainer actionBarContainer = (ActionBarContainer) view.findViewById(f.f.f24145c);
        this.f1111e = actionBarContainer;
        z zVar = this.f1112f;
        if (zVar != null && this.f1113g != null && actionBarContainer != null) {
            this.f1107a = zVar.getContext();
            if ((this.f1112f.u() & 4) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                this.f1117k = true;
            }
            androidx.appcompat.view.a b10 = androidx.appcompat.view.a.b(this.f1107a);
            if (!b10.a() && !z10) {
                z11 = false;
            } else {
                z11 = true;
            }
            M(z11);
            K(b10.e());
            TypedArray obtainStyledAttributes = this.f1107a.obtainStyledAttributes(null, f.j.f24207a, f.a.f24071c, 0);
            if (obtainStyledAttributes.getBoolean(f.j.f24257k, false)) {
                L(true);
            }
            int dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(f.j.f24247i, 0);
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
        this.f1123q = z10;
        if (!z10) {
            this.f1112f.r(null);
            this.f1111e.setTabContainer(null);
        } else {
            this.f1111e.setTabContainer(null);
            this.f1112f.r(null);
        }
        boolean z13 = false;
        if (F() == 2) {
            z11 = true;
        } else {
            z11 = false;
        }
        z zVar = this.f1112f;
        if (!this.f1123q && z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        zVar.p(z12);
        ActionBarOverlayLayout actionBarOverlayLayout = this.f1110d;
        if (!this.f1123q && z11) {
            z13 = true;
        }
        actionBarOverlayLayout.setHasNonEmbeddedTabs(z13);
    }

    private boolean N() {
        return this.f1111e.isLaidOut();
    }

    private void O() {
        if (!this.f1128v) {
            this.f1128v = true;
            ActionBarOverlayLayout actionBarOverlayLayout = this.f1110d;
            if (actionBarOverlayLayout != null) {
                actionBarOverlayLayout.setShowingForActionMode(true);
            }
            P(false);
        }
    }

    private void P(boolean z10) {
        if (A(this.f1126t, this.f1127u, this.f1128v)) {
            if (!this.f1129w) {
                this.f1129w = true;
                D(z10);
            }
        } else if (this.f1129w) {
            this.f1129w = false;
            C(z10);
        }
    }

    void B() {
        ActionMode.Callback callback = this.f1120n;
        if (callback != null) {
            callback.a(this.f1119m);
            this.f1119m = null;
            this.f1120n = null;
        }
    }

    public void C(boolean z10) {
        View view;
        int[] iArr;
        androidx.appcompat.view.f fVar = this.f1130x;
        if (fVar != null) {
            fVar.a();
        }
        if (this.f1124r == 0 && (this.f1131y || z10)) {
            this.f1111e.setAlpha(1.0f);
            this.f1111e.setTransitioning(true);
            androidx.appcompat.view.f fVar2 = new androidx.appcompat.view.f();
            float f10 = -this.f1111e.getHeight();
            if (z10) {
                this.f1111e.getLocationInWindow(new int[]{0, 0});
                f10 -= iArr[1];
            }
            r0 l10 = h0.e(this.f1111e).l(f10);
            l10.j(this.C);
            fVar2.c(l10);
            if (this.f1125s && (view = this.f1114h) != null) {
                fVar2.c(h0.e(view).l(f10));
            }
            fVar2.f(D);
            fVar2.e(250L);
            fVar2.g(this.A);
            this.f1130x = fVar2;
            fVar2.h();
            return;
        }
        this.A.b(null);
    }

    public void D(boolean z10) {
        View view;
        View view2;
        int[] iArr;
        androidx.appcompat.view.f fVar = this.f1130x;
        if (fVar != null) {
            fVar.a();
        }
        this.f1111e.setVisibility(0);
        if (this.f1124r == 0 && (this.f1131y || z10)) {
            this.f1111e.setTranslationY(0.0f);
            float f10 = -this.f1111e.getHeight();
            if (z10) {
                this.f1111e.getLocationInWindow(new int[]{0, 0});
                f10 -= iArr[1];
            }
            this.f1111e.setTranslationY(f10);
            androidx.appcompat.view.f fVar2 = new androidx.appcompat.view.f();
            r0 l10 = h0.e(this.f1111e).l(0.0f);
            l10.j(this.C);
            fVar2.c(l10);
            if (this.f1125s && (view2 = this.f1114h) != null) {
                view2.setTranslationY(f10);
                fVar2.c(h0.e(this.f1114h).l(0.0f));
            }
            fVar2.f(E);
            fVar2.e(250L);
            fVar2.g(this.B);
            this.f1130x = fVar2;
            fVar2.h();
        } else {
            this.f1111e.setAlpha(1.0f);
            this.f1111e.setTranslationY(0.0f);
            if (this.f1125s && (view = this.f1114h) != null) {
                view.setTranslationY(0.0f);
            }
            this.B.b(null);
        }
        ActionBarOverlayLayout actionBarOverlayLayout = this.f1110d;
        if (actionBarOverlayLayout != null) {
            h0.k0(actionBarOverlayLayout);
        }
    }

    public int F() {
        return this.f1112f.k();
    }

    public void I(int i10, int i11) {
        int u10 = this.f1112f.u();
        if ((i11 & 4) != 0) {
            this.f1117k = true;
        }
        this.f1112f.i((i10 & i11) | ((~i11) & u10));
    }

    public void J(float f10) {
        h0.v0(this.f1111e, f10);
    }

    public void L(boolean z10) {
        if (z10 && !this.f1110d.r()) {
            throw new IllegalStateException("Action bar must be in overlay mode (Window.FEATURE_OVERLAY_ACTION_BAR) to enable hide on content scroll");
        }
        this.f1132z = z10;
        this.f1110d.setHideOnContentScrollEnabled(z10);
    }

    public void M(boolean z10) {
        this.f1112f.n(z10);
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void a() {
        if (this.f1127u) {
            this.f1127u = false;
            P(true);
        }
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void b() {
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void c(boolean z10) {
        this.f1125s = z10;
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void d() {
        if (!this.f1127u) {
            this.f1127u = true;
            P(true);
        }
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void e() {
        androidx.appcompat.view.f fVar = this.f1130x;
        if (fVar != null) {
            fVar.a();
            this.f1130x = null;
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean g() {
        z zVar = this.f1112f;
        if (zVar != null && zVar.h()) {
            this.f1112f.collapseActionView();
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void h(boolean z10) {
        if (z10 != this.f1121o) {
            this.f1121o = z10;
            if (this.f1122p.size() <= 0) {
                return;
            }
            android.support.v4.media.session.b.a(this.f1122p.get(0));
            throw null;
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public int i() {
        return this.f1112f.u();
    }

    @Override // androidx.appcompat.app.ActionBar
    public Context j() {
        if (this.f1108b == null) {
            TypedValue typedValue = new TypedValue();
            this.f1107a.getTheme().resolveAttribute(f.a.f24073e, typedValue, true);
            int i10 = typedValue.resourceId;
            if (i10 != 0) {
                this.f1108b = new ContextThemeWrapper(this.f1107a, i10);
            } else {
                this.f1108b = this.f1107a;
            }
        }
        return this.f1108b;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void k() {
        if (!this.f1126t) {
            this.f1126t = true;
            P(false);
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public void m(Configuration configuration) {
        K(androidx.appcompat.view.a.b(this.f1107a).e());
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean o(int i10, KeyEvent keyEvent) {
        Menu e10;
        int i11;
        d dVar = this.f1118l;
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
        this.f1124r = i10;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void r(boolean z10) {
        if (!this.f1117k) {
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
        this.f1112f.w(drawable);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void v(boolean z10) {
        androidx.appcompat.view.f fVar;
        this.f1131y = z10;
        if (!z10 && (fVar = this.f1130x) != null) {
            fVar.a();
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public void w(CharSequence charSequence) {
        this.f1112f.setTitle(charSequence);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void x(CharSequence charSequence) {
        this.f1112f.setWindowTitle(charSequence);
    }

    @Override // androidx.appcompat.app.ActionBar
    public ActionMode y(ActionMode.Callback callback) {
        d dVar = this.f1118l;
        if (dVar != null) {
            dVar.c();
        }
        this.f1110d.setHideOnContentScrollEnabled(false);
        this.f1113g.k();
        d dVar2 = new d(this.f1113g.getContext(), callback);
        if (dVar2.t()) {
            this.f1118l = dVar2;
            dVar2.k();
            this.f1113g.h(dVar2);
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
                f10 = this.f1112f.l(4, 100L);
                l10 = this.f1113g.f(0, 200L);
            } else {
                l10 = this.f1112f.l(0, 200L);
                f10 = this.f1113g.f(8, 100L);
            }
            androidx.appcompat.view.f fVar = new androidx.appcompat.view.f();
            fVar.d(f10, l10);
            fVar.h();
        } else if (z10) {
            this.f1112f.setVisibility(4);
            this.f1113g.setVisibility(0);
        } else {
            this.f1112f.setVisibility(0);
            this.f1113g.setVisibility(8);
        }
    }

    public v(Dialog dialog) {
        H(dialog.getWindow().getDecorView());
    }
}
