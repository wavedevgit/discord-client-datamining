package com.discord.chat.bridge.botuikit;

import com.discord.primitives.ApplicationId;
import com.discord.primitives.ApplicationId$$serializer;
import dt.b0;
import gt.a2;
import gt.h0;
import gt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
@or.c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/CheckpointApplication.$serializer", "Lgt/h0;", "Lcom/discord/chat/bridge/botuikit/CheckpointApplication;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/CheckpointApplication;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/CheckpointApplication;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class CheckpointApplication$$serializer implements h0 {
    @NotNull
    public static final CheckpointApplication$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        CheckpointApplication$$serializer checkpointApplication$$serializer = new CheckpointApplication$$serializer();
        INSTANCE = checkpointApplication$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.botuikit.CheckpointApplication", checkpointApplication$$serializer, 3);
        a2Var.o("applicationId", false);
        a2Var.o("applicationImageId", true);
        a2Var.o("applicationName", false);
        descriptor = a2Var;
    }

    private CheckpointApplication$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f25302a;
        return new KSerializer[]{ApplicationId$$serializer.INSTANCE, et.a.u(n2Var), n2Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final CheckpointApplication deserialize(@NotNull Decoder decoder) {
        int i10;
        ApplicationId applicationId;
        String str;
        String str2;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        ApplicationId applicationId2 = null;
        if (b10.p()) {
            applicationId = (ApplicationId) b10.y(serialDescriptor, 0, ApplicationId$$serializer.INSTANCE, null);
            str2 = b10.m(serialDescriptor, 2);
            str = (String) b10.n(serialDescriptor, 1, n2.f25302a, null);
            i10 = 7;
        } else {
            boolean z10 = true;
            int i11 = 0;
            String str3 = null;
            String str4 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    applicationId2 = (ApplicationId) b10.y(serialDescriptor, 0, ApplicationId$$serializer.INSTANCE, applicationId2);
                    i11 |= 1;
                } else if (o10 == 1) {
                    str3 = (String) b10.n(serialDescriptor, 1, n2.f25302a, str3);
                    i11 |= 2;
                } else if (o10 != 2) {
                    throw new b0(o10);
                } else {
                    str4 = b10.m(serialDescriptor, 2);
                    i11 |= 4;
                }
            }
            i10 = i11;
            applicationId = applicationId2;
            str = str3;
            str2 = str4;
        }
        b10.c(serialDescriptor);
        return new CheckpointApplication(i10, applicationId, str, str2, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull CheckpointApplication value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        CheckpointApplication.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
