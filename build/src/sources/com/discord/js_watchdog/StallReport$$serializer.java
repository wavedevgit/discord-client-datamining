package com.discord.js_watchdog;

import dt.b0;
import et.a;
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
import or.c;
import org.jetbrains.annotations.NotNull;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/js_watchdog/StallReport.$serializer", "Lgt/h0;", "Lcom/discord/js_watchdog/StallReport;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/js_watchdog/StallReport;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/js_watchdog/StallReport;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "js_watchdog_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class StallReport$$serializer implements h0 {
    @NotNull
    public static final StallReport$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        StallReport$$serializer stallReport$$serializer = new StallReport$$serializer();
        INSTANCE = stallReport$$serializer;
        a2 a2Var = new a2("com.discord.js_watchdog.StallReport", stallReport$$serializer, 3);
        a2Var.o("stallTime", false);
        a2Var.o("sessionId", false);
        a2Var.o(SharedPreferencesKey.TRACE, false);
        descriptor = a2Var;
    }

    private StallReport$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f25302a;
        return new KSerializer[]{p0.f25318a, n2Var, a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final StallReport deserialize(@NotNull Decoder decoder) {
        int i10;
        int i11;
        String str;
        String str2;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            String m10 = b10.m(serialDescriptor, 1);
            str2 = (String) b10.n(serialDescriptor, 2, n2.f25302a, null);
            str = m10;
            i11 = 7;
        } else {
            boolean z10 = true;
            i10 = 0;
            String str3 = null;
            String str4 = null;
            int i12 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    i10 = b10.i(serialDescriptor, 0);
                    i12 |= 1;
                } else if (o10 == 1) {
                    str3 = b10.m(serialDescriptor, 1);
                    i12 |= 2;
                } else if (o10 != 2) {
                    throw new b0(o10);
                } else {
                    str4 = (String) b10.n(serialDescriptor, 2, n2.f25302a, str4);
                    i12 |= 4;
                }
            }
            i11 = i12;
            str = str3;
            str2 = str4;
        }
        int i13 = i10;
        b10.c(serialDescriptor);
        return new StallReport(i11, i13, str, str2, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull StallReport value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        StallReport.write$Self$js_watchdog_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
