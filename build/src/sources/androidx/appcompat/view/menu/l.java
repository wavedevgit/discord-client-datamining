package androidx.appcompat.view.menu;

import android.content.Context;
import android.content.res.Resources;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import android.widget.AdapterView;
import android.widget.FrameLayout;
import android.widget.ListView;
import android.widget.PopupWindow;
import android.widget.TextView;
import androidx.appcompat.view.menu.j;
import androidx.appcompat.widget.l0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l extends h implements PopupWindow.OnDismissListener, AdapterView.OnItemClickListener, j, View.OnKeyListener {
    private static final int G = f.g.f23392m;
    ViewTreeObserver A;
    private boolean B;
    private boolean C;
    private int D;
    private boolean F;

    /* renamed from: e  reason: collision with root package name */
    private final Context f1404e;

    /* renamed from: i  reason: collision with root package name */
    private final e f1405i;

    /* renamed from: o  reason: collision with root package name */
    private final d f1406o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f1407p;

    /* renamed from: q  reason: collision with root package name */
    private final int f1408q;

    /* renamed from: r  reason: collision with root package name */
    private final int f1409r;

    /* renamed from: s  reason: collision with root package name */
    private final int f1410s;

    /* renamed from: t  reason: collision with root package name */
    final l0 f1411t;

    /* renamed from: w  reason: collision with root package name */
    private PopupWindow.OnDismissListener f1414w;

    /* renamed from: x  reason: collision with root package name */
    private View f1415x;

    /* renamed from: y  reason: collision with root package name */
    View f1416y;

    /* renamed from: z  reason: collision with root package name */
    private j.a f1417z;

    /* renamed from: u  reason: collision with root package name */
    final ViewTreeObserver.OnGlobalLayoutListener f1412u = new a();

    /* renamed from: v  reason: collision with root package name */
    private final View.OnAttachStateChangeListener f1413v = new b();
    private int E = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements ViewTreeObserver.OnGlobalLayoutListener {
        a() {
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            if (l.this.isShowing() && !l.this.f1411t.z()) {
                View view = l.this.f1416y;
                if (view != null && view.isShown()) {
                    l.this.f1411t.show();
                } else {
                    l.this.dismiss();
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements View.OnAttachStateChangeListener {
        b() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            ViewTreeObserver viewTreeObserver = l.this.A;
            if (viewTreeObserver != null) {
                if (!viewTreeObserver.isAlive()) {
                    l.this.A = view.getViewTreeObserver();
                }
                l lVar = l.this;
                lVar.A.removeGlobalOnLayoutListener(lVar.f1412u);
            }
            view.removeOnAttachStateChangeListener(this);
        }
    }

    public l(Context context, e eVar, View view, int i10, int i11, boolean z10) {
        this.f1404e = context;
        this.f1405i = eVar;
        this.f1407p = z10;
        this.f1406o = new d(eVar, LayoutInflater.from(context), z10, G);
        this.f1409r = i10;
        this.f1410s = i11;
        Resources resources = context.getResources();
        this.f1408q = Math.max(resources.getDisplayMetrics().widthPixels / 2, resources.getDimensionPixelSize(f.d.f23316b));
        this.f1415x = view;
        this.f1411t = new l0(context, null, i10, i11);
        eVar.c(this, context);
    }

    private boolean x() {
        View view;
        boolean z10;
        if (isShowing()) {
            return true;
        }
        if (this.B || (view = this.f1415x) == null) {
            return false;
        }
        this.f1416y = view;
        this.f1411t.I(this);
        this.f1411t.J(this);
        this.f1411t.H(true);
        View view2 = this.f1416y;
        if (this.A == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ViewTreeObserver viewTreeObserver = view2.getViewTreeObserver();
        this.A = viewTreeObserver;
        if (z10) {
            viewTreeObserver.addOnGlobalLayoutListener(this.f1412u);
        }
        view2.addOnAttachStateChangeListener(this.f1413v);
        this.f1411t.B(view2);
        this.f1411t.E(this.E);
        if (!this.C) {
            this.D = h.l(this.f1406o, null, this.f1404e, this.f1408q);
            this.C = true;
        }
        this.f1411t.D(this.D);
        this.f1411t.G(2);
        this.f1411t.F(k());
        this.f1411t.show();
        ListView n10 = this.f1411t.n();
        n10.setOnKeyListener(this);
        if (this.F && this.f1405i.x() != null) {
            FrameLayout frameLayout = (FrameLayout) LayoutInflater.from(this.f1404e).inflate(f.g.f23391l, (ViewGroup) n10, false);
            TextView textView = (TextView) frameLayout.findViewById(16908310);
            if (textView != null) {
                textView.setText(this.f1405i.x());
            }
            frameLayout.setEnabled(false);
            n10.addHeaderView(frameLayout, null, false);
        }
        this.f1411t.l(this.f1406o);
        this.f1411t.show();
        return true;
    }

    @Override // androidx.appcompat.view.menu.j
    public void a(e eVar, boolean z10) {
        if (eVar == this.f1405i) {
            dismiss();
            j.a aVar = this.f1417z;
            if (aVar != null) {
                aVar.a(eVar, z10);
            }
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public void c(j.a aVar) {
        this.f1417z = aVar;
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean d(m mVar) {
        if (mVar.hasVisibleItems()) {
            i iVar = new i(this.f1404e, mVar, this.f1416y, this.f1407p, this.f1409r, this.f1410s);
            iVar.j(this.f1417z);
            iVar.g(h.v(mVar));
            iVar.i(this.f1414w);
            this.f1414w = null;
            this.f1405i.e(false);
            int c10 = this.f1411t.c();
            int k10 = this.f1411t.k();
            if ((Gravity.getAbsoluteGravity(this.E, this.f1415x.getLayoutDirection()) & 7) == 5) {
                c10 += this.f1415x.getWidth();
            }
            if (iVar.n(c10, k10)) {
                j.a aVar = this.f1417z;
                if (aVar != null) {
                    aVar.b(mVar);
                    return true;
                }
                return true;
            }
        }
        return false;
    }

    @Override // k.e
    public void dismiss() {
        if (isShowing()) {
            this.f1411t.dismiss();
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public void e(boolean z10) {
        this.C = false;
        d dVar = this.f1406o;
        if (dVar != null) {
            dVar.notifyDataSetChanged();
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean f() {
        return false;
    }

    @Override // androidx.appcompat.view.menu.h
    public void i(e eVar) {
    }

    @Override // k.e
    public boolean isShowing() {
        if (!this.B && this.f1411t.isShowing()) {
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.view.menu.h
    public void m(View view) {
        this.f1415x = view;
    }

    @Override // k.e
    public ListView n() {
        return this.f1411t.n();
    }

    @Override // android.widget.PopupWindow.OnDismissListener
    public void onDismiss() {
        this.B = true;
        this.f1405i.close();
        ViewTreeObserver viewTreeObserver = this.A;
        if (viewTreeObserver != null) {
            if (!viewTreeObserver.isAlive()) {
                this.A = this.f1416y.getViewTreeObserver();
            }
            this.A.removeGlobalOnLayoutListener(this.f1412u);
            this.A = null;
        }
        this.f1416y.removeOnAttachStateChangeListener(this.f1413v);
        PopupWindow.OnDismissListener onDismissListener = this.f1414w;
        if (onDismissListener != null) {
            onDismissListener.onDismiss();
        }
    }

    @Override // android.view.View.OnKeyListener
    public boolean onKey(View view, int i10, KeyEvent keyEvent) {
        if (keyEvent.getAction() == 1 && i10 == 82) {
            dismiss();
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.view.menu.h
    public void p(boolean z10) {
        this.f1406o.d(z10);
    }

    @Override // androidx.appcompat.view.menu.h
    public void q(int i10) {
        this.E = i10;
    }

    @Override // androidx.appcompat.view.menu.h
    public void r(int i10) {
        this.f1411t.d(i10);
    }

    @Override // androidx.appcompat.view.menu.h
    public void s(PopupWindow.OnDismissListener onDismissListener) {
        this.f1414w = onDismissListener;
    }

    @Override // k.e
    public void show() {
        if (x()) {
            return;
        }
        throw new IllegalStateException("StandardMenuPopup cannot be used without an anchor");
    }

    @Override // androidx.appcompat.view.menu.h
    public void t(boolean z10) {
        this.F = z10;
    }

    @Override // androidx.appcompat.view.menu.h
    public void u(int i10) {
        this.f1411t.h(i10);
    }
}
