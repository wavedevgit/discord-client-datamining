package com.google.android.material.textfield;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.text.Editable;
import android.view.View;
import android.widget.EditText;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f extends s {

    /* renamed from: e  reason: collision with root package name */
    private final int f15449e;

    /* renamed from: f  reason: collision with root package name */
    private final int f15450f;

    /* renamed from: g  reason: collision with root package name */
    private final TimeInterpolator f15451g;

    /* renamed from: h  reason: collision with root package name */
    private final TimeInterpolator f15452h;

    /* renamed from: i  reason: collision with root package name */
    private EditText f15453i;

    /* renamed from: j  reason: collision with root package name */
    private final View.OnClickListener f15454j;

    /* renamed from: k  reason: collision with root package name */
    private final View.OnFocusChangeListener f15455k;

    /* renamed from: l  reason: collision with root package name */
    private AnimatorSet f15456l;

    /* renamed from: m  reason: collision with root package name */
    private ValueAnimator f15457m;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            f.this.f15507b.a0(true);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends AnimatorListenerAdapter {
        b() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            f.this.f15507b.a0(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(r rVar) {
        super(rVar);
        this.f15454j = new View.OnClickListener() { // from class: com.google.android.material.textfield.a
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                f.v(f.this, view);
            }
        };
        this.f15455k = new View.OnFocusChangeListener() { // from class: com.google.android.material.textfield.b
            @Override // android.view.View.OnFocusChangeListener
            public final void onFocusChange(View view, boolean z10) {
                r0.A(f.this.E());
            }
        };
        this.f15449e = lh.g.f(rVar.getContext(), ah.b.L, 100);
        this.f15450f = lh.g.f(rVar.getContext(), ah.b.L, 150);
        this.f15451g = lh.g.g(rVar.getContext(), ah.b.Q, bh.a.f6754a);
        this.f15452h = lh.g.g(rVar.getContext(), ah.b.P, bh.a.f6757d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void A(boolean z10) {
        boolean z11;
        if (this.f15507b.F() == z10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z10 && !this.f15456l.isRunning()) {
            this.f15457m.cancel();
            this.f15456l.start();
            if (z11) {
                this.f15456l.end();
            }
        } else if (!z10) {
            this.f15456l.cancel();
            this.f15457m.start();
            if (z11) {
                this.f15457m.end();
            }
        }
    }

    private ValueAnimator B(float... fArr) {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(fArr);
        ofFloat.setInterpolator(this.f15451g);
        ofFloat.setDuration(this.f15449e);
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.google.android.material.textfield.c
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                f.x(f.this, valueAnimator);
            }
        });
        return ofFloat;
    }

    private ValueAnimator C() {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.8f, 1.0f);
        ofFloat.setInterpolator(this.f15452h);
        ofFloat.setDuration(this.f15450f);
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.google.android.material.textfield.e
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                f.y(f.this, valueAnimator);
            }
        });
        return ofFloat;
    }

    private void D() {
        ValueAnimator C = C();
        ValueAnimator B = B(0.0f, 1.0f);
        AnimatorSet animatorSet = new AnimatorSet();
        this.f15456l = animatorSet;
        animatorSet.playTogether(C, B);
        this.f15456l.addListener(new a());
        ValueAnimator B2 = B(1.0f, 0.0f);
        this.f15457m = B2;
        B2.addListener(new b());
    }

    private boolean E() {
        EditText editText = this.f15453i;
        if (editText != null) {
            if ((editText.hasFocus() || this.f15509d.hasFocus()) && this.f15453i.getText().length() > 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    public static /* synthetic */ void v(f fVar, View view) {
        EditText editText = fVar.f15453i;
        if (editText == null) {
            return;
        }
        Editable text = editText.getText();
        if (text != null) {
            text.clear();
        }
        fVar.r();
    }

    public static /* synthetic */ void x(f fVar, ValueAnimator valueAnimator) {
        fVar.getClass();
        fVar.f15509d.setAlpha(((Float) valueAnimator.getAnimatedValue()).floatValue());
    }

    public static /* synthetic */ void y(f fVar, ValueAnimator valueAnimator) {
        fVar.getClass();
        float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
        fVar.f15509d.setScaleX(floatValue);
        fVar.f15509d.setScaleY(floatValue);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void a(Editable editable) {
        if (this.f15507b.w() != null) {
            return;
        }
        A(E());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int c() {
        return ah.i.f778e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int d() {
        return ah.e.f718j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnFocusChangeListener e() {
        return this.f15455k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnClickListener f() {
        return this.f15454j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnFocusChangeListener g() {
        return this.f15455k;
    }

    @Override // com.google.android.material.textfield.s
    public void n(EditText editText) {
        this.f15453i = editText;
        this.f15506a.setEndIconVisible(E());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void q(boolean z10) {
        if (this.f15507b.w() == null) {
            return;
        }
        A(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void s() {
        D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void u() {
        EditText editText = this.f15453i;
        if (editText != null) {
            editText.post(new Runnable() { // from class: com.google.android.material.textfield.d
                @Override // java.lang.Runnable
                public final void run() {
                    f.this.A(true);
                }
            });
        }
    }
}
