package com.discord.chat.bridge.polls;

import at.m;
import com.discord.chat.bridge.polls.PollRadioStyle;
import com.discord.chat.bridge.polls.PollStyleSet;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react.utilities.ReactColorToAndroidColorKt;
import com.discord.theme.ThemeManagerKt;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import dt.p0;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import lr.l;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b%\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 G2\u00020\u0001:\u0002GHB{\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0007\u001a\u00020\b\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u000f\u0010\u0010B{\b\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u0003\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u000f\u0010\u0014J\u0010\u0010+\u001a\u0004\u0018\u00010\u0003HÂ\u0003¢\u0006\u0002\u0010,J\t\u0010-\u001a\u00020\u0003HÂ\u0003J\u0010\u0010.\u001a\u0004\u0018\u00010\u0003HÂ\u0003¢\u0006\u0002\u0010,J\u0010\u0010/\u001a\u0004\u0018\u00010\u0003HÂ\u0003¢\u0006\u0002\u0010,J\t\u00100\u001a\u00020\bHÆ\u0003J\u0010\u00101\u001a\u0004\u0018\u00010\u0003HÂ\u0003¢\u0006\u0002\u0010,J\u0010\u00102\u001a\u0004\u0018\u00010\u0003HÂ\u0003¢\u0006\u0002\u0010,J\u000b\u00103\u001a\u0004\u0018\u00010\fHÆ\u0003J\u0010\u00104\u001a\u0004\u0018\u00010\u0003HÂ\u0003¢\u0006\u0002\u0010,J\u0010\u00105\u001a\u0004\u0018\u00010\u0003HÂ\u0003¢\u0006\u0002\u0010,J\u0082\u0001\u00106\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0007\u001a\u00020\b2\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u0003HÆ\u0001¢\u0006\u0002\u00107J\u0013\u00108\u001a\u0002092\b\u0010:\u001a\u0004\u0018\u00010;HÖ\u0003J\t\u0010<\u001a\u00020\u0003HÖ\u0001J\t\u0010=\u001a\u00020>HÖ\u0001J%\u0010?\u001a\u00020@2\u0006\u0010A\u001a\u00020\u00002\u0006\u0010B\u001a\u00020C2\u0006\u0010D\u001a\u00020EH\u0001¢\u0006\u0002\bFR\u0012\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0015R\u000e\u0010\u0004\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0012\u0010\u0005\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0015R\u0012\u0010\u0006\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0015R\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0012\u0010\t\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0015R\u0012\u0010\n\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0015R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0012\u0010\r\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0015R\u0012\u0010\u000e\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0015R\u0014\u0010\u001a\u001a\u00020\u00038WX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u001b\u0010\u001cR\u0014\u0010\u001d\u001a\u00020\u00038VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u001e\u0010\u001cR\u0014\u0010\u001f\u001a\u00020\u00038WX\u0096\u0004¢\u0006\u0006\u001a\u0004\b \u0010\u001cR\u0014\u0010!\u001a\u00020\u00038WX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\"\u0010\u001cR\u0014\u0010#\u001a\u00020\u00038WX\u0096\u0004¢\u0006\u0006\u001a\u0004\b$\u0010\u001cR\u0014\u0010%\u001a\u00020\u00038WX\u0096\u0004¢\u0006\u0006\u001a\u0004\b&\u0010\u001cR\u0014\u0010'\u001a\u00020\u00038WX\u0096\u0004¢\u0006\u0006\u001a\u0004\b(\u0010\u001cR\u0014\u0010)\u001a\u00020\u00038WX\u0096\u0004¢\u0006\u0006\u001a\u0004\b*\u0010\u001c¨\u0006I"}, d2 = {"Lcom/discord/chat/bridge/polls/PollStyleSet;", "Lcom/discord/chat/bridge/polls/IPollStyleSet;", "border", "", ViewProps.BORDER_WIDTH, "fill", "label", ViewProps.OPACITY, "", "answerBackground", "answerFill", "radioStyle", "Lcom/discord/chat/bridge/polls/PollRadioStyle;", "radioBackground", "radioForeground", "<init>", "(Ljava/lang/Integer;ILjava/lang/Integer;Ljava/lang/Integer;FLjava/lang/Integer;Ljava/lang/Integer;Lcom/discord/chat/bridge/polls/PollRadioStyle;Ljava/lang/Integer;Ljava/lang/Integer;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/Integer;ILjava/lang/Integer;Ljava/lang/Integer;FLjava/lang/Integer;Ljava/lang/Integer;Lcom/discord/chat/bridge/polls/PollRadioStyle;Ljava/lang/Integer;Ljava/lang/Integer;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "Ljava/lang/Integer;", "getOpacity", "()F", "getRadioStyle", "()Lcom/discord/chat/bridge/polls/PollRadioStyle;", ViewProps.BORDER_COLOR, "getBorderColor", "()I", "borderWidthPx", "getBorderWidthPx", "fillColor", "getFillColor", "labelColor", "getLabelColor", "answerBackgroundColor", "getAnswerBackgroundColor", "answerFillColor", "getAnswerFillColor", "radioBackgroundColor", "getRadioBackgroundColor", "radioForegroundColor", "getRadioForegroundColor", "component1", "()Ljava/lang/Integer;", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "copy", "(Ljava/lang/Integer;ILjava/lang/Integer;Ljava/lang/Integer;FLjava/lang/Integer;Ljava/lang/Integer;Lcom/discord/chat/bridge/polls/PollRadioStyle;Ljava/lang/Integer;Ljava/lang/Integer;)Lcom/discord/chat/bridge/polls/PollStyleSet;", "equals", "", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "Companion", "$serializer", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nPollStyleSet.kt\nKotlin\n*S Kotlin\n*F\n+ 1 PollStyleSet.kt\ncom/discord/chat/bridge/polls/PollStyleSet\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,58:1\n1#2:59\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollStyleSet implements IPollStyleSet {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy DEFAULT$delegate = l.a(new Function0() { // from class: n6.f
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            PollStyleSet DEFAULT_delegate$lambda$6;
            DEFAULT_delegate$lambda$6 = PollStyleSet.DEFAULT_delegate$lambda$6();
            return DEFAULT_delegate$lambda$6;
        }
    });
    @NotNull
    public static final String DEFAULT_KEY = "normal";
    private final Integer answerBackground;
    private final Integer answerFill;
    private final Integer border;
    private final int borderWidth;
    private final Integer fill;
    private final Integer label;
    private final float opacity;
    private final Integer radioBackground;
    private final Integer radioForeground;
    private final PollRadioStyle radioStyle;

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u00070\rR\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u001b\u0010\u0006\u001a\u00020\u00078FX\u0086\u0084\u0002¢\u0006\f\n\u0004\b\n\u0010\u000b\u001a\u0004\b\b\u0010\t¨\u0006\u000e"}, d2 = {"Lcom/discord/chat/bridge/polls/PollStyleSet$Companion;", "", "<init>", "()V", "DEFAULT_KEY", "", "DEFAULT", "Lcom/discord/chat/bridge/polls/PollStyleSet;", "getDEFAULT", "()Lcom/discord/chat/bridge/polls/PollStyleSet;", "DEFAULT$delegate", "Lkotlin/Lazy;", "serializer", "Lkotlinx/serialization/KSerializer;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final PollStyleSet getDEFAULT() {
            return (PollStyleSet) PollStyleSet.DEFAULT$delegate.getValue();
        }

        @NotNull
        public final KSerializer serializer() {
            return PollStyleSet$$serializer.INSTANCE;
        }

        private Companion() {
        }
    }

    public PollStyleSet() {
        this((Integer) null, 0, (Integer) null, (Integer) null, 0.0f, (Integer) null, (Integer) null, (PollRadioStyle) null, (Integer) null, (Integer) null, 1023, (DefaultConstructorMarker) null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final PollStyleSet DEFAULT_delegate$lambda$6() {
        return new PollStyleSet((Integer) null, 0, (Integer) null, (Integer) null, 0.0f, (Integer) null, (Integer) null, (PollRadioStyle) null, (Integer) null, (Integer) null, 1023, (DefaultConstructorMarker) null);
    }

    private final Integer component1() {
        return this.border;
    }

    private final Integer component10() {
        return this.radioForeground;
    }

    private final int component2() {
        return this.borderWidth;
    }

    private final Integer component3() {
        return this.fill;
    }

    private final Integer component4() {
        return this.label;
    }

    private final Integer component6() {
        return this.answerBackground;
    }

    private final Integer component7() {
        return this.answerFill;
    }

    private final Integer component9() {
        return this.radioBackground;
    }

    public static /* synthetic */ PollStyleSet copy$default(PollStyleSet pollStyleSet, Integer num, int i10, Integer num2, Integer num3, float f10, Integer num4, Integer num5, PollRadioStyle pollRadioStyle, Integer num6, Integer num7, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            num = pollStyleSet.border;
        }
        if ((i11 & 2) != 0) {
            i10 = pollStyleSet.borderWidth;
        }
        if ((i11 & 4) != 0) {
            num2 = pollStyleSet.fill;
        }
        if ((i11 & 8) != 0) {
            num3 = pollStyleSet.label;
        }
        if ((i11 & 16) != 0) {
            f10 = pollStyleSet.opacity;
        }
        if ((i11 & 32) != 0) {
            num4 = pollStyleSet.answerBackground;
        }
        if ((i11 & 64) != 0) {
            num5 = pollStyleSet.answerFill;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            pollRadioStyle = pollStyleSet.radioStyle;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            num6 = pollStyleSet.radioBackground;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            num7 = pollStyleSet.radioForeground;
        }
        Integer num8 = num6;
        Integer num9 = num7;
        Integer num10 = num5;
        PollRadioStyle pollRadioStyle2 = pollRadioStyle;
        float f11 = f10;
        Integer num11 = num4;
        return pollStyleSet.copy(num, i10, num2, num3, f11, num11, num10, pollRadioStyle2, num8, num9);
    }

    public static final /* synthetic */ void write$Self$chat_release(PollStyleSet pollStyleSet, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        if (compositeEncoder.z(serialDescriptor, 0) || pollStyleSet.border != null) {
            compositeEncoder.s(serialDescriptor, 0, p0.f20994a, pollStyleSet.border);
        }
        if (compositeEncoder.z(serialDescriptor, 1) || pollStyleSet.borderWidth != 0) {
            compositeEncoder.w(serialDescriptor, 1, pollStyleSet.borderWidth);
        }
        if (compositeEncoder.z(serialDescriptor, 2) || pollStyleSet.fill != null) {
            compositeEncoder.s(serialDescriptor, 2, p0.f20994a, pollStyleSet.fill);
        }
        if (compositeEncoder.z(serialDescriptor, 3) || pollStyleSet.label != null) {
            compositeEncoder.s(serialDescriptor, 3, p0.f20994a, pollStyleSet.label);
        }
        if (compositeEncoder.z(serialDescriptor, 4) || Float.compare(pollStyleSet.opacity, 1.0f) != 0) {
            compositeEncoder.r(serialDescriptor, 4, pollStyleSet.opacity);
        }
        if (compositeEncoder.z(serialDescriptor, 5) || pollStyleSet.answerBackground != null) {
            compositeEncoder.s(serialDescriptor, 5, p0.f20994a, pollStyleSet.answerBackground);
        }
        if (compositeEncoder.z(serialDescriptor, 6) || pollStyleSet.answerFill != null) {
            compositeEncoder.s(serialDescriptor, 6, p0.f20994a, pollStyleSet.answerFill);
        }
        if (compositeEncoder.z(serialDescriptor, 7) || pollStyleSet.radioStyle != null) {
            compositeEncoder.s(serialDescriptor, 7, PollRadioStyle.Serializer.INSTANCE, pollStyleSet.radioStyle);
        }
        if (compositeEncoder.z(serialDescriptor, 8) || pollStyleSet.radioBackground != null) {
            compositeEncoder.s(serialDescriptor, 8, p0.f20994a, pollStyleSet.radioBackground);
        }
        if (compositeEncoder.z(serialDescriptor, 9) || pollStyleSet.radioForeground != null) {
            compositeEncoder.s(serialDescriptor, 9, p0.f20994a, pollStyleSet.radioForeground);
        }
    }

    public final float component5() {
        return this.opacity;
    }

    public final PollRadioStyle component8() {
        return this.radioStyle;
    }

    @NotNull
    public final PollStyleSet copy(Integer num, int i10, Integer num2, Integer num3, float f10, Integer num4, Integer num5, PollRadioStyle pollRadioStyle, Integer num6, Integer num7) {
        return new PollStyleSet(num, i10, num2, num3, f10, num4, num5, pollRadioStyle, num6, num7);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof PollStyleSet) {
            PollStyleSet pollStyleSet = (PollStyleSet) obj;
            return Intrinsics.areEqual(this.border, pollStyleSet.border) && this.borderWidth == pollStyleSet.borderWidth && Intrinsics.areEqual(this.fill, pollStyleSet.fill) && Intrinsics.areEqual(this.label, pollStyleSet.label) && Float.compare(this.opacity, pollStyleSet.opacity) == 0 && Intrinsics.areEqual(this.answerBackground, pollStyleSet.answerBackground) && Intrinsics.areEqual(this.answerFill, pollStyleSet.answerFill) && this.radioStyle == pollStyleSet.radioStyle && Intrinsics.areEqual(this.radioBackground, pollStyleSet.radioBackground) && Intrinsics.areEqual(this.radioForeground, pollStyleSet.radioForeground);
        }
        return false;
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getAnswerBackgroundColor() {
        Integer num = this.answerBackground;
        if (num != null) {
            return ReactColorToAndroidColorKt.reactColorToAndroidColor(num.intValue());
        }
        return ThemeManagerKt.getTheme().getBackgroundSurfaceHigh();
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getAnswerFillColor() {
        Integer num = this.answerFill;
        if (num != null) {
            return ReactColorToAndroidColorKt.reactColorToAndroidColor(num.intValue());
        }
        return ThemeManagerKt.getTheme().getBackgroundBaseLowest();
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getBorderColor() {
        Integer num = this.border;
        if (num != null) {
            return ReactColorToAndroidColorKt.reactColorToAndroidColor(num.intValue());
        }
        return ThemeManagerKt.getTheme().getBackgroundBaseLowest();
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getBorderWidthPx() {
        return SizeUtilsKt.getDpToPx(this.borderWidth);
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getFillColor() {
        Integer num = this.fill;
        if (num != null) {
            return ReactColorToAndroidColorKt.reactColorToAndroidColor(num.intValue());
        }
        return ThemeManagerKt.getTheme().getBackgroundSurfaceHigh();
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getLabelColor() {
        Integer num = this.label;
        if (num != null) {
            return ReactColorToAndroidColorKt.reactColorToAndroidColor(num.intValue());
        }
        return ThemeManagerKt.getTheme().getTextStrong();
    }

    public final float getOpacity() {
        return this.opacity;
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getRadioBackgroundColor() {
        Integer num = this.radioBackground;
        if (num != null) {
            return ReactColorToAndroidColorKt.reactColorToAndroidColor(num.intValue());
        }
        return ThemeManagerKt.getTheme().getInteractiveTextDefault();
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getRadioForegroundColor() {
        Integer num = this.radioForeground;
        if (num != null) {
            return ReactColorToAndroidColorKt.reactColorToAndroidColor(num.intValue());
        }
        return ThemeManagerKt.getTheme().getWhite();
    }

    public final PollRadioStyle getRadioStyle() {
        return this.radioStyle;
    }

    public int hashCode() {
        Integer num = this.border;
        int hashCode = (((num == null ? 0 : num.hashCode()) * 31) + Integer.hashCode(this.borderWidth)) * 31;
        Integer num2 = this.fill;
        int hashCode2 = (hashCode + (num2 == null ? 0 : num2.hashCode())) * 31;
        Integer num3 = this.label;
        int hashCode3 = (((hashCode2 + (num3 == null ? 0 : num3.hashCode())) * 31) + Float.hashCode(this.opacity)) * 31;
        Integer num4 = this.answerBackground;
        int hashCode4 = (hashCode3 + (num4 == null ? 0 : num4.hashCode())) * 31;
        Integer num5 = this.answerFill;
        int hashCode5 = (hashCode4 + (num5 == null ? 0 : num5.hashCode())) * 31;
        PollRadioStyle pollRadioStyle = this.radioStyle;
        int hashCode6 = (hashCode5 + (pollRadioStyle == null ? 0 : pollRadioStyle.hashCode())) * 31;
        Integer num6 = this.radioBackground;
        int hashCode7 = (hashCode6 + (num6 == null ? 0 : num6.hashCode())) * 31;
        Integer num7 = this.radioForeground;
        return hashCode7 + (num7 != null ? num7.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        Integer num = this.border;
        int i10 = this.borderWidth;
        Integer num2 = this.fill;
        Integer num3 = this.label;
        float f10 = this.opacity;
        Integer num4 = this.answerBackground;
        Integer num5 = this.answerFill;
        PollRadioStyle pollRadioStyle = this.radioStyle;
        Integer num6 = this.radioBackground;
        Integer num7 = this.radioForeground;
        return "PollStyleSet(border=" + num + ", borderWidth=" + i10 + ", fill=" + num2 + ", label=" + num3 + ", opacity=" + f10 + ", answerBackground=" + num4 + ", answerFill=" + num5 + ", radioStyle=" + pollRadioStyle + ", radioBackground=" + num6 + ", radioForeground=" + num7 + ")";
    }

    public /* synthetic */ PollStyleSet(int i10, Integer num, int i11, Integer num2, Integer num3, float f10, Integer num4, Integer num5, PollRadioStyle pollRadioStyle, Integer num6, Integer num7, SerializationConstructorMarker serializationConstructorMarker) {
        if ((i10 & 1) == 0) {
            this.border = null;
        } else {
            this.border = num;
        }
        if ((i10 & 2) == 0) {
            this.borderWidth = 0;
        } else {
            this.borderWidth = i11;
        }
        if ((i10 & 4) == 0) {
            this.fill = null;
        } else {
            this.fill = num2;
        }
        if ((i10 & 8) == 0) {
            this.label = null;
        } else {
            this.label = num3;
        }
        if ((i10 & 16) == 0) {
            this.opacity = 1.0f;
        } else {
            this.opacity = f10;
        }
        if ((i10 & 32) == 0) {
            this.answerBackground = null;
        } else {
            this.answerBackground = num4;
        }
        if ((i10 & 64) == 0) {
            this.answerFill = null;
        } else {
            this.answerFill = num5;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.radioStyle = null;
        } else {
            this.radioStyle = pollRadioStyle;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.radioBackground = null;
        } else {
            this.radioBackground = num6;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.radioForeground = null;
        } else {
            this.radioForeground = num7;
        }
    }

    public PollStyleSet(Integer num, int i10, Integer num2, Integer num3, float f10, Integer num4, Integer num5, PollRadioStyle pollRadioStyle, Integer num6, Integer num7) {
        this.border = num;
        this.borderWidth = i10;
        this.fill = num2;
        this.label = num3;
        this.opacity = f10;
        this.answerBackground = num4;
        this.answerFill = num5;
        this.radioStyle = pollRadioStyle;
        this.radioBackground = num6;
        this.radioForeground = num7;
    }

    public /* synthetic */ PollStyleSet(Integer num, int i10, Integer num2, Integer num3, float f10, Integer num4, Integer num5, PollRadioStyle pollRadioStyle, Integer num6, Integer num7, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? null : num, (i11 & 2) != 0 ? 0 : i10, (i11 & 4) != 0 ? null : num2, (i11 & 8) != 0 ? null : num3, (i11 & 16) != 0 ? 1.0f : f10, (i11 & 32) != 0 ? null : num4, (i11 & 64) != 0 ? null : num5, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : pollRadioStyle, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : num6, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : num7);
    }
}
