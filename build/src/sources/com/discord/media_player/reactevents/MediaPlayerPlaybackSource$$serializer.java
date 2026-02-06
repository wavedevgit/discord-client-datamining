package com.discord.media_player.reactevents;

import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import ft.b0;
import gt.a;
import jt.a2;
import jt.h0;
import jt.n2;
import jt.p0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import qr.c;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/media_player/reactevents/MediaPlayerPlaybackSource.$serializer", "Ljt/h0;", "Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class MediaPlayerPlaybackSource$$serializer implements h0 {
    @NotNull
    public static final MediaPlayerPlaybackSource$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        MediaPlayerPlaybackSource$$serializer mediaPlayerPlaybackSource$$serializer = new MediaPlayerPlaybackSource$$serializer();
        INSTANCE = mediaPlayerPlaybackSource$$serializer;
        a2 a2Var = new a2("com.discord.media_player.reactevents.MediaPlayerPlaybackSource", mediaPlayerPlaybackSource$$serializer, 5);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("assetUrl", false);
        a2Var.o("channelId", false);
        a2Var.o("messageId", false);
        a2Var.o("attachmentIndex", false);
        descriptor = a2Var;
    }

    private MediaPlayerPlaybackSource$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f31041a;
        return new KSerializer[]{a.u(n2Var), a.u(n2Var), a.u(n2Var), a.u(MessageId$$serializer.INSTANCE), a.u(p0.f31057a)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final MediaPlayerPlaybackSource deserialize(@NotNull Decoder decoder) {
        String str;
        String str2;
        Integer num;
        int i10;
        String str3;
        String str4;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            n2 n2Var = n2.f31041a;
            String str5 = (String) b10.n(serialDescriptor, 0, n2Var, null);
            String str6 = (String) b10.n(serialDescriptor, 1, n2Var, null);
            str = (String) b10.n(serialDescriptor, 2, n2Var, null);
            MessageId messageId = (MessageId) b10.n(serialDescriptor, 3, MessageId$$serializer.INSTANCE, null);
            str2 = messageId != null ? messageId.m1092unboximpl() : null;
            num = (Integer) b10.n(serialDescriptor, 4, p0.f31057a, null);
            i10 = 31;
            str3 = str6;
            str4 = str5;
        } else {
            boolean z10 = true;
            int i11 = 0;
            str = null;
            String str7 = null;
            Integer num2 = null;
            String str8 = null;
            String str9 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    str9 = (String) b10.n(serialDescriptor, 0, n2.f31041a, str9);
                    i11 |= 1;
                } else if (o10 == 1) {
                    str8 = (String) b10.n(serialDescriptor, 1, n2.f31041a, str8);
                    i11 |= 2;
                } else if (o10 == 2) {
                    str = (String) b10.n(serialDescriptor, 2, n2.f31041a, str);
                    i11 |= 4;
                } else if (o10 == 3) {
                    MessageId messageId2 = (MessageId) b10.n(serialDescriptor, 3, MessageId$$serializer.INSTANCE, str7 != null ? MessageId.m1083boximpl(str7) : null);
                    str7 = messageId2 != null ? messageId2.m1092unboximpl() : null;
                    i11 |= 8;
                } else if (o10 != 4) {
                    throw new b0(o10);
                } else {
                    num2 = (Integer) b10.n(serialDescriptor, 4, p0.f31057a, num2);
                    i11 |= 16;
                }
            }
            str2 = str7;
            num = num2;
            i10 = i11;
            str3 = str8;
            str4 = str9;
        }
        String str10 = str;
        b10.c(serialDescriptor);
        return new MediaPlayerPlaybackSource(i10, str4, str3, str10, str2, num, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull MediaPlayerPlaybackSource value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        MediaPlayerPlaybackSource.write$Self$media_player_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
