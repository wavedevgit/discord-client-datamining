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
    private static final boolean f16126s = true;

    /* renamed from: e  reason: collision with root package name */
    private final int f16127e;

    /* renamed from: f  reason: collision with root package name */
    private final int f16128f;

    /* renamed from: g  reason: collision with root package name */
    private final TimeInterpolator f16129g;

    /* renamed from: h  reason: collision with root package name */
    private AutoCompleteTextView f16130h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnClickListener f16131i;

    /* renamed from: j  reason: collision with root package name */
    private final View.OnFocusChangeListener f16132j;

    /* renamed from: k  reason: collision with root package name */
    private final c.a f16133k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f16134l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f16135m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f16136n;

    /* renamed from: o  reason: collision with root package name */
    private long f16137o;

    /* renamed from: p  reason: collision with root package name */
    private AccessibilityManager f16138p;

    /* renamed from: q  reason: collision with root package name */
    private ValueAnimator f16139q;

    /* renamed from: r  reason: collision with root package name */
    private ValueAnimator f16140r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            p.this.r();
            p.this.f16140r.start();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(r rVar) {
        super(rVar);
        this.f16131i = new View.OnClickListener() { // from class: com.google.android.material.textfield.l
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.this.J();
            }
        };
        this.f16132j = new View.OnFocusChangeListener() { // from class: com.google.android.material.textfield.m
            @Override // android.view.View.OnFocusChangeListener
            public final void onFocusChange(View view, boolean z10) {
                p.y(p.this, view, z10);
            }
        };
        this.f16133k = new c.a() { // from class: com.google.android.material.textfield.n
            @Override // c2.c.a
            public final void onTouchExplorationStateChanged(boolean z10) {
                p.w(p.this, z10);
            }
        };
        this.f16137o = LongCompanionObject.MAX_VALUE;
        this.f16128f = jh.g.f(rVar.getContext(), yg.b.L, 67);
        this.f16127e = jh.g.f(rVar.getContext(), yg.b.L, 50);
        this.f16129g = jh.g.g(rVar.getContext(), yg.b.Q, zg.a.f55806a);
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
        ofFloat.setInterpolator(this.f16129g);
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
        this.f16140r = E(this.f16128f, 0.0f, 1.0f);
        ValueAnimator E = E(this.f16127e, 1.0f, 0.0f);
        this.f16139q = E;
        E.addListener(new a());
    }

    private boolean G() {
        long currentTimeMillis = System.currentTimeMillis() - this.f16137o;
        if (currentTimeMillis >= 0 && currentTimeMillis <= 300) {
            return false;
        }
        return true;
    }

    private void H(boolean z10) {
        if (this.f16136n != z10) {
            this.f16136n = z10;
            this.f16140r.cancel();
            this.f16139q.start();
        }
    }

    private void I() {
        this.f16130h.setOnTouchListener(new View.OnTouchListener() { // from class: com.google.android.material.textfield.j
            @Override // android.view.View.OnTouchListener
            public final boolean onTouch(View view, MotionEvent motionEvent) {
                return p.z(p.this, view, motionEvent);
            }
        });
        if (f16126s) {
            this.f16130h.setOnDismissListener(new AutoCompleteTextView.OnDismissListener() { // from class: com.google.android.material.textfield.k
                @Override // android.widget.AutoCompleteTextView.OnDismissListener
                public final void onDismiss() {
                    p.A(p.this);
                }
            });
        }
        this.f16130h.setThreshold(0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void J() {
        if (this.f16130h == null) {
            return;
        }
        if (G()) {
            this.f16135m = false;
        }
        if (!this.f16135m) {
            if (f16126s) {
                H(!this.f16136n);
            } else {
                this.f16136n = !this.f16136n;
                r();
            }
            if (this.f16136n) {
                this.f16130h.requestFocus();
                this.f16130h.showDropDown();
                return;
            }
            this.f16130h.dismissDropDown();
            return;
        }
        this.f16135m = false;
    }

    private void K() {
        this.f16135m = true;
        this.f16137o = System.currentTimeMillis();
    }

    public static /* synthetic */ void v(p pVar) {
        boolean isPopupShowing = pVar.f16130h.isPopupShowing();
        pVar.H(isPopupShowing);
        pVar.f16135m = isPopupShowing;
    }

    public static /* synthetic */ void w(p pVar, boolean z10) {
        int i10;
        AutoCompleteTextView autoCompleteTextView = pVar.f16130h;
        if (autoCompleteTextView != null && !q.a(autoCompleteTextView)) {
            CheckableImageButton checkableImageButton = pVar.f16167d;
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
        pVar.f16167d.setAlpha(((Float) valueAnimator.getAnimatedValue()).floatValue());
    }

    public static /* synthetic */ void y(p pVar, View view, boolean z10) {
        pVar.f16134l = z10;
        pVar.r();
        if (!z10) {
            pVar.H(false);
            pVar.f16135m = false;
        }
    }

    public static /* synthetic */ boolean z(p pVar, View view, MotionEvent motionEvent) {
        pVar.getClass();
        if (motionEvent.getAction() == 1) {
            if (pVar.G()) {
                pVar.f16135m = false;
            }
            pVar.J();
            pVar.K();
        }
        return false;
    }

    @Override // com.google.android.material.textfield.s
    public void a(Editable editable) {
        if (this.f16138p.isTouchExplorationEnabled() && q.a(this.f16130h) && !this.f16167d.hasFocus()) {
            this.f16130h.dismissDropDown();
        }
        this.f16130h.post(new Runnable() { // from class: com.google.android.material.textfield.o
            @Override // java.lang.Runnable
            public final void run() {
                p.v(p.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int c() {
        return yg.i.f54472g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int d() {
        if (f16126s) {
            return yg.e.f54408h;
        }
        return yg.e.f54409i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnFocusChangeListener e() {
        return this.f16132j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnClickListener f() {
        return this.f16131i;
    }

    @Override // com.google.android.material.textfield.s
    public c.a h() {
        return this.f16133k;
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
        return this.f16134l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean l() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean m() {
        return this.f16136n;
    }

    @Override // com.google.android.material.textfield.s
    public void n(EditText editText) {
        this.f16130h = D(editText);
        I();
        this.f16164a.setErrorIconDrawable((Drawable) null);
        if (!q.a(editText) && this.f16138p.isTouchExplorationEnabled()) {
            h0.x0(this.f16167d, 2);
        }
        this.f16164a.setEndIconVisible(true);
    }

    @Override // com.google.android.material.textfield.s
    public void o(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        if (!q.a(this.f16130h)) {
            accessibilityNodeInfoCompat.w0(Spinner.class.getName());
        }
        if (accessibilityNodeInfoCompat.g0()) {
            accessibilityNodeInfoCompat.I0(null);
        }
    }

    @Override // com.google.android.material.textfield.s
    public void p(View view, AccessibilityEvent accessibilityEvent) {
        boolean z10;
        if (this.f16138p.isEnabled() && !q.a(this.f16130h)) {
            if ((accessibilityEvent.getEventType() == 32768 || accessibilityEvent.getEventType() == 8) && this.f16136n && !this.f16130h.isPopupShowing()) {
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
        this.f16138p = (AccessibilityManager) this.f16166c.getSystemService("accessibility");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean t() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void u() {
        AutoCompleteTextView autoCompleteTextView = this.f16130h;
        if (autoCompleteTextView != null) {
            autoCompleteTextView.setOnTouchListener(null);
            if (f16126s) {
                this.f16130h.setOnDismissListener(null);
            }
        }
    }
}
