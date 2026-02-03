package com.google.android.material.floatingactionbutton;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.FloatEvaluator;
import android.animation.ObjectAnimator;
import android.animation.TimeInterpolator;
import android.animation.TypeEvaluator;
import android.animation.ValueAnimator;
import android.content.res.ColorStateList;
import android.graphics.Matrix;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.os.Build;
import android.view.View;
import android.view.ViewTreeObserver;
import androidx.core.view.h0;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.Iterator;
import oh.n;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    static final TimeInterpolator D = zg.a.f55808c;
    private static final int E = yg.b.F;
    private static final int F = yg.b.P;
    private static final int G = yg.b.G;
    private static final int H = yg.b.N;
    static final int[] I = {16842919, 16842910};
    static final int[] J = {16843623, 16842908, 16842910};
    static final int[] K = {16842908, 16842910};
    static final int[] L = {16843623, 16842910};
    static final int[] M = {16842910};
    static final int[] N = new int[0];
    private ViewTreeObserver.OnPreDrawListener C;

    /* renamed from: a  reason: collision with root package name */
    oh.k f15673a;

    /* renamed from: b  reason: collision with root package name */
    oh.g f15674b;

    /* renamed from: c  reason: collision with root package name */
    Drawable f15675c;

    /* renamed from: d  reason: collision with root package name */
    com.google.android.material.floatingactionbutton.a f15676d;

    /* renamed from: e  reason: collision with root package name */
    Drawable f15677e;

    /* renamed from: f  reason: collision with root package name */
    boolean f15678f;

    /* renamed from: h  reason: collision with root package name */
    float f15680h;

    /* renamed from: i  reason: collision with root package name */
    float f15681i;

    /* renamed from: j  reason: collision with root package name */
    float f15682j;

    /* renamed from: k  reason: collision with root package name */
    int f15683k;

    /* renamed from: l  reason: collision with root package name */
    private final com.google.android.material.internal.g f15684l;

    /* renamed from: m  reason: collision with root package name */
    private Animator f15685m;

    /* renamed from: n  reason: collision with root package name */
    private zg.g f15686n;

    /* renamed from: o  reason: collision with root package name */
    private zg.g f15687o;

    /* renamed from: p  reason: collision with root package name */
    private float f15688p;

    /* renamed from: r  reason: collision with root package name */
    private int f15690r;

    /* renamed from: t  reason: collision with root package name */
    private ArrayList f15692t;

    /* renamed from: u  reason: collision with root package name */
    private ArrayList f15693u;

    /* renamed from: v  reason: collision with root package name */
    private ArrayList f15694v;

    /* renamed from: w  reason: collision with root package name */
    final FloatingActionButton f15695w;

    /* renamed from: x  reason: collision with root package name */
    final nh.b f15696x;

    /* renamed from: g  reason: collision with root package name */
    boolean f15679g = true;

    /* renamed from: q  reason: collision with root package name */
    private float f15689q = 1.0f;

    /* renamed from: s  reason: collision with root package name */
    private int f15691s = 0;

    /* renamed from: y  reason: collision with root package name */
    private final Rect f15697y = new Rect();

    /* renamed from: z  reason: collision with root package name */
    private final RectF f15698z = new RectF();
    private final RectF A = new RectF();
    private final Matrix B = new Matrix();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        private boolean f15699a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ boolean f15700b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ k f15701c;

        a(boolean z10, k kVar) {
            this.f15700b = z10;
            this.f15701c = kVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f15699a = true;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            int i10;
            b.this.f15691s = 0;
            b.this.f15685m = null;
            if (!this.f15699a) {
                FloatingActionButton floatingActionButton = b.this.f15695w;
                boolean z10 = this.f15700b;
                if (z10) {
                    i10 = 8;
                } else {
                    i10 = 4;
                }
                floatingActionButton.b(i10, z10);
                k kVar = this.f15701c;
                if (kVar != null) {
                    kVar.b();
                }
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            b.this.f15695w.b(0, this.f15700b);
            b.this.f15691s = 1;
            b.this.f15685m = animator;
            this.f15699a = false;
        }
    }

    /* renamed from: com.google.android.material.floatingactionbutton.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0188b extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f15703a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ k f15704b;

        C0188b(boolean z10, k kVar) {
            this.f15703a = z10;
            this.f15704b = kVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            b.this.f15691s = 0;
            b.this.f15685m = null;
            k kVar = this.f15704b;
            if (kVar != null) {
                kVar.a();
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            b.this.f15695w.b(0, this.f15703a);
            b.this.f15691s = 2;
            b.this.f15685m = animator;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends zg.f {
        c() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Matrix evaluate(float f10, Matrix matrix, Matrix matrix2) {
            b.this.f15689q = f10;
            return super.a(f10, matrix, matrix2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ float f15707a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ float f15708b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ float f15709c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f15710d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f15711e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ float f15712f;

        /* renamed from: g  reason: collision with root package name */
        final /* synthetic */ float f15713g;

        /* renamed from: h  reason: collision with root package name */
        final /* synthetic */ Matrix f15714h;

        d(float f10, float f11, float f12, float f13, float f14, float f15, float f16, Matrix matrix) {
            this.f15707a = f10;
            this.f15708b = f11;
            this.f15709c = f12;
            this.f15710d = f13;
            this.f15711e = f14;
            this.f15712f = f15;
            this.f15713g = f16;
            this.f15714h = matrix;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
            b.this.f15695w.setAlpha(zg.a.b(this.f15707a, this.f15708b, 0.0f, 0.2f, floatValue));
            b.this.f15695w.setScaleX(zg.a.a(this.f15709c, this.f15710d, floatValue));
            b.this.f15695w.setScaleY(zg.a.a(this.f15711e, this.f15710d, floatValue));
            b.this.f15689q = zg.a.a(this.f15712f, this.f15713g, floatValue);
            b.this.e(zg.a.a(this.f15712f, this.f15713g, floatValue), this.f15714h);
            b.this.f15695w.setImageMatrix(this.f15714h);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements TypeEvaluator {

        /* renamed from: a  reason: collision with root package name */
        FloatEvaluator f15716a = new FloatEvaluator();

        e() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Float evaluate(float f10, Float f11, Float f12) {
            float floatValue = this.f15716a.evaluate(f10, (Number) f11, (Number) f12).floatValue();
            if (floatValue < 0.1f) {
                floatValue = 0.0f;
            }
            return Float.valueOf(floatValue);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements ViewTreeObserver.OnPreDrawListener {
        f() {
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            b.this.E();
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class g extends m {
        g() {
            super(b.this, null);
        }

        @Override // com.google.android.material.floatingactionbutton.b.m
        protected float a() {
            return 0.0f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class h extends m {
        h() {
            super(b.this, null);
        }

        @Override // com.google.android.material.floatingactionbutton.b.m
        protected float a() {
            b bVar = b.this;
            return bVar.f15680h + bVar.f15681i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class i extends m {
        i() {
            super(b.this, null);
        }

        @Override // com.google.android.material.floatingactionbutton.b.m
        protected float a() {
            b bVar = b.this;
            return bVar.f15680h + bVar.f15682j;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface j {
        void a();

        void b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface k {
        void a();

        void b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class l extends m {
        l() {
            super(b.this, null);
        }

        @Override // com.google.android.material.floatingactionbutton.b.m
        protected float a() {
            return b.this.f15680h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private abstract class m extends AnimatorListenerAdapter implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        private boolean f15723a;

        /* renamed from: b  reason: collision with root package name */
        private float f15724b;

        /* renamed from: c  reason: collision with root package name */
        private float f15725c;

        private m() {
        }

        protected abstract float a();

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            b.this.d0((int) this.f15725c);
            this.f15723a = false;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float w10;
            if (!this.f15723a) {
                oh.g gVar = b.this.f15674b;
                if (gVar == null) {
                    w10 = 0.0f;
                } else {
                    w10 = gVar.w();
                }
                this.f15724b = w10;
                this.f15725c = a();
                this.f15723a = true;
            }
            b bVar = b.this;
            float f10 = this.f15724b;
            bVar.d0((int) (f10 + ((this.f15725c - f10) * valueAnimator.getAnimatedFraction())));
        }

        /* synthetic */ m(b bVar, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(FloatingActionButton floatingActionButton, nh.b bVar) {
        this.f15695w = floatingActionButton;
        this.f15696x = bVar;
        com.google.android.material.internal.g gVar = new com.google.android.material.internal.g();
        this.f15684l = gVar;
        gVar.a(I, h(new i()));
        gVar.a(J, h(new h()));
        gVar.a(K, h(new h()));
        gVar.a(L, h(new h()));
        gVar.a(M, h(new l()));
        gVar.a(N, h(new g()));
        this.f15688p = floatingActionButton.getRotation();
    }

    private boolean X() {
        if (h0.S(this.f15695w) && !this.f15695w.isInEditMode()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(float f10, Matrix matrix) {
        matrix.reset();
        Drawable drawable = this.f15695w.getDrawable();
        if (drawable != null && this.f15690r != 0) {
            RectF rectF = this.f15698z;
            RectF rectF2 = this.A;
            rectF.set(0.0f, 0.0f, drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight());
            int i10 = this.f15690r;
            rectF2.set(0.0f, 0.0f, i10, i10);
            matrix.setRectToRect(rectF, rectF2, Matrix.ScaleToFit.CENTER);
            int i11 = this.f15690r;
            matrix.postScale(f10, f10, i11 / 2.0f, i11 / 2.0f);
        }
    }

    private void e0(ObjectAnimator objectAnimator) {
        if (Build.VERSION.SDK_INT != 26) {
            return;
        }
        objectAnimator.setEvaluator(new e());
    }

    private AnimatorSet f(zg.g gVar, float f10, float f11, float f12) {
        ArrayList arrayList = new ArrayList();
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this.f15695w, View.ALPHA, f10);
        gVar.e(ViewProps.OPACITY).a(ofFloat);
        arrayList.add(ofFloat);
        ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this.f15695w, View.SCALE_X, f11);
        gVar.e("scale").a(ofFloat2);
        e0(ofFloat2);
        arrayList.add(ofFloat2);
        ObjectAnimator ofFloat3 = ObjectAnimator.ofFloat(this.f15695w, View.SCALE_Y, f11);
        gVar.e("scale").a(ofFloat3);
        e0(ofFloat3);
        arrayList.add(ofFloat3);
        e(f12, this.B);
        ObjectAnimator ofObject = ObjectAnimator.ofObject(this.f15695w, new zg.e(), new c(), new Matrix(this.B));
        gVar.e("iconScale").a(ofObject);
        arrayList.add(ofObject);
        AnimatorSet animatorSet = new AnimatorSet();
        zg.b.a(animatorSet, arrayList);
        return animatorSet;
    }

    private AnimatorSet g(float f10, float f11, float f12, int i10, int i11) {
        AnimatorSet animatorSet = new AnimatorSet();
        ArrayList arrayList = new ArrayList();
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.addUpdateListener(new d(this.f15695w.getAlpha(), f10, this.f15695w.getScaleX(), f11, this.f15695w.getScaleY(), this.f15689q, f12, new Matrix(this.B)));
        arrayList.add(ofFloat);
        zg.b.a(animatorSet, arrayList);
        animatorSet.setDuration(jh.g.f(this.f15695w.getContext(), i10, this.f15695w.getContext().getResources().getInteger(yg.g.f54439b)));
        animatorSet.setInterpolator(jh.g.g(this.f15695w.getContext(), i11, zg.a.f55807b));
        return animatorSet;
    }

    private ValueAnimator h(m mVar) {
        ValueAnimator valueAnimator = new ValueAnimator();
        valueAnimator.setInterpolator(D);
        valueAnimator.setDuration(100L);
        valueAnimator.addListener(mVar);
        valueAnimator.addUpdateListener(mVar);
        valueAnimator.setFloatValues(0.0f, 1.0f);
        return valueAnimator;
    }

    private ViewTreeObserver.OnPreDrawListener n() {
        if (this.C == null) {
            this.C = new f();
        }
        return this.C;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A() {
        ViewTreeObserver viewTreeObserver = this.f15695w.getViewTreeObserver();
        ViewTreeObserver.OnPreDrawListener onPreDrawListener = this.C;
        if (onPreDrawListener != null) {
            viewTreeObserver.removeOnPreDrawListener(onPreDrawListener);
            this.C = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void B(int[] iArr);

    abstract void C(float f10, float f11, float f12);

    void D(Rect rect) {
        b2.e.h(this.f15677e, "Didn't initialize content background");
        if (W()) {
            this.f15696x.b(new InsetDrawable(this.f15677e, rect.left, rect.top, rect.right, rect.bottom));
            return;
        }
        this.f15696x.b(this.f15677e);
    }

    void E() {
        float rotation = this.f15695w.getRotation();
        if (this.f15688p != rotation) {
            this.f15688p = rotation;
            a0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F() {
        ArrayList arrayList = this.f15694v;
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((j) it.next()).b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G() {
        ArrayList arrayList = this.f15694v;
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((j) it.next()).a();
            }
        }
    }

    abstract boolean H();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(ColorStateList colorStateList) {
        oh.g gVar = this.f15674b;
        if (gVar != null) {
            gVar.setTintList(colorStateList);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f15676d;
        if (aVar != null) {
            aVar.c(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(PorterDuff.Mode mode) {
        oh.g gVar = this.f15674b;
        if (gVar != null) {
            gVar.setTintMode(mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void K(float f10) {
        if (this.f15680h != f10) {
            this.f15680h = f10;
            C(f10, this.f15681i, this.f15682j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(boolean z10) {
        this.f15678f = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void M(zg.g gVar) {
        this.f15687o = gVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void N(float f10) {
        if (this.f15681i != f10) {
            this.f15681i = f10;
            C(this.f15680h, f10, this.f15682j);
        }
    }

    final void O(float f10) {
        this.f15689q = f10;
        Matrix matrix = this.B;
        e(f10, matrix);
        this.f15695w.setImageMatrix(matrix);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void P(int i10) {
        if (this.f15690r != i10) {
            this.f15690r = i10;
            b0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(int i10) {
        this.f15683k = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void R(float f10) {
        if (this.f15682j != f10) {
            this.f15682j = f10;
            C(this.f15680h, this.f15681i, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(ColorStateList colorStateList) {
        Drawable drawable = this.f15675c;
        if (drawable != null) {
            s1.a.o(drawable, mh.b.a(colorStateList));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(boolean z10) {
        this.f15679g = z10;
        c0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void U(oh.k kVar) {
        this.f15673a = kVar;
        oh.g gVar = this.f15674b;
        if (gVar != null) {
            gVar.setShapeAppearanceModel(kVar);
        }
        Drawable drawable = this.f15675c;
        if (drawable instanceof n) {
            ((n) drawable).setShapeAppearanceModel(kVar);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f15676d;
        if (aVar != null) {
            aVar.f(kVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void V(zg.g gVar) {
        this.f15686n = gVar;
    }

    abstract boolean W();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean Y() {
        if (this.f15678f && this.f15695w.getSizeDimension() < this.f15683k) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(k kVar, boolean z10) {
        boolean z11;
        AnimatorSet g10;
        b bVar;
        float f10;
        float f11;
        if (!w()) {
            Animator animator = this.f15685m;
            if (animator != null) {
                animator.cancel();
            }
            if (this.f15686n == null) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (X()) {
                if (this.f15695w.getVisibility() != 0) {
                    float f12 = 0.0f;
                    this.f15695w.setAlpha(0.0f);
                    FloatingActionButton floatingActionButton = this.f15695w;
                    if (z11) {
                        f10 = 0.4f;
                    } else {
                        f10 = 0.0f;
                    }
                    floatingActionButton.setScaleY(f10);
                    FloatingActionButton floatingActionButton2 = this.f15695w;
                    if (z11) {
                        f11 = 0.4f;
                    } else {
                        f11 = 0.0f;
                    }
                    floatingActionButton2.setScaleX(f11);
                    if (z11) {
                        f12 = 0.4f;
                    }
                    O(f12);
                }
                zg.g gVar = this.f15686n;
                if (gVar != null) {
                    g10 = f(gVar, 1.0f, 1.0f, 1.0f);
                    bVar = this;
                } else {
                    g10 = g(1.0f, 1.0f, 1.0f, E, F);
                    bVar = this;
                }
                g10.addListener(new C0188b(z10, kVar));
                ArrayList arrayList = bVar.f15692t;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        g10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                g10.start();
                return;
            }
            this.f15695w.b(0, z10);
            this.f15695w.setAlpha(1.0f);
            this.f15695w.setScaleY(1.0f);
            this.f15695w.setScaleX(1.0f);
            O(1.0f);
            if (kVar != null) {
                kVar.a();
            }
        }
    }

    abstract void a0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b0() {
        O(this.f15689q);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c0() {
        Rect rect = this.f15697y;
        o(rect);
        D(rect);
        this.f15696x.a(rect.left, rect.top, rect.right, rect.bottom);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(float f10) {
        oh.g gVar = this.f15674b;
        if (gVar != null) {
            gVar.W(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Drawable i() {
        return this.f15677e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract float j();

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        return this.f15678f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final zg.g l() {
        return this.f15687o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f15681i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(Rect rect) {
        float f10;
        int s10 = s();
        if (this.f15679g) {
            f10 = j() + this.f15682j;
        } else {
            f10 = 0.0f;
        }
        int max = Math.max(s10, (int) Math.ceil(f10));
        int max2 = Math.max(s10, (int) Math.ceil(f10 * 1.5f));
        rect.set(max, max2, max, max2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float p() {
        return this.f15682j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final oh.k q() {
        return this.f15673a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final zg.g r() {
        return this.f15686n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int s() {
        if (!this.f15678f) {
            return 0;
        }
        return Math.max((this.f15683k - this.f15695w.getSizeDimension()) / 2, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(k kVar, boolean z10) {
        int i10;
        b bVar;
        AnimatorSet g10;
        if (!v()) {
            Animator animator = this.f15685m;
            if (animator != null) {
                animator.cancel();
            }
            if (X()) {
                zg.g gVar = this.f15687o;
                if (gVar != null) {
                    g10 = f(gVar, 0.0f, 0.0f, 0.0f);
                    bVar = this;
                } else {
                    bVar = this;
                    g10 = bVar.g(0.0f, 0.4f, 0.4f, G, H);
                }
                g10.addListener(new a(z10, kVar));
                ArrayList arrayList = bVar.f15693u;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        g10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                g10.start();
                return;
            }
            FloatingActionButton floatingActionButton = this.f15695w;
            if (z10) {
                i10 = 8;
            } else {
                i10 = 4;
            }
            floatingActionButton.b(i10, z10);
            if (kVar != null) {
                kVar.b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void u(ColorStateList colorStateList, PorterDuff.Mode mode, ColorStateList colorStateList2, int i10);

    boolean v() {
        if (this.f15695w.getVisibility() == 0) {
            if (this.f15691s != 1) {
                return false;
            }
            return true;
        } else if (this.f15691s == 2) {
            return false;
        } else {
            return true;
        }
    }

    boolean w() {
        if (this.f15695w.getVisibility() != 0) {
            if (this.f15691s != 2) {
                return false;
            }
            return true;
        } else if (this.f15691s == 1) {
            return false;
        } else {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void x();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y() {
        oh.g gVar = this.f15674b;
        if (gVar != null) {
            oh.h.f(this.f15695w, gVar);
        }
        if (H()) {
            this.f15695w.getViewTreeObserver().addOnPreDrawListener(n());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void z();
}
