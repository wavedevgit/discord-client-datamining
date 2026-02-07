package com.discord.chat.bridge.channelprompt;

import ft.b0;
import gt.a;
import jt.a2;
import jt.h0;
import jt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import qr.c;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/channelprompt/ChannelPromptData.$serializer", "Ljt/h0;", "Lcom/discord/chat/bridge/channelprompt/ChannelPromptData;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/channelprompt/ChannelPromptData;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/channelprompt/ChannelPromptData;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ChannelPromptData$$serializer implements h0 {
    @NotNull
    public static final ChannelPromptData$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ChannelPromptData$$serializer channelPromptData$$serializer = new ChannelPromptData$$serializer();
        INSTANCE = channelPromptData$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.channelprompt.ChannelPromptData", channelPromptData$$serializer, 7);
        a2Var.o("cameraButtonIcon", true);
        a2Var.o("gifButtonIcon", true);
        a2Var.o("emojiButtonIcon", true);
        a2Var.o("gamingStatsButtonText", true);
        a2Var.o("cameraButtonText", true);
        a2Var.o("gifButtonText", true);
        a2Var.o("emojiButtonText", true);
        descriptor = a2Var;
    }

    private ChannelPromptData$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f31089a;
        return new KSerializer[]{a.u(n2Var), a.u(n2Var), a.u(n2Var), a.u(n2Var), a.u(n2Var), a.u(n2Var), a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ChannelPromptData deserialize(@NotNull Decoder decoder) {
        int i10;
        String str;
        String str2;
        String str3;
        String str4;
        String str5;
        String str6;
        String str7;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i11 = 6;
        String str8 = null;
        if (b10.p()) {
            n2 n2Var = n2.f31089a;
            str = (String) b10.n(serialDescriptor, 6, n2Var, null);
            i10 = 127;
            str7 = (String) b10.n(serialDescriptor, 5, n2Var, null);
            str5 = (String) b10.n(serialDescriptor, 3, n2Var, null);
            str6 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            str4 = (String) b10.n(serialDescriptor, 2, n2Var, null);
            str3 = (String) b10.n(serialDescriptor, 1, n2Var, null);
            str2 = (String) b10.n(serialDescriptor, 0, n2Var, null);
        } else {
            boolean z10 = true;
            int i12 = 0;
            String str9 = null;
            String str10 = null;
            String str11 = null;
            String str12 = null;
            String str13 = null;
            String str14 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i11 = 6;
                        break;
                    case 0:
                        str8 = (String) b10.n(serialDescriptor, 0, n2.f31089a, str8);
                        i12 |= 1;
                        i11 = 6;
                        break;
                    case 1:
                        str10 = (String) b10.n(serialDescriptor, 1, n2.f31089a, str10);
                        i12 |= 2;
                        i11 = 6;
                        continue;
                    case 2:
                        str11 = (String) b10.n(serialDescriptor, 2, n2.f31089a, str11);
                        i12 |= 4;
                        break;
                    case 3:
                        str12 = (String) b10.n(serialDescriptor, 3, n2.f31089a, str12);
                        i12 |= 8;
                        break;
                    case 4:
                        str13 = (String) b10.n(serialDescriptor, 4, n2.f31089a, str13);
                        i12 |= 16;
                        break;
                    case 5:
                        str14 = (String) b10.n(serialDescriptor, 5, n2.f31089a, str14);
                        i12 |= 32;
                        break;
                    case 6:
                        str9 = (String) b10.n(serialDescriptor, i11, n2.f31089a, str9);
                        i12 |= 64;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i12;
            str = str9;
            str2 = str8;
            str3 = str10;
            str4 = str11;
            str5 = str12;
            str6 = str13;
            str7 = str14;
        }
        b10.c(serialDescriptor);
        return new ChannelPromptData(i10, str2, str3, str4, str5, str6, str7, str, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ChannelPromptData value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ChannelPromptData.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
