package com.discord.progress_dots;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0007\n\u0002\u0010\t\n\u0002\b\u0005\u0018\u00002\u00020\u0001:\u0001\u001bB'\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\b\u0010\u0014\u001a\u00020\u000fH\u0014J\u0010\u0010\u0015\u001a\u00020\u000f2\b\b\u0002\u0010\u0016\u001a\u00020\u0017J\u0006\u0010\u0018\u001a\u00020\u000fJ\b\u0010\u0019\u001a\u00020\u000fH\u0002J\b\u0010\u001a\u001a\u00020\u000fH\u0002R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\"\u0010\r\u001a\n\u0012\u0004\u0012\u00020\u000f\u0018\u00010\u000eX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0010\u0010\u0011\"\u0004\b\u0012\u0010\u0013¨\u0006\u001c"}, d2 = {"Lcom/discord/progress_dots/ProgressDot;", "Landroid/view/View;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "scaleAndFadeUpAnimation", "Landroid/view/animation/Animation;", "scaleAndFadeDownAnimation", "onScaleDownCompleteListener", "Lkotlin/Function0;", "", "getOnScaleDownCompleteListener", "()Lkotlin/jvm/functions/Function0;", "setOnScaleDownCompleteListener", "(Lkotlin/jvm/functions/Function0;)V", "onDetachedFromWindow", ViewProps.START, "delay", "", "stop", "startUpAnimation", "startDownAnimation", "AnimationListenerImpl", "progress_dots_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ProgressDot extends View {
    private Function0<Unit> onScaleDownCompleteListener;
    @NotNull
    private final Animation scaleAndFadeDownAnimation;
    @NotNull
    private final Animation scaleAndFadeUpAnimation;

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0012\u0018\u00002\u00020\u0001B\u0015\u0012\f\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u0012\u0010\t\u001a\u00020\u00042\b\u0010\n\u001a\u0004\u0018\u00010\u000bH\u0016J\u0012\u0010\f\u001a\u00020\u00042\b\u0010\n\u001a\u0004\u0018\u00010\u000bH\u0016J\u0012\u0010\r\u001a\u00020\u00042\b\u0010\n\u001a\u0004\u0018\u00010\u000bH\u0016R\u0017\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\b¨\u0006\u000e"}, d2 = {"Lcom/discord/progress_dots/ProgressDot$AnimationListenerImpl;", "Landroid/view/animation/Animation$AnimationListener;", "onComplete", "Lkotlin/Function0;", "", "<init>", "(Lkotlin/jvm/functions/Function0;)V", "getOnComplete", "()Lkotlin/jvm/functions/Function0;", "onAnimationRepeat", "animation", "Landroid/view/animation/Animation;", "onAnimationEnd", "onAnimationStart", "progress_dots_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class AnimationListenerImpl implements Animation.AnimationListener {
        @NotNull
        private final Function0<Unit> onComplete;

        public AnimationListenerImpl(@NotNull Function0<Unit> onComplete) {
            Intrinsics.checkNotNullParameter(onComplete, "onComplete");
            this.onComplete = onComplete;
        }

        @NotNull
        public final Function0<Unit> getOnComplete() {
            return this.onComplete;
        }

        @Override // android.view.animation.Animation.AnimationListener
        public void onAnimationEnd(Animation animation) {
            this.onComplete.invoke();
        }

        @Override // android.view.animation.Animation.AnimationListener
        public void onAnimationRepeat(Animation animation) {
        }

        @Override // android.view.animation.Animation.AnimationListener
        public void onAnimationStart(Animation animation) {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ProgressDot(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public static /* synthetic */ void start$default(ProgressDot progressDot, long j10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = 0;
        }
        progressDot.start(j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit start$lambda$0(ProgressDot progressDot) {
        progressDot.startDownAnimation();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit start$lambda$1(ProgressDot progressDot) {
        Function0<Unit> function0 = progressDot.onScaleDownCompleteListener;
        if (function0 != null) {
            function0.invoke();
        }
        return Unit.f32464a;
    }

    private final void startDownAnimation() {
        startAnimation(this.scaleAndFadeDownAnimation);
    }

    private final void startUpAnimation() {
        startAnimation(this.scaleAndFadeUpAnimation);
    }

    public final Function0<Unit> getOnScaleDownCompleteListener() {
        return this.onScaleDownCompleteListener;
    }

    @Override // android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        stop();
    }

    public final void setOnScaleDownCompleteListener(Function0<Unit> function0) {
        this.onScaleDownCompleteListener = function0;
    }

    public final void start(long j10) {
        this.scaleAndFadeUpAnimation.setStartOffset(j10);
        this.scaleAndFadeUpAnimation.setAnimationListener(new AnimationListenerImpl(new Function0() { // from class: com.discord.progress_dots.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit start$lambda$0;
                start$lambda$0 = ProgressDot.start$lambda$0(ProgressDot.this);
                return start$lambda$0;
            }
        }));
        this.scaleAndFadeDownAnimation.setAnimationListener(new AnimationListenerImpl(new Function0() { // from class: com.discord.progress_dots.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit start$lambda$1;
                start$lambda$1 = ProgressDot.start$lambda$1(ProgressDot.this);
                return start$lambda$1;
            }
        }));
        startUpAnimation();
    }

    public final void stop() {
        this.scaleAndFadeUpAnimation.cancel();
        this.scaleAndFadeDownAnimation.cancel();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ProgressDot(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ ProgressDot(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ProgressDot(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        Animation loadAnimation = AnimationUtils.loadAnimation(context, R.anim.anim_progress_dots_scale_up);
        Intrinsics.checkNotNullExpressionValue(loadAnimation, "loadAnimation(...)");
        this.scaleAndFadeUpAnimation = loadAnimation;
        Animation loadAnimation2 = AnimationUtils.loadAnimation(context, R.anim.anim_progress_dots_scale_down);
        Intrinsics.checkNotNullExpressionValue(loadAnimation2, "loadAnimation(...)");
        this.scaleAndFadeDownAnimation = loadAnimation2;
    }
}
