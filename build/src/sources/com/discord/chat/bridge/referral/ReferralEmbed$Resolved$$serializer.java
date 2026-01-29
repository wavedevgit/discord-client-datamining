package com.discord.chat.bridge.referral;

import androidx.recyclerview.widget.RecyclerView;
import at.a2;
import at.h;
import at.h0;
import at.n2;
import at.p0;
import com.discord.chat.bridge.referral.ReferralEmbed;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableText;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableTextSerializer;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import ir.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
import xs.b0;
import ys.a;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/referral/ReferralEmbed.Resolved.$serializer", "Lat/h0;", "Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolved;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolved;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolved;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ReferralEmbed$Resolved$$serializer implements h0 {
    @NotNull
    public static final ReferralEmbed$Resolved$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ReferralEmbed$Resolved$$serializer referralEmbed$Resolved$$serializer = new ReferralEmbed$Resolved$$serializer();
        INSTANCE = referralEmbed$Resolved$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.referral.ReferralEmbed.Resolved", referralEmbed$Resolved$$serializer, 22);
        a2Var.o("headerText", false);
        a2Var.o("headerColor", false);
        a2Var.o(ViewProps.BACKGROUND_COLOR, false);
        a2Var.o("thumbnailCornerRadius", false);
        a2Var.o("headerLogoUrl", false);
        a2Var.o("headerUrl", true);
        a2Var.o("thumbnailUrl", true);
        a2Var.o("titleText", true);
        a2Var.o("titleColor", true);
        a2Var.o("bodyText", true);
        a2Var.o("structuredBodyText", true);
        a2Var.o("bodyTextColor", true);
        a2Var.o("linkButtonLabel", true);
        a2Var.o("linkButtonColor", true);
        a2Var.o("subText", true);
        a2Var.o("subTextColor", true);
        a2Var.o("footerText", true);
        a2Var.o("footerTextColor", true);
        a2Var.o("acceptLabelText", true);
        a2Var.o("acceptLabelColor", true);
        a2Var.o("acceptLabelIconUrl", true);
        a2Var.o("canBeAccepted", true);
        descriptor = a2Var;
    }

    private ReferralEmbed$Resolved$$serializer() {
    }

    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f6848a;
        p0 p0Var = p0.f6864a;
        KSerializer u10 = a.u(n2Var);
        KSerializer u11 = a.u(n2Var);
        KSerializer u12 = a.u(n2Var);
        KSerializer u13 = a.u(n2Var);
        KSerializer u14 = a.u(p0Var);
        KSerializer u15 = a.u(n2Var);
        AnnotatedStructurableTextSerializer annotatedStructurableTextSerializer = AnnotatedStructurableTextSerializer.INSTANCE;
        return new KSerializer[]{n2Var, p0Var, p0Var, p0Var, u10, u11, u12, u13, u14, u15, a.u(annotatedStructurableTextSerializer), a.u(p0Var), a.u(annotatedStructurableTextSerializer), a.u(p0Var), a.u(n2Var), a.u(p0Var), a.u(n2Var), a.u(p0Var), a.u(n2Var), a.u(p0Var), a.u(n2Var), a.u(h.f6812a)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ReferralEmbed.Resolved deserialize(@NotNull Decoder decoder) {
        String str;
        Integer num;
        String str2;
        Integer num2;
        String str3;
        Integer num3;
        int i10;
        Integer num4;
        String str4;
        Integer num5;
        AnnotatedStructurableText annotatedStructurableText;
        AnnotatedStructurableText annotatedStructurableText2;
        String str5;
        String str6;
        String str7;
        String str8;
        Integer num6;
        String str9;
        Boolean bool;
        String str10;
        int i11;
        int i12;
        int i13;
        AnnotatedStructurableText annotatedStructurableText3;
        int i14;
        String str11;
        Boolean bool2;
        AnnotatedStructurableText annotatedStructurableText4;
        String str12;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i15 = 0;
        Integer num7 = null;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            int i16 = b10.i(serialDescriptor, 1);
            int i17 = b10.i(serialDescriptor, 2);
            int i18 = b10.i(serialDescriptor, 3);
            n2 n2Var = n2.f6848a;
            String str13 = (String) b10.n(serialDescriptor, 5, n2Var, null);
            p0 p0Var = p0.f6864a;
            AnnotatedStructurableTextSerializer annotatedStructurableTextSerializer = AnnotatedStructurableTextSerializer.INSTANCE;
            Integer num8 = (Integer) b10.n(serialDescriptor, 11, p0Var, null);
            AnnotatedStructurableText annotatedStructurableText5 = (AnnotatedStructurableText) b10.n(serialDescriptor, 12, annotatedStructurableTextSerializer, null);
            String str14 = (String) b10.n(serialDescriptor, 14, n2Var, null);
            Integer num9 = (Integer) b10.n(serialDescriptor, 15, p0Var, null);
            String str15 = (String) b10.n(serialDescriptor, 16, n2Var, null);
            Integer num10 = (Integer) b10.n(serialDescriptor, 17, p0Var, null);
            String str16 = (String) b10.n(serialDescriptor, 18, n2Var, null);
            num = (Integer) b10.n(serialDescriptor, 19, p0Var, null);
            bool = (Boolean) b10.n(serialDescriptor, 21, h.f6812a, null);
            num5 = (Integer) b10.n(serialDescriptor, 13, p0Var, null);
            i11 = i18;
            str = (String) b10.n(serialDescriptor, 4, n2Var, null);
            num6 = (Integer) b10.n(serialDescriptor, 8, p0Var, null);
            i12 = i17;
            i13 = i16;
            str2 = (String) b10.n(serialDescriptor, 20, n2Var, null);
            i10 = 4194303;
            annotatedStructurableText2 = (AnnotatedStructurableText) b10.n(serialDescriptor, 10, annotatedStructurableTextSerializer, null);
            str9 = (String) b10.n(serialDescriptor, 9, n2Var, null);
            str8 = (String) b10.n(serialDescriptor, 7, n2Var, null);
            str7 = (String) b10.n(serialDescriptor, 6, n2Var, null);
            str3 = str16;
            num3 = num10;
            str4 = str15;
            num4 = num9;
            str10 = str14;
            annotatedStructurableText = annotatedStructurableText5;
            num2 = num8;
            str5 = m10;
            str6 = str13;
        } else {
            boolean z10 = true;
            int i19 = 0;
            int i20 = 0;
            int i21 = 0;
            String str17 = null;
            Boolean bool3 = null;
            Integer num11 = null;
            String str18 = null;
            Integer num12 = null;
            String str19 = null;
            Integer num13 = null;
            String str20 = null;
            Integer num14 = null;
            AnnotatedStructurableText annotatedStructurableText6 = null;
            AnnotatedStructurableText annotatedStructurableText7 = null;
            String str21 = null;
            String str22 = null;
            String str23 = null;
            String str24 = null;
            String str25 = null;
            String str26 = null;
            Integer num15 = null;
            while (z10) {
                String str27 = str21;
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        str11 = str17;
                        bool2 = bool3;
                        annotatedStructurableText4 = annotatedStructurableText7;
                        str12 = str27;
                        z10 = false;
                        annotatedStructurableText7 = annotatedStructurableText4;
                        str21 = str12;
                        bool3 = bool2;
                        str17 = str11;
                        break;
                    case 0:
                        str11 = str17;
                        bool2 = bool3;
                        annotatedStructurableText4 = annotatedStructurableText7;
                        str12 = str27;
                        str22 = b10.m(serialDescriptor, 0);
                        i15 |= 1;
                        annotatedStructurableText7 = annotatedStructurableText4;
                        str21 = str12;
                        bool3 = bool2;
                        str17 = str11;
                        break;
                    case 1:
                        str11 = str17;
                        bool2 = bool3;
                        annotatedStructurableText4 = annotatedStructurableText7;
                        str12 = str27;
                        i21 = b10.i(serialDescriptor, 1);
                        i15 |= 2;
                        annotatedStructurableText7 = annotatedStructurableText4;
                        str21 = str12;
                        bool3 = bool2;
                        str17 = str11;
                        break;
                    case 2:
                        str11 = str17;
                        bool2 = bool3;
                        annotatedStructurableText4 = annotatedStructurableText7;
                        str12 = str27;
                        i20 = b10.i(serialDescriptor, 2);
                        i15 |= 4;
                        annotatedStructurableText7 = annotatedStructurableText4;
                        str21 = str12;
                        bool3 = bool2;
                        str17 = str11;
                        break;
                    case 3:
                        str11 = str17;
                        bool2 = bool3;
                        annotatedStructurableText4 = annotatedStructurableText7;
                        str12 = str27;
                        i19 = b10.i(serialDescriptor, 3);
                        i15 |= 8;
                        annotatedStructurableText7 = annotatedStructurableText4;
                        str21 = str12;
                        bool3 = bool2;
                        str17 = str11;
                        break;
                    case 4:
                        str11 = str17;
                        bool2 = bool3;
                        str12 = str27;
                        str23 = (String) b10.n(serialDescriptor, 4, n2.f6848a, str23);
                        i15 |= 16;
                        annotatedStructurableText7 = annotatedStructurableText7;
                        str24 = str24;
                        str21 = str12;
                        bool3 = bool2;
                        str17 = str11;
                        break;
                    case 5:
                        str11 = str17;
                        bool2 = bool3;
                        str12 = str27;
                        str24 = (String) b10.n(serialDescriptor, 5, n2.f6848a, str24);
                        i15 |= 32;
                        annotatedStructurableText7 = annotatedStructurableText7;
                        str25 = str25;
                        str21 = str12;
                        bool3 = bool2;
                        str17 = str11;
                        break;
                    case 6:
                        str11 = str17;
                        bool2 = bool3;
                        str12 = str27;
                        str25 = (String) b10.n(serialDescriptor, 6, n2.f6848a, str25);
                        i15 |= 64;
                        annotatedStructurableText7 = annotatedStructurableText7;
                        str26 = str26;
                        str21 = str12;
                        bool3 = bool2;
                        str17 = str11;
                        break;
                    case 7:
                        str11 = str17;
                        bool2 = bool3;
                        str12 = str27;
                        str26 = (String) b10.n(serialDescriptor, 7, n2.f6848a, str26);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        annotatedStructurableText7 = annotatedStructurableText7;
                        num15 = num15;
                        str21 = str12;
                        bool3 = bool2;
                        str17 = str11;
                        break;
                    case 8:
                        str11 = str17;
                        bool2 = bool3;
                        annotatedStructurableText4 = annotatedStructurableText7;
                        str12 = str27;
                        num15 = (Integer) b10.n(serialDescriptor, 8, p0.f6864a, num15);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        annotatedStructurableText7 = annotatedStructurableText4;
                        str21 = str12;
                        bool3 = bool2;
                        str17 = str11;
                        break;
                    case 9:
                        str11 = str17;
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        annotatedStructurableText7 = annotatedStructurableText7;
                        bool3 = bool3;
                        str21 = (String) b10.n(serialDescriptor, 9, n2.f6848a, str27);
                        str17 = str11;
                        break;
                    case 10:
                        annotatedStructurableText7 = (AnnotatedStructurableText) b10.n(serialDescriptor, 10, AnnotatedStructurableTextSerializer.INSTANCE, annotatedStructurableText7);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        str17 = str17;
                        str21 = str27;
                        break;
                    case 11:
                        annotatedStructurableText3 = annotatedStructurableText7;
                        num12 = (Integer) b10.n(serialDescriptor, 11, p0.f6864a, num12);
                        i15 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        str21 = str27;
                        annotatedStructurableText7 = annotatedStructurableText3;
                        break;
                    case 12:
                        annotatedStructurableText3 = annotatedStructurableText7;
                        annotatedStructurableText6 = (AnnotatedStructurableText) b10.n(serialDescriptor, 12, AnnotatedStructurableTextSerializer.INSTANCE, annotatedStructurableText6);
                        i15 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                        str21 = str27;
                        annotatedStructurableText7 = annotatedStructurableText3;
                        break;
                    case 13:
                        annotatedStructurableText3 = annotatedStructurableText7;
                        num14 = (Integer) b10.n(serialDescriptor, 13, p0.f6864a, num14);
                        i15 |= 8192;
                        str21 = str27;
                        annotatedStructurableText7 = annotatedStructurableText3;
                        break;
                    case 14:
                        annotatedStructurableText3 = annotatedStructurableText7;
                        str17 = (String) b10.n(serialDescriptor, 14, n2.f6848a, str17);
                        i15 |= 16384;
                        str21 = str27;
                        annotatedStructurableText7 = annotatedStructurableText3;
                        break;
                    case 15:
                        annotatedStructurableText3 = annotatedStructurableText7;
                        num7 = (Integer) b10.n(serialDescriptor, 15, p0.f6864a, num7);
                        i14 = PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
                        i15 |= i14;
                        str21 = str27;
                        annotatedStructurableText7 = annotatedStructurableText3;
                        break;
                    case 16:
                        annotatedStructurableText3 = annotatedStructurableText7;
                        str20 = (String) b10.n(serialDescriptor, 16, n2.f6848a, str20);
                        i14 = 65536;
                        i15 |= i14;
                        str21 = str27;
                        annotatedStructurableText7 = annotatedStructurableText3;
                        break;
                    case 17:
                        annotatedStructurableText3 = annotatedStructurableText7;
                        num13 = (Integer) b10.n(serialDescriptor, 17, p0.f6864a, num13);
                        i14 = 131072;
                        i15 |= i14;
                        str21 = str27;
                        annotatedStructurableText7 = annotatedStructurableText3;
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        annotatedStructurableText3 = annotatedStructurableText7;
                        str19 = (String) b10.n(serialDescriptor, 18, n2.f6848a, str19);
                        i14 = 262144;
                        i15 |= i14;
                        str21 = str27;
                        annotatedStructurableText7 = annotatedStructurableText3;
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        annotatedStructurableText3 = annotatedStructurableText7;
                        num11 = (Integer) b10.n(serialDescriptor, 19, p0.f6864a, num11);
                        i14 = 524288;
                        i15 |= i14;
                        str21 = str27;
                        annotatedStructurableText7 = annotatedStructurableText3;
                        break;
                    case 20:
                        annotatedStructurableText3 = annotatedStructurableText7;
                        str18 = (String) b10.n(serialDescriptor, 20, n2.f6848a, str18);
                        i14 = 1048576;
                        i15 |= i14;
                        str21 = str27;
                        annotatedStructurableText7 = annotatedStructurableText3;
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        annotatedStructurableText3 = annotatedStructurableText7;
                        bool3 = (Boolean) b10.n(serialDescriptor, 21, h.f6812a, bool3);
                        i14 = 2097152;
                        i15 |= i14;
                        str21 = str27;
                        annotatedStructurableText7 = annotatedStructurableText3;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            str = str23;
            num = num11;
            str2 = str18;
            num2 = num12;
            str3 = str19;
            num3 = num13;
            i10 = i15;
            num4 = num7;
            str4 = str20;
            num5 = num14;
            annotatedStructurableText = annotatedStructurableText6;
            annotatedStructurableText2 = annotatedStructurableText7;
            str5 = str22;
            str6 = str24;
            str7 = str25;
            str8 = str26;
            num6 = num15;
            str9 = str21;
            bool = bool3;
            str10 = str17;
            i11 = i19;
            i12 = i20;
            i13 = i21;
        }
        b10.c(serialDescriptor);
        return new ReferralEmbed.Resolved(i10, str5, i13, i12, i11, str, str6, str7, str8, num6, str9, annotatedStructurableText2, num2, annotatedStructurableText, num5, str10, num4, str4, num3, str3, num, str2, bool, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ReferralEmbed.Resolved value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ReferralEmbed.Resolved.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
