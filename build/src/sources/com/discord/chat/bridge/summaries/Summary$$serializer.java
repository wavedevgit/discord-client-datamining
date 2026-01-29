package com.discord.chat.bridge.summaries;

import at.a2;
import at.h0;
import at.n2;
import at.p0;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ir.c;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import xs.b0;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/summaries/Summary.$serializer", "Lat/h0;", "Lcom/discord/chat/bridge/summaries/Summary;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/summaries/Summary;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/summaries/Summary;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class Summary$$serializer implements h0 {
    @NotNull
    public static final Summary$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        Summary$$serializer summary$$serializer = new Summary$$serializer();
        INSTANCE = summary$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.summaries.Summary", summary$$serializer, 8);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("topic", false);
        a2Var.o("summShort", false);
        a2Var.o("people", false);
        a2Var.o("startId", false);
        a2Var.o("endId", false);
        a2Var.o("count", false);
        a2Var.o("channelId", false);
        descriptor = a2Var;
    }

    private Summary$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = Summary.$childSerializers;
        n2 n2Var = n2.f6848a;
        MessageId$$serializer messageId$$serializer = MessageId$$serializer.INSTANCE;
        return new KSerializer[]{n2Var, n2Var, n2Var, lazyArr[3].getValue(), messageId$$serializer, messageId$$serializer, p0.f6864a, ChannelId$$serializer.INSTANCE};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final Summary deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        List list;
        int i10;
        String str;
        ChannelId channelId;
        int i11;
        String str2;
        String str3;
        String str4;
        String str5;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = Summary.$childSerializers;
        int i12 = 7;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            String m11 = b10.m(serialDescriptor, 1);
            String m12 = b10.m(serialDescriptor, 2);
            List list2 = (List) b10.y(serialDescriptor, 3, (DeserializationStrategy) lazyArr[3].getValue(), null);
            MessageId$$serializer messageId$$serializer = MessageId$$serializer.INSTANCE;
            MessageId messageId = (MessageId) b10.y(serialDescriptor, 4, messageId$$serializer, null);
            String m1093unboximpl = messageId != null ? messageId.m1093unboximpl() : null;
            MessageId messageId2 = (MessageId) b10.y(serialDescriptor, 5, messageId$$serializer, null);
            String m1093unboximpl2 = messageId2 != null ? messageId2.m1093unboximpl() : null;
            int i13 = b10.i(serialDescriptor, 6);
            list = list2;
            str = m10;
            channelId = (ChannelId) b10.y(serialDescriptor, 7, ChannelId$$serializer.INSTANCE, null);
            i11 = i13;
            str2 = m1093unboximpl2;
            str3 = m1093unboximpl;
            str4 = m12;
            i10 = 255;
            str5 = m11;
        } else {
            boolean z10 = true;
            int i14 = 0;
            List list3 = null;
            String str6 = null;
            ChannelId channelId2 = null;
            String str7 = null;
            String str8 = null;
            String str9 = null;
            String str10 = null;
            int i15 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i12 = 7;
                    case 0:
                        str6 = b10.m(serialDescriptor, 0);
                        i15 |= 1;
                        i12 = 7;
                    case 1:
                        str10 = b10.m(serialDescriptor, 1);
                        i15 |= 2;
                        i12 = 7;
                    case 2:
                        str9 = b10.m(serialDescriptor, 2);
                        i15 |= 4;
                        i12 = 7;
                    case 3:
                        list3 = (List) b10.y(serialDescriptor, 3, (DeserializationStrategy) lazyArr[3].getValue(), list3);
                        i15 |= 8;
                        i12 = 7;
                    case 4:
                        MessageId messageId3 = (MessageId) b10.y(serialDescriptor, 4, MessageId$$serializer.INSTANCE, str8 != null ? MessageId.m1084boximpl(str8) : null);
                        str8 = messageId3 != null ? messageId3.m1093unboximpl() : null;
                        i15 |= 16;
                        i12 = 7;
                    case 5:
                        MessageId messageId4 = (MessageId) b10.y(serialDescriptor, 5, MessageId$$serializer.INSTANCE, str7 != null ? MessageId.m1084boximpl(str7) : null);
                        str7 = messageId4 != null ? messageId4.m1093unboximpl() : null;
                        i15 |= 32;
                        i12 = 7;
                    case 6:
                        i14 = b10.i(serialDescriptor, 6);
                        i15 |= 64;
                    case 7:
                        channelId2 = (ChannelId) b10.y(serialDescriptor, i12, ChannelId$$serializer.INSTANCE, channelId2);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    default:
                        throw new b0(o10);
                }
            }
            list = list3;
            i10 = i15;
            str = str6;
            channelId = channelId2;
            i11 = i14;
            str2 = str7;
            str3 = str8;
            str4 = str9;
            str5 = str10;
        }
        b10.c(serialDescriptor);
        return new Summary(i10, str, str5, str4, list, str3, str2, i11, channelId, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull Summary value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        Summary.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
