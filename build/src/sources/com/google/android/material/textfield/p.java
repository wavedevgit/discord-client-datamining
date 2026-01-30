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
    private static final boolean f16497s = true;

    /* renamed from: e  reason: collision with root package name */
    private final int f16498e;

    /* renamed from: f  reason: collision with root package name */
    private final int f16499f;

    /* renamed from: g  reason: collision with root package name */
    private final TimeInterpolator f16500g;

    /* renamed from: h  reason: collision with root package name */
    private AutoCompleteTextView f16501h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnClickListener f16502i;

    /* renamed from: j  reason: collision with root package name */
    private final View.OnFocusChangeListener f16503j;

    /* renamed from: k  reason: collision with root package name */
    private final c.a f16504k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f16505l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f16506m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f16507n;

    /* renamed from: o  reason: collision with root package name */
    private long f16508o;

    /* renamed from: p  reason: collision with root package name */
    private AccessibilityManager f16509p;

    /* renamed from: q  reason: collision with root package name */
    private ValueAnimator f16510q;

    /* renamed from: r  reason: collision with root package name */
    private ValueAnimator f16511r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            p.this.r();
            p.this.f16511r.start();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(r rVar) {
        super(rVar);
        this.f16502i = new View.OnClickListener() { // from class: com.google.android.material.textfield.l
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.this.J();
            }
        };
        this.f16503j = new View.OnFocusChangeListener() { // from class: com.google.android.material.textfield.m
            @Override // android.view.View.OnFocusChangeListener
            public final void onFocusChange(View view, boolean z10) {
                p.y(p.this, view, z10);
            }
        };
        this.f16504k = new c.a() { // from class: com.google.android.material.textfield.n
            @Override // c2.c.a
            public final void onTouchExplorationStateChanged(boolean z10) {
                p.w(p.this, z10);
            }
        };
        this.f16508o = LongCompanionObject.MAX_VALUE;
        this.f16499f = jh.g.f(rVar.getContext(), yg.b.L, 67);
        this.f16498e = jh.g.f(rVar.getContext(), yg.b.L, 50);
        this.f16500g = jh.g.g(rVar.getContext(), yg.b.Q, zg.a.f55674a);
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
        ofFloat.setInterpolator(this.f16500g);
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
        this.f16511r = E(this.f16499f, 0.0f, 1.0f);
        ValueAnimator E = E(this.f16498e, 1.0f, 0.0f);
        this.f16510q = E;
        E.addListener(new a());
    }

    private boolean G() {
        long currentTimeMillis = System.currentTimeMillis() - this.f16508o;
        if (currentTimeMillis >= 0 && currentTimeMillis <= 300) {
            return false;
        }
        return true;
    }

    private void H(boolean z10) {
        if (this.f16507n != z10) {
            this.f16507n = z10;
            this.f16511r.cancel();
            this.f16510q.start();
        }
    }

    private void I() {
        this.f16501h.setOnTouchListener(new View.OnTouchListener() { // from class: com.google.android.material.textfield.j
            @Override // android.view.View.OnTouchListener
            public final boolean onTouch(View view, MotionEvent motionEvent) {
                return p.z(p.this, view, motionEvent);
            }
        });
        if (f16497s) {
            this.f16501h.setOnDismissListener(new AutoCompleteTextView.OnDismissListener() { // from class: com.google.android.material.textfield.k
                @Override // android.widget.AutoCompleteTextView.OnDismissListener
                public final void onDismiss() {
                    p.A(p.this);
                }
            });
        }
        this.f16501h.setThreshold(0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void J() {
        if (this.f16501h == null) {
            return;
        }
        if (G()) {
            this.f16506m = false;
        }
        if (!this.f16506m) {
            if (f16497s) {
                H(!this.f16507n);
            } else {
                this.f16507n = !this.f16507n;
                r();
            }
            if (this.f16507n) {
                this.f16501h.requestFocus();
                this.f16501h.showDropDown();
                return;
            }
            this.f16501h.dismissDropDown();
            return;
        }
        this.f16506m = false;
    }

    private void K() {
        this.f16506m = true;
        this.f16508o = System.currentTimeMillis();
    }

    public static /* synthetic */ void v(p pVar) {
        boolean isPopupShowing = pVar.f16501h.isPopupShowing();
        pVar.H(isPopupShowing);
        pVar.f16506m = isPopupShowing;
    }

    public static /* synthetic */ void w(p pVar, boolean z10) {
        int i10;
        AutoCompleteTextView autoCompleteTextView = pVar.f16501h;
        if (autoCompleteTextView != null && !q.a(autoCompleteTextView)) {
            CheckableImageButton checkableImageButton = pVar.f16538d;
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
        pVar.f16538d.setAlpha(((Float) valueAnimator.getAnimatedValue()).floatValue());
    }

    public static /* synthetic */ void y(p pVar, View view, boolean z10) {
        pVar.f16505l = z10;
        pVar.r();
        if (!z10) {
            pVar.H(false);
            pVar.f16506m = false;
        }
    }

    public static /* synthetic */ boolean z(p pVar, View view, MotionEvent motionEvent) {
        pVar.getClass();
        if (motionEvent.getAction() == 1) {
            if (pVar.G()) {
                pVar.f16506m = false;
            }
            pVar.J();
            pVar.K();
        }
        return false;
    }

    @Override // com.google.android.material.textfield.s
    public void a(Editable editable) {
        if (this.f16509p.isTouchExplorationEnabled() && q.a(this.f16501h) && !this.f16538d.hasFocus()) {
            this.f16501h.dismissDropDown();
        }
        this.f16501h.post(new Runnable() { // from class: com.google.android.material.textfield.o
            @Override // java.lang.Runnable
            public final void run() {
                p.v(p.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int c() {
        return yg.i.f54497g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int d() {
        if (f16497s) {
            return yg.e.f54433h;
        }
        return yg.e.f54434i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnFocusChangeListener e() {
        return this.f16503j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnClickListener f() {
        return this.f16502i;
    }

    @Override // com.google.android.material.textfield.s
    public c.a h() {
        return this.f16504k;
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
        return this.f16505l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean l() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean m() {
        return this.f16507n;
    }

    @Override // com.google.android.material.textfield.s
    public void n(EditText editText) {
        this.f16501h = D(editText);
        I();
        this.f16535a.setErrorIconDrawable((Drawable) null);
        if (!q.a(editText) && this.f16509p.isTouchExplorationEnabled()) {
            h0.x0(this.f16538d, 2);
        }
        this.f16535a.setEndIconVisible(true);
    }

    @Override // com.google.android.material.textfield.s
    public void o(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        if (!q.a(this.f16501h)) {
            accessibilityNodeInfoCompat.w0(Spinner.class.getName());
        }
        if (accessibilityNodeInfoCompat.g0()) {
            accessibilityNodeInfoCompat.I0(null);
        }
    }

    @Override // com.google.android.material.textfield.s
    public void p(View view, AccessibilityEvent accessibilityEvent) {
        boolean z10;
        if (this.f16509p.isEnabled() && !q.a(this.f16501h)) {
            if ((accessibilityEvent.getEventType() == 32768 || accessibilityEvent.getEventType() == 8) && this.f16507n && !this.f16501h.isPopupShowing()) {
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
        this.f16509p = (AccessibilityManager) this.f16537c.getSystemService("accessibility");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean t() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void u() {
        AutoCompleteTextView autoCompleteTextView = this.f16501h;
        if (autoCompleteTextView != null) {
            autoCompleteTextView.setOnTouchListener(null);
            if (f16497s) {
                this.f16501h.setOnDismissListener(null);
            }
        }
    }
}
