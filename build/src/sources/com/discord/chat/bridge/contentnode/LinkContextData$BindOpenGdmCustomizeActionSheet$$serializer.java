package com.discord.chat.bridge.contentnode;

import at.a2;
import at.h0;
import at.n2;
import at.p0;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/contentnode/LinkContextData.BindOpenGdmCustomizeActionSheet.$serializer", "Lat/h0;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenGdmCustomizeActionSheet;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenGdmCustomizeActionSheet;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenGdmCustomizeActionSheet;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ir.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class LinkContextData$BindOpenGdmCustomizeActionSheet$$serializer implements h0 {
    @NotNull
    public static final LinkContextData$BindOpenGdmCustomizeActionSheet$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        LinkContextData$BindOpenGdmCustomizeActionSheet$$serializer linkContextData$BindOpenGdmCustomizeActionSheet$$serializer = new LinkContextData$BindOpenGdmCustomizeActionSheet$$serializer();
        INSTANCE = linkContextData$BindOpenGdmCustomizeActionSheet$$serializer;
        a2 a2Var = new a2("bindOpenGdmCustomizeActionSheet", linkContextData$BindOpenGdmCustomizeActionSheet$$serializer, 4);
        a2Var.o("action", false);
        a2Var.o("medium", true);
        a2Var.o("messageChannelId", false);
        a2Var.o("linkColor", true);
        a2Var.w(new LinkContextData$LinkContext$Companion$annotationImpl$kotlinx_serialization_json_JsonClassDiscriminator$0("action"));
        descriptor = a2Var;
    }

    private LinkContextData$BindOpenGdmCustomizeActionSheet$$serializer() {
    }

    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        KSerializer u10 = ys.a.u(at.h.f6812a);
        KSerializer u11 = ys.a.u(p0.f6864a);
        n2 n2Var = n2.f6848a;
        return new KSerializer[]{n2Var, u10, n2Var, u11};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final LinkContextData.BindOpenGdmCustomizeActionSheet deserialize(@NotNull Decoder decoder) {
        int i10;
        String str;
        Boolean bool;
        String str2;
        Integer num;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        String str3 = null;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            String m11 = b10.m(serialDescriptor, 2);
            str = m10;
            num = (Integer) b10.n(serialDescriptor, 3, p0.f6864a, null);
            str2 = m11;
            bool = (Boolean) b10.n(serialDescriptor, 1, at.h.f6812a, null);
            i10 = 15;
        } else {
            boolean z10 = true;
            int i11 = 0;
            Boolean bool2 = null;
            String str4 = null;
            Integer num2 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    str3 = b10.m(serialDescriptor, 0);
                    i11 |= 1;
                } else if (o10 == 1) {
                    bool2 = (Boolean) b10.n(serialDescriptor, 1, at.h.f6812a, bool2);
                    i11 |= 2;
                } else if (o10 == 2) {
                    str4 = b10.m(serialDescriptor, 2);
                    i11 |= 4;
                } else if (o10 != 3) {
                    throw new b0(o10);
                } else {
                    num2 = (Integer) b10.n(serialDescriptor, 3, p0.f6864a, num2);
                    i11 |= 8;
                }
            }
            i10 = i11;
            str = str3;
            bool = bool2;
            str2 = str4;
            num = num2;
        }
        b10.c(serialDescriptor);
        return new LinkContextData.BindOpenGdmCustomizeActionSheet(i10, str, bool, str2, num, null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull LinkContextData.BindOpenGdmCustomizeActionSheet value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        LinkContextData.BindOpenGdmCustomizeActionSheet.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
