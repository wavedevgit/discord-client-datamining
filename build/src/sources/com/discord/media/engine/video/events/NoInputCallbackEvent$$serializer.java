package com.discord.media.engine.video.events;

import ft.b0;
import jt.a2;
import jt.h;
import jt.h0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import qr.c;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/media/engine/video/events/NoInputCallbackEvent.$serializer", "Ljt/h0;", "Lcom/discord/media/engine/video/events/NoInputCallbackEvent;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/media/engine/video/events/NoInputCallbackEvent;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/media/engine/video/events/NoInputCallbackEvent;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class NoInputCallbackEvent$$serializer implements h0 {
    @NotNull
    public static final NoInputCallbackEvent$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        NoInputCallbackEvent$$serializer noInputCallbackEvent$$serializer = new NoInputCallbackEvent$$serializer();
        INSTANCE = noInputCallbackEvent$$serializer;
        a2 a2Var = new a2("com.discord.media.engine.video.events.NoInputCallbackEvent", noInputCallbackEvent$$serializer, 1);
        a2Var.o("input", false);
        descriptor = a2Var;
    }

    private NoInputCallbackEvent$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        return new KSerializer[]{h.f31053a};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final NoInputCallbackEvent deserialize(@NotNull Decoder decoder) {
        boolean z10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i10 = 1;
        if (b10.p()) {
            z10 = b10.C(serialDescriptor, 0);
        } else {
            boolean z11 = true;
            z10 = false;
            int i11 = 0;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z11 = false;
                } else if (o10 != 0) {
                    throw new b0(o10);
                } else {
                    z10 = b10.C(serialDescriptor, 0);
                    i11 = 1;
                }
            }
            i10 = i11;
        }
        b10.c(serialDescriptor);
        return new NoInputCallbackEvent(i10, z10, null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull NoInputCallbackEvent value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        b10.y(serialDescriptor, 0, value.input);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
