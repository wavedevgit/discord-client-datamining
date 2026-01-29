package com.discord.chat.reactevents;

import at.a2;
import at.h0;
import at.n2;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import xs.b0;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/reactevents/TapButtonActionComponent.$serializer", "Lat/h0;", "Lcom/discord/chat/reactevents/TapButtonActionComponent;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/reactevents/TapButtonActionComponent;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/reactevents/TapButtonActionComponent;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ir.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class TapButtonActionComponent$$serializer implements h0 {
    @NotNull
    public static final TapButtonActionComponent$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        TapButtonActionComponent$$serializer tapButtonActionComponent$$serializer = new TapButtonActionComponent$$serializer();
        INSTANCE = tapButtonActionComponent$$serializer;
        a2 a2Var = new a2("com.discord.chat.reactevents.TapButtonActionComponent", tapButtonActionComponent$$serializer, 2);
        a2Var.o("messageId", false);
        a2Var.o("componentId", false);
        descriptor = a2Var;
    }

    private TapButtonActionComponent$$serializer() {
    }

    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        return new KSerializer[]{MessageId$$serializer.INSTANCE, n2.f6848a};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final TapButtonActionComponent deserialize(@NotNull Decoder decoder) {
        String str;
        int i10;
        String str2;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            MessageId messageId = (MessageId) b10.y(serialDescriptor, 0, MessageId$$serializer.INSTANCE, null);
            String m1093unboximpl = messageId != null ? messageId.m1093unboximpl() : null;
            str = b10.m(serialDescriptor, 1);
            i10 = 3;
            str2 = m1093unboximpl;
        } else {
            boolean z10 = true;
            int i11 = 0;
            str = null;
            String str3 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    MessageId messageId2 = (MessageId) b10.y(serialDescriptor, 0, MessageId$$serializer.INSTANCE, str3 != null ? MessageId.m1084boximpl(str3) : null);
                    str3 = messageId2 != null ? messageId2.m1093unboximpl() : null;
                    i11 |= 1;
                } else if (o10 != 1) {
                    throw new b0(o10);
                } else {
                    str = b10.m(serialDescriptor, 1);
                    i11 |= 2;
                }
            }
            i10 = i11;
            str2 = str3;
        }
        String str4 = str;
        b10.c(serialDescriptor);
        return new TapButtonActionComponent(i10, str2, str4, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull TapButtonActionComponent value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        TapButtonActionComponent.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
