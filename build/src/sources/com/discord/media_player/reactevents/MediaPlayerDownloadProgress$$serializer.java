package com.discord.media_player.reactevents;

import com.facebook.react.devsupport.StackTraceHelper;
import ft.b0;
import jt.a2;
import jt.h0;
import jt.x;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import qr.c;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/media_player/reactevents/MediaPlayerDownloadProgress.$serializer", "Ljt/h0;", "Lcom/discord/media_player/reactevents/MediaPlayerDownloadProgress;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/media_player/reactevents/MediaPlayerDownloadProgress;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/media_player/reactevents/MediaPlayerDownloadProgress;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class MediaPlayerDownloadProgress$$serializer implements h0 {
    @NotNull
    public static final MediaPlayerDownloadProgress$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        MediaPlayerDownloadProgress$$serializer mediaPlayerDownloadProgress$$serializer = new MediaPlayerDownloadProgress$$serializer();
        INSTANCE = mediaPlayerDownloadProgress$$serializer;
        a2 a2Var = new a2("com.discord.media_player.reactevents.MediaPlayerDownloadProgress", mediaPlayerDownloadProgress$$serializer, 4);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("progressSeconds", false);
        a2Var.o("progressPercent", false);
        a2Var.o("totalDurationSeconds", false);
        descriptor = a2Var;
    }

    private MediaPlayerDownloadProgress$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        x xVar = x.f31095a;
        return new KSerializer[]{xVar, xVar, xVar, xVar};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final MediaPlayerDownloadProgress deserialize(@NotNull Decoder decoder) {
        int i10;
        double d10;
        double d11;
        double d12;
        double d13;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            double F = b10.F(serialDescriptor, 0);
            double F2 = b10.F(serialDescriptor, 1);
            double F3 = b10.F(serialDescriptor, 2);
            d10 = b10.F(serialDescriptor, 3);
            d11 = F3;
            d12 = F;
            d13 = F2;
            i10 = 15;
        } else {
            double d14 = 0.0d;
            boolean z10 = true;
            int i11 = 0;
            double d15 = 0.0d;
            double d16 = 0.0d;
            double d17 = 0.0d;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    d16 = b10.F(serialDescriptor, 0);
                    i11 |= 1;
                } else if (o10 == 1) {
                    d17 = b10.F(serialDescriptor, 1);
                    i11 |= 2;
                } else if (o10 == 2) {
                    d15 = b10.F(serialDescriptor, 2);
                    i11 |= 4;
                } else if (o10 != 3) {
                    throw new b0(o10);
                } else {
                    d14 = b10.F(serialDescriptor, 3);
                    i11 |= 8;
                }
            }
            i10 = i11;
            d10 = d14;
            d11 = d15;
            d12 = d16;
            d13 = d17;
        }
        b10.c(serialDescriptor);
        return new MediaPlayerDownloadProgress(i10, d12, d13, d11, d10, null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull MediaPlayerDownloadProgress value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        MediaPlayerDownloadProgress.write$Self$media_player_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
