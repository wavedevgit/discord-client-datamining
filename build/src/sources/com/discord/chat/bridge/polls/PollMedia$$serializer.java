package com.discord.chat.bridge.polls;

import dt.b0;
import et.a;
import gt.a2;
import gt.h0;
import gt.n2;
import gt.z0;
import java.util.Set;
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
import or.c;
import org.jetbrains.annotations.NotNull;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/polls/PollMedia.$serializer", "Lgt/h0;", "Lcom/discord/chat/bridge/polls/PollMedia;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/polls/PollMedia;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/polls/PollMedia;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class PollMedia$$serializer implements h0 {
    @NotNull
    public static final PollMedia$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        PollMedia$$serializer pollMedia$$serializer = new PollMedia$$serializer();
        INSTANCE = pollMedia$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.polls.PollMedia", pollMedia$$serializer, 4);
        a2Var.o("text", true);
        a2Var.o("attachmentIds", true);
        a2Var.o("emoji", true);
        a2Var.o("stickerId", true);
        descriptor = a2Var;
    }

    private PollMedia$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = PollMedia.$childSerializers;
        return new KSerializer[]{a.u(n2.f25302a), lazyArr[1].getValue(), a.u(PollMediaEmoji$$serializer.INSTANCE), a.u(z0.f25376a)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final PollMedia deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        String str;
        Set set;
        PollMediaEmoji pollMediaEmoji;
        Long l10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = PollMedia.$childSerializers;
        String str2 = null;
        if (b10.p()) {
            set = (Set) b10.y(serialDescriptor, 1, (DeserializationStrategy) lazyArr[1].getValue(), null);
            str = (String) b10.n(serialDescriptor, 0, n2.f25302a, null);
            l10 = (Long) b10.n(serialDescriptor, 3, z0.f25376a, null);
            pollMediaEmoji = (PollMediaEmoji) b10.n(serialDescriptor, 2, PollMediaEmoji$$serializer.INSTANCE, null);
            i10 = 15;
        } else {
            boolean z10 = true;
            int i11 = 0;
            Set set2 = null;
            PollMediaEmoji pollMediaEmoji2 = null;
            Long l11 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    str2 = (String) b10.n(serialDescriptor, 0, n2.f25302a, str2);
                    i11 |= 1;
                } else if (o10 == 1) {
                    set2 = (Set) b10.y(serialDescriptor, 1, (DeserializationStrategy) lazyArr[1].getValue(), set2);
                    i11 |= 2;
                } else if (o10 == 2) {
                    pollMediaEmoji2 = (PollMediaEmoji) b10.n(serialDescriptor, 2, PollMediaEmoji$$serializer.INSTANCE, pollMediaEmoji2);
                    i11 |= 4;
                } else if (o10 != 3) {
                    throw new b0(o10);
                } else {
                    l11 = (Long) b10.n(serialDescriptor, 3, z0.f25376a, l11);
                    i11 |= 8;
                }
            }
            i10 = i11;
            str = str2;
            set = set2;
            pollMediaEmoji = pollMediaEmoji2;
            l10 = l11;
        }
        b10.c(serialDescriptor);
        return new PollMedia(i10, str, set, pollMediaEmoji, l10, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull PollMedia value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        PollMedia.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
