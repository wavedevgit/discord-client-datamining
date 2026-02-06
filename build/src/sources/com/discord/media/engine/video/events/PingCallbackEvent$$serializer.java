package com.discord.media.engine.video.events;

import ft.b0;
import jt.a2;
import jt.h0;
import jt.n2;
import jt.p0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import qr.c;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/media/engine/video/events/PingCallbackEvent.$serializer", "Ljt/h0;", "Lcom/discord/media/engine/video/events/PingCallbackEvent;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/media/engine/video/events/PingCallbackEvent;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/media/engine/video/events/PingCallbackEvent;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class PingCallbackEvent$$serializer implements h0 {
    @NotNull
    public static final PingCallbackEvent$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        PingCallbackEvent$$serializer pingCallbackEvent$$serializer = new PingCallbackEvent$$serializer();
        INSTANCE = pingCallbackEvent$$serializer;
        a2 a2Var = new a2("com.discord.media.engine.video.events.PingCallbackEvent", pingCallbackEvent$$serializer, 5);
        a2Var.o("connectionId", false);
        a2Var.o("ping", false);
        a2Var.o("server", false);
        a2Var.o("port", false);
        a2Var.o("seq", false);
        descriptor = a2Var;
    }

    private PingCallbackEvent$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        p0 p0Var = p0.f31057a;
        return new KSerializer[]{p0Var, p0Var, n2.f31041a, p0Var, p0Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final PingCallbackEvent deserialize(@NotNull Decoder decoder) {
        int i10;
        int i11;
        int i12;
        String str;
        int i13;
        int i14;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            int i15 = b10.i(serialDescriptor, 1);
            String m10 = b10.m(serialDescriptor, 2);
            i11 = b10.i(serialDescriptor, 3);
            i12 = b10.i(serialDescriptor, 4);
            str = m10;
            i13 = i15;
            i14 = 31;
        } else {
            String str2 = null;
            boolean z10 = true;
            i10 = 0;
            int i16 = 0;
            int i17 = 0;
            int i18 = 0;
            int i19 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    i10 = b10.i(serialDescriptor, 0);
                    i19 |= 1;
                } else if (o10 == 1) {
                    i18 = b10.i(serialDescriptor, 1);
                    i19 |= 2;
                } else if (o10 == 2) {
                    str2 = b10.m(serialDescriptor, 2);
                    i19 |= 4;
                } else if (o10 == 3) {
                    i16 = b10.i(serialDescriptor, 3);
                    i19 |= 8;
                } else if (o10 != 4) {
                    throw new b0(o10);
                } else {
                    i17 = b10.i(serialDescriptor, 4);
                    i19 |= 16;
                }
            }
            i11 = i16;
            i12 = i17;
            str = str2;
            i13 = i18;
            i14 = i19;
        }
        int i20 = i10;
        b10.c(serialDescriptor);
        return new PingCallbackEvent(i14, i20, i13, str, i11, i12, null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull PingCallbackEvent value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        PingCallbackEvent.write$Self$media_engine_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
