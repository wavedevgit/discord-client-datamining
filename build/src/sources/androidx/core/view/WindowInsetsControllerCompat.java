package androidx.core.view;

import android.os.Build;
import android.os.CancellationSignal;
import android.view.View;
import android.view.Window;
import android.view.WindowInsetsAnimationControlListener;
import android.view.WindowInsetsAnimationController;
import android.view.WindowInsetsController;
import android.view.animation.Interpolator;
import androidx.collection.SimpleArrayMap;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class WindowInsetsControllerCompat {

    /* renamed from: a  reason: collision with root package name */
    private final g f3407a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends g {

        /* renamed from: a  reason: collision with root package name */
        protected final Window f3408a;

        /* renamed from: b  reason: collision with root package name */
        private final b0 f3409b;

        a(Window window, b0 b0Var) {
            this.f3408a = window;
            this.f3409b = b0Var;
        }

        private void h(int i10) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 8) {
                        return;
                    }
                    this.f3409b.a();
                    return;
                }
                i(2);
                return;
            }
            i(4);
        }

        private void k(int i10) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 8) {
                        return;
                    }
                    this.f3409b.b();
                    return;
                }
                l(2);
                return;
            }
            l(4);
            m(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void a(int i10, long j10, Interpolator interpolator, CancellationSignal cancellationSignal, c1 c1Var) {
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void b(int i10) {
            for (int i11 = 1; i11 <= 512; i11 <<= 1) {
                if ((i10 & i11) != 0) {
                    h(i11);
                }
            }
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void f(int i10) {
            this.f3408a.getDecorView().setTag(356039078, Integer.valueOf(i10));
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        return;
                    }
                    l(RecyclerView.ItemAnimator.FLAG_MOVED);
                    i(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
                    return;
                }
                l(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
                i(RecyclerView.ItemAnimator.FLAG_MOVED);
                return;
            }
            l(6144);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void g(int i10) {
            for (int i11 = 1; i11 <= 512; i11 <<= 1) {
                if ((i10 & i11) != 0) {
                    k(i11);
                }
            }
        }

        protected void i(int i10) {
            View decorView = this.f3408a.getDecorView();
            decorView.setSystemUiVisibility(i10 | decorView.getSystemUiVisibility());
        }

        protected void j(int i10) {
            this.f3408a.addFlags(i10);
        }

        protected void l(int i10) {
            View decorView = this.f3408a.getDecorView();
            decorView.setSystemUiVisibility((~i10) & decorView.getSystemUiVisibility());
        }

        protected void m(int i10) {
            this.f3408a.clearFlags(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b extends a {
        b(Window window, b0 b0Var) {
            super(window, b0Var);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        public boolean c() {
            if ((this.f3408a.getDecorView().getSystemUiVisibility() & 8192) != 0) {
                return true;
            }
            return false;
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        public void e(boolean z10) {
            if (z10) {
                m(67108864);
                j(Integer.MIN_VALUE);
                i(8192);
                return;
            }
            l(8192);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class c extends b {
        c(Window window, b0 b0Var) {
            super(window, b0Var);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        public void d(boolean z10) {
            if (z10) {
                m(134217728);
                j(Integer.MIN_VALUE);
                i(16);
                return;
            }
            l(16);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class e extends d {
        e(Window window, WindowInsetsControllerCompat windowInsetsControllerCompat, b0 b0Var) {
            super(window, windowInsetsControllerCompat, b0Var);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.d, androidx.core.view.WindowInsetsControllerCompat.g
        void f(int i10) {
            this.f3411b.setSystemBarsBehavior(i10);
        }

        e(WindowInsetsController windowInsetsController, WindowInsetsControllerCompat windowInsetsControllerCompat, b0 b0Var) {
            super(windowInsetsController, windowInsetsControllerCompat, b0Var);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class f extends e {
        f(Window window, WindowInsetsControllerCompat windowInsetsControllerCompat, b0 b0Var) {
            super(window, windowInsetsControllerCompat, b0Var);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.d, androidx.core.view.WindowInsetsControllerCompat.g
        public boolean c() {
            if ((this.f3411b.getSystemBarsAppearance() & 8) != 0) {
                return true;
            }
            return false;
        }

        f(WindowInsetsController windowInsetsController, WindowInsetsControllerCompat windowInsetsControllerCompat, b0 b0Var) {
            super(windowInsetsController, windowInsetsControllerCompat, b0Var);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class g {
        g() {
        }

        abstract void a(int i10, long j10, Interpolator interpolator, CancellationSignal cancellationSignal, c1 c1Var);

        abstract void b(int i10);

        public abstract boolean c();

        public void d(boolean z10) {
        }

        public abstract void e(boolean z10);

        abstract void f(int i10);

        abstract void g(int i10);
    }

    private WindowInsetsControllerCompat(WindowInsetsController windowInsetsController) {
        if (Build.VERSION.SDK_INT >= 35) {
            this.f3407a = new f(windowInsetsController, this, new b0(windowInsetsController));
        } else {
            this.f3407a = new d(windowInsetsController, this, new b0(windowInsetsController));
        }
    }

    public static WindowInsetsControllerCompat h(WindowInsetsController windowInsetsController) {
        return new WindowInsetsControllerCompat(windowInsetsController);
    }

    public void a(int i10, long j10, Interpolator interpolator, CancellationSignal cancellationSignal, c1 c1Var) {
        this.f3407a.a(i10, j10, interpolator, cancellationSignal, c1Var);
    }

    public void b(int i10) {
        this.f3407a.b(i10);
    }

    public boolean c() {
        return this.f3407a.c();
    }

    public void d(boolean z10) {
        this.f3407a.d(z10);
    }

    public void e(boolean z10) {
        this.f3407a.e(z10);
    }

    public void f(int i10) {
        this.f3407a.f(i10);
    }

    public void g(int i10) {
        this.f3407a.g(i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class d extends g {

        /* renamed from: a  reason: collision with root package name */
        final WindowInsetsControllerCompat f3410a;

        /* renamed from: b  reason: collision with root package name */
        final WindowInsetsController f3411b;

        /* renamed from: c  reason: collision with root package name */
        final b0 f3412c;

        /* renamed from: d  reason: collision with root package name */
        private final SimpleArrayMap f3413d;

        /* renamed from: e  reason: collision with root package name */
        protected Window f3414e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements WindowInsetsAnimationControlListener {

            /* renamed from: a  reason: collision with root package name */
            private d1 f3415a = null;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ c1 f3416b;

            a(c1 c1Var) {
                this.f3416b = c1Var;
            }

            public void onCancelled(WindowInsetsAnimationController windowInsetsAnimationController) {
                d1 d1Var;
                c1 c1Var = this.f3416b;
                if (windowInsetsAnimationController == null) {
                    d1Var = null;
                } else {
                    d1Var = this.f3415a;
                }
                c1Var.a(d1Var);
            }

            public void onFinished(WindowInsetsAnimationController windowInsetsAnimationController) {
                this.f3416b.c(this.f3415a);
            }

            public void onReady(WindowInsetsAnimationController windowInsetsAnimationController, int i10) {
                d1 d1Var = new d1(windowInsetsAnimationController);
                this.f3415a = d1Var;
                this.f3416b.b(d1Var, i10);
            }
        }

        d(Window window, WindowInsetsControllerCompat windowInsetsControllerCompat, b0 b0Var) {
            this(window.getInsetsController(), windowInsetsControllerCompat, b0Var);
            this.f3414e = window;
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void a(int i10, long j10, Interpolator interpolator, CancellationSignal cancellationSignal, c1 c1Var) {
            this.f3411b.controlWindowInsetsAnimation(i10, j10, interpolator, cancellationSignal, new a(c1Var));
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void b(int i10) {
            if ((i10 & 8) != 0) {
                this.f3412c.a();
            }
            this.f3411b.hide(i10 & (-9));
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        public boolean c() {
            this.f3411b.setSystemBarsAppearance(0, 0);
            if ((this.f3411b.getSystemBarsAppearance() & 8) == 0) {
                return false;
            }
            return true;
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        public void d(boolean z10) {
            if (z10) {
                if (this.f3414e != null) {
                    h(16);
                }
                this.f3411b.setSystemBarsAppearance(16, 16);
                return;
            }
            if (this.f3414e != null) {
                i(16);
            }
            this.f3411b.setSystemBarsAppearance(0, 16);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        public void e(boolean z10) {
            if (z10) {
                if (this.f3414e != null) {
                    h(8192);
                }
                this.f3411b.setSystemBarsAppearance(8, 8);
                return;
            }
            if (this.f3414e != null) {
                i(8192);
            }
            this.f3411b.setSystemBarsAppearance(0, 8);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void f(int i10) {
            Window window = this.f3414e;
            if (window != null) {
                window.getDecorView().setTag(356039078, Integer.valueOf(i10));
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return;
                        }
                        i(RecyclerView.ItemAnimator.FLAG_MOVED);
                        h(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
                        return;
                    }
                    i(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
                    h(RecyclerView.ItemAnimator.FLAG_MOVED);
                    return;
                }
                i(6144);
                return;
            }
            this.f3411b.setSystemBarsBehavior(i10);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void g(int i10) {
            if ((i10 & 8) != 0) {
                this.f3412c.b();
            }
            this.f3411b.show(i10 & (-9));
        }

        protected void h(int i10) {
            View decorView = this.f3414e.getDecorView();
            decorView.setSystemUiVisibility(i10 | decorView.getSystemUiVisibility());
        }

        protected void i(int i10) {
            View decorView = this.f3414e.getDecorView();
            decorView.setSystemUiVisibility((~i10) & decorView.getSystemUiVisibility());
        }

        d(WindowInsetsController windowInsetsController, WindowInsetsControllerCompat windowInsetsControllerCompat, b0 b0Var) {
            this.f3413d = new SimpleArrayMap();
            this.f3411b = windowInsetsController;
            this.f3410a = windowInsetsControllerCompat;
            this.f3412c = b0Var;
        }
    }

    public WindowInsetsControllerCompat(Window window, View view) {
        b0 b0Var = new b0(view);
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 35) {
            this.f3407a = new f(window, this, b0Var);
        } else if (i10 >= 30) {
            this.f3407a = new d(window, this, b0Var);
        } else if (i10 >= 26) {
            this.f3407a = new c(window, b0Var);
        } else {
            this.f3407a = new b(window, b0Var);
        }
    }
}
