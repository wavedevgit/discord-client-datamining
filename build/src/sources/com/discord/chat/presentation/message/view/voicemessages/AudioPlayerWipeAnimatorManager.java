package com.discord.chat.presentation.message.view.voicemessages;

import android.animation.Animator;
import android.animation.AnimatorSet;
import android.animation.ArgbEvaluator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.os.Build;
import android.view.View;
import com.discord.chat.databinding.AudioPlayerViewBinding;
import com.discord.misc.utilities.drawable.GetDrawableCompatKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.theme.R;
import com.discord.theme.ThemeManager;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\b\u0002\u0018\u0000 12\u00020\u0001:\u00011B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0018\u0010\u001a\u001a\n \u0019*\u0004\u0018\u00010\u00180\u00182\u0006\u0010\u001d\u001a\u00020\u001eH\u0002J\u0018\u0010 \u001a\n \u0019*\u0004\u0018\u00010\u00180\u00182\u0006\u0010\u001d\u001a\u00020\u001eH\u0002J\u0018\u0010#\u001a\n \u0019*\u0004\u0018\u00010\u00180\u00182\u0006\u0010\u001d\u001a\u00020\u001eH\u0002J\u0018\u0010&\u001a\n \u0019*\u0004\u0018\u00010\u00180\u00182\u0006\u0010\u001d\u001a\u00020\u001eH\u0002J\u0016\u0010+\u001a\u00020,2\u0006\u0010(\u001a\u00020\u001e2\u0006\u0010-\u001a\u00020\u001eJ \u0010.\u001a\u00020*2\u0006\u0010(\u001a\u00020\u001e2\u0006\u0010/\u001a\u0002002\u0006\u0010-\u001a\u00020\u001eH\u0002R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u001d\u0010\f\u001a\u0004\u0018\u00010\r8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u0010\u0010\u0011\u001a\u0004\b\u000e\u0010\u000fR\u001b\u0010\u0012\u001a\u00020\u00138BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u0016\u0010\u0011\u001a\u0004\b\u0014\u0010\u0015R#\u0010\u0017\u001a\n \u0019*\u0004\u0018\u00010\u00180\u00188BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u001c\u0010\u0011\u001a\u0004\b\u001a\u0010\u001bR#\u0010\u001f\u001a\n \u0019*\u0004\u0018\u00010\u00180\u00188BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b!\u0010\u0011\u001a\u0004\b \u0010\u001bR#\u0010\"\u001a\n \u0019*\u0004\u0018\u00010\u00180\u00188BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b$\u0010\u0011\u001a\u0004\b#\u0010\u001bR#\u0010%\u001a\n \u0019*\u0004\u0018\u00010\u00180\u00188BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b'\u0010\u0011\u001a\u0004\b&\u0010\u001bR\u000e\u0010(\u001a\u00020\u001eX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010)\u001a\u0004\u0018\u00010*X\u0082\u000e¢\u0006\u0002\n\u0000¨\u00062"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerWipeAnimatorManager;", "", "context", "Landroid/content/Context;", "binding", "Lcom/discord/chat/databinding/AudioPlayerViewBinding;", "<init>", "(Landroid/content/Context;Lcom/discord/chat/databinding/AudioPlayerViewBinding;)V", "brand500", "", "argbEvaluator", "Landroid/animation/ArgbEvaluator;", "buttonContainerDefaultDrawable", "Landroid/graphics/drawable/Drawable;", "getButtonContainerDefaultDrawable", "()Landroid/graphics/drawable/Drawable;", "buttonContainerDefaultDrawable$delegate", "Lkotlin/Lazy;", "buttonContainerActiveDrawable", "Landroid/graphics/drawable/ColorDrawable;", "getButtonContainerActiveDrawable", "()Landroid/graphics/drawable/ColorDrawable;", "buttonContainerActiveDrawable$delegate", "scaleAnimator", "Landroid/animation/ValueAnimator;", "kotlin.jvm.PlatformType", "getScaleAnimator", "()Landroid/animation/ValueAnimator;", "scaleAnimator$delegate", "shouldPlay", "", "textColorAnimator", "getTextColorAnimator", "textColorAnimator$delegate", "buttonIconColorAnimator", "getButtonIconColorAnimator", "buttonIconColorAnimator$delegate", "progressColorAnimator", "getProgressColorAnimator", "progressColorAnimator$delegate", "animateToPlay", "animatorSet", "Landroid/animation/AnimatorSet;", "startAnimator", "", "shouldAnimate", "getAnimatorSet", "currentPlayTime", "", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAudioPlayerWipeAnimatorManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AudioPlayerWipeAnimatorManager.kt\ncom/discord/chat/presentation/message/view/voicemessages/AudioPlayerWipeAnimatorManager\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 Animator.kt\nandroidx/core/animation/AnimatorKt\n+ 4 ColorDrawable.kt\nandroidx/core/graphics/drawable/ColorDrawableKt\n*L\n1#1,184:1\n1#2:185\n85#3,18:186\n27#4:204\n*S KotlinDebug\n*F\n+ 1 AudioPlayerWipeAnimatorManager.kt\ncom/discord/chat/presentation/message/view/voicemessages/AudioPlayerWipeAnimatorManager\n*L\n177#1:186,18\n38#1:204\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AudioPlayerWipeAnimatorManager {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final long WASH_ANIMATION_MS = 200;
    private boolean animateToPlay;
    private AnimatorSet animatorSet;
    @NotNull
    private final ArgbEvaluator argbEvaluator;
    private final int brand500;
    @NotNull
    private final Lazy buttonContainerActiveDrawable$delegate;
    @NotNull
    private final Lazy buttonContainerDefaultDrawable$delegate;
    @NotNull
    private final Lazy buttonIconColorAnimator$delegate;
    @NotNull
    private final Lazy progressColorAnimator$delegate;
    @NotNull
    private final Lazy scaleAnimator$delegate;
    @NotNull
    private final Lazy textColorAnimator$delegate;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerWipeAnimatorManager$Companion;", "", "<init>", "()V", "WASH_ANIMATION_MS", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public AudioPlayerWipeAnimatorManager(@NotNull final Context context, @NotNull final AudioPlayerViewBinding binding) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.brand500 = context.getColor(R.color.brand_500);
        this.argbEvaluator = new ArgbEvaluator();
        this.buttonContainerDefaultDrawable$delegate = lr.l.a(new Function0() { // from class: com.discord.chat.presentation.message.view.voicemessages.u
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Drawable buttonContainerDefaultDrawable_delegate$lambda$0;
                buttonContainerDefaultDrawable_delegate$lambda$0 = AudioPlayerWipeAnimatorManager.buttonContainerDefaultDrawable_delegate$lambda$0(context);
                return buttonContainerDefaultDrawable_delegate$lambda$0;
            }
        });
        this.buttonContainerActiveDrawable$delegate = lr.l.a(new Function0() { // from class: com.discord.chat.presentation.message.view.voicemessages.v
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ColorDrawable buttonContainerActiveDrawable_delegate$lambda$2;
                buttonContainerActiveDrawable_delegate$lambda$2 = AudioPlayerWipeAnimatorManager.buttonContainerActiveDrawable_delegate$lambda$2();
                return buttonContainerActiveDrawable_delegate$lambda$2;
            }
        });
        this.scaleAnimator$delegate = lr.l.a(new Function0() { // from class: com.discord.chat.presentation.message.view.voicemessages.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ValueAnimator scaleAnimator_delegate$lambda$5;
                scaleAnimator_delegate$lambda$5 = AudioPlayerWipeAnimatorManager.scaleAnimator_delegate$lambda$5(AudioPlayerViewBinding.this, this);
                return scaleAnimator_delegate$lambda$5;
            }
        });
        this.textColorAnimator$delegate = lr.l.a(new Function0() { // from class: com.discord.chat.presentation.message.view.voicemessages.x
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ValueAnimator textColorAnimator_delegate$lambda$9;
                textColorAnimator_delegate$lambda$9 = AudioPlayerWipeAnimatorManager.textColorAnimator_delegate$lambda$9(AudioPlayerViewBinding.this);
                return textColorAnimator_delegate$lambda$9;
            }
        });
        this.buttonIconColorAnimator$delegate = lr.l.a(new Function0() { // from class: com.discord.chat.presentation.message.view.voicemessages.y
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ValueAnimator buttonIconColorAnimator_delegate$lambda$13;
                buttonIconColorAnimator_delegate$lambda$13 = AudioPlayerWipeAnimatorManager.buttonIconColorAnimator_delegate$lambda$13(AudioPlayerViewBinding.this);
                return buttonIconColorAnimator_delegate$lambda$13;
            }
        });
        this.progressColorAnimator$delegate = lr.l.a(new Function0() { // from class: com.discord.chat.presentation.message.view.voicemessages.z
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ValueAnimator progressColorAnimator_delegate$lambda$17;
                progressColorAnimator_delegate$lambda$17 = AudioPlayerWipeAnimatorManager.progressColorAnimator_delegate$lambda$17(AudioPlayerViewBinding.this);
                return progressColorAnimator_delegate$lambda$17;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ColorDrawable buttonContainerActiveDrawable_delegate$lambda$2() {
        ColorDrawable colorDrawable = new ColorDrawable(-1);
        colorDrawable.setAlpha(0);
        return colorDrawable;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Drawable buttonContainerDefaultDrawable_delegate$lambda$0(Context context) {
        int i10;
        if (ThemeManager.INSTANCE.isThemeLight()) {
            i10 = com.discord.chat.R.drawable.drawable_audio_play_button_gradient_light;
        } else {
            i10 = com.discord.chat.R.drawable.drawable_audio_play_button_gradient_dark;
        }
        return GetDrawableCompatKt.getDrawableCompat(context, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ValueAnimator buttonIconColorAnimator_delegate$lambda$13(final AudioPlayerViewBinding audioPlayerViewBinding) {
        ValueAnimator ofArgb = ValueAnimator.ofArgb(-1, -16777216);
        ofArgb.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.discord.chat.presentation.message.view.voicemessages.a0
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                AudioPlayerWipeAnimatorManager.buttonIconColorAnimator_delegate$lambda$13$lambda$12$lambda$11(AudioPlayerViewBinding.this, valueAnimator);
            }
        });
        return ofArgb;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void buttonIconColorAnimator_delegate$lambda$13$lambda$12$lambda$11(AudioPlayerViewBinding audioPlayerViewBinding, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        SimpleDraweeView button = audioPlayerViewBinding.button;
        Intrinsics.checkNotNullExpressionValue(button, "button");
        Object animatedValue = it.getAnimatedValue();
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Int");
        ColorUtilsKt.setTintColor(button, (Integer) animatedValue);
    }

    private final AnimatorSet getAnimatorSet(boolean z10, long j10, boolean z11) {
        long j11;
        AnimatorSet animatorSet = new AnimatorSet();
        animatorSet.playTogether(getScaleAnimator(z10), getTextColorAnimator(z10), getButtonIconColorAnimator(z10), getProgressColorAnimator(z10));
        if (z11) {
            j11 = WASH_ANIMATION_MS;
        } else {
            j11 = 0;
        }
        animatorSet.setDuration(j11);
        if (Build.VERSION.SDK_INT >= 26) {
            animatorSet.setCurrentPlayTime(j10);
        }
        animatorSet.addListener(new Animator.AnimatorListener() { // from class: com.discord.chat.presentation.message.view.voicemessages.AudioPlayerWipeAnimatorManager$getAnimatorSet$lambda$22$$inlined$addListener$default$1
            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationCancel(Animator animator) {
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationEnd(Animator animator) {
                AudioPlayerWipeAnimatorManager.this.animatorSet = null;
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationRepeat(Animator animator) {
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationStart(Animator animator) {
            }
        });
        return animatorSet;
    }

    private final ColorDrawable getButtonContainerActiveDrawable() {
        return (ColorDrawable) this.buttonContainerActiveDrawable$delegate.getValue();
    }

    private final Drawable getButtonContainerDefaultDrawable() {
        return (Drawable) this.buttonContainerDefaultDrawable$delegate.getValue();
    }

    private final ValueAnimator getButtonIconColorAnimator() {
        return (ValueAnimator) this.buttonIconColorAnimator$delegate.getValue();
    }

    private final ValueAnimator getProgressColorAnimator() {
        return (ValueAnimator) this.progressColorAnimator$delegate.getValue();
    }

    private final ValueAnimator getScaleAnimator() {
        return (ValueAnimator) this.scaleAnimator$delegate.getValue();
    }

    private final ValueAnimator getTextColorAnimator() {
        return (ValueAnimator) this.textColorAnimator$delegate.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ValueAnimator progressColorAnimator_delegate$lambda$17(final AudioPlayerViewBinding audioPlayerViewBinding) {
        ValueAnimator ofArgb = ValueAnimator.ofArgb(-1, ThemeManagerKt.getTheme().getInteractiveTextActive());
        ofArgb.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.discord.chat.presentation.message.view.voicemessages.t
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                AudioPlayerWipeAnimatorManager.progressColorAnimator_delegate$lambda$17$lambda$16$lambda$15(AudioPlayerViewBinding.this, valueAnimator);
            }
        });
        return ofArgb;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void progressColorAnimator_delegate$lambda$17$lambda$16$lambda$15(AudioPlayerViewBinding audioPlayerViewBinding, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        AudioWaveView audioWaveView = audioPlayerViewBinding.wave;
        Object animatedValue = it.getAnimatedValue();
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Int");
        audioWaveView.setAudioProgressPaintColor(((Integer) animatedValue).intValue());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ValueAnimator scaleAnimator_delegate$lambda$5(final AudioPlayerViewBinding audioPlayerViewBinding, final AudioPlayerWipeAnimatorManager audioPlayerWipeAnimatorManager) {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.discord.chat.presentation.message.view.voicemessages.s
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                AudioPlayerWipeAnimatorManager.scaleAnimator_delegate$lambda$5$lambda$4$lambda$3(AudioPlayerViewBinding.this, audioPlayerWipeAnimatorManager, valueAnimator);
            }
        });
        return ofFloat;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void scaleAnimator_delegate$lambda$5$lambda$4$lambda$3(AudioPlayerViewBinding audioPlayerViewBinding, AudioPlayerWipeAnimatorManager audioPlayerWipeAnimatorManager, ValueAnimator it) {
        float f10;
        Intrinsics.checkNotNullParameter(it, "it");
        Object animatedValue = it.getAnimatedValue();
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
        float floatValue = ((Float) animatedValue).floatValue();
        if (audioPlayerViewBinding.playerContainer.getWidth() > 0 && audioPlayerViewBinding.wipe.getWidth() > 0) {
            f10 = (audioPlayerViewBinding.playerContainer.getWidth() / audioPlayerViewBinding.wipe.getWidth()) * 2;
        } else {
            f10 = 0.0f;
        }
        float f11 = 1;
        float f12 = (f10 * floatValue) + f11;
        audioPlayerViewBinding.wipe.setScaleX(f12);
        audioPlayerViewBinding.wipe.setScaleY(f12);
        Drawable buttonContainerDefaultDrawable = audioPlayerWipeAnimatorManager.getButtonContainerDefaultDrawable();
        if (buttonContainerDefaultDrawable != null) {
            buttonContainerDefaultDrawable.setAlpha((int) ((f11 - floatValue) * ((float) SetSpanOperation.SPAN_MAX_PRIORITY)));
        }
        audioPlayerWipeAnimatorManager.getButtonContainerActiveDrawable().setAlpha((int) (floatValue * ((float) SetSpanOperation.SPAN_MAX_PRIORITY)));
        audioPlayerViewBinding.buttonContainer.setBackground(new LayerDrawable(new Drawable[]{audioPlayerWipeAnimatorManager.getButtonContainerDefaultDrawable(), audioPlayerWipeAnimatorManager.getButtonContainerActiveDrawable()}));
        View buttonContainer = audioPlayerViewBinding.buttonContainer;
        Intrinsics.checkNotNullExpressionValue(buttonContainer, "buttonContainer");
        ViewClippingUtilsKt.clipToCircle(buttonContainer);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ValueAnimator textColorAnimator_delegate$lambda$9(final AudioPlayerViewBinding audioPlayerViewBinding) {
        ValueAnimator ofArgb = ValueAnimator.ofArgb(ThemeManagerKt.getTheme().getInteractiveTextDefault(), -1);
        ofArgb.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.discord.chat.presentation.message.view.voicemessages.b0
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                AudioPlayerWipeAnimatorManager.textColorAnimator_delegate$lambda$9$lambda$8$lambda$7(AudioPlayerViewBinding.this, valueAnimator);
            }
        });
        return ofArgb;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void textColorAnimator_delegate$lambda$9$lambda$8$lambda$7(AudioPlayerViewBinding audioPlayerViewBinding, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = audioPlayerViewBinding.text;
        Object animatedValue = it.getAnimatedValue();
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Int");
        simpleDraweeSpanTextView.setTextColor(((Integer) animatedValue).intValue());
    }

    public final void startAnimator(boolean z10, boolean z11) {
        AnimatorSet animatorSet;
        long j10;
        long j11;
        long j12 = 0;
        if (z11) {
            boolean z12 = this.animateToPlay;
            if (z12 == z10) {
                return;
            }
            if (z12 != z10 && (animatorSet = this.animatorSet) != null) {
                if (Build.VERSION.SDK_INT >= 26) {
                    if (animatorSet != null) {
                        j10 = animatorSet.getDuration();
                    } else {
                        j10 = 0;
                    }
                    AnimatorSet animatorSet2 = this.animatorSet;
                    if (animatorSet2 != null) {
                        j11 = animatorSet2.getCurrentPlayTime();
                    } else {
                        j11 = 0;
                    }
                    long longValue = Long.valueOf(j10 - j11).longValue();
                    Long l10 = (0 > longValue || longValue >= 201) ? null : null;
                    if (l10 != null) {
                        j12 = l10.longValue();
                    }
                }
                AnimatorSet animatorSet3 = this.animatorSet;
                if (animatorSet3 != null) {
                    animatorSet3.cancel();
                }
            }
        }
        this.animateToPlay = z10;
        AnimatorSet animatorSet4 = getAnimatorSet(z10, j12, z11);
        animatorSet4.start();
        this.animatorSet = animatorSet4;
    }

    private final ValueAnimator getButtonIconColorAnimator(boolean z10) {
        ValueAnimator buttonIconColorAnimator = getButtonIconColorAnimator();
        if (z10) {
            buttonIconColorAnimator.setIntValues(-1, this.brand500);
        } else {
            buttonIconColorAnimator.setIntValues(this.brand500, -1);
        }
        buttonIconColorAnimator.setEvaluator(this.argbEvaluator);
        return buttonIconColorAnimator;
    }

    private final ValueAnimator getProgressColorAnimator(boolean z10) {
        ValueAnimator progressColorAnimator = getProgressColorAnimator();
        if (z10) {
            progressColorAnimator.setIntValues(ThemeManagerKt.getTheme().getInteractiveTextActive(), -1);
        } else {
            progressColorAnimator.setIntValues(-1, ThemeManagerKt.getTheme().getInteractiveTextActive());
        }
        progressColorAnimator.setEvaluator(this.argbEvaluator);
        return progressColorAnimator;
    }

    private final ValueAnimator getScaleAnimator(boolean z10) {
        ValueAnimator scaleAnimator = getScaleAnimator();
        if (z10) {
            scaleAnimator.setFloatValues(0.0f, 1.0f);
            return scaleAnimator;
        }
        scaleAnimator.setFloatValues(1.0f, 0.0f);
        return scaleAnimator;
    }

    private final ValueAnimator getTextColorAnimator(boolean z10) {
        ValueAnimator textColorAnimator = getTextColorAnimator();
        if (z10) {
            textColorAnimator.setIntValues(ThemeManagerKt.getTheme().getInteractiveTextDefault(), -1);
        } else {
            textColorAnimator.setIntValues(-1, ThemeManagerKt.getTheme().getInteractiveTextDefault());
        }
        textColorAnimator.setEvaluator(this.argbEvaluator);
        return textColorAnimator;
    }
}
