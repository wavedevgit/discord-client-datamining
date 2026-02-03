package com.discord.chat.bridge.executedcommand;

import bt.a2;
import bt.h;
import bt.h0;
import bt.p0;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/executedcommand/ExecutedCommandBackgroundStyles.$serializer", "Lbt/h0;", "Lcom/discord/chat/bridge/executedcommand/ExecutedCommandBackgroundStyles;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/executedcommand/ExecutedCommandBackgroundStyles;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/executedcommand/ExecutedCommandBackgroundStyles;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ExecutedCommandBackgroundStyles$$serializer implements h0 {
    @NotNull
    public static final ExecutedCommandBackgroundStyles$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ExecutedCommandBackgroundStyles$$serializer executedCommandBackgroundStyles$$serializer = new ExecutedCommandBackgroundStyles$$serializer();
        INSTANCE = executedCommandBackgroundStyles$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.executedcommand.ExecutedCommandBackgroundStyles", executedCommandBackgroundStyles$$serializer, 3);
        a2Var.o(ViewProps.COLOR, true);
        a2Var.o("borderRadius", true);
        a2Var.o("spaceAround", true);
        descriptor = a2Var;
    }

    private ExecutedCommandBackgroundStyles$$serializer() {
    }

    @Override // bt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        p0 p0Var = p0.f7678a;
        return new KSerializer[]{a.u(p0Var), a.u(p0Var), a.u(h.f7626a)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ExecutedCommandBackgroundStyles deserialize(@NotNull Decoder decoder) {
        int i10;
        Integer num;
        Integer num2;
        Boolean bool;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        Integer num3 = null;
        if (b10.p()) {
            p0 p0Var = p0.f7678a;
            num2 = (Integer) b10.n(serialDescriptor, 1, p0Var, null);
            bool = (Boolean) b10.n(serialDescriptor, 2, h.f7626a, null);
            i10 = 7;
            num = (Integer) b10.n(serialDescriptor, 0, p0Var, null);
        } else {
            boolean z10 = true;
            int i11 = 0;
            Integer num4 = null;
            Boolean bool2 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    num3 = (Integer) b10.n(serialDescriptor, 0, p0.f7678a, num3);
                    i11 |= 1;
                } else if (o10 == 1) {
                    num4 = (Integer) b10.n(serialDescriptor, 1, p0.f7678a, num4);
                    i11 |= 2;
                } else if (o10 != 2) {
                    throw new b0(o10);
                } else {
                    bool2 = (Boolean) b10.n(serialDescriptor, 2, h.f7626a, bool2);
                    i11 |= 4;
                }
            }
            i10 = i11;
            num = num3;
            num2 = num4;
            bool = bool2;
        }
        b10.c(serialDescriptor);
        return new ExecutedCommandBackgroundStyles(i10, num, num2, bool, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ys.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ExecutedCommandBackgroundStyles value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ExecutedCommandBackgroundStyles.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // bt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
