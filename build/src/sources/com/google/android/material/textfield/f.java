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
    private final int f16339e;

    /* renamed from: f  reason: collision with root package name */
    private final int f16340f;

    /* renamed from: g  reason: collision with root package name */
    private final TimeInterpolator f16341g;

    /* renamed from: h  reason: collision with root package name */
    private final TimeInterpolator f16342h;

    /* renamed from: i  reason: collision with root package name */
    private EditText f16343i;

    /* renamed from: j  reason: collision with root package name */
    private final View.OnClickListener f16344j;

    /* renamed from: k  reason: collision with root package name */
    private final View.OnFocusChangeListener f16345k;

    /* renamed from: l  reason: collision with root package name */
    private AnimatorSet f16346l;

    /* renamed from: m  reason: collision with root package name */
    private ValueAnimator f16347m;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            f.this.f16396b.a0(true);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends AnimatorListenerAdapter {
        b() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            f.this.f16396b.a0(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(r rVar) {
        super(rVar);
        this.f16344j = new View.OnClickListener() { // from class: com.google.android.material.textfield.a
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                f.v(f.this, view);
            }
        };
        this.f16345k = new View.OnFocusChangeListener() { // from class: com.google.android.material.textfield.b
            @Override // android.view.View.OnFocusChangeListener
            public final void onFocusChange(View view, boolean z10) {
                r0.A(f.this.E());
            }
        };
        this.f16339e = oh.g.f(rVar.getContext(), bh.b.P, 100);
        this.f16340f = oh.g.f(rVar.getContext(), bh.b.P, 150);
        this.f16341g = oh.g.g(rVar.getContext(), bh.b.U, ch.a.f8276a);
        this.f16342h = oh.g.g(rVar.getContext(), bh.b.T, ch.a.f8279d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void A(boolean z10) {
        boolean z11;
        if (this.f16396b.F() == z10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z10 && !this.f16346l.isRunning()) {
            this.f16347m.cancel();
            this.f16346l.start();
            if (z11) {
                this.f16346l.end();
            }
        } else if (!z10) {
            this.f16346l.cancel();
            this.f16347m.start();
            if (z11) {
                this.f16347m.end();
            }
        }
    }

    private ValueAnimator B(float... fArr) {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(fArr);
        ofFloat.setInterpolator(this.f16341g);
        ofFloat.setDuration(this.f16339e);
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
        ofFloat.setInterpolator(this.f16342h);
        ofFloat.setDuration(this.f16340f);
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
        this.f16346l = animatorSet;
        animatorSet.playTogether(C, B);
        this.f16346l.addListener(new a());
        ValueAnimator B2 = B(1.0f, 0.0f);
        this.f16347m = B2;
        B2.addListener(new b());
    }

    private boolean E() {
        EditText editText = this.f16343i;
        if (editText != null) {
            if ((editText.hasFocus() || this.f16398d.hasFocus()) && this.f16343i.getText().length() > 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    public static /* synthetic */ void v(f fVar, View view) {
        EditText editText = fVar.f16343i;
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
        fVar.f16398d.setAlpha(((Float) valueAnimator.getAnimatedValue()).floatValue());
    }

    public static /* synthetic */ void y(f fVar, ValueAnimator valueAnimator) {
        fVar.getClass();
        float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
        fVar.f16398d.setScaleX(floatValue);
        fVar.f16398d.setScaleY(floatValue);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void a(Editable editable) {
        if (this.f16396b.w() != null) {
            return;
        }
        A(E());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int c() {
        return bh.j.f6904e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int d() {
        return bh.e.f6834i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnFocusChangeListener e() {
        return this.f16345k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnClickListener f() {
        return this.f16344j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnFocusChangeListener g() {
        return this.f16345k;
    }

    @Override // com.google.android.material.textfield.s
    public void n(EditText editText) {
        this.f16343i = editText;
        this.f16395a.setEndIconVisible(E());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void q(boolean z10) {
        if (this.f16396b.w() == null) {
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
        EditText editText = this.f16343i;
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
