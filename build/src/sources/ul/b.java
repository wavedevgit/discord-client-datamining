package ul;

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
import ul.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: q  reason: collision with root package name */
    public static final C0664b f50340q = new C0664b(null);

    /* renamed from: r  reason: collision with root package name */
    private static final String f50341r;

    /* renamed from: s  reason: collision with root package name */
    private static final ZoomLogger f50342s;

    /* renamed from: t  reason: collision with root package name */
    private static final AccelerateDecelerateInterpolator f50343t;

    /* renamed from: a  reason: collision with root package name */
    private final vl.c f50344a;

    /* renamed from: b  reason: collision with root package name */
    private final vl.b f50345b;

    /* renamed from: c  reason: collision with root package name */
    private final sl.a f50346c;

    /* renamed from: d  reason: collision with root package name */
    private final a f50347d;

    /* renamed from: e  reason: collision with root package name */
    private RectF f50348e;

    /* renamed from: f  reason: collision with root package name */
    private RectF f50349f;

    /* renamed from: g  reason: collision with root package name */
    private Matrix f50350g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f50351h;

    /* renamed from: i  reason: collision with root package name */
    private final Matrix f50352i;

    /* renamed from: j  reason: collision with root package name */
    private float f50353j;

    /* renamed from: k  reason: collision with root package name */
    private float f50354k;

    /* renamed from: l  reason: collision with root package name */
    private final ScaledPoint f50355l;

    /* renamed from: m  reason: collision with root package name */
    private final AbsolutePoint f50356m;

    /* renamed from: n  reason: collision with root package name */
    private long f50357n;

    /* renamed from: o  reason: collision with root package name */
    private final Set f50358o;

    /* renamed from: p  reason: collision with root package name */
    private final d f50359p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void c(float f10, boolean z10);

        void d(Runnable runnable);

        void i();

        boolean post(Runnable runnable);
    }

    /* renamed from: ul.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0664b {
        public /* synthetic */ C0664b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0664b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ul.c f50360d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ ValueAnimator f50361e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(ul.c cVar, ValueAnimator valueAnimator) {
            super(1);
            this.f50360d = cVar;
            this.f50361e = valueAnimator;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            if (this.f50360d.d()) {
                Object animatedValue = this.f50361e.getAnimatedValue("zoom");
                if (animatedValue != null) {
                    applyUpdate.i(((Float) animatedValue).floatValue(), this.f50360d.b());
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                }
            }
            if (this.f50360d.f() != null) {
                Object animatedValue2 = this.f50361e.getAnimatedValue("panX");
                if (animatedValue2 != null) {
                    float floatValue = ((Float) animatedValue2).floatValue();
                    Object animatedValue3 = this.f50361e.getAnimatedValue("panY");
                    if (animatedValue3 != null) {
                        applyUpdate.d(new AbsolutePoint(floatValue, ((Float) animatedValue3).floatValue()), this.f50360d.a());
                    } else {
                        throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                    }
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                }
            } else if (this.f50360d.i() != null) {
                Object animatedValue4 = this.f50361e.getAnimatedValue("panX");
                if (animatedValue4 != null) {
                    float floatValue2 = ((Float) animatedValue4).floatValue();
                    Object animatedValue5 = this.f50361e.getAnimatedValue("panY");
                    if (animatedValue5 != null) {
                        applyUpdate.e(new ScaledPoint(floatValue2, ((Float) animatedValue5).floatValue()), this.f50360d.a());
                    } else {
                        throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                    }
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                }
            }
            applyUpdate.f(this.f50360d.g(), this.f50360d.h());
            applyUpdate.g(this.f50360d.e());
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33282a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends AnimatorListenerAdapter {
        d() {
        }

        private final void a(Animator animator) {
            animator.removeListener(this);
            Set set = b.this.f50358o;
            if (set != null) {
                TypeIntrinsics.asMutableCollection(set).remove(animator);
                if (b.this.f50358o.isEmpty()) {
                    b.this.f50346c.f();
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
        f50341r = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18306b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f50342s = aVar.a(TAG);
        f50343t = new AccelerateDecelerateInterpolator();
    }

    public b(vl.c zoomManager, vl.b panManager, sl.a stateController, a callback) {
        Intrinsics.checkNotNullParameter(zoomManager, "zoomManager");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.f50344a = zoomManager;
        this.f50345b = panManager;
        this.f50346c = stateController;
        this.f50347d = callback;
        this.f50348e = new RectF();
        this.f50349f = new RectF();
        this.f50350g = new Matrix();
        this.f50352i = new Matrix();
        this.f50355l = new ScaledPoint(0.0f, 0.0f, 3, null);
        this.f50356m = new AbsolutePoint(0.0f, 0.0f, 3, null);
        this.f50357n = 280L;
        this.f50358o = new LinkedHashSet();
        this.f50359p = new d();
    }

    private final void A(float f10, boolean z10) {
        boolean z11;
        G();
        if (q() > 0.0f && n() > 0.0f) {
            float f11 = this.f50353j;
            if (f11 > 0.0f && this.f50354k > 0.0f) {
                f50342s.h("onSizeChanged:", "containerWidth:", Float.valueOf(f11), "containerHeight:", Float.valueOf(this.f50354k), "contentWidth:", Float.valueOf(q()), "contentHeight:", Float.valueOf(n()));
                if (this.f50351h && !z10) {
                    z11 = false;
                } else {
                    z11 = true;
                }
                this.f50351h = true;
                this.f50347d.c(f10, z11);
            }
        }
    }

    private final void G() {
        this.f50350g.mapRect(this.f50348e, this.f50349f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(b this$0, ul.c update, ValueAnimator valueAnimator) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(update, "$update");
        this$0.g(new c(update, valueAnimator));
    }

    private final void j() {
        this.f50347d.i();
    }

    private final void k(boolean z10) {
        float c10 = this.f50345b.c(true, z10);
        float c11 = this.f50345b.c(false, z10);
        if (c10 == 0.0f && c11 == 0.0f) {
            return;
        }
        this.f50350g.postTranslate(c10, c11);
        G();
    }

    public final boolean B(Runnable action) {
        Intrinsics.checkNotNullParameter(action, "action");
        return this.f50347d.post(action);
    }

    public final void C(Runnable action) {
        Intrinsics.checkNotNullParameter(action, "action");
        this.f50347d.d(action);
    }

    public final void D(long j10) {
        this.f50357n = j10;
    }

    public final void E(float f10, float f11, boolean z10) {
        if (f10 > 0.0f && f11 > 0.0f) {
            if (f10 != this.f50353j || f11 != this.f50354k || z10) {
                this.f50353j = f10;
                this.f50354k = f11;
                A(y(), z10);
            }
        }
    }

    public final void F(float f10, float f11, boolean z10) {
        if (f10 > 0.0f && f11 > 0.0f) {
            if (q() != f10 || n() != f11 || z10) {
                float y10 = y();
                this.f50349f.set(0.0f, 0.0f, f10, f11);
                A(y10, z10);
            }
        }
    }

    public final void e(Function1 update) {
        Intrinsics.checkNotNullParameter(update, "update");
        f(ul.c.f50363l.a(update));
    }

    public final void f(final ul.c update) {
        ScaledPoint i10;
        float j10;
        AbsolutePoint f10;
        Intrinsics.checkNotNullParameter(update, "update");
        if (!this.f50351h || !this.f50346c.k()) {
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
            PropertyValuesHolder ofFloat5 = PropertyValuesHolder.ofFloat("zoom", y(), this.f50344a.b(j10, update.b()));
            Intrinsics.checkNotNullExpressionValue(ofFloat5, "ofFloat(\"zoom\", zoom, newZoom)");
            arrayList.add(ofFloat5);
        }
        Object[] array = arrayList.toArray(new PropertyValuesHolder[0]);
        if (array != null) {
            PropertyValuesHolder[] propertyValuesHolderArr = (PropertyValuesHolder[]) array;
            ValueAnimator animator = ValueAnimator.ofPropertyValuesHolder((PropertyValuesHolder[]) Arrays.copyOf(propertyValuesHolderArr, propertyValuesHolderArr.length));
            animator.setDuration(this.f50357n);
            animator.setInterpolator(f50343t);
            animator.addListener(this.f50359p);
            animator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: ul.a
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    b.d(b.this, update, valueAnimator);
                }
            });
            animator.start();
            Set set = this.f50358o;
            Intrinsics.checkNotNullExpressionValue(animator, "animator");
            set.add(animator);
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type kotlin.Array<T>");
    }

    public final void g(Function1 update) {
        Intrinsics.checkNotNullParameter(update, "update");
        h(ul.c.f50363l.a(update));
    }

    public final void h(ul.c update) {
        ScaledPoint e10;
        float j10;
        float f10;
        AbsolutePoint e11;
        Intrinsics.checkNotNullParameter(update, "update");
        if (this.f50351h) {
            if (update.f() != null) {
                if (update.k()) {
                    e11 = update.f();
                } else {
                    e11 = update.f().e(s());
                }
                this.f50350g.preTranslate(e11.c(), e11.d());
                G();
            } else if (update.i() != null) {
                if (update.k()) {
                    e10 = update.i();
                } else {
                    e10 = update.i().e(v());
                }
                this.f50350g.postTranslate(e10.c(), e10.d());
                G();
            }
            if (update.d()) {
                if (update.l()) {
                    j10 = y() * update.j();
                } else {
                    j10 = update.j();
                }
                float b10 = this.f50344a.b(j10, update.b()) / y();
                float f11 = 0.0f;
                if (update.g() != null) {
                    f10 = update.g().floatValue();
                } else if (update.c()) {
                    f10 = 0.0f;
                } else {
                    f10 = this.f50353j / 2.0f;
                }
                if (update.h() != null) {
                    f11 = update.h().floatValue();
                } else if (!update.c()) {
                    f11 = this.f50354k / 2.0f;
                }
                this.f50350g.postScale(b10, b10, f10, f11);
                G();
            }
            k(update.a());
            if (update.e()) {
                j();
            }
        }
    }

    public final void i() {
        for (ValueAnimator valueAnimator : this.f50358o) {
            valueAnimator.cancel();
        }
        this.f50358o.clear();
    }

    public final float l() {
        return this.f50354k;
    }

    public final float m() {
        return this.f50353j;
    }

    public final float n() {
        return this.f50349f.height();
    }

    public final float o() {
        return this.f50348e.height();
    }

    public final float p() {
        return this.f50348e.width();
    }

    public final float q() {
        return this.f50349f.width();
    }

    public final Matrix r() {
        this.f50352i.set(this.f50350g);
        return this.f50352i;
    }

    public final AbsolutePoint s() {
        this.f50356m.h(Float.valueOf(t()), Float.valueOf(u()));
        return this.f50356m;
    }

    public final float t() {
        return w() / y();
    }

    public final float u() {
        return x() / y();
    }

    public final ScaledPoint v() {
        this.f50355l.g(Float.valueOf(w()), Float.valueOf(x()));
        return this.f50355l;
    }

    public final float w() {
        return this.f50348e.left;
    }

    public final float x() {
        return this.f50348e.top;
    }

    public final float y() {
        return this.f50348e.width() / this.f50349f.width();
    }

    public final boolean z() {
        return this.f50351h;
    }
}
