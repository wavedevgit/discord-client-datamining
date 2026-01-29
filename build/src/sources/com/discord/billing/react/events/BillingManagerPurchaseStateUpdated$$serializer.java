package com.discord.billing.react.events;

import at.a2;
import at.h;
import at.h0;
import at.p0;
import ir.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import xs.b0;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/billing/react/events/BillingManagerPurchaseStateUpdated.$serializer", "Lat/h0;", "Lcom/discord/billing/react/events/BillingManagerPurchaseStateUpdated;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/billing/react/events/BillingManagerPurchaseStateUpdated;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/billing/react/events/BillingManagerPurchaseStateUpdated;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "billing_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class BillingManagerPurchaseStateUpdated$$serializer implements h0 {
    @NotNull
    public static final BillingManagerPurchaseStateUpdated$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        BillingManagerPurchaseStateUpdated$$serializer billingManagerPurchaseStateUpdated$$serializer = new BillingManagerPurchaseStateUpdated$$serializer();
        INSTANCE = billingManagerPurchaseStateUpdated$$serializer;
        a2 a2Var = new a2("com.discord.billing.react.events.BillingManagerPurchaseStateUpdated", billingManagerPurchaseStateUpdated$$serializer, 2);
        a2Var.o("billingResult", false);
        a2Var.o("isActivePurchase", false);
        descriptor = a2Var;
    }

    private BillingManagerPurchaseStateUpdated$$serializer() {
    }

    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        return new KSerializer[]{p0.f6864a, h.f6812a};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final BillingManagerPurchaseStateUpdated deserialize(@NotNull Decoder decoder) {
        int i10;
        boolean z10;
        int i11;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            z10 = b10.C(serialDescriptor, 1);
            i11 = 3;
        } else {
            boolean z11 = true;
            i10 = 0;
            boolean z12 = false;
            int i12 = 0;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z11 = false;
                } else if (o10 == 0) {
                    i10 = b10.i(serialDescriptor, 0);
                    i12 |= 1;
                } else if (o10 != 1) {
                    throw new b0(o10);
                } else {
                    z12 = b10.C(serialDescriptor, 1);
                    i12 |= 2;
                }
            }
            z10 = z12;
            i11 = i12;
        }
        b10.c(serialDescriptor);
        return new BillingManagerPurchaseStateUpdated(i11, i10, z10, null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull BillingManagerPurchaseStateUpdated value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        BillingManagerPurchaseStateUpdated.write$Self$billing_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
