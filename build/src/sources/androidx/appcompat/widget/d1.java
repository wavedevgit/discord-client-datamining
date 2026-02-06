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
    private static d1 f2051v;

    /* renamed from: w  reason: collision with root package name */
    private static d1 f2052w;

    /* renamed from: d  reason: collision with root package name */
    private final View f2053d;

    /* renamed from: e  reason: collision with root package name */
    private final CharSequence f2054e;

    /* renamed from: i  reason: collision with root package name */
    private final int f2055i;

    /* renamed from: o  reason: collision with root package name */
    private final Runnable f2056o = new Runnable() { // from class: androidx.appcompat.widget.b1
        @Override // java.lang.Runnable
        public final void run() {
            d1.this.h(false);
        }
    };

    /* renamed from: p  reason: collision with root package name */
    private final Runnable f2057p = new Runnable() { // from class: androidx.appcompat.widget.c1
        @Override // java.lang.Runnable
        public final void run() {
            d1.this.d();
        }
    };

    /* renamed from: q  reason: collision with root package name */
    private int f2058q;

    /* renamed from: r  reason: collision with root package name */
    private int f2059r;

    /* renamed from: s  reason: collision with root package name */
    private e1 f2060s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f2061t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f2062u;

    private d1(View view, CharSequence charSequence) {
        this.f2053d = view;
        this.f2054e = charSequence;
        this.f2055i = androidx.core.view.k0.g(ViewConfiguration.get(view.getContext()));
        c();
        view.setOnLongClickListener(this);
        view.setOnHoverListener(this);
    }

    private void b() {
        this.f2053d.removeCallbacks(this.f2056o);
    }

    private void c() {
        this.f2062u = true;
    }

    private void e() {
        this.f2053d.postDelayed(this.f2056o, ViewConfiguration.getLongPressTimeout());
    }

    private static void f(d1 d1Var) {
        d1 d1Var2 = f2051v;
        if (d1Var2 != null) {
            d1Var2.b();
        }
        f2051v = d1Var;
        if (d1Var != null) {
            d1Var.e();
        }
    }

    public static void g(View view, CharSequence charSequence) {
        d1 d1Var = f2051v;
        if (d1Var != null && d1Var.f2053d == view) {
            f(null);
        }
        if (TextUtils.isEmpty(charSequence)) {
            d1 d1Var2 = f2052w;
            if (d1Var2 != null && d1Var2.f2053d == view) {
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
        if (!this.f2062u && Math.abs(x10 - this.f2058q) <= this.f2055i && Math.abs(y10 - this.f2059r) <= this.f2055i) {
            return false;
        }
        this.f2058q = x10;
        this.f2059r = y10;
        this.f2062u = false;
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d() {
        if (f2052w == this) {
            f2052w = null;
            e1 e1Var = this.f2060s;
            if (e1Var != null) {
                e1Var.c();
                this.f2060s = null;
                c();
                this.f2053d.removeOnAttachStateChangeListener(this);
            } else {
                Log.e("TooltipCompatHandler", "sActiveHandler.mPopup == null");
            }
        }
        if (f2051v == this) {
            f(null);
        }
        this.f2053d.removeCallbacks(this.f2057p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(boolean z10) {
        long longPressTimeout;
        long j10;
        long j11;
        if (!this.f2053d.isAttachedToWindow()) {
            return;
        }
        f(null);
        d1 d1Var = f2052w;
        if (d1Var != null) {
            d1Var.d();
        }
        f2052w = this;
        this.f2061t = z10;
        e1 e1Var = new e1(this.f2053d.getContext());
        this.f2060s = e1Var;
        e1Var.e(this.f2053d, this.f2058q, this.f2059r, this.f2061t, this.f2054e);
        this.f2053d.addOnAttachStateChangeListener(this);
        if (this.f2061t) {
            j11 = 2500;
        } else {
            if ((androidx.core.view.h0.L(this.f2053d) & 1) == 1) {
                longPressTimeout = ViewConfiguration.getLongPressTimeout();
                j10 = 3000;
            } else {
                longPressTimeout = ViewConfiguration.getLongPressTimeout();
                j10 = 15000;
            }
            j11 = j10 - longPressTimeout;
        }
        this.f2053d.removeCallbacks(this.f2057p);
        this.f2053d.postDelayed(this.f2057p, j11);
    }

    @Override // android.view.View.OnHoverListener
    public boolean onHover(View view, MotionEvent motionEvent) {
        if (this.f2060s != null && this.f2061t) {
            return false;
        }
        AccessibilityManager accessibilityManager = (AccessibilityManager) this.f2053d.getContext().getSystemService("accessibility");
        if (accessibilityManager.isEnabled() && accessibilityManager.isTouchExplorationEnabled()) {
            return false;
        }
        int action = motionEvent.getAction();
        if (action != 7) {
            if (action == 10) {
                c();
                d();
            }
        } else if (this.f2053d.isEnabled() && this.f2060s == null && i(motionEvent)) {
            f(this);
        }
        return false;
    }

    @Override // android.view.View.OnLongClickListener
    public boolean onLongClick(View view) {
        this.f2058q = view.getWidth() / 2;
        this.f2059r = view.getHeight() / 2;
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
