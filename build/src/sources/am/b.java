package am;

import am.c;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: q  reason: collision with root package name */
    public static final C0010b f1113q = new C0010b(null);

    /* renamed from: r  reason: collision with root package name */
    private static final String f1114r;

    /* renamed from: s  reason: collision with root package name */
    private static final ZoomLogger f1115s;

    /* renamed from: t  reason: collision with root package name */
    private static final AccelerateDecelerateInterpolator f1116t;

    /* renamed from: a  reason: collision with root package name */
    private final bm.c f1117a;

    /* renamed from: b  reason: collision with root package name */
    private final bm.b f1118b;

    /* renamed from: c  reason: collision with root package name */
    private final yl.a f1119c;

    /* renamed from: d  reason: collision with root package name */
    private final a f1120d;

    /* renamed from: e  reason: collision with root package name */
    private RectF f1121e;

    /* renamed from: f  reason: collision with root package name */
    private RectF f1122f;

    /* renamed from: g  reason: collision with root package name */
    private Matrix f1123g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1124h;

    /* renamed from: i  reason: collision with root package name */
    private final Matrix f1125i;

    /* renamed from: j  reason: collision with root package name */
    private float f1126j;

    /* renamed from: k  reason: collision with root package name */
    private float f1127k;

    /* renamed from: l  reason: collision with root package name */
    private final ScaledPoint f1128l;

    /* renamed from: m  reason: collision with root package name */
    private final AbsolutePoint f1129m;

    /* renamed from: n  reason: collision with root package name */
    private long f1130n;

    /* renamed from: o  reason: collision with root package name */
    private final Set f1131o;

    /* renamed from: p  reason: collision with root package name */
    private final d f1132p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void c(float f10, boolean z10);

        void d(Runnable runnable);

        void i();

        boolean post(Runnable runnable);
    }

    /* renamed from: am.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0010b {
        public /* synthetic */ C0010b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0010b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ am.c f1133d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ ValueAnimator f1134e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(am.c cVar, ValueAnimator valueAnimator) {
            super(1);
            this.f1133d = cVar;
            this.f1134e = valueAnimator;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            if (this.f1133d.d()) {
                Object animatedValue = this.f1134e.getAnimatedValue("zoom");
                if (animatedValue != null) {
                    applyUpdate.i(((Float) animatedValue).floatValue(), this.f1133d.b());
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                }
            }
            if (this.f1133d.f() != null) {
                Object animatedValue2 = this.f1134e.getAnimatedValue("panX");
                if (animatedValue2 != null) {
                    float floatValue = ((Float) animatedValue2).floatValue();
                    Object animatedValue3 = this.f1134e.getAnimatedValue("panY");
                    if (animatedValue3 != null) {
                        applyUpdate.d(new AbsolutePoint(floatValue, ((Float) animatedValue3).floatValue()), this.f1133d.a());
                    } else {
                        throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                    }
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                }
            } else if (this.f1133d.i() != null) {
                Object animatedValue4 = this.f1134e.getAnimatedValue("panX");
                if (animatedValue4 != null) {
                    float floatValue2 = ((Float) animatedValue4).floatValue();
                    Object animatedValue5 = this.f1134e.getAnimatedValue("panY");
                    if (animatedValue5 != null) {
                        applyUpdate.e(new ScaledPoint(floatValue2, ((Float) animatedValue5).floatValue()), this.f1133d.a());
                    } else {
                        throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                    }
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                }
            }
            applyUpdate.f(this.f1133d.g(), this.f1133d.h());
            applyUpdate.g(this.f1133d.e());
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32056a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends AnimatorListenerAdapter {
        d() {
        }

        private final void a(Animator animator) {
            animator.removeListener(this);
            Set set = b.this.f1131o;
            if (set != null) {
                TypeIntrinsics.asMutableCollection(set).remove(animator);
                if (b.this.f1131o.isEmpty()) {
                    b.this.f1119c.f();
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
        f1114r = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17293b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f1115s = aVar.a(TAG);
        f1116t = new AccelerateDecelerateInterpolator();
    }

    public b(bm.c zoomManager, bm.b panManager, yl.a stateController, a callback) {
        Intrinsics.checkNotNullParameter(zoomManager, "zoomManager");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.f1117a = zoomManager;
        this.f1118b = panManager;
        this.f1119c = stateController;
        this.f1120d = callback;
        this.f1121e = new RectF();
        this.f1122f = new RectF();
        this.f1123g = new Matrix();
        this.f1125i = new Matrix();
        this.f1128l = new ScaledPoint(0.0f, 0.0f, 3, null);
        this.f1129m = new AbsolutePoint(0.0f, 0.0f, 3, null);
        this.f1130n = 280L;
        this.f1131o = new LinkedHashSet();
        this.f1132p = new d();
    }

    private final void A(float f10, boolean z10) {
        boolean z11;
        G();
        if (q() > 0.0f && n() > 0.0f) {
            float f11 = this.f1126j;
            if (f11 > 0.0f && this.f1127k > 0.0f) {
                f1115s.h("onSizeChanged:", "containerWidth:", Float.valueOf(f11), "containerHeight:", Float.valueOf(this.f1127k), "contentWidth:", Float.valueOf(q()), "contentHeight:", Float.valueOf(n()));
                if (this.f1124h && !z10) {
                    z11 = false;
                } else {
                    z11 = true;
                }
                this.f1124h = true;
                this.f1120d.c(f10, z11);
            }
        }
    }

    private final void G() {
        this.f1123g.mapRect(this.f1121e, this.f1122f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(b this$0, am.c update, ValueAnimator valueAnimator) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(update, "$update");
        this$0.h(new c(update, valueAnimator));
    }

    private final void j() {
        this.f1120d.i();
    }

    private final void k(boolean z10) {
        float c10 = this.f1118b.c(true, z10);
        float c11 = this.f1118b.c(false, z10);
        if (c10 == 0.0f && c11 == 0.0f) {
            return;
        }
        this.f1123g.postTranslate(c10, c11);
        G();
    }

    public final boolean B(Runnable action) {
        Intrinsics.checkNotNullParameter(action, "action");
        return this.f1120d.post(action);
    }

    public final void C(Runnable action) {
        Intrinsics.checkNotNullParameter(action, "action");
        this.f1120d.d(action);
    }

    public final void D(long j10) {
        this.f1130n = j10;
    }

    public final void E(float f10, float f11, boolean z10) {
        if (f10 > 0.0f && f11 > 0.0f) {
            if (f10 != this.f1126j || f11 != this.f1127k || z10) {
                this.f1126j = f10;
                this.f1127k = f11;
                A(y(), z10);
            }
        }
    }

    public final void F(float f10, float f11, boolean z10) {
        if (f10 > 0.0f && f11 > 0.0f) {
            if (q() != f10 || n() != f11 || z10) {
                float y10 = y();
                this.f1122f.set(0.0f, 0.0f, f10, f11);
                A(y10, z10);
            }
        }
    }

    public final void e(final am.c update) {
        ScaledPoint i10;
        float j10;
        AbsolutePoint f10;
        Intrinsics.checkNotNullParameter(update, "update");
        if (!this.f1124h || !this.f1119c.k()) {
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
            PropertyValuesHolder ofFloat5 = PropertyValuesHolder.ofFloat("zoom", y(), this.f1117a.b(j10, update.b()));
            Intrinsics.checkNotNullExpressionValue(ofFloat5, "ofFloat(\"zoom\", zoom, newZoom)");
            arrayList.add(ofFloat5);
        }
        Object[] array = arrayList.toArray(new PropertyValuesHolder[0]);
        if (array != null) {
            PropertyValuesHolder[] propertyValuesHolderArr = (PropertyValuesHolder[]) array;
            ValueAnimator animator = ValueAnimator.ofPropertyValuesHolder((PropertyValuesHolder[]) Arrays.copyOf(propertyValuesHolderArr, propertyValuesHolderArr.length));
            animator.setDuration(this.f1130n);
            animator.setInterpolator(f1116t);
            animator.addListener(this.f1132p);
            animator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: am.a
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    b.d(b.this, update, valueAnimator);
                }
            });
            animator.start();
            Set set = this.f1131o;
            Intrinsics.checkNotNullExpressionValue(animator, "animator");
            set.add(animator);
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type kotlin.Array<T>");
    }

    public final void f(Function1 update) {
        Intrinsics.checkNotNullParameter(update, "update");
        e(am.c.f1136l.a(update));
    }

    public final void g(am.c update) {
        ScaledPoint e10;
        float j10;
        float f10;
        AbsolutePoint e11;
        Intrinsics.checkNotNullParameter(update, "update");
        if (this.f1124h) {
            if (update.f() != null) {
                if (update.k()) {
                    e11 = update.f();
                } else {
                    e11 = update.f().e(s());
                }
                this.f1123g.preTranslate(e11.c(), e11.d());
                G();
            } else if (update.i() != null) {
                if (update.k()) {
                    e10 = update.i();
                } else {
                    e10 = update.i().e(v());
                }
                this.f1123g.postTranslate(e10.c(), e10.d());
                G();
            }
            if (update.d()) {
                if (update.l()) {
                    j10 = y() * update.j();
                } else {
                    j10 = update.j();
                }
                float b10 = this.f1117a.b(j10, update.b()) / y();
                float f11 = 0.0f;
                if (update.g() != null) {
                    f10 = update.g().floatValue();
                } else if (update.c()) {
                    f10 = 0.0f;
                } else {
                    f10 = this.f1126j / 2.0f;
                }
                if (update.h() != null) {
                    f11 = update.h().floatValue();
                } else if (!update.c()) {
                    f11 = this.f1127k / 2.0f;
                }
                this.f1123g.postScale(b10, b10, f10, f11);
                G();
            }
            k(update.a());
            if (update.e()) {
                j();
            }
        }
    }

    public final void h(Function1 update) {
        Intrinsics.checkNotNullParameter(update, "update");
        g(am.c.f1136l.a(update));
    }

    public final void i() {
        for (ValueAnimator valueAnimator : this.f1131o) {
            valueAnimator.cancel();
        }
        this.f1131o.clear();
    }

    public final float l() {
        return this.f1127k;
    }

    public final float m() {
        return this.f1126j;
    }

    public final float n() {
        return this.f1122f.height();
    }

    public final float o() {
        return this.f1121e.height();
    }

    public final float p() {
        return this.f1121e.width();
    }

    public final float q() {
        return this.f1122f.width();
    }

    public final Matrix r() {
        this.f1125i.set(this.f1123g);
        return this.f1125i;
    }

    public final AbsolutePoint s() {
        this.f1129m.h(Float.valueOf(t()), Float.valueOf(u()));
        return this.f1129m;
    }

    public final float t() {
        return w() / y();
    }

    public final float u() {
        return x() / y();
    }

    public final ScaledPoint v() {
        this.f1128l.g(Float.valueOf(w()), Float.valueOf(x()));
        return this.f1128l;
    }

    public final float w() {
        return this.f1121e.left;
    }

    public final float x() {
        return this.f1121e.top;
    }

    public final float y() {
        return this.f1121e.width() / this.f1122f.width();
    }

    public final boolean z() {
        return this.f1124h;
    }
}
