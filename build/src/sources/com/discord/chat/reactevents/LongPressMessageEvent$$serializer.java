package com.discord.chat.reactevents;

import dt.b0;
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
import org.jetbrains.annotations.NotNull;
@or.c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/reactevents/LongPressMessageEvent.$serializer", "Lgt/h0;", "Lcom/discord/chat/reactevents/LongPressMessageEvent;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/reactevents/LongPressMessageEvent;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/reactevents/LongPressMessageEvent;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class LongPressMessageEvent$$serializer implements h0 {
    @NotNull
    public static final LongPressMessageEvent$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        LongPressMessageEvent$$serializer longPressMessageEvent$$serializer = new LongPressMessageEvent$$serializer();
        INSTANCE = longPressMessageEvent$$serializer;
        a2 a2Var = new a2("com.discord.chat.reactevents.LongPressMessageEvent", longPressMessageEvent$$serializer, 6);
        a2Var.o("messageId", false);
        a2Var.o("channelId", false);
        a2Var.o("mediaIndex", false);
        a2Var.o("mediaType", false);
        a2Var.o("componentId", false);
        a2Var.o("componentMediaIndex", false);
        descriptor = a2Var;
    }

    private LongPressMessageEvent$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f25302a;
        p0 p0Var = p0.f25318a;
        return new KSerializer[]{n2Var, n2Var, p0Var, n2Var, et.a.u(n2Var), et.a.u(p0Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final LongPressMessageEvent deserialize(@NotNull Decoder decoder) {
        int i10;
        int i11;
        String str;
        String str2;
        String str3;
        String str4;
        Integer num;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            String m11 = b10.m(serialDescriptor, 1);
            int i12 = b10.i(serialDescriptor, 2);
            String m12 = b10.m(serialDescriptor, 3);
            str = m10;
            num = (Integer) b10.n(serialDescriptor, 5, p0.f25318a, null);
            str3 = m12;
            str4 = (String) b10.n(serialDescriptor, 4, n2.f25302a, null);
            i10 = i12;
            str2 = m11;
            i11 = 63;
        } else {
            boolean z10 = true;
            int i13 = 0;
            String str5 = null;
            String str6 = null;
            String str7 = null;
            String str8 = null;
            Integer num2 = null;
            int i14 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        continue;
                    case 0:
                        str5 = b10.m(serialDescriptor, 0);
                        i14 |= 1;
                        continue;
                    case 1:
                        str6 = b10.m(serialDescriptor, 1);
                        i14 |= 2;
                        break;
                    case 2:
                        i13 = b10.i(serialDescriptor, 2);
                        i14 |= 4;
                        break;
                    case 3:
                        str7 = b10.m(serialDescriptor, 3);
                        i14 |= 8;
                        break;
                    case 4:
                        str8 = (String) b10.n(serialDescriptor, 4, n2.f25302a, str8);
                        i14 |= 16;
                        break;
                    case 5:
                        num2 = (Integer) b10.n(serialDescriptor, 5, p0.f25318a, num2);
                        i14 |= 32;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i13;
            i11 = i14;
            str = str5;
            str2 = str6;
            str3 = str7;
            str4 = str8;
            num = num2;
        }
        b10.c(serialDescriptor);
        return new LongPressMessageEvent(i11, str, str2, i10, str3, str4, num, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull LongPressMessageEvent value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        LongPressMessageEvent.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
