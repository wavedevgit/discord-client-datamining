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
    private static final boolean f15468s = true;

    /* renamed from: e  reason: collision with root package name */
    private final int f15469e;

    /* renamed from: f  reason: collision with root package name */
    private final int f15470f;

    /* renamed from: g  reason: collision with root package name */
    private final TimeInterpolator f15471g;

    /* renamed from: h  reason: collision with root package name */
    private AutoCompleteTextView f15472h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnClickListener f15473i;

    /* renamed from: j  reason: collision with root package name */
    private final View.OnFocusChangeListener f15474j;

    /* renamed from: k  reason: collision with root package name */
    private final c.a f15475k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f15476l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f15477m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f15478n;

    /* renamed from: o  reason: collision with root package name */
    private long f15479o;

    /* renamed from: p  reason: collision with root package name */
    private AccessibilityManager f15480p;

    /* renamed from: q  reason: collision with root package name */
    private ValueAnimator f15481q;

    /* renamed from: r  reason: collision with root package name */
    private ValueAnimator f15482r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            p.this.r();
            p.this.f15482r.start();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(r rVar) {
        super(rVar);
        this.f15473i = new View.OnClickListener() { // from class: com.google.android.material.textfield.l
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.this.J();
            }
        };
        this.f15474j = new View.OnFocusChangeListener() { // from class: com.google.android.material.textfield.m
            @Override // android.view.View.OnFocusChangeListener
            public final void onFocusChange(View view, boolean z10) {
                p.y(p.this, view, z10);
            }
        };
        this.f15475k = new c.a() { // from class: com.google.android.material.textfield.n
            @Override // c2.c.a
            public final void onTouchExplorationStateChanged(boolean z10) {
                p.w(p.this, z10);
            }
        };
        this.f15479o = LongCompanionObject.MAX_VALUE;
        this.f15470f = lh.g.f(rVar.getContext(), ah.b.L, 67);
        this.f15469e = lh.g.f(rVar.getContext(), ah.b.L, 50);
        this.f15471g = lh.g.g(rVar.getContext(), ah.b.Q, bh.a.f6754a);
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
        ofFloat.setInterpolator(this.f15471g);
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
        this.f15482r = E(this.f15470f, 0.0f, 1.0f);
        ValueAnimator E = E(this.f15469e, 1.0f, 0.0f);
        this.f15481q = E;
        E.addListener(new a());
    }

    private boolean G() {
        long currentTimeMillis = System.currentTimeMillis() - this.f15479o;
        if (currentTimeMillis >= 0 && currentTimeMillis <= 300) {
            return false;
        }
        return true;
    }

    private void H(boolean z10) {
        if (this.f15478n != z10) {
            this.f15478n = z10;
            this.f15482r.cancel();
            this.f15481q.start();
        }
    }

    private void I() {
        this.f15472h.setOnTouchListener(new View.OnTouchListener() { // from class: com.google.android.material.textfield.j
            @Override // android.view.View.OnTouchListener
            public final boolean onTouch(View view, MotionEvent motionEvent) {
                return p.z(p.this, view, motionEvent);
            }
        });
        if (f15468s) {
            this.f15472h.setOnDismissListener(new AutoCompleteTextView.OnDismissListener() { // from class: com.google.android.material.textfield.k
                @Override // android.widget.AutoCompleteTextView.OnDismissListener
                public final void onDismiss() {
                    p.A(p.this);
                }
            });
        }
        this.f15472h.setThreshold(0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void J() {
        if (this.f15472h == null) {
            return;
        }
        if (G()) {
            this.f15477m = false;
        }
        if (!this.f15477m) {
            if (f15468s) {
                H(!this.f15478n);
            } else {
                this.f15478n = !this.f15478n;
                r();
            }
            if (this.f15478n) {
                this.f15472h.requestFocus();
                this.f15472h.showDropDown();
                return;
            }
            this.f15472h.dismissDropDown();
            return;
        }
        this.f15477m = false;
    }

    private void K() {
        this.f15477m = true;
        this.f15479o = System.currentTimeMillis();
    }

    public static /* synthetic */ void v(p pVar) {
        boolean isPopupShowing = pVar.f15472h.isPopupShowing();
        pVar.H(isPopupShowing);
        pVar.f15477m = isPopupShowing;
    }

    public static /* synthetic */ void w(p pVar, boolean z10) {
        int i10;
        AutoCompleteTextView autoCompleteTextView = pVar.f15472h;
        if (autoCompleteTextView != null && !q.a(autoCompleteTextView)) {
            CheckableImageButton checkableImageButton = pVar.f15509d;
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
        pVar.f15509d.setAlpha(((Float) valueAnimator.getAnimatedValue()).floatValue());
    }

    public static /* synthetic */ void y(p pVar, View view, boolean z10) {
        pVar.f15476l = z10;
        pVar.r();
        if (!z10) {
            pVar.H(false);
            pVar.f15477m = false;
        }
    }

    public static /* synthetic */ boolean z(p pVar, View view, MotionEvent motionEvent) {
        pVar.getClass();
        if (motionEvent.getAction() == 1) {
            if (pVar.G()) {
                pVar.f15477m = false;
            }
            pVar.J();
            pVar.K();
        }
        return false;
    }

    @Override // com.google.android.material.textfield.s
    public void a(Editable editable) {
        if (this.f15480p.isTouchExplorationEnabled() && q.a(this.f15472h) && !this.f15509d.hasFocus()) {
            this.f15472h.dismissDropDown();
        }
        this.f15472h.post(new Runnable() { // from class: com.google.android.material.textfield.o
            @Override // java.lang.Runnable
            public final void run() {
                p.v(p.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int c() {
        return ah.i.f780g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int d() {
        if (f15468s) {
            return ah.e.f716h;
        }
        return ah.e.f717i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnFocusChangeListener e() {
        return this.f15474j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnClickListener f() {
        return this.f15473i;
    }

    @Override // com.google.android.material.textfield.s
    public c.a h() {
        return this.f15475k;
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
        return this.f15476l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean l() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean m() {
        return this.f15478n;
    }

    @Override // com.google.android.material.textfield.s
    public void n(EditText editText) {
        this.f15472h = D(editText);
        I();
        this.f15506a.setErrorIconDrawable((Drawable) null);
        if (!q.a(editText) && this.f15480p.isTouchExplorationEnabled()) {
            h0.x0(this.f15509d, 2);
        }
        this.f15506a.setEndIconVisible(true);
    }

    @Override // com.google.android.material.textfield.s
    public void o(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        if (!q.a(this.f15472h)) {
            accessibilityNodeInfoCompat.w0(Spinner.class.getName());
        }
        if (accessibilityNodeInfoCompat.g0()) {
            accessibilityNodeInfoCompat.I0(null);
        }
    }

    @Override // com.google.android.material.textfield.s
    public void p(View view, AccessibilityEvent accessibilityEvent) {
        boolean z10;
        if (this.f15480p.isEnabled() && !q.a(this.f15472h)) {
            if ((accessibilityEvent.getEventType() == 32768 || accessibilityEvent.getEventType() == 8) && this.f15478n && !this.f15472h.isPopupShowing()) {
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
        this.f15480p = (AccessibilityManager) this.f15508c.getSystemService("accessibility");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean t() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void u() {
        AutoCompleteTextView autoCompleteTextView = this.f15472h;
        if (autoCompleteTextView != null) {
            autoCompleteTextView.setOnTouchListener(null);
            if (f15468s) {
                this.f15472h.setOnDismissListener(null);
            }
        }
    }
}
