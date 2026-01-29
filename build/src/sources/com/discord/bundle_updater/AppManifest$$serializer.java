package com.discord.bundle_updater;

import at.a2;
import at.h0;
import java.util.Map;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.b0;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/bundle_updater/AppManifest.$serializer", "Lat/h0;", "Lcom/discord/bundle_updater/AppManifest;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/bundle_updater/AppManifest;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/bundle_updater/AppManifest;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ir.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class AppManifest$$serializer implements h0 {
    @NotNull
    public static final AppManifest$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        AppManifest$$serializer appManifest$$serializer = new AppManifest$$serializer();
        INSTANCE = appManifest$$serializer;
        a2 a2Var = new a2("com.discord.bundle_updater.AppManifest", appManifest$$serializer, 3);
        a2Var.o("metadata", false);
        a2Var.o("hashes", true);
        a2Var.o("patches", true);
        descriptor = a2Var;
    }

    private AppManifest$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = AppManifest.$childSerializers;
        return new KSerializer[]{AppManifestMetadata$$serializer.INSTANCE, lazyArr[1].getValue(), lazyArr[2].getValue()};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final AppManifest deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        AppManifestMetadata appManifestMetadata;
        Map map;
        Map map2;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = AppManifest.$childSerializers;
        AppManifestMetadata appManifestMetadata2 = null;
        if (b10.p()) {
            map2 = (Map) b10.y(serialDescriptor, 2, (DeserializationStrategy) lazyArr[2].getValue(), null);
            appManifestMetadata = (AppManifestMetadata) b10.y(serialDescriptor, 0, AppManifestMetadata$$serializer.INSTANCE, null);
            i10 = 7;
            map = (Map) b10.y(serialDescriptor, 1, (DeserializationStrategy) lazyArr[1].getValue(), null);
        } else {
            boolean z10 = true;
            int i11 = 0;
            Map map3 = null;
            Map map4 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    appManifestMetadata2 = (AppManifestMetadata) b10.y(serialDescriptor, 0, AppManifestMetadata$$serializer.INSTANCE, appManifestMetadata2);
                    i11 |= 1;
                } else if (o10 == 1) {
                    map3 = (Map) b10.y(serialDescriptor, 1, (DeserializationStrategy) lazyArr[1].getValue(), map3);
                    i11 |= 2;
                } else if (o10 != 2) {
                    throw new b0(o10);
                } else {
                    map4 = (Map) b10.y(serialDescriptor, 2, (DeserializationStrategy) lazyArr[2].getValue(), map4);
                    i11 |= 4;
                }
            }
            i10 = i11;
            appManifestMetadata = appManifestMetadata2;
            map = map3;
            map2 = map4;
        }
        b10.c(serialDescriptor);
        return new AppManifest(i10, appManifestMetadata, map, map2, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull AppManifest value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        AppManifest.write$Self$bundle_updater_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
