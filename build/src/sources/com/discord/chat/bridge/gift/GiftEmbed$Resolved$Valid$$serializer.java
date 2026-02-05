package com.discord.chat.bridge.gift;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.gift.GiftEmbed;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import dt.b0;
import et.a;
import gt.a2;
import gt.g0;
import gt.h;
import gt.h0;
import gt.n2;
import gt.p0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import or.c;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/gift/GiftEmbed.Resolved.Valid.$serializer", "Lgt/h0;", "Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Valid;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Valid;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Valid;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class GiftEmbed$Resolved$Valid$$serializer implements h0 {
    @NotNull
    public static final GiftEmbed$Resolved$Valid$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        GiftEmbed$Resolved$Valid$$serializer giftEmbed$Resolved$Valid$$serializer = new GiftEmbed$Resolved$Valid$$serializer();
        INSTANCE = giftEmbed$Resolved$Valid$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.gift.GiftEmbed.Resolved.Valid", giftEmbed$Resolved$Valid$$serializer, 18);
        a2Var.o("headerText", false);
        a2Var.o("headerColor", false);
        a2Var.o(ViewProps.BACKGROUND_COLOR, false);
        a2Var.o("thumbnailCornerRadius", false);
        a2Var.o("thumbnailUrl", true);
        a2Var.o("titleText", true);
        a2Var.o("titleColor", false);
        a2Var.o("subtitle", true);
        a2Var.o("subtitleColor", false);
        a2Var.o("bodyText", true);
        a2Var.o("bodyTextColor", false);
        a2Var.o("acceptLabelText", true);
        a2Var.o("acceptLabelColor", false);
        a2Var.o("acceptLabelBackgroundColor", false);
        a2Var.o("splashUrl", true);
        a2Var.o("splashOpacity", false);
        a2Var.o("canBeAccepted", false);
        a2Var.o("giftCode", false);
        descriptor = a2Var;
    }

    private GiftEmbed$Resolved$Valid$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f25302a;
        KSerializer u10 = a.u(n2Var);
        KSerializer u11 = a.u(n2Var);
        KSerializer u12 = a.u(n2Var);
        KSerializer u13 = a.u(n2Var);
        KSerializer u14 = a.u(n2Var);
        KSerializer u15 = a.u(n2Var);
        p0 p0Var = p0.f25318a;
        return new KSerializer[]{n2Var, p0Var, p0Var, p0Var, u10, u11, p0Var, u12, p0Var, u13, p0Var, u14, p0Var, p0Var, u15, g0.f25262a, h.f25266a, n2Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final GiftEmbed.Resolved.Valid deserialize(@NotNull Decoder decoder) {
        String str;
        String str2;
        int i10;
        String str3;
        int i11;
        String str4;
        String str5;
        String str6;
        int i12;
        int i13;
        int i14;
        int i15;
        float f10;
        String str7;
        int i16;
        String str8;
        int i17;
        int i18;
        boolean z10;
        char c10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i19 = 8;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            int i20 = b10.i(serialDescriptor, 1);
            int i21 = b10.i(serialDescriptor, 2);
            int i22 = b10.i(serialDescriptor, 3);
            n2 n2Var = n2.f25302a;
            int i23 = b10.i(serialDescriptor, 6);
            int i24 = b10.i(serialDescriptor, 8);
            int i25 = b10.i(serialDescriptor, 10);
            int i26 = b10.i(serialDescriptor, 12);
            int i27 = b10.i(serialDescriptor, 13);
            float u10 = b10.u(serialDescriptor, 15);
            boolean C = b10.C(serialDescriptor, 16);
            str4 = (String) b10.n(serialDescriptor, 14, n2Var, null);
            i12 = i24;
            i13 = i21;
            str8 = b10.m(serialDescriptor, 17);
            f10 = u10;
            i16 = i26;
            str6 = (String) b10.n(serialDescriptor, 11, n2Var, null);
            i17 = i25;
            str5 = (String) b10.n(serialDescriptor, 9, n2Var, null);
            str2 = (String) b10.n(serialDescriptor, 7, n2Var, null);
            i18 = i23;
            str = (String) b10.n(serialDescriptor, 5, n2Var, null);
            z10 = C;
            str3 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            i14 = i20;
            i11 = 262143;
            i15 = i22;
            i10 = i27;
            str7 = m10;
        } else {
            int i28 = 17;
            boolean z11 = true;
            String str9 = null;
            String str10 = null;
            String str11 = null;
            String str12 = null;
            String str13 = null;
            String str14 = null;
            String str15 = null;
            int i29 = 0;
            int i30 = 0;
            int i31 = 0;
            int i32 = 0;
            int i33 = 0;
            int i34 = 0;
            int i35 = 0;
            boolean z12 = false;
            float f11 = 0.0f;
            String str16 = null;
            int i36 = 0;
            int i37 = 0;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        i19 = 8;
                    case 0:
                        str14 = b10.m(serialDescriptor, 0);
                        i29 |= 1;
                        i19 = 8;
                        i28 = 17;
                    case 1:
                        i31 = b10.i(serialDescriptor, 1);
                        i29 |= 2;
                        i19 = 8;
                        i28 = 17;
                    case 2:
                        i30 = b10.i(serialDescriptor, 2);
                        i29 |= 4;
                        i19 = 8;
                        i28 = 17;
                    case 3:
                        i32 = b10.i(serialDescriptor, 3);
                        i29 |= 8;
                        i19 = 8;
                        i28 = 17;
                    case 4:
                        str16 = (String) b10.n(serialDescriptor, 4, n2.f25302a, str16);
                        i29 |= 16;
                        i19 = 8;
                        i28 = 17;
                    case 5:
                        str9 = (String) b10.n(serialDescriptor, 5, n2.f25302a, str9);
                        i29 |= 32;
                        i19 = 8;
                        i28 = 17;
                    case 6:
                        c10 = 7;
                        i35 = b10.i(serialDescriptor, 6);
                        i29 |= 64;
                        i19 = 8;
                        i28 = 17;
                    case 7:
                        c10 = 7;
                        str10 = (String) b10.n(serialDescriptor, 7, n2.f25302a, str10);
                        i29 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        i19 = 8;
                        i28 = 17;
                    case 8:
                        i37 = b10.i(serialDescriptor, i19);
                        i29 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        i28 = 17;
                    case 9:
                        str12 = (String) b10.n(serialDescriptor, 9, n2.f25302a, str12);
                        i29 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        i28 = 17;
                    case 10:
                        i34 = b10.i(serialDescriptor, 10);
                        i29 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        i28 = 17;
                    case 11:
                        str13 = (String) b10.n(serialDescriptor, 11, n2.f25302a, str13);
                        i29 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        i28 = 17;
                    case 12:
                        i33 = b10.i(serialDescriptor, 12);
                        i29 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                        i28 = 17;
                    case 13:
                        i36 = b10.i(serialDescriptor, 13);
                        i29 |= 8192;
                        i28 = 17;
                    case 14:
                        str11 = (String) b10.n(serialDescriptor, 14, n2.f25302a, str11);
                        i29 |= 16384;
                        i28 = 17;
                    case 15:
                        f11 = b10.u(serialDescriptor, 15);
                        i29 |= PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
                        i28 = 17;
                    case 16:
                        z12 = b10.C(serialDescriptor, 16);
                        i29 |= 65536;
                    case 17:
                        str15 = b10.m(serialDescriptor, i28);
                        i29 |= 131072;
                    default:
                        throw new b0(o10);
                }
            }
            str = str9;
            str2 = str10;
            i10 = i36;
            str3 = str16;
            i11 = i29;
            str4 = str11;
            str5 = str12;
            str6 = str13;
            i12 = i37;
            i13 = i30;
            i14 = i31;
            i15 = i32;
            f10 = f11;
            str7 = str14;
            i16 = i33;
            str8 = str15;
            i17 = i34;
            i18 = i35;
            z10 = z12;
        }
        b10.c(serialDescriptor);
        return new GiftEmbed.Resolved.Valid(i11, str7, i14, i13, i15, str3, str, i18, str2, i12, str5, i17, str6, i16, i10, str4, f10, z10, str8, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull GiftEmbed.Resolved.Valid value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        GiftEmbed.Resolved.Valid.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
