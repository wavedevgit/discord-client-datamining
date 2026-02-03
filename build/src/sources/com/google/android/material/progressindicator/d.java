package com.google.android.material.progressindicator;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.util.Property;
import com.google.android.material.progressindicator.h;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends i {

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f14860k = {0, 1350, 2700, 4050};

    /* renamed from: l  reason: collision with root package name */
    private static final int[] f14861l = {667, 2017, 3367, 4717};

    /* renamed from: m  reason: collision with root package name */
    private static final int[] f14862m = {1000, 2350, 3700, 5050};

    /* renamed from: n  reason: collision with root package name */
    private static final Property f14863n = new c(Float.class, "animationFraction");

    /* renamed from: o  reason: collision with root package name */
    private static final Property f14864o = new C0172d(Float.class, "completeEndFraction");

    /* renamed from: c  reason: collision with root package name */
    private ObjectAnimator f14865c;

    /* renamed from: d  reason: collision with root package name */
    private ObjectAnimator f14866d;

    /* renamed from: e  reason: collision with root package name */
    private final h3.b f14867e;

    /* renamed from: f  reason: collision with root package name */
    private final com.google.android.material.progressindicator.b f14868f;

    /* renamed from: g  reason: collision with root package name */
    private int f14869g;

    /* renamed from: h  reason: collision with root package name */
    private float f14870h;

    /* renamed from: i  reason: collision with root package name */
    private float f14871i;

    /* renamed from: j  reason: collision with root package name */
    androidx.vectordrawable.graphics.drawable.b f14872j;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
            super.onAnimationRepeat(animator);
            d dVar = d.this;
            dVar.f14869g = (dVar.f14869g + 4) % d.this.f14868f.f14850c.length;
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
            d.this.a();
            d dVar = d.this;
            androidx.vectordrawable.graphics.drawable.b bVar = dVar.f14872j;
            if (bVar != null) {
                bVar.b(dVar.f14900a);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c extends Property {
        c(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(d dVar) {
            return Float.valueOf(dVar.o());
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(d dVar, Float f10) {
            dVar.t(f10.floatValue());
        }
    }

    /* renamed from: com.google.android.material.progressindicator.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0172d extends Property {
        C0172d(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(d dVar) {
            return Float.valueOf(dVar.p());
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(d dVar, Float f10) {
            dVar.u(f10.floatValue());
        }
    }

    public d(e eVar) {
        super(1);
        this.f14869g = 0;
        this.f14872j = null;
        this.f14868f = eVar;
        this.f14867e = new h3.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float o() {
        return this.f14870h;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float p() {
        return this.f14871i;
    }

    private void q() {
        if (this.f14865c == null) {
            ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this, f14863n, 0.0f, 1.0f);
            this.f14865c = ofFloat;
            ofFloat.setDuration(5400L);
            this.f14865c.setInterpolator(null);
            this.f14865c.setRepeatCount(-1);
            this.f14865c.addListener(new a());
        }
        if (this.f14866d == null) {
            ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this, f14864o, 0.0f, 1.0f);
            this.f14866d = ofFloat2;
            ofFloat2.setDuration(333L);
            this.f14866d.setInterpolator(this.f14867e);
            this.f14866d.addListener(new b());
        }
    }

    private void r(int i10) {
        for (int i11 = 0; i11 < 4; i11++) {
            float b10 = b(i10, f14862m[i11], 333);
            if (b10 >= 0.0f && b10 <= 1.0f) {
                int i12 = i11 + this.f14869g;
                int[] iArr = this.f14868f.f14850c;
                int length = i12 % iArr.length;
                ((h.a) this.f14901b.get(0)).f14898c = zg.c.b().evaluate(this.f14867e.getInterpolation(b10), Integer.valueOf(iArr[length]), Integer.valueOf(iArr[(length + 1) % iArr.length])).intValue();
                return;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void u(float f10) {
        this.f14871i = f10;
    }

    private void v(int i10) {
        h.a aVar = (h.a) this.f14901b.get(0);
        float f10 = this.f14870h;
        aVar.f14896a = (f10 * 1520.0f) - 20.0f;
        aVar.f14897b = f10 * 1520.0f;
        for (int i11 = 0; i11 < 4; i11++) {
            aVar.f14897b += this.f14867e.getInterpolation(b(i10, f14860k[i11], 667)) * 250.0f;
            aVar.f14896a += this.f14867e.getInterpolation(b(i10, f14861l[i11], 667)) * 250.0f;
        }
        float f11 = aVar.f14896a;
        float f12 = aVar.f14897b;
        aVar.f14896a = (f11 + ((f12 - f11) * this.f14871i)) / 360.0f;
        aVar.f14897b = f12 / 360.0f;
    }

    @Override // com.google.android.material.progressindicator.i
    void a() {
        ObjectAnimator objectAnimator = this.f14865c;
        if (objectAnimator != null) {
            objectAnimator.cancel();
        }
    }

    @Override // com.google.android.material.progressindicator.i
    public void c() {
        s();
    }

    @Override // com.google.android.material.progressindicator.i
    public void d(androidx.vectordrawable.graphics.drawable.b bVar) {
        this.f14872j = bVar;
    }

    @Override // com.google.android.material.progressindicator.i
    void f() {
        ObjectAnimator objectAnimator = this.f14866d;
        if (objectAnimator != null && !objectAnimator.isRunning()) {
            if (this.f14900a.isVisible()) {
                this.f14866d.start();
            } else {
                a();
            }
        }
    }

    @Override // com.google.android.material.progressindicator.i
    void g() {
        q();
        s();
        this.f14865c.start();
    }

    @Override // com.google.android.material.progressindicator.i
    public void h() {
        this.f14872j = null;
    }

    void s() {
        this.f14869g = 0;
        ((h.a) this.f14901b.get(0)).f14898c = this.f14868f.f14850c[0];
        this.f14871i = 0.0f;
    }

    void t(float f10) {
        this.f14870h = f10;
        int i10 = (int) (f10 * 5400.0f);
        v(i10);
        r(i10);
        this.f14900a.invalidateSelf();
    }
}
