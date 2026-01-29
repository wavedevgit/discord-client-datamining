package com.discord.media.utils;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.swmansion.reanimated.layoutReanimation.Snapshot;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0004\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u001f\n\u0002\u0010\u000e\n\u0000\b\u0080\b\u0018\u00002\u00020\u0001BO\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\b\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u000b\u001a\u00020\n\u0012\u0006\u0010\f\u001a\u00020\u0006\u0012\u0006\u0010\r\u001a\u00020\u0003¢\u0006\u0004\b\u000e\u0010\u000fJ\t\u0010\u001c\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001e\u001a\u00020\u0006HÆ\u0003J\t\u0010\u001f\u001a\u00020\u0006HÆ\u0003J\t\u0010 \u001a\u00020\u0006HÆ\u0003J\t\u0010!\u001a\u00020\nHÆ\u0003J\t\u0010\"\u001a\u00020\nHÆ\u0003J\t\u0010#\u001a\u00020\u0006HÆ\u0003J\t\u0010$\u001a\u00020\u0003HÆ\u0003Jc\u0010%\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\u00062\b\b\u0002\u0010\b\u001a\u00020\u00062\b\b\u0002\u0010\t\u001a\u00020\n2\b\b\u0002\u0010\u000b\u001a\u00020\n2\b\b\u0002\u0010\f\u001a\u00020\u00062\b\b\u0002\u0010\r\u001a\u00020\u0003HÆ\u0001J\u0013\u0010&\u001a\u00020\n2\b\u0010'\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010(\u001a\u00020\u0003HÖ\u0001J\t\u0010)\u001a\u00020*HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0011R\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0011\u0010\u0007\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0014R\u0011\u0010\b\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0014R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0011\u0010\u000b\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0018R\u0011\u0010\f\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0014R\u0011\u0010\r\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0011¨\u0006+"}, d2 = {"Lcom/discord/media/utils/EncodingConfig;", "", Snapshot.TARGET_WIDTH, "", Snapshot.TARGET_HEIGHT, "frameRate", "", "keyFrameIntervalSeconds", "targetBitrate", "useHEVC", "", "createHDR", "rotationDegrees", "progressUpdateGranularity", "<init>", "(IILjava/lang/Number;Ljava/lang/Number;Ljava/lang/Number;ZZLjava/lang/Number;I)V", "getTargetWidth", "()I", "getTargetHeight", "getFrameRate", "()Ljava/lang/Number;", "getKeyFrameIntervalSeconds", "getTargetBitrate", "getUseHEVC", "()Z", "getCreateHDR", "getRotationDegrees", "getProgressUpdateGranularity", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "copy", "equals", "other", "hashCode", "toString", "", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class EncodingConfig {
    private final boolean createHDR;
    @NotNull
    private final Number frameRate;
    @NotNull
    private final Number keyFrameIntervalSeconds;
    private final int progressUpdateGranularity;
    @NotNull
    private final Number rotationDegrees;
    @NotNull
    private final Number targetBitrate;
    private final int targetHeight;
    private final int targetWidth;
    private final boolean useHEVC;

    public EncodingConfig(int i10, int i11, @NotNull Number frameRate, @NotNull Number keyFrameIntervalSeconds, @NotNull Number targetBitrate, boolean z10, boolean z11, @NotNull Number rotationDegrees, int i12) {
        Intrinsics.checkNotNullParameter(frameRate, "frameRate");
        Intrinsics.checkNotNullParameter(keyFrameIntervalSeconds, "keyFrameIntervalSeconds");
        Intrinsics.checkNotNullParameter(targetBitrate, "targetBitrate");
        Intrinsics.checkNotNullParameter(rotationDegrees, "rotationDegrees");
        this.targetWidth = i10;
        this.targetHeight = i11;
        this.frameRate = frameRate;
        this.keyFrameIntervalSeconds = keyFrameIntervalSeconds;
        this.targetBitrate = targetBitrate;
        this.useHEVC = z10;
        this.createHDR = z11;
        this.rotationDegrees = rotationDegrees;
        this.progressUpdateGranularity = i12;
    }

    public static /* synthetic */ EncodingConfig copy$default(EncodingConfig encodingConfig, int i10, int i11, Number number, Number number2, Number number3, boolean z10, boolean z11, Number number4, int i12, int i13, Object obj) {
        if ((i13 & 1) != 0) {
            i10 = encodingConfig.targetWidth;
        }
        if ((i13 & 2) != 0) {
            i11 = encodingConfig.targetHeight;
        }
        if ((i13 & 4) != 0) {
            number = encodingConfig.frameRate;
        }
        if ((i13 & 8) != 0) {
            number2 = encodingConfig.keyFrameIntervalSeconds;
        }
        if ((i13 & 16) != 0) {
            number3 = encodingConfig.targetBitrate;
        }
        if ((i13 & 32) != 0) {
            z10 = encodingConfig.useHEVC;
        }
        if ((i13 & 64) != 0) {
            z11 = encodingConfig.createHDR;
        }
        if ((i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            number4 = encodingConfig.rotationDegrees;
        }
        if ((i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            i12 = encodingConfig.progressUpdateGranularity;
        }
        Number number5 = number4;
        int i14 = i12;
        boolean z12 = z10;
        boolean z13 = z11;
        Number number6 = number3;
        Number number7 = number;
        return encodingConfig.copy(i10, i11, number7, number2, number6, z12, z13, number5, i14);
    }

    public final int component1() {
        return this.targetWidth;
    }

    public final int component2() {
        return this.targetHeight;
    }

    @NotNull
    public final Number component3() {
        return this.frameRate;
    }

    @NotNull
    public final Number component4() {
        return this.keyFrameIntervalSeconds;
    }

    @NotNull
    public final Number component5() {
        return this.targetBitrate;
    }

    public final boolean component6() {
        return this.useHEVC;
    }

    public final boolean component7() {
        return this.createHDR;
    }

    @NotNull
    public final Number component8() {
        return this.rotationDegrees;
    }

    public final int component9() {
        return this.progressUpdateGranularity;
    }

    @NotNull
    public final EncodingConfig copy(int i10, int i11, @NotNull Number frameRate, @NotNull Number keyFrameIntervalSeconds, @NotNull Number targetBitrate, boolean z10, boolean z11, @NotNull Number rotationDegrees, int i12) {
        Intrinsics.checkNotNullParameter(frameRate, "frameRate");
        Intrinsics.checkNotNullParameter(keyFrameIntervalSeconds, "keyFrameIntervalSeconds");
        Intrinsics.checkNotNullParameter(targetBitrate, "targetBitrate");
        Intrinsics.checkNotNullParameter(rotationDegrees, "rotationDegrees");
        return new EncodingConfig(i10, i11, frameRate, keyFrameIntervalSeconds, targetBitrate, z10, z11, rotationDegrees, i12);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof EncodingConfig) {
            EncodingConfig encodingConfig = (EncodingConfig) obj;
            return this.targetWidth == encodingConfig.targetWidth && this.targetHeight == encodingConfig.targetHeight && Intrinsics.areEqual(this.frameRate, encodingConfig.frameRate) && Intrinsics.areEqual(this.keyFrameIntervalSeconds, encodingConfig.keyFrameIntervalSeconds) && Intrinsics.areEqual(this.targetBitrate, encodingConfig.targetBitrate) && this.useHEVC == encodingConfig.useHEVC && this.createHDR == encodingConfig.createHDR && Intrinsics.areEqual(this.rotationDegrees, encodingConfig.rotationDegrees) && this.progressUpdateGranularity == encodingConfig.progressUpdateGranularity;
        }
        return false;
    }

    public final boolean getCreateHDR() {
        return this.createHDR;
    }

    @NotNull
    public final Number getFrameRate() {
        return this.frameRate;
    }

    @NotNull
    public final Number getKeyFrameIntervalSeconds() {
        return this.keyFrameIntervalSeconds;
    }

    public final int getProgressUpdateGranularity() {
        return this.progressUpdateGranularity;
    }

    @NotNull
    public final Number getRotationDegrees() {
        return this.rotationDegrees;
    }

    @NotNull
    public final Number getTargetBitrate() {
        return this.targetBitrate;
    }

    public final int getTargetHeight() {
        return this.targetHeight;
    }

    public final int getTargetWidth() {
        return this.targetWidth;
    }

    public final boolean getUseHEVC() {
        return this.useHEVC;
    }

    public int hashCode() {
        return (((((((((((((((Integer.hashCode(this.targetWidth) * 31) + Integer.hashCode(this.targetHeight)) * 31) + this.frameRate.hashCode()) * 31) + this.keyFrameIntervalSeconds.hashCode()) * 31) + this.targetBitrate.hashCode()) * 31) + Boolean.hashCode(this.useHEVC)) * 31) + Boolean.hashCode(this.createHDR)) * 31) + this.rotationDegrees.hashCode()) * 31) + Integer.hashCode(this.progressUpdateGranularity);
    }

    @NotNull
    public String toString() {
        int i10 = this.targetWidth;
        int i11 = this.targetHeight;
        Number number = this.frameRate;
        Number number2 = this.keyFrameIntervalSeconds;
        Number number3 = this.targetBitrate;
        boolean z10 = this.useHEVC;
        boolean z11 = this.createHDR;
        Number number4 = this.rotationDegrees;
        int i12 = this.progressUpdateGranularity;
        return "EncodingConfig(targetWidth=" + i10 + ", targetHeight=" + i11 + ", frameRate=" + number + ", keyFrameIntervalSeconds=" + number2 + ", targetBitrate=" + number3 + ", useHEVC=" + z10 + ", createHDR=" + z11 + ", rotationDegrees=" + number4 + ", progressUpdateGranularity=" + i12 + ")";
    }
}
