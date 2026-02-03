package com.discord.primitives;

import dt.h0;
import dt.m0;
import dt.z0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import lr.c;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\u000b\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\u0010\u001a\u00020\u00022\u0006\u0010\r\u001a\u00020\f¢\u0006\u0004\b\u000e\u0010\u000fJ\u0017\u0010\u0013\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00120\u0011¢\u0006\u0004\b\u0013\u0010\u0014R\u0017\u0010\u0016\u001a\u00020\u00158\u0006¢\u0006\f\n\u0004\b\u0016\u0010\u0017\u001a\u0004\b\u0018\u0010\u0019¨\u0006\u001a"}, d2 = {"com/discord/primitives/StickerId.$serializer", "Ldt/h0;", "Lcom/discord/primitives/StickerId;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize-Pw5-X2A", "(Lkotlinx/serialization/encoding/Encoder;J)V", "serialize", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize-aEuejx8", "(Lkotlinx/serialization/encoding/Decoder;)J", "deserialize", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "primitives_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class StickerId$$serializer implements h0 {
    @NotNull
    public static final StickerId$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        StickerId$$serializer stickerId$$serializer = new StickerId$$serializer();
        INSTANCE = stickerId$$serializer;
        m0 m0Var = new m0("com.discord.primitives.StickerId", stickerId$$serializer);
        m0Var.o("snowflake", false);
        descriptor = m0Var;
    }

    private StickerId$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        return new KSerializer[]{z0.f21052a};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public /* bridge */ /* synthetic */ Object deserialize(Decoder decoder) {
        return StickerId.m1124boximpl(m1134deserializeaEuejx8(decoder));
    }

    /* renamed from: deserialize-aEuejx8  reason: not valid java name */
    public final long m1134deserializeaEuejx8(@NotNull Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return StickerId.m1125constructorimpl(decoder.q(descriptor).l());
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        m1135serializePw5X2A(encoder, ((StickerId) obj).m1133unboximpl());
    }

    /* renamed from: serialize-Pw5-X2A  reason: not valid java name */
    public final void m1135serializePw5X2A(@NotNull Encoder encoder, long j10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Encoder k10 = encoder.k(descriptor);
        if (k10 == null) {
            return;
        }
        k10.l(j10);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
