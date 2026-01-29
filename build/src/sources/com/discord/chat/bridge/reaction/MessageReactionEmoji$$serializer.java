package com.discord.chat.bridge.reaction;

import at.a2;
import at.h;
import at.h0;
import at.n2;
import com.facebook.react.devsupport.StackTraceHelper;
import ir.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.b0;
import ys.a;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/reaction/MessageReactionEmoji.$serializer", "Lat/h0;", "Lcom/discord/chat/bridge/reaction/MessageReactionEmoji;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/reaction/MessageReactionEmoji;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/reaction/MessageReactionEmoji;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class MessageReactionEmoji$$serializer implements h0 {
    @NotNull
    public static final MessageReactionEmoji$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        MessageReactionEmoji$$serializer messageReactionEmoji$$serializer = new MessageReactionEmoji$$serializer();
        INSTANCE = messageReactionEmoji$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.reaction.MessageReactionEmoji", messageReactionEmoji$$serializer, 5);
        a2Var.o(StackTraceHelper.NAME_KEY, true);
        a2Var.o("src", false);
        a2Var.o("displayName", false);
        a2Var.o(StackTraceHelper.ID_KEY, true);
        a2Var.o("animated", true);
        descriptor = a2Var;
    }

    private MessageReactionEmoji$$serializer() {
    }

    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f6848a;
        return new KSerializer[]{a.u(n2Var), n2Var, n2Var, a.u(n2Var), a.u(h.f6812a)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final MessageReactionEmoji deserialize(@NotNull Decoder decoder) {
        int i10;
        String str;
        String str2;
        String str3;
        String str4;
        Boolean bool;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        String str5 = null;
        if (b10.p()) {
            n2 n2Var = n2.f6848a;
            String m10 = b10.m(serialDescriptor, 1);
            String m11 = b10.m(serialDescriptor, 2);
            str4 = (String) b10.n(serialDescriptor, 3, n2Var, null);
            bool = (Boolean) b10.n(serialDescriptor, 4, h.f6812a, null);
            i10 = 31;
            str3 = m11;
            str2 = m10;
            str = (String) b10.n(serialDescriptor, 0, n2Var, null);
        } else {
            boolean z10 = true;
            int i11 = 0;
            String str6 = null;
            String str7 = null;
            String str8 = null;
            Boolean bool2 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    str5 = (String) b10.n(serialDescriptor, 0, n2.f6848a, str5);
                    i11 |= 1;
                } else if (o10 == 1) {
                    str6 = b10.m(serialDescriptor, 1);
                    i11 |= 2;
                } else if (o10 == 2) {
                    str7 = b10.m(serialDescriptor, 2);
                    i11 |= 4;
                } else if (o10 == 3) {
                    str8 = (String) b10.n(serialDescriptor, 3, n2.f6848a, str8);
                    i11 |= 8;
                } else if (o10 != 4) {
                    throw new b0(o10);
                } else {
                    bool2 = (Boolean) b10.n(serialDescriptor, 4, h.f6812a, bool2);
                    i11 |= 16;
                }
            }
            i10 = i11;
            str = str5;
            str2 = str6;
            str3 = str7;
            str4 = str8;
            bool = bool2;
        }
        b10.c(serialDescriptor);
        return new MessageReactionEmoji(i10, str, str2, str3, str4, bool, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull MessageReactionEmoji value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        MessageReactionEmoji.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
