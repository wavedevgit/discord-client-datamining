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
    private final int f16358e;

    /* renamed from: f  reason: collision with root package name */
    private final int f16359f;

    /* renamed from: g  reason: collision with root package name */
    private final TimeInterpolator f16360g;

    /* renamed from: h  reason: collision with root package name */
    private AutoCompleteTextView f16361h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnClickListener f16362i;

    /* renamed from: j  reason: collision with root package name */
    private final View.OnFocusChangeListener f16363j;

    /* renamed from: k  reason: collision with root package name */
    private final AccessibilityManager.TouchExplorationStateChangeListener f16364k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f16365l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f16366m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f16367n;

    /* renamed from: o  reason: collision with root package name */
    private long f16368o;

    /* renamed from: p  reason: collision with root package name */
    private AccessibilityManager f16369p;

    /* renamed from: q  reason: collision with root package name */
    private ValueAnimator f16370q;

    /* renamed from: r  reason: collision with root package name */
    private ValueAnimator f16371r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            p.this.r();
            p.this.f16371r.start();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(r rVar) {
        super(rVar);
        this.f16362i = new View.OnClickListener() { // from class: com.google.android.material.textfield.l
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.this.J();
            }
        };
        this.f16363j = new View.OnFocusChangeListener() { // from class: com.google.android.material.textfield.m
            @Override // android.view.View.OnFocusChangeListener
            public final void onFocusChange(View view, boolean z10) {
                p.y(p.this, view, z10);
            }
        };
        this.f16364k = new AccessibilityManager.TouchExplorationStateChangeListener() { // from class: com.google.android.material.textfield.n
            @Override // android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener
            public final void onTouchExplorationStateChanged(boolean z10) {
                p.w(p.this, z10);
            }
        };
        this.f16368o = LongCompanionObject.MAX_VALUE;
        this.f16359f = oh.g.f(rVar.getContext(), bh.b.P, 67);
        this.f16358e = oh.g.f(rVar.getContext(), bh.b.P, 50);
        this.f16360g = oh.g.g(rVar.getContext(), bh.b.U, ch.a.f8276a);
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
        ofFloat.setInterpolator(this.f16360g);
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
        this.f16371r = E(this.f16359f, 0.0f, 1.0f);
        ValueAnimator E = E(this.f16358e, 1.0f, 0.0f);
        this.f16370q = E;
        E.addListener(new a());
    }

    private boolean G() {
        long uptimeMillis = SystemClock.uptimeMillis() - this.f16368o;
        if (uptimeMillis >= 0 && uptimeMillis <= 300) {
            return false;
        }
        return true;
    }

    private void H(boolean z10) {
        if (this.f16367n != z10) {
            this.f16367n = z10;
            this.f16371r.cancel();
            this.f16370q.start();
        }
    }

    private void I() {
        this.f16361h.setOnTouchListener(new View.OnTouchListener() { // from class: com.google.android.material.textfield.j
            @Override // android.view.View.OnTouchListener
            public final boolean onTouch(View view, MotionEvent motionEvent) {
                return p.z(p.this, view, motionEvent);
            }
        });
        this.f16361h.setOnDismissListener(new AutoCompleteTextView.OnDismissListener() { // from class: com.google.android.material.textfield.k
            @Override // android.widget.AutoCompleteTextView.OnDismissListener
            public final void onDismiss() {
                p.A(p.this);
            }
        });
        this.f16361h.setThreshold(0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void J() {
        if (this.f16361h == null) {
            return;
        }
        if (G()) {
            this.f16366m = false;
        }
        if (!this.f16366m) {
            H(!this.f16367n);
            if (this.f16367n) {
                this.f16361h.requestFocus();
                this.f16361h.showDropDown();
                return;
            }
            this.f16361h.dismissDropDown();
            return;
        }
        this.f16366m = false;
    }

    private void K() {
        this.f16366m = true;
        this.f16368o = SystemClock.uptimeMillis();
    }

    public static /* synthetic */ void v(p pVar) {
        boolean isPopupShowing = pVar.f16361h.isPopupShowing();
        pVar.H(isPopupShowing);
        pVar.f16366m = isPopupShowing;
    }

    public static /* synthetic */ void w(p pVar, boolean z10) {
        int i10;
        AutoCompleteTextView autoCompleteTextView = pVar.f16361h;
        if (autoCompleteTextView != null && !q.a(autoCompleteTextView)) {
            CheckableImageButton checkableImageButton = pVar.f16398d;
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
        pVar.f16398d.setAlpha(((Float) valueAnimator.getAnimatedValue()).floatValue());
    }

    public static /* synthetic */ void y(p pVar, View view, boolean z10) {
        pVar.f16365l = z10;
        pVar.r();
        if (!z10) {
            pVar.H(false);
            pVar.f16366m = false;
        }
    }

    public static /* synthetic */ boolean z(p pVar, View view, MotionEvent motionEvent) {
        pVar.getClass();
        if (motionEvent.getAction() == 1) {
            if (pVar.G()) {
                pVar.f16366m = false;
            }
            pVar.J();
            pVar.K();
        }
        return false;
    }

    @Override // com.google.android.material.textfield.s
    public void a(Editable editable) {
        if (this.f16369p.isTouchExplorationEnabled() && q.a(this.f16361h) && !this.f16398d.hasFocus()) {
            this.f16361h.dismissDropDown();
        }
        this.f16361h.post(new Runnable() { // from class: com.google.android.material.textfield.o
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
        return this.f16363j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnClickListener f() {
        return this.f16362i;
    }

    @Override // com.google.android.material.textfield.s
    public AccessibilityManager.TouchExplorationStateChangeListener h() {
        return this.f16364k;
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
        return this.f16365l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean l() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean m() {
        return this.f16367n;
    }

    @Override // com.google.android.material.textfield.s
    public void n(EditText editText) {
        this.f16361h = D(editText);
        I();
        this.f16395a.setErrorIconDrawable((Drawable) null);
        if (!q.a(editText) && this.f16369p.isTouchExplorationEnabled()) {
            this.f16398d.setImportantForAccessibility(2);
        }
        this.f16395a.setEndIconVisible(true);
    }

    @Override // com.google.android.material.textfield.s
    public void o(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        if (!q.a(this.f16361h)) {
            accessibilityNodeInfoCompat.w0(Spinner.class.getName());
        }
        if (accessibilityNodeInfoCompat.g0()) {
            accessibilityNodeInfoCompat.I0(null);
        }
    }

    @Override // com.google.android.material.textfield.s
    public void p(View view, AccessibilityEvent accessibilityEvent) {
        boolean z10;
        if (this.f16369p.isEnabled() && !q.a(this.f16361h)) {
            if ((accessibilityEvent.getEventType() == 32768 || accessibilityEvent.getEventType() == 8) && this.f16367n && !this.f16361h.isPopupShowing()) {
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
        this.f16369p = (AccessibilityManager) this.f16397c.getSystemService("accessibility");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean t() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void u() {
        AutoCompleteTextView autoCompleteTextView = this.f16361h;
        if (autoCompleteTextView != null) {
            autoCompleteTextView.setOnTouchListener(null);
            this.f16361h.setOnDismissListener(null);
        }
    }
}
