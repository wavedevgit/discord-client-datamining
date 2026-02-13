package dm;

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
import dm.c;
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
    public static final C0293b f21777q = new C0293b(null);

    /* renamed from: r  reason: collision with root package name */
    private static final String f21778r;

    /* renamed from: s  reason: collision with root package name */
    private static final ZoomLogger f21779s;

    /* renamed from: t  reason: collision with root package name */
    private static final AccelerateDecelerateInterpolator f21780t;

    /* renamed from: a  reason: collision with root package name */
    private final em.c f21781a;

    /* renamed from: b  reason: collision with root package name */
    private final em.b f21782b;

    /* renamed from: c  reason: collision with root package name */
    private final bm.a f21783c;

    /* renamed from: d  reason: collision with root package name */
    private final a f21784d;

    /* renamed from: e  reason: collision with root package name */
    private RectF f21785e;

    /* renamed from: f  reason: collision with root package name */
    private RectF f21786f;

    /* renamed from: g  reason: collision with root package name */
    private Matrix f21787g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f21788h;

    /* renamed from: i  reason: collision with root package name */
    private final Matrix f21789i;

    /* renamed from: j  reason: collision with root package name */
    private float f21790j;

    /* renamed from: k  reason: collision with root package name */
    private float f21791k;

    /* renamed from: l  reason: collision with root package name */
    private final ScaledPoint f21792l;

    /* renamed from: m  reason: collision with root package name */
    private final AbsolutePoint f21793m;

    /* renamed from: n  reason: collision with root package name */
    private long f21794n;

    /* renamed from: o  reason: collision with root package name */
    private final Set f21795o;

    /* renamed from: p  reason: collision with root package name */
    private final d f21796p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void c(float f10, boolean z10);

        void d(Runnable runnable);

        void i();

        boolean post(Runnable runnable);
    }

    /* renamed from: dm.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0293b {
        public /* synthetic */ C0293b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0293b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ dm.c f21797d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ ValueAnimator f21798e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(dm.c cVar, ValueAnimator valueAnimator) {
            super(1);
            this.f21797d = cVar;
            this.f21798e = valueAnimator;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            if (this.f21797d.d()) {
                Object animatedValue = this.f21798e.getAnimatedValue("zoom");
                if (animatedValue != null) {
                    applyUpdate.i(((Float) animatedValue).floatValue(), this.f21797d.b());
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                }
            }
            if (this.f21797d.f() != null) {
                Object animatedValue2 = this.f21798e.getAnimatedValue("panX");
                if (animatedValue2 != null) {
                    float floatValue = ((Float) animatedValue2).floatValue();
                    Object animatedValue3 = this.f21798e.getAnimatedValue("panY");
                    if (animatedValue3 != null) {
                        applyUpdate.d(new AbsolutePoint(floatValue, ((Float) animatedValue3).floatValue()), this.f21797d.a());
                    } else {
                        throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                    }
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                }
            } else if (this.f21797d.i() != null) {
                Object animatedValue4 = this.f21798e.getAnimatedValue("panX");
                if (animatedValue4 != null) {
                    float floatValue2 = ((Float) animatedValue4).floatValue();
                    Object animatedValue5 = this.f21798e.getAnimatedValue("panY");
                    if (animatedValue5 != null) {
                        applyUpdate.e(new ScaledPoint(floatValue2, ((Float) animatedValue5).floatValue()), this.f21797d.a());
                    } else {
                        throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                    }
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type kotlin.Float");
                }
            }
            applyUpdate.f(this.f21797d.g(), this.f21797d.h());
            applyUpdate.g(this.f21797d.e());
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32556a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends AnimatorListenerAdapter {
        d() {
        }

        private final void a(Animator animator) {
            animator.removeListener(this);
            Set set = b.this.f21795o;
            if (set != null) {
                TypeIntrinsics.asMutableCollection(set).remove(animator);
                if (b.this.f21795o.isEmpty()) {
                    b.this.f21783c.f();
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
        f21778r = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18183b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f21779s = aVar.a(TAG);
        f21780t = new AccelerateDecelerateInterpolator();
    }

    public b(em.c zoomManager, em.b panManager, bm.a stateController, a callback) {
        Intrinsics.checkNotNullParameter(zoomManager, "zoomManager");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.f21781a = zoomManager;
        this.f21782b = panManager;
        this.f21783c = stateController;
        this.f21784d = callback;
        this.f21785e = new RectF();
        this.f21786f = new RectF();
        this.f21787g = new Matrix();
        this.f21789i = new Matrix();
        this.f21792l = new ScaledPoint(0.0f, 0.0f, 3, null);
        this.f21793m = new AbsolutePoint(0.0f, 0.0f, 3, null);
        this.f21794n = 280L;
        this.f21795o = new LinkedHashSet();
        this.f21796p = new d();
    }

    private final void A(float f10, boolean z10) {
        boolean z11;
        G();
        if (q() > 0.0f && n() > 0.0f) {
            float f11 = this.f21790j;
            if (f11 > 0.0f && this.f21791k > 0.0f) {
                f21779s.h("onSizeChanged:", "containerWidth:", Float.valueOf(f11), "containerHeight:", Float.valueOf(this.f21791k), "contentWidth:", Float.valueOf(q()), "contentHeight:", Float.valueOf(n()));
                if (this.f21788h && !z10) {
                    z11 = false;
                } else {
                    z11 = true;
                }
                this.f21788h = true;
                this.f21784d.c(f10, z11);
            }
        }
    }

    private final void G() {
        this.f21787g.mapRect(this.f21785e, this.f21786f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(b this$0, dm.c update, ValueAnimator valueAnimator) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(update, "$update");
        this$0.h(new c(update, valueAnimator));
    }

    private final void j() {
        this.f21784d.i();
    }

    private final void k(boolean z10) {
        float c10 = this.f21782b.c(true, z10);
        float c11 = this.f21782b.c(false, z10);
        if (c10 == 0.0f && c11 == 0.0f) {
            return;
        }
        this.f21787g.postTranslate(c10, c11);
        G();
    }

    public final boolean B(Runnable action) {
        Intrinsics.checkNotNullParameter(action, "action");
        return this.f21784d.post(action);
    }

    public final void C(Runnable action) {
        Intrinsics.checkNotNullParameter(action, "action");
        this.f21784d.d(action);
    }

    public final void D(long j10) {
        this.f21794n = j10;
    }

    public final void E(float f10, float f11, boolean z10) {
        if (f10 > 0.0f && f11 > 0.0f) {
            if (f10 != this.f21790j || f11 != this.f21791k || z10) {
                this.f21790j = f10;
                this.f21791k = f11;
                A(y(), z10);
            }
        }
    }

    public final void F(float f10, float f11, boolean z10) {
        if (f10 > 0.0f && f11 > 0.0f) {
            if (q() != f10 || n() != f11 || z10) {
                float y10 = y();
                this.f21786f.set(0.0f, 0.0f, f10, f11);
                A(y10, z10);
            }
        }
    }

    public final void e(final dm.c update) {
        ScaledPoint i10;
        float j10;
        AbsolutePoint f10;
        Intrinsics.checkNotNullParameter(update, "update");
        if (!this.f21788h || !this.f21783c.k()) {
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
            PropertyValuesHolder ofFloat5 = PropertyValuesHolder.ofFloat("zoom", y(), this.f21781a.b(j10, update.b()));
            Intrinsics.checkNotNullExpressionValue(ofFloat5, "ofFloat(\"zoom\", zoom, newZoom)");
            arrayList.add(ofFloat5);
        }
        Object[] array = arrayList.toArray(new PropertyValuesHolder[0]);
        if (array != null) {
            PropertyValuesHolder[] propertyValuesHolderArr = (PropertyValuesHolder[]) array;
            ValueAnimator animator = ValueAnimator.ofPropertyValuesHolder((PropertyValuesHolder[]) Arrays.copyOf(propertyValuesHolderArr, propertyValuesHolderArr.length));
            animator.setDuration(this.f21794n);
            animator.setInterpolator(f21780t);
            animator.addListener(this.f21796p);
            animator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: dm.a
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    b.d(b.this, update, valueAnimator);
                }
            });
            animator.start();
            Set set = this.f21795o;
            Intrinsics.checkNotNullExpressionValue(animator, "animator");
            set.add(animator);
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type kotlin.Array<T>");
    }

    public final void f(Function1 update) {
        Intrinsics.checkNotNullParameter(update, "update");
        e(dm.c.f21800l.a(update));
    }

    public final void g(dm.c update) {
        ScaledPoint e10;
        float j10;
        float f10;
        AbsolutePoint e11;
        Intrinsics.checkNotNullParameter(update, "update");
        if (this.f21788h) {
            if (update.f() != null) {
                if (update.k()) {
                    e11 = update.f();
                } else {
                    e11 = update.f().e(s());
                }
                this.f21787g.preTranslate(e11.c(), e11.d());
                G();
            } else if (update.i() != null) {
                if (update.k()) {
                    e10 = update.i();
                } else {
                    e10 = update.i().e(v());
                }
                this.f21787g.postTranslate(e10.c(), e10.d());
                G();
            }
            if (update.d()) {
                if (update.l()) {
                    j10 = y() * update.j();
                } else {
                    j10 = update.j();
                }
                float b10 = this.f21781a.b(j10, update.b()) / y();
                float f11 = 0.0f;
                if (update.g() != null) {
                    f10 = update.g().floatValue();
                } else if (update.c()) {
                    f10 = 0.0f;
                } else {
                    f10 = this.f21790j / 2.0f;
                }
                if (update.h() != null) {
                    f11 = update.h().floatValue();
                } else if (!update.c()) {
                    f11 = this.f21791k / 2.0f;
                }
                this.f21787g.postScale(b10, b10, f10, f11);
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
        g(dm.c.f21800l.a(update));
    }

    public final void i() {
        for (ValueAnimator valueAnimator : this.f21795o) {
            valueAnimator.cancel();
        }
        this.f21795o.clear();
    }

    public final float l() {
        return this.f21791k;
    }

    public final float m() {
        return this.f21790j;
    }

    public final float n() {
        return this.f21786f.height();
    }

    public final float o() {
        return this.f21785e.height();
    }

    public final float p() {
        return this.f21785e.width();
    }

    public final float q() {
        return this.f21786f.width();
    }

    public final Matrix r() {
        this.f21789i.set(this.f21787g);
        return this.f21789i;
    }

    public final AbsolutePoint s() {
        this.f21793m.h(Float.valueOf(t()), Float.valueOf(u()));
        return this.f21793m;
    }

    public final float t() {
        return w() / y();
    }

    public final float u() {
        return x() / y();
    }

    public final ScaledPoint v() {
        this.f21792l.g(Float.valueOf(w()), Float.valueOf(x()));
        return this.f21792l;
    }

    public final float w() {
        return this.f21785e.left;
    }

    public final float x() {
        return this.f21785e.top;
    }

    public final float y() {
        return this.f21785e.width() / this.f21786f.width();
    }

    public final boolean z() {
        return this.f21788h;
    }
}
