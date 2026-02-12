package com.google.android.material.floatingactionbutton;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.FloatEvaluator;
import android.animation.ObjectAnimator;
import android.animation.StateListAnimator;
import android.animation.TimeInterpolator;
import android.animation.TypeEvaluator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Matrix;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.graphics.drawable.LayerDrawable;
import android.graphics.drawable.RippleDrawable;
import android.os.Build;
import android.view.View;
import android.view.ViewTreeObserver;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.Iterator;
import th.h;
import th.i;
import th.l;
import th.o;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {
    static final TimeInterpolator C = ch.a.f8278c;
    private static final int D = bh.b.J;
    private static final int E = bh.b.T;
    private static final int F = bh.b.K;
    private static final int G = bh.b.R;
    static final int[] H = {16842919, 16842910};
    static final int[] I = {16843623, 16842908, 16842910};
    static final int[] J = {16842908, 16842910};
    static final int[] K = {16843623, 16842910};
    static final int[] L = {16842910};
    static final int[] M = new int[0];
    private ViewTreeObserver.OnPreDrawListener B;

    /* renamed from: a  reason: collision with root package name */
    l f15787a;

    /* renamed from: b  reason: collision with root package name */
    h f15788b;

    /* renamed from: c  reason: collision with root package name */
    Drawable f15789c;

    /* renamed from: d  reason: collision with root package name */
    com.google.android.material.floatingactionbutton.a f15790d;

    /* renamed from: e  reason: collision with root package name */
    Drawable f15791e;

    /* renamed from: f  reason: collision with root package name */
    boolean f15792f;

    /* renamed from: h  reason: collision with root package name */
    float f15794h;

    /* renamed from: i  reason: collision with root package name */
    float f15795i;

    /* renamed from: j  reason: collision with root package name */
    float f15796j;

    /* renamed from: k  reason: collision with root package name */
    int f15797k;

    /* renamed from: l  reason: collision with root package name */
    private StateListAnimator f15798l;

    /* renamed from: m  reason: collision with root package name */
    private Animator f15799m;

    /* renamed from: n  reason: collision with root package name */
    private ch.g f15800n;

    /* renamed from: o  reason: collision with root package name */
    private ch.g f15801o;

    /* renamed from: q  reason: collision with root package name */
    private int f15803q;

    /* renamed from: s  reason: collision with root package name */
    private ArrayList f15805s;

    /* renamed from: t  reason: collision with root package name */
    private ArrayList f15806t;

    /* renamed from: u  reason: collision with root package name */
    private ArrayList f15807u;

    /* renamed from: v  reason: collision with root package name */
    final FloatingActionButton f15808v;

    /* renamed from: w  reason: collision with root package name */
    final sh.b f15809w;

    /* renamed from: g  reason: collision with root package name */
    boolean f15793g = true;

    /* renamed from: p  reason: collision with root package name */
    private float f15802p = 1.0f;

    /* renamed from: r  reason: collision with root package name */
    private int f15804r = 0;

    /* renamed from: x  reason: collision with root package name */
    private final Rect f15810x = new Rect();

    /* renamed from: y  reason: collision with root package name */
    private final RectF f15811y = new RectF();

    /* renamed from: z  reason: collision with root package name */
    private final RectF f15812z = new RectF();
    private final Matrix A = new Matrix();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        private boolean f15813a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ boolean f15814b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ g f15815c;

        a(boolean z10, g gVar) {
            this.f15814b = z10;
            this.f15815c = gVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f15813a = true;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            int i10;
            c.this.f15804r = 0;
            c.this.f15799m = null;
            if (!this.f15813a) {
                FloatingActionButton floatingActionButton = c.this.f15808v;
                boolean z10 = this.f15814b;
                if (z10) {
                    i10 = 8;
                } else {
                    i10 = 4;
                }
                floatingActionButton.b(i10, z10);
                g gVar = this.f15815c;
                if (gVar != null) {
                    gVar.b();
                }
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            c.this.f15808v.b(0, this.f15814b);
            c.this.f15804r = 1;
            c.this.f15799m = animator;
            this.f15813a = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f15817a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g f15818b;

        b(boolean z10, g gVar) {
            this.f15817a = z10;
            this.f15818b = gVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            c.this.f15804r = 0;
            c.this.f15799m = null;
            g gVar = this.f15818b;
            if (gVar != null) {
                gVar.a();
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            c.this.f15808v.b(0, this.f15817a);
            c.this.f15804r = 2;
            c.this.f15799m = animator;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.google.android.material.floatingactionbutton.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0183c extends ch.f {
        C0183c() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Matrix evaluate(float f10, Matrix matrix, Matrix matrix2) {
            c.this.f15802p = f10;
            return super.a(f10, matrix, matrix2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements TypeEvaluator {

        /* renamed from: a  reason: collision with root package name */
        final FloatEvaluator f15821a = new FloatEvaluator();

        d() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Float evaluate(float f10, Float f11, Float f12) {
            float floatValue = this.f15821a.evaluate(f10, (Number) f11, (Number) f12).floatValue();
            if (floatValue < 0.1f) {
                floatValue = 0.0f;
            }
            return Float.valueOf(floatValue);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends h {
        e(l lVar) {
            super(lVar);
        }

        @Override // th.h, android.graphics.drawable.Drawable
        public boolean isStateful() {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface f {
        void a();

        void b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface g {
        void a();

        void b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(FloatingActionButton floatingActionButton, sh.b bVar) {
        this.f15808v = floatingActionButton;
        this.f15809w = bVar;
    }

    private boolean W() {
        if (this.f15808v.isLaidOut() && !this.f15808v.isInEditMode()) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ void a(c cVar, float f10, float f11, float f12, float f13, float f14, float f15, float f16, Matrix matrix, ValueAnimator valueAnimator) {
        cVar.getClass();
        float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
        cVar.f15808v.setAlpha(ch.a.b(f10, f11, 0.0f, 0.2f, floatValue));
        cVar.f15808v.setScaleX(ch.a.a(f12, f13, floatValue));
        cVar.f15808v.setScaleY(ch.a.a(f14, f13, floatValue));
        cVar.f15802p = ch.a.a(f15, f16, floatValue);
        cVar.e(ch.a.a(f15, f16, floatValue), matrix);
        cVar.f15808v.setImageMatrix(matrix);
    }

    private void b0(ObjectAnimator objectAnimator) {
        if (Build.VERSION.SDK_INT != 26) {
            return;
        }
        objectAnimator.setEvaluator(new d());
    }

    private void e(float f10, Matrix matrix) {
        matrix.reset();
        Drawable drawable = this.f15808v.getDrawable();
        if (drawable != null && this.f15803q != 0) {
            RectF rectF = this.f15811y;
            RectF rectF2 = this.f15812z;
            rectF.set(0.0f, 0.0f, drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight());
            int i10 = this.f15803q;
            rectF2.set(0.0f, 0.0f, i10, i10);
            matrix.setRectToRect(rectF, rectF2, Matrix.ScaleToFit.CENTER);
            int i11 = this.f15803q;
            matrix.postScale(f10, f10, i11 / 2.0f, i11 / 2.0f);
        }
    }

    private AnimatorSet f(ch.g gVar, float f10, float f11, float f12) {
        ArrayList arrayList = new ArrayList();
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this.f15808v, View.ALPHA, f10);
        gVar.e(ViewProps.OPACITY).a(ofFloat);
        arrayList.add(ofFloat);
        ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this.f15808v, View.SCALE_X, f11);
        gVar.e("scale").a(ofFloat2);
        b0(ofFloat2);
        arrayList.add(ofFloat2);
        ObjectAnimator ofFloat3 = ObjectAnimator.ofFloat(this.f15808v, View.SCALE_Y, f11);
        gVar.e("scale").a(ofFloat3);
        b0(ofFloat3);
        arrayList.add(ofFloat3);
        e(f12, this.A);
        ObjectAnimator ofObject = ObjectAnimator.ofObject(this.f15808v, new ch.e(), new C0183c(), new Matrix(this.A));
        gVar.e("iconScale").a(ofObject);
        arrayList.add(ofObject);
        AnimatorSet animatorSet = new AnimatorSet();
        ch.b.a(animatorSet, arrayList);
        return animatorSet;
    }

    private AnimatorSet h(final float f10, final float f11, final float f12, int i10, int i11) {
        AnimatorSet animatorSet = new AnimatorSet();
        ArrayList arrayList = new ArrayList();
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        final float alpha = this.f15808v.getAlpha();
        final float scaleX = this.f15808v.getScaleX();
        final float scaleY = this.f15808v.getScaleY();
        final float f13 = this.f15802p;
        final Matrix matrix = new Matrix(this.A);
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.google.android.material.floatingactionbutton.b
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                c.a(c.this, alpha, f10, scaleX, f11, scaleY, f13, f12, matrix, valueAnimator);
            }
        });
        arrayList.add(ofFloat);
        ch.b.a(animatorSet, arrayList);
        animatorSet.setDuration(oh.g.f(this.f15808v.getContext(), i10, this.f15808v.getContext().getResources().getInteger(bh.g.f6869b)));
        animatorSet.setInterpolator(oh.g.g(this.f15808v.getContext(), i11, ch.a.f8277b));
        return animatorSet;
    }

    private StateListAnimator i(float f10, float f11, float f12) {
        StateListAnimator stateListAnimator = new StateListAnimator();
        stateListAnimator.addState(H, j(f10, f12));
        stateListAnimator.addState(I, j(f10, f11));
        stateListAnimator.addState(J, j(f10, f11));
        stateListAnimator.addState(K, j(f10, f11));
        AnimatorSet animatorSet = new AnimatorSet();
        ArrayList arrayList = new ArrayList();
        arrayList.add(ObjectAnimator.ofFloat(this.f15808v, ViewProps.ELEVATION, f10).setDuration(0L));
        if (Build.VERSION.SDK_INT <= 24) {
            FloatingActionButton floatingActionButton = this.f15808v;
            arrayList.add(ObjectAnimator.ofFloat(floatingActionButton, View.TRANSLATION_Z, floatingActionButton.getTranslationZ()).setDuration(100L));
        }
        arrayList.add(ObjectAnimator.ofFloat(this.f15808v, View.TRANSLATION_Z, 0.0f).setDuration(100L));
        animatorSet.playSequentially((Animator[]) arrayList.toArray(new Animator[0]));
        animatorSet.setInterpolator(C);
        stateListAnimator.addState(L, animatorSet);
        stateListAnimator.addState(M, j(0.0f, 0.0f));
        return stateListAnimator;
    }

    private Animator j(float f10, float f11) {
        AnimatorSet animatorSet = new AnimatorSet();
        animatorSet.play(ObjectAnimator.ofFloat(this.f15808v, ViewProps.ELEVATION, f10).setDuration(0L)).with(ObjectAnimator.ofFloat(this.f15808v, View.TRANSLATION_Z, f11).setDuration(100L));
        animatorSet.setInterpolator(C);
        return animatorSet;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A() {
        h hVar = this.f15788b;
        if (hVar != null) {
            i.f(this.f15808v, hVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B() {
        Z();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C() {
        ViewTreeObserver viewTreeObserver = this.f15808v.getViewTreeObserver();
        ViewTreeObserver.OnPreDrawListener onPreDrawListener = this.B;
        if (onPreDrawListener != null) {
            viewTreeObserver.removeOnPreDrawListener(onPreDrawListener);
            this.B = null;
        }
    }

    void D(float f10, float f11, float f12) {
        if (this.f15808v.getStateListAnimator() == this.f15798l) {
            StateListAnimator i10 = i(f10, f11, f12);
            this.f15798l = i10;
            this.f15808v.setStateListAnimator(i10);
        }
        if (V()) {
            Z();
        }
    }

    void E(Rect rect) {
        b2.e.h(this.f15791e, "Didn't initialize content background");
        if (V()) {
            this.f15809w.b(new InsetDrawable(this.f15791e, rect.left, rect.top, rect.right, rect.bottom));
            return;
        }
        this.f15809w.b(this.f15791e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F() {
        ArrayList arrayList = this.f15807u;
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((f) it.next()).b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G() {
        ArrayList arrayList = this.f15807u;
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((f) it.next()).a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(ColorStateList colorStateList) {
        h hVar = this.f15788b;
        if (hVar != null) {
            hVar.setTintList(colorStateList);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f15790d;
        if (aVar != null) {
            aVar.c(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(PorterDuff.Mode mode) {
        h hVar = this.f15788b;
        if (hVar != null) {
            hVar.setTintMode(mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void J(float f10) {
        if (this.f15794h != f10) {
            this.f15794h = f10;
            D(f10, this.f15795i, this.f15796j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        this.f15792f = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void L(ch.g gVar) {
        this.f15801o = gVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void M(float f10) {
        if (this.f15795i != f10) {
            this.f15795i = f10;
            D(this.f15794h, f10, this.f15796j);
        }
    }

    final void N(float f10) {
        this.f15802p = f10;
        Matrix matrix = this.A;
        e(f10, matrix);
        this.f15808v.setImageMatrix(matrix);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void O(int i10) {
        if (this.f15803q != i10) {
            this.f15803q = i10;
            Y();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void P(int i10) {
        this.f15797k = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void Q(float f10) {
        if (this.f15796j != f10) {
            this.f15796j = f10;
            D(this.f15794h, this.f15795i, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(ColorStateList colorStateList) {
        Drawable drawable = this.f15789c;
        if (drawable instanceof RippleDrawable) {
            ((RippleDrawable) drawable).setColor(rh.a.d(colorStateList));
        } else if (drawable != null) {
            drawable.setTintList(rh.a.d(colorStateList));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(boolean z10) {
        this.f15793g = z10;
        Z();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void T(l lVar) {
        this.f15787a = lVar;
        h hVar = this.f15788b;
        if (hVar != null) {
            hVar.setShapeAppearanceModel(lVar);
        }
        Drawable drawable = this.f15789c;
        if (drawable instanceof o) {
            ((o) drawable).setShapeAppearanceModel(lVar);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f15790d;
        if (aVar != null) {
            aVar.f(lVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void U(ch.g gVar) {
        this.f15800n = gVar;
    }

    boolean V() {
        if (!this.f15809w.c() && !w()) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X(g gVar, boolean z10) {
        boolean z11;
        AnimatorSet h10;
        c cVar;
        float f10;
        float f11;
        if (!z()) {
            Animator animator = this.f15799m;
            if (animator != null) {
                animator.cancel();
            }
            if (this.f15800n == null) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (W()) {
                if (this.f15808v.getVisibility() != 0) {
                    float f12 = 0.0f;
                    this.f15808v.setAlpha(0.0f);
                    FloatingActionButton floatingActionButton = this.f15808v;
                    if (z11) {
                        f10 = 0.4f;
                    } else {
                        f10 = 0.0f;
                    }
                    floatingActionButton.setScaleY(f10);
                    FloatingActionButton floatingActionButton2 = this.f15808v;
                    if (z11) {
                        f11 = 0.4f;
                    } else {
                        f11 = 0.0f;
                    }
                    floatingActionButton2.setScaleX(f11);
                    if (z11) {
                        f12 = 0.4f;
                    }
                    N(f12);
                }
                ch.g gVar2 = this.f15800n;
                if (gVar2 != null) {
                    h10 = f(gVar2, 1.0f, 1.0f, 1.0f);
                    cVar = this;
                } else {
                    h10 = h(1.0f, 1.0f, 1.0f, D, E);
                    cVar = this;
                }
                h10.addListener(new b(z10, gVar));
                ArrayList arrayList = cVar.f15805s;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        h10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                h10.start();
                return;
            }
            this.f15808v.b(0, z10);
            this.f15808v.setAlpha(1.0f);
            this.f15808v.setScaleY(1.0f);
            this.f15808v.setScaleX(1.0f);
            N(1.0f);
            if (gVar != null) {
                gVar.a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void Y() {
        N(this.f15802p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void Z() {
        Rect rect = this.f15810x;
        q(rect);
        E(rect);
        this.f15809w.a(rect.left, rect.top, rect.right, rect.bottom);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a0(float f10) {
        h hVar = this.f15788b;
        if (hVar != null) {
            hVar.e0(f10);
        }
    }

    com.google.android.material.floatingactionbutton.a g(int i10, ColorStateList colorStateList) {
        Context context = this.f15808v.getContext();
        com.google.android.material.floatingactionbutton.a aVar = new com.google.android.material.floatingactionbutton.a((l) b2.e.g(this.f15787a));
        aVar.e(androidx.core.content.a.c(context, bh.c.f6768e), androidx.core.content.a.c(context, bh.c.f6767d), androidx.core.content.a.c(context, bh.c.f6765b), androidx.core.content.a.c(context, bh.c.f6766c));
        aVar.d(i10);
        aVar.c(colorStateList);
        return aVar;
    }

    h k() {
        return new e((l) b2.e.g(this.f15787a));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Drawable l() {
        return this.f15791e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f15808v.getElevation();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n() {
        return this.f15792f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final ch.g o() {
        return this.f15801o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float p() {
        return this.f15795i;
    }

    void q(Rect rect) {
        float f10;
        if (this.f15809w.c()) {
            int u10 = u();
            if (this.f15793g) {
                f10 = m() + this.f15796j;
            } else {
                f10 = 0.0f;
            }
            int max = Math.max(u10, (int) Math.ceil(f10));
            int max2 = Math.max(u10, (int) Math.ceil(f10 * 1.5f));
            rect.set(max, max2, max, max2);
        } else if (w()) {
            int sizeDimension = (this.f15797k - this.f15808v.getSizeDimension()) / 2;
            rect.set(sizeDimension, sizeDimension, sizeDimension, sizeDimension);
        } else {
            rect.set(0, 0, 0, 0);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float r() {
        return this.f15796j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final l s() {
        return this.f15787a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final ch.g t() {
        return this.f15800n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int u() {
        if (!this.f15792f) {
            return 0;
        }
        return Math.max((this.f15797k - this.f15808v.getSizeDimension()) / 2, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(g gVar, boolean z10) {
        int i10;
        c cVar;
        AnimatorSet h10;
        if (!y()) {
            Animator animator = this.f15799m;
            if (animator != null) {
                animator.cancel();
            }
            if (W()) {
                ch.g gVar2 = this.f15801o;
                if (gVar2 != null) {
                    h10 = f(gVar2, 0.0f, 0.0f, 0.0f);
                    cVar = this;
                } else {
                    cVar = this;
                    h10 = cVar.h(0.0f, 0.4f, 0.4f, F, G);
                }
                h10.addListener(new a(z10, gVar));
                ArrayList arrayList = cVar.f15806t;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        h10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                h10.start();
                return;
            }
            FloatingActionButton floatingActionButton = this.f15808v;
            if (z10) {
                i10 = 8;
            } else {
                i10 = 4;
            }
            floatingActionButton.b(i10, z10);
            if (gVar != null) {
                gVar.b();
            }
        }
    }

    final boolean w() {
        if (this.f15792f && this.f15808v.getSizeDimension() < this.f15797k) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(ColorStateList colorStateList, PorterDuff.Mode mode, ColorStateList colorStateList2, int i10) {
        Drawable drawable;
        h k10 = k();
        this.f15788b = k10;
        k10.setTintList(colorStateList);
        if (mode != null) {
            this.f15788b.setTintMode(mode);
        }
        this.f15788b.T(this.f15808v.getContext());
        if (i10 > 0) {
            this.f15790d = g(i10, colorStateList);
            drawable = new LayerDrawable(new Drawable[]{(Drawable) b2.e.g(this.f15790d), (Drawable) b2.e.g(this.f15788b)});
        } else {
            this.f15790d = null;
            drawable = this.f15788b;
        }
        RippleDrawable rippleDrawable = new RippleDrawable(rh.a.d(colorStateList2), drawable, null);
        this.f15789c = rippleDrawable;
        this.f15791e = rippleDrawable;
    }

    boolean y() {
        if (this.f15808v.getVisibility() == 0) {
            if (this.f15804r != 1) {
                return false;
            }
            return true;
        } else if (this.f15804r == 2) {
            return false;
        } else {
            return true;
        }
    }

    boolean z() {
        if (this.f15808v.getVisibility() != 0) {
            if (this.f15804r != 2) {
                return false;
            }
            return true;
        } else if (this.f15804r == 1) {
            return false;
        } else {
            return true;
        }
    }
}
