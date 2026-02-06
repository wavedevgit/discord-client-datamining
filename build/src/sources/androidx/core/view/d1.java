package androidx.core.view;

import android.view.WindowInsetsAnimationController;
import androidx.core.graphics.Insets;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final b f3795a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends b {

        /* renamed from: a  reason: collision with root package name */
        private final WindowInsetsAnimationController f3796a;

        a(WindowInsetsAnimationController windowInsetsAnimationController) {
            this.f3796a = windowInsetsAnimationController;
        }

        @Override // androidx.core.view.d1.b
        void a(boolean z10) {
            this.f3796a.finish(z10);
        }

        @Override // androidx.core.view.d1.b
        public float b() {
            return this.f3796a.getCurrentFraction();
        }

        @Override // androidx.core.view.d1.b
        public Insets c() {
            return Insets.f(this.f3796a.getCurrentInsets());
        }

        @Override // androidx.core.view.d1.b
        public Insets d() {
            return Insets.f(this.f3796a.getHiddenStateInsets());
        }

        @Override // androidx.core.view.d1.b
        public Insets e() {
            return Insets.f(this.f3796a.getShownStateInsets());
        }

        @Override // androidx.core.view.d1.b
        public void f(Insets insets, float f10, float f11) {
            android.graphics.Insets g10;
            WindowInsetsAnimationController windowInsetsAnimationController = this.f3796a;
            if (insets == null) {
                g10 = null;
            } else {
                g10 = insets.g();
            }
            windowInsetsAnimationController.setInsetsAndAlpha(g10, f10, f11);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b {
        b() {
        }

        abstract void a(boolean z10);

        public abstract float b();

        public abstract Insets c();

        public abstract Insets d();

        public abstract Insets e();

        public abstract void f(Insets insets, float f10, float f11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(WindowInsetsAnimationController windowInsetsAnimationController) {
        this.f3795a = new a(windowInsetsAnimationController);
    }

    public void a(boolean z10) {
        this.f3795a.a(z10);
    }

    public float b() {
        return this.f3795a.b();
    }

    public Insets c() {
        return this.f3795a.c();
    }

    public Insets d() {
        return this.f3795a.d();
    }

    public Insets e() {
        return this.f3795a.e();
    }

    public void f(Insets insets, float f10, float f11) {
        this.f3795a.f(insets, f10, f11);
    }
}
