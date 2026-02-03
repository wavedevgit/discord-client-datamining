package com.discord.external_pip;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.app.Activity;
import android.content.Context;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import com.discord.external_pip.ExternalPipTransitionView;
import com.discord.misc.utilities.activity.ActivityExtensionsKt;
import com.discord.theme.ThemeManagerKt;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\u0018\u0000 \u000e2\u00020\u0001:\u0001\u000eB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J*\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\b\b\u0002\u0010\n\u001a\u00020\t2\f\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\r0\fH\u0002¨\u0006\u000f"}, d2 = {"Lcom/discord/external_pip/ExternalPipTransitionView;", "Landroid/view/View;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "fadeOut", "", "animDelay", "", "animDuration", "onComplete", "Lkotlin/Function0;", "", "Companion", "external_pip_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ExternalPipTransitionView extends View {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final String transitionViewTag = ExternalPipTransitionView.class.getSimpleName();

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\u0007\u001a\u00020\b2\b\u0010\t\u001a\u0004\u0018\u00010\nH\u0007J\u001a\u0010\u000b\u001a\u00020\b2\b\u0010\t\u001a\u0004\u0018\u00010\n2\u0006\u0010\f\u001a\u00020\rH\u0007R\u0016\u0010\u0004\u001a\n \u0006*\u0004\u0018\u00010\u00050\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000e"}, d2 = {"Lcom/discord/external_pip/ExternalPipTransitionView$Companion;", "", "<init>", "()V", "transitionViewTag", "", "kotlin.jvm.PlatformType", "tryShow", "", "activity", "Landroid/app/Activity;", "tryHide", "animate", "", "external_pip_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit tryHide$lambda$0(ViewGroup viewGroup, ExternalPipTransitionView externalPipTransitionView) {
            viewGroup.removeView(externalPipTransitionView);
            return Unit.f32464a;
        }

        public final void tryHide(Activity activity, boolean z10) {
            View view;
            final ExternalPipTransitionView externalPipTransitionView;
            final ViewGroup viewGroup = null;
            if (activity != null) {
                view = ActivityExtensionsKt.getRootView(activity);
            } else {
                view = null;
            }
            if (view instanceof ViewGroup) {
                viewGroup = (ViewGroup) view;
            }
            if (viewGroup == null || (externalPipTransitionView = (ExternalPipTransitionView) viewGroup.findViewWithTag(ExternalPipTransitionView.transitionViewTag)) == null) {
                return;
            }
            if (z10) {
                ExternalPipTransitionView.fadeOut$default(externalPipTransitionView, 0L, 0L, new Function0() { // from class: com.discord.external_pip.f
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit tryHide$lambda$0;
                        tryHide$lambda$0 = ExternalPipTransitionView.Companion.tryHide$lambda$0(viewGroup, externalPipTransitionView);
                        return tryHide$lambda$0;
                    }
                }, 3, null);
            } else {
                viewGroup.removeView(externalPipTransitionView);
            }
        }

        public final void tryShow(Activity activity) {
            KeyEvent.Callback callback;
            tryHide(activity, false);
            ViewGroup viewGroup = null;
            if (activity != null) {
                callback = ActivityExtensionsKt.getRootView(activity);
            } else {
                callback = null;
            }
            if (callback instanceof ViewGroup) {
                viewGroup = (ViewGroup) callback;
            }
            if (viewGroup == null) {
                return;
            }
            Context context = viewGroup.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            viewGroup.addView(new ExternalPipTransitionView(context));
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ExternalPipTransitionView(@NotNull Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundModNormal());
        setTag(transitionViewTag);
        setLayoutParams(new ViewGroup.LayoutParams(-1, -1));
    }

    private final boolean fadeOut(long j10, final long j11, final Function0<Unit> function0) {
        return postDelayed(new Runnable() { // from class: com.discord.external_pip.e
            @Override // java.lang.Runnable
            public final void run() {
                ExternalPipTransitionView.fadeOut$lambda$0(ExternalPipTransitionView.this, j11, function0);
            }
        }, j10);
    }

    static /* synthetic */ boolean fadeOut$default(ExternalPipTransitionView externalPipTransitionView, long j10, long j11, Function0 function0, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = externalPipTransitionView.getResources().getInteger(17694720);
        }
        long j12 = j10;
        if ((i10 & 2) != 0) {
            j11 = externalPipTransitionView.getResources().getInteger(17694721);
        }
        return externalPipTransitionView.fadeOut(j12, j11, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void fadeOut$lambda$0(ExternalPipTransitionView externalPipTransitionView, long j10, final Function0 function0) {
        externalPipTransitionView.animate().alpha(0.0f).setDuration(j10).setListener(new AnimatorListenerAdapter() { // from class: com.discord.external_pip.ExternalPipTransitionView$fadeOut$1$1
            @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
            public void onAnimationEnd(Animator animation) {
                Intrinsics.checkNotNullParameter(animation, "animation");
                function0.invoke();
            }
        });
    }
}
