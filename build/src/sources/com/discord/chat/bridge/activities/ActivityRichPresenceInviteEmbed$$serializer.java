package com.discord.chat.bridge.activities;

import androidx.recyclerview.widget.RecyclerView;
import at.b0;
import bt.a;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.bridge.structurabletext.StructurableTextSerializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dt.a2;
import dt.h;
import dt.h0;
import dt.n2;
import dt.p0;
import java.util.List;
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
import lr.c;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/activities/ActivityRichPresenceInviteEmbed.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/activities/ActivityRichPresenceInviteEmbed;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/activities/ActivityRichPresenceInviteEmbed;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/activities/ActivityRichPresenceInviteEmbed;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ActivityRichPresenceInviteEmbed$$serializer implements h0 {
    @NotNull
    public static final ActivityRichPresenceInviteEmbed$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ActivityRichPresenceInviteEmbed$$serializer activityRichPresenceInviteEmbed$$serializer = new ActivityRichPresenceInviteEmbed$$serializer();
        INSTANCE = activityRichPresenceInviteEmbed$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.activities.ActivityRichPresenceInviteEmbed", activityRichPresenceInviteEmbed$$serializer, 18);
        a2Var.o("ctaButtonEnabled", true);
        a2Var.o("ctaButtonText", true);
        a2Var.o("ctaButtonIsLoading", true);
        a2Var.o("footerLabel", true);
        a2Var.o("gradientColors", true);
        a2Var.o("headerText", true);
        a2Var.o("iconSrc", true);
        a2Var.o("isActive", true);
        a2Var.o("isPlatformSupported", true);
        a2Var.o("isSpotifyParty", true);
        a2Var.o("maxPartySize", true);
        a2Var.o("partyMemberAvatarURIs", true);
        a2Var.o("partySizeText", true);
        a2Var.o("platformIconKeys", true);
        a2Var.o("coverImageUrl", true);
        a2Var.o("subtitle", true);
        a2Var.o("title", true);
        a2Var.o("hiddenEmbedMessageContent", true);
        descriptor = a2Var;
    }

    private ActivityRichPresenceInviteEmbed$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = ActivityRichPresenceInviteEmbed.$childSerializers;
        h hVar = h.f20942a;
        KSerializer u10 = a.u(hVar);
        n2 n2Var = n2.f20978a;
        return new KSerializer[]{u10, a.u(n2Var), a.u(hVar), a.u(n2Var), a.u((KSerializer) lazyArr[4].getValue()), a.u(n2Var), a.u(n2Var), a.u(hVar), a.u(hVar), a.u(hVar), a.u(p0.f20994a), a.u((KSerializer) lazyArr[11].getValue()), a.u(n2Var), a.u((KSerializer) lazyArr[13].getValue()), a.u(n2Var), a.u(n2Var), a.u(n2Var), a.u(StructurableTextSerializer.INSTANCE)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ActivityRichPresenceInviteEmbed deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        String str;
        int i10;
        Boolean bool;
        String str2;
        Boolean bool2;
        StructurableText structurableText;
        String str3;
        String str4;
        List list;
        Integer num;
        Boolean bool3;
        Boolean bool4;
        String str5;
        Boolean bool5;
        String str6;
        List list2;
        String str7;
        String str8;
        List list3;
        String str9;
        int i11;
        List list4;
        String str10;
        String str11;
        List list5;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = ActivityRichPresenceInviteEmbed.$childSerializers;
        if (b10.p()) {
            h hVar = h.f20942a;
            n2 n2Var = n2.f20978a;
            Boolean bool6 = (Boolean) b10.n(serialDescriptor, 9, hVar, null);
            Integer num2 = (Integer) b10.n(serialDescriptor, 10, p0.f20994a, null);
            List list6 = (List) b10.n(serialDescriptor, 11, (DeserializationStrategy) lazyArr[11].getValue(), null);
            str = (String) b10.n(serialDescriptor, 12, n2Var, null);
            List list7 = (List) b10.n(serialDescriptor, 13, (DeserializationStrategy) lazyArr[13].getValue(), null);
            String str12 = (String) b10.n(serialDescriptor, 15, n2Var, null);
            String str13 = (String) b10.n(serialDescriptor, 16, n2Var, null);
            i10 = 262143;
            structurableText = (StructurableText) b10.n(serialDescriptor, 17, StructurableTextSerializer.INSTANCE, null);
            str8 = (String) b10.n(serialDescriptor, 14, n2Var, null);
            bool5 = (Boolean) b10.n(serialDescriptor, 2, hVar, null);
            list2 = (List) b10.n(serialDescriptor, 4, (DeserializationStrategy) lazyArr[4].getValue(), null);
            bool = (Boolean) b10.n(serialDescriptor, 0, hVar, null);
            str7 = (String) b10.n(serialDescriptor, 5, n2Var, null);
            bool4 = (Boolean) b10.n(serialDescriptor, 7, hVar, null);
            str2 = (String) b10.n(serialDescriptor, 6, n2Var, null);
            bool2 = (Boolean) b10.n(serialDescriptor, 8, hVar, null);
            str6 = (String) b10.n(serialDescriptor, 3, n2Var, null);
            str5 = (String) b10.n(serialDescriptor, 1, n2Var, null);
            str4 = str13;
            str3 = str12;
            list3 = list7;
            bool3 = bool6;
            list = list6;
            num = num2;
        } else {
            List list8 = null;
            String str14 = null;
            String str15 = null;
            String str16 = null;
            String str17 = null;
            List list9 = null;
            Integer num3 = null;
            Boolean bool7 = null;
            Boolean bool8 = null;
            str = null;
            Boolean bool9 = null;
            String str18 = null;
            Boolean bool10 = null;
            String str19 = null;
            List list10 = null;
            int i12 = 4;
            boolean z10 = true;
            Boolean bool11 = null;
            String str20 = null;
            i10 = 0;
            StructurableText structurableText2 = null;
            while (z10) {
                String str21 = str20;
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        list4 = list8;
                        str10 = str14;
                        str11 = str21;
                        z10 = false;
                        str20 = str11;
                        str14 = str10;
                        list8 = list4;
                        i12 = 4;
                        break;
                    case 0:
                        list4 = list8;
                        str10 = str14;
                        str11 = str21;
                        bool9 = (Boolean) b10.n(serialDescriptor, 0, h.f20942a, bool9);
                        i10 |= 1;
                        str18 = str18;
                        str20 = str11;
                        str14 = str10;
                        list8 = list4;
                        i12 = 4;
                        break;
                    case 1:
                        list4 = list8;
                        str10 = str14;
                        str11 = str21;
                        str18 = (String) b10.n(serialDescriptor, 1, n2.f20978a, str18);
                        i10 |= 2;
                        bool10 = bool10;
                        str20 = str11;
                        str14 = str10;
                        list8 = list4;
                        i12 = 4;
                        break;
                    case 2:
                        list4 = list8;
                        str10 = str14;
                        str11 = str21;
                        bool10 = (Boolean) b10.n(serialDescriptor, 2, h.f20942a, bool10);
                        i10 |= 4;
                        str19 = str19;
                        str20 = str11;
                        str14 = str10;
                        list8 = list4;
                        i12 = 4;
                        break;
                    case 3:
                        list4 = list8;
                        str10 = str14;
                        str11 = str21;
                        str19 = (String) b10.n(serialDescriptor, 3, n2.f20978a, str19);
                        i10 |= 8;
                        list10 = list10;
                        str20 = str11;
                        str14 = str10;
                        list8 = list4;
                        i12 = 4;
                        break;
                    case 4:
                        list5 = list8;
                        String str22 = str14;
                        int i13 = i12;
                        list10 = (List) b10.n(serialDescriptor, i13, (DeserializationStrategy) lazyArr[i12].getValue(), list10);
                        i10 |= 16;
                        str20 = str21;
                        str14 = str22;
                        i12 = i13;
                        list8 = list5;
                        break;
                    case 5:
                        list5 = list8;
                        str20 = (String) b10.n(serialDescriptor, 5, n2.f20978a, str21);
                        i10 |= 32;
                        str14 = str14;
                        list8 = list5;
                        break;
                    case 6:
                        str15 = (String) b10.n(serialDescriptor, 6, n2.f20978a, str15);
                        i10 |= 64;
                        list8 = list8;
                        str20 = str21;
                        break;
                    case 7:
                        str9 = str15;
                        bool8 = (Boolean) b10.n(serialDescriptor, 7, h.f20942a, bool8);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        str20 = str21;
                        str15 = str9;
                        break;
                    case 8:
                        str9 = str15;
                        bool11 = (Boolean) b10.n(serialDescriptor, 8, h.f20942a, bool11);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        str20 = str21;
                        str15 = str9;
                        break;
                    case 9:
                        str9 = str15;
                        bool7 = (Boolean) b10.n(serialDescriptor, 9, h.f20942a, bool7);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        str20 = str21;
                        str15 = str9;
                        break;
                    case 10:
                        str9 = str15;
                        num3 = (Integer) b10.n(serialDescriptor, 10, p0.f20994a, num3);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        str20 = str21;
                        str15 = str9;
                        break;
                    case 11:
                        str9 = str15;
                        list9 = (List) b10.n(serialDescriptor, 11, (DeserializationStrategy) lazyArr[11].getValue(), list9);
                        i10 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        str20 = str21;
                        str15 = str9;
                        break;
                    case 12:
                        str9 = str15;
                        str = (String) b10.n(serialDescriptor, 12, n2.f20978a, str);
                        i10 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                        str20 = str21;
                        str15 = str9;
                        break;
                    case 13:
                        str9 = str15;
                        list8 = (List) b10.n(serialDescriptor, 13, (DeserializationStrategy) lazyArr[13].getValue(), list8);
                        i10 |= 8192;
                        str20 = str21;
                        str15 = str9;
                        break;
                    case 14:
                        str9 = str15;
                        str14 = (String) b10.n(serialDescriptor, 14, n2.f20978a, str14);
                        i10 |= 16384;
                        str20 = str21;
                        str15 = str9;
                        break;
                    case 15:
                        str9 = str15;
                        str16 = (String) b10.n(serialDescriptor, 15, n2.f20978a, str16);
                        i11 = PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
                        i10 |= i11;
                        str20 = str21;
                        str15 = str9;
                        break;
                    case 16:
                        str9 = str15;
                        str17 = (String) b10.n(serialDescriptor, 16, n2.f20978a, str17);
                        i11 = 65536;
                        i10 |= i11;
                        str20 = str21;
                        str15 = str9;
                        break;
                    case 17:
                        str9 = str15;
                        structurableText2 = (StructurableText) b10.n(serialDescriptor, 17, StructurableTextSerializer.INSTANCE, structurableText2);
                        i11 = 131072;
                        i10 |= i11;
                        str20 = str21;
                        str15 = str9;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            bool = bool9;
            str2 = str15;
            bool2 = bool11;
            structurableText = structurableText2;
            str3 = str16;
            str4 = str17;
            list = list9;
            num = num3;
            bool3 = bool7;
            bool4 = bool8;
            str5 = str18;
            bool5 = bool10;
            str6 = str19;
            list2 = list10;
            str7 = str20;
            str8 = str14;
            list3 = list8;
        }
        int i14 = i10;
        String str23 = str;
        b10.c(serialDescriptor);
        return new ActivityRichPresenceInviteEmbed(i14, bool, str5, bool5, str6, list2, str7, str2, bool4, bool2, bool3, num, list, str23, list3, str8, str3, str4, structurableText, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ActivityRichPresenceInviteEmbed value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ActivityRichPresenceInviteEmbed.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
