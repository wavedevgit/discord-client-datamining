package com.discord.chat.bridge.reaction;

import at.a2;
import at.h;
import at.h0;
import at.p0;
import ir.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import xs.b0;
import ys.a;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/reaction/MessageReaction.$serializer", "Lat/h0;", "Lcom/discord/chat/bridge/reaction/MessageReaction;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/reaction/MessageReaction;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/reaction/MessageReaction;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class MessageReaction$$serializer implements h0 {
    @NotNull
    public static final MessageReaction$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        MessageReaction$$serializer messageReaction$$serializer = new MessageReaction$$serializer();
        INSTANCE = messageReaction$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.reaction.MessageReaction", messageReaction$$serializer, 7);
        a2Var.o("count", false);
        a2Var.o("me", false);
        a2Var.o("me_burst", true);
        a2Var.o("emoji", false);
        a2Var.o("burst_count", true);
        a2Var.o("themedBurstColors", true);
        a2Var.o("isMe", true);
        descriptor = a2Var;
    }

    private MessageReaction$$serializer() {
    }

    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        KSerializer u10 = a.u(ThemedBurstReactionColorPalette$$serializer.INSTANCE);
        p0 p0Var = p0.f6864a;
        h hVar = h.f6812a;
        return new KSerializer[]{p0Var, hVar, hVar, MessageReactionEmoji$$serializer.INSTANCE, p0Var, u10, hVar};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final MessageReaction deserialize(@NotNull Decoder decoder) {
        int i10;
        ThemedBurstReactionColorPalette themedBurstReactionColorPalette;
        boolean z10;
        int i11;
        boolean z11;
        boolean z12;
        int i12;
        MessageReactionEmoji messageReactionEmoji;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            boolean C = b10.C(serialDescriptor, 1);
            boolean C2 = b10.C(serialDescriptor, 2);
            int i13 = b10.i(serialDescriptor, 4);
            z10 = b10.C(serialDescriptor, 6);
            themedBurstReactionColorPalette = (ThemedBurstReactionColorPalette) b10.n(serialDescriptor, 5, ThemedBurstReactionColorPalette$$serializer.INSTANCE, null);
            messageReactionEmoji = (MessageReactionEmoji) b10.y(serialDescriptor, 3, MessageReactionEmoji$$serializer.INSTANCE, null);
            i11 = i13;
            z11 = C2;
            z12 = C;
            i12 = 127;
        } else {
            boolean z13 = true;
            i10 = 0;
            int i14 = 0;
            boolean z14 = false;
            boolean z15 = false;
            int i15 = 0;
            MessageReactionEmoji messageReactionEmoji2 = null;
            boolean z16 = false;
            ThemedBurstReactionColorPalette themedBurstReactionColorPalette2 = null;
            while (z13) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z13 = false;
                        break;
                    case 0:
                        i15 |= 1;
                        i10 = b10.i(serialDescriptor, 0);
                        continue;
                    case 1:
                        z15 = b10.C(serialDescriptor, 1);
                        i15 |= 2;
                        continue;
                    case 2:
                        z14 = b10.C(serialDescriptor, 2);
                        i15 |= 4;
                        break;
                    case 3:
                        messageReactionEmoji2 = (MessageReactionEmoji) b10.y(serialDescriptor, 3, MessageReactionEmoji$$serializer.INSTANCE, messageReactionEmoji2);
                        i15 |= 8;
                        break;
                    case 4:
                        i14 = b10.i(serialDescriptor, 4);
                        i15 |= 16;
                        break;
                    case 5:
                        themedBurstReactionColorPalette2 = (ThemedBurstReactionColorPalette) b10.n(serialDescriptor, 5, ThemedBurstReactionColorPalette$$serializer.INSTANCE, themedBurstReactionColorPalette2);
                        i15 |= 32;
                        break;
                    case 6:
                        z16 = b10.C(serialDescriptor, 6);
                        i15 |= 64;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            themedBurstReactionColorPalette = themedBurstReactionColorPalette2;
            z10 = z16;
            i11 = i14;
            z11 = z14;
            z12 = z15;
            i12 = i15;
            messageReactionEmoji = messageReactionEmoji2;
        }
        int i16 = i10;
        b10.c(serialDescriptor);
        return new MessageReaction(i12, i16, z12, z11, messageReactionEmoji, i11, themedBurstReactionColorPalette, z10, null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull MessageReaction value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        MessageReaction.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
