package androidx.appcompat.widget;

import android.text.TextUtils;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.accessibility.AccessibilityManager;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d1 implements View.OnLongClickListener, View.OnHoverListener, View.OnAttachStateChangeListener {

    /* renamed from: v  reason: collision with root package name */
    private static d1 f1751v;

    /* renamed from: w  reason: collision with root package name */
    private static d1 f1752w;

    /* renamed from: d  reason: collision with root package name */
    private final View f1753d;

    /* renamed from: e  reason: collision with root package name */
    private final CharSequence f1754e;

    /* renamed from: i  reason: collision with root package name */
    private final int f1755i;

    /* renamed from: o  reason: collision with root package name */
    private final Runnable f1756o = new Runnable() { // from class: androidx.appcompat.widget.b1
        @Override // java.lang.Runnable
        public final void run() {
            d1.this.h(false);
        }
    };

    /* renamed from: p  reason: collision with root package name */
    private final Runnable f1757p = new Runnable() { // from class: androidx.appcompat.widget.c1
        @Override // java.lang.Runnable
        public final void run() {
            d1.this.d();
        }
    };

    /* renamed from: q  reason: collision with root package name */
    private int f1758q;

    /* renamed from: r  reason: collision with root package name */
    private int f1759r;

    /* renamed from: s  reason: collision with root package name */
    private e1 f1760s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f1761t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f1762u;

    private d1(View view, CharSequence charSequence) {
        this.f1753d = view;
        this.f1754e = charSequence;
        this.f1755i = androidx.core.view.l0.g(ViewConfiguration.get(view.getContext()));
        c();
        view.setOnLongClickListener(this);
        view.setOnHoverListener(this);
    }

    private void b() {
        this.f1753d.removeCallbacks(this.f1756o);
    }

    private void c() {
        this.f1762u = true;
    }

    private void e() {
        this.f1753d.postDelayed(this.f1756o, ViewConfiguration.getLongPressTimeout());
    }

    private static void f(d1 d1Var) {
        d1 d1Var2 = f1751v;
        if (d1Var2 != null) {
            d1Var2.b();
        }
        f1751v = d1Var;
        if (d1Var != null) {
            d1Var.e();
        }
    }

    public static void g(View view, CharSequence charSequence) {
        d1 d1Var = f1751v;
        if (d1Var != null && d1Var.f1753d == view) {
            f(null);
        }
        if (TextUtils.isEmpty(charSequence)) {
            d1 d1Var2 = f1752w;
            if (d1Var2 != null && d1Var2.f1753d == view) {
                d1Var2.d();
            }
            view.setOnLongClickListener(null);
            view.setLongClickable(false);
            view.setOnHoverListener(null);
            return;
        }
        new d1(view, charSequence);
    }

    private boolean i(MotionEvent motionEvent) {
        int x10 = (int) motionEvent.getX();
        int y10 = (int) motionEvent.getY();
        if (!this.f1762u && Math.abs(x10 - this.f1758q) <= this.f1755i && Math.abs(y10 - this.f1759r) <= this.f1755i) {
            return false;
        }
        this.f1758q = x10;
        this.f1759r = y10;
        this.f1762u = false;
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d() {
        if (f1752w == this) {
            f1752w = null;
            e1 e1Var = this.f1760s;
            if (e1Var != null) {
                e1Var.c();
                this.f1760s = null;
                c();
                this.f1753d.removeOnAttachStateChangeListener(this);
            } else {
                Log.e("TooltipCompatHandler", "sActiveHandler.mPopup == null");
            }
        }
        if (f1751v == this) {
            f(null);
        }
        this.f1753d.removeCallbacks(this.f1757p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(boolean z10) {
        long longPressTimeout;
        long j10;
        long j11;
        if (!this.f1753d.isAttachedToWindow()) {
            return;
        }
        f(null);
        d1 d1Var = f1752w;
        if (d1Var != null) {
            d1Var.d();
        }
        f1752w = this;
        this.f1761t = z10;
        e1 e1Var = new e1(this.f1753d.getContext());
        this.f1760s = e1Var;
        e1Var.e(this.f1753d, this.f1758q, this.f1759r, this.f1761t, this.f1754e);
        this.f1753d.addOnAttachStateChangeListener(this);
        if (this.f1761t) {
            j11 = 2500;
        } else {
            if ((androidx.core.view.i0.K(this.f1753d) & 1) == 1) {
                longPressTimeout = ViewConfiguration.getLongPressTimeout();
                j10 = 3000;
            } else {
                longPressTimeout = ViewConfiguration.getLongPressTimeout();
                j10 = 15000;
            }
            j11 = j10 - longPressTimeout;
        }
        this.f1753d.removeCallbacks(this.f1757p);
        this.f1753d.postDelayed(this.f1757p, j11);
    }

    @Override // android.view.View.OnHoverListener
    public boolean onHover(View view, MotionEvent motionEvent) {
        if (this.f1760s != null && this.f1761t) {
            return false;
        }
        AccessibilityManager accessibilityManager = (AccessibilityManager) this.f1753d.getContext().getSystemService("accessibility");
        if (accessibilityManager.isEnabled() && accessibilityManager.isTouchExplorationEnabled()) {
            return false;
        }
        int action = motionEvent.getAction();
        if (action != 7) {
            if (action == 10) {
                c();
                d();
            }
        } else if (this.f1753d.isEnabled() && this.f1760s == null && i(motionEvent)) {
            f(this);
        }
        return false;
    }

    @Override // android.view.View.OnLongClickListener
    public boolean onLongClick(View view) {
        this.f1758q = view.getWidth() / 2;
        this.f1759r = view.getHeight() / 2;
        h(true);
        return true;
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewAttachedToWindow(View view) {
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewDetachedFromWindow(View view) {
        d();
    }
}
