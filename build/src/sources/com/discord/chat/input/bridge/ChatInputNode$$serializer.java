package com.discord.chat.input.bridge;

import at.b0;
import bt.a;
import dt.a2;
import dt.h;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/input/bridge/ChatInputNode.$serializer", "Ldt/h0;", "Lcom/discord/chat/input/bridge/ChatInputNode;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/input/bridge/ChatInputNode;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/input/bridge/ChatInputNode;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ChatInputNode$$serializer implements h0 {
    @NotNull
    public static final ChatInputNode$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ChatInputNode$$serializer chatInputNode$$serializer = new ChatInputNode$$serializer();
        INSTANCE = chatInputNode$$serializer;
        a2 a2Var = new a2("com.discord.chat.input.bridge.ChatInputNode", chatInputNode$$serializer, 7);
        a2Var.o("type", false);
        a2Var.o("location", false);
        a2Var.o("length", false);
        a2Var.o("style", true);
        a2Var.o("deleteNodeOnBackspace", true);
        a2Var.o("tapAction", true);
        a2Var.o("editDisabled", true);
        descriptor = a2Var;
    }

    private ChatInputNode$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        KSerializer u10 = a.u(ChatInputNodeStyle$$serializer.INSTANCE);
        KSerializer u11 = a.u(TapAction$$serializer.INSTANCE);
        p0 p0Var = p0.f20994a;
        h hVar = h.f20942a;
        return new KSerializer[]{p0Var, p0Var, p0Var, u10, hVar, u11, hVar};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ChatInputNode deserialize(@NotNull Decoder decoder) {
        int i10;
        TapAction tapAction;
        boolean z10;
        boolean z11;
        int i11;
        int i12;
        int i13;
        ChatInputNodeStyle chatInputNodeStyle;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            int i14 = b10.i(serialDescriptor, 1);
            int i15 = b10.i(serialDescriptor, 2);
            boolean C = b10.C(serialDescriptor, 4);
            z10 = b10.C(serialDescriptor, 6);
            tapAction = (TapAction) b10.n(serialDescriptor, 5, TapAction$$serializer.INSTANCE, null);
            chatInputNodeStyle = (ChatInputNodeStyle) b10.n(serialDescriptor, 3, ChatInputNodeStyle$$serializer.INSTANCE, null);
            z11 = C;
            i11 = i15;
            i12 = i14;
            i13 = 127;
        } else {
            boolean z12 = true;
            i10 = 0;
            boolean z13 = false;
            int i16 = 0;
            int i17 = 0;
            int i18 = 0;
            ChatInputNodeStyle chatInputNodeStyle2 = null;
            boolean z14 = false;
            TapAction tapAction2 = null;
            while (z12) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z12 = false;
                        break;
                    case 0:
                        i18 |= 1;
                        i10 = b10.i(serialDescriptor, 0);
                        continue;
                    case 1:
                        i17 = b10.i(serialDescriptor, 1);
                        i18 |= 2;
                        continue;
                    case 2:
                        i16 = b10.i(serialDescriptor, 2);
                        i18 |= 4;
                        break;
                    case 3:
                        chatInputNodeStyle2 = (ChatInputNodeStyle) b10.n(serialDescriptor, 3, ChatInputNodeStyle$$serializer.INSTANCE, chatInputNodeStyle2);
                        i18 |= 8;
                        break;
                    case 4:
                        z13 = b10.C(serialDescriptor, 4);
                        i18 |= 16;
                        break;
                    case 5:
                        tapAction2 = (TapAction) b10.n(serialDescriptor, 5, TapAction$$serializer.INSTANCE, tapAction2);
                        i18 |= 32;
                        break;
                    case 6:
                        z14 = b10.C(serialDescriptor, 6);
                        i18 |= 64;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            tapAction = tapAction2;
            z10 = z14;
            z11 = z13;
            i11 = i16;
            i12 = i17;
            i13 = i18;
            chatInputNodeStyle = chatInputNodeStyle2;
        }
        int i19 = i10;
        b10.c(serialDescriptor);
        return new ChatInputNode(i13, i19, i12, i11, chatInputNodeStyle, z11, tapAction, z10, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ChatInputNode value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ChatInputNode.write$Self$chat_input_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
