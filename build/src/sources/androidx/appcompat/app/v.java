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
import androidx.core.view.i0;
import androidx.core.view.s0;
import androidx.core.view.t0;
import androidx.core.view.u0;
import androidx.core.view.v0;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class v extends ActionBar implements ActionBarOverlayLayout.d {
    private static final Interpolator D = new AccelerateInterpolator();
    private static final Interpolator E = new DecelerateInterpolator();

    /* renamed from: a  reason: collision with root package name */
    Context f1259a;

    /* renamed from: b  reason: collision with root package name */
    private Context f1260b;

    /* renamed from: c  reason: collision with root package name */
    private Activity f1261c;

    /* renamed from: d  reason: collision with root package name */
    ActionBarOverlayLayout f1262d;

    /* renamed from: e  reason: collision with root package name */
    ActionBarContainer f1263e;

    /* renamed from: f  reason: collision with root package name */
    z f1264f;

    /* renamed from: g  reason: collision with root package name */
    ActionBarContextView f1265g;

    /* renamed from: h  reason: collision with root package name */
    View f1266h;

    /* renamed from: k  reason: collision with root package name */
    private boolean f1269k;

    /* renamed from: l  reason: collision with root package name */
    d f1270l;

    /* renamed from: m  reason: collision with root package name */
    ActionMode f1271m;

    /* renamed from: n  reason: collision with root package name */
    ActionMode.Callback f1272n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f1273o;

    /* renamed from: q  reason: collision with root package name */
    private boolean f1275q;

    /* renamed from: t  reason: collision with root package name */
    boolean f1278t;

    /* renamed from: u  reason: collision with root package name */
    boolean f1279u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f1280v;

    /* renamed from: x  reason: collision with root package name */
    androidx.appcompat.view.f f1282x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f1283y;

    /* renamed from: z  reason: collision with root package name */
    boolean f1284z;

    /* renamed from: i  reason: collision with root package name */
    private ArrayList f1267i = new ArrayList();

    /* renamed from: j  reason: collision with root package name */
    private int f1268j = -1;

    /* renamed from: p  reason: collision with root package name */
    private ArrayList f1274p = new ArrayList();

    /* renamed from: r  reason: collision with root package name */
    private int f1276r = 0;

    /* renamed from: s  reason: collision with root package name */
    boolean f1277s = true;

    /* renamed from: w  reason: collision with root package name */
    private boolean f1281w = true;
    final t0 A = new a();
    final t0 B = new b();
    final v0 C = new c();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends u0 {
        a() {
        }

        @Override // androidx.core.view.t0
        public void b(View view) {
            View view2;
            v vVar = v.this;
            if (vVar.f1277s && (view2 = vVar.f1266h) != null) {
                view2.setTranslationY(0.0f);
                v.this.f1263e.setTranslationY(0.0f);
            }
            v.this.f1263e.setVisibility(8);
            v.this.f1263e.setTransitioning(false);
            v vVar2 = v.this;
            vVar2.f1282x = null;
            vVar2.B();
            ActionBarOverlayLayout actionBarOverlayLayout = v.this.f1262d;
            if (actionBarOverlayLayout != null) {
                i0.h0(actionBarOverlayLayout);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends u0 {
        b() {
        }

        @Override // androidx.core.view.t0
        public void b(View view) {
            v vVar = v.this;
            vVar.f1282x = null;
            vVar.f1263e.requestLayout();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements v0 {
        c() {
        }

        @Override // androidx.core.view.v0
        public void a(View view) {
            ((View) v.this.f1263e.getParent()).invalidate();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends ActionMode implements e.a {

        /* renamed from: i  reason: collision with root package name */
        private final Context f1288i;

        /* renamed from: o  reason: collision with root package name */
        private final androidx.appcompat.view.menu.e f1289o;

        /* renamed from: p  reason: collision with root package name */
        private ActionMode.Callback f1290p;

        /* renamed from: q  reason: collision with root package name */
        private WeakReference f1291q;

        public d(Context context, ActionMode.Callback callback) {
            this.f1288i = context;
            this.f1290p = callback;
            androidx.appcompat.view.menu.e X = new androidx.appcompat.view.menu.e(context).X(1);
            this.f1289o = X;
            X.W(this);
        }

        @Override // androidx.appcompat.view.menu.e.a
        public boolean a(androidx.appcompat.view.menu.e eVar, MenuItem menuItem) {
            ActionMode.Callback callback = this.f1290p;
            if (callback != null) {
                return callback.c(this, menuItem);
            }
            return false;
        }

        @Override // androidx.appcompat.view.menu.e.a
        public void b(androidx.appcompat.view.menu.e eVar) {
            if (this.f1290p == null) {
                return;
            }
            k();
            v.this.f1265g.l();
        }

        @Override // androidx.appcompat.view.ActionMode
        public void c() {
            v vVar = v.this;
            if (vVar.f1270l != this) {
                return;
            }
            if (!v.A(vVar.f1278t, vVar.f1279u, false)) {
                v vVar2 = v.this;
                vVar2.f1271m = this;
                vVar2.f1272n = this.f1290p;
            } else {
                this.f1290p.a(this);
            }
            this.f1290p = null;
            v.this.z(false);
            v.this.f1265g.g();
            v vVar3 = v.this;
            vVar3.f1262d.setHideOnContentScrollEnabled(vVar3.f1284z);
            v.this.f1270l = null;
        }

        @Override // androidx.appcompat.view.ActionMode
        public View d() {
            WeakReference weakReference = this.f1291q;
            if (weakReference != null) {
                return (View) weakReference.get();
            }
            return null;
        }

        @Override // androidx.appcompat.view.ActionMode
        public Menu e() {
            return this.f1289o;
        }

        @Override // androidx.appcompat.view.ActionMode
        public MenuInflater f() {
            return new androidx.appcompat.view.e(this.f1288i);
        }

        @Override // androidx.appcompat.view.ActionMode
        public CharSequence g() {
            return v.this.f1265g.getSubtitle();
        }

        @Override // androidx.appcompat.view.ActionMode
        public CharSequence i() {
            return v.this.f1265g.getTitle();
        }

        @Override // androidx.appcompat.view.ActionMode
        public void k() {
            if (v.this.f1270l != this) {
                return;
            }
            this.f1289o.i0();
            try {
                this.f1290p.d(this, this.f1289o);
            } finally {
                this.f1289o.h0();
            }
        }

        @Override // androidx.appcompat.view.ActionMode
        public boolean l() {
            return v.this.f1265g.j();
        }

        @Override // androidx.appcompat.view.ActionMode
        public void m(View view) {
            v.this.f1265g.setCustomView(view);
            this.f1291q = new WeakReference(view);
        }

        @Override // androidx.appcompat.view.ActionMode
        public void n(int i10) {
            o(v.this.f1259a.getResources().getString(i10));
        }

        @Override // androidx.appcompat.view.ActionMode
        public void o(CharSequence charSequence) {
            v.this.f1265g.setSubtitle(charSequence);
        }

        @Override // androidx.appcompat.view.ActionMode
        public void q(int i10) {
            r(v.this.f1259a.getResources().getString(i10));
        }

        @Override // androidx.appcompat.view.ActionMode
        public void r(CharSequence charSequence) {
            v.this.f1265g.setTitle(charSequence);
        }

        @Override // androidx.appcompat.view.ActionMode
        public void s(boolean z10) {
            super.s(z10);
            v.this.f1265g.setTitleOptional(z10);
        }

        public boolean t() {
            this.f1289o.i0();
            try {
                return this.f1290p.b(this, this.f1289o);
            } finally {
                this.f1289o.h0();
            }
        }
    }

    public v(Activity activity, boolean z10) {
        this.f1261c = activity;
        View decorView = activity.getWindow().getDecorView();
        H(decorView);
        if (z10) {
            return;
        }
        this.f1266h = decorView.findViewById(16908290);
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
        if (this.f1280v) {
            this.f1280v = false;
            ActionBarOverlayLayout actionBarOverlayLayout = this.f1262d;
            if (actionBarOverlayLayout != null) {
                actionBarOverlayLayout.setShowingForActionMode(false);
            }
            P(false);
        }
    }

    private void H(View view) {
        boolean z10;
        boolean z11;
        ActionBarOverlayLayout actionBarOverlayLayout = (ActionBarOverlayLayout) view.findViewById(f.f.f23366q);
        this.f1262d = actionBarOverlayLayout;
        if (actionBarOverlayLayout != null) {
            actionBarOverlayLayout.setActionBarVisibilityCallback(this);
        }
        this.f1264f = E(view.findViewById(f.f.f23350a));
        this.f1265g = (ActionBarContextView) view.findViewById(f.f.f23356g);
        ActionBarContainer actionBarContainer = (ActionBarContainer) view.findViewById(f.f.f23352c);
        this.f1263e = actionBarContainer;
        z zVar = this.f1264f;
        if (zVar != null && this.f1265g != null && actionBarContainer != null) {
            this.f1259a = zVar.getContext();
            if ((this.f1264f.u() & 4) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                this.f1269k = true;
            }
            androidx.appcompat.view.a b10 = androidx.appcompat.view.a.b(this.f1259a);
            if (!b10.a() && !z10) {
                z11 = false;
            } else {
                z11 = true;
            }
            M(z11);
            K(b10.e());
            TypedArray obtainStyledAttributes = this.f1259a.obtainStyledAttributes(null, f.j.f23416a, f.a.f23278c, 0);
            if (obtainStyledAttributes.getBoolean(f.j.f23466k, false)) {
                L(true);
            }
            int dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(f.j.f23456i, 0);
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
        this.f1275q = z10;
        if (!z10) {
            this.f1264f.r(null);
            this.f1263e.setTabContainer(null);
        } else {
            this.f1263e.setTabContainer(null);
            this.f1264f.r(null);
        }
        boolean z13 = false;
        if (F() == 2) {
            z11 = true;
        } else {
            z11 = false;
        }
        z zVar = this.f1264f;
        if (!this.f1275q && z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        zVar.p(z12);
        ActionBarOverlayLayout actionBarOverlayLayout = this.f1262d;
        if (!this.f1275q && z11) {
            z13 = true;
        }
        actionBarOverlayLayout.setHasNonEmbeddedTabs(z13);
    }

    private boolean N() {
        return this.f1263e.isLaidOut();
    }

    private void O() {
        if (!this.f1280v) {
            this.f1280v = true;
            ActionBarOverlayLayout actionBarOverlayLayout = this.f1262d;
            if (actionBarOverlayLayout != null) {
                actionBarOverlayLayout.setShowingForActionMode(true);
            }
            P(false);
        }
    }

    private void P(boolean z10) {
        if (A(this.f1278t, this.f1279u, this.f1280v)) {
            if (!this.f1281w) {
                this.f1281w = true;
                D(z10);
            }
        } else if (this.f1281w) {
            this.f1281w = false;
            C(z10);
        }
    }

    void B() {
        ActionMode.Callback callback = this.f1272n;
        if (callback != null) {
            callback.a(this.f1271m);
            this.f1271m = null;
            this.f1272n = null;
        }
    }

    public void C(boolean z10) {
        View view;
        int[] iArr;
        androidx.appcompat.view.f fVar = this.f1282x;
        if (fVar != null) {
            fVar.a();
        }
        if (this.f1276r == 0 && (this.f1283y || z10)) {
            this.f1263e.setAlpha(1.0f);
            this.f1263e.setTransitioning(true);
            androidx.appcompat.view.f fVar2 = new androidx.appcompat.view.f();
            float f10 = -this.f1263e.getHeight();
            if (z10) {
                this.f1263e.getLocationInWindow(new int[]{0, 0});
                f10 -= iArr[1];
            }
            s0 l10 = i0.e(this.f1263e).l(f10);
            l10.j(this.C);
            fVar2.c(l10);
            if (this.f1277s && (view = this.f1266h) != null) {
                fVar2.c(i0.e(view).l(f10));
            }
            fVar2.f(D);
            fVar2.e(250L);
            fVar2.g(this.A);
            this.f1282x = fVar2;
            fVar2.h();
            return;
        }
        this.A.b(null);
    }

    public void D(boolean z10) {
        View view;
        View view2;
        int[] iArr;
        androidx.appcompat.view.f fVar = this.f1282x;
        if (fVar != null) {
            fVar.a();
        }
        this.f1263e.setVisibility(0);
        if (this.f1276r == 0 && (this.f1283y || z10)) {
            this.f1263e.setTranslationY(0.0f);
            float f10 = -this.f1263e.getHeight();
            if (z10) {
                this.f1263e.getLocationInWindow(new int[]{0, 0});
                f10 -= iArr[1];
            }
            this.f1263e.setTranslationY(f10);
            androidx.appcompat.view.f fVar2 = new androidx.appcompat.view.f();
            s0 l10 = i0.e(this.f1263e).l(0.0f);
            l10.j(this.C);
            fVar2.c(l10);
            if (this.f1277s && (view2 = this.f1266h) != null) {
                view2.setTranslationY(f10);
                fVar2.c(i0.e(this.f1266h).l(0.0f));
            }
            fVar2.f(E);
            fVar2.e(250L);
            fVar2.g(this.B);
            this.f1282x = fVar2;
            fVar2.h();
        } else {
            this.f1263e.setAlpha(1.0f);
            this.f1263e.setTranslationY(0.0f);
            if (this.f1277s && (view = this.f1266h) != null) {
                view.setTranslationY(0.0f);
            }
            this.B.b(null);
        }
        ActionBarOverlayLayout actionBarOverlayLayout = this.f1262d;
        if (actionBarOverlayLayout != null) {
            i0.h0(actionBarOverlayLayout);
        }
    }

    public int F() {
        return this.f1264f.k();
    }

    public void I(int i10, int i11) {
        int u10 = this.f1264f.u();
        if ((i11 & 4) != 0) {
            this.f1269k = true;
        }
        this.f1264f.i((i10 & i11) | ((~i11) & u10));
    }

    public void J(float f10) {
        i0.r0(this.f1263e, f10);
    }

    public void L(boolean z10) {
        if (z10 && !this.f1262d.r()) {
            throw new IllegalStateException("Action bar must be in overlay mode (Window.FEATURE_OVERLAY_ACTION_BAR) to enable hide on content scroll");
        }
        this.f1284z = z10;
        this.f1262d.setHideOnContentScrollEnabled(z10);
    }

    public void M(boolean z10) {
        this.f1264f.n(z10);
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void a() {
        if (this.f1279u) {
            this.f1279u = false;
            P(true);
        }
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void b() {
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void c(boolean z10) {
        this.f1277s = z10;
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void d() {
        if (!this.f1279u) {
            this.f1279u = true;
            P(true);
        }
    }

    @Override // androidx.appcompat.widget.ActionBarOverlayLayout.d
    public void e() {
        androidx.appcompat.view.f fVar = this.f1282x;
        if (fVar != null) {
            fVar.a();
            this.f1282x = null;
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean g() {
        z zVar = this.f1264f;
        if (zVar != null && zVar.h()) {
            this.f1264f.collapseActionView();
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void h(boolean z10) {
        if (z10 != this.f1273o) {
            this.f1273o = z10;
            if (this.f1274p.size() <= 0) {
                return;
            }
            android.support.v4.media.session.b.a(this.f1274p.get(0));
            throw null;
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public int i() {
        return this.f1264f.u();
    }

    @Override // androidx.appcompat.app.ActionBar
    public Context j() {
        if (this.f1260b == null) {
            TypedValue typedValue = new TypedValue();
            this.f1259a.getTheme().resolveAttribute(f.a.f23280e, typedValue, true);
            int i10 = typedValue.resourceId;
            if (i10 != 0) {
                this.f1260b = new ContextThemeWrapper(this.f1259a, i10);
            } else {
                this.f1260b = this.f1259a;
            }
        }
        return this.f1260b;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void k() {
        if (!this.f1278t) {
            this.f1278t = true;
            P(false);
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public void m(Configuration configuration) {
        K(androidx.appcompat.view.a.b(this.f1259a).e());
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean o(int i10, KeyEvent keyEvent) {
        Menu e10;
        int i11;
        d dVar = this.f1270l;
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
        this.f1276r = i10;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void r(boolean z10) {
        if (!this.f1269k) {
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
        this.f1264f.w(drawable);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void v(boolean z10) {
        androidx.appcompat.view.f fVar;
        this.f1283y = z10;
        if (!z10 && (fVar = this.f1282x) != null) {
            fVar.a();
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public void w(CharSequence charSequence) {
        this.f1264f.setTitle(charSequence);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void x(CharSequence charSequence) {
        this.f1264f.setWindowTitle(charSequence);
    }

    @Override // androidx.appcompat.app.ActionBar
    public ActionMode y(ActionMode.Callback callback) {
        d dVar = this.f1270l;
        if (dVar != null) {
            dVar.c();
        }
        this.f1262d.setHideOnContentScrollEnabled(false);
        this.f1265g.k();
        d dVar2 = new d(this.f1265g.getContext(), callback);
        if (dVar2.t()) {
            this.f1270l = dVar2;
            dVar2.k();
            this.f1265g.h(dVar2);
            z(true);
            return dVar2;
        }
        return null;
    }

    public void z(boolean z10) {
        s0 l10;
        s0 f10;
        if (z10) {
            O();
        } else {
            G();
        }
        if (N()) {
            if (z10) {
                f10 = this.f1264f.l(4, 100L);
                l10 = this.f1265g.f(0, 200L);
            } else {
                l10 = this.f1264f.l(0, 200L);
                f10 = this.f1265g.f(8, 100L);
            }
            androidx.appcompat.view.f fVar = new androidx.appcompat.view.f();
            fVar.d(f10, l10);
            fVar.h();
        } else if (z10) {
            this.f1264f.setVisibility(4);
            this.f1265g.setVisibility(0);
        } else {
            this.f1264f.setVisibility(0);
            this.f1265g.setVisibility(8);
        }
    }

    public v(Dialog dialog) {
        H(dialog.getWindow().getDecorView());
    }
}
