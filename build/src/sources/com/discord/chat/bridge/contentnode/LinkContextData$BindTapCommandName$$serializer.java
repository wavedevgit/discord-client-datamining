package com.discord.chat.bridge.contentnode;

import com.discord.chat.bridge.MessageType;
import com.discord.chat.bridge.contentnode.LinkContextData;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import dt.b0;
import gt.a2;
import gt.h0;
import gt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
@or.c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/contentnode/LinkContextData.BindTapCommandName.$serializer", "Lgt/h0;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapCommandName;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapCommandName;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapCommandName;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class LinkContextData$BindTapCommandName$$serializer implements h0 {
    @NotNull
    public static final LinkContextData$BindTapCommandName$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        LinkContextData$BindTapCommandName$$serializer linkContextData$BindTapCommandName$$serializer = new LinkContextData$BindTapCommandName$$serializer();
        INSTANCE = linkContextData$BindTapCommandName$$serializer;
        a2 a2Var = new a2("bindTapCommandName", linkContextData$BindTapCommandName$$serializer, 7);
        a2Var.o("action", false);
        a2Var.o("medium", true);
        a2Var.o("userId", false);
        a2Var.o("messageId", false);
        a2Var.o("applicationUserId", false);
        a2Var.o("messageType", false);
        a2Var.o("messageChannelId", false);
        a2Var.w(new LinkContextData$LinkContext$Companion$annotationImpl$kotlinx_serialization_json_JsonClassDiscriminator$0("action"));
        descriptor = a2Var;
    }

    private LinkContextData$BindTapCommandName$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        KSerializer u10 = et.a.u(gt.h.f25266a);
        UserId$$serializer userId$$serializer = UserId$$serializer.INSTANCE;
        return new KSerializer[]{n2.f25302a, u10, userId$$serializer, MessageId$$serializer.INSTANCE, userId$$serializer, MessageType.Serializer.INSTANCE, ChannelId$$serializer.INSTANCE};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final LinkContextData.BindTapCommandName deserialize(@NotNull Decoder decoder) {
        String str;
        Boolean bool;
        ChannelId channelId;
        MessageType messageType;
        String str2;
        UserId userId;
        UserId userId2;
        int i10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        Boolean bool2 = null;
        if (b10.p()) {
            str = b10.m(serialDescriptor, 0);
            Boolean bool3 = (Boolean) b10.n(serialDescriptor, 1, gt.h.f25266a, null);
            UserId$$serializer userId$$serializer = UserId$$serializer.INSTANCE;
            UserId userId3 = (UserId) b10.y(serialDescriptor, 2, userId$$serializer, null);
            MessageId messageId = (MessageId) b10.y(serialDescriptor, 3, MessageId$$serializer.INSTANCE, null);
            String m1094unboximpl = messageId != null ? messageId.m1094unboximpl() : null;
            channelId = (ChannelId) b10.y(serialDescriptor, 6, ChannelId$$serializer.INSTANCE, null);
            messageType = (MessageType) b10.y(serialDescriptor, 5, MessageType.Serializer.INSTANCE, null);
            str2 = m1094unboximpl;
            userId = (UserId) b10.y(serialDescriptor, 4, userId$$serializer, null);
            userId2 = userId3;
            bool = bool3;
            i10 = 127;
        } else {
            boolean z10 = true;
            int i11 = 0;
            str = null;
            ChannelId channelId2 = null;
            MessageType messageType2 = null;
            String str3 = null;
            UserId userId4 = null;
            UserId userId5 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        continue;
                    case 0:
                        str = b10.m(serialDescriptor, 0);
                        i11 |= 1;
                        continue;
                    case 1:
                        bool2 = (Boolean) b10.n(serialDescriptor, 1, gt.h.f25266a, bool2);
                        i11 |= 2;
                        break;
                    case 2:
                        userId5 = (UserId) b10.y(serialDescriptor, 2, UserId$$serializer.INSTANCE, userId5);
                        i11 |= 4;
                        break;
                    case 3:
                        MessageId messageId2 = (MessageId) b10.y(serialDescriptor, 3, MessageId$$serializer.INSTANCE, str3 != null ? MessageId.m1085boximpl(str3) : null);
                        str3 = messageId2 != null ? messageId2.m1094unboximpl() : null;
                        i11 |= 8;
                        break;
                    case 4:
                        userId4 = (UserId) b10.y(serialDescriptor, 4, UserId$$serializer.INSTANCE, userId4);
                        i11 |= 16;
                        break;
                    case 5:
                        messageType2 = (MessageType) b10.y(serialDescriptor, 5, MessageType.Serializer.INSTANCE, messageType2);
                        i11 |= 32;
                        break;
                    case 6:
                        channelId2 = (ChannelId) b10.y(serialDescriptor, 6, ChannelId$$serializer.INSTANCE, channelId2);
                        i11 |= 64;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            bool = bool2;
            channelId = channelId2;
            messageType = messageType2;
            str2 = str3;
            userId = userId4;
            userId2 = userId5;
            i10 = i11;
        }
        String str4 = str;
        b10.c(serialDescriptor);
        return new LinkContextData.BindTapCommandName(i10, str4, bool, userId2, str2, userId, messageType, channelId, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull LinkContextData.BindTapCommandName value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        LinkContextData.BindTapCommandName.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
