package com.discord.span.utilities.common;

import bt.a2;
import bt.h0;
import bt.p0;
import com.facebook.react.uimanager.ViewProps;
import jr.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import ys.b0;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/span/utilities/common/BackgroundStyle.$serializer", "Lbt/h0;", "Lcom/discord/span/utilities/common/BackgroundStyle;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/span/utilities/common/BackgroundStyle;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/span/utilities/common/BackgroundStyle;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "span_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class BackgroundStyle$$serializer implements h0 {
    @NotNull
    public static final BackgroundStyle$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        BackgroundStyle$$serializer backgroundStyle$$serializer = new BackgroundStyle$$serializer();
        INSTANCE = backgroundStyle$$serializer;
        a2 a2Var = new a2("com.discord.span.utilities.common.BackgroundStyle", backgroundStyle$$serializer, 3);
        a2Var.o(ViewProps.BACKGROUND_COLOR, false);
        a2Var.o("cornerRadius", true);
        a2Var.o(ViewProps.MARGIN_VERTICAL, true);
        descriptor = a2Var;
    }

    private BackgroundStyle$$serializer() {
    }

    @Override // bt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        p0 p0Var = p0.f7678a;
        return new KSerializer[]{p0Var, p0Var, p0Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final BackgroundStyle deserialize(@NotNull Decoder decoder) {
        int i10;
        int i11;
        int i12;
        int i13;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            int i14 = b10.i(serialDescriptor, 1);
            i11 = b10.i(serialDescriptor, 2);
            i12 = i14;
            i13 = 7;
        } else {
            boolean z10 = true;
            i10 = 0;
            int i15 = 0;
            int i16 = 0;
            int i17 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    i10 = b10.i(serialDescriptor, 0);
                    i17 |= 1;
                } else if (o10 == 1) {
                    i16 = b10.i(serialDescriptor, 1);
                    i17 |= 2;
                } else if (o10 != 2) {
                    throw new b0(o10);
                } else {
                    i15 = b10.i(serialDescriptor, 2);
                    i17 |= 4;
                }
            }
            i11 = i15;
            i12 = i16;
            i13 = i17;
        }
        int i18 = i10;
        b10.c(serialDescriptor);
        return new BackgroundStyle(i13, i18, i12, i11, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ys.o
    public final void serialize(@NotNull Encoder encoder, @NotNull BackgroundStyle value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        BackgroundStyle.write$Self$span_utilities_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // bt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
