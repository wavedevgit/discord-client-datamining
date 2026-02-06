package com.discord.notifications.api;

import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import ft.b0;
import java.util.List;
import jt.a2;
import jt.h0;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.JsonObject;
import kt.y;
import org.jetbrains.annotations.NotNull;
import qr.c;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/notifications/api/KvMessageEntry.$serializer", "Ljt/h0;", "Lcom/discord/notifications/api/KvMessageEntry;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/notifications/api/KvMessageEntry;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/notifications/api/KvMessageEntry;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class KvMessageEntry$$serializer implements h0 {
    @NotNull
    public static final KvMessageEntry$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        KvMessageEntry$$serializer kvMessageEntry$$serializer = new KvMessageEntry$$serializer();
        INSTANCE = kvMessageEntry$$serializer;
        a2 a2Var = new a2("com.discord.notifications.api.KvMessageEntry", kvMessageEntry$$serializer, 5);
        a2Var.o("members", true);
        a2Var.o("users", true);
        a2Var.o("message", false);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("channelId", false);
        descriptor = a2Var;
    }

    private KvMessageEntry$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = KvMessageEntry.$childSerializers;
        return new KSerializer[]{lazyArr[0].getValue(), lazyArr[1].getValue(), y.f35529a, MessageId$$serializer.INSTANCE, ChannelId$$serializer.INSTANCE};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final KvMessageEntry deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        List list;
        List list2;
        String str;
        ChannelId channelId;
        JsonObject jsonObject;
        int i10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = KvMessageEntry.$childSerializers;
        int i11 = 0;
        if (b10.p()) {
            List list3 = (List) b10.y(serialDescriptor, 0, (DeserializationStrategy) lazyArr[0].getValue(), null);
            List list4 = (List) b10.y(serialDescriptor, 1, (DeserializationStrategy) lazyArr[1].getValue(), null);
            JsonObject jsonObject2 = (JsonObject) b10.y(serialDescriptor, 2, y.f35529a, null);
            MessageId messageId = (MessageId) b10.y(serialDescriptor, 3, MessageId$$serializer.INSTANCE, null);
            list = list4;
            list2 = list3;
            str = messageId != null ? messageId.m1092unboximpl() : null;
            channelId = (ChannelId) b10.y(serialDescriptor, 4, ChannelId$$serializer.INSTANCE, null);
            jsonObject = jsonObject2;
            i10 = 31;
        } else {
            int i12 = 1;
            int i13 = 0;
            List list5 = null;
            List list6 = null;
            String str2 = null;
            ChannelId channelId2 = null;
            JsonObject jsonObject3 = null;
            while (i12 != 0) {
                int o10 = b10.o(serialDescriptor);
                int i14 = i11;
                if (o10 == -1) {
                    i11 = i14;
                    i12 = i11;
                } else if (o10 != 0) {
                    if (o10 == 1) {
                        list5 = (List) b10.y(serialDescriptor, 1, (DeserializationStrategy) lazyArr[1].getValue(), list5);
                        i13 |= 2;
                    } else if (o10 == 2) {
                        jsonObject3 = (JsonObject) b10.y(serialDescriptor, 2, y.f35529a, jsonObject3);
                        i13 |= 4;
                    } else if (o10 == 3) {
                        MessageId messageId2 = (MessageId) b10.y(serialDescriptor, 3, MessageId$$serializer.INSTANCE, str2 != null ? MessageId.m1083boximpl(str2) : null);
                        str2 = messageId2 != null ? messageId2.m1092unboximpl() : null;
                        i13 |= 8;
                    } else if (o10 != 4) {
                        throw new b0(o10);
                    } else {
                        channelId2 = (ChannelId) b10.y(serialDescriptor, 4, ChannelId$$serializer.INSTANCE, channelId2);
                        i13 |= 16;
                    }
                    i11 = i14;
                } else {
                    list6 = (List) b10.y(serialDescriptor, i14, (DeserializationStrategy) lazyArr[i14].getValue(), list6);
                    i13 |= 1;
                    i11 = i14;
                }
            }
            list = list5;
            list2 = list6;
            str = str2;
            channelId = channelId2;
            jsonObject = jsonObject3;
            i10 = i13;
        }
        b10.c(serialDescriptor);
        return new KvMessageEntry(i10, list2, list, jsonObject, str, channelId, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull KvMessageEntry value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        KvMessageEntry.write$Self$notification_api_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
