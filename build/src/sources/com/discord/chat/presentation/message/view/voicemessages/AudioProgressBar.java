package com.discord.chat.presentation.message.view.voicemessages;

import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.util.AttributeSet;
import android.view.View;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0007\u0018\u0000 52\u00020\u00012\u00020\u0002:\u00015B'\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\b\u0002\u0010\u0007\u001a\u00020\b¢\u0006\u0004\b\t\u0010\nJ\u001a\u0010)\u001a\u00020*2\b\b\u0001\u0010+\u001a\u00020\f2\u0006\u0010,\u001a\u00020\u000eH\u0016J\u0010\u0010-\u001a\u00020*2\u0006\u0010.\u001a\u00020/H\u0014J\u0010\u00100\u001a\u00020*2\u0006\u00101\u001a\u00020\u000eH\u0002J\u0018\u00102\u001a\u00020*2\u0006\u00103\u001a\u00020\b2\u0006\u00104\u001a\u00020\bH\u0014R\u000e\u0010\u000b\u001a\u00020\fX\u0082\u000e¢\u0006\u0002\n\u0000R\u001a\u0010\r\u001a\u00020\u000eX\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000f\u0010\u0010\"\u0004\b\u0011\u0010\u0012R\u000e\u0010\u0013\u001a\u00020\u0014X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0014X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\fX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0017\u001a\u0004\u0018\u00010\u0018X\u0082\u000e¢\u0006\u0002\n\u0000R\u001e\u0010\u001a\u001a\u00020\u000e2\u0006\u0010\u0019\u001a\u00020\u000e@BX\u0082\u000e¢\u0006\b\n\u0000\"\u0004\b\u001b\u0010\u0012R$\u0010\u001c\u001a\u00020\u000e2\u0006\u0010\u0019\u001a\u00020\u000e@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001c\u0010\u0010\"\u0004\b\u001d\u0010\u0012R$\u0010\u001e\u001a\u00020\u000e2\u0006\u0010\u0019\u001a\u00020\u000e@@X\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001f\u0010\u0010\"\u0004\b \u0010\u0012R&\u0010!\u001a\u00020\b2\u0006\u0010\u0019\u001a\u00020\b8\u0016@VX\u0097\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\"\u0010#\"\u0004\b$\u0010%R&\u0010&\u001a\u00020\b2\u0006\u0010\u0019\u001a\u00020\b8\u0016@VX\u0097\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b'\u0010#\"\u0004\b(\u0010%¨\u00066"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioProgressBar;", "Landroid/view/View;", "Lcom/discord/chat/presentation/message/view/voicemessages/AudioProgressView;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", ReactProgressBarViewManager.PROP_PROGRESS, "", "shouldAnimate", "", "getShouldAnimate", "()Z", "setShouldAnimate", "(Z)V", "progressBarPaint", "Landroid/graphics/Paint;", "progressFillPaint", "currentKnobRadius", "knobAnimator", "Landroid/animation/ValueAnimator;", "value", "isKnobVisible", "setKnobVisible", "isPlaying", "setPlaying", "isScrubbing", "isScrubbing$chat_release", "setScrubbing$chat_release", "defaultPaintColor", "getDefaultPaintColor", "()I", "setDefaultPaintColor", "(I)V", "audioProgressPaintColor", "getAudioProgressPaintColor", "setAudioProgressPaintColor", "setAudioProgress", "", "audioProgress", "finishAnimation", "onDraw", "canvas", "Landroid/graphics/Canvas;", "animateKnob", ViewProps.VISIBLE, "onMeasure", "widthMeasureSpec", "heightMeasureSpec", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AudioProgressBar extends View implements AudioProgressView {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int PROGRESS_BAR_HEIGHT;
    private static final int PROGRESS_BAR_PADDING;
    private static final float VISIBLE_KNOB_RADIUS;
    private int audioProgressPaintColor;
    private float currentKnobRadius;
    private int defaultPaintColor;
    private boolean isKnobVisible;
    private boolean isPlaying;
    private boolean isScrubbing;
    private ValueAnimator knobAnimator;
    private float progress;
    @NotNull
    private final Paint progressBarPaint;
    @NotNull
    private final Paint progressFillPaint;
    private boolean shouldAnimate;

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioProgressBar$Companion;", "", "<init>", "()V", "PROGRESS_BAR_HEIGHT", "", "PROGRESS_BAR_PADDING", "VISIBLE_KNOB_RADIUS", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        int dpToPx = SizeUtilsKt.getDpToPx(4);
        PROGRESS_BAR_HEIGHT = dpToPx;
        PROGRESS_BAR_PADDING = SizeUtilsKt.getDpToPx(2);
        VISIBLE_KNOB_RADIUS = dpToPx;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AudioProgressBar(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void animateKnob(boolean z10) {
        float f10;
        ValueAnimator valueAnimator = this.knobAnimator;
        if (valueAnimator != null) {
            valueAnimator.cancel();
        }
        float f11 = this.currentKnobRadius;
        if (z10) {
            f10 = VISIBLE_KNOB_RADIUS;
        } else {
            f10 = 0.0f;
        }
        ValueAnimator ofFloat = ValueAnimator.ofFloat(f11, f10);
        ofFloat.setDuration(300L);
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.discord.chat.presentation.message.view.voicemessages.c0
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                AudioProgressBar.animateKnob$lambda$3$lambda$2(AudioProgressBar.this, valueAnimator2);
            }
        });
        ofFloat.start();
        this.knobAnimator = ofFloat;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void animateKnob$lambda$3$lambda$2(AudioProgressBar audioProgressBar, ValueAnimator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        Object animatedValue = animation.getAnimatedValue();
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
        audioProgressBar.currentKnobRadius = ((Float) animatedValue).floatValue();
        audioProgressBar.invalidate();
    }

    private final void setKnobVisible(boolean z10) {
        if (this.isKnobVisible != z10) {
            this.isKnobVisible = z10;
            animateKnob(z10);
        }
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public int getAudioProgressPaintColor() {
        return this.audioProgressPaintColor;
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public int getDefaultPaintColor() {
        return this.defaultPaintColor;
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public boolean getShouldAnimate() {
        return this.shouldAnimate;
    }

    public final boolean isPlaying() {
        return this.isPlaying;
    }

    public final boolean isScrubbing$chat_release() {
        return this.isScrubbing;
    }

    @Override // android.view.View
    protected void onDraw(@NotNull Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        super.onDraw(canvas);
        float f10 = PROGRESS_BAR_PADDING;
        float f11 = 2;
        float width = getWidth() - (f11 * f10);
        float f12 = PROGRESS_BAR_HEIGHT;
        float f13 = f12 / f11;
        float f14 = f12 + f10;
        canvas.drawRoundRect(0.0f, f10, width, f14, f13, f13, this.progressBarPaint);
        float f15 = width * this.progress;
        canvas.drawRoundRect(0.0f, f10, f15, f14, f13, f13, this.progressFillPaint);
        float f16 = this.currentKnobRadius;
        if (f16 > 0.0f) {
            canvas.drawCircle(kotlin.ranges.d.h(kotlin.ranges.d.c(f15, f16), width - this.currentKnobRadius), f10 + f13, this.currentKnobRadius, this.progressFillPaint);
        }
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        int size = View.MeasureSpec.getSize(i10);
        int i12 = PROGRESS_BAR_PADDING;
        setMeasuredDimension(size + (i12 * 2), PROGRESS_BAR_HEIGHT + (i12 * 2));
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public void setAudioProgress(float f10, boolean z10) {
        this.progress = f10;
        invalidate();
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public void setAudioProgressPaintColor(int i10) {
        this.audioProgressPaintColor = i10;
        this.progressFillPaint.setColorFilter(new PorterDuffColorFilter(i10, PorterDuff.Mode.SRC_IN));
        invalidate();
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public void setDefaultPaintColor(int i10) {
        this.defaultPaintColor = i10;
        this.progressBarPaint.setColor(i10);
        invalidate();
    }

    public final void setPlaying(boolean z10) {
        boolean z11;
        this.isPlaying = z10;
        if (!z10 && !this.isScrubbing) {
            z11 = false;
        } else {
            z11 = true;
        }
        setKnobVisible(z11);
    }

    public final void setScrubbing$chat_release(boolean z10) {
        boolean z11;
        this.isScrubbing = z10;
        if (!z10 && !this.isPlaying) {
            z11 = false;
        } else {
            z11 = true;
        }
        setKnobVisible(z11);
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public void setShouldAnimate(boolean z10) {
        this.shouldAnimate = z10;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AudioProgressBar(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ AudioProgressBar(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AudioProgressBar(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        this.shouldAnimate = true;
        Paint paint = new Paint();
        paint.setAntiAlias(true);
        Paint.Style style = Paint.Style.FILL;
        paint.setStyle(style);
        paint.setColor(ThemeManagerKt.getTheme().getInteractiveTextDefault());
        this.progressBarPaint = paint;
        Paint paint2 = new Paint();
        paint2.setAntiAlias(true);
        paint2.setStyle(style);
        paint2.setColorFilter(new PorterDuffColorFilter(ThemeManagerKt.getTheme().getInteractiveTextActive(), PorterDuff.Mode.SRC_IN));
        this.progressFillPaint = paint2;
        this.defaultPaintColor = ThemeManagerKt.getTheme().getInteractiveTextDefault();
        this.audioProgressPaintColor = ThemeManagerKt.getTheme().getInteractiveTextActive();
    }
}
