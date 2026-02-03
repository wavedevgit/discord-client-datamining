package com.discord.chat.bridge.row;

import bt.a2;
import bt.h0;
import com.discord.chat.bridge.MessageBase;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import ys.b0;
@jr.c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/row/BlockedGroupContent.$serializer", "Lbt/h0;", "Lcom/discord/chat/bridge/row/BlockedGroupContent;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/row/BlockedGroupContent;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/row/BlockedGroupContent;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class BlockedGroupContent$$serializer implements h0 {
    @NotNull
    public static final BlockedGroupContent$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        BlockedGroupContent$$serializer blockedGroupContent$$serializer = new BlockedGroupContent$$serializer();
        INSTANCE = blockedGroupContent$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.row.BlockedGroupContent", blockedGroupContent$$serializer, 1);
        a2Var.o("message", false);
        descriptor = a2Var;
    }

    private BlockedGroupContent$$serializer() {
    }

    @Override // bt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        return new KSerializer[]{MessageSerializer.INSTANCE};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final BlockedGroupContent deserialize(@NotNull Decoder decoder) {
        MessageBase messageBase;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i10 = 1;
        if (b10.p()) {
            messageBase = (MessageBase) b10.y(serialDescriptor, 0, MessageSerializer.INSTANCE, null);
        } else {
            boolean z10 = true;
            int i11 = 0;
            messageBase = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 != 0) {
                    throw new b0(o10);
                } else {
                    messageBase = (MessageBase) b10.y(serialDescriptor, 0, MessageSerializer.INSTANCE, messageBase);
                    i11 = 1;
                }
            }
            i10 = i11;
        }
        b10.c(serialDescriptor);
        return new BlockedGroupContent(i10, messageBase, null);
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ys.o
    public final void serialize(@NotNull Encoder encoder, @NotNull BlockedGroupContent value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        b10.m(serialDescriptor, 0, MessageSerializer.INSTANCE, value.message);
        b10.c(serialDescriptor);
    }

    @Override // bt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
