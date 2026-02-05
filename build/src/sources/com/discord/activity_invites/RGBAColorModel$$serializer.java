package com.discord.activity_invites;

import dt.b0;
import gt.a2;
import gt.g0;
import gt.h0;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/activity_invites/RGBAColorModel.$serializer", "Lgt/h0;", "Lcom/discord/activity_invites/RGBAColorModel;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/activity_invites/RGBAColorModel;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/activity_invites/RGBAColorModel;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "activity_invites_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class RGBAColorModel$$serializer implements h0 {
    @NotNull
    public static final RGBAColorModel$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        RGBAColorModel$$serializer rGBAColorModel$$serializer = new RGBAColorModel$$serializer();
        INSTANCE = rGBAColorModel$$serializer;
        a2 a2Var = new a2("com.discord.activity_invites.RGBAColorModel", rGBAColorModel$$serializer, 4);
        a2Var.o("r", false);
        a2Var.o("g", false);
        a2Var.o("b", false);
        a2Var.o("a", false);
        descriptor = a2Var;
    }

    private RGBAColorModel$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        g0 g0Var = g0.f25262a;
        return new KSerializer[]{g0Var, g0Var, g0Var, g0Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final RGBAColorModel deserialize(@NotNull Decoder decoder) {
        float f10;
        float f11;
        float f12;
        float f13;
        int i10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            f10 = b10.u(serialDescriptor, 0);
            float u10 = b10.u(serialDescriptor, 1);
            float u11 = b10.u(serialDescriptor, 2);
            f11 = b10.u(serialDescriptor, 3);
            f12 = u11;
            f13 = u10;
            i10 = 15;
        } else {
            f10 = 0.0f;
            float f14 = 0.0f;
            float f15 = 0.0f;
            float f16 = 0.0f;
            boolean z10 = true;
            int i11 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    f10 = b10.u(serialDescriptor, 0);
                    i11 |= 1;
                } else if (o10 == 1) {
                    f16 = b10.u(serialDescriptor, 1);
                    i11 |= 2;
                } else if (o10 == 2) {
                    f15 = b10.u(serialDescriptor, 2);
                    i11 |= 4;
                } else if (o10 != 3) {
                    throw new b0(o10);
                } else {
                    f14 = b10.u(serialDescriptor, 3);
                    i11 |= 8;
                }
            }
            f11 = f14;
            f12 = f15;
            f13 = f16;
            i10 = i11;
        }
        float f17 = f10;
        b10.c(serialDescriptor);
        return new RGBAColorModel(i10, f17, f13, f12, f11, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull RGBAColorModel value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        RGBAColorModel.write$Self$activity_invites_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
