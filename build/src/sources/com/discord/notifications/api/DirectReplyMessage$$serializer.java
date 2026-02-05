package com.discord.notifications.api;

import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dt.b0;
import et.a;
import gt.a2;
import gt.h0;
import gt.n2;
import gt.p0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import or.c;
import org.jetbrains.annotations.NotNull;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/notifications/api/DirectReplyMessage.$serializer", "Lgt/h0;", "Lcom/discord/notifications/api/DirectReplyMessage;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/notifications/api/DirectReplyMessage;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/notifications/api/DirectReplyMessage;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class DirectReplyMessage$$serializer implements h0 {
    @NotNull
    public static final DirectReplyMessage$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        DirectReplyMessage$$serializer directReplyMessage$$serializer = new DirectReplyMessage$$serializer();
        INSTANCE = directReplyMessage$$serializer;
        a2 a2Var = new a2("com.discord.notifications.api.DirectReplyMessage", directReplyMessage$$serializer, 8);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("channel_id", false);
        a2Var.o("author", false);
        a2Var.o("content", true);
        a2Var.o("type", true);
        a2Var.o("channelType", true);
        a2Var.o(NotificationRenderer.CHANNEL_NAME, true);
        a2Var.o("guildName", true);
        descriptor = a2Var;
    }

    private DirectReplyMessage$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f25302a;
        KSerializer u10 = a.u(n2Var);
        p0 p0Var = p0.f25318a;
        return new KSerializer[]{MessageId$$serializer.INSTANCE, ChannelId$$serializer.INSTANCE, DirectReplyUser$$serializer.INSTANCE, u10, a.u(p0Var), a.u(p0Var), a.u(n2Var), a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final DirectReplyMessage deserialize(@NotNull Decoder decoder) {
        String str;
        ChannelId channelId;
        int i10;
        DirectReplyUser directReplyUser;
        Integer num;
        String str2;
        String str3;
        Integer num2;
        String str4;
        ChannelId channelId2;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i11 = 7;
        int i12 = 6;
        Integer num3 = null;
        if (b10.p()) {
            MessageId messageId = (MessageId) b10.y(serialDescriptor, 0, MessageId$$serializer.INSTANCE, null);
            str = messageId != null ? messageId.m1094unboximpl() : null;
            n2 n2Var = n2.f25302a;
            p0 p0Var = p0.f25318a;
            str2 = (String) b10.n(serialDescriptor, 7, n2Var, null);
            str3 = (String) b10.n(serialDescriptor, 6, n2Var, null);
            num2 = (Integer) b10.n(serialDescriptor, 5, p0Var, null);
            str4 = (String) b10.n(serialDescriptor, 3, n2Var, null);
            num = (Integer) b10.n(serialDescriptor, 4, p0Var, null);
            directReplyUser = (DirectReplyUser) b10.y(serialDescriptor, 2, DirectReplyUser$$serializer.INSTANCE, null);
            channelId = (ChannelId) b10.y(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, null);
            i10 = 255;
        } else {
            boolean z10 = true;
            int i13 = 0;
            str = null;
            DirectReplyUser directReplyUser2 = null;
            String str5 = null;
            String str6 = null;
            Integer num4 = null;
            String str7 = null;
            ChannelId channelId3 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i11 = 7;
                        i12 = 6;
                        break;
                    case 0:
                        channelId2 = channelId3;
                        MessageId messageId2 = (MessageId) b10.y(serialDescriptor, 0, MessageId$$serializer.INSTANCE, str != null ? MessageId.m1085boximpl(str) : null);
                        str = messageId2 != null ? messageId2.m1094unboximpl() : null;
                        i13 |= 1;
                        channelId3 = channelId2;
                        i11 = 7;
                        i12 = 6;
                        break;
                    case 1:
                        channelId2 = (ChannelId) b10.y(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, channelId3);
                        i13 |= 2;
                        channelId3 = channelId2;
                        i11 = 7;
                        i12 = 6;
                        break;
                    case 2:
                        directReplyUser2 = (DirectReplyUser) b10.y(serialDescriptor, 2, DirectReplyUser$$serializer.INSTANCE, directReplyUser2);
                        i13 |= 4;
                        i11 = 7;
                        continue;
                    case 3:
                        str7 = (String) b10.n(serialDescriptor, 3, n2.f25302a, str7);
                        i13 |= 8;
                        break;
                    case 4:
                        num3 = (Integer) b10.n(serialDescriptor, 4, p0.f25318a, num3);
                        i13 |= 16;
                        break;
                    case 5:
                        num4 = (Integer) b10.n(serialDescriptor, 5, p0.f25318a, num4);
                        i13 |= 32;
                        break;
                    case 6:
                        str6 = (String) b10.n(serialDescriptor, i12, n2.f25302a, str6);
                        i13 |= 64;
                        break;
                    case 7:
                        str5 = (String) b10.n(serialDescriptor, i11, n2.f25302a, str5);
                        i13 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            channelId = channelId3;
            i10 = i13;
            directReplyUser = directReplyUser2;
            num = num3;
            str2 = str5;
            str3 = str6;
            num2 = num4;
            str4 = str7;
        }
        String str8 = str;
        b10.c(serialDescriptor);
        return new DirectReplyMessage(i10, str8, channelId, directReplyUser, str4, num, num2, str3, str2, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull DirectReplyMessage value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        DirectReplyMessage.write$Self$notification_api_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
