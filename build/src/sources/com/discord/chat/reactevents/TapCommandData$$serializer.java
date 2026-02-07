package com.discord.chat.reactevents;

import ft.b0;
import jt.a2;
import jt.h0;
import jt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/reactevents/TapCommandData.$serializer", "Ljt/h0;", "Lcom/discord/chat/reactevents/TapCommandData;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/reactevents/TapCommandData;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/reactevents/TapCommandData;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@qr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class TapCommandData$$serializer implements h0 {
    @NotNull
    public static final TapCommandData$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        TapCommandData$$serializer tapCommandData$$serializer = new TapCommandData$$serializer();
        INSTANCE = tapCommandData$$serializer;
        a2 a2Var = new a2("com.discord.chat.reactevents.TapCommandData", tapCommandData$$serializer, 4);
        a2Var.o("channelId", false);
        a2Var.o("commandId", false);
        a2Var.o("commandName", false);
        a2Var.o("commandKey", false);
        descriptor = a2Var;
    }

    private TapCommandData$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f31089a;
        return new KSerializer[]{n2Var, n2Var, n2Var, n2Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final TapCommandData deserialize(@NotNull Decoder decoder) {
        String str;
        String str2;
        String str3;
        String str4;
        int i10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            str = b10.m(serialDescriptor, 0);
            String m10 = b10.m(serialDescriptor, 1);
            String m11 = b10.m(serialDescriptor, 2);
            str2 = b10.m(serialDescriptor, 3);
            str3 = m11;
            str4 = m10;
            i10 = 15;
        } else {
            str = null;
            String str5 = null;
            String str6 = null;
            String str7 = null;
            boolean z10 = true;
            int i11 = 0;
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
                    str6 = b10.m(serialDescriptor, 2);
                    i11 |= 4;
                } else if (o10 != 3) {
                    throw new b0(o10);
                } else {
                    str5 = b10.m(serialDescriptor, 3);
                    i11 |= 8;
                }
            }
            str2 = str5;
            str3 = str6;
            str4 = str7;
            i10 = i11;
        }
        String str8 = str;
        b10.c(serialDescriptor);
        return new TapCommandData(i10, str8, str4, str3, str2, null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull TapCommandData value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        TapCommandData.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
