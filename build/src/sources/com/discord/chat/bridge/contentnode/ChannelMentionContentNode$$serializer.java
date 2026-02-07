package com.discord.chat.bridge.contentnode;

import ft.b0;
import java.util.List;
import jt.a2;
import jt.h0;
import jt.n2;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/contentnode/ChannelMentionContentNode.$serializer", "Ljt/h0;", "Lcom/discord/chat/bridge/contentnode/ChannelMentionContentNode;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/contentnode/ChannelMentionContentNode;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/contentnode/ChannelMentionContentNode;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@qr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ChannelMentionContentNode$$serializer implements h0 {
    @NotNull
    public static final ChannelMentionContentNode$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ChannelMentionContentNode$$serializer channelMentionContentNode$$serializer = new ChannelMentionContentNode$$serializer();
        INSTANCE = channelMentionContentNode$$serializer;
        a2 a2Var = new a2("channelMention", channelMentionContentNode$$serializer, 6);
        a2Var.o("channelId", false);
        a2Var.o("guildId", true);
        a2Var.o("messageId", true);
        a2Var.o("originalLink", true);
        a2Var.o("inContent", true);
        a2Var.o("content", false);
        descriptor = a2Var;
    }

    private ChannelMentionContentNode$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] access$get$childSerializers$cp = ChannelMentionContentNode.access$get$childSerializers$cp();
        n2 n2Var = n2.f31089a;
        return new KSerializer[]{n2Var, gt.a.u(n2Var), gt.a.u(n2Var), gt.a.u(n2Var), gt.a.u((KSerializer) access$get$childSerializers$cp[4].getValue()), gt.a.u((KSerializer) access$get$childSerializers$cp[5].getValue())};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ChannelMentionContentNode deserialize(@NotNull Decoder decoder) {
        int i10;
        String str;
        String str2;
        String str3;
        String str4;
        List list;
        List list2;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        Lazy[] access$get$childSerializers$cp = ChannelMentionContentNode.access$get$childSerializers$cp();
        String str5 = null;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            n2 n2Var = n2.f31089a;
            list2 = (List) b10.n(serialDescriptor, 5, (DeserializationStrategy) access$get$childSerializers$cp[5].getValue(), null);
            str = m10;
            str4 = (String) b10.n(serialDescriptor, 3, n2Var, null);
            str3 = (String) b10.n(serialDescriptor, 2, n2Var, null);
            i10 = 63;
            list = (List) b10.n(serialDescriptor, 4, (DeserializationStrategy) access$get$childSerializers$cp[4].getValue(), null);
            str2 = (String) b10.n(serialDescriptor, 1, n2Var, null);
        } else {
            boolean z10 = true;
            int i11 = 0;
            String str6 = null;
            String str7 = null;
            String str8 = null;
            List list3 = null;
            List list4 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        continue;
                    case 0:
                        str5 = b10.m(serialDescriptor, 0);
                        i11 |= 1;
                        continue;
                    case 1:
                        str6 = (String) b10.n(serialDescriptor, 1, n2.f31089a, str6);
                        i11 |= 2;
                        break;
                    case 2:
                        str7 = (String) b10.n(serialDescriptor, 2, n2.f31089a, str7);
                        i11 |= 4;
                        break;
                    case 3:
                        str8 = (String) b10.n(serialDescriptor, 3, n2.f31089a, str8);
                        i11 |= 8;
                        break;
                    case 4:
                        list3 = (List) b10.n(serialDescriptor, 4, (DeserializationStrategy) access$get$childSerializers$cp[4].getValue(), list3);
                        i11 |= 16;
                        break;
                    case 5:
                        list4 = (List) b10.n(serialDescriptor, 5, (DeserializationStrategy) access$get$childSerializers$cp[5].getValue(), list4);
                        i11 |= 32;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i11;
            str = str5;
            str2 = str6;
            str3 = str7;
            str4 = str8;
            list = list3;
            list2 = list4;
        }
        b10.c(serialDescriptor);
        return new ChannelMentionContentNode(i10, str, str2, str3, str4, list, list2, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ChannelMentionContentNode value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ChannelMentionContentNode.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
