package com.discord.chat.bridge.contentnode;

import bt.a2;
import bt.h0;
import bt.n2;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/contentnode/SoundmojiContentNode.$serializer", "Lbt/h0;", "Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class SoundmojiContentNode$$serializer implements h0 {
    @NotNull
    public static final SoundmojiContentNode$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        SoundmojiContentNode$$serializer soundmojiContentNode$$serializer = new SoundmojiContentNode$$serializer();
        INSTANCE = soundmojiContentNode$$serializer;
        a2 a2Var = new a2("soundboard", soundmojiContentNode$$serializer, 8);
        a2Var.o("soundId", false);
        a2Var.o("channelId", false);
        a2Var.o("messageId", false);
        a2Var.o("content", true);
        a2Var.o("guildId", true);
        a2Var.o("jumboable", true);
        a2Var.o("emojiId", true);
        a2Var.o("emojiName", true);
        descriptor = a2Var;
    }

    private SoundmojiContentNode$$serializer() {
    }

    @Override // bt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f7662a;
        return new KSerializer[]{n2Var, ChannelId$$serializer.INSTANCE, MessageId$$serializer.INSTANCE, zs.a.u(n2Var), zs.a.u(n2Var), bt.h.f7626a, zs.a.u(n2Var), zs.a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SoundmojiContentNode deserialize(@NotNull Decoder decoder) {
        String str;
        int i10;
        ChannelId channelId;
        String str2;
        String str3;
        String str4;
        boolean z10;
        String str5;
        String str6;
        char c10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i11 = 7;
        int i12 = 6;
        String str7 = null;
        if (b10.p()) {
            str = b10.m(serialDescriptor, 0);
            ChannelId channelId2 = (ChannelId) b10.y(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, null);
            MessageId messageId = (MessageId) b10.y(serialDescriptor, 2, MessageId$$serializer.INSTANCE, null);
            String m1095unboximpl = messageId != null ? messageId.m1095unboximpl() : null;
            n2 n2Var = n2.f7662a;
            boolean C = b10.C(serialDescriptor, 5);
            str3 = (String) b10.n(serialDescriptor, 7, n2Var, null);
            str4 = (String) b10.n(serialDescriptor, 6, n2Var, null);
            z10 = C;
            str5 = (String) b10.n(serialDescriptor, 3, n2Var, null);
            str2 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            str6 = m1095unboximpl;
            channelId = channelId2;
            i10 = 255;
        } else {
            boolean z11 = true;
            int i13 = 0;
            boolean z12 = false;
            str = null;
            ChannelId channelId3 = null;
            String str8 = null;
            String str9 = null;
            String str10 = null;
            String str11 = null;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        c10 = 2;
                        z11 = false;
                        i11 = 7;
                        i12 = 6;
                    case 0:
                        c10 = 2;
                        str = b10.m(serialDescriptor, 0);
                        i13 |= 1;
                        i11 = 7;
                        i12 = 6;
                    case 1:
                        c10 = 2;
                        channelId3 = (ChannelId) b10.y(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, channelId3);
                        i13 |= 2;
                        i11 = 7;
                        i12 = 6;
                    case 2:
                        c10 = 2;
                        MessageId messageId2 = (MessageId) b10.y(serialDescriptor, 2, MessageId$$serializer.INSTANCE, str11 != null ? MessageId.m1086boximpl(str11) : null);
                        str11 = messageId2 != null ? messageId2.m1095unboximpl() : null;
                        i13 |= 4;
                        i11 = 7;
                        i12 = 6;
                    case 3:
                        str10 = (String) b10.n(serialDescriptor, 3, n2.f7662a, str10);
                        i13 |= 8;
                    case 4:
                        str7 = (String) b10.n(serialDescriptor, 4, n2.f7662a, str7);
                        i13 |= 16;
                    case 5:
                        z12 = b10.C(serialDescriptor, 5);
                        i13 |= 32;
                    case 6:
                        str9 = (String) b10.n(serialDescriptor, i12, n2.f7662a, str9);
                        i13 |= 64;
                    case 7:
                        str8 = (String) b10.n(serialDescriptor, i11, n2.f7662a, str8);
                        i13 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i13;
            channelId = channelId3;
            str2 = str7;
            str3 = str8;
            str4 = str9;
            z10 = z12;
            str5 = str10;
            str6 = str11;
        }
        String str12 = str;
        b10.c(serialDescriptor);
        return new SoundmojiContentNode(i10, str12, channelId, str6, str5, str2, z10, str4, str3, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ys.o
    public final void serialize(@NotNull Encoder encoder, @NotNull SoundmojiContentNode value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        SoundmojiContentNode.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // bt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
