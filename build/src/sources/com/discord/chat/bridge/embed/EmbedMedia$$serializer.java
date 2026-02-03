package com.discord.chat.bridge.embed;

import at.b0;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import dt.a2;
import dt.h0;
import dt.n2;
import dt.p0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/embed/EmbedMedia.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/embed/EmbedMedia;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/embed/EmbedMedia;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/embed/EmbedMedia;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class EmbedMedia$$serializer implements h0 {
    @NotNull
    public static final EmbedMedia$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        EmbedMedia$$serializer embedMedia$$serializer = new EmbedMedia$$serializer();
        INSTANCE = embedMedia$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.embed.EmbedMedia", embedMedia$$serializer, 9);
        a2Var.o("url", false);
        a2Var.o("proxyURL", true);
        a2Var.o("width", false);
        a2Var.o("height", false);
        a2Var.o(ReactTextInputShadowNode.PROP_PLACEHOLDER, true);
        a2Var.o("placeholderVersion", true);
        a2Var.o("srcIsAnimated", false);
        a2Var.o("contentType", true);
        a2Var.o("embedUrl", true);
        descriptor = a2Var;
    }

    private EmbedMedia$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f20978a;
        KSerializer u10 = bt.a.u(n2Var);
        p0 p0Var = p0.f20994a;
        return new KSerializer[]{n2Var, u10, p0Var, p0Var, bt.a.u(n2Var), bt.a.u(p0Var), dt.h.f20942a, bt.a.u(n2Var), n2Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final EmbedMedia deserialize(@NotNull Decoder decoder) {
        boolean z10;
        String str;
        Integer num;
        String str2;
        String str3;
        int i10;
        int i11;
        int i12;
        String str4;
        String str5;
        char c10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i13 = 7;
        int i14 = 6;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            n2 n2Var = n2.f20978a;
            int i15 = b10.i(serialDescriptor, 2);
            int i16 = b10.i(serialDescriptor, 3);
            boolean C = b10.C(serialDescriptor, 6);
            str4 = m10;
            str = (String) b10.n(serialDescriptor, 7, n2Var, null);
            z10 = C;
            num = (Integer) b10.n(serialDescriptor, 5, p0.f20994a, null);
            i10 = i16;
            str5 = b10.m(serialDescriptor, 8);
            str2 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            i11 = i15;
            str3 = (String) b10.n(serialDescriptor, 1, n2Var, null);
            i12 = 511;
        } else {
            boolean z11 = true;
            boolean z12 = false;
            int i17 = 0;
            int i18 = 0;
            String str6 = null;
            Integer num2 = null;
            String str7 = null;
            String str8 = null;
            String str9 = null;
            int i19 = 0;
            String str10 = null;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        i13 = 7;
                    case 0:
                        str8 = b10.m(serialDescriptor, 0);
                        i18 |= 1;
                        i13 = 7;
                        i14 = 6;
                    case 1:
                        str10 = (String) b10.n(serialDescriptor, 1, n2.f20978a, str10);
                        i18 |= 2;
                        i13 = 7;
                        i14 = 6;
                    case 2:
                        i18 |= 4;
                        i17 = b10.i(serialDescriptor, 2);
                        i13 = 7;
                    case 3:
                        c10 = 4;
                        i19 = b10.i(serialDescriptor, 3);
                        i18 |= 8;
                        i13 = 7;
                    case 4:
                        c10 = 4;
                        str7 = (String) b10.n(serialDescriptor, 4, n2.f20978a, str7);
                        i18 |= 16;
                        i13 = 7;
                    case 5:
                        num2 = (Integer) b10.n(serialDescriptor, 5, p0.f20994a, num2);
                        i18 |= 32;
                    case 6:
                        z12 = b10.C(serialDescriptor, i14);
                        i18 |= 64;
                    case 7:
                        str6 = (String) b10.n(serialDescriptor, i13, n2.f20978a, str6);
                        i18 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    case 8:
                        str9 = b10.m(serialDescriptor, 8);
                        i18 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                    default:
                        throw new b0(o10);
                }
            }
            z10 = z12;
            str = str6;
            num = num2;
            str2 = str7;
            str3 = str10;
            i10 = i19;
            i11 = i17;
            i12 = i18;
            str4 = str8;
            str5 = str9;
        }
        b10.c(serialDescriptor);
        return new EmbedMedia(i12, str4, str3, i11, i10, str2, num, z10, str, str5, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull EmbedMedia value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        EmbedMedia.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
