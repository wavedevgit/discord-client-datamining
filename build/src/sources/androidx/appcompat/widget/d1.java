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
    private static d1 f1597v;

    /* renamed from: w  reason: collision with root package name */
    private static d1 f1598w;

    /* renamed from: d  reason: collision with root package name */
    private final View f1599d;

    /* renamed from: e  reason: collision with root package name */
    private final CharSequence f1600e;

    /* renamed from: i  reason: collision with root package name */
    private final int f1601i;

    /* renamed from: o  reason: collision with root package name */
    private final Runnable f1602o = new Runnable() { // from class: androidx.appcompat.widget.b1
        @Override // java.lang.Runnable
        public final void run() {
            d1.this.h(false);
        }
    };

    /* renamed from: p  reason: collision with root package name */
    private final Runnable f1603p = new Runnable() { // from class: androidx.appcompat.widget.c1
        @Override // java.lang.Runnable
        public final void run() {
            d1.this.d();
        }
    };

    /* renamed from: q  reason: collision with root package name */
    private int f1604q;

    /* renamed from: r  reason: collision with root package name */
    private int f1605r;

    /* renamed from: s  reason: collision with root package name */
    private e1 f1606s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f1607t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f1608u;

    private d1(View view, CharSequence charSequence) {
        this.f1599d = view;
        this.f1600e = charSequence;
        this.f1601i = androidx.core.view.k0.g(ViewConfiguration.get(view.getContext()));
        c();
        view.setOnLongClickListener(this);
        view.setOnHoverListener(this);
    }

    private void b() {
        this.f1599d.removeCallbacks(this.f1602o);
    }

    private void c() {
        this.f1608u = true;
    }

    private void e() {
        this.f1599d.postDelayed(this.f1602o, ViewConfiguration.getLongPressTimeout());
    }

    private static void f(d1 d1Var) {
        d1 d1Var2 = f1597v;
        if (d1Var2 != null) {
            d1Var2.b();
        }
        f1597v = d1Var;
        if (d1Var != null) {
            d1Var.e();
        }
    }

    public static void g(View view, CharSequence charSequence) {
        d1 d1Var = f1597v;
        if (d1Var != null && d1Var.f1599d == view) {
            f(null);
        }
        if (TextUtils.isEmpty(charSequence)) {
            d1 d1Var2 = f1598w;
            if (d1Var2 != null && d1Var2.f1599d == view) {
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
        if (!this.f1608u && Math.abs(x10 - this.f1604q) <= this.f1601i && Math.abs(y10 - this.f1605r) <= this.f1601i) {
            return false;
        }
        this.f1604q = x10;
        this.f1605r = y10;
        this.f1608u = false;
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d() {
        if (f1598w == this) {
            f1598w = null;
            e1 e1Var = this.f1606s;
            if (e1Var != null) {
                e1Var.c();
                this.f1606s = null;
                c();
                this.f1599d.removeOnAttachStateChangeListener(this);
            } else {
                Log.e("TooltipCompatHandler", "sActiveHandler.mPopup == null");
            }
        }
        if (f1597v == this) {
            f(null);
        }
        this.f1599d.removeCallbacks(this.f1603p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(boolean z10) {
        long longPressTimeout;
        long j10;
        long j11;
        if (!this.f1599d.isAttachedToWindow()) {
            return;
        }
        f(null);
        d1 d1Var = f1598w;
        if (d1Var != null) {
            d1Var.d();
        }
        f1598w = this;
        this.f1607t = z10;
        e1 e1Var = new e1(this.f1599d.getContext());
        this.f1606s = e1Var;
        e1Var.e(this.f1599d, this.f1604q, this.f1605r, this.f1607t, this.f1600e);
        this.f1599d.addOnAttachStateChangeListener(this);
        if (this.f1607t) {
            j11 = 2500;
        } else {
            if ((androidx.core.view.h0.L(this.f1599d) & 1) == 1) {
                longPressTimeout = ViewConfiguration.getLongPressTimeout();
                j10 = 3000;
            } else {
                longPressTimeout = ViewConfiguration.getLongPressTimeout();
                j10 = 15000;
            }
            j11 = j10 - longPressTimeout;
        }
        this.f1599d.removeCallbacks(this.f1603p);
        this.f1599d.postDelayed(this.f1603p, j11);
    }

    @Override // android.view.View.OnHoverListener
    public boolean onHover(View view, MotionEvent motionEvent) {
        if (this.f1606s != null && this.f1607t) {
            return false;
        }
        AccessibilityManager accessibilityManager = (AccessibilityManager) this.f1599d.getContext().getSystemService("accessibility");
        if (accessibilityManager.isEnabled() && accessibilityManager.isTouchExplorationEnabled()) {
            return false;
        }
        int action = motionEvent.getAction();
        if (action != 7) {
            if (action == 10) {
                c();
                d();
            }
        } else if (this.f1599d.isEnabled() && this.f1606s == null && i(motionEvent)) {
            f(this);
        }
        return false;
    }

    @Override // android.view.View.OnLongClickListener
    public boolean onLongClick(View view) {
        this.f1604q = view.getWidth() / 2;
        this.f1605r = view.getHeight() / 2;
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
