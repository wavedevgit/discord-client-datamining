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
    private static final int G = f.g.f22984m;
    ViewTreeObserver A;
    private boolean B;
    private boolean C;
    private int D;
    private boolean F;

    /* renamed from: e  reason: collision with root package name */
    private final Context f1373e;

    /* renamed from: i  reason: collision with root package name */
    private final e f1374i;

    /* renamed from: o  reason: collision with root package name */
    private final d f1375o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f1376p;

    /* renamed from: q  reason: collision with root package name */
    private final int f1377q;

    /* renamed from: r  reason: collision with root package name */
    private final int f1378r;

    /* renamed from: s  reason: collision with root package name */
    private final int f1379s;

    /* renamed from: t  reason: collision with root package name */
    final l0 f1380t;

    /* renamed from: w  reason: collision with root package name */
    private PopupWindow.OnDismissListener f1383w;

    /* renamed from: x  reason: collision with root package name */
    private View f1384x;

    /* renamed from: y  reason: collision with root package name */
    View f1385y;

    /* renamed from: z  reason: collision with root package name */
    private j.a f1386z;

    /* renamed from: u  reason: collision with root package name */
    final ViewTreeObserver.OnGlobalLayoutListener f1381u = new a();

    /* renamed from: v  reason: collision with root package name */
    private final View.OnAttachStateChangeListener f1382v = new b();
    private int E = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements ViewTreeObserver.OnGlobalLayoutListener {
        a() {
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            if (l.this.isShowing() && !l.this.f1380t.z()) {
                View view = l.this.f1385y;
                if (view != null && view.isShown()) {
                    l.this.f1380t.show();
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
                lVar.A.removeGlobalOnLayoutListener(lVar.f1381u);
            }
            view.removeOnAttachStateChangeListener(this);
        }
    }

    public l(Context context, e eVar, View view, int i10, int i11, boolean z10) {
        this.f1373e = context;
        this.f1374i = eVar;
        this.f1376p = z10;
        this.f1375o = new d(eVar, LayoutInflater.from(context), z10, G);
        this.f1378r = i10;
        this.f1379s = i11;
        Resources resources = context.getResources();
        this.f1377q = Math.max(resources.getDisplayMetrics().widthPixels / 2, resources.getDimensionPixelSize(f.d.f22908b));
        this.f1384x = view;
        this.f1380t = new l0(context, null, i10, i11);
        eVar.c(this, context);
    }

    private boolean x() {
        View view;
        boolean z10;
        if (isShowing()) {
            return true;
        }
        if (this.B || (view = this.f1384x) == null) {
            return false;
        }
        this.f1385y = view;
        this.f1380t.I(this);
        this.f1380t.J(this);
        this.f1380t.H(true);
        View view2 = this.f1385y;
        if (this.A == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ViewTreeObserver viewTreeObserver = view2.getViewTreeObserver();
        this.A = viewTreeObserver;
        if (z10) {
            viewTreeObserver.addOnGlobalLayoutListener(this.f1381u);
        }
        view2.addOnAttachStateChangeListener(this.f1382v);
        this.f1380t.B(view2);
        this.f1380t.E(this.E);
        if (!this.C) {
            this.D = h.l(this.f1375o, null, this.f1373e, this.f1377q);
            this.C = true;
        }
        this.f1380t.D(this.D);
        this.f1380t.G(2);
        this.f1380t.F(k());
        this.f1380t.show();
        ListView n10 = this.f1380t.n();
        n10.setOnKeyListener(this);
        if (this.F && this.f1374i.x() != null) {
            FrameLayout frameLayout = (FrameLayout) LayoutInflater.from(this.f1373e).inflate(f.g.f22983l, (ViewGroup) n10, false);
            TextView textView = (TextView) frameLayout.findViewById(16908310);
            if (textView != null) {
                textView.setText(this.f1374i.x());
            }
            frameLayout.setEnabled(false);
            n10.addHeaderView(frameLayout, null, false);
        }
        this.f1380t.l(this.f1375o);
        this.f1380t.show();
        return true;
    }

    @Override // androidx.appcompat.view.menu.j
    public void a(e eVar, boolean z10) {
        if (eVar == this.f1374i) {
            dismiss();
            j.a aVar = this.f1386z;
            if (aVar != null) {
                aVar.a(eVar, z10);
            }
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public void c(j.a aVar) {
        this.f1386z = aVar;
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean d(m mVar) {
        if (mVar.hasVisibleItems()) {
            i iVar = new i(this.f1373e, mVar, this.f1385y, this.f1376p, this.f1378r, this.f1379s);
            iVar.j(this.f1386z);
            iVar.g(h.v(mVar));
            iVar.i(this.f1383w);
            this.f1383w = null;
            this.f1374i.e(false);
            int c10 = this.f1380t.c();
            int k10 = this.f1380t.k();
            if ((Gravity.getAbsoluteGravity(this.E, this.f1384x.getLayoutDirection()) & 7) == 5) {
                c10 += this.f1384x.getWidth();
            }
            if (iVar.n(c10, k10)) {
                j.a aVar = this.f1386z;
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
            this.f1380t.dismiss();
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public void e(boolean z10) {
        this.C = false;
        d dVar = this.f1375o;
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
        if (!this.B && this.f1380t.isShowing()) {
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.view.menu.h
    public void m(View view) {
        this.f1384x = view;
    }

    @Override // k.e
    public ListView n() {
        return this.f1380t.n();
    }

    @Override // android.widget.PopupWindow.OnDismissListener
    public void onDismiss() {
        this.B = true;
        this.f1374i.close();
        ViewTreeObserver viewTreeObserver = this.A;
        if (viewTreeObserver != null) {
            if (!viewTreeObserver.isAlive()) {
                this.A = this.f1385y.getViewTreeObserver();
            }
            this.A.removeGlobalOnLayoutListener(this.f1381u);
            this.A = null;
        }
        this.f1385y.removeOnAttachStateChangeListener(this.f1382v);
        PopupWindow.OnDismissListener onDismissListener = this.f1383w;
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
        this.f1375o.d(z10);
    }

    @Override // androidx.appcompat.view.menu.h
    public void q(int i10) {
        this.E = i10;
    }

    @Override // androidx.appcompat.view.menu.h
    public void r(int i10) {
        this.f1380t.d(i10);
    }

    @Override // androidx.appcompat.view.menu.h
    public void s(PopupWindow.OnDismissListener onDismissListener) {
        this.f1383w = onDismissListener;
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
        this.f1380t.h(i10);
    }
}
