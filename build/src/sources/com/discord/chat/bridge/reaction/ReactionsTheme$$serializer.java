package com.discord.chat.bridge.reaction;

import at.b0;
import bt.a;
import dt.a2;
import dt.h0;
import dt.p0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import lr.c;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/reaction/ReactionsTheme.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/reaction/ReactionsTheme;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/reaction/ReactionsTheme;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/reaction/ReactionsTheme;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ReactionsTheme$$serializer implements h0 {
    @NotNull
    public static final ReactionsTheme$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ReactionsTheme$$serializer reactionsTheme$$serializer = new ReactionsTheme$$serializer();
        INSTANCE = reactionsTheme$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.reaction.ReactionsTheme", reactionsTheme$$serializer, 6);
        a2Var.o("reactionBackgroundColor", true);
        a2Var.o("reactionBorderColor", true);
        a2Var.o("reactionTextColor", true);
        a2Var.o("activeReactionBackgroundColor", true);
        a2Var.o("activeReactionBorderColor", true);
        a2Var.o("activeReactionTextColor", true);
        descriptor = a2Var;
    }

    private ReactionsTheme$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        p0 p0Var = p0.f20994a;
        return new KSerializer[]{a.u(p0Var), a.u(p0Var), a.u(p0Var), a.u(p0Var), a.u(p0Var), a.u(p0Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ReactionsTheme deserialize(@NotNull Decoder decoder) {
        int i10;
        Integer num;
        Integer num2;
        Integer num3;
        Integer num4;
        Integer num5;
        Integer num6;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i11 = 5;
        Integer num7 = null;
        if (b10.p()) {
            p0 p0Var = p0.f20994a;
            num6 = (Integer) b10.n(serialDescriptor, 5, p0Var, null);
            i10 = 63;
            num4 = (Integer) b10.n(serialDescriptor, 3, p0Var, null);
            num5 = (Integer) b10.n(serialDescriptor, 4, p0Var, null);
            num3 = (Integer) b10.n(serialDescriptor, 2, p0Var, null);
            num2 = (Integer) b10.n(serialDescriptor, 1, p0Var, null);
            num = (Integer) b10.n(serialDescriptor, 0, p0Var, null);
        } else {
            boolean z10 = true;
            int i12 = 0;
            Integer num8 = null;
            Integer num9 = null;
            Integer num10 = null;
            Integer num11 = null;
            Integer num12 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i11 = 5;
                    case 0:
                        num7 = (Integer) b10.n(serialDescriptor, 0, p0.f20994a, num7);
                        i12 |= 1;
                        i11 = 5;
                    case 1:
                        num8 = (Integer) b10.n(serialDescriptor, 1, p0.f20994a, num8);
                        i12 |= 2;
                    case 2:
                        num9 = (Integer) b10.n(serialDescriptor, 2, p0.f20994a, num9);
                        i12 |= 4;
                    case 3:
                        num10 = (Integer) b10.n(serialDescriptor, 3, p0.f20994a, num10);
                        i12 |= 8;
                    case 4:
                        num11 = (Integer) b10.n(serialDescriptor, 4, p0.f20994a, num11);
                        i12 |= 16;
                    case 5:
                        num12 = (Integer) b10.n(serialDescriptor, i11, p0.f20994a, num12);
                        i12 |= 32;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i12;
            num = num7;
            num2 = num8;
            num3 = num9;
            num4 = num10;
            num5 = num11;
            num6 = num12;
        }
        b10.c(serialDescriptor);
        return new ReactionsTheme(i10, num, num2, num3, num4, num5, num6, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ReactionsTheme value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ReactionsTheme.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
