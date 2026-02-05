package com.discord.chat.reactevents;

import dt.b0;
import gt.a2;
import gt.h0;
import gt.p0;
import gt.x;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
@or.c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/reactevents/FirstLayoutData.$serializer", "Lgt/h0;", "Lcom/discord/chat/reactevents/FirstLayoutData;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/reactevents/FirstLayoutData;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/reactevents/FirstLayoutData;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class FirstLayoutData$$serializer implements h0 {
    @NotNull
    public static final FirstLayoutData$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        FirstLayoutData$$serializer firstLayoutData$$serializer = new FirstLayoutData$$serializer();
        INSTANCE = firstLayoutData$$serializer;
        a2 a2Var = new a2("com.discord.chat.reactevents.FirstLayoutData", firstLayoutData$$serializer, 4);
        a2Var.o("firstVisibleMessageIndex", false);
        a2Var.o("firstVisibleMessagePercentVisible", false);
        a2Var.o("lastVisibleMessageIndex", false);
        a2Var.o("lastVisibleMessagePercentVisible", false);
        descriptor = a2Var;
    }

    private FirstLayoutData$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        x xVar = x.f25356a;
        KSerializer u10 = et.a.u(xVar);
        KSerializer u11 = et.a.u(xVar);
        p0 p0Var = p0.f25318a;
        return new KSerializer[]{p0Var, u10, p0Var, u11};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final FirstLayoutData deserialize(@NotNull Decoder decoder) {
        int i10;
        int i11;
        int i12;
        Double d10;
        Double d11;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            x xVar = x.f25356a;
            int i13 = b10.i(serialDescriptor, 2);
            d11 = (Double) b10.n(serialDescriptor, 3, xVar, null);
            i11 = i13;
            d10 = (Double) b10.n(serialDescriptor, 1, xVar, null);
            i12 = 15;
        } else {
            boolean z10 = true;
            i10 = 0;
            int i14 = 0;
            Double d12 = null;
            Double d13 = null;
            int i15 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    i10 = b10.i(serialDescriptor, 0);
                    i14 |= 1;
                } else if (o10 == 1) {
                    d12 = (Double) b10.n(serialDescriptor, 1, x.f25356a, d12);
                    i14 |= 2;
                } else if (o10 == 2) {
                    i15 = b10.i(serialDescriptor, 2);
                    i14 |= 4;
                } else if (o10 != 3) {
                    throw new b0(o10);
                } else {
                    d13 = (Double) b10.n(serialDescriptor, 3, x.f25356a, d13);
                    i14 |= 8;
                }
            }
            i11 = i15;
            i12 = i14;
            d10 = d12;
            d11 = d13;
        }
        int i16 = i10;
        b10.c(serialDescriptor);
        return new FirstLayoutData(i12, i16, d10, i11, d11, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull FirstLayoutData value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        FirstLayoutData.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
