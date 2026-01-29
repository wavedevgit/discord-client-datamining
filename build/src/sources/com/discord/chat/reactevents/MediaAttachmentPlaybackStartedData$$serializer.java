package com.discord.chat.reactevents;

import at.a2;
import at.g0;
import at.h;
import at.h0;
import at.n2;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import xs.b0;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/reactevents/MediaAttachmentPlaybackStartedData.$serializer", "Lat/h0;", "Lcom/discord/chat/reactevents/MediaAttachmentPlaybackStartedData;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/reactevents/MediaAttachmentPlaybackStartedData;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/reactevents/MediaAttachmentPlaybackStartedData;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ir.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class MediaAttachmentPlaybackStartedData$$serializer implements h0 {
    @NotNull
    public static final MediaAttachmentPlaybackStartedData$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        MediaAttachmentPlaybackStartedData$$serializer mediaAttachmentPlaybackStartedData$$serializer = new MediaAttachmentPlaybackStartedData$$serializer();
        INSTANCE = mediaAttachmentPlaybackStartedData$$serializer;
        a2 a2Var = new a2("com.discord.chat.reactevents.MediaAttachmentPlaybackStartedData", mediaAttachmentPlaybackStartedData$$serializer, 6);
        a2Var.o("messageId", false);
        a2Var.o("totalDurationSecs", false);
        a2Var.o("startDurationSecs", false);
        a2Var.o("senderUserId", false);
        a2Var.o("isVoiceMessage", false);
        a2Var.o("attachmentId", false);
        descriptor = a2Var;
    }

    private MediaAttachmentPlaybackStartedData$$serializer() {
    }

    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        g0 g0Var = g0.f6808a;
        return new KSerializer[]{MessageId$$serializer.INSTANCE, g0Var, g0Var, UserId$$serializer.INSTANCE, h.f6812a, n2.f6848a};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final MediaAttachmentPlaybackStartedData deserialize(@NotNull Decoder decoder) {
        String str;
        String str2;
        UserId userId;
        boolean z10;
        float f10;
        float f11;
        int i10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            MessageId messageId = (MessageId) b10.y(serialDescriptor, 0, MessageId$$serializer.INSTANCE, null);
            str = messageId != null ? messageId.m1093unboximpl() : null;
            float u10 = b10.u(serialDescriptor, 1);
            float u11 = b10.u(serialDescriptor, 2);
            boolean C = b10.C(serialDescriptor, 4);
            str2 = b10.m(serialDescriptor, 5);
            userId = (UserId) b10.y(serialDescriptor, 3, UserId$$serializer.INSTANCE, null);
            z10 = C;
            f10 = u11;
            f11 = u10;
            i10 = 63;
        } else {
            float f12 = 0.0f;
            float f13 = 0.0f;
            boolean z11 = true;
            boolean z12 = false;
            int i11 = 0;
            str = null;
            String str3 = null;
            UserId userId2 = null;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        break;
                    case 0:
                        MessageId messageId2 = (MessageId) b10.y(serialDescriptor, 0, MessageId$$serializer.INSTANCE, str != null ? MessageId.m1084boximpl(str) : null);
                        str = messageId2 != null ? messageId2.m1093unboximpl() : null;
                        i11 |= 1;
                        break;
                    case 1:
                        f13 = b10.u(serialDescriptor, 1);
                        i11 |= 2;
                        break;
                    case 2:
                        f12 = b10.u(serialDescriptor, 2);
                        i11 |= 4;
                        break;
                    case 3:
                        userId2 = (UserId) b10.y(serialDescriptor, 3, UserId$$serializer.INSTANCE, userId2);
                        i11 |= 8;
                        break;
                    case 4:
                        z12 = b10.C(serialDescriptor, 4);
                        i11 |= 16;
                        break;
                    case 5:
                        str3 = b10.m(serialDescriptor, 5);
                        i11 |= 32;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            str2 = str3;
            userId = userId2;
            z10 = z12;
            f10 = f12;
            f11 = f13;
            i10 = i11;
        }
        String str4 = str;
        b10.c(serialDescriptor);
        return new MediaAttachmentPlaybackStartedData(i10, str4, f11, f10, userId, z10, str2, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull MediaAttachmentPlaybackStartedData value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        MediaAttachmentPlaybackStartedData.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
