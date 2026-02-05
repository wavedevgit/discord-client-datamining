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
    private static final boolean f15488s = true;

    /* renamed from: e  reason: collision with root package name */
    private final int f15489e;

    /* renamed from: f  reason: collision with root package name */
    private final int f15490f;

    /* renamed from: g  reason: collision with root package name */
    private final TimeInterpolator f15491g;

    /* renamed from: h  reason: collision with root package name */
    private AutoCompleteTextView f15492h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnClickListener f15493i;

    /* renamed from: j  reason: collision with root package name */
    private final View.OnFocusChangeListener f15494j;

    /* renamed from: k  reason: collision with root package name */
    private final c.a f15495k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f15496l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f15497m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f15498n;

    /* renamed from: o  reason: collision with root package name */
    private long f15499o;

    /* renamed from: p  reason: collision with root package name */
    private AccessibilityManager f15500p;

    /* renamed from: q  reason: collision with root package name */
    private ValueAnimator f15501q;

    /* renamed from: r  reason: collision with root package name */
    private ValueAnimator f15502r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            p.this.r();
            p.this.f15502r.start();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(r rVar) {
        super(rVar);
        this.f15493i = new View.OnClickListener() { // from class: com.google.android.material.textfield.l
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.this.J();
            }
        };
        this.f15494j = new View.OnFocusChangeListener() { // from class: com.google.android.material.textfield.m
            @Override // android.view.View.OnFocusChangeListener
            public final void onFocusChange(View view, boolean z10) {
                p.y(p.this, view, z10);
            }
        };
        this.f15495k = new c.a() { // from class: com.google.android.material.textfield.n
            @Override // c2.c.a
            public final void onTouchExplorationStateChanged(boolean z10) {
                p.w(p.this, z10);
            }
        };
        this.f15499o = LongCompanionObject.MAX_VALUE;
        this.f15490f = kh.g.f(rVar.getContext(), zg.b.L, 67);
        this.f15489e = kh.g.f(rVar.getContext(), zg.b.L, 50);
        this.f15491g = kh.g.g(rVar.getContext(), zg.b.Q, ah.a.f625a);
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
        ofFloat.setInterpolator(this.f15491g);
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
        this.f15502r = E(this.f15490f, 0.0f, 1.0f);
        ValueAnimator E = E(this.f15489e, 1.0f, 0.0f);
        this.f15501q = E;
        E.addListener(new a());
    }

    private boolean G() {
        long currentTimeMillis = System.currentTimeMillis() - this.f15499o;
        if (currentTimeMillis >= 0 && currentTimeMillis <= 300) {
            return false;
        }
        return true;
    }

    private void H(boolean z10) {
        if (this.f15498n != z10) {
            this.f15498n = z10;
            this.f15502r.cancel();
            this.f15501q.start();
        }
    }

    private void I() {
        this.f15492h.setOnTouchListener(new View.OnTouchListener() { // from class: com.google.android.material.textfield.j
            @Override // android.view.View.OnTouchListener
            public final boolean onTouch(View view, MotionEvent motionEvent) {
                return p.z(p.this, view, motionEvent);
            }
        });
        if (f15488s) {
            this.f15492h.setOnDismissListener(new AutoCompleteTextView.OnDismissListener() { // from class: com.google.android.material.textfield.k
                @Override // android.widget.AutoCompleteTextView.OnDismissListener
                public final void onDismiss() {
                    p.A(p.this);
                }
            });
        }
        this.f15492h.setThreshold(0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void J() {
        if (this.f15492h == null) {
            return;
        }
        if (G()) {
            this.f15497m = false;
        }
        if (!this.f15497m) {
            if (f15488s) {
                H(!this.f15498n);
            } else {
                this.f15498n = !this.f15498n;
                r();
            }
            if (this.f15498n) {
                this.f15492h.requestFocus();
                this.f15492h.showDropDown();
                return;
            }
            this.f15492h.dismissDropDown();
            return;
        }
        this.f15497m = false;
    }

    private void K() {
        this.f15497m = true;
        this.f15499o = System.currentTimeMillis();
    }

    public static /* synthetic */ void v(p pVar) {
        boolean isPopupShowing = pVar.f15492h.isPopupShowing();
        pVar.H(isPopupShowing);
        pVar.f15497m = isPopupShowing;
    }

    public static /* synthetic */ void w(p pVar, boolean z10) {
        int i10;
        AutoCompleteTextView autoCompleteTextView = pVar.f15492h;
        if (autoCompleteTextView != null && !q.a(autoCompleteTextView)) {
            CheckableImageButton checkableImageButton = pVar.f15529d;
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
        pVar.f15529d.setAlpha(((Float) valueAnimator.getAnimatedValue()).floatValue());
    }

    public static /* synthetic */ void y(p pVar, View view, boolean z10) {
        pVar.f15496l = z10;
        pVar.r();
        if (!z10) {
            pVar.H(false);
            pVar.f15497m = false;
        }
    }

    public static /* synthetic */ boolean z(p pVar, View view, MotionEvent motionEvent) {
        pVar.getClass();
        if (motionEvent.getAction() == 1) {
            if (pVar.G()) {
                pVar.f15497m = false;
            }
            pVar.J();
            pVar.K();
        }
        return false;
    }

    @Override // com.google.android.material.textfield.s
    public void a(Editable editable) {
        if (this.f15500p.isTouchExplorationEnabled() && q.a(this.f15492h) && !this.f15529d.hasFocus()) {
            this.f15492h.dismissDropDown();
        }
        this.f15492h.post(new Runnable() { // from class: com.google.android.material.textfield.o
            @Override // java.lang.Runnable
            public final void run() {
                p.v(p.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int c() {
        return zg.i.f55685g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int d() {
        if (f15488s) {
            return zg.e.f55621h;
        }
        return zg.e.f55622i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnFocusChangeListener e() {
        return this.f15494j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnClickListener f() {
        return this.f15493i;
    }

    @Override // com.google.android.material.textfield.s
    public c.a h() {
        return this.f15495k;
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
        return this.f15496l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean l() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean m() {
        return this.f15498n;
    }

    @Override // com.google.android.material.textfield.s
    public void n(EditText editText) {
        this.f15492h = D(editText);
        I();
        this.f15526a.setErrorIconDrawable((Drawable) null);
        if (!q.a(editText) && this.f15500p.isTouchExplorationEnabled()) {
            h0.x0(this.f15529d, 2);
        }
        this.f15526a.setEndIconVisible(true);
    }

    @Override // com.google.android.material.textfield.s
    public void o(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        if (!q.a(this.f15492h)) {
            accessibilityNodeInfoCompat.w0(Spinner.class.getName());
        }
        if (accessibilityNodeInfoCompat.g0()) {
            accessibilityNodeInfoCompat.I0(null);
        }
    }

    @Override // com.google.android.material.textfield.s
    public void p(View view, AccessibilityEvent accessibilityEvent) {
        boolean z10;
        if (this.f15500p.isEnabled() && !q.a(this.f15492h)) {
            if ((accessibilityEvent.getEventType() == 32768 || accessibilityEvent.getEventType() == 8) && this.f15498n && !this.f15492h.isPopupShowing()) {
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
        this.f15500p = (AccessibilityManager) this.f15528c.getSystemService("accessibility");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean t() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void u() {
        AutoCompleteTextView autoCompleteTextView = this.f15492h;
        if (autoCompleteTextView != null) {
            autoCompleteTextView.setOnTouchListener(null);
            if (f15488s) {
                this.f15492h.setOnDismissListener(null);
            }
        }
    }
}
