package com.discord.chat.bridge.gift;

import at.b0;
import com.discord.chat.bridge.gift.GiftEmbed;
import com.facebook.react.uimanager.ViewProps;
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
import lr.c;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/gift/GiftEmbed.Resolving.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/gift/GiftEmbed$Resolving;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/gift/GiftEmbed$Resolving;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/gift/GiftEmbed$Resolving;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class GiftEmbed$Resolving$$serializer implements h0 {
    @NotNull
    public static final GiftEmbed$Resolving$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        GiftEmbed$Resolving$$serializer giftEmbed$Resolving$$serializer = new GiftEmbed$Resolving$$serializer();
        INSTANCE = giftEmbed$Resolving$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.gift.GiftEmbed.Resolving", giftEmbed$Resolving$$serializer, 6);
        a2Var.o("headerText", false);
        a2Var.o("headerColor", false);
        a2Var.o(ViewProps.BACKGROUND_COLOR, false);
        a2Var.o("thumbnailCornerRadius", false);
        a2Var.o("resolvingGradientStart", false);
        a2Var.o("resolvingGradientEnd", false);
        descriptor = a2Var;
    }

    private GiftEmbed$Resolving$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        p0 p0Var = p0.f20994a;
        return new KSerializer[]{n2.f20978a, p0Var, p0Var, p0Var, p0Var, p0Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final GiftEmbed.Resolving deserialize(@NotNull Decoder decoder) {
        String str;
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            str = b10.m(serialDescriptor, 0);
            int i16 = b10.i(serialDescriptor, 1);
            int i17 = b10.i(serialDescriptor, 2);
            int i18 = b10.i(serialDescriptor, 3);
            int i19 = b10.i(serialDescriptor, 4);
            i10 = b10.i(serialDescriptor, 5);
            i11 = i18;
            i12 = i19;
            i13 = i17;
            i14 = i16;
            i15 = 63;
        } else {
            str = null;
            boolean z10 = true;
            int i20 = 0;
            int i21 = 0;
            int i22 = 0;
            int i23 = 0;
            int i24 = 0;
            int i25 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        continue;
                    case 0:
                        str = b10.m(serialDescriptor, 0);
                        i25 |= 1;
                        continue;
                    case 1:
                        i24 = b10.i(serialDescriptor, 1);
                        i25 |= 2;
                        break;
                    case 2:
                        i23 = b10.i(serialDescriptor, 2);
                        i25 |= 4;
                        break;
                    case 3:
                        i21 = b10.i(serialDescriptor, 3);
                        i25 |= 8;
                        break;
                    case 4:
                        i22 = b10.i(serialDescriptor, 4);
                        i25 |= 16;
                        break;
                    case 5:
                        i20 = b10.i(serialDescriptor, 5);
                        i25 |= 32;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i20;
            i11 = i21;
            i12 = i22;
            i13 = i23;
            i14 = i24;
            i15 = i25;
        }
        String str2 = str;
        b10.c(serialDescriptor);
        return new GiftEmbed.Resolving(i15, str2, i14, i13, i11, i12, i10, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull GiftEmbed.Resolving value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        GiftEmbed.Resolving.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
