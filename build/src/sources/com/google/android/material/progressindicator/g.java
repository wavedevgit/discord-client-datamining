package com.google.android.material.progressindicator;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.util.Property;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g extends Drawable implements Animatable {

    /* renamed from: z  reason: collision with root package name */
    private static final Property f15910z = new c(Float.class, "growFraction");

    /* renamed from: d  reason: collision with root package name */
    final Context f15911d;

    /* renamed from: e  reason: collision with root package name */
    final com.google.android.material.progressindicator.b f15912e;

    /* renamed from: o  reason: collision with root package name */
    private ValueAnimator f15914o;

    /* renamed from: p  reason: collision with root package name */
    private ValueAnimator f15915p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f15916q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f15917r;

    /* renamed from: s  reason: collision with root package name */
    private float f15918s;

    /* renamed from: t  reason: collision with root package name */
    private List f15919t;

    /* renamed from: u  reason: collision with root package name */
    private androidx.vectordrawable.graphics.drawable.b f15920u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f15921v;

    /* renamed from: w  reason: collision with root package name */
    private float f15922w;

    /* renamed from: y  reason: collision with root package name */
    private int f15924y;

    /* renamed from: x  reason: collision with root package name */
    final Paint f15923x = new Paint();

    /* renamed from: i  reason: collision with root package name */
    kh.a f15913i = new kh.a();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            super.onAnimationStart(animator);
            g.this.f();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends AnimatorListenerAdapter {
        b() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            super.onAnimationEnd(animator);
            g.super.setVisible(false, false);
            g.this.e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c extends Property {
        c(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(g gVar) {
            return Float.valueOf(gVar.h());
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(g gVar, Float f10) {
            gVar.n(f10.floatValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(Context context, com.google.android.material.progressindicator.b bVar) {
        this.f15911d = context;
        this.f15912e = bVar;
        setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
    }

    private void d(ValueAnimator... valueAnimatorArr) {
        boolean z10 = this.f15921v;
        this.f15921v = true;
        for (ValueAnimator valueAnimator : valueAnimatorArr) {
            valueAnimator.cancel();
        }
        this.f15921v = z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e() {
        androidx.vectordrawable.graphics.drawable.b bVar = this.f15920u;
        if (bVar != null) {
            bVar.b(this);
        }
        List<androidx.vectordrawable.graphics.drawable.b> list = this.f15919t;
        if (list != null && !this.f15921v) {
            for (androidx.vectordrawable.graphics.drawable.b bVar2 : list) {
                bVar2.b(this);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void f() {
        androidx.vectordrawable.graphics.drawable.b bVar = this.f15920u;
        if (bVar != null) {
            bVar.c(this);
        }
        List<androidx.vectordrawable.graphics.drawable.b> list = this.f15919t;
        if (list != null && !this.f15921v) {
            for (androidx.vectordrawable.graphics.drawable.b bVar2 : list) {
                bVar2.c(this);
            }
        }
    }

    private void g(ValueAnimator... valueAnimatorArr) {
        boolean z10 = this.f15921v;
        this.f15921v = true;
        for (ValueAnimator valueAnimator : valueAnimatorArr) {
            valueAnimator.end();
        }
        this.f15921v = z10;
    }

    private void l() {
        if (this.f15914o == null) {
            ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this, f15910z, 0.0f, 1.0f);
            this.f15914o = ofFloat;
            ofFloat.setDuration(500L);
            this.f15914o.setInterpolator(zg.a.f55807b);
            p(this.f15914o);
        }
        if (this.f15915p == null) {
            ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this, f15910z, 1.0f, 0.0f);
            this.f15915p = ofFloat2;
            ofFloat2.setDuration(500L);
            this.f15915p.setInterpolator(zg.a.f55807b);
            o(this.f15915p);
        }
    }

    private void o(ValueAnimator valueAnimator) {
        ValueAnimator valueAnimator2 = this.f15915p;
        if (valueAnimator2 != null && valueAnimator2.isRunning()) {
            throw new IllegalArgumentException("Cannot set hideAnimator while the current hideAnimator is running.");
        }
        this.f15915p = valueAnimator;
        valueAnimator.addListener(new b());
    }

    private void p(ValueAnimator valueAnimator) {
        ValueAnimator valueAnimator2 = this.f15914o;
        if (valueAnimator2 != null && valueAnimator2.isRunning()) {
            throw new IllegalArgumentException("Cannot set showAnimator while the current showAnimator is running.");
        }
        this.f15914o = valueAnimator;
        valueAnimator.addListener(new a());
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f15924y;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float h() {
        if (!this.f15912e.b() && !this.f15912e.a()) {
            return 1.0f;
        }
        if (!this.f15917r && !this.f15916q) {
            return this.f15922w;
        }
        return this.f15918s;
    }

    public boolean i() {
        return q(false, false, false);
    }

    public boolean isRunning() {
        if (!k() && !j()) {
            return false;
        }
        return true;
    }

    public boolean j() {
        ValueAnimator valueAnimator = this.f15915p;
        if ((valueAnimator != null && valueAnimator.isRunning()) || this.f15917r) {
            return true;
        }
        return false;
    }

    public boolean k() {
        ValueAnimator valueAnimator = this.f15914o;
        if ((valueAnimator != null && valueAnimator.isRunning()) || this.f15916q) {
            return true;
        }
        return false;
    }

    public void m(androidx.vectordrawable.graphics.drawable.b bVar) {
        if (this.f15919t == null) {
            this.f15919t = new ArrayList();
        }
        if (!this.f15919t.contains(bVar)) {
            this.f15919t.add(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(float f10) {
        if (this.f15922w != f10) {
            this.f15922w = f10;
            invalidateSelf();
        }
    }

    public boolean q(boolean z10, boolean z11, boolean z12) {
        boolean z13;
        float a10 = this.f15913i.a(this.f15911d.getContentResolver());
        if (z12 && a10 > 0.0f) {
            z13 = true;
        } else {
            z13 = false;
        }
        return r(z10, z11, z13);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean r(boolean z10, boolean z11, boolean z12) {
        ValueAnimator valueAnimator;
        ValueAnimator valueAnimator2;
        boolean a10;
        l();
        boolean z13 = false;
        if (!isVisible() && !z10) {
            return false;
        }
        if (z10) {
            valueAnimator = this.f15914o;
        } else {
            valueAnimator = this.f15915p;
        }
        if (z10) {
            valueAnimator2 = this.f15915p;
        } else {
            valueAnimator2 = this.f15914o;
        }
        if (!z12) {
            if (valueAnimator2.isRunning()) {
                d(valueAnimator2);
            }
            if (valueAnimator.isRunning()) {
                valueAnimator.end();
            } else {
                g(valueAnimator);
            }
            return super.setVisible(z10, false);
        } else if (valueAnimator.isRunning()) {
            return false;
        } else {
            z13 = (!z10 || super.setVisible(z10, false)) ? true : true;
            if (z10) {
                a10 = this.f15912e.b();
            } else {
                a10 = this.f15912e.a();
            }
            if (!a10) {
                g(valueAnimator);
                return z13;
            } else if (!z11 && valueAnimator.isPaused()) {
                valueAnimator.resume();
                return z13;
            } else {
                valueAnimator.start();
                return z13;
            }
        }
    }

    public boolean s(androidx.vectordrawable.graphics.drawable.b bVar) {
        List list = this.f15919t;
        if (list != null && list.contains(bVar)) {
            this.f15919t.remove(bVar);
            if (this.f15919t.isEmpty()) {
                this.f15919t = null;
                return true;
            }
            return true;
        }
        return false;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f15924y = i10;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f15923x.setColorFilter(colorFilter);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        return q(z10, z11, true);
    }

    public void start() {
        r(true, true, false);
    }

    public void stop() {
        r(false, true, false);
    }
}
