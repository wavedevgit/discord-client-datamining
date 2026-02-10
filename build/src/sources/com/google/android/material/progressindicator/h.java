package com.google.android.material.progressindicator;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;
import android.util.Property;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h extends Drawable implements Animatable {
    private static final Property B = new c(Float.class, "growFraction");

    /* renamed from: d  reason: collision with root package name */
    final Context f16131d;

    /* renamed from: e  reason: collision with root package name */
    final com.google.android.material.progressindicator.b f16132e;

    /* renamed from: o  reason: collision with root package name */
    private ValueAnimator f16134o;

    /* renamed from: p  reason: collision with root package name */
    private ValueAnimator f16135p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f16136q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f16137r;

    /* renamed from: s  reason: collision with root package name */
    private float f16138s;

    /* renamed from: u  reason: collision with root package name */
    private List f16140u;

    /* renamed from: v  reason: collision with root package name */
    private androidx.vectordrawable.graphics.drawable.b f16141v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f16142w;

    /* renamed from: x  reason: collision with root package name */
    private float f16143x;

    /* renamed from: z  reason: collision with root package name */
    private int f16145z;

    /* renamed from: t  reason: collision with root package name */
    private float f16139t = -1.0f;

    /* renamed from: y  reason: collision with root package name */
    final Paint f16144y = new Paint();
    Rect A = new Rect();

    /* renamed from: i  reason: collision with root package name */
    ph.a f16133i = new ph.a();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            super.onAnimationStart(animator);
            h.this.f();
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
            h.super.setVisible(false, false);
            h.this.e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c extends Property {
        c(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(h hVar) {
            return Float.valueOf(hVar.h());
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(h hVar, Float f10) {
            hVar.p(f10.floatValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(Context context, com.google.android.material.progressindicator.b bVar) {
        this.f16131d = context;
        this.f16132e = bVar;
        setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
    }

    private void d(ValueAnimator... valueAnimatorArr) {
        boolean z10 = this.f16142w;
        this.f16142w = true;
        for (ValueAnimator valueAnimator : valueAnimatorArr) {
            valueAnimator.cancel();
        }
        this.f16142w = z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e() {
        androidx.vectordrawable.graphics.drawable.b bVar = this.f16141v;
        if (bVar != null) {
            bVar.b(this);
        }
        List<androidx.vectordrawable.graphics.drawable.b> list = this.f16140u;
        if (list != null && !this.f16142w) {
            for (androidx.vectordrawable.graphics.drawable.b bVar2 : list) {
                bVar2.b(this);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void f() {
        androidx.vectordrawable.graphics.drawable.b bVar = this.f16141v;
        if (bVar != null) {
            bVar.c(this);
        }
        List<androidx.vectordrawable.graphics.drawable.b> list = this.f16140u;
        if (list != null && !this.f16142w) {
            for (androidx.vectordrawable.graphics.drawable.b bVar2 : list) {
                bVar2.c(this);
            }
        }
    }

    private void g(ValueAnimator... valueAnimatorArr) {
        boolean z10 = this.f16142w;
        this.f16142w = true;
        for (ValueAnimator valueAnimator : valueAnimatorArr) {
            valueAnimator.end();
        }
        this.f16142w = z10;
    }

    private boolean k() {
        return this instanceof g;
    }

    private void n() {
        if (this.f16134o == null) {
            ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this, B, 0.0f, 1.0f);
            this.f16134o = ofFloat;
            ofFloat.setDuration(500L);
            this.f16134o.setInterpolator(ch.a.f8277b);
            r(this.f16134o);
        }
        if (this.f16135p == null) {
            ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this, B, 1.0f, 0.0f);
            this.f16135p = ofFloat2;
            ofFloat2.setDuration(500L);
            this.f16135p.setInterpolator(ch.a.f8277b);
            q(this.f16135p);
        }
    }

    private void q(ValueAnimator valueAnimator) {
        ValueAnimator valueAnimator2 = this.f16135p;
        if (valueAnimator2 != null && valueAnimator2.isRunning()) {
            throw new IllegalArgumentException("Cannot set hideAnimator while the current hideAnimator is running.");
        }
        this.f16135p = valueAnimator;
        valueAnimator.addListener(new b());
    }

    private void r(ValueAnimator valueAnimator) {
        ValueAnimator valueAnimator2 = this.f16134o;
        if (valueAnimator2 != null && valueAnimator2.isRunning()) {
            throw new IllegalArgumentException("Cannot set showAnimator while the current showAnimator is running.");
        }
        this.f16134o = valueAnimator;
        valueAnimator.addListener(new a());
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f16145z;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float h() {
        if (!this.f16132e.d() && !this.f16132e.c()) {
            return 1.0f;
        }
        if (!this.f16137r && !this.f16136q) {
            return this.f16143x;
        }
        return this.f16138s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float i() {
        int i10;
        float f10 = this.f16139t;
        if (f10 > 0.0f) {
            return f10;
        }
        if (this.f16132e.b(k()) && this.f16132e.f16082m != 0) {
            float a10 = this.f16133i.a(this.f16131d.getContentResolver());
            if (a10 > 0.0f) {
                if (k()) {
                    i10 = this.f16132e.f16079j;
                } else {
                    i10 = this.f16132e.f16080k;
                }
                int i11 = (int) (((i10 * 1000.0f) / this.f16132e.f16082m) * a10);
                float uptimeMillis = ((float) (SystemClock.uptimeMillis() % i11)) / i11;
                if (uptimeMillis < 0.0f) {
                    return (uptimeMillis % 1.0f) + 1.0f;
                }
                return uptimeMillis;
            }
        }
        return 0.0f;
    }

    public boolean isRunning() {
        if (!m() && !l()) {
            return false;
        }
        return true;
    }

    public boolean j() {
        return s(false, false, false);
    }

    public boolean l() {
        ValueAnimator valueAnimator = this.f16135p;
        if ((valueAnimator != null && valueAnimator.isRunning()) || this.f16137r) {
            return true;
        }
        return false;
    }

    public boolean m() {
        ValueAnimator valueAnimator = this.f16134o;
        if ((valueAnimator != null && valueAnimator.isRunning()) || this.f16136q) {
            return true;
        }
        return false;
    }

    public void o(androidx.vectordrawable.graphics.drawable.b bVar) {
        if (this.f16140u == null) {
            this.f16140u = new ArrayList();
        }
        if (!this.f16140u.contains(bVar)) {
            this.f16140u.add(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(float f10) {
        if (this.f16143x != f10) {
            this.f16143x = f10;
            invalidateSelf();
        }
    }

    public boolean s(boolean z10, boolean z11, boolean z12) {
        boolean z13;
        float a10 = this.f16133i.a(this.f16131d.getContentResolver());
        if (z12 && a10 > 0.0f) {
            z13 = true;
        } else {
            z13 = false;
        }
        return t(z10, z11, z13);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f16145z = i10;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f16144y.setColorFilter(colorFilter);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        return s(z10, z11, true);
    }

    public void start() {
        t(true, true, false);
    }

    public void stop() {
        t(false, true, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean t(boolean z10, boolean z11, boolean z12) {
        ValueAnimator valueAnimator;
        ValueAnimator valueAnimator2;
        boolean c10;
        n();
        boolean z13 = false;
        if (!isVisible() && !z10) {
            return false;
        }
        if (z10) {
            valueAnimator = this.f16134o;
        } else {
            valueAnimator = this.f16135p;
        }
        if (z10) {
            valueAnimator2 = this.f16135p;
        } else {
            valueAnimator2 = this.f16134o;
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
                c10 = this.f16132e.d();
            } else {
                c10 = this.f16132e.c();
            }
            if (!c10) {
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

    public boolean u(androidx.vectordrawable.graphics.drawable.b bVar) {
        List list = this.f16140u;
        if (list != null && list.contains(bVar)) {
            this.f16140u.remove(bVar);
            if (this.f16140u.isEmpty()) {
                this.f16140u = null;
                return true;
            }
            return true;
        }
        return false;
    }
}
