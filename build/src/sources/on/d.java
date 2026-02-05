package on;

import android.content.Context;
import android.view.WindowInsets;
import android.view.animation.Animation;
import android.view.animation.AnimationSet;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.facebook.react.uimanager.PointerEvents;
import com.facebook.react.uimanager.ReactPointerEventsView;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.n0;
import com.swmansion.rnscreens.p;
import kn.j;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends CoordinatorLayout implements ReactPointerEventsView {
    private final n0 J;
    private final ReactPointerEventsView K;
    private final Animation.AnimationListener L;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Animation.AnimationListener {
        a() {
        }

        @Override // android.view.animation.Animation.AnimationListener
        public void onAnimationEnd(Animation animation) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            d.this.getFragment$react_native_screens_release().I();
        }

        @Override // android.view.animation.Animation.AnimationListener
        public void onAnimationRepeat(Animation animation) {
            Intrinsics.checkNotNullParameter(animation, "animation");
        }

        @Override // android.view.animation.Animation.AnimationListener
        public void onAnimationStart(Animation animation) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            d.this.getFragment$react_native_screens_release().J();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(Context context, n0 fragment, ReactPointerEventsView pointerEventsImpl) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(pointerEventsImpl, "pointerEventsImpl");
        this.J = fragment;
        this.K = pointerEventsImpl;
        this.L = new a();
    }

    @Override // android.view.ViewGroup, android.view.View
    public void clearFocus() {
        if (getVisibility() != 4) {
            super.clearFocus();
        }
    }

    @NotNull
    public final n0 getFragment$react_native_screens_release() {
        return this.J;
    }

    @Override // com.facebook.react.uimanager.ReactPointerEventsView
    @NotNull
    public PointerEvents getPointerEvents() {
        return this.K.getPointerEvents();
    }

    @NotNull
    public final Screen getScreen() {
        return this.J.h();
    }

    @Override // android.view.View
    public WindowInsets onApplyWindowInsets(WindowInsets windowInsets) {
        WindowInsets onApplyWindowInsets = super.onApplyWindowInsets(windowInsets);
        Intrinsics.checkNotNullExpressionValue(onApplyWindowInsets, "onApplyWindowInsets(...)");
        return onApplyWindowInsets;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (j.d(this.J.h())) {
            this.J.h().onBottomSheetBehaviorDidLayout$react_native_screens_release(z10);
        }
    }

    @Override // android.view.View
    public void startAnimation(Animation animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        nn.b bVar = new nn.b(this.J);
        bVar.setDuration(animation.getDuration());
        if ((animation instanceof AnimationSet) && !this.J.isRemoving()) {
            AnimationSet animationSet = (AnimationSet) animation;
            animationSet.addAnimation(bVar);
            animationSet.setAnimationListener(this.L);
            super.startAnimation(animationSet);
            return;
        }
        AnimationSet animationSet2 = new AnimationSet(true);
        animationSet2.addAnimation(animation);
        animationSet2.addAnimation(bVar);
        animationSet2.setAnimationListener(this.L);
        super.startAnimation(animationSet2);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public d(Context context, n0 fragment) {
        this(context, fragment, new p());
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(fragment, "fragment");
    }
}
