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
    Context f1258a;

    /* renamed from: b  reason: collision with root package name */
    private Context f1259b;

    /* renamed from: c  reason: collision with root package name */
    private Activity f1260c;

    /* renamed from: d  reason: collision with root package name */
    ActionBarOverlayLayout f1261d;

    /* renamed from: e  reason: collision with root package name */
    ActionBarContainer f1262e;

    /* renamed from: f  reason: collision with root package name */
    z f1263f;

    /* renamed from: g  reason: collision with root package name */
    ActionBarContextView f1264g;

    /* renamed from: h  reason: collision with root package name */
    View f1265h;

    /* renamed from: k  reason: collision with root package name */
    private boolean f1268k;

    /* renamed from: l  reason: collision with root package name */
    d f1269l;

    /* renamed from: m  reason: collision with root package name */
    ActionMode f1270m;

    /* renamed from: n  reason: collision with root package name */
    ActionMode.Callback f1271n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f1272o;

    /* renamed from: q  reason: collision with root package name */
    private boolean f1274q;

    /* renamed from: t  reason: collision with root package name */
    boolean f1277t;

    /* renamed from: u  reason: collision with root package name */
    boolean f1278u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f1279v;

    /* renamed from: x  reason: collision with root package name */
    androidx.appcompat.view.f f1281x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f1282y;

    /* renamed from: z  reason: collision with root package name */
    boolean f1283z;

    /* renamed from: i  reason: collision with root package name */
    private ArrayList f1266i = new ArrayList();

    /* renamed from: j  reason: collision with root package name */
    private int f1267j = -1;

    /* renamed from: p  reason: collision with root package name */
    private ArrayList f1273p = new ArrayList();

    /* renamed from: r  reason: collision with root package name */
    private int f1275r = 0;

    /* renamed from: s  reason: collision with root package name */
    boolean f1276s = true;

    /* renamed from: w  reason: collision with root package name */
    private boolean f1280w = true;
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
            if (vVar.f1276s && (view2 = vVar.f1265h) != null) {
                view2.setTranslationY(0.0f);
                v.this.f1262e.setTranslationY(0.0f);
            }
            v.this.f1262e.setVisibility(8);
            v.this.f1262e.setTransitioning(false);
            v vVar2 = v.this;
            vVar2.f1281x = null;
            vVar2.B();
            ActionBarOverlayLayout actionBarOverlayLayout = v.this.f1261d;
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
            vVar.f1281x = null;
            vVar.f1262e.requestLayout();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements u0 {
        c() {
        }

        @Override // androidx.core.view.u0
        public void a(View view) {
            ((View) v.this.f1262e.getParent()).invalidate();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends ActionMode implements e.a {

        /* renamed from: i  reason: collision with root package name */
        private final Context f1287i;

        /* renamed from: o  reason: collision with root package name */
        private final androidx.appcompat.view.menu.e f1288o;

        /* renamed from: p  reason: collision with root package name */
        private ActionMode.Callback f1289p;

        /* renamed from: q  reason: collision with root package name */
        private WeakReference f1290q;

        public d(Context context, ActionMode.Callback callback) {
            this.f1287i = context;
            this.f1289p = callback;
            androidx.appcompat.view.menu.e T = new androidx.appcompat.view.menu.e(context).T(1);
            this.f1288o = T;
            T.S(this);
        }

        @Override // androidx.appcompat.view.menu.e.a
        public boolean a(androidx.appcompat.view.menu.e eVar, MenuItem menuItem) {
            ActionMode.Callback callback = this.f1289p;
            if (callback != null) {
                return callback.c(this, menuItem);
            }
            return false;
        }

        @Override // androidx.appcompat.view.menu.e.a
        public void b(androidx.appcompat.view.menu.e eVar) {
            if (this.f1289p == null) {
                return;
            }
            k();
            v.this.f1264g.l();
        }

        @Override // androidx.appcompat.view.ActionMode
        public void c() {
            v vVar = v.this;
            if (vVar.f1269l != this) {
                return;
            }
            if (!v.A(vVar.f1277t, vVar.f1278u, false)) {
                v vVar2 = v.this;
                vVar2.f1270m = this;
                vVar2.f1271n = this.f1289p;
            } else {
                this.f1289p.a(this);
            }
            this.f1289p = null;
            v.this.z(false);
            v.this.f1264g.g();
            v vVar3 = v.this;
            vVar3.f1261d.setHideOnContentScrollEnabled(vVar3.f1283z);
            v.this.f1269l = null;
        }

        @Override // androidx.appcompat.view.ActionMode
        public View d() {
            WeakReference weakReference = this.f1290q;
            if (weakReference != null) {
                return (View) weakReference.get();
            }
            return null;
        }

        @Override // androidx.appcompat.view.ActionMode
        public Menu e() {
            return this.f1288o;
        }

        @Override // androidx.appcompat.view.ActionMode
        public MenuInflater f() {
            return new androidx.appcompat.view.e(this.f1287i);
        }

        @Override // androidx.appcompat.view.ActionMode
        public CharSequence g() {
            return v.this.f1264g.getSubtitle();
        }

        @Override // androidx.appcompat.view.ActionMode
        public CharSequence i() {
            return v.this.f1264g.getTitle();
        }

        @Override // androidx.appcompat.view.ActionMode
        public void k() {
            if (v.this.f1269l != this) {
                return;
            }
            this.f1288o.e0();
            try {
                this.f1289p.d(this, this.f1288o);
            } finally {
                this.f1288o.d0();
            }
        }

        @Override // androidx.appcompat.view.ActionMode
        public boolean l() {
            return v.this.f1264g.j();
        }

        @Override // androidx.appcompat.view.ActionMode
        public void m(View view) {
            v.this.f1264g.setCustomView(view);
            this.f1290q = new WeakReference(view);
        }

        @Override // androidx.appcompat.view.ActionMode
        public void n(int i10) {
            o(v.this.f1258a.getResources().getString(i10));
        }

        @Override // androidx.appcompat.view.ActionMode
        public void o(CharSequence charSequence) {
            v.this.f1264g.setSubtitle(charSequence);
        }

        @Override // androidx.appcompat.view.ActionMode
        public void q(int i10) {
            r(v.this.f1258a.getResources().getString(i10));
        }

        @Override // androidx.appcompat.view.ActionMode
        public void r(CharSequence charSequence) {
            v.this.f1264g.setTitle(charSequence);
        }

        @Override // androidx.appcompat.view.ActionMode
        public void s(boolean z10) {
            super.s(z10);
            v.this.f1264g.setTitleOptional(z10);
        }

        public boolean t() {
            this.f1288o.e0();
            try {
                return this.f1289p.b(this, this.f1288o);
            } finally {
                this.f1288o.d0();
            }
        }
    }

    public v(Activity activity, boolean z10) {
        this.f1260c = activity;
        View decorView = activity.getWindow().getDecorView();
        H(decorView);
        if (z10) {
            return;
        }
        this.f1265h = decorView.findViewById(16908290);
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
        if (this.f1279v) {
            this.f1279v = false;
            ActionBarOverlayLayout actionBarOverlayLayout = this.f1261d;
            if (actionBarOverlayLayout != null) {
                actionBarOverlayLayout.setShowingForActionMode(false);
            }
            P(false);
        }
    }

    private void H(View view) {
        boolean z10;
        boolean z11;
        ActionBarOverlayLayout actionBarOverlayLayout = (ActionBarOverlayLayout) view.findViewById(f.f.f22243q);
        this.f1261d = actionBarOverlayLayout;
        if (actionBarOverlayLayout != null) {
            actionBarOverlayLayout.setActionBarVisibilityCallback(this);
        }
        this.f1263f = E(view.findViewById(f.f.f22227a));
        this.f1264g = (ActionBarContextView) view.findViewById(f.f.f22233g);
        ActionBarContainer actionBarContainer = (ActionBarContainer) view.findViewById(f.f.f22229c);
        this.f1262e = actionBarContainer;
        z zVar = this.f1263f;
        if (zVar != null && this.f1264g != null && actionBarContainer != null) {
            this.f1258a = zVar.getContext();
            if ((this.f1263f.u() & 4) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                this.f1268k = true;
            }
            androidx.appcompat.view.a b10 = androidx.appcompat.view.a.b(this.f1258a);
            if (!b10.a() && !z10) {
                z11 = false;
            } else {
                z11 = true;
            }
            M(z11);
            K(b10.e());
            TypedArray obtainStyledAttributes = this.f1258a.obtainStyledAttributes(null, f.j.f22291a, f.a.f22155c, 0);
            if (obtainStyledAttributes.getBoolean(f.j.f22341k, false)) {
                L(true);
            }
            int dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(f.j.f22331i, 0);
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
        this.f1274q = z10;
        if (!z10) {
            this.f1263f.r(null);
            this.f1262e.setTabContainer(null);
        } else {
            this.f1262e.setTabContainer(null);
            this.f1263f.r(null);
        }
        boolean z13 = false;
        if (F() == 2) {
            z11 = true;
        } else {
            z11 = false;
        }
        z zVar = this.f1263f;
        if (!this.f1274q && z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        zVar.p(z12);
        ActionBarOverlayLayout actionBarOverlayLayout = this.f1261d;
        if (!this.f1274q && z11) {
            z13 = true;
        }
        actionBarOverlayLayout.setHasNonEmbeddedTabs(z13);
    }

    private boolean N() {
        return this.f1262e.isLaidOut();
    }

    private void O() {
        if (!this.f1279v) {
            this.f1279v = true;
            ActionBarOverlayLayout actionBarOverlayLayout = this.f1261d;
            if (actionBarOverlayLayout != null) {
                actionBarOverlayLayout.setShowingForActionMode(true);
            }
            P(false);
        }
    }

    private void P(boolean z10) {
        if (A(this.f1277t, this.f1278u, this.f1279v)) {
            if (!this.f1280w) {
                this.f1280w = true;
                D(z10);
            }
        } else if (this.f1280w) {
            this.f1280w = false;
            C(z10);
        }
    }

    void B() {
        ActionMode.Callback callback = this.f1271n;
        if (callback != null) {
            callback.a(this.f1270m);
            this.f1270m = null;
            this.f1271n = null;
        }
    }

    public void C(boolean z10) {
        View view;
        int[] iArr;
        androidx.appcompat.view.f fVar = this.f1281x;
        if (fVar != null) {
            fVar.a();
        }
        if (this.f1275r == 0 && (this.f1282y || z10)) {
            this.f1262e.setAlpha(1.0f);
            this.f1262e.setTransitioning(true);
            androidx.appcompat.view.f fVar2 = new androidx.appcompat.view.f();
            float f10 = -this.f1262e.getHeight();
            if (z10) {
                this.f1262e.getLocationInWindow(new int[]{0, 0});
                f10 -= iArr[1];
            }
            r0 l10 = h0.e(this.f1262e).l(f10);
            l10.j(this.C);
            fVar2.c(l10);
            if (this.f1276s && (view = this.f1265h) != null) {
                fVar2.c(h0.e(view).l(f10));
            }
            fVar2.f(D);
            fVar2.e(250L);
            fVar2.g(this.A);
            this.f1281x = fVar2;
            fVar2.h();
            return;
        }
        this.A.b(null);
    }

    public void D(boolean z10) {
        View view;
        View view2;
        int[] iArr;
        androidx.appcompat.view.f fVar = this.f1281x;
        if (fVar != null) {
            fVar.a();
        }
        this.f1262e.setVisibility(0);
        if (this.f1275r == 0 && (this.f1282y || z10)) {
            this.f1262e.setTranslationY(0.0f);
            float f10 = -this.f1262e.getHeight();
            if (z10) {
                this.f1262e.getLocationInWindow(new int[]{0, 0});
                f10 -= iArr[1];
            }
            this.f1262e.setTranslationY(f10);
            androidx.appcompat.view.f fVar2 = new androidx.appcompat.view.f();
            r0 l10 = h0.e(this.f1262e).l(0.0f);
            l10.j(this.C);
            fVar2.c(l10);
            if (this.f1276s && (view2 = this.f1265h) != null) {
                view2.setTranslationY(f10);
                fVar2.c(h0.e(this.f1265h).l(0.0f));
            }
            fVar2.f(E);
            fVar2.e(250L);
            fVar2.g(this.B);
            this.f1281x = fVar2;
            fVar2.h();
        } else {
            this.f1262e.setAlpha(1.0f);
            this.f1262e.setTranslationY(0.0f);
            if (this.f1276s && (view = this.f1265h) != null) {
                view.setTranslationY(0.0f);
            }
            this.B.b(null);
        }
        ActionBarOverlayLayout actionBarOverlayLayout = this.f1261d;
        if (actionBarOverlayLayout != null) {
            h0.k0(actionBarOverlayLayout);
        }
    }

    public int F() {
        return this.f1263f.k();
    }

    public void I(int i10, int i11) {
        int u10 = this.f1263f.u();
        if ((i11 & 4) != 0) {
            this.f1268k = true;
        }
        this.f1263f.i((i10 & i11) | ((~i11) & u10));
    }

    public void J(float f10) {
        h0.v0(this.f1262e, f10);
    }

    public void L(boolean z10) {
        if (z10 && !this.f1261d.r()) {
            throw new IllegalStateException("Action bar must be in overlay mode (Window.FEATURE_OVERLAY_ACTION_BAR) to enable hide on content scroll");
        }
        this.f1283z = z10;
        this.f1261d.setHideOnContentScrollEnabled(z10);
    }

    public void M(boolean z10) {
        this.f1263f.n(z10);
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void a() {
        if (this.f1278u) {
            this.f1278u = false;
            P(true);
        }
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void b() {
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void c(boolean z10) {
        this.f1276s = z10;
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void d() {
        if (!this.f1278u) {
            this.f1278u = true;
            P(true);
        }
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void e() {
        androidx.appcompat.view.f fVar = this.f1281x;
        if (fVar != null) {
            fVar.a();
            this.f1281x = null;
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean g() {
        z zVar = this.f1263f;
        if (zVar != null && zVar.h()) {
            this.f1263f.collapseActionView();
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void h(boolean z10) {
        if (z10 != this.f1272o) {
            this.f1272o = z10;
            if (this.f1273p.size() <= 0) {
                return;
            }
            android.support.v4.media.session.b.a(this.f1273p.get(0));
            throw null;
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public int i() {
        return this.f1263f.u();
    }

    @Override // androidx.appcompat.app.ActionBar
    public Context j() {
        if (this.f1259b == null) {
            TypedValue typedValue = new TypedValue();
            this.f1258a.getTheme().resolveAttribute(f.a.f22157e, typedValue, true);
            int i10 = typedValue.resourceId;
            if (i10 != 0) {
                this.f1259b = new ContextThemeWrapper(this.f1258a, i10);
            } else {
                this.f1259b = this.f1258a;
            }
        }
        return this.f1259b;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void k() {
        if (!this.f1277t) {
            this.f1277t = true;
            P(false);
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public void m(Configuration configuration) {
        K(androidx.appcompat.view.a.b(this.f1258a).e());
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean o(int i10, KeyEvent keyEvent) {
        Menu e10;
        int i11;
        d dVar = this.f1269l;
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
        this.f1275r = i10;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void r(boolean z10) {
        if (!this.f1268k) {
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
        this.f1263f.w(drawable);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void v(boolean z10) {
        androidx.appcompat.view.f fVar;
        this.f1282y = z10;
        if (!z10 && (fVar = this.f1281x) != null) {
            fVar.a();
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public void w(CharSequence charSequence) {
        this.f1263f.setTitle(charSequence);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void x(CharSequence charSequence) {
        this.f1263f.setWindowTitle(charSequence);
    }

    @Override // androidx.appcompat.app.ActionBar
    public ActionMode y(ActionMode.Callback callback) {
        d dVar = this.f1269l;
        if (dVar != null) {
            dVar.c();
        }
        this.f1261d.setHideOnContentScrollEnabled(false);
        this.f1264g.k();
        d dVar2 = new d(this.f1264g.getContext(), callback);
        if (dVar2.t()) {
            this.f1269l = dVar2;
            dVar2.k();
            this.f1264g.h(dVar2);
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
                f10 = this.f1263f.l(4, 100L);
                l10 = this.f1264g.f(0, 200L);
            } else {
                l10 = this.f1263f.l(0, 200L);
                f10 = this.f1264g.f(8, 100L);
            }
            androidx.appcompat.view.f fVar = new androidx.appcompat.view.f();
            fVar.d(f10, l10);
            fVar.h();
        } else if (z10) {
            this.f1263f.setVisibility(4);
            this.f1264g.setVisibility(0);
        } else {
            this.f1263f.setVisibility(0);
            this.f1264g.setVisibility(8);
        }
    }

    public v(Dialog dialog) {
        H(dialog.getWindow().getDecorView());
    }
}
