package com.discord.chat.reactevents;

import at.b0;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import dt.a2;
import dt.h0;
import dt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/reactevents/TapSoundmojiData.$serializer", "Ldt/h0;", "Lcom/discord/chat/reactevents/TapSoundmojiData;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/reactevents/TapSoundmojiData;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/reactevents/TapSoundmojiData;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class TapSoundmojiData$$serializer implements h0 {
    @NotNull
    public static final TapSoundmojiData$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        TapSoundmojiData$$serializer tapSoundmojiData$$serializer = new TapSoundmojiData$$serializer();
        INSTANCE = tapSoundmojiData$$serializer;
        a2 a2Var = new a2("com.discord.chat.reactevents.TapSoundmojiData", tapSoundmojiData$$serializer, 4);
        a2Var.o("soundId", false);
        a2Var.o("channelId", false);
        a2Var.o("guildId", true);
        a2Var.o("messageId", true);
        descriptor = a2Var;
    }

    private TapSoundmojiData$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f20978a;
        return new KSerializer[]{n2Var, n2Var, bt.a.u(n2Var), bt.a.u(MessageId$$serializer.INSTANCE)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final TapSoundmojiData deserialize(@NotNull Decoder decoder) {
        String str;
        int i10;
        String str2;
        String str3;
        String str4;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            str = b10.m(serialDescriptor, 0);
            String m10 = b10.m(serialDescriptor, 1);
            String str5 = (String) b10.n(serialDescriptor, 2, n2.f20978a, null);
            MessageId messageId = (MessageId) b10.n(serialDescriptor, 3, MessageId$$serializer.INSTANCE, null);
            i10 = 15;
            str2 = str5;
            str3 = m10;
            str4 = messageId != null ? messageId.m1094unboximpl() : null;
        } else {
            boolean z10 = true;
            int i11 = 0;
            str = null;
            String str6 = null;
            String str7 = null;
            String str8 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    str = b10.m(serialDescriptor, 0);
                    i11 |= 1;
                } else if (o10 == 1) {
                    str7 = b10.m(serialDescriptor, 1);
                    i11 |= 2;
                } else if (o10 == 2) {
                    str6 = (String) b10.n(serialDescriptor, 2, n2.f20978a, str6);
                    i11 |= 4;
                } else if (o10 != 3) {
                    throw new b0(o10);
                } else {
                    MessageId messageId2 = (MessageId) b10.n(serialDescriptor, 3, MessageId$$serializer.INSTANCE, str8 != null ? MessageId.m1085boximpl(str8) : null);
                    str8 = messageId2 != null ? messageId2.m1094unboximpl() : null;
                    i11 |= 8;
                }
            }
            i10 = i11;
            str2 = str6;
            str3 = str7;
            str4 = str8;
        }
        String str9 = str;
        b10.c(serialDescriptor);
        return new TapSoundmojiData(i10, str9, str3, str2, str4, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull TapSoundmojiData value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        TapSoundmojiData.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
