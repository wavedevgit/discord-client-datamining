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
    l f15786a;

    /* renamed from: b  reason: collision with root package name */
    h f15787b;

    /* renamed from: c  reason: collision with root package name */
    Drawable f15788c;

    /* renamed from: d  reason: collision with root package name */
    com.google.android.material.floatingactionbutton.a f15789d;

    /* renamed from: e  reason: collision with root package name */
    Drawable f15790e;

    /* renamed from: f  reason: collision with root package name */
    boolean f15791f;

    /* renamed from: h  reason: collision with root package name */
    float f15793h;

    /* renamed from: i  reason: collision with root package name */
    float f15794i;

    /* renamed from: j  reason: collision with root package name */
    float f15795j;

    /* renamed from: k  reason: collision with root package name */
    int f15796k;

    /* renamed from: l  reason: collision with root package name */
    private StateListAnimator f15797l;

    /* renamed from: m  reason: collision with root package name */
    private Animator f15798m;

    /* renamed from: n  reason: collision with root package name */
    private ch.g f15799n;

    /* renamed from: o  reason: collision with root package name */
    private ch.g f15800o;

    /* renamed from: q  reason: collision with root package name */
    private int f15802q;

    /* renamed from: s  reason: collision with root package name */
    private ArrayList f15804s;

    /* renamed from: t  reason: collision with root package name */
    private ArrayList f15805t;

    /* renamed from: u  reason: collision with root package name */
    private ArrayList f15806u;

    /* renamed from: v  reason: collision with root package name */
    final FloatingActionButton f15807v;

    /* renamed from: w  reason: collision with root package name */
    final sh.b f15808w;

    /* renamed from: g  reason: collision with root package name */
    boolean f15792g = true;

    /* renamed from: p  reason: collision with root package name */
    private float f15801p = 1.0f;

    /* renamed from: r  reason: collision with root package name */
    private int f15803r = 0;

    /* renamed from: x  reason: collision with root package name */
    private final Rect f15809x = new Rect();

    /* renamed from: y  reason: collision with root package name */
    private final RectF f15810y = new RectF();

    /* renamed from: z  reason: collision with root package name */
    private final RectF f15811z = new RectF();
    private final Matrix A = new Matrix();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        private boolean f15812a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ boolean f15813b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ g f15814c;

        a(boolean z10, g gVar) {
            this.f15813b = z10;
            this.f15814c = gVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f15812a = true;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            int i10;
            c.this.f15803r = 0;
            c.this.f15798m = null;
            if (!this.f15812a) {
                FloatingActionButton floatingActionButton = c.this.f15807v;
                boolean z10 = this.f15813b;
                if (z10) {
                    i10 = 8;
                } else {
                    i10 = 4;
                }
                floatingActionButton.b(i10, z10);
                g gVar = this.f15814c;
                if (gVar != null) {
                    gVar.b();
                }
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            c.this.f15807v.b(0, this.f15813b);
            c.this.f15803r = 1;
            c.this.f15798m = animator;
            this.f15812a = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f15816a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g f15817b;

        b(boolean z10, g gVar) {
            this.f15816a = z10;
            this.f15817b = gVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            c.this.f15803r = 0;
            c.this.f15798m = null;
            g gVar = this.f15817b;
            if (gVar != null) {
                gVar.a();
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            c.this.f15807v.b(0, this.f15816a);
            c.this.f15803r = 2;
            c.this.f15798m = animator;
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
            c.this.f15801p = f10;
            return super.a(f10, matrix, matrix2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements TypeEvaluator {

        /* renamed from: a  reason: collision with root package name */
        final FloatEvaluator f15820a = new FloatEvaluator();

        d() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Float evaluate(float f10, Float f11, Float f12) {
            float floatValue = this.f15820a.evaluate(f10, (Number) f11, (Number) f12).floatValue();
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
        this.f15807v = floatingActionButton;
        this.f15808w = bVar;
    }

    private boolean W() {
        if (this.f15807v.isLaidOut() && !this.f15807v.isInEditMode()) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ void a(c cVar, float f10, float f11, float f12, float f13, float f14, float f15, float f16, Matrix matrix, ValueAnimator valueAnimator) {
        cVar.getClass();
        float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
        cVar.f15807v.setAlpha(ch.a.b(f10, f11, 0.0f, 0.2f, floatValue));
        cVar.f15807v.setScaleX(ch.a.a(f12, f13, floatValue));
        cVar.f15807v.setScaleY(ch.a.a(f14, f13, floatValue));
        cVar.f15801p = ch.a.a(f15, f16, floatValue);
        cVar.e(ch.a.a(f15, f16, floatValue), matrix);
        cVar.f15807v.setImageMatrix(matrix);
    }

    private void b0(ObjectAnimator objectAnimator) {
        if (Build.VERSION.SDK_INT != 26) {
            return;
        }
        objectAnimator.setEvaluator(new d());
    }

    private void e(float f10, Matrix matrix) {
        matrix.reset();
        Drawable drawable = this.f15807v.getDrawable();
        if (drawable != null && this.f15802q != 0) {
            RectF rectF = this.f15810y;
            RectF rectF2 = this.f15811z;
            rectF.set(0.0f, 0.0f, drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight());
            int i10 = this.f15802q;
            rectF2.set(0.0f, 0.0f, i10, i10);
            matrix.setRectToRect(rectF, rectF2, Matrix.ScaleToFit.CENTER);
            int i11 = this.f15802q;
            matrix.postScale(f10, f10, i11 / 2.0f, i11 / 2.0f);
        }
    }

    private AnimatorSet f(ch.g gVar, float f10, float f11, float f12) {
        ArrayList arrayList = new ArrayList();
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this.f15807v, View.ALPHA, f10);
        gVar.e(ViewProps.OPACITY).a(ofFloat);
        arrayList.add(ofFloat);
        ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this.f15807v, View.SCALE_X, f11);
        gVar.e("scale").a(ofFloat2);
        b0(ofFloat2);
        arrayList.add(ofFloat2);
        ObjectAnimator ofFloat3 = ObjectAnimator.ofFloat(this.f15807v, View.SCALE_Y, f11);
        gVar.e("scale").a(ofFloat3);
        b0(ofFloat3);
        arrayList.add(ofFloat3);
        e(f12, this.A);
        ObjectAnimator ofObject = ObjectAnimator.ofObject(this.f15807v, new ch.e(), new C0183c(), new Matrix(this.A));
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
        final float alpha = this.f15807v.getAlpha();
        final float scaleX = this.f15807v.getScaleX();
        final float scaleY = this.f15807v.getScaleY();
        final float f13 = this.f15801p;
        final Matrix matrix = new Matrix(this.A);
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.google.android.material.floatingactionbutton.b
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                c.a(c.this, alpha, f10, scaleX, f11, scaleY, f13, f12, matrix, valueAnimator);
            }
        });
        arrayList.add(ofFloat);
        ch.b.a(animatorSet, arrayList);
        animatorSet.setDuration(oh.g.f(this.f15807v.getContext(), i10, this.f15807v.getContext().getResources().getInteger(bh.g.f6869b)));
        animatorSet.setInterpolator(oh.g.g(this.f15807v.getContext(), i11, ch.a.f8277b));
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
        arrayList.add(ObjectAnimator.ofFloat(this.f15807v, ViewProps.ELEVATION, f10).setDuration(0L));
        if (Build.VERSION.SDK_INT <= 24) {
            FloatingActionButton floatingActionButton = this.f15807v;
            arrayList.add(ObjectAnimator.ofFloat(floatingActionButton, View.TRANSLATION_Z, floatingActionButton.getTranslationZ()).setDuration(100L));
        }
        arrayList.add(ObjectAnimator.ofFloat(this.f15807v, View.TRANSLATION_Z, 0.0f).setDuration(100L));
        animatorSet.playSequentially((Animator[]) arrayList.toArray(new Animator[0]));
        animatorSet.setInterpolator(C);
        stateListAnimator.addState(L, animatorSet);
        stateListAnimator.addState(M, j(0.0f, 0.0f));
        return stateListAnimator;
    }

    private Animator j(float f10, float f11) {
        AnimatorSet animatorSet = new AnimatorSet();
        animatorSet.play(ObjectAnimator.ofFloat(this.f15807v, ViewProps.ELEVATION, f10).setDuration(0L)).with(ObjectAnimator.ofFloat(this.f15807v, View.TRANSLATION_Z, f11).setDuration(100L));
        animatorSet.setInterpolator(C);
        return animatorSet;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A() {
        h hVar = this.f15787b;
        if (hVar != null) {
            i.f(this.f15807v, hVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B() {
        Z();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C() {
        ViewTreeObserver viewTreeObserver = this.f15807v.getViewTreeObserver();
        ViewTreeObserver.OnPreDrawListener onPreDrawListener = this.B;
        if (onPreDrawListener != null) {
            viewTreeObserver.removeOnPreDrawListener(onPreDrawListener);
            this.B = null;
        }
    }

    void D(float f10, float f11, float f12) {
        if (this.f15807v.getStateListAnimator() == this.f15797l) {
            StateListAnimator i10 = i(f10, f11, f12);
            this.f15797l = i10;
            this.f15807v.setStateListAnimator(i10);
        }
        if (V()) {
            Z();
        }
    }

    void E(Rect rect) {
        b2.e.h(this.f15790e, "Didn't initialize content background");
        if (V()) {
            this.f15808w.b(new InsetDrawable(this.f15790e, rect.left, rect.top, rect.right, rect.bottom));
            return;
        }
        this.f15808w.b(this.f15790e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F() {
        ArrayList arrayList = this.f15806u;
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((f) it.next()).b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G() {
        ArrayList arrayList = this.f15806u;
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((f) it.next()).a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(ColorStateList colorStateList) {
        h hVar = this.f15787b;
        if (hVar != null) {
            hVar.setTintList(colorStateList);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f15789d;
        if (aVar != null) {
            aVar.c(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(PorterDuff.Mode mode) {
        h hVar = this.f15787b;
        if (hVar != null) {
            hVar.setTintMode(mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void J(float f10) {
        if (this.f15793h != f10) {
            this.f15793h = f10;
            D(f10, this.f15794i, this.f15795j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        this.f15791f = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void L(ch.g gVar) {
        this.f15800o = gVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void M(float f10) {
        if (this.f15794i != f10) {
            this.f15794i = f10;
            D(this.f15793h, f10, this.f15795j);
        }
    }

    final void N(float f10) {
        this.f15801p = f10;
        Matrix matrix = this.A;
        e(f10, matrix);
        this.f15807v.setImageMatrix(matrix);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void O(int i10) {
        if (this.f15802q != i10) {
            this.f15802q = i10;
            Y();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void P(int i10) {
        this.f15796k = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void Q(float f10) {
        if (this.f15795j != f10) {
            this.f15795j = f10;
            D(this.f15793h, this.f15794i, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(ColorStateList colorStateList) {
        Drawable drawable = this.f15788c;
        if (drawable instanceof RippleDrawable) {
            ((RippleDrawable) drawable).setColor(rh.a.d(colorStateList));
        } else if (drawable != null) {
            drawable.setTintList(rh.a.d(colorStateList));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(boolean z10) {
        this.f15792g = z10;
        Z();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void T(l lVar) {
        this.f15786a = lVar;
        h hVar = this.f15787b;
        if (hVar != null) {
            hVar.setShapeAppearanceModel(lVar);
        }
        Drawable drawable = this.f15788c;
        if (drawable instanceof o) {
            ((o) drawable).setShapeAppearanceModel(lVar);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f15789d;
        if (aVar != null) {
            aVar.f(lVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void U(ch.g gVar) {
        this.f15799n = gVar;
    }

    boolean V() {
        if (!this.f15808w.c() && !w()) {
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
            Animator animator = this.f15798m;
            if (animator != null) {
                animator.cancel();
            }
            if (this.f15799n == null) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (W()) {
                if (this.f15807v.getVisibility() != 0) {
                    float f12 = 0.0f;
                    this.f15807v.setAlpha(0.0f);
                    FloatingActionButton floatingActionButton = this.f15807v;
                    if (z11) {
                        f10 = 0.4f;
                    } else {
                        f10 = 0.0f;
                    }
                    floatingActionButton.setScaleY(f10);
                    FloatingActionButton floatingActionButton2 = this.f15807v;
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
                ch.g gVar2 = this.f15799n;
                if (gVar2 != null) {
                    h10 = f(gVar2, 1.0f, 1.0f, 1.0f);
                    cVar = this;
                } else {
                    h10 = h(1.0f, 1.0f, 1.0f, D, E);
                    cVar = this;
                }
                h10.addListener(new b(z10, gVar));
                ArrayList arrayList = cVar.f15804s;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        h10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                h10.start();
                return;
            }
            this.f15807v.b(0, z10);
            this.f15807v.setAlpha(1.0f);
            this.f15807v.setScaleY(1.0f);
            this.f15807v.setScaleX(1.0f);
            N(1.0f);
            if (gVar != null) {
                gVar.a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void Y() {
        N(this.f15801p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void Z() {
        Rect rect = this.f15809x;
        q(rect);
        E(rect);
        this.f15808w.a(rect.left, rect.top, rect.right, rect.bottom);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a0(float f10) {
        h hVar = this.f15787b;
        if (hVar != null) {
            hVar.e0(f10);
        }
    }

    com.google.android.material.floatingactionbutton.a g(int i10, ColorStateList colorStateList) {
        Context context = this.f15807v.getContext();
        com.google.android.material.floatingactionbutton.a aVar = new com.google.android.material.floatingactionbutton.a((l) b2.e.g(this.f15786a));
        aVar.e(androidx.core.content.a.c(context, bh.c.f6768e), androidx.core.content.a.c(context, bh.c.f6767d), androidx.core.content.a.c(context, bh.c.f6765b), androidx.core.content.a.c(context, bh.c.f6766c));
        aVar.d(i10);
        aVar.c(colorStateList);
        return aVar;
    }

    h k() {
        return new e((l) b2.e.g(this.f15786a));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Drawable l() {
        return this.f15790e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f15807v.getElevation();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n() {
        return this.f15791f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final ch.g o() {
        return this.f15800o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float p() {
        return this.f15794i;
    }

    void q(Rect rect) {
        float f10;
        if (this.f15808w.c()) {
            int u10 = u();
            if (this.f15792g) {
                f10 = m() + this.f15795j;
            } else {
                f10 = 0.0f;
            }
            int max = Math.max(u10, (int) Math.ceil(f10));
            int max2 = Math.max(u10, (int) Math.ceil(f10 * 1.5f));
            rect.set(max, max2, max, max2);
        } else if (w()) {
            int sizeDimension = (this.f15796k - this.f15807v.getSizeDimension()) / 2;
            rect.set(sizeDimension, sizeDimension, sizeDimension, sizeDimension);
        } else {
            rect.set(0, 0, 0, 0);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float r() {
        return this.f15795j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final l s() {
        return this.f15786a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final ch.g t() {
        return this.f15799n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int u() {
        if (!this.f15791f) {
            return 0;
        }
        return Math.max((this.f15796k - this.f15807v.getSizeDimension()) / 2, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(g gVar, boolean z10) {
        int i10;
        c cVar;
        AnimatorSet h10;
        if (!y()) {
            Animator animator = this.f15798m;
            if (animator != null) {
                animator.cancel();
            }
            if (W()) {
                ch.g gVar2 = this.f15800o;
                if (gVar2 != null) {
                    h10 = f(gVar2, 0.0f, 0.0f, 0.0f);
                    cVar = this;
                } else {
                    cVar = this;
                    h10 = cVar.h(0.0f, 0.4f, 0.4f, F, G);
                }
                h10.addListener(new a(z10, gVar));
                ArrayList arrayList = cVar.f15805t;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        h10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                h10.start();
                return;
            }
            FloatingActionButton floatingActionButton = this.f15807v;
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
        if (this.f15791f && this.f15807v.getSizeDimension() < this.f15796k) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(ColorStateList colorStateList, PorterDuff.Mode mode, ColorStateList colorStateList2, int i10) {
        Drawable drawable;
        h k10 = k();
        this.f15787b = k10;
        k10.setTintList(colorStateList);
        if (mode != null) {
            this.f15787b.setTintMode(mode);
        }
        this.f15787b.T(this.f15807v.getContext());
        if (i10 > 0) {
            this.f15789d = g(i10, colorStateList);
            drawable = new LayerDrawable(new Drawable[]{(Drawable) b2.e.g(this.f15789d), (Drawable) b2.e.g(this.f15787b)});
        } else {
            this.f15789d = null;
            drawable = this.f15787b;
        }
        RippleDrawable rippleDrawable = new RippleDrawable(rh.a.d(colorStateList2), drawable, null);
        this.f15788c = rippleDrawable;
        this.f15790e = rippleDrawable;
    }

    boolean y() {
        if (this.f15807v.getVisibility() == 0) {
            if (this.f15803r != 1) {
                return false;
            }
            return true;
        } else if (this.f15803r == 2) {
            return false;
        } else {
            return true;
        }
    }

    boolean z() {
        if (this.f15807v.getVisibility() != 0) {
            if (this.f15803r != 2) {
                return false;
            }
            return true;
        } else if (this.f15803r == 1) {
            return false;
        } else {
            return true;
        }
    }
}
