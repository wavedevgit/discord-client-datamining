package com.discord.chat.bridge.automod;

import androidx.recyclerview.widget.RecyclerView;
import at.m;
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
import dt.h;
import dt.n2;
import dt.p0;
import dt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000^\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b2\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 U2\u00020\u0001:\u0002TUB\u0087\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\r\u0012\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\r\u0012\u0006\u0010\u000f\u001a\u00020\u0010\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0010\u0012\u0006\u0010\u0012\u001a\u00020\u0013\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\r\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u0016\u0010\u0017B\u008f\u0001\b\u0010\u0012\u0006\u0010\u0018\u001a\u00020\u0010\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\r\u0012\u0006\u0010\u000f\u001a\u00020\u0010\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0010\u0012\u0006\u0010\u0012\u001a\u00020\u0013\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0013\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u001a¢\u0006\u0004\b\u0016\u0010\u001bJ\u0010\u00105\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b6\u0010\u001dJ\u0010\u00107\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b8\u0010 J\u0010\u00109\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\b:J\u0010\u0010;\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\b<J\u000b\u0010=\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u000b\u0010>\u001a\u0004\u0018\u00010\rHÆ\u0003J\u000b\u0010?\u001a\u0004\u0018\u00010\rHÆ\u0003J\t\u0010@\u001a\u00020\u0010HÆ\u0003J\u0010\u0010A\u001a\u0004\u0018\u00010\u0010HÆ\u0003¢\u0006\u0002\u0010-J\t\u0010B\u001a\u00020\u0013HÆ\u0003J\u000b\u0010C\u001a\u0004\u0018\u00010\rHÆ\u0003J\u0010\u0010D\u001a\u0004\u0018\u00010\u0013HÆ\u0003¢\u0006\u0002\u00103J\u0098\u0001\u0010E\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\r2\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\r2\b\b\u0002\u0010\u000f\u001a\u00020\u00102\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u00102\b\b\u0002\u0010\u0012\u001a\u00020\u00132\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\r2\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0013HÆ\u0001¢\u0006\u0004\bF\u0010GJ\u0013\u0010H\u001a\u00020\u00132\b\u0010I\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010J\u001a\u00020\u0010HÖ\u0001J\t\u0010K\u001a\u00020\rHÖ\u0001J%\u0010L\u001a\u00020M2\u0006\u0010N\u001a\u00020\u00002\u0006\u0010O\u001a\u00020P2\u0006\u0010Q\u001a\u00020RH\u0001¢\u0006\u0002\bSR\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u001e\u001a\u0004\b\u001c\u0010\u001dR\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010!\u001a\u0004\b\u001f\u0010 R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010#R\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b$\u0010%R\u0013\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\b\n\u0000\u001a\u0004\b&\u0010'R\u0013\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\b\n\u0000\u001a\u0004\b(\u0010\u001dR\u0013\u0010\u000e\u001a\u0004\u0018\u00010\r¢\u0006\b\n\u0000\u001a\u0004\b)\u0010\u001dR\u0011\u0010\u000f\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b*\u0010+R\u0015\u0010\u0011\u001a\u0004\u0018\u00010\u0010¢\u0006\n\n\u0002\u0010.\u001a\u0004\b,\u0010-R\u0011\u0010\u0012\u001a\u00020\u0013¢\u0006\b\n\u0000\u001a\u0004\b/\u00100R\u0013\u0010\u0014\u001a\u0004\u0018\u00010\r¢\u0006\b\n\u0000\u001a\u0004\b1\u0010\u001dR\u0015\u0010\u0015\u001a\u0004\u0018\u00010\u0013¢\u0006\n\n\u0002\u00104\u001a\u0004\b2\u00103¨\u0006V"}, d2 = {"Lcom/discord/chat/bridge/automod/FlaggedMessageEmbed;", "", StackTraceHelper.ID_KEY, "Lcom/discord/primitives/MessageId;", "channelId", "Lcom/discord/primitives/ChannelId;", "guildId", "Lcom/discord/primitives/GuildId;", "userId", "Lcom/discord/primitives/UserId;", "content", "Lcom/discord/chat/bridge/structurabletext/StructurableText;", NotificationRenderer.CHANNEL_NAME, "", NotificationRenderer.USERNAME, "usernameColor", "", "roleColor", "shouldShowRoleDot", "", "avatarURL", "communicationDisabled", "<init>", "(Ljava/lang/String;JLcom/discord/primitives/GuildId;Lcom/discord/primitives/UserId;Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;Ljava/lang/String;ILjava/lang/Integer;ZLjava/lang/String;Ljava/lang/Boolean;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lcom/discord/primitives/ChannelId;Lcom/discord/primitives/GuildId;Lcom/discord/primitives/UserId;Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;Ljava/lang/String;ILjava/lang/Integer;ZLjava/lang/String;Ljava/lang/Boolean;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getChannelId-o4g7jtM", "()J", "J", "getGuildId-qOKuAAo", "()Lcom/discord/primitives/GuildId;", "getUserId-wUX8bhU", "()Lcom/discord/primitives/UserId;", "getContent", "()Lcom/discord/chat/bridge/structurabletext/StructurableText;", "getChannelName", "getUsername", "getUsernameColor", "()I", "getRoleColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getShouldShowRoleDot", "()Z", "getAvatarURL", "getCommunicationDisabled", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "component1", "component1-3Eiw7ao", "component2", "component2-o4g7jtM", "component3", "component3-qOKuAAo", "component4", "component4-wUX8bhU", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "copy", "copy-Yv-vreA", "(Ljava/lang/String;JLcom/discord/primitives/GuildId;Lcom/discord/primitives/UserId;Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;Ljava/lang/String;ILjava/lang/Integer;ZLjava/lang/String;Ljava/lang/Boolean;)Lcom/discord/chat/bridge/automod/FlaggedMessageEmbed;", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class FlaggedMessageEmbed {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String avatarURL;
    private final long channelId;
    private final String channelName;
    private final Boolean communicationDisabled;
    private final StructurableText content;
    private final GuildId guildId;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f8235id;
    private final Integer roleColor;
    private final boolean shouldShowRoleDot;
    private final UserId userId;
    private final String username;
    private final int usernameColor;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/automod/FlaggedMessageEmbed$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/automod/FlaggedMessageEmbed;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return FlaggedMessageEmbed$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ FlaggedMessageEmbed(int i10, String str, ChannelId channelId, GuildId guildId, UserId userId, StructurableText structurableText, String str2, String str3, int i11, Integer num, boolean z10, String str4, Boolean bool, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, channelId, guildId, userId, structurableText, str2, str3, i11, num, z10, str4, bool, serializationConstructorMarker);
    }

    /* renamed from: copy-Yv-vreA$default  reason: not valid java name */
    public static /* synthetic */ FlaggedMessageEmbed m245copyYvvreA$default(FlaggedMessageEmbed flaggedMessageEmbed, String str, long j10, GuildId guildId, UserId userId, StructurableText structurableText, String str2, String str3, int i10, Integer num, boolean z10, String str4, Boolean bool, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = flaggedMessageEmbed.f8235id;
        }
        return flaggedMessageEmbed.m250copyYvvreA(str, (i11 & 2) != 0 ? flaggedMessageEmbed.channelId : j10, (i11 & 4) != 0 ? flaggedMessageEmbed.guildId : guildId, (i11 & 8) != 0 ? flaggedMessageEmbed.userId : userId, (i11 & 16) != 0 ? flaggedMessageEmbed.content : structurableText, (i11 & 32) != 0 ? flaggedMessageEmbed.channelName : str2, (i11 & 64) != 0 ? flaggedMessageEmbed.username : str3, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? flaggedMessageEmbed.usernameColor : i10, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? flaggedMessageEmbed.roleColor : num, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? flaggedMessageEmbed.shouldShowRoleDot : z10, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? flaggedMessageEmbed.avatarURL : str4, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? flaggedMessageEmbed.communicationDisabled : bool);
    }

    public static final /* synthetic */ void write$Self$chat_release(FlaggedMessageEmbed flaggedMessageEmbed, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.D(serialDescriptor, 0, MessageId$$serializer.INSTANCE, MessageId.m1085boximpl(flaggedMessageEmbed.f8235id));
        compositeEncoder.D(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(flaggedMessageEmbed.channelId));
        if (compositeEncoder.z(serialDescriptor, 2) || flaggedMessageEmbed.guildId != null) {
            compositeEncoder.s(serialDescriptor, 2, GuildId$$serializer.INSTANCE, flaggedMessageEmbed.guildId);
        }
        if (compositeEncoder.z(serialDescriptor, 3) || flaggedMessageEmbed.userId != null) {
            compositeEncoder.s(serialDescriptor, 3, UserId$$serializer.INSTANCE, flaggedMessageEmbed.userId);
        }
        if (compositeEncoder.z(serialDescriptor, 4) || flaggedMessageEmbed.content != null) {
            compositeEncoder.s(serialDescriptor, 4, StructurableTextSerializer.INSTANCE, flaggedMessageEmbed.content);
        }
        if (compositeEncoder.z(serialDescriptor, 5) || flaggedMessageEmbed.channelName != null) {
            compositeEncoder.s(serialDescriptor, 5, n2.f20978a, flaggedMessageEmbed.channelName);
        }
        if (compositeEncoder.z(serialDescriptor, 6) || flaggedMessageEmbed.username != null) {
            compositeEncoder.s(serialDescriptor, 6, n2.f20978a, flaggedMessageEmbed.username);
        }
        compositeEncoder.w(serialDescriptor, 7, flaggedMessageEmbed.usernameColor);
        if (compositeEncoder.z(serialDescriptor, 8) || flaggedMessageEmbed.roleColor != null) {
            compositeEncoder.s(serialDescriptor, 8, p0.f20994a, flaggedMessageEmbed.roleColor);
        }
        compositeEncoder.x(serialDescriptor, 9, flaggedMessageEmbed.shouldShowRoleDot);
        if (compositeEncoder.z(serialDescriptor, 10) || flaggedMessageEmbed.avatarURL != null) {
            compositeEncoder.s(serialDescriptor, 10, n2.f20978a, flaggedMessageEmbed.avatarURL);
        }
        if (compositeEncoder.z(serialDescriptor, 11) || !Intrinsics.areEqual(flaggedMessageEmbed.communicationDisabled, Boolean.FALSE)) {
            compositeEncoder.s(serialDescriptor, 11, h.f20942a, flaggedMessageEmbed.communicationDisabled);
        }
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m246component13Eiw7ao() {
        return this.f8235id;
    }

    public final boolean component10() {
        return this.shouldShowRoleDot;
    }

    public final String component11() {
        return this.avatarURL;
    }

    public final Boolean component12() {
        return this.communicationDisabled;
    }

    /* renamed from: component2-o4g7jtM  reason: not valid java name */
    public final long m247component2o4g7jtM() {
        return this.channelId;
    }

    /* renamed from: component3-qOKuAAo  reason: not valid java name */
    public final GuildId m248component3qOKuAAo() {
        return this.guildId;
    }

    /* renamed from: component4-wUX8bhU  reason: not valid java name */
    public final UserId m249component4wUX8bhU() {
        return this.userId;
    }

    public final StructurableText component5() {
        return this.content;
    }

    public final String component6() {
        return this.channelName;
    }

    public final String component7() {
        return this.username;
    }

    public final int component8() {
        return this.usernameColor;
    }

    public final Integer component9() {
        return this.roleColor;
    }

    @NotNull
    /* renamed from: copy-Yv-vreA  reason: not valid java name */
    public final FlaggedMessageEmbed m250copyYvvreA(@NotNull String id2, long j10, GuildId guildId, UserId userId, StructurableText structurableText, String str, String str2, int i10, Integer num, boolean z10, String str3, Boolean bool) {
        Intrinsics.checkNotNullParameter(id2, "id");
        return new FlaggedMessageEmbed(id2, j10, guildId, userId, structurableText, str, str2, i10, num, z10, str3, bool, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof FlaggedMessageEmbed) {
            FlaggedMessageEmbed flaggedMessageEmbed = (FlaggedMessageEmbed) obj;
            return MessageId.m1089equalsimpl0(this.f8235id, flaggedMessageEmbed.f8235id) && ChannelId.m1063equalsimpl0(this.channelId, flaggedMessageEmbed.channelId) && Intrinsics.areEqual(this.guildId, flaggedMessageEmbed.guildId) && Intrinsics.areEqual(this.userId, flaggedMessageEmbed.userId) && Intrinsics.areEqual(this.content, flaggedMessageEmbed.content) && Intrinsics.areEqual(this.channelName, flaggedMessageEmbed.channelName) && Intrinsics.areEqual(this.username, flaggedMessageEmbed.username) && this.usernameColor == flaggedMessageEmbed.usernameColor && Intrinsics.areEqual(this.roleColor, flaggedMessageEmbed.roleColor) && this.shouldShowRoleDot == flaggedMessageEmbed.shouldShowRoleDot && Intrinsics.areEqual(this.avatarURL, flaggedMessageEmbed.avatarURL) && Intrinsics.areEqual(this.communicationDisabled, flaggedMessageEmbed.communicationDisabled);
        }
        return false;
    }

    public final String getAvatarURL() {
        return this.avatarURL;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m251getChannelIdo4g7jtM() {
        return this.channelId;
    }

    public final String getChannelName() {
        return this.channelName;
    }

    public final Boolean getCommunicationDisabled() {
        return this.communicationDisabled;
    }

    public final StructurableText getContent() {
        return this.content;
    }

    /* renamed from: getGuildId-qOKuAAo  reason: not valid java name */
    public final GuildId m252getGuildIdqOKuAAo() {
        return this.guildId;
    }

    @NotNull
    /* renamed from: getId-3Eiw7ao  reason: not valid java name */
    public final String m253getId3Eiw7ao() {
        return this.f8235id;
    }

    public final Integer getRoleColor() {
        return this.roleColor;
    }

    public final boolean getShouldShowRoleDot() {
        return this.shouldShowRoleDot;
    }

    /* renamed from: getUserId-wUX8bhU  reason: not valid java name */
    public final UserId m254getUserIdwUX8bhU() {
        return this.userId;
    }

    public final String getUsername() {
        return this.username;
    }

    public final int getUsernameColor() {
        return this.usernameColor;
    }

    public int hashCode() {
        int m1090hashCodeimpl = ((MessageId.m1090hashCodeimpl(this.f8235id) * 31) + ChannelId.m1064hashCodeimpl(this.channelId)) * 31;
        GuildId guildId = this.guildId;
        int m1077hashCodeimpl = (m1090hashCodeimpl + (guildId == null ? 0 : GuildId.m1077hashCodeimpl(guildId.m1081unboximpl()))) * 31;
        UserId userId = this.userId;
        int m1142hashCodeimpl = (m1077hashCodeimpl + (userId == null ? 0 : UserId.m1142hashCodeimpl(userId.m1146unboximpl()))) * 31;
        StructurableText structurableText = this.content;
        int hashCode = (m1142hashCodeimpl + (structurableText == null ? 0 : structurableText.hashCode())) * 31;
        String str = this.channelName;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.username;
        int hashCode3 = (((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + Integer.hashCode(this.usernameColor)) * 31;
        Integer num = this.roleColor;
        int hashCode4 = (((hashCode3 + (num == null ? 0 : num.hashCode())) * 31) + Boolean.hashCode(this.shouldShowRoleDot)) * 31;
        String str3 = this.avatarURL;
        int hashCode5 = (hashCode4 + (str3 == null ? 0 : str3.hashCode())) * 31;
        Boolean bool = this.communicationDisabled;
        return hashCode5 + (bool != null ? bool.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String m1092toStringimpl = MessageId.m1092toStringimpl(this.f8235id);
        String m1066toStringimpl = ChannelId.m1066toStringimpl(this.channelId);
        GuildId guildId = this.guildId;
        UserId userId = this.userId;
        StructurableText structurableText = this.content;
        String str = this.channelName;
        String str2 = this.username;
        int i10 = this.usernameColor;
        Integer num = this.roleColor;
        boolean z10 = this.shouldShowRoleDot;
        String str3 = this.avatarURL;
        Boolean bool = this.communicationDisabled;
        return "FlaggedMessageEmbed(id=" + m1092toStringimpl + ", channelId=" + m1066toStringimpl + ", guildId=" + guildId + ", userId=" + userId + ", content=" + structurableText + ", channelName=" + str + ", username=" + str2 + ", usernameColor=" + i10 + ", roleColor=" + num + ", shouldShowRoleDot=" + z10 + ", avatarURL=" + str3 + ", communicationDisabled=" + bool + ")";
    }

    public /* synthetic */ FlaggedMessageEmbed(String str, long j10, GuildId guildId, UserId userId, StructurableText structurableText, String str2, String str3, int i10, Integer num, boolean z10, String str4, Boolean bool, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, guildId, userId, structurableText, str2, str3, i10, num, z10, str4, bool);
    }

    private /* synthetic */ FlaggedMessageEmbed(int i10, String str, ChannelId channelId, GuildId guildId, UserId userId, StructurableText structurableText, String str2, String str3, int i11, Integer num, boolean z10, String str4, Boolean bool, SerializationConstructorMarker serializationConstructorMarker) {
        if (643 != (i10 & 643)) {
            v1.b(i10, 643, FlaggedMessageEmbed$$serializer.INSTANCE.getDescriptor());
        }
        this.f8235id = str;
        this.channelId = channelId.m1068unboximpl();
        if ((i10 & 4) == 0) {
            this.guildId = null;
        } else {
            this.guildId = guildId;
        }
        if ((i10 & 8) == 0) {
            this.userId = null;
        } else {
            this.userId = userId;
        }
        if ((i10 & 16) == 0) {
            this.content = null;
        } else {
            this.content = structurableText;
        }
        if ((i10 & 32) == 0) {
            this.channelName = null;
        } else {
            this.channelName = str2;
        }
        if ((i10 & 64) == 0) {
            this.username = null;
        } else {
            this.username = str3;
        }
        this.usernameColor = i11;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.roleColor = null;
        } else {
            this.roleColor = num;
        }
        this.shouldShowRoleDot = z10;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.avatarURL = null;
        } else {
            this.avatarURL = str4;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.communicationDisabled = Boolean.FALSE;
        } else {
            this.communicationDisabled = bool;
        }
    }

    private FlaggedMessageEmbed(String id2, long j10, GuildId guildId, UserId userId, StructurableText structurableText, String str, String str2, int i10, Integer num, boolean z10, String str3, Boolean bool) {
        Intrinsics.checkNotNullParameter(id2, "id");
        this.f8235id = id2;
        this.channelId = j10;
        this.guildId = guildId;
        this.userId = userId;
        this.content = structurableText;
        this.channelName = str;
        this.username = str2;
        this.usernameColor = i10;
        this.roleColor = num;
        this.shouldShowRoleDot = z10;
        this.avatarURL = str3;
        this.communicationDisabled = bool;
    }

    public /* synthetic */ FlaggedMessageEmbed(String str, long j10, GuildId guildId, UserId userId, StructurableText structurableText, String str2, String str3, int i10, Integer num, boolean z10, String str4, Boolean bool, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, (i11 & 4) != 0 ? null : guildId, (i11 & 8) != 0 ? null : userId, (i11 & 16) != 0 ? null : structurableText, (i11 & 32) != 0 ? null : str2, (i11 & 64) != 0 ? null : str3, i10, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : num, z10, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str4, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? Boolean.FALSE : bool, null);
    }
}
