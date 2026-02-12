package com.google.android.material.textfield;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;
import android.text.Editable;
import android.view.MotionEvent;
import android.view.View;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityManager;
import android.widget.AutoCompleteTextView;
import android.widget.EditText;
import android.widget.Spinner;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import com.google.android.material.internal.CheckableImageButton;
import kotlin.jvm.internal.LongCompanionObject;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class p extends s {

    /* renamed from: e  reason: collision with root package name */
    private final int f16359e;

    /* renamed from: f  reason: collision with root package name */
    private final int f16360f;

    /* renamed from: g  reason: collision with root package name */
    private final TimeInterpolator f16361g;

    /* renamed from: h  reason: collision with root package name */
    private AutoCompleteTextView f16362h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnClickListener f16363i;

    /* renamed from: j  reason: collision with root package name */
    private final View.OnFocusChangeListener f16364j;

    /* renamed from: k  reason: collision with root package name */
    private final AccessibilityManager.TouchExplorationStateChangeListener f16365k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f16366l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f16367m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f16368n;

    /* renamed from: o  reason: collision with root package name */
    private long f16369o;

    /* renamed from: p  reason: collision with root package name */
    private AccessibilityManager f16370p;

    /* renamed from: q  reason: collision with root package name */
    private ValueAnimator f16371q;

    /* renamed from: r  reason: collision with root package name */
    private ValueAnimator f16372r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            p.this.r();
            p.this.f16372r.start();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(r rVar) {
        super(rVar);
        this.f16363i = new View.OnClickListener() { // from class: com.google.android.material.textfield.l
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.this.J();
            }
        };
        this.f16364j = new View.OnFocusChangeListener() { // from class: com.google.android.material.textfield.m
            @Override // android.view.View.OnFocusChangeListener
            public final void onFocusChange(View view, boolean z10) {
                p.y(p.this, view, z10);
            }
        };
        this.f16365k = new AccessibilityManager.TouchExplorationStateChangeListener() { // from class: com.google.android.material.textfield.n
            @Override // android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener
            public final void onTouchExplorationStateChanged(boolean z10) {
                p.w(p.this, z10);
            }
        };
        this.f16369o = LongCompanionObject.MAX_VALUE;
        this.f16360f = oh.g.f(rVar.getContext(), bh.b.P, 67);
        this.f16359e = oh.g.f(rVar.getContext(), bh.b.P, 50);
        this.f16361g = oh.g.g(rVar.getContext(), bh.b.U, ch.a.f8276a);
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
        ofFloat.setInterpolator(this.f16361g);
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
        this.f16372r = E(this.f16360f, 0.0f, 1.0f);
        ValueAnimator E = E(this.f16359e, 1.0f, 0.0f);
        this.f16371q = E;
        E.addListener(new a());
    }

    private boolean G() {
        long uptimeMillis = SystemClock.uptimeMillis() - this.f16369o;
        if (uptimeMillis >= 0 && uptimeMillis <= 300) {
            return false;
        }
        return true;
    }

    private void H(boolean z10) {
        if (this.f16368n != z10) {
            this.f16368n = z10;
            this.f16372r.cancel();
            this.f16371q.start();
        }
    }

    private void I() {
        this.f16362h.setOnTouchListener(new View.OnTouchListener() { // from class: com.google.android.material.textfield.j
            @Override // android.view.View.OnTouchListener
            public final boolean onTouch(View view, MotionEvent motionEvent) {
                return p.z(p.this, view, motionEvent);
            }
        });
        this.f16362h.setOnDismissListener(new AutoCompleteTextView.OnDismissListener() { // from class: com.google.android.material.textfield.k
            @Override // android.widget.AutoCompleteTextView.OnDismissListener
            public final void onDismiss() {
                p.A(p.this);
            }
        });
        this.f16362h.setThreshold(0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void J() {
        if (this.f16362h == null) {
            return;
        }
        if (G()) {
            this.f16367m = false;
        }
        if (!this.f16367m) {
            H(!this.f16368n);
            if (this.f16368n) {
                this.f16362h.requestFocus();
                this.f16362h.showDropDown();
                return;
            }
            this.f16362h.dismissDropDown();
            return;
        }
        this.f16367m = false;
    }

    private void K() {
        this.f16367m = true;
        this.f16369o = SystemClock.uptimeMillis();
    }

    public static /* synthetic */ void v(p pVar) {
        boolean isPopupShowing = pVar.f16362h.isPopupShowing();
        pVar.H(isPopupShowing);
        pVar.f16367m = isPopupShowing;
    }

    public static /* synthetic */ void w(p pVar, boolean z10) {
        int i10;
        AutoCompleteTextView autoCompleteTextView = pVar.f16362h;
        if (autoCompleteTextView != null && !q.a(autoCompleteTextView)) {
            CheckableImageButton checkableImageButton = pVar.f16399d;
            if (z10) {
                i10 = 2;
            } else {
                i10 = 1;
            }
            checkableImageButton.setImportantForAccessibility(i10);
        }
    }

    public static /* synthetic */ void x(p pVar, ValueAnimator valueAnimator) {
        pVar.getClass();
        pVar.f16399d.setAlpha(((Float) valueAnimator.getAnimatedValue()).floatValue());
    }

    public static /* synthetic */ void y(p pVar, View view, boolean z10) {
        pVar.f16366l = z10;
        pVar.r();
        if (!z10) {
            pVar.H(false);
            pVar.f16367m = false;
        }
    }

    public static /* synthetic */ boolean z(p pVar, View view, MotionEvent motionEvent) {
        pVar.getClass();
        if (motionEvent.getAction() == 1) {
            if (pVar.G()) {
                pVar.f16367m = false;
            }
            pVar.J();
            pVar.K();
        }
        return false;
    }

    @Override // com.google.android.material.textfield.s
    public void a(Editable editable) {
        if (this.f16370p.isTouchExplorationEnabled() && q.a(this.f16362h) && !this.f16399d.hasFocus()) {
            this.f16362h.dismissDropDown();
        }
        this.f16362h.post(new Runnable() { // from class: com.google.android.material.textfield.o
            @Override // java.lang.Runnable
            public final void run() {
                p.v(p.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int c() {
        return bh.j.f6906g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int d() {
        return bh.e.f6833h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnFocusChangeListener e() {
        return this.f16364j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnClickListener f() {
        return this.f16363i;
    }

    @Override // com.google.android.material.textfield.s
    public AccessibilityManager.TouchExplorationStateChangeListener h() {
        return this.f16365k;
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
        return this.f16366l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean l() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean m() {
        return this.f16368n;
    }

    @Override // com.google.android.material.textfield.s
    public void n(EditText editText) {
        this.f16362h = D(editText);
        I();
        this.f16396a.setErrorIconDrawable((Drawable) null);
        if (!q.a(editText) && this.f16370p.isTouchExplorationEnabled()) {
            this.f16399d.setImportantForAccessibility(2);
        }
        this.f16396a.setEndIconVisible(true);
    }

    @Override // com.google.android.material.textfield.s
    public void o(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        if (!q.a(this.f16362h)) {
            accessibilityNodeInfoCompat.w0(Spinner.class.getName());
        }
        if (accessibilityNodeInfoCompat.g0()) {
            accessibilityNodeInfoCompat.I0(null);
        }
    }

    @Override // com.google.android.material.textfield.s
    public void p(View view, AccessibilityEvent accessibilityEvent) {
        boolean z10;
        if (this.f16370p.isEnabled() && !q.a(this.f16362h)) {
            if ((accessibilityEvent.getEventType() == 32768 || accessibilityEvent.getEventType() == 8) && this.f16368n && !this.f16362h.isPopupShowing()) {
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
        this.f16370p = (AccessibilityManager) this.f16398c.getSystemService("accessibility");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean t() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void u() {
        AutoCompleteTextView autoCompleteTextView = this.f16362h;
        if (autoCompleteTextView != null) {
            autoCompleteTextView.setOnTouchListener(null);
            this.f16362h.setOnDismissListener(null);
        }
    }
}
