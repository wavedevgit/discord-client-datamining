package yl;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.PropertyValuesHolder;
import android.animation.ValueAnimator;
import android.graphics.Matrix;
import android.graphics.RectF;
import android.view.animation.AccelerateDecelerateInterpolator;
import com.otaliastudios.zoom.AbsolutePoint;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomLogger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Set;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.TypeIntrinsics;
import yl.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: q  reason: collision with root package name */
    public static final C0766b f54802q = new C0766b(null);

    /* renamed from: r  reason: collision with root package name */
    private static final String f54803r;

    /* renamed from: s  reason: collision with root package name */
    private static final ZoomLogger f54804s;

    /* renamed from: t  reason: collision with root package name */
    private static final AccelerateDecelerateInterpolator f54805t;

    /* renamed from: a  reason: collision with root package name */
    private final zl.c f54806a;

    /* renamed from: b  reason: collision with root package name */
    private final zl.b f54807b;

    /* renamed from: c  reason: collision with root package name */
    private final wl.a f54808c;

    /* renamed from: d  reason: collision with root package name */
    private final a f54809d;

    /* renamed from: e  reason: collision with root package name */
    private RectF f54810e;

    /* renamed from: f  reason: collision with root package name */
    private RectF f54811f;

    /* renamed from: g  reason: collision with root package name */
    private Matrix f54812g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f54813h;

    /* renamed from: i  reason: collision with root package name */
    private final Matrix f54814i;

    /* renamed from: j  reason: collision with root package name */
    private float f54815j;

    /* renamed from: k  reason: collision with root package name */
    private float f54816k;

    /* renamed from: l  reason: collision with root package name */
    private final ScaledPoint f54817l;

    /* renamed from: m  reason: collision with root package name */
    private final AbsolutePoint f54818m;

    /* renamed from: n  reason: collision with root package name */
    private long f54819n;

    /* renamed from: o  reason: collision with root package name */
    private final Set f54820o;

    /* renamed from: p  reason: collision with root package name */
    private final d f54821p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void c(float f10, boolean z10);

        void d(Runnable runnable);

        void i();

        boolean post(Runnable runnable);
    }

    /* renamed from: yl.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0766b {
        public /* synthetic */ C0766b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0766b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ yl.c f54822d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ ValueAnimator f54823e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(yl.c cVar, ValueAnimator valueAnimator) {
            super(1);
            this.f54822d = cVar;
            this.f54823e = valueAnimator;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            if (this.f54822d.d()) {
                Object animatedValue = this.f54823e.getAnimatedValue("zoom");
                if (animatedValue != null) {
                    applyUpdate.i(((Float) animatedValue).floatValue(), this.f54822d.b());
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                }
            }
            if (this.f54822d.f() != null) {
                Object animatedValue2 = this.f54823e.getAnimatedValue("panX");
                if (animatedValue2 != null) {
                    float floatValue = ((Float) animatedValue2).floatValue();
                    Object animatedValue3 = this.f54823e.getAnimatedValue("panY");
                    if (animatedValue3 != null) {
                        applyUpdate.d(new AbsolutePoint(floatValue, ((Float) animatedValue3).floatValue()), this.f54822d.a());
                    } else {
                        throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                    }
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                }
            } else if (this.f54822d.i() != null) {
                Object animatedValue4 = this.f54823e.getAnimatedValue("panX");
                if (animatedValue4 != null) {
                    float floatValue2 = ((Float) animatedValue4).floatValue();
                    Object animatedValue5 = this.f54823e.getAnimatedValue("panY");
                    if (animatedValue5 != null) {
                        applyUpdate.e(new ScaledPoint(floatValue2, ((Float) animatedValue5).floatValue()), this.f54822d.a());
                    } else {
                        throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                    }
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                }
            }
            applyUpdate.f(this.f54822d.g(), this.f54822d.h());
            applyUpdate.g(this.f54822d.e());
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends AnimatorListenerAdapter {
        d() {
        }

        private final void a(Animator animator) {
            animator.removeListener(this);
            Set set = b.this.f54820o;
            if (set != null) {
                TypeIntrinsics.asMutableCollection(set).remove(animator);
                if (b.this.f54820o.isEmpty()) {
                    b.this.f54808c.f();
                    return;
                }
                return;
            }
            throw new NullPointerException("null cannot be cast to non-null type kotlin.collections.MutableCollection<T>");
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            Intrinsics.checkNotNullParameter(animator, "animator");
            a(animator);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            Intrinsics.checkNotNullParameter(animator, "animator");
            a(animator);
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f54803r = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17313b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f54804s = aVar.a(TAG);
        f54805t = new AccelerateDecelerateInterpolator();
    }

    public b(zl.c zoomManager, zl.b panManager, wl.a stateController, a callback) {
        Intrinsics.checkNotNullParameter(zoomManager, "zoomManager");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.f54806a = zoomManager;
        this.f54807b = panManager;
        this.f54808c = stateController;
        this.f54809d = callback;
        this.f54810e = new RectF();
        this.f54811f = new RectF();
        this.f54812g = new Matrix();
        this.f54814i = new Matrix();
        this.f54817l = new ScaledPoint(0.0f, 0.0f, 3, null);
        this.f54818m = new AbsolutePoint(0.0f, 0.0f, 3, null);
        this.f54819n = 280L;
        this.f54820o = new LinkedHashSet();
        this.f54821p = new d();
    }

    private final void A(float f10, boolean z10) {
        boolean z11;
        G();
        if (q() > 0.0f && n() > 0.0f) {
            float f11 = this.f54815j;
            if (f11 > 0.0f && this.f54816k > 0.0f) {
                f54804s.h("onSizeChanged:", "containerWidth:", Float.valueOf(f11), "containerHeight:", Float.valueOf(this.f54816k), "contentWidth:", Float.valueOf(q()), "contentHeight:", Float.valueOf(n()));
                if (this.f54813h && !z10) {
                    z11 = false;
                } else {
                    z11 = true;
                }
                this.f54813h = true;
                this.f54809d.c(f10, z11);
            }
        }
    }

    private final void G() {
        this.f54812g.mapRect(this.f54810e, this.f54811f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(b this$0, yl.c update, ValueAnimator valueAnimator) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(update, "$update");
        this$0.g(new c(update, valueAnimator));
    }

    private final void j() {
        this.f54809d.i();
    }

    private final void k(boolean z10) {
        float c10 = this.f54807b.c(true, z10);
        float c11 = this.f54807b.c(false, z10);
        if (c10 == 0.0f && c11 == 0.0f) {
            return;
        }
        this.f54812g.postTranslate(c10, c11);
        G();
    }

    public final boolean B(Runnable action) {
        Intrinsics.checkNotNullParameter(action, "action");
        return this.f54809d.post(action);
    }

    public final void C(Runnable action) {
        Intrinsics.checkNotNullParameter(action, "action");
        this.f54809d.d(action);
    }

    public final void D(long j10) {
        this.f54819n = j10;
    }

    public final void E(float f10, float f11, boolean z10) {
        if (f10 > 0.0f && f11 > 0.0f) {
            if (f10 != this.f54815j || f11 != this.f54816k || z10) {
                this.f54815j = f10;
                this.f54816k = f11;
                A(y(), z10);
            }
        }
    }

    public final void F(float f10, float f11, boolean z10) {
        if (f10 > 0.0f && f11 > 0.0f) {
            if (q() != f10 || n() != f11 || z10) {
                float y10 = y();
                this.f54811f.set(0.0f, 0.0f, f10, f11);
                A(y10, z10);
            }
        }
    }

    public final void e(Function1 update) {
        Intrinsics.checkNotNullParameter(update, "update");
        f(yl.c.f54825l.a(update));
    }

    public final void f(final yl.c update) {
        ScaledPoint i10;
        float j10;
        AbsolutePoint f10;
        Intrinsics.checkNotNullParameter(update, "update");
        if (!this.f54813h || !this.f54808c.k()) {
            return;
        }
        ArrayList arrayList = new ArrayList();
        if (update.f() != null) {
            if (update.k()) {
                f10 = s().f(update.f());
            } else {
                f10 = update.f();
            }
            PropertyValuesHolder ofFloat = PropertyValuesHolder.ofFloat("panX", t(), f10.c());
            Intrinsics.checkNotNullExpressionValue(ofFloat, "ofFloat(\"panX\", panX, target.x)");
            arrayList.add(ofFloat);
            PropertyValuesHolder ofFloat2 = PropertyValuesHolder.ofFloat("panY", u(), f10.d());
            Intrinsics.checkNotNullExpressionValue(ofFloat2, "ofFloat(\"panY\", panY, target.y)");
            arrayList.add(ofFloat2);
        } else if (update.i() != null) {
            if (update.k()) {
                i10 = v().f(update.i());
            } else {
                i10 = update.i();
            }
            PropertyValuesHolder ofFloat3 = PropertyValuesHolder.ofFloat("panX", w(), i10.c());
            Intrinsics.checkNotNullExpressionValue(ofFloat3, "ofFloat(\"panX\", scaledPanX, target.x)");
            arrayList.add(ofFloat3);
            PropertyValuesHolder ofFloat4 = PropertyValuesHolder.ofFloat("panY", x(), i10.d());
            Intrinsics.checkNotNullExpressionValue(ofFloat4, "ofFloat(\"panY\", scaledPanY, target.y)");
            arrayList.add(ofFloat4);
        }
        if (update.d()) {
            if (update.l()) {
                j10 = y() * update.j();
            } else {
                j10 = update.j();
            }
            PropertyValuesHolder ofFloat5 = PropertyValuesHolder.ofFloat("zoom", y(), this.f54806a.b(j10, update.b()));
            Intrinsics.checkNotNullExpressionValue(ofFloat5, "ofFloat(\"zoom\", zoom, newZoom)");
            arrayList.add(ofFloat5);
        }
        Object[] array = arrayList.toArray(new PropertyValuesHolder[0]);
        if (array != null) {
            PropertyValuesHolder[] propertyValuesHolderArr = (PropertyValuesHolder[]) array;
            ValueAnimator animator = ValueAnimator.ofPropertyValuesHolder((PropertyValuesHolder[]) Arrays.copyOf(propertyValuesHolderArr, propertyValuesHolderArr.length));
            animator.setDuration(this.f54819n);
            animator.setInterpolator(f54805t);
            animator.addListener(this.f54821p);
            animator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: yl.a
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    b.d(b.this, update, valueAnimator);
                }
            });
            animator.start();
            Set set = this.f54820o;
            Intrinsics.checkNotNullExpressionValue(animator, "animator");
            set.add(animator);
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type kotlin.Array<T>");
    }

    public final void g(Function1 update) {
        Intrinsics.checkNotNullParameter(update, "update");
        h(yl.c.f54825l.a(update));
    }

    public final void h(yl.c update) {
        ScaledPoint e10;
        float j10;
        float f10;
        AbsolutePoint e11;
        Intrinsics.checkNotNullParameter(update, "update");
        if (this.f54813h) {
            if (update.f() != null) {
                if (update.k()) {
                    e11 = update.f();
                } else {
                    e11 = update.f().e(s());
                }
                this.f54812g.preTranslate(e11.c(), e11.d());
                G();
            } else if (update.i() != null) {
                if (update.k()) {
                    e10 = update.i();
                } else {
                    e10 = update.i().e(v());
                }
                this.f54812g.postTranslate(e10.c(), e10.d());
                G();
            }
            if (update.d()) {
                if (update.l()) {
                    j10 = y() * update.j();
                } else {
                    j10 = update.j();
                }
                float b10 = this.f54806a.b(j10, update.b()) / y();
                float f11 = 0.0f;
                if (update.g() != null) {
                    f10 = update.g().floatValue();
                } else if (update.c()) {
                    f10 = 0.0f;
                } else {
                    f10 = this.f54815j / 2.0f;
                }
                if (update.h() != null) {
                    f11 = update.h().floatValue();
                } else if (!update.c()) {
                    f11 = this.f54816k / 2.0f;
                }
                this.f54812g.postScale(b10, b10, f10, f11);
                G();
            }
            k(update.a());
            if (update.e()) {
                j();
            }
        }
    }

    public final void i() {
        for (ValueAnimator valueAnimator : this.f54820o) {
            valueAnimator.cancel();
        }
        this.f54820o.clear();
    }

    public final float l() {
        return this.f54816k;
    }

    public final float m() {
        return this.f54815j;
    }

    public final float n() {
        return this.f54811f.height();
    }

    public final float o() {
        return this.f54810e.height();
    }

    public final float p() {
        return this.f54810e.width();
    }

    public final float q() {
        return this.f54811f.width();
    }

    public final Matrix r() {
        this.f54814i.set(this.f54812g);
        return this.f54814i;
    }

    public final AbsolutePoint s() {
        this.f54818m.h(Float.valueOf(t()), Float.valueOf(u()));
        return this.f54818m;
    }

    public final float t() {
        return w() / y();
    }

    public final float u() {
        return x() / y();
    }

    public final ScaledPoint v() {
        this.f54817l.g(Float.valueOf(w()), Float.valueOf(x()));
        return this.f54817l;
    }

    public final float w() {
        return this.f54810e.left;
    }

    public final float x() {
        return this.f54810e.top;
    }

    public final float y() {
        return this.f54810e.width() / this.f54811f.width();
    }

    public final boolean z() {
        return this.f54813h;
    }
}
