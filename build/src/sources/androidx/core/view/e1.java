package androidx.core.view;

import android.view.WindowInsetsAnimationController;
import androidx.core.graphics.Insets;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e1 {

    /* renamed from: a  reason: collision with root package name */
    private final b f3497a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends b {

        /* renamed from: a  reason: collision with root package name */
        private final WindowInsetsAnimationController f3498a;

        a(WindowInsetsAnimationController windowInsetsAnimationController) {
            this.f3498a = windowInsetsAnimationController;
        }

        @Override // androidx.core.view.e1.b
        void a(boolean z10) {
            this.f3498a.finish(z10);
        }

        @Override // androidx.core.view.e1.b
        public float b() {
            return this.f3498a.getCurrentFraction();
        }

        @Override // androidx.core.view.e1.b
        public Insets c() {
            return Insets.f(this.f3498a.getCurrentInsets());
        }

        @Override // androidx.core.view.e1.b
        public Insets d() {
            return Insets.f(this.f3498a.getHiddenStateInsets());
        }

        @Override // androidx.core.view.e1.b
        public Insets e() {
            return Insets.f(this.f3498a.getShownStateInsets());
        }

        @Override // androidx.core.view.e1.b
        public void f(Insets insets, float f10, float f11) {
            android.graphics.Insets g10;
            WindowInsetsAnimationController windowInsetsAnimationController = this.f3498a;
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
    public e1(WindowInsetsAnimationController windowInsetsAnimationController) {
        this.f3497a = new a(windowInsetsAnimationController);
    }

    public void a(boolean z10) {
        this.f3497a.a(z10);
    }

    public float b() {
        return this.f3497a.b();
    }

    public Insets c() {
        return this.f3497a.c();
    }

    public Insets d() {
        return this.f3497a.d();
    }

    public Insets e() {
        return this.f3497a.e();
    }

    public void f(Insets insets, float f10, float f11) {
        this.f3497a.f(insets, f10, f11);
    }
}
