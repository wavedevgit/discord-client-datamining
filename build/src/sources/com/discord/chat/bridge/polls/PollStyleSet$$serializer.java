package com.discord.chat.bridge.polls;

import bt.a2;
import bt.g0;
import bt.h0;
import bt.p0;
import com.discord.chat.bridge.polls.PollRadioStyle;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import jr.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import ys.b0;
import zs.a;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/polls/PollStyleSet.$serializer", "Lbt/h0;", "Lcom/discord/chat/bridge/polls/PollStyleSet;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/polls/PollStyleSet;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/polls/PollStyleSet;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class PollStyleSet$$serializer implements h0 {
    @NotNull
    public static final PollStyleSet$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        PollStyleSet$$serializer pollStyleSet$$serializer = new PollStyleSet$$serializer();
        INSTANCE = pollStyleSet$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.polls.PollStyleSet", pollStyleSet$$serializer, 10);
        a2Var.o("border", true);
        a2Var.o(ViewProps.BORDER_WIDTH, true);
        a2Var.o("fill", true);
        a2Var.o("label", true);
        a2Var.o(ViewProps.OPACITY, true);
        a2Var.o("answerBackground", true);
        a2Var.o("answerFill", true);
        a2Var.o("radioStyle", true);
        a2Var.o("radioBackground", true);
        a2Var.o("radioForeground", true);
        descriptor = a2Var;
    }

    private PollStyleSet$$serializer() {
    }

    @Override // bt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        p0 p0Var = p0.f7678a;
        return new KSerializer[]{a.u(p0Var), p0Var, a.u(p0Var), a.u(p0Var), g0.f7622a, a.u(p0Var), a.u(p0Var), a.u(PollRadioStyle.Serializer.INSTANCE), a.u(p0Var), a.u(p0Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final PollStyleSet deserialize(@NotNull Decoder decoder) {
        int i10;
        Integer num;
        Integer num2;
        Integer num3;
        PollRadioStyle pollRadioStyle;
        Integer num4;
        Integer num5;
        Integer num6;
        float f10;
        int i11;
        Integer num7;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i12 = 9;
        if (b10.p()) {
            p0 p0Var = p0.f7678a;
            int i13 = b10.i(serialDescriptor, 1);
            float u10 = b10.u(serialDescriptor, 4);
            num = (Integer) b10.n(serialDescriptor, 9, p0Var, null);
            i10 = 1023;
            pollRadioStyle = (PollRadioStyle) b10.n(serialDescriptor, 7, PollRadioStyle.Serializer.INSTANCE, null);
            num3 = (Integer) b10.n(serialDescriptor, 6, p0Var, null);
            num4 = (Integer) b10.n(serialDescriptor, 5, p0Var, null);
            num5 = (Integer) b10.n(serialDescriptor, 3, p0Var, null);
            num2 = (Integer) b10.n(serialDescriptor, 8, p0Var, null);
            f10 = u10;
            num6 = (Integer) b10.n(serialDescriptor, 2, p0Var, null);
            i11 = i13;
            num7 = (Integer) b10.n(serialDescriptor, 0, p0Var, null);
        } else {
            boolean z10 = true;
            int i14 = 0;
            Integer num8 = null;
            Integer num9 = null;
            Integer num10 = null;
            PollRadioStyle pollRadioStyle2 = null;
            Integer num11 = null;
            Integer num12 = null;
            Integer num13 = null;
            float f11 = 0.0f;
            int i15 = 0;
            Integer num14 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        break;
                    case 0:
                        num13 = (Integer) b10.n(serialDescriptor, 0, p0.f7678a, num13);
                        i15 |= 1;
                        i12 = 9;
                        break;
                    case 1:
                        i14 = b10.i(serialDescriptor, 1);
                        i15 |= 2;
                        i12 = 9;
                        break;
                    case 2:
                        num14 = (Integer) b10.n(serialDescriptor, 2, p0.f7678a, num14);
                        i15 |= 4;
                        i12 = 9;
                        break;
                    case 3:
                        num12 = (Integer) b10.n(serialDescriptor, 3, p0.f7678a, num12);
                        i15 |= 8;
                        i12 = 9;
                        break;
                    case 4:
                        f11 = b10.u(serialDescriptor, 4);
                        i15 |= 16;
                        i12 = 9;
                        break;
                    case 5:
                        num11 = (Integer) b10.n(serialDescriptor, 5, p0.f7678a, num11);
                        i15 |= 32;
                        i12 = 9;
                        break;
                    case 6:
                        num10 = (Integer) b10.n(serialDescriptor, 6, p0.f7678a, num10);
                        i15 |= 64;
                        i12 = 9;
                        break;
                    case 7:
                        pollRadioStyle2 = (PollRadioStyle) b10.n(serialDescriptor, 7, PollRadioStyle.Serializer.INSTANCE, pollRadioStyle2);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        i12 = 9;
                        continue;
                    case 8:
                        num9 = (Integer) b10.n(serialDescriptor, 8, p0.f7678a, num9);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    case 9:
                        num8 = (Integer) b10.n(serialDescriptor, i12, p0.f7678a, num8);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i15;
            num = num8;
            num2 = num9;
            num3 = num10;
            pollRadioStyle = pollRadioStyle2;
            num4 = num11;
            num5 = num12;
            num6 = num14;
            f10 = f11;
            i11 = i14;
            num7 = num13;
        }
        b10.c(serialDescriptor);
        return new PollStyleSet(i10, num7, i11, num6, num5, f10, num4, num3, pollRadioStyle, num2, num, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ys.o
    public final void serialize(@NotNull Encoder encoder, @NotNull PollStyleSet value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        PollStyleSet.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // bt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
