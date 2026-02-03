package com.discord.chat.bridge.automod;

import androidx.recyclerview.widget.RecyclerView;
import bt.a2;
import bt.h;
import bt.h0;
import bt.n2;
import bt.p0;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.bridge.structurabletext.StructurableTextSerializer;
import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
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
import zs.a;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/automod/FlaggedMessageEmbed.$serializer", "Lbt/h0;", "Lcom/discord/chat/bridge/automod/FlaggedMessageEmbed;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/automod/FlaggedMessageEmbed;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/automod/FlaggedMessageEmbed;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class FlaggedMessageEmbed$$serializer implements h0 {
    @NotNull
    public static final FlaggedMessageEmbed$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        FlaggedMessageEmbed$$serializer flaggedMessageEmbed$$serializer = new FlaggedMessageEmbed$$serializer();
        INSTANCE = flaggedMessageEmbed$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.automod.FlaggedMessageEmbed", flaggedMessageEmbed$$serializer, 12);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("channelId", false);
        a2Var.o("guildId", true);
        a2Var.o("userId", true);
        a2Var.o("content", true);
        a2Var.o(NotificationRenderer.CHANNEL_NAME, true);
        a2Var.o(NotificationRenderer.USERNAME, true);
        a2Var.o("usernameColor", false);
        a2Var.o("roleColor", true);
        a2Var.o("shouldShowRoleDot", false);
        a2Var.o("avatarURL", true);
        a2Var.o("communicationDisabled", true);
        descriptor = a2Var;
    }

    private FlaggedMessageEmbed$$serializer() {
    }

    @Override // bt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        KSerializer u10 = a.u(GuildId$$serializer.INSTANCE);
        KSerializer u11 = a.u(UserId$$serializer.INSTANCE);
        KSerializer u12 = a.u(StructurableTextSerializer.INSTANCE);
        n2 n2Var = n2.f7662a;
        KSerializer u13 = a.u(n2Var);
        KSerializer u14 = a.u(n2Var);
        p0 p0Var = p0.f7678a;
        KSerializer u15 = a.u(p0Var);
        h hVar = h.f7626a;
        return new KSerializer[]{MessageId$$serializer.INSTANCE, ChannelId$$serializer.INSTANCE, u10, u11, u12, u13, u14, p0Var, u15, hVar, a.u(n2Var), a.u(hVar)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final FlaggedMessageEmbed deserialize(@NotNull Decoder decoder) {
        String str;
        Integer num;
        StructurableText structurableText;
        GuildId guildId;
        ChannelId channelId;
        Boolean bool;
        int i10;
        UserId userId;
        String str2;
        String str3;
        String str4;
        boolean z10;
        int i11;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i12 = 10;
        int i13 = 9;
        int i14 = 7;
        char c10 = 6;
        String str5 = null;
        if (b10.p()) {
            MessageId messageId = (MessageId) b10.y(serialDescriptor, 0, MessageId$$serializer.INSTANCE, null);
            str = messageId != null ? messageId.m1095unboximpl() : null;
            n2 n2Var = n2.f7662a;
            int i15 = b10.i(serialDescriptor, 7);
            num = (Integer) b10.n(serialDescriptor, 8, p0.f7678a, null);
            boolean C = b10.C(serialDescriptor, 9);
            str4 = (String) b10.n(serialDescriptor, 10, n2Var, null);
            z10 = C;
            i11 = i15;
            str3 = (String) b10.n(serialDescriptor, 6, n2Var, null);
            str2 = (String) b10.n(serialDescriptor, 5, n2Var, null);
            userId = (UserId) b10.n(serialDescriptor, 3, UserId$$serializer.INSTANCE, null);
            bool = (Boolean) b10.n(serialDescriptor, 11, h.f7626a, null);
            structurableText = (StructurableText) b10.n(serialDescriptor, 4, StructurableTextSerializer.INSTANCE, null);
            guildId = (GuildId) b10.n(serialDescriptor, 2, GuildId$$serializer.INSTANCE, null);
            channelId = (ChannelId) b10.y(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, null);
            i10 = 4095;
        } else {
            boolean z11 = true;
            int i16 = 0;
            boolean z12 = false;
            int i17 = 0;
            str = null;
            num = null;
            Boolean bool2 = null;
            UserId userId2 = null;
            String str6 = null;
            String str7 = null;
            StructurableText structurableText2 = null;
            GuildId guildId2 = null;
            ChannelId channelId2 = null;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        i12 = 10;
                        i13 = 9;
                        i14 = 7;
                        c10 = 6;
                        break;
                    case 0:
                        StructurableText structurableText3 = structurableText2;
                        GuildId guildId3 = guildId2;
                        ChannelId channelId3 = channelId2;
                        MessageId messageId2 = (MessageId) b10.y(serialDescriptor, 0, MessageId$$serializer.INSTANCE, str != null ? MessageId.m1086boximpl(str) : null);
                        str = messageId2 != null ? messageId2.m1095unboximpl() : null;
                        i16 |= 1;
                        structurableText2 = structurableText3;
                        guildId2 = guildId3;
                        channelId2 = channelId3;
                        i12 = 10;
                        i13 = 9;
                        i14 = 7;
                        c10 = 6;
                        break;
                    case 1:
                        channelId2 = (ChannelId) b10.y(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, channelId2);
                        i16 |= 2;
                        i12 = 10;
                        i13 = 9;
                        i14 = 7;
                        c10 = 6;
                        break;
                    case 2:
                        guildId2 = (GuildId) b10.n(serialDescriptor, 2, GuildId$$serializer.INSTANCE, guildId2);
                        i16 |= 4;
                        i12 = 10;
                        i13 = 9;
                        i14 = 7;
                        c10 = 6;
                        break;
                    case 3:
                        userId2 = (UserId) b10.n(serialDescriptor, 3, UserId$$serializer.INSTANCE, userId2);
                        i16 |= 8;
                        i12 = 10;
                        i13 = 9;
                        c10 = 6;
                        break;
                    case 4:
                        i16 |= 16;
                        structurableText2 = (StructurableText) b10.n(serialDescriptor, 4, StructurableTextSerializer.INSTANCE, structurableText2);
                        i12 = 10;
                        i13 = 9;
                        c10 = 6;
                        break;
                    case 5:
                        str6 = (String) b10.n(serialDescriptor, 5, n2.f7662a, str6);
                        i16 |= 32;
                        i12 = 10;
                        c10 = 6;
                        continue;
                    case 6:
                        str7 = (String) b10.n(serialDescriptor, 6, n2.f7662a, str7);
                        i16 |= 64;
                        c10 = 6;
                        i12 = 10;
                        break;
                    case 7:
                        i17 = b10.i(serialDescriptor, i14);
                        i16 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        c10 = 6;
                        break;
                    case 8:
                        num = (Integer) b10.n(serialDescriptor, 8, p0.f7678a, num);
                        i16 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        c10 = 6;
                        break;
                    case 9:
                        z12 = b10.C(serialDescriptor, i13);
                        i16 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        c10 = 6;
                        break;
                    case 10:
                        str5 = (String) b10.n(serialDescriptor, i12, n2.f7662a, str5);
                        i16 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        c10 = 6;
                        break;
                    case 11:
                        bool2 = (Boolean) b10.n(serialDescriptor, 11, h.f7626a, bool2);
                        i16 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        c10 = 6;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            structurableText = structurableText2;
            guildId = guildId2;
            channelId = channelId2;
            bool = bool2;
            i10 = i16;
            userId = userId2;
            str2 = str6;
            str3 = str7;
            str4 = str5;
            z10 = z12;
            i11 = i17;
        }
        String str8 = str;
        Integer num2 = num;
        b10.c(serialDescriptor);
        return new FlaggedMessageEmbed(i10, str8, channelId, guildId, userId, structurableText, str2, str3, i11, num2, z10, str4, bool, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ys.o
    public final void serialize(@NotNull Encoder encoder, @NotNull FlaggedMessageEmbed value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        FlaggedMessageEmbed.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // bt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
