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
    private static final int[] f15234k = {0, 1350, 2700, 4050};

    /* renamed from: l  reason: collision with root package name */
    private static final int[] f15235l = {667, 2017, 3367, 4717};

    /* renamed from: m  reason: collision with root package name */
    private static final int[] f15236m = {1000, 2350, 3700, 5050};

    /* renamed from: n  reason: collision with root package name */
    private static final Property f15237n = new c(Float.class, "animationFraction");

    /* renamed from: o  reason: collision with root package name */
    private static final Property f15238o = new C0180d(Float.class, "completeEndFraction");

    /* renamed from: c  reason: collision with root package name */
    private ObjectAnimator f15239c;

    /* renamed from: d  reason: collision with root package name */
    private ObjectAnimator f15240d;

    /* renamed from: e  reason: collision with root package name */
    private final h3.b f15241e;

    /* renamed from: f  reason: collision with root package name */
    private final com.google.android.material.progressindicator.b f15242f;

    /* renamed from: g  reason: collision with root package name */
    private int f15243g;

    /* renamed from: h  reason: collision with root package name */
    private float f15244h;

    /* renamed from: i  reason: collision with root package name */
    private float f15245i;

    /* renamed from: j  reason: collision with root package name */
    androidx.vectordrawable.graphics.drawable.b f15246j;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
            super.onAnimationRepeat(animator);
            d dVar = d.this;
            dVar.f15243g = (dVar.f15243g + 4) % d.this.f15242f.f15224c.length;
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
            androidx.vectordrawable.graphics.drawable.b bVar = dVar.f15246j;
            if (bVar != null) {
                bVar.b(dVar.f15274a);
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
    class C0180d extends Property {
        C0180d(Class cls, String str) {
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
        this.f15243g = 0;
        this.f15246j = null;
        this.f15242f = eVar;
        this.f15241e = new h3.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float o() {
        return this.f15244h;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float p() {
        return this.f15245i;
    }

    private void q() {
        if (this.f15239c == null) {
            ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this, f15237n, 0.0f, 1.0f);
            this.f15239c = ofFloat;
            ofFloat.setDuration(5400L);
            this.f15239c.setInterpolator(null);
            this.f15239c.setRepeatCount(-1);
            this.f15239c.addListener(new a());
        }
        if (this.f15240d == null) {
            ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this, f15238o, 0.0f, 1.0f);
            this.f15240d = ofFloat2;
            ofFloat2.setDuration(333L);
            this.f15240d.setInterpolator(this.f15241e);
            this.f15240d.addListener(new b());
        }
    }

    private void r(int i10) {
        for (int i11 = 0; i11 < 4; i11++) {
            float b10 = b(i10, f15236m[i11], 333);
            if (b10 >= 0.0f && b10 <= 1.0f) {
                int i12 = i11 + this.f15243g;
                int[] iArr = this.f15242f.f15224c;
                int length = i12 % iArr.length;
                ((h.a) this.f15275b.get(0)).f15272c = bh.c.b().evaluate(this.f15241e.getInterpolation(b10), Integer.valueOf(iArr[length]), Integer.valueOf(iArr[(length + 1) % iArr.length])).intValue();
                return;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void u(float f10) {
        this.f15245i = f10;
    }

    private void v(int i10) {
        h.a aVar = (h.a) this.f15275b.get(0);
        float f10 = this.f15244h;
        aVar.f15270a = (f10 * 1520.0f) - 20.0f;
        aVar.f15271b = f10 * 1520.0f;
        for (int i11 = 0; i11 < 4; i11++) {
            aVar.f15271b += this.f15241e.getInterpolation(b(i10, f15234k[i11], 667)) * 250.0f;
            aVar.f15270a += this.f15241e.getInterpolation(b(i10, f15235l[i11], 667)) * 250.0f;
        }
        float f11 = aVar.f15270a;
        float f12 = aVar.f15271b;
        aVar.f15270a = (f11 + ((f12 - f11) * this.f15245i)) / 360.0f;
        aVar.f15271b = f12 / 360.0f;
    }

    @Override // com.google.android.material.progressindicator.i
    void a() {
        ObjectAnimator objectAnimator = this.f15239c;
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
        this.f15246j = bVar;
    }

    @Override // com.google.android.material.progressindicator.i
    void f() {
        ObjectAnimator objectAnimator = this.f15240d;
        if (objectAnimator != null && !objectAnimator.isRunning()) {
            if (this.f15274a.isVisible()) {
                this.f15240d.start();
            } else {
                a();
            }
        }
    }

    @Override // com.google.android.material.progressindicator.i
    void g() {
        q();
        s();
        this.f15239c.start();
    }

    @Override // com.google.android.material.progressindicator.i
    public void h() {
        this.f15246j = null;
    }

    void s() {
        this.f15243g = 0;
        ((h.a) this.f15275b.get(0)).f15272c = this.f15242f.f15224c[0];
        this.f15245i = 0.0f;
    }

    void t(float f10) {
        this.f15244h = f10;
        int i10 = (int) (f10 * 5400.0f);
        v(i10);
        r(i10);
        this.f15274a.invalidateSelf();
    }
}
