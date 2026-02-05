package com.discord.chat.presentation.message.view.voicemessages;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.util.AttributeSet;
import android.view.View;
import com.discord.misc.utilities.coroutines.CoroutineViewUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.Arrays;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.time.Duration;
import kotlinx.coroutines.Job;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000h\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0012\n\u0002\b\n\n\u0002\u0010\u0007\n\u0002\b\u0004\n\u0002\u0010\t\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0011\u0018\u0000 Q2\u00020\u00012\u00020\u0002:\u0001QB'\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\b\u0002\u0010\u0007\u001a\u00020\b¢\u0006\u0004\b\t\u0010\nJ\f\u00105\u001a\u00020,*\u00020,H\u0002J\u001a\u0010\u001b\u001a\u0002062\b\b\u0001\u0010\u001a\u001a\u00020\u00192\u0006\u00107\u001a\u00020&H\u0016J\b\u00107\u001a\u000206H\u0002J$\u0010>\u001a\u0002062\b\b\u0002\u0010\u0015\u001a\u00020\u000e2\b\b\u0002\u0010\u0012\u001a\u00020\b2\u0006\u0010?\u001a\u00020&H\u0002J&\u0010@\u001a\u000206*\u00020A2\u0006\u0010B\u001a\u00020\u00192\u0006\u0010C\u001a\u00020,2\b\b\u0002\u0010D\u001a\u00020&H\u0002J\u0010\u0010E\u001a\u0002062\u0006\u0010F\u001a\u00020AH\u0014J\u0018\u0010G\u001a\u0002062\u0006\u0010H\u001a\u00020\b2\u0006\u0010I\u001a\u00020\bH\u0014J0\u0010J\u001a\u0002062\u0006\u0010K\u001a\u00020&2\u0006\u0010L\u001a\u00020\b2\u0006\u0010M\u001a\u00020\b2\u0006\u0010N\u001a\u00020\b2\u0006\u0010O\u001a\u00020\bH\u0014J\u0006\u0010P\u001a\u000206R\u000e\u0010\u000b\u001a\u00020\fX\u0082\u0004¢\u0006\u0002\n\u0000R\u001e\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\r\u001a\u00020\u000e@BX\u0082\u000e¢\u0006\b\n\u0000\"\u0004\b\u0010\u0010\u0011R\u001e\u0010\u0012\u001a\u00020\b2\u0006\u0010\r\u001a\u00020\b@BX\u0082\u000e¢\u0006\b\n\u0000\"\u0004\b\u0013\u0010\u0014R$\u0010\u0015\u001a\u00020\u000e2\u0006\u0010\r\u001a\u00020\u000e@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0016\u0010\u0017\"\u0004\b\u0018\u0010\u0011R&\u0010\u001a\u001a\u0004\u0018\u00010\u00192\b\u0010\r\u001a\u0004\u0018\u00010\u00198\u0002@BX\u0083\u000e¢\u0006\n\n\u0002\u0010\u001d\"\u0004\b\u001b\u0010\u001cR*\u0010\u001f\u001a\u0004\u0018\u00010\u001e2\b\u0010\r\u001a\u0004\u0018\u00010\u001e@FX\u0086\u000e¢\u0006\u0010\n\u0002\u0010$\u001a\u0004\b \u0010!\"\u0004\b\"\u0010#R\u001a\u0010%\u001a\u00020&X\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b'\u0010(\"\u0004\b)\u0010*R\u000e\u0010+\u001a\u00020,X\u0082\u0004¢\u0006\u0002\n\u0000R&\u0010-\u001a\u00020\b2\u0006\u0010\r\u001a\u00020\b8\u0016@VX\u0097\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b.\u0010/\"\u0004\b0\u0010\u0014R\u000e\u00101\u001a\u00020,X\u0082\u0004¢\u0006\u0002\n\u0000R&\u00102\u001a\u00020\b2\u0006\u0010\r\u001a\u00020\b8\u0016@VX\u0097\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b3\u0010/\"\u0004\b4\u0010\u0014R\u001c\u00108\u001a\u0004\u0018\u000109X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b:\u0010;\"\u0004\b<\u0010=¨\u0006R"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioWaveView;", "Landroid/view/View;", "Lcom/discord/chat/presentation/message/view/voicemessages/AudioProgressView;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "animationManager", "Lcom/discord/chat/presentation/message/view/voicemessages/AudioWaveAnimationManager;", "value", "", "downSampleData", "setDownSampleData", "([B)V", "numChunks", "setNumChunks", "(I)V", "originalSampleData", "getOriginalSampleData", "()[B", "setOriginalSampleData", "", "audioProgress", "setAudioProgress", "(Ljava/lang/Float;)V", "Ljava/lang/Float;", "", "duration", "getDuration", "()Ljava/lang/Long;", "setDuration", "(Ljava/lang/Long;)V", "Ljava/lang/Long;", "shouldAnimate", "", "getShouldAnimate", "()Z", "setShouldAnimate", "(Z)V", "defaultPaint", "Landroid/graphics/Paint;", "defaultPaintColor", "getDefaultPaintColor", "()I", "setDefaultPaintColor", "audioProgressPaint", "audioProgressPaintColor", "getAudioProgressPaintColor", "setAudioProgressPaintColor", "init", "", "finishAnimation", "animationJob", "Lkotlinx/coroutines/Job;", "getAnimationJob", "()Lkotlinx/coroutines/Job;", "setAnimationJob", "(Lkotlinx/coroutines/Job;)V", "recalculateSampleData", "downSample", "draw", "Landroid/graphics/Canvas;", ReactProgressBarViewManager.PROP_PROGRESS, "paint", "animate", "onDraw", "canvas", "onMeasure", "widthMeasureSpec", "heightMeasureSpec", "onLayout", "changed", ViewProps.LEFT, ViewProps.TOP, ViewProps.RIGHT, ViewProps.BOTTOM, "reset", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAudioWaveView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AudioWaveView.kt\ncom/discord/chat/presentation/message/view/voicemessages/AudioWaveView\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 3 Canvas.kt\nandroidx/core/graphics/CanvasKt\n+ 4 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,273:1\n13547#2,3:274\n27#3,7:277\n376#4,2:284\n388#4,2:286\n*S KotlinDebug\n*F\n+ 1 AudioWaveView.kt\ncom/discord/chat/presentation/message/view/voicemessages/AudioWaveView\n*L\n168#1:274,3\n210#1:277,7\n227#1:284,2\n227#1:286,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AudioWaveView extends View implements AudioProgressView {
    private static final float CHUNK_MAX_HEIGHT;
    private static final float CHUNK_MIN_HEIGHT;
    private static final int CHUNK_SIZE;
    private static final int CHUNK_SPACING;
    private static final int CHUNK_WIDTH;
    private static final int FINISH_ANIMATION_NUM_REPEAT = 10;
    private static final long MAX_DURATION;
    private static final int MAX_WIDTH;
    private static final int MIN_CHUNK_NUMBER = 5;
    private static final int MIN_WIDTH;
    private Job animationJob;
    @NotNull
    private final AudioWaveAnimationManager animationManager;
    private Float audioProgress;
    @NotNull
    private final Paint audioProgressPaint;
    private int audioProgressPaintColor;
    @NotNull
    private final Paint defaultPaint;
    private int defaultPaintColor;
    @NotNull
    private byte[] downSampleData;
    private Long duration;
    private int numChunks;
    @NotNull
    private byte[] originalSampleData;
    private boolean shouldAnimate;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int CHUNK_RADIUS = SizeUtilsKt.getDpToPx(8);

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\b\u0005\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioWaveView$Companion;", "", "<init>", "()V", "CHUNK_RADIUS", "", "CHUNK_WIDTH", "CHUNK_SPACING", "CHUNK_MIN_HEIGHT", "", "CHUNK_MAX_HEIGHT", "CHUNK_SIZE", "MAX_DURATION", "", "MIN_CHUNK_NUMBER", "MIN_WIDTH", "MAX_WIDTH", "FINISH_ANIMATION_NUM_REPEAT", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        int dpToPx = SizeUtilsKt.getDpToPx(2);
        CHUNK_WIDTH = dpToPx;
        int dpToPx2 = SizeUtilsKt.getDpToPx(4);
        CHUNK_SPACING = dpToPx2;
        CHUNK_MIN_HEIGHT = SizeUtilsKt.getDpToPx(1);
        CHUNK_MAX_HEIGHT = SizeUtilsKt.getDpToPx(12);
        int i10 = dpToPx + dpToPx2;
        CHUNK_SIZE = i10;
        Duration.a aVar = Duration.f34987e;
        MAX_DURATION = Duration.t(kotlin.time.b.s(30, ks.b.f36128p));
        MIN_WIDTH = i10 * 5;
        MAX_WIDTH = SizeUtilsKt.getDpToPx(600);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AudioWaveView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void draw(Canvas canvas, float f10, Paint paint, boolean z10) {
        int i10;
        if (f10 != 0.0f && this.duration != null) {
            int height = canvas.getHeight() / 2;
            byte[] bArr = this.downSampleData;
            float length = 1 / bArr.length;
            int length2 = bArr.length;
            int i11 = 0;
            int i12 = 0;
            while (i11 < length2) {
                byte b10 = bArr[i11];
                int i13 = i12 + 1;
                float f11 = i12;
                float f12 = f11 * length;
                if (f12 > f10) {
                    this.animationManager.resetIndex(i12);
                    return;
                }
                float abs = (SamplerKt.getAbs(b10) / 127) * CHUNK_MAX_HEIGHT;
                float f13 = CHUNK_MIN_HEIGHT;
                float max = f13 + (Math.max(abs, f13) - f13);
                paint.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                if (z10) {
                    max = this.animationManager.getAnimationValues(i12, (f10 - f12) / length, max);
                }
                float f14 = f11 * CHUNK_SIZE;
                float f15 = height;
                int i14 = CHUNK_RADIUS;
                canvas.drawRoundRect(f14, f15 - max, (i12 * i10) + CHUNK_WIDTH, f15 + max, i14, i14, paint);
                i11++;
                i12 = i13;
            }
        }
    }

    static /* synthetic */ void draw$default(AudioWaveView audioWaveView, Canvas canvas, float f10, Paint paint, boolean z10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z10 = true;
        }
        audioWaveView.draw(canvas, f10, paint, z10);
    }

    private final void finishAnimation() {
        Job d10;
        Job job = this.animationJob;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        d10 = ms.i.d(CoroutineViewUtilsKt.getAttachedScope(this), null, null, new AudioWaveView$finishAnimation$1(this, null), 3, null);
        this.animationJob = d10;
    }

    private final Paint init(Paint paint) {
        paint.setAntiAlias(true);
        paint.setStrokeWidth(0.0f);
        return paint;
    }

    private final void recalculateSampleData(byte[] bArr, int i10, boolean z10) {
        if (z10 && i10 != this.downSampleData.length) {
            ms.i.d(CoroutineViewUtilsKt.getAttachedScope(this), null, null, new AudioWaveView$recalculateSampleData$1(this, bArr, i10, null), 3, null);
        } else {
            invalidate();
        }
    }

    static /* synthetic */ void recalculateSampleData$default(AudioWaveView audioWaveView, byte[] bArr, int i10, boolean z10, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            bArr = audioWaveView.originalSampleData;
        }
        if ((i11 & 2) != 0) {
            i10 = audioWaveView.numChunks;
        }
        audioWaveView.recalculateSampleData(bArr, i10, z10);
    }

    private final void setAudioProgress(Float f10) {
        this.audioProgress = f10;
        postInvalidate();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void setDownSampleData(byte[] bArr) {
        this.animationManager.setData(bArr);
        this.downSampleData = bArr;
    }

    private final void setNumChunks(int i10) {
        boolean z10;
        if (this.numChunks != i10) {
            z10 = true;
        } else {
            z10 = false;
        }
        recalculateSampleData$default(this, null, i10, z10, 1, null);
        this.numChunks = i10;
    }

    public final Job getAnimationJob() {
        return this.animationJob;
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public int getAudioProgressPaintColor() {
        return this.audioProgressPaintColor;
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public int getDefaultPaintColor() {
        return this.defaultPaintColor;
    }

    public final Long getDuration() {
        return this.duration;
    }

    @NotNull
    public final byte[] getOriginalSampleData() {
        return this.originalSampleData;
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public boolean getShouldAnimate() {
        return this.shouldAnimate;
    }

    @Override // android.view.View
    protected void onDraw(@NotNull Canvas canvas) {
        float f10;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        super.onDraw(canvas);
        if (this.numChunks != this.downSampleData.length) {
            recalculateSampleData$default(this, null, 0, true, 3, null);
            return;
        }
        int save = canvas.save();
        try {
            draw(canvas, 1.0f, this.defaultPaint, false);
            Float f11 = this.audioProgress;
            if (f11 != null) {
                f10 = f11.floatValue();
            } else {
                f10 = 0.0f;
            }
            draw(canvas, f10, this.audioProgressPaint, getShouldAnimate());
            canvas.restoreToCount(save);
        } catch (Throwable th2) {
            canvas.restoreToCount(save);
            throw th2;
        }
    }

    @Override // android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        int i14;
        boolean z11;
        super.onLayout(z10, i10, i11, i12, i13);
        if (!z10) {
            return;
        }
        int width = getWidth();
        int i15 = CHUNK_SIZE;
        if (width % i15 > CHUNK_WIDTH) {
            i14 = 1;
        } else {
            i14 = 0;
        }
        int i16 = this.numChunks;
        setNumChunks(kotlin.ranges.d.d((getWidth() / i15) + i14, 5));
        if (i16 != this.numChunks) {
            z11 = true;
        } else {
            z11 = false;
        }
        recalculateSampleData$default(this, null, 0, z11, 3, null);
    }

    /* JADX WARN: Removed duplicated region for block: B:15:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x004e  */
    @Override // android.view.View
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected void onMeasure(int r6, int r7) {
        /*
            r5 = this;
            java.lang.Long r0 = r5.duration
            r1 = 0
            if (r0 == 0) goto Lb
            long r3 = r0.longValue()
            goto Lc
        Lb:
            r3 = r1
        Lc:
            int r0 = (r3 > r1 ? 1 : (r3 == r1 ? 0 : -1))
            if (r0 == 0) goto L1b
            long r0 = com.discord.chat.presentation.message.view.voicemessages.AudioWaveView.MAX_DURATION
            int r2 = (r3 > r0 ? 1 : (r3 == r0 ? 0 : -1))
            if (r2 <= 0) goto L17
            goto L1b
        L17:
            float r2 = (float) r3
            float r0 = (float) r0
            float r2 = r2 / r0
            goto L1d
        L1b:
            r2 = 1065353216(0x3f800000, float:1.0)
        L1d:
            int r0 = android.view.View.MeasureSpec.getMode(r6)
            r1 = -2147483648(0xffffffff80000000, float:-0.0)
            if (r0 != r1) goto L4e
            int r6 = android.view.View.MeasureSpec.getSize(r6)
            android.view.ViewGroup$LayoutParams r0 = r5.getLayoutParams()
            boolean r1 = r0 instanceof android.view.ViewGroup.MarginLayoutParams
            r3 = 0
            if (r1 == 0) goto L39
            android.view.ViewGroup$MarginLayoutParams r0 = (android.view.ViewGroup.MarginLayoutParams) r0
            int r0 = r0.getMarginStart()
            goto L3a
        L39:
            r0 = r3
        L3a:
            int r6 = r6 - r0
            android.view.ViewGroup$LayoutParams r0 = r5.getLayoutParams()
            boolean r1 = r0 instanceof android.view.ViewGroup.MarginLayoutParams
            if (r1 == 0) goto L49
            android.view.ViewGroup$MarginLayoutParams r0 = (android.view.ViewGroup.MarginLayoutParams) r0
            int r3 = r0.getMarginEnd()
        L49:
            int r6 = r6 - r3
            float r6 = (float) r6
            float r6 = r6 * r2
            int r6 = (int) r6
            goto L52
        L4e:
            int r6 = android.view.View.MeasureSpec.getSize(r6)
        L52:
            int r0 = com.discord.chat.presentation.message.view.voicemessages.AudioWaveView.MAX_WIDTH
            int r6 = kotlin.ranges.d.i(r6, r0)
            int r0 = com.discord.chat.presentation.message.view.voicemessages.AudioWaveView.MIN_WIDTH
            int r6 = kotlin.ranges.d.d(r6, r0)
            int r7 = android.view.View.MeasureSpec.getSize(r7)
            r5.setMeasuredDimension(r6, r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.view.voicemessages.AudioWaveView.onMeasure(int, int):void");
    }

    public final void reset() {
        this.animationManager.reset();
    }

    public final void setAnimationJob(Job job) {
        this.animationJob = job;
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public void setAudioProgressPaintColor(int i10) {
        if (i10 != this.audioProgressPaintColor) {
            this.audioProgressPaint.setColorFilter(new PorterDuffColorFilter(i10, PorterDuff.Mode.SRC_IN));
            postInvalidate();
        }
        this.audioProgressPaintColor = i10;
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public void setDefaultPaintColor(int i10) {
        if (i10 != this.defaultPaintColor) {
            this.defaultPaint.setColor(i10);
            postInvalidate();
        }
        this.defaultPaintColor = i10;
    }

    public final void setDuration(Long l10) {
        this.duration = l10;
        requestLayout();
    }

    public final void setOriginalSampleData(@NotNull byte[] value) {
        Intrinsics.checkNotNullParameter(value, "value");
        recalculateSampleData$default(this, value, 0, !Arrays.equals(this.originalSampleData, value), 2, null);
        this.originalSampleData = value;
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public void setShouldAnimate(boolean z10) {
        this.shouldAnimate = z10;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AudioWaveView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ AudioWaveView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    @Override // com.discord.chat.presentation.message.view.voicemessages.AudioProgressView
    public void setAudioProgress(float f10, boolean z10) {
        setAudioProgress(Float.valueOf(f10));
        if (getShouldAnimate() && z10) {
            finishAnimation();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AudioWaveView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        this.animationManager = new AudioWaveAnimationManager();
        this.downSampleData = new byte[0];
        this.originalSampleData = new byte[0];
        this.shouldAnimate = true;
        Paint init = init(new Paint());
        this.defaultPaint = init;
        this.defaultPaintColor = ThemeManagerKt.getTheme().getInteractiveTextDefault();
        Paint init2 = init(new Paint());
        this.audioProgressPaint = init2;
        this.audioProgressPaintColor = ThemeManagerKt.getTheme().getInteractiveTextActive();
        init.setColor(ThemeManagerKt.getTheme().getInteractiveTextDefault());
        init2.setColorFilter(new PorterDuffColorFilter(ThemeManagerKt.getTheme().getInteractiveTextActive(), PorterDuff.Mode.SRC_IN));
    }
}
