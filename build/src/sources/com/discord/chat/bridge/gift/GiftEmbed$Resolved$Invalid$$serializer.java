package com.discord.chat.bridge.gift;

import bt.a2;
import bt.h0;
import bt.n2;
import bt.p0;
import com.discord.chat.bridge.gift.GiftEmbed;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import jr.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import ys.b0;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/gift/GiftEmbed.Resolved.Invalid.$serializer", "Lbt/h0;", "Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Invalid;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Invalid;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Invalid;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class GiftEmbed$Resolved$Invalid$$serializer implements h0 {
    @NotNull
    public static final GiftEmbed$Resolved$Invalid$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        GiftEmbed$Resolved$Invalid$$serializer giftEmbed$Resolved$Invalid$$serializer = new GiftEmbed$Resolved$Invalid$$serializer();
        INSTANCE = giftEmbed$Resolved$Invalid$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.gift.GiftEmbed.Resolved.Invalid", giftEmbed$Resolved$Invalid$$serializer, 10);
        a2Var.o("headerText", false);
        a2Var.o("headerColor", false);
        a2Var.o(ViewProps.BACKGROUND_COLOR, false);
        a2Var.o("thumbnailCornerRadius", false);
        a2Var.o("thumbnailUrl", false);
        a2Var.o("titleText", false);
        a2Var.o("titleColor", false);
        a2Var.o("subtitle", false);
        a2Var.o("subtitleColor", false);
        a2Var.o("thumbnailBackgroundColor", false);
        descriptor = a2Var;
    }

    private GiftEmbed$Resolved$Invalid$$serializer() {
    }

    @Override // bt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f7662a;
        p0 p0Var = p0.f7678a;
        return new KSerializer[]{n2Var, p0Var, p0Var, p0Var, n2Var, n2Var, p0Var, n2Var, p0Var, p0Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final GiftEmbed.Resolved.Invalid deserialize(@NotNull Decoder decoder) {
        String str;
        int i10;
        String str2;
        int i11;
        String str3;
        int i12;
        int i13;
        String str4;
        int i14;
        int i15;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i16 = 0;
        if (b10.p()) {
            str = b10.m(serialDescriptor, 0);
            int i17 = b10.i(serialDescriptor, 1);
            int i18 = b10.i(serialDescriptor, 2);
            int i19 = b10.i(serialDescriptor, 3);
            String m10 = b10.m(serialDescriptor, 4);
            String m11 = b10.m(serialDescriptor, 5);
            int i20 = b10.i(serialDescriptor, 6);
            String m12 = b10.m(serialDescriptor, 7);
            int i21 = b10.i(serialDescriptor, 8);
            i16 = 1023;
            i10 = b10.i(serialDescriptor, 9);
            str2 = m12;
            i11 = i20;
            str3 = m11;
            i12 = i19;
            i13 = i21;
            str4 = m10;
            i14 = i18;
            i15 = i17;
        } else {
            str = null;
            String str5 = null;
            String str6 = null;
            String str7 = null;
            boolean z10 = true;
            int i22 = 0;
            int i23 = 0;
            int i24 = 0;
            int i25 = 0;
            int i26 = 0;
            int i27 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        break;
                    case 0:
                        i16 |= 1;
                        str = b10.m(serialDescriptor, 0);
                        continue;
                    case 1:
                        i27 = b10.i(serialDescriptor, 1);
                        i16 |= 2;
                        continue;
                    case 2:
                        i26 = b10.i(serialDescriptor, 2);
                        i16 |= 4;
                        break;
                    case 3:
                        i24 = b10.i(serialDescriptor, 3);
                        i16 |= 8;
                        break;
                    case 4:
                        str7 = b10.m(serialDescriptor, 4);
                        i16 |= 16;
                        break;
                    case 5:
                        str6 = b10.m(serialDescriptor, 5);
                        i16 |= 32;
                        break;
                    case 6:
                        i23 = b10.i(serialDescriptor, 6);
                        i16 |= 64;
                        break;
                    case 7:
                        str5 = b10.m(serialDescriptor, 7);
                        i16 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        i25 = b10.i(serialDescriptor, 8);
                        i16 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    case 9:
                        i22 = b10.i(serialDescriptor, 9);
                        i16 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i22;
            str2 = str5;
            i11 = i23;
            str3 = str6;
            i12 = i24;
            i13 = i25;
            str4 = str7;
            i14 = i26;
            i15 = i27;
        }
        String str8 = str;
        int i28 = i16;
        b10.c(serialDescriptor);
        return new GiftEmbed.Resolved.Invalid(i28, str8, i15, i14, i12, str4, str3, i11, str2, i13, i10, null);
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ys.o
    public final void serialize(@NotNull Encoder encoder, @NotNull GiftEmbed.Resolved.Invalid value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        GiftEmbed.Resolved.Invalid.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // bt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
