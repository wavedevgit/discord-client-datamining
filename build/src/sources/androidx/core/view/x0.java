package androidx.core.view;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ValueAnimator;
import android.os.Build;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowInsets;
import android.view.WindowInsetsAnimation;
import android.view.WindowInsetsAnimation$Callback;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.DecelerateInterpolator;
import android.view.animation.Interpolator;
import android.view.animation.PathInterpolator;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class x0 {

    /* renamed from: a  reason: collision with root package name */
    private e f3399a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        public static final int DISPATCH_MODE_CONTINUE_ON_SUBTREE = 1;
        public static final int DISPATCH_MODE_STOP = 0;
        WindowInsetsCompat mDispachedInsets;
        private final int mDispatchMode;

        public b(int i10) {
            this.mDispatchMode = i10;
        }

        public final int getDispatchMode() {
            return this.mDispatchMode;
        }

        public void onEnd(x0 x0Var) {
        }

        public void onPrepare(x0 x0Var) {
        }

        public abstract WindowInsetsCompat onProgress(WindowInsetsCompat windowInsetsCompat, List list);

        public a onStart(x0 x0Var, a aVar) {
            return aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends e {

        /* renamed from: f  reason: collision with root package name */
        private static final Interpolator f3402f = new PathInterpolator(0.0f, 1.1f, 0.0f, 1.0f);

        /* renamed from: g  reason: collision with root package name */
        private static final Interpolator f3403g = new h3.a();

        /* renamed from: h  reason: collision with root package name */
        private static final Interpolator f3404h = new DecelerateInterpolator(1.5f);

        /* renamed from: i  reason: collision with root package name */
        private static final Interpolator f3405i = new AccelerateInterpolator(1.5f);

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a implements View.OnApplyWindowInsetsListener {

            /* renamed from: a  reason: collision with root package name */
            final b f3406a;

            /* renamed from: b  reason: collision with root package name */
            private WindowInsetsCompat f3407b;

            /* renamed from: androidx.core.view.x0$c$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            class C0038a implements ValueAnimator.AnimatorUpdateListener {

                /* renamed from: a  reason: collision with root package name */
                final /* synthetic */ x0 f3408a;

                /* renamed from: b  reason: collision with root package name */
                final /* synthetic */ WindowInsetsCompat f3409b;

                /* renamed from: c  reason: collision with root package name */
                final /* synthetic */ WindowInsetsCompat f3410c;

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ int f3411d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ View f3412e;

                C0038a(x0 x0Var, WindowInsetsCompat windowInsetsCompat, WindowInsetsCompat windowInsetsCompat2, int i10, View view) {
                    this.f3408a = x0Var;
                    this.f3409b = windowInsetsCompat;
                    this.f3410c = windowInsetsCompat2;
                    this.f3411d = i10;
                    this.f3412e = view;
                }

                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public void onAnimationUpdate(ValueAnimator valueAnimator) {
                    this.f3408a.e(valueAnimator.getAnimatedFraction());
                    c.k(this.f3412e, c.o(this.f3409b, this.f3410c, this.f3408a.b(), this.f3411d), Collections.singletonList(this.f3408a));
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            class b extends AnimatorListenerAdapter {

                /* renamed from: a  reason: collision with root package name */
                final /* synthetic */ x0 f3414a;

                /* renamed from: b  reason: collision with root package name */
                final /* synthetic */ View f3415b;

                b(x0 x0Var, View view) {
                    this.f3414a = x0Var;
                    this.f3415b = view;
                }

                @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
                public void onAnimationEnd(Animator animator) {
                    this.f3414a.e(1.0f);
                    c.i(this.f3415b, this.f3414a);
                }
            }

            /* renamed from: androidx.core.view.x0$c$a$c  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            class RunnableC0039c implements Runnable {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ View f3417d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ x0 f3418e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ a f3419i;

                /* renamed from: o  reason: collision with root package name */
                final /* synthetic */ ValueAnimator f3420o;

                RunnableC0039c(View view, x0 x0Var, a aVar, ValueAnimator valueAnimator) {
                    this.f3417d = view;
                    this.f3418e = x0Var;
                    this.f3419i = aVar;
                    this.f3420o = valueAnimator;
                }

                @Override // java.lang.Runnable
                public void run() {
                    c.l(this.f3417d, this.f3418e, this.f3419i);
                    this.f3420o.start();
                }
            }

            a(View view, b bVar) {
                WindowInsetsCompat windowInsetsCompat;
                this.f3406a = bVar;
                WindowInsetsCompat G = h0.G(view);
                if (G != null) {
                    windowInsetsCompat = new WindowInsetsCompat.a(G).a();
                } else {
                    windowInsetsCompat = null;
                }
                this.f3407b = windowInsetsCompat;
            }

            @Override // android.view.View.OnApplyWindowInsetsListener
            public WindowInsets onApplyWindowInsets(View view, WindowInsets windowInsets) {
                long j10;
                if (!view.isLaidOut()) {
                    this.f3407b = WindowInsetsCompat.D(windowInsets, view);
                    return c.m(view, windowInsets);
                }
                WindowInsetsCompat D = WindowInsetsCompat.D(windowInsets, view);
                if (this.f3407b == null) {
                    this.f3407b = h0.G(view);
                }
                if (this.f3407b == null) {
                    this.f3407b = D;
                    return c.m(view, windowInsets);
                }
                b n10 = c.n(view);
                if (n10 != null && Objects.equals(n10.mDispachedInsets, D)) {
                    return c.m(view, windowInsets);
                }
                int[] iArr = new int[1];
                int[] iArr2 = new int[1];
                c.e(D, this.f3407b, iArr, iArr2);
                int i10 = iArr[0];
                int i11 = iArr2[0];
                int i12 = i10 | i11;
                if (i12 == 0) {
                    this.f3407b = D;
                    return c.m(view, windowInsets);
                }
                WindowInsetsCompat windowInsetsCompat = this.f3407b;
                Interpolator g10 = c.g(i10, i11);
                if ((WindowInsetsCompat.p.c() & i12) != 0) {
                    j10 = 160;
                } else {
                    j10 = 250;
                }
                x0 x0Var = new x0(i12, g10, j10);
                x0Var.e(0.0f);
                ValueAnimator duration = ValueAnimator.ofFloat(0.0f, 1.0f).setDuration(x0Var.a());
                a f10 = c.f(D, windowInsetsCompat, i12);
                c.j(view, x0Var, D, false);
                duration.addUpdateListener(new C0038a(x0Var, D, windowInsetsCompat, i12, view));
                duration.addListener(new b(x0Var, view));
                y.a(view, new RunnableC0039c(view, x0Var, f10, duration));
                this.f3407b = D;
                return c.m(view, windowInsets);
            }
        }

        c(int i10, Interpolator interpolator, long j10) {
            super(i10, interpolator, j10);
        }

        static void e(WindowInsetsCompat windowInsetsCompat, WindowInsetsCompat windowInsetsCompat2, int[] iArr, int[] iArr2) {
            boolean z10;
            boolean z11;
            for (int i10 = 1; i10 <= 512; i10 <<= 1) {
                Insets f10 = windowInsetsCompat.f(i10);
                Insets f11 = windowInsetsCompat2.f(i10);
                int i11 = f10.f3150a;
                int i12 = f11.f3150a;
                if (i11 <= i12 && f10.f3151b <= f11.f3151b && f10.f3152c <= f11.f3152c && f10.f3153d <= f11.f3153d) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                if (i11 >= i12 && f10.f3151b >= f11.f3151b && f10.f3152c >= f11.f3152c && f10.f3153d >= f11.f3153d) {
                    z11 = false;
                } else {
                    z11 = true;
                }
                if (z10 != z11) {
                    if (z10) {
                        iArr[0] = iArr[0] | i10;
                    } else {
                        iArr2[0] = iArr2[0] | i10;
                    }
                }
            }
        }

        static a f(WindowInsetsCompat windowInsetsCompat, WindowInsetsCompat windowInsetsCompat2, int i10) {
            Insets f10 = windowInsetsCompat.f(i10);
            Insets f11 = windowInsetsCompat2.f(i10);
            return new a(Insets.c(Math.min(f10.f3150a, f11.f3150a), Math.min(f10.f3151b, f11.f3151b), Math.min(f10.f3152c, f11.f3152c), Math.min(f10.f3153d, f11.f3153d)), Insets.c(Math.max(f10.f3150a, f11.f3150a), Math.max(f10.f3151b, f11.f3151b), Math.max(f10.f3152c, f11.f3152c), Math.max(f10.f3153d, f11.f3153d)));
        }

        static Interpolator g(int i10, int i11) {
            if ((WindowInsetsCompat.p.c() & i10) != 0) {
                return f3402f;
            }
            if ((WindowInsetsCompat.p.c() & i11) != 0) {
                return f3403g;
            }
            if ((i10 & WindowInsetsCompat.p.h()) != 0) {
                return f3404h;
            }
            if ((WindowInsetsCompat.p.h() & i11) != 0) {
                return f3405i;
            }
            return null;
        }

        private static View.OnApplyWindowInsetsListener h(View view, b bVar) {
            return new a(view, bVar);
        }

        static void i(View view, x0 x0Var) {
            b n10 = n(view);
            if (n10 != null) {
                n10.onEnd(x0Var);
                if (n10.getDispatchMode() == 0) {
                    return;
                }
            }
            if (view instanceof ViewGroup) {
                ViewGroup viewGroup = (ViewGroup) view;
                for (int i10 = 0; i10 < viewGroup.getChildCount(); i10++) {
                    i(viewGroup.getChildAt(i10), x0Var);
                }
            }
        }

        static void j(View view, x0 x0Var, WindowInsetsCompat windowInsetsCompat, boolean z10) {
            b n10 = n(view);
            if (n10 != null) {
                n10.mDispachedInsets = windowInsetsCompat;
                if (!z10) {
                    n10.onPrepare(x0Var);
                    if (n10.getDispatchMode() == 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                }
            }
            if (view instanceof ViewGroup) {
                ViewGroup viewGroup = (ViewGroup) view;
                for (int i10 = 0; i10 < viewGroup.getChildCount(); i10++) {
                    j(viewGroup.getChildAt(i10), x0Var, windowInsetsCompat, z10);
                }
            }
        }

        static void k(View view, WindowInsetsCompat windowInsetsCompat, List list) {
            b n10 = n(view);
            if (n10 != null) {
                windowInsetsCompat = n10.onProgress(windowInsetsCompat, list);
                if (n10.getDispatchMode() == 0) {
                    return;
                }
            }
            if (view instanceof ViewGroup) {
                ViewGroup viewGroup = (ViewGroup) view;
                for (int i10 = 0; i10 < viewGroup.getChildCount(); i10++) {
                    k(viewGroup.getChildAt(i10), windowInsetsCompat, list);
                }
            }
        }

        static void l(View view, x0 x0Var, a aVar) {
            b n10 = n(view);
            if (n10 != null) {
                n10.onStart(x0Var, aVar);
                if (n10.getDispatchMode() == 0) {
                    return;
                }
            }
            if (view instanceof ViewGroup) {
                ViewGroup viewGroup = (ViewGroup) view;
                for (int i10 = 0; i10 < viewGroup.getChildCount(); i10++) {
                    l(viewGroup.getChildAt(i10), x0Var, aVar);
                }
            }
        }

        static WindowInsets m(View view, WindowInsets windowInsets) {
            if (view.getTag(o1.e.M) != null) {
                return windowInsets;
            }
            return view.onApplyWindowInsets(windowInsets);
        }

        static b n(View view) {
            Object tag = view.getTag(o1.e.T);
            if (tag instanceof a) {
                return ((a) tag).f3406a;
            }
            return null;
        }

        static WindowInsetsCompat o(WindowInsetsCompat windowInsetsCompat, WindowInsetsCompat windowInsetsCompat2, float f10, int i10) {
            WindowInsetsCompat.a aVar = new WindowInsetsCompat.a(windowInsetsCompat);
            for (int i11 = 1; i11 <= 512; i11 <<= 1) {
                if ((i10 & i11) == 0) {
                    aVar.b(i11, windowInsetsCompat.f(i11));
                } else {
                    Insets f11 = windowInsetsCompat.f(i11);
                    Insets f12 = windowInsetsCompat2.f(i11);
                    float f13 = 1.0f - f10;
                    aVar.b(i11, WindowInsetsCompat.s(f11, (int) (((f11.f3150a - f12.f3150a) * f13) + 0.5d), (int) (((f11.f3151b - f12.f3151b) * f13) + 0.5d), (int) (((f11.f3152c - f12.f3152c) * f13) + 0.5d), (int) (((f11.f3153d - f12.f3153d) * f13) + 0.5d)));
                }
            }
            return aVar.a();
        }

        static void p(View view, b bVar) {
            View.OnApplyWindowInsetsListener onApplyWindowInsetsListener;
            if (bVar != null) {
                onApplyWindowInsetsListener = h(view, bVar);
            } else {
                onApplyWindowInsetsListener = null;
            }
            view.setTag(o1.e.T, onApplyWindowInsetsListener);
            if (view.getTag(o1.e.L) == null && view.getTag(o1.e.M) == null) {
                view.setOnApplyWindowInsetsListener(onApplyWindowInsetsListener);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {

        /* renamed from: a  reason: collision with root package name */
        private final int f3427a;

        /* renamed from: b  reason: collision with root package name */
        private float f3428b;

        /* renamed from: c  reason: collision with root package name */
        private final Interpolator f3429c;

        /* renamed from: d  reason: collision with root package name */
        private final long f3430d;

        /* renamed from: e  reason: collision with root package name */
        private float f3431e = 1.0f;

        e(int i10, Interpolator interpolator, long j10) {
            this.f3427a = i10;
            this.f3429c = interpolator;
            this.f3430d = j10;
        }

        public long a() {
            return this.f3430d;
        }

        public float b() {
            Interpolator interpolator = this.f3429c;
            if (interpolator != null) {
                return interpolator.getInterpolation(this.f3428b);
            }
            return this.f3428b;
        }

        public int c() {
            return this.f3427a;
        }

        public void d(float f10) {
            this.f3428b = f10;
        }
    }

    public x0(int i10, Interpolator interpolator, long j10) {
        if (Build.VERSION.SDK_INT >= 30) {
            this.f3399a = new d(i10, interpolator, j10);
        } else {
            this.f3399a = new c(i10, interpolator, j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void d(View view, b bVar) {
        if (Build.VERSION.SDK_INT >= 30) {
            d.h(view, bVar);
        } else {
            c.p(view, bVar);
        }
    }

    static x0 f(WindowInsetsAnimation windowInsetsAnimation) {
        return new x0(windowInsetsAnimation);
    }

    public long a() {
        return this.f3399a.a();
    }

    public float b() {
        return this.f3399a.b();
    }

    public int c() {
        return this.f3399a.c();
    }

    public void e(float f10) {
        this.f3399a.d(f10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends e {

        /* renamed from: f  reason: collision with root package name */
        private final WindowInsetsAnimation f3422f;

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a extends WindowInsetsAnimation$Callback {

            /* renamed from: a  reason: collision with root package name */
            private final b f3423a;

            /* renamed from: b  reason: collision with root package name */
            private List f3424b;

            /* renamed from: c  reason: collision with root package name */
            private ArrayList f3425c;

            /* renamed from: d  reason: collision with root package name */
            private final HashMap f3426d;

            a(b bVar) {
                super(bVar.getDispatchMode());
                this.f3426d = new HashMap();
                this.f3423a = bVar;
            }

            private x0 a(WindowInsetsAnimation windowInsetsAnimation) {
                x0 x0Var = (x0) this.f3426d.get(windowInsetsAnimation);
                if (x0Var == null) {
                    x0 f10 = x0.f(windowInsetsAnimation);
                    this.f3426d.put(windowInsetsAnimation, f10);
                    return f10;
                }
                return x0Var;
            }

            public void onEnd(WindowInsetsAnimation windowInsetsAnimation) {
                this.f3423a.onEnd(a(windowInsetsAnimation));
                this.f3426d.remove(windowInsetsAnimation);
            }

            public void onPrepare(WindowInsetsAnimation windowInsetsAnimation) {
                this.f3423a.onPrepare(a(windowInsetsAnimation));
            }

            public WindowInsets onProgress(WindowInsets windowInsets, List list) {
                ArrayList arrayList = this.f3425c;
                if (arrayList == null) {
                    ArrayList arrayList2 = new ArrayList(list.size());
                    this.f3425c = arrayList2;
                    this.f3424b = Collections.unmodifiableList(arrayList2);
                } else {
                    arrayList.clear();
                }
                for (int size = list.size() - 1; size >= 0; size--) {
                    WindowInsetsAnimation a10 = b1.a(list.get(size));
                    x0 a11 = a(a10);
                    a11.e(a10.getFraction());
                    this.f3425c.add(a11);
                }
                return this.f3423a.onProgress(WindowInsetsCompat.C(windowInsets), this.f3424b).B();
            }

            public WindowInsetsAnimation.Bounds onStart(WindowInsetsAnimation windowInsetsAnimation, WindowInsetsAnimation.Bounds bounds) {
                return this.f3423a.onStart(a(windowInsetsAnimation), a.d(bounds)).c();
            }
        }

        d(WindowInsetsAnimation windowInsetsAnimation) {
            super(0, null, 0L);
            this.f3422f = windowInsetsAnimation;
        }

        public static WindowInsetsAnimation.Bounds e(a aVar) {
            a1.a();
            return z0.a(aVar.a().g(), aVar.b().g());
        }

        public static Insets f(WindowInsetsAnimation.Bounds bounds) {
            return Insets.f(bounds.getUpperBound());
        }

        public static Insets g(WindowInsetsAnimation.Bounds bounds) {
            return Insets.f(bounds.getLowerBound());
        }

        public static void h(View view, b bVar) {
            a aVar;
            if (bVar != null) {
                aVar = new a(bVar);
            } else {
                aVar = null;
            }
            view.setWindowInsetsAnimationCallback(aVar);
        }

        @Override // androidx.core.view.x0.e
        public long a() {
            return this.f3422f.getDurationMillis();
        }

        @Override // androidx.core.view.x0.e
        public float b() {
            return this.f3422f.getInterpolatedFraction();
        }

        @Override // androidx.core.view.x0.e
        public int c() {
            return this.f3422f.getTypeMask();
        }

        @Override // androidx.core.view.x0.e
        public void d(float f10) {
            this.f3422f.setFraction(f10);
        }

        d(int i10, Interpolator interpolator, long j10) {
            this(y0.a(i10, interpolator, j10));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Insets f3400a;

        /* renamed from: b  reason: collision with root package name */
        private final Insets f3401b;

        public a(Insets insets, Insets insets2) {
            this.f3400a = insets;
            this.f3401b = insets2;
        }

        public static a d(WindowInsetsAnimation.Bounds bounds) {
            return new a(bounds);
        }

        public Insets a() {
            return this.f3400a;
        }

        public Insets b() {
            return this.f3401b;
        }

        public WindowInsetsAnimation.Bounds c() {
            return d.e(this);
        }

        public String toString() {
            return "Bounds{lower=" + this.f3400a + " upper=" + this.f3401b + "}";
        }

        private a(WindowInsetsAnimation.Bounds bounds) {
            this.f3400a = d.g(bounds);
            this.f3401b = d.f(bounds);
        }
    }

    private x0(WindowInsetsAnimation windowInsetsAnimation) {
        this(0, null, 0L);
        if (Build.VERSION.SDK_INT >= 30) {
            this.f3399a = new d(windowInsetsAnimation);
        }
    }
}
