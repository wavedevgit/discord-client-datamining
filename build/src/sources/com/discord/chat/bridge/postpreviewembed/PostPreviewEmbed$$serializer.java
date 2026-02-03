package com.discord.chat.bridge.postpreviewembed;

import androidx.recyclerview.widget.RecyclerView;
import at.b0;
import bt.a;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.bridge.structurabletext.StructurableTextSerializer;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Footer;
import dt.a2;
import dt.h;
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
import org.webrtc.PeerConnection;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/postpreviewembed/PostPreviewEmbed.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/postpreviewembed/PostPreviewEmbed;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/postpreviewembed/PostPreviewEmbed;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/postpreviewembed/PostPreviewEmbed;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class PostPreviewEmbed$$serializer implements h0 {
    @NotNull
    public static final PostPreviewEmbed$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        PostPreviewEmbed$$serializer postPreviewEmbed$$serializer = new PostPreviewEmbed$$serializer();
        INSTANCE = postPreviewEmbed$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.postpreviewembed.PostPreviewEmbed", postPreviewEmbed$$serializer, 22);
        a2Var.o("parentChannelId", false);
        a2Var.o("threadId", false);
        a2Var.o("messageId", false);
        a2Var.o("guildId", false);
        a2Var.o("title", false);
        a2Var.o("ctaText", false);
        a2Var.o("ctaButtonColor", false);
        a2Var.o(Footer.type, false);
        a2Var.o("subtitle", true);
        a2Var.o("coverImage", true);
        a2Var.o("blurredCoverImage", true);
        a2Var.o("coverImageOverlayText", true);
        a2Var.o("backgroundImage", true);
        a2Var.o("spoiler", true);
        a2Var.o("obscure", true);
        a2Var.o("obscureAwaitingScan", true);
        a2Var.o("shouldSpoiler", true);
        a2Var.o("obscureHideControls", true);
        a2Var.o("obscureIsOpaque", true);
        a2Var.o("verifyAge", true);
        a2Var.o("spoilerOrNull", true);
        a2Var.o("obscureOrNull", true);
        descriptor = a2Var;
    }

    private PostPreviewEmbed$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f20978a;
        KSerializer u10 = a.u(n2Var);
        KSerializer u11 = a.u(n2Var);
        KSerializer u12 = a.u(n2Var);
        KSerializer u13 = a.u(n2Var);
        KSerializer u14 = a.u(n2Var);
        KSerializer u15 = a.u(n2Var);
        KSerializer u16 = a.u(n2Var);
        h hVar = h.f20942a;
        KSerializer u17 = a.u(hVar);
        KSerializer u18 = a.u(hVar);
        KSerializer u19 = a.u(hVar);
        KSerializer u20 = a.u(hVar);
        KSerializer u21 = a.u(n2Var);
        KSerializer u22 = a.u(n2Var);
        ChannelId$$serializer channelId$$serializer = ChannelId$$serializer.INSTANCE;
        return new KSerializer[]{channelId$$serializer, channelId$$serializer, MessageId$$serializer.INSTANCE, GuildId$$serializer.INSTANCE, n2Var, n2Var, p0.f20994a, StructurableTextSerializer.INSTANCE, u10, u11, u12, u13, u14, u15, u16, u17, hVar, u18, u19, u20, u21, u22};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final PostPreviewEmbed deserialize(@NotNull Decoder decoder) {
        String str;
        ChannelId channelId;
        ChannelId channelId2;
        int i10;
        Boolean bool;
        String str2;
        String str3;
        String str4;
        GuildId guildId;
        String str5;
        String str6;
        Boolean bool2;
        Boolean bool3;
        StructurableText structurableText;
        String str7;
        String str8;
        boolean z10;
        String str9;
        String str10;
        String str11;
        int i11;
        String str12;
        Boolean bool4;
        String str13;
        String str14;
        String str15;
        Boolean bool5;
        Boolean bool6;
        int i12;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        char c10 = 11;
        String str16 = null;
        if (b10.p()) {
            ChannelId$$serializer channelId$$serializer = ChannelId$$serializer.INSTANCE;
            ChannelId channelId3 = (ChannelId) b10.y(serialDescriptor, 0, channelId$$serializer, null);
            ChannelId channelId4 = (ChannelId) b10.y(serialDescriptor, 1, channelId$$serializer, null);
            MessageId messageId = (MessageId) b10.y(serialDescriptor, 2, MessageId$$serializer.INSTANCE, null);
            String m1094unboximpl = messageId != null ? messageId.m1094unboximpl() : null;
            String m10 = b10.m(serialDescriptor, 4);
            String m11 = b10.m(serialDescriptor, 5);
            int i13 = b10.i(serialDescriptor, 6);
            n2 n2Var = n2.f20978a;
            str = (String) b10.n(serialDescriptor, 10, n2Var, null);
            String str17 = (String) b10.n(serialDescriptor, 12, n2Var, null);
            String str18 = (String) b10.n(serialDescriptor, 13, n2Var, null);
            String str19 = (String) b10.n(serialDescriptor, 14, n2Var, null);
            h hVar = h.f20942a;
            Boolean bool7 = (Boolean) b10.n(serialDescriptor, 15, hVar, null);
            boolean C = b10.C(serialDescriptor, 16);
            Boolean bool8 = (Boolean) b10.n(serialDescriptor, 17, hVar, null);
            Boolean bool9 = (Boolean) b10.n(serialDescriptor, 18, hVar, null);
            bool = (Boolean) b10.n(serialDescriptor, 19, hVar, null);
            str12 = (String) b10.n(serialDescriptor, 21, n2Var, null);
            str6 = (String) b10.n(serialDescriptor, 20, n2Var, null);
            guildId = (GuildId) b10.y(serialDescriptor, 3, GuildId$$serializer.INSTANCE, null);
            str9 = m10;
            str7 = (String) b10.n(serialDescriptor, 8, n2Var, null);
            str11 = m1094unboximpl;
            i11 = i13;
            channelId2 = channelId3;
            i10 = 4194303;
            str5 = (String) b10.n(serialDescriptor, 11, n2Var, null);
            str10 = (String) b10.n(serialDescriptor, 9, n2Var, null);
            structurableText = (StructurableText) b10.y(serialDescriptor, 7, StructurableTextSerializer.INSTANCE, null);
            bool2 = bool9;
            bool4 = bool8;
            z10 = C;
            bool3 = bool7;
            str2 = str19;
            str3 = str18;
            str4 = str17;
            channelId = channelId4;
            str8 = m11;
        } else {
            boolean z11 = true;
            int i14 = 0;
            boolean z12 = false;
            int i15 = 0;
            ChannelId channelId5 = null;
            Boolean bool10 = null;
            String str20 = null;
            Boolean bool11 = null;
            Boolean bool12 = null;
            String str21 = null;
            String str22 = null;
            String str23 = null;
            String str24 = null;
            Boolean bool13 = null;
            String str25 = null;
            GuildId guildId2 = null;
            String str26 = null;
            String str27 = null;
            String str28 = null;
            ChannelId channelId6 = null;
            String str29 = null;
            String str30 = null;
            StructurableText structurableText2 = null;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        str13 = str27;
                        str14 = str29;
                        z11 = false;
                        bool11 = bool11;
                        str20 = str20;
                        c10 = 11;
                        str29 = str14;
                        str27 = str13;
                        break;
                    case 0:
                        str15 = str20;
                        bool5 = bool11;
                        str13 = str27;
                        str14 = str29;
                        bool6 = bool10;
                        channelId6 = (ChannelId) b10.y(serialDescriptor, 0, ChannelId$$serializer.INSTANCE, channelId6);
                        i14 |= 1;
                        bool11 = bool5;
                        str20 = str15;
                        bool10 = bool6;
                        c10 = 11;
                        str29 = str14;
                        str27 = str13;
                        break;
                    case 1:
                        str15 = str20;
                        bool5 = bool11;
                        str13 = str27;
                        str14 = str29;
                        bool6 = bool10;
                        channelId5 = (ChannelId) b10.y(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, channelId5);
                        i14 |= 2;
                        bool11 = bool5;
                        str20 = str15;
                        bool10 = bool6;
                        c10 = 11;
                        str29 = str14;
                        str27 = str13;
                        break;
                    case 2:
                        str15 = str20;
                        GuildId guildId3 = guildId2;
                        str13 = str27;
                        str14 = str29;
                        String str31 = str30;
                        StructurableText structurableText3 = structurableText2;
                        bool6 = bool10;
                        Boolean bool14 = bool11;
                        MessageId messageId2 = (MessageId) b10.y(serialDescriptor, 2, MessageId$$serializer.INSTANCE, str28 != null ? MessageId.m1085boximpl(str28) : null);
                        str28 = messageId2 != null ? messageId2.m1094unboximpl() : null;
                        i14 |= 4;
                        guildId2 = guildId3;
                        bool11 = bool14;
                        structurableText2 = structurableText3;
                        str30 = str31;
                        str20 = str15;
                        bool10 = bool6;
                        c10 = 11;
                        str29 = str14;
                        str27 = str13;
                        break;
                    case 3:
                        str15 = str20;
                        str13 = str27;
                        str14 = str29;
                        bool6 = bool10;
                        guildId2 = (GuildId) b10.y(serialDescriptor, 3, GuildId$$serializer.INSTANCE, guildId2);
                        i14 |= 8;
                        structurableText2 = structurableText2;
                        str20 = str15;
                        bool10 = bool6;
                        c10 = 11;
                        str29 = str14;
                        str27 = str13;
                        break;
                    case 4:
                        str15 = str20;
                        str13 = str27;
                        str14 = str29;
                        bool6 = bool10;
                        str26 = b10.m(serialDescriptor, 4);
                        i14 |= 16;
                        str20 = str15;
                        bool10 = bool6;
                        c10 = 11;
                        str29 = str14;
                        str27 = str13;
                        break;
                    case 5:
                        str15 = str20;
                        str13 = str27;
                        str14 = str29;
                        bool6 = bool10;
                        str25 = b10.m(serialDescriptor, 5);
                        i14 |= 32;
                        str20 = str15;
                        bool10 = bool6;
                        c10 = 11;
                        str29 = str14;
                        str27 = str13;
                        break;
                    case 6:
                        str15 = str20;
                        str13 = str27;
                        str14 = str29;
                        bool6 = bool10;
                        i15 = b10.i(serialDescriptor, 6);
                        i14 |= 64;
                        str20 = str15;
                        bool10 = bool6;
                        c10 = 11;
                        str29 = str14;
                        str27 = str13;
                        break;
                    case 7:
                        str15 = str20;
                        str14 = str29;
                        bool6 = bool10;
                        str13 = str27;
                        structurableText2 = (StructurableText) b10.y(serialDescriptor, 7, StructurableTextSerializer.INSTANCE, structurableText2);
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        str20 = str15;
                        bool10 = bool6;
                        c10 = 11;
                        str29 = str14;
                        str27 = str13;
                        break;
                    case 8:
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        str30 = str30;
                        bool10 = bool10;
                        c10 = 11;
                        str27 = (String) b10.n(serialDescriptor, 8, n2.f20978a, str27);
                        str29 = str29;
                        str20 = str20;
                        break;
                    case 9:
                        str30 = (String) b10.n(serialDescriptor, 9, n2.f20978a, str30);
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        str20 = str20;
                        bool10 = bool10;
                        c10 = 11;
                        str29 = str29;
                        break;
                    case 10:
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        bool10 = bool10;
                        str29 = (String) b10.n(serialDescriptor, 10, n2.f20978a, str29);
                        c10 = 11;
                        continue;
                    case 11:
                        str23 = (String) b10.n(serialDescriptor, 11, n2.f20978a, str23);
                        i14 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        c10 = 11;
                        break;
                    case 12:
                        str16 = (String) b10.n(serialDescriptor, 12, n2.f20978a, str16);
                        i14 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                        c10 = 11;
                        break;
                    case 13:
                        str22 = (String) b10.n(serialDescriptor, 13, n2.f20978a, str22);
                        i14 |= 8192;
                        c10 = 11;
                        break;
                    case 14:
                        str21 = (String) b10.n(serialDescriptor, 14, n2.f20978a, str21);
                        i14 |= 16384;
                        c10 = 11;
                        break;
                    case 15:
                        bool11 = (Boolean) b10.n(serialDescriptor, 15, h.f20942a, bool11);
                        i12 = PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
                        i14 |= i12;
                        c10 = 11;
                        break;
                    case 16:
                        z12 = b10.C(serialDescriptor, 16);
                        i14 |= 65536;
                        c10 = 11;
                        break;
                    case 17:
                        bool10 = (Boolean) b10.n(serialDescriptor, 17, h.f20942a, bool10);
                        i12 = 131072;
                        i14 |= i12;
                        c10 = 11;
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        bool13 = (Boolean) b10.n(serialDescriptor, 18, h.f20942a, bool13);
                        i12 = 262144;
                        i14 |= i12;
                        c10 = 11;
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        bool12 = (Boolean) b10.n(serialDescriptor, 19, h.f20942a, bool12);
                        i12 = 524288;
                        i14 |= i12;
                        c10 = 11;
                        break;
                    case 20:
                        str24 = (String) b10.n(serialDescriptor, 20, n2.f20978a, str24);
                        i12 = 1048576;
                        i14 |= i12;
                        c10 = 11;
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        str20 = (String) b10.n(serialDescriptor, 21, n2.f20978a, str20);
                        i12 = 2097152;
                        i14 |= i12;
                        c10 = 11;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            str = str29;
            channelId = channelId5;
            channelId2 = channelId6;
            i10 = i14;
            bool = bool12;
            str2 = str21;
            str3 = str22;
            str4 = str16;
            guildId = guildId2;
            str5 = str23;
            str6 = str24;
            bool2 = bool13;
            bool3 = bool11;
            structurableText = structurableText2;
            str7 = str27;
            str8 = str25;
            z10 = z12;
            str9 = str26;
            str10 = str30;
            str11 = str28;
            i11 = i15;
            str12 = str20;
            bool4 = bool10;
        }
        String str32 = str;
        b10.c(serialDescriptor);
        return new PostPreviewEmbed(i10, channelId2, channelId, str11, guildId, str9, str8, i11, structurableText, str7, str10, str32, str5, str4, str3, str2, bool3, z10, bool4, bool2, bool, str6, str12, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull PostPreviewEmbed value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        PostPreviewEmbed.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
