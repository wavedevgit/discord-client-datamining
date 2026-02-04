package com.google.android.material.textfield;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.graphics.drawable.Drawable;
import android.text.Editable;
import android.view.MotionEvent;
import android.view.View;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityManager;
import android.widget.AutoCompleteTextView;
import android.widget.EditText;
import android.widget.Spinner;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import c2.c;
import com.google.android.material.internal.CheckableImageButton;
import kotlin.jvm.internal.LongCompanionObject;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class p extends s {

    /* renamed from: s  reason: collision with root package name */
    private static final boolean f15094s = true;

    /* renamed from: e  reason: collision with root package name */
    private final int f15095e;

    /* renamed from: f  reason: collision with root package name */
    private final int f15096f;

    /* renamed from: g  reason: collision with root package name */
    private final TimeInterpolator f15097g;

    /* renamed from: h  reason: collision with root package name */
    private AutoCompleteTextView f15098h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnClickListener f15099i;

    /* renamed from: j  reason: collision with root package name */
    private final View.OnFocusChangeListener f15100j;

    /* renamed from: k  reason: collision with root package name */
    private final c.a f15101k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f15102l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f15103m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f15104n;

    /* renamed from: o  reason: collision with root package name */
    private long f15105o;

    /* renamed from: p  reason: collision with root package name */
    private AccessibilityManager f15106p;

    /* renamed from: q  reason: collision with root package name */
    private ValueAnimator f15107q;

    /* renamed from: r  reason: collision with root package name */
    private ValueAnimator f15108r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            p.this.r();
            p.this.f15108r.start();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(r rVar) {
        super(rVar);
        this.f15099i = new View.OnClickListener() { // from class: com.google.android.material.textfield.l
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.this.J();
            }
        };
        this.f15100j = new View.OnFocusChangeListener() { // from class: com.google.android.material.textfield.m
            @Override // android.view.View.OnFocusChangeListener
            public final void onFocusChange(View view, boolean z10) {
                p.y(p.this, view, z10);
            }
        };
        this.f15101k = new c.a() { // from class: com.google.android.material.textfield.n
            @Override // c2.c.a
            public final void onTouchExplorationStateChanged(boolean z10) {
                p.w(p.this, z10);
            }
        };
        this.f15105o = LongCompanionObject.MAX_VALUE;
        this.f15096f = jh.g.f(rVar.getContext(), yg.b.L, 67);
        this.f15095e = jh.g.f(rVar.getContext(), yg.b.L, 50);
        this.f15097g = jh.g.g(rVar.getContext(), yg.b.Q, zg.a.f55941a);
    }

    public static /* synthetic */ void A(p pVar) {
        pVar.K();
        pVar.H(false);
    }

    private static AutoCompleteTextView D(EditText editText) {
        if (editText instanceof AutoCompleteTextView) {
            return (AutoCompleteTextView) editText;
        }
        throw new RuntimeException("EditText needs to be an AutoCompleteTextView if an Exposed Dropdown Menu is being used.");
    }

    private ValueAnimator E(int i10, float... fArr) {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(fArr);
        ofFloat.setInterpolator(this.f15097g);
        ofFloat.setDuration(i10);
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.google.android.material.textfield.i
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                p.x(p.this, valueAnimator);
            }
        });
        return ofFloat;
    }

    private void F() {
        this.f15108r = E(this.f15096f, 0.0f, 1.0f);
        ValueAnimator E = E(this.f15095e, 1.0f, 0.0f);
        this.f15107q = E;
        E.addListener(new a());
    }

    private boolean G() {
        long currentTimeMillis = System.currentTimeMillis() - this.f15105o;
        if (currentTimeMillis >= 0 && currentTimeMillis <= 300) {
            return false;
        }
        return true;
    }

    private void H(boolean z10) {
        if (this.f15104n != z10) {
            this.f15104n = z10;
            this.f15108r.cancel();
            this.f15107q.start();
        }
    }

    private void I() {
        this.f15098h.setOnTouchListener(new View.OnTouchListener() { // from class: com.google.android.material.textfield.j
            @Override // android.view.View.OnTouchListener
            public final boolean onTouch(View view, MotionEvent motionEvent) {
                return p.z(p.this, view, motionEvent);
            }
        });
        if (f15094s) {
            this.f15098h.setOnDismissListener(new AutoCompleteTextView.OnDismissListener() { // from class: com.google.android.material.textfield.k
                @Override // android.widget.AutoCompleteTextView.OnDismissListener
                public final void onDismiss() {
                    p.A(p.this);
                }
            });
        }
        this.f15098h.setThreshold(0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void J() {
        if (this.f15098h == null) {
            return;
        }
        if (G()) {
            this.f15103m = false;
        }
        if (!this.f15103m) {
            if (f15094s) {
                H(!this.f15104n);
            } else {
                this.f15104n = !this.f15104n;
                r();
            }
            if (this.f15104n) {
                this.f15098h.requestFocus();
                this.f15098h.showDropDown();
                return;
            }
            this.f15098h.dismissDropDown();
            return;
        }
        this.f15103m = false;
    }

    private void K() {
        this.f15103m = true;
        this.f15105o = System.currentTimeMillis();
    }

    public static /* synthetic */ void v(p pVar) {
        boolean isPopupShowing = pVar.f15098h.isPopupShowing();
        pVar.H(isPopupShowing);
        pVar.f15103m = isPopupShowing;
    }

    public static /* synthetic */ void w(p pVar, boolean z10) {
        int i10;
        AutoCompleteTextView autoCompleteTextView = pVar.f15098h;
        if (autoCompleteTextView != null && !q.a(autoCompleteTextView)) {
            CheckableImageButton checkableImageButton = pVar.f15135d;
            if (z10) {
                i10 = 2;
            } else {
                i10 = 1;
            }
            h0.x0(checkableImageButton, i10);
        }
    }

    public static /* synthetic */ void x(p pVar, ValueAnimator valueAnimator) {
        pVar.getClass();
        pVar.f15135d.setAlpha(((Float) valueAnimator.getAnimatedValue()).floatValue());
    }

    public static /* synthetic */ void y(p pVar, View view, boolean z10) {
        pVar.f15102l = z10;
        pVar.r();
        if (!z10) {
            pVar.H(false);
            pVar.f15103m = false;
        }
    }

    public static /* synthetic */ boolean z(p pVar, View view, MotionEvent motionEvent) {
        pVar.getClass();
        if (motionEvent.getAction() == 1) {
            if (pVar.G()) {
                pVar.f15103m = false;
            }
            pVar.J();
            pVar.K();
        }
        return false;
    }

    @Override // com.google.android.material.textfield.s
    public void a(Editable editable) {
        if (this.f15106p.isTouchExplorationEnabled() && q.a(this.f15098h) && !this.f15135d.hasFocus()) {
            this.f15098h.dismissDropDown();
        }
        this.f15098h.post(new Runnable() { // from class: com.google.android.material.textfield.o
            @Override // java.lang.Runnable
            public final void run() {
                p.v(p.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int c() {
        return yg.i.f54227g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int d() {
        if (f15094s) {
            return yg.e.f54163h;
        }
        return yg.e.f54164i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnFocusChangeListener e() {
        return this.f15100j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnClickListener f() {
        return this.f15099i;
    }

    @Override // com.google.android.material.textfield.s
    public c.a h() {
        return this.f15101k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean i(int i10) {
        return i10 != 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean j() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean k() {
        return this.f15102l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean l() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean m() {
        return this.f15104n;
    }

    @Override // com.google.android.material.textfield.s
    public void n(EditText editText) {
        this.f15098h = D(editText);
        I();
        this.f15132a.setErrorIconDrawable((Drawable) null);
        if (!q.a(editText) && this.f15106p.isTouchExplorationEnabled()) {
            h0.x0(this.f15135d, 2);
        }
        this.f15132a.setEndIconVisible(true);
    }

    @Override // com.google.android.material.textfield.s
    public void o(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        if (!q.a(this.f15098h)) {
            accessibilityNodeInfoCompat.w0(Spinner.class.getName());
        }
        if (accessibilityNodeInfoCompat.g0()) {
            accessibilityNodeInfoCompat.I0(null);
        }
    }

    @Override // com.google.android.material.textfield.s
    public void p(View view, AccessibilityEvent accessibilityEvent) {
        boolean z10;
        if (this.f15106p.isEnabled() && !q.a(this.f15098h)) {
            if ((accessibilityEvent.getEventType() == 32768 || accessibilityEvent.getEventType() == 8) && this.f15104n && !this.f15098h.isPopupShowing()) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (accessibilityEvent.getEventType() == 1 || z10) {
                J();
                K();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void s() {
        F();
        this.f15106p = (AccessibilityManager) this.f15134c.getSystemService("accessibility");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean t() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void u() {
        AutoCompleteTextView autoCompleteTextView = this.f15098h;
        if (autoCompleteTextView != null) {
            autoCompleteTextView.setOnTouchListener(null);
            if (f15094s) {
                this.f15098h.setOnDismissListener(null);
            }
        }
    }
}
