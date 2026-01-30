package gm;

import android.os.CancellationSignal;
import android.view.View;
import android.view.animation.LinearInterpolator;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import androidx.core.view.c1;
import androidx.core.view.d1;
import androidx.core.view.h0;
import androidx.dynamicanimation.animation.SpringAnimation;
import androidx.dynamicanimation.animation.b;
import gm.f;
import ir.l;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private d1 f27044a;

    /* renamed from: b  reason: collision with root package name */
    private CancellationSignal f27045b;

    /* renamed from: c  reason: collision with root package name */
    private Function1 f27046c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f27047d = l.b(new Function0() { // from class: gm.e
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            f.a m10;
            m10 = f.m(f.this);
            return m10;
        }
    });

    /* renamed from: e  reason: collision with root package name */
    private boolean f27048e;

    /* renamed from: f  reason: collision with root package name */
    private SpringAnimation f27049f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c1 {
        a() {
        }

        @Override // androidx.core.view.c1
        public void a(d1 d1Var) {
            f.this.w();
        }

        @Override // androidx.core.view.c1
        public void b(d1 controller, int i10) {
            Intrinsics.checkNotNullParameter(controller, "controller");
            f.this.v(controller);
        }

        @Override // androidx.core.view.c1
        public void c(d1 controller) {
            Intrinsics.checkNotNullParameter(controller, "controller");
            f.this.w();
        }
    }

    private final void g(boolean z10, Float f10) {
        int i10;
        final d1 d1Var = this.f27044a;
        if (d1Var != null) {
            Function1 function1 = new Function1() { // from class: gm.b
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit i11;
                    i11 = f.i(f.this, ((Float) obj).floatValue());
                    return i11;
                }
            };
            Function0 function0 = new Function0() { // from class: gm.c
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    float j10;
                    j10 = f.j(d1.this);
                    return Float.valueOf(j10);
                }
            };
            if (z10) {
                i10 = d1Var.e().f3153d;
            } else {
                i10 = d1Var.d().f3153d;
            }
            SpringAnimation b10 = b3.a.b(function1, function0, i10);
            if (b10.v() == null) {
                b10.y(new androidx.dynamicanimation.animation.c());
            }
            androidx.dynamicanimation.animation.c spring = b10.v();
            Intrinsics.checkExpressionValueIsNotNull(spring, "spring");
            spring.d(1.0f);
            spring.f(1500.0f);
            if (f10 != null) {
                b10.o(f10.floatValue());
            }
            b10.b(new b.q() { // from class: gm.d
                @Override // androidx.dynamicanimation.animation.b.q
                public final void a(androidx.dynamicanimation.animation.b bVar, boolean z11, float f11, float f12) {
                    f.k(f.this, bVar, z11, f11, f12);
                }
            });
            b10.q();
            this.f27049f = b10;
            return;
        }
        throw new IllegalStateException("Controller should not be null");
    }

    static /* synthetic */ void h(f fVar, boolean z10, Float f10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            f10 = null;
        }
        fVar.g(z10, f10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(f fVar, float f10) {
        fVar.s(xr.a.c(f10));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final float j(d1 d1Var) {
        return d1Var.c().f3153d;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(f fVar, androidx.dynamicanimation.animation.b bVar, boolean z10, float f10, float f11) {
        if (Intrinsics.areEqual(bVar, fVar.f27049f)) {
            fVar.f27049f = null;
        }
        fVar.o();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final a m(f fVar) {
        return new a();
    }

    private final a p() {
        return (a) this.f27047d.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void v(d1 d1Var) {
        this.f27045b = null;
        this.f27044a = d1Var;
        Function1 function1 = this.f27046c;
        if (function1 != null) {
            function1.invoke(d1Var);
        }
        this.f27046c = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void w() {
        this.f27044a = null;
        this.f27045b = null;
        this.f27048e = false;
        SpringAnimation springAnimation = this.f27049f;
        if (springAnimation != null) {
            springAnimation.d();
        }
        this.f27049f = null;
        this.f27046c = null;
    }

    public static /* synthetic */ void y(f fVar, View view, Function1 function1, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            function1 = null;
        }
        fVar.x(view, function1);
    }

    public final void l(Float f10) {
        d1 d1Var = this.f27044a;
        if (d1Var == null) {
            CancellationSignal cancellationSignal = this.f27045b;
            if (cancellationSignal != null) {
                cancellationSignal.cancel();
                return;
            }
            return;
        }
        boolean z10 = false;
        gm.a.f27038a.b(false);
        int i10 = d1Var.c().f3153d;
        int i11 = d1Var.e().f3153d;
        int i12 = d1Var.d().f3153d;
        if (f10 != null) {
            if (f10.floatValue() < 0.0f) {
                z10 = true;
            }
            g(z10, f10);
        } else if (i10 == i11) {
            d1Var.a(true);
        } else if (i10 == i12) {
            d1Var.a(false);
        } else if (d1Var.b() >= 0.15f) {
            h(this, !this.f27048e, null, 2, null);
        } else {
            h(this, this.f27048e, null, 2, null);
        }
    }

    public final void n() {
        d1 d1Var = this.f27044a;
        if (d1Var != null) {
            d1Var.a(this.f27048e);
        }
        CancellationSignal cancellationSignal = this.f27045b;
        if (cancellationSignal != null) {
            cancellationSignal.cancel();
        }
        SpringAnimation springAnimation = this.f27049f;
        if (springAnimation != null) {
            springAnimation.d();
        }
        w();
    }

    public final void o() {
        d1 d1Var = this.f27044a;
        if (d1Var == null) {
            CancellationSignal cancellationSignal = this.f27045b;
            if (cancellationSignal != null) {
                cancellationSignal.cancel();
                return;
            }
            return;
        }
        int i10 = d1Var.c().f3153d;
        int i11 = d1Var.e().f3153d;
        int i12 = d1Var.d().f3153d;
        if (i10 == i11) {
            d1Var.a(true);
        } else if (i10 == i12) {
            d1Var.a(false);
        } else if (d1Var.b() >= 0.15f) {
            d1Var.a(!this.f27048e);
        } else {
            d1Var.a(this.f27048e);
        }
    }

    public final int q() {
        d1 d1Var = this.f27044a;
        if (d1Var != null) {
            return d1Var.c().f3153d;
        }
        throw new IllegalStateException("Current WindowInsetsAnimationController is null.This should only be called if isAnimationInProgress() returns true");
    }

    public final int r(int i10) {
        d1 d1Var = this.f27044a;
        if (d1Var != null) {
            gm.a.f27038a.b(true);
            return s(d1Var.c().f3153d - i10);
        }
        throw new IllegalStateException("Current WindowInsetsAnimationController is null.This should only be called if isAnimationInProgress() returns true");
    }

    public final int s(int i10) {
        int i11;
        int i12;
        d1 d1Var = this.f27044a;
        if (d1Var != null) {
            int i13 = d1Var.d().f3153d;
            int i14 = d1Var.e().f3153d;
            boolean z10 = this.f27048e;
            if (z10) {
                i11 = i14;
            } else {
                i11 = i13;
            }
            if (z10) {
                i12 = i13;
            } else {
                i12 = i14;
            }
            int m10 = kotlin.ranges.d.m(i10, i13, i14);
            int i15 = d1Var.c().f3153d - m10;
            d1Var.f(Insets.c(0, 0, 0, m10), 1.0f, (m10 - i11) / (i12 - i11));
            return i15;
        }
        throw new IllegalStateException("Current WindowInsetsAnimationController is null.This should only be called if isAnimationInProgress() returns true");
    }

    public final boolean t() {
        if (this.f27044a != null) {
            return true;
        }
        return false;
    }

    public final boolean u() {
        if (this.f27045b != null) {
            return true;
        }
        return false;
    }

    public final void x(View view, Function1 function1) {
        LinearInterpolator linearInterpolator;
        Intrinsics.checkNotNullParameter(view, "view");
        if (!t()) {
            WindowInsetsCompat G = h0.G(view);
            boolean z10 = false;
            if (G != null && G.u(WindowInsetsCompat.p.c())) {
                z10 = true;
            }
            this.f27048e = z10;
            this.f27045b = new CancellationSignal();
            this.f27046c = function1;
            gm.a.f27038a.b(true);
            WindowInsetsControllerCompat K = h0.K(view);
            if (K != null) {
                int c10 = WindowInsetsCompat.p.c();
                linearInterpolator = g.f27051a;
                K.a(c10, -1L, linearInterpolator, this.f27045b, p());
                return;
            }
            return;
        }
        throw new IllegalStateException("Animation in progress. Can not start a new request to controlWindowInsetsAnimation()");
    }
}
