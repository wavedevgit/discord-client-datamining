package com.discord.chat.bridge.contentnode;

import at.a2;
import at.h0;
import at.n2;
import com.discord.chat.bridge.contentnode.LinkContextData;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import xs.b0;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/contentnode/LinkContextData.BindJoinStream.$serializer", "Lat/h0;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ir.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class LinkContextData$BindJoinStream$$serializer implements h0 {
    @NotNull
    public static final LinkContextData$BindJoinStream$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        LinkContextData$BindJoinStream$$serializer linkContextData$BindJoinStream$$serializer = new LinkContextData$BindJoinStream$$serializer();
        INSTANCE = linkContextData$BindJoinStream$$serializer;
        a2 a2Var = new a2("bindJoinStream", linkContextData$BindJoinStream$$serializer, 3);
        a2Var.o("action", false);
        a2Var.o("medium", true);
        a2Var.o("stream", false);
        a2Var.w(new LinkContextData$LinkContext$Companion$annotationImpl$kotlinx_serialization_json_JsonClassDiscriminator$0("action"));
        descriptor = a2Var;
    }

    private LinkContextData$BindJoinStream$$serializer() {
    }

    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        return new KSerializer[]{n2.f6848a, ys.a.u(at.h.f6812a), LinkContextData$BindJoinStream$ApplicationStream$$serializer.INSTANCE};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final LinkContextData.BindJoinStream deserialize(@NotNull Decoder decoder) {
        int i10;
        String str;
        Boolean bool;
        LinkContextData.BindJoinStream.ApplicationStream applicationStream;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        String str2 = null;
        if (b10.p()) {
            str = b10.m(serialDescriptor, 0);
            applicationStream = (LinkContextData.BindJoinStream.ApplicationStream) b10.y(serialDescriptor, 2, LinkContextData$BindJoinStream$ApplicationStream$$serializer.INSTANCE, null);
            bool = (Boolean) b10.n(serialDescriptor, 1, at.h.f6812a, null);
            i10 = 7;
        } else {
            boolean z10 = true;
            int i11 = 0;
            Boolean bool2 = null;
            LinkContextData.BindJoinStream.ApplicationStream applicationStream2 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    str2 = b10.m(serialDescriptor, 0);
                    i11 |= 1;
                } else if (o10 == 1) {
                    bool2 = (Boolean) b10.n(serialDescriptor, 1, at.h.f6812a, bool2);
                    i11 |= 2;
                } else if (o10 != 2) {
                    throw new b0(o10);
                } else {
                    applicationStream2 = (LinkContextData.BindJoinStream.ApplicationStream) b10.y(serialDescriptor, 2, LinkContextData$BindJoinStream$ApplicationStream$$serializer.INSTANCE, applicationStream2);
                    i11 |= 4;
                }
            }
            i10 = i11;
            str = str2;
            bool = bool2;
            applicationStream = applicationStream2;
        }
        b10.c(serialDescriptor);
        return new LinkContextData.BindJoinStream(i10, str, bool, applicationStream, null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull LinkContextData.BindJoinStream value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        LinkContextData.BindJoinStream.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
