package com.discord.chat.bridge.referral;

import bt.a2;
import bt.h0;
import bt.n2;
import bt.p0;
import com.discord.chat.bridge.referral.ReferralEmbed;
import com.facebook.react.uimanager.ViewProps;
import jr.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import ys.b0;
import zs.a;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/referral/ReferralEmbed.Resolving.$serializer", "Lbt/h0;", "Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolving;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolving;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolving;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ReferralEmbed$Resolving$$serializer implements h0 {
    @NotNull
    public static final ReferralEmbed$Resolving$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ReferralEmbed$Resolving$$serializer referralEmbed$Resolving$$serializer = new ReferralEmbed$Resolving$$serializer();
        INSTANCE = referralEmbed$Resolving$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.referral.ReferralEmbed.Resolving", referralEmbed$Resolving$$serializer, 7);
        a2Var.o("headerText", false);
        a2Var.o("headerColor", false);
        a2Var.o(ViewProps.BACKGROUND_COLOR, false);
        a2Var.o("thumbnailCornerRadius", false);
        a2Var.o("headerLogoUrl", false);
        a2Var.o("resolvingGradientStart", false);
        a2Var.o("resolvingGradientEnd", false);
        descriptor = a2Var;
    }

    private ReferralEmbed$Resolving$$serializer() {
    }

    @Override // bt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f7662a;
        KSerializer u10 = a.u(n2Var);
        p0 p0Var = p0.f7678a;
        return new KSerializer[]{n2Var, p0Var, p0Var, p0Var, u10, p0Var, p0Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ReferralEmbed.Resolving deserialize(@NotNull Decoder decoder) {
        int i10;
        String str;
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        String str2;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            int i16 = b10.i(serialDescriptor, 1);
            int i17 = b10.i(serialDescriptor, 2);
            int i18 = b10.i(serialDescriptor, 3);
            int i19 = b10.i(serialDescriptor, 5);
            str2 = m10;
            i10 = b10.i(serialDescriptor, 6);
            i11 = i19;
            i12 = i18;
            str = (String) b10.n(serialDescriptor, 4, n2.f7662a, null);
            i13 = i17;
            i14 = i16;
            i15 = 127;
        } else {
            boolean z10 = true;
            int i20 = 0;
            int i21 = 0;
            int i22 = 0;
            int i23 = 0;
            int i24 = 0;
            String str3 = null;
            int i25 = 0;
            String str4 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        break;
                    case 0:
                        i24 |= 1;
                        str3 = b10.m(serialDescriptor, 0);
                        continue;
                    case 1:
                        i23 = b10.i(serialDescriptor, 1);
                        i24 |= 2;
                        continue;
                    case 2:
                        i22 = b10.i(serialDescriptor, 2);
                        i24 |= 4;
                        break;
                    case 3:
                        i21 = b10.i(serialDescriptor, 3);
                        i24 |= 8;
                        break;
                    case 4:
                        str4 = (String) b10.n(serialDescriptor, 4, n2.f7662a, str4);
                        i24 |= 16;
                        break;
                    case 5:
                        i25 = b10.i(serialDescriptor, 5);
                        i24 |= 32;
                        break;
                    case 6:
                        i20 = b10.i(serialDescriptor, 6);
                        i24 |= 64;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i20;
            str = str4;
            i11 = i25;
            i12 = i21;
            i13 = i22;
            i14 = i23;
            i15 = i24;
            str2 = str3;
        }
        b10.c(serialDescriptor);
        return new ReferralEmbed.Resolving(i15, str2, i14, i13, i12, str, i11, i10, null);
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ys.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ReferralEmbed.Resolving value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ReferralEmbed.Resolving.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // bt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
