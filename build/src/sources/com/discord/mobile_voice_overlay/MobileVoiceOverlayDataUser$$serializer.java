package com.discord.mobile_voice_overlay;

import at.b0;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import dt.a2;
import dt.h0;
import dt.n2;
import dt.p0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/mobile_voice_overlay/MobileVoiceOverlayDataUser.$serializer", "Ldt/h0;", "Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayDataUser;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayDataUser;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayDataUser;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "mobile_voice_overlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class MobileVoiceOverlayDataUser$$serializer implements h0 {
    @NotNull
    public static final MobileVoiceOverlayDataUser$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        MobileVoiceOverlayDataUser$$serializer mobileVoiceOverlayDataUser$$serializer = new MobileVoiceOverlayDataUser$$serializer();
        INSTANCE = mobileVoiceOverlayDataUser$$serializer;
        a2 a2Var = new a2("com.discord.mobile_voice_overlay.MobileVoiceOverlayDataUser", mobileVoiceOverlayDataUser$$serializer, 4);
        a2Var.o("userId", false);
        a2Var.o("avatar", false);
        a2Var.o("speaking", false);
        a2Var.o("discriminator", false);
        descriptor = a2Var;
    }

    private MobileVoiceOverlayDataUser$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        return new KSerializer[]{UserId$$serializer.INSTANCE, bt.a.u(n2.f20978a), dt.h.f20942a, p0.f20994a};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final MobileVoiceOverlayDataUser deserialize(@NotNull Decoder decoder) {
        int i10;
        boolean z10;
        int i11;
        UserId userId;
        String str;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            boolean C = b10.C(serialDescriptor, 2);
            userId = (UserId) b10.y(serialDescriptor, 0, UserId$$serializer.INSTANCE, null);
            i10 = b10.i(serialDescriptor, 3);
            z10 = C;
            str = (String) b10.n(serialDescriptor, 1, n2.f20978a, null);
            i11 = 15;
        } else {
            boolean z11 = true;
            int i12 = 0;
            int i13 = 0;
            UserId userId2 = null;
            String str2 = null;
            boolean z12 = false;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z11 = false;
                } else if (o10 == 0) {
                    userId2 = (UserId) b10.y(serialDescriptor, 0, UserId$$serializer.INSTANCE, userId2);
                    i13 |= 1;
                } else if (o10 == 1) {
                    str2 = (String) b10.n(serialDescriptor, 1, n2.f20978a, str2);
                    i13 |= 2;
                } else if (o10 == 2) {
                    z12 = b10.C(serialDescriptor, 2);
                    i13 |= 4;
                } else if (o10 != 3) {
                    throw new b0(o10);
                } else {
                    i12 = b10.i(serialDescriptor, 3);
                    i13 |= 8;
                }
            }
            i10 = i12;
            z10 = z12;
            i11 = i13;
            userId = userId2;
            str = str2;
        }
        b10.c(serialDescriptor);
        return new MobileVoiceOverlayDataUser(i11, userId, str, z10, i10, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull MobileVoiceOverlayDataUser value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        MobileVoiceOverlayDataUser.write$Self$mobile_voice_overlay_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
