package com.discord.media_player.reactevents;

import androidx.recyclerview.widget.RecyclerView;
import at.b0;
import bt.a;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dt.a2;
import dt.g0;
import dt.h0;
import dt.n2;
import dt.p0;
import dt.z0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import lr.c;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/media_player/reactevents/MediaPlayFinishedAnalytics.$serializer", "Ldt/h0;", "Lcom/discord/media_player/reactevents/MediaPlayFinishedAnalytics;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/media_player/reactevents/MediaPlayFinishedAnalytics;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/media_player/reactevents/MediaPlayFinishedAnalytics;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class MediaPlayFinishedAnalytics$$serializer implements h0 {
    @NotNull
    public static final MediaPlayFinishedAnalytics$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        MediaPlayFinishedAnalytics$$serializer mediaPlayFinishedAnalytics$$serializer = new MediaPlayFinishedAnalytics$$serializer();
        INSTANCE = mediaPlayFinishedAnalytics$$serializer;
        a2 a2Var = new a2("com.discord.media_player.reactevents.MediaPlayFinishedAnalytics", mediaPlayFinishedAnalytics$$serializer, 12);
        a2Var.o("playWallTimeMs", false);
        a2Var.o("stallMs", false);
        a2Var.o("stallCount", false);
        a2Var.o("seekCount", false);
        a2Var.o("firstPlayWaitingMs", false);
        a2Var.o("mediaSource", false);
        a2Var.o("fileDurationSec", false);
        a2Var.o("mimeType", false);
        a2Var.o("fatalErrorCount", false);
        a2Var.o("nonFatalErrorCount", false);
        a2Var.o("totalDroppedFrames", false);
        a2Var.o("totalBandwidthBytes", false);
        descriptor = a2Var;
    }

    private MediaPlayFinishedAnalytics$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f20978a;
        KSerializer u10 = a.u(n2Var);
        KSerializer u11 = a.u(n2Var);
        z0 z0Var = z0.f21052a;
        p0 p0Var = p0.f20994a;
        return new KSerializer[]{z0Var, z0Var, p0Var, p0Var, z0Var, u10, g0.f20938a, u11, p0Var, p0Var, z0Var, z0Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final MediaPlayFinishedAnalytics deserialize(@NotNull Decoder decoder) {
        int i10;
        int i11;
        String str;
        String str2;
        int i12;
        int i13;
        float f10;
        int i14;
        long j10;
        long j11;
        long j12;
        long j13;
        long j14;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i15 = 10;
        if (b10.p()) {
            long f11 = b10.f(serialDescriptor, 0);
            long f12 = b10.f(serialDescriptor, 1);
            i10 = b10.i(serialDescriptor, 2);
            int i16 = b10.i(serialDescriptor, 3);
            long f13 = b10.f(serialDescriptor, 4);
            n2 n2Var = n2.f20978a;
            float u10 = b10.u(serialDescriptor, 6);
            int i17 = b10.i(serialDescriptor, 8);
            int i18 = b10.i(serialDescriptor, 9);
            long f14 = b10.f(serialDescriptor, 10);
            str = (String) b10.n(serialDescriptor, 7, n2Var, null);
            i11 = 4095;
            i12 = i18;
            i13 = i17;
            f10 = u10;
            str2 = (String) b10.n(serialDescriptor, 5, n2Var, null);
            i14 = i16;
            j10 = f13;
            j11 = f12;
            j12 = f11;
            j13 = f14;
            j14 = b10.f(serialDescriptor, 11);
        } else {
            long j15 = 0;
            long j16 = 0;
            long j17 = 0;
            long j18 = 0;
            long j19 = 0;
            boolean z10 = true;
            i10 = 0;
            int i19 = 0;
            int i20 = 0;
            String str3 = null;
            float f15 = 0.0f;
            int i21 = 0;
            int i22 = 0;
            String str4 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i15 = 10;
                        break;
                    case 0:
                        j17 = b10.f(serialDescriptor, 0);
                        i19 |= 1;
                        i15 = 10;
                        break;
                    case 1:
                        j16 = b10.f(serialDescriptor, 1);
                        i19 |= 2;
                        i15 = 10;
                        break;
                    case 2:
                        i10 = b10.i(serialDescriptor, 2);
                        i19 |= 4;
                        i15 = 10;
                        continue;
                    case 3:
                        i20 = b10.i(serialDescriptor, 3);
                        i19 |= 8;
                        i15 = 10;
                        break;
                    case 4:
                        j15 = b10.f(serialDescriptor, 4);
                        i19 |= 16;
                        i15 = 10;
                        break;
                    case 5:
                        str4 = (String) b10.n(serialDescriptor, 5, n2.f20978a, str4);
                        i19 |= 32;
                        i15 = 10;
                        break;
                    case 6:
                        f15 = b10.u(serialDescriptor, 6);
                        i19 |= 64;
                        i15 = 10;
                        break;
                    case 7:
                        str3 = (String) b10.n(serialDescriptor, 7, n2.f20978a, str3);
                        i19 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        i15 = 10;
                        break;
                    case 8:
                        i22 = b10.i(serialDescriptor, 8);
                        i19 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    case 9:
                        i21 = b10.i(serialDescriptor, 9);
                        i19 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        break;
                    case 10:
                        j18 = b10.f(serialDescriptor, i15);
                        i19 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        break;
                    case 11:
                        j19 = b10.f(serialDescriptor, 11);
                        i19 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i11 = i19;
            str = str3;
            str2 = str4;
            i12 = i21;
            i13 = i22;
            f10 = f15;
            i14 = i20;
            j10 = j15;
            j11 = j16;
            j12 = j17;
            j13 = j18;
            j14 = j19;
        }
        int i23 = i10;
        b10.c(serialDescriptor);
        return new MediaPlayFinishedAnalytics(i11, j12, j11, i23, i14, j10, str2, f10, str, i13, i12, j13, j14, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull MediaPlayFinishedAnalytics value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        MediaPlayFinishedAnalytics.write$Self$media_player_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
