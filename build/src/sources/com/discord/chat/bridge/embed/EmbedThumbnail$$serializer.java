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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/embed/EmbedThumbnail.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/embed/EmbedThumbnail;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/embed/EmbedThumbnail;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/embed/EmbedThumbnail;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class EmbedThumbnail$$serializer implements h0 {
    @NotNull
    public static final EmbedThumbnail$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        EmbedThumbnail$$serializer embedThumbnail$$serializer = new EmbedThumbnail$$serializer();
        INSTANCE = embedThumbnail$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.embed.EmbedThumbnail", embedThumbnail$$serializer, 11);
        a2Var.o("url", false);
        a2Var.o("proxyURL", true);
        a2Var.o("videoUrl", true);
        a2Var.o("height", false);
        a2Var.o("width", false);
        a2Var.o("gifv", true);
        a2Var.o("showPlayButton", true);
        a2Var.o(ReactTextInputShadowNode.PROP_PLACEHOLDER, true);
        a2Var.o("placeholderVersion", true);
        a2Var.o("srcIsAnimated", true);
        a2Var.o("embedUrl", true);
        descriptor = a2Var;
    }

    private EmbedThumbnail$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f20978a;
        KSerializer u10 = bt.a.u(n2Var);
        KSerializer u11 = bt.a.u(n2Var);
        p0 p0Var = p0.f20994a;
        dt.h hVar = dt.h.f20942a;
        return new KSerializer[]{n2Var, u10, u11, p0Var, p0Var, bt.a.u(hVar), bt.a.u(hVar), bt.a.u(n2Var), bt.a.u(p0Var), hVar, n2Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final EmbedThumbnail deserialize(@NotNull Decoder decoder) {
        boolean z10;
        String str;
        Integer num;
        Boolean bool;
        String str2;
        Boolean bool2;
        String str3;
        int i10;
        int i11;
        String str4;
        String str5;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i12 = 10;
        int i13 = 9;
        int i14 = 7;
        int i15 = 0;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            n2 n2Var = n2.f20978a;
            int i16 = b10.i(serialDescriptor, 3);
            int i17 = b10.i(serialDescriptor, 4);
            dt.h hVar = dt.h.f20942a;
            boolean C = b10.C(serialDescriptor, 9);
            i15 = 2047;
            str4 = m10;
            str5 = b10.m(serialDescriptor, 10);
            z10 = C;
            str2 = (String) b10.n(serialDescriptor, 7, n2Var, null);
            bool = (Boolean) b10.n(serialDescriptor, 6, hVar, null);
            bool2 = (Boolean) b10.n(serialDescriptor, 5, hVar, null);
            i10 = i16;
            num = (Integer) b10.n(serialDescriptor, 8, p0.f20994a, null);
            i11 = i17;
            str3 = (String) b10.n(serialDescriptor, 2, n2Var, null);
            str = (String) b10.n(serialDescriptor, 1, n2Var, null);
        } else {
            boolean z11 = true;
            boolean z12 = false;
            int i18 = 0;
            Integer num2 = null;
            Boolean bool3 = null;
            String str6 = null;
            Boolean bool4 = null;
            String str7 = null;
            String str8 = null;
            String str9 = null;
            String str10 = null;
            int i19 = 0;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        i12 = 10;
                        i13 = 9;
                        break;
                    case 0:
                        str8 = b10.m(serialDescriptor, 0);
                        i15 |= 1;
                        i12 = 10;
                        i13 = 9;
                        i14 = 7;
                        break;
                    case 1:
                        i15 |= 2;
                        str9 = (String) b10.n(serialDescriptor, 1, n2.f20978a, str9);
                        i12 = 10;
                        i13 = 9;
                        i14 = 7;
                        break;
                    case 2:
                        str7 = (String) b10.n(serialDescriptor, 2, n2.f20978a, str7);
                        i15 |= 4;
                        i12 = 10;
                        i13 = 9;
                        break;
                    case 3:
                        i15 |= 8;
                        i19 = b10.i(serialDescriptor, 3);
                        i12 = 10;
                        break;
                    case 4:
                        i18 = b10.i(serialDescriptor, 4);
                        i15 |= 16;
                        i12 = 10;
                        break;
                    case 5:
                        bool4 = (Boolean) b10.n(serialDescriptor, 5, dt.h.f20942a, bool4);
                        i15 |= 32;
                        i12 = 10;
                        break;
                    case 6:
                        bool3 = (Boolean) b10.n(serialDescriptor, 6, dt.h.f20942a, bool3);
                        i15 |= 64;
                        i12 = 10;
                        continue;
                    case 7:
                        str6 = (String) b10.n(serialDescriptor, i14, n2.f20978a, str6);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        num2 = (Integer) b10.n(serialDescriptor, 8, p0.f20994a, num2);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    case 9:
                        z12 = b10.C(serialDescriptor, i13);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        break;
                    case 10:
                        str10 = b10.m(serialDescriptor, i12);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            z10 = z12;
            str = str9;
            num = num2;
            bool = bool3;
            str2 = str6;
            bool2 = bool4;
            str3 = str7;
            i10 = i19;
            i11 = i18;
            str4 = str8;
            str5 = str10;
        }
        int i20 = i15;
        b10.c(serialDescriptor);
        return new EmbedThumbnail(i20, str4, str, str3, i10, i11, bool2, bool, str2, num, z10, str5, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull EmbedThumbnail value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        EmbedThumbnail.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
