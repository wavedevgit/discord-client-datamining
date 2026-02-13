package pm;

import android.os.CancellationSignal;
import android.view.View;
import android.view.animation.LinearInterpolator;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import androidx.core.view.d1;
import androidx.core.view.e1;
import androidx.core.view.i0;
import androidx.dynamicanimation.animation.SpringAnimation;
import androidx.dynamicanimation.animation.c;
import as.l;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import pm.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private e1 f43360a;

    /* renamed from: b  reason: collision with root package name */
    private CancellationSignal f43361b;

    /* renamed from: c  reason: collision with root package name */
    private Function1 f43362c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f43363d = l.b(new Function0() { // from class: pm.e
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            f.a m10;
            m10 = f.m(f.this);
            return m10;
        }
    });

    /* renamed from: e  reason: collision with root package name */
    private boolean f43364e;

    /* renamed from: f  reason: collision with root package name */
    private SpringAnimation f43365f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements d1 {
        a() {
        }

        @Override // androidx.core.view.d1
        public void a(e1 e1Var) {
            f.this.w();
        }

        @Override // androidx.core.view.d1
        public void b(e1 controller, int i10) {
            Intrinsics.checkNotNullParameter(controller, "controller");
            f.this.v(controller);
        }

        @Override // androidx.core.view.d1
        public void c(e1 controller) {
            Intrinsics.checkNotNullParameter(controller, "controller");
            f.this.w();
        }
    }

    private final void g(boolean z10, Float f10) {
        int i10;
        final e1 e1Var = this.f43360a;
        if (e1Var != null) {
            Function1 function1 = new Function1() { // from class: pm.b
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit i11;
                    i11 = f.i(f.this, ((Float) obj).floatValue());
                    return i11;
                }
            };
            Function0 function0 = new Function0() { // from class: pm.c
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    float j10;
                    j10 = f.j(e1.this);
                    return Float.valueOf(j10);
                }
            };
            if (z10) {
                i10 = e1Var.e().f3307d;
            } else {
                i10 = e1Var.d().f3307d;
            }
            SpringAnimation b10 = b3.c.b(function1, function0, i10);
            if (b10.w() == null) {
                b10.z(new androidx.dynamicanimation.animation.d());
            }
            androidx.dynamicanimation.animation.d spring = b10.w();
            Intrinsics.checkExpressionValueIsNotNull(spring, "spring");
            spring.f(1.0f);
            spring.h(1500.0f);
            if (f10 != null) {
                b10.p(f10.floatValue());
            }
            b10.b(new c.q() { // from class: pm.d
                @Override // androidx.dynamicanimation.animation.c.q
                public final void a(androidx.dynamicanimation.animation.c cVar, boolean z11, float f11, float f12) {
                    f.k(f.this, cVar, z11, f11, f12);
                }
            });
            b10.r();
            this.f43365f = b10;
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
        fVar.s(ps.a.c(f10));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final float j(e1 e1Var) {
        return e1Var.c().f3307d;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(f fVar, androidx.dynamicanimation.animation.c cVar, boolean z10, float f10, float f11) {
        if (Intrinsics.areEqual(cVar, fVar.f43365f)) {
            fVar.f43365f = null;
        }
        fVar.o();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final a m(f fVar) {
        return new a();
    }

    private final a p() {
        return (a) this.f43363d.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void v(e1 e1Var) {
        this.f43361b = null;
        this.f43360a = e1Var;
        Function1 function1 = this.f43362c;
        if (function1 != null) {
            function1.invoke(e1Var);
        }
        this.f43362c = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void w() {
        this.f43360a = null;
        this.f43361b = null;
        this.f43364e = false;
        SpringAnimation springAnimation = this.f43365f;
        if (springAnimation != null) {
            springAnimation.d();
        }
        this.f43365f = null;
        this.f43362c = null;
    }

    public static /* synthetic */ void y(f fVar, View view, Function1 function1, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            function1 = null;
        }
        fVar.x(view, function1);
    }

    public final void l(Float f10) {
        e1 e1Var = this.f43360a;
        if (e1Var == null) {
            CancellationSignal cancellationSignal = this.f43361b;
            if (cancellationSignal != null) {
                cancellationSignal.cancel();
                return;
            }
            return;
        }
        boolean z10 = false;
        pm.a.f43354a.b(false);
        int i10 = e1Var.c().f3307d;
        int i11 = e1Var.e().f3307d;
        int i12 = e1Var.d().f3307d;
        if (f10 != null) {
            if (f10.floatValue() < 0.0f) {
                z10 = true;
            }
            g(z10, f10);
        } else if (i10 == i11) {
            e1Var.a(true);
        } else if (i10 == i12) {
            e1Var.a(false);
        } else if (e1Var.b() >= 0.15f) {
            h(this, !this.f43364e, null, 2, null);
        } else {
            h(this, this.f43364e, null, 2, null);
        }
    }

    public final void n() {
        e1 e1Var = this.f43360a;
        if (e1Var != null) {
            e1Var.a(this.f43364e);
        }
        CancellationSignal cancellationSignal = this.f43361b;
        if (cancellationSignal != null) {
            cancellationSignal.cancel();
        }
        SpringAnimation springAnimation = this.f43365f;
        if (springAnimation != null) {
            springAnimation.d();
        }
        w();
    }

    public final void o() {
        e1 e1Var = this.f43360a;
        if (e1Var == null) {
            CancellationSignal cancellationSignal = this.f43361b;
            if (cancellationSignal != null) {
                cancellationSignal.cancel();
                return;
            }
            return;
        }
        int i10 = e1Var.c().f3307d;
        int i11 = e1Var.e().f3307d;
        int i12 = e1Var.d().f3307d;
        if (i10 == i11) {
            e1Var.a(true);
        } else if (i10 == i12) {
            e1Var.a(false);
        } else if (e1Var.b() >= 0.15f) {
            e1Var.a(!this.f43364e);
        } else {
            e1Var.a(this.f43364e);
        }
    }

    public final int q() {
        e1 e1Var = this.f43360a;
        if (e1Var != null) {
            return e1Var.c().f3307d;
        }
        throw new IllegalStateException("Current WindowInsetsAnimationController is null.This should only be called if isAnimationInProgress() returns true");
    }

    public final int r(int i10) {
        e1 e1Var = this.f43360a;
        if (e1Var != null) {
            pm.a.f43354a.b(true);
            return s(e1Var.c().f3307d - i10);
        }
        throw new IllegalStateException("Current WindowInsetsAnimationController is null.This should only be called if isAnimationInProgress() returns true");
    }

    public final int s(int i10) {
        int i11;
        int i12;
        e1 e1Var = this.f43360a;
        if (e1Var != null) {
            int i13 = e1Var.d().f3307d;
            int i14 = e1Var.e().f3307d;
            boolean z10 = this.f43364e;
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
            int i15 = e1Var.c().f3307d - m10;
            e1Var.f(Insets.c(0, 0, 0, m10), 1.0f, (m10 - i11) / (i12 - i11));
            return i15;
        }
        throw new IllegalStateException("Current WindowInsetsAnimationController is null.This should only be called if isAnimationInProgress() returns true");
    }

    public final boolean t() {
        if (this.f43360a != null) {
            return true;
        }
        return false;
    }

    public final boolean u() {
        if (this.f43361b != null) {
            return true;
        }
        return false;
    }

    public final void x(View view, Function1 function1) {
        LinearInterpolator linearInterpolator;
        Intrinsics.checkNotNullParameter(view, "view");
        if (!t()) {
            WindowInsetsCompat F = i0.F(view);
            boolean z10 = false;
            if (F != null && F.u(WindowInsetsCompat.p.c())) {
                z10 = true;
            }
            this.f43364e = z10;
            this.f43361b = new CancellationSignal();
            this.f43362c = function1;
            pm.a.f43354a.b(true);
            WindowInsetsControllerCompat J = i0.J(view);
            if (J != null) {
                int c10 = WindowInsetsCompat.p.c();
                linearInterpolator = g.f43367a;
                J.a(c10, -1L, linearInterpolator, this.f43361b, p());
                return;
            }
            return;
        }
        throw new IllegalStateException("Animation in progress. Can not start a new request to controlWindowInsetsAnimation()");
    }
}
