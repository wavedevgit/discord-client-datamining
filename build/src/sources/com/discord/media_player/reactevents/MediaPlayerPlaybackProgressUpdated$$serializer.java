package com.discord.media_player.reactevents;

import dt.b0;
import et.a;
import gt.a2;
import gt.h0;
import gt.z0;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/media_player/reactevents/MediaPlayerPlaybackProgressUpdated.$serializer", "Lgt/h0;", "Lcom/discord/media_player/reactevents/MediaPlayerPlaybackProgressUpdated;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/media_player/reactevents/MediaPlayerPlaybackProgressUpdated;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/media_player/reactevents/MediaPlayerPlaybackProgressUpdated;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class MediaPlayerPlaybackProgressUpdated$$serializer implements h0 {
    @NotNull
    public static final MediaPlayerPlaybackProgressUpdated$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        MediaPlayerPlaybackProgressUpdated$$serializer mediaPlayerPlaybackProgressUpdated$$serializer = new MediaPlayerPlaybackProgressUpdated$$serializer();
        INSTANCE = mediaPlayerPlaybackProgressUpdated$$serializer;
        a2 a2Var = new a2("com.discord.media_player.reactevents.MediaPlayerPlaybackProgressUpdated", mediaPlayerPlaybackProgressUpdated$$serializer, 3);
        a2Var.o("source", false);
        a2Var.o("time", false);
        a2Var.o("duration", false);
        descriptor = a2Var;
    }

    private MediaPlayerPlaybackProgressUpdated$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        z0 z0Var = z0.f25376a;
        return new KSerializer[]{a.u(MediaPlayerPlaybackSource$$serializer.INSTANCE), z0Var, z0Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final MediaPlayerPlaybackProgressUpdated deserialize(@NotNull Decoder decoder) {
        int i10;
        MediaPlayerPlaybackSource mediaPlayerPlaybackSource;
        long j10;
        long j11;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        MediaPlayerPlaybackSource mediaPlayerPlaybackSource2 = null;
        if (b10.p()) {
            long f10 = b10.f(serialDescriptor, 1);
            mediaPlayerPlaybackSource = (MediaPlayerPlaybackSource) b10.n(serialDescriptor, 0, MediaPlayerPlaybackSource$$serializer.INSTANCE, null);
            i10 = 7;
            j10 = f10;
            j11 = b10.f(serialDescriptor, 2);
        } else {
            long j12 = 0;
            boolean z10 = true;
            int i11 = 0;
            long j13 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    mediaPlayerPlaybackSource2 = (MediaPlayerPlaybackSource) b10.n(serialDescriptor, 0, MediaPlayerPlaybackSource$$serializer.INSTANCE, mediaPlayerPlaybackSource2);
                    i11 |= 1;
                } else if (o10 == 1) {
                    j12 = b10.f(serialDescriptor, 1);
                    i11 |= 2;
                } else if (o10 != 2) {
                    throw new b0(o10);
                } else {
                    j13 = b10.f(serialDescriptor, 2);
                    i11 |= 4;
                }
            }
            i10 = i11;
            mediaPlayerPlaybackSource = mediaPlayerPlaybackSource2;
            j10 = j12;
            j11 = j13;
        }
        b10.c(serialDescriptor);
        return new MediaPlayerPlaybackProgressUpdated(i10, mediaPlayerPlaybackSource, j10, j11, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull MediaPlayerPlaybackProgressUpdated value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        MediaPlayerPlaybackProgressUpdated.write$Self$media_player_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
