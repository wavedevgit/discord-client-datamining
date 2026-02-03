package com.discord.chat.bridge.contentnode;

import bt.n2;
import bt.v1;
import com.discord.chat.bridge.rolecolors.RoleColors;
import com.discord.chat.bridge.rolecolors.RoleColors$$serializer;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import com.discord.primitives.RoleId;
import com.discord.primitives.RoleId$$serializer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@ys.m
@Metadata(d1 = {"\u0000n\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\"\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 I2\u00020\u0001:\u0002HIBs\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\b\b\u0002\u0010\t\u001a\u00020\n\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\f\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012¢\u0006\u0004\b\u0014\u0010\u0015By\b\u0010\u0012\u0006\u0010\u0016\u001a\u00020\n\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\t\u001a\u00020\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\u000e\u0010\u0011\u001a\n\u0012\u0004\u0012\u00020\u0013\u0018\u00010\u0012\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018¢\u0006\u0004\b\u0014\u0010\u0019J\u0010\u0010+\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\b,J\u0010\u0010-\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\b.J\u000b\u0010/\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\u000b\u00100\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\t\u00101\u001a\u00020\nHÆ\u0003J\u000b\u00102\u001a\u0004\u0018\u00010\fHÆ\u0003J\u0010\u00103\u001a\u0004\u0018\u00010\u000eHÆ\u0003¢\u0006\u0002\b4J\u0010\u00105\u001a\u0004\u0018\u00010\u0010HÆ\u0003¢\u0006\u0002\b6J\u000f\u00107\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012HÆ\u0003J|\u00108\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\t\u001a\u00020\n2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00102\u000e\b\u0002\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012HÆ\u0001¢\u0006\u0002\b9J\u0013\u0010:\u001a\u00020;2\b\u0010<\u001a\u0004\u0018\u00010=HÖ\u0003J\t\u0010>\u001a\u00020\nHÖ\u0001J\t\u0010?\u001a\u00020\u0007HÖ\u0001J%\u0010@\u001a\u00020A2\u0006\u0010B\u001a\u00020\u00002\u0006\u0010C\u001a\u00020D2\u0006\u0010E\u001a\u00020FH\u0001¢\u0006\u0002\bGR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001dR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0013\u0010\b\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u001fR\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0013\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b%\u0010&R\u0013\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\b\n\u0000\u001a\u0004\b'\u0010(R\u001a\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b)\u0010*¨\u0006J"}, d2 = {"Lcom/discord/chat/bridge/contentnode/UserOrRoleMentionContentNode;", "Lcom/discord/chat/bridge/contentnode/MentionContentNode;", "channelId", "Lcom/discord/primitives/ChannelId;", "userId", "Lcom/discord/primitives/UserId;", "roleName", "", "parsedUserId", "roleColor", "", "roleColors", "Lcom/discord/chat/bridge/rolecolors/RoleColors;", "guildId", "Lcom/discord/primitives/GuildId;", "roleId", "Lcom/discord/primitives/RoleId;", "content", "", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "<init>", "(Lcom/discord/primitives/ChannelId;Lcom/discord/primitives/UserId;Ljava/lang/String;Ljava/lang/String;ILcom/discord/chat/bridge/rolecolors/RoleColors;Lcom/discord/primitives/GuildId;Lcom/discord/primitives/RoleId;Ljava/util/List;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/primitives/ChannelId;Lcom/discord/primitives/UserId;Ljava/lang/String;Ljava/lang/String;ILcom/discord/chat/bridge/rolecolors/RoleColors;Lcom/discord/primitives/GuildId;Lcom/discord/primitives/RoleId;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getChannelId-qMVnFVQ", "()Lcom/discord/primitives/ChannelId;", "getUserId-wUX8bhU", "()Lcom/discord/primitives/UserId;", "getRoleName", "()Ljava/lang/String;", "getParsedUserId", "getRoleColor", "()I", "getRoleColors", "()Lcom/discord/chat/bridge/rolecolors/RoleColors;", "getGuildId-qOKuAAo", "()Lcom/discord/primitives/GuildId;", "getRoleId-fYaclRY", "()Lcom/discord/primitives/RoleId;", "getContent", "()Ljava/util/List;", "component1", "component1-qMVnFVQ", "component2", "component2-wUX8bhU", "component3", "component4", "component5", "component6", "component7", "component7-qOKuAAo", "component8", "component8-fYaclRY", "component9", "copy", "copy-5RCyINY", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class UserOrRoleMentionContentNode extends MentionContentNode {
    private final ChannelId channelId;
    @NotNull
    private final List<ContentNode> content;
    private final GuildId guildId;
    private final String parsedUserId;
    private final int roleColor;
    private final RoleColors roleColors;
    private final RoleId roleId;
    private final String roleName;
    private final UserId userId;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, null, null, null, null, null, null, jr.l.a(jr.o.f32182e, new Function0() { // from class: com.discord.chat.bridge.contentnode.x
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = UserOrRoleMentionContentNode._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/UserOrRoleMentionContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/UserOrRoleMentionContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return UserOrRoleMentionContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ UserOrRoleMentionContentNode(int i10, ChannelId channelId, UserId userId, String str, String str2, int i11, RoleColors roleColors, GuildId guildId, RoleId roleId, List list, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, channelId, userId, str, str2, i11, roleColors, guildId, roleId, list, serializationConstructorMarker);
    }

    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new bt.f(ContentNodeSerializer.INSTANCE);
    }

    public static final /* synthetic */ Lazy[] access$get$childSerializers$cp() {
        return $childSerializers;
    }

    /* renamed from: copy-5RCyINY$default */
    public static /* synthetic */ UserOrRoleMentionContentNode m382copy5RCyINY$default(UserOrRoleMentionContentNode userOrRoleMentionContentNode, ChannelId channelId, UserId userId, String str, String str2, int i10, RoleColors roleColors, GuildId guildId, RoleId roleId, List list, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            channelId = userOrRoleMentionContentNode.channelId;
        }
        if ((i11 & 2) != 0) {
            userId = userOrRoleMentionContentNode.userId;
        }
        if ((i11 & 4) != 0) {
            str = userOrRoleMentionContentNode.roleName;
        }
        if ((i11 & 8) != 0) {
            str2 = userOrRoleMentionContentNode.parsedUserId;
        }
        if ((i11 & 16) != 0) {
            i10 = userOrRoleMentionContentNode.roleColor;
        }
        if ((i11 & 32) != 0) {
            roleColors = userOrRoleMentionContentNode.roleColors;
        }
        if ((i11 & 64) != 0) {
            guildId = userOrRoleMentionContentNode.guildId;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            roleId = userOrRoleMentionContentNode.roleId;
        }
        List<ContentNode> list2 = list;
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            list2 = userOrRoleMentionContentNode.content;
        }
        RoleId roleId2 = roleId;
        List list3 = list2;
        RoleColors roleColors2 = roleColors;
        GuildId guildId2 = guildId;
        int i12 = i10;
        String str3 = str;
        return userOrRoleMentionContentNode.m387copy5RCyINY(channelId, userId, str3, str2, i12, roleColors2, guildId2, roleId2, list3);
    }

    public static final /* synthetic */ void write$Self$chat_release(UserOrRoleMentionContentNode userOrRoleMentionContentNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        MentionContentNode.write$Self(userOrRoleMentionContentNode, compositeEncoder, serialDescriptor);
        Lazy[] lazyArr = $childSerializers;
        if (compositeEncoder.y(serialDescriptor, 0) || userOrRoleMentionContentNode.channelId != null) {
            compositeEncoder.B(serialDescriptor, 0, ChannelId$$serializer.INSTANCE, userOrRoleMentionContentNode.channelId);
        }
        if (compositeEncoder.y(serialDescriptor, 1) || userOrRoleMentionContentNode.userId != null) {
            compositeEncoder.B(serialDescriptor, 1, UserId$$serializer.INSTANCE, userOrRoleMentionContentNode.userId);
        }
        if (compositeEncoder.y(serialDescriptor, 2) || userOrRoleMentionContentNode.roleName != null) {
            compositeEncoder.B(serialDescriptor, 2, n2.f7662a, userOrRoleMentionContentNode.roleName);
        }
        if (compositeEncoder.y(serialDescriptor, 3) || userOrRoleMentionContentNode.parsedUserId != null) {
            compositeEncoder.B(serialDescriptor, 3, n2.f7662a, userOrRoleMentionContentNode.parsedUserId);
        }
        if (compositeEncoder.y(serialDescriptor, 4) || userOrRoleMentionContentNode.roleColor != 0) {
            compositeEncoder.v(serialDescriptor, 4, userOrRoleMentionContentNode.roleColor);
        }
        if (compositeEncoder.y(serialDescriptor, 5) || userOrRoleMentionContentNode.roleColors != null) {
            compositeEncoder.B(serialDescriptor, 5, RoleColors$$serializer.INSTANCE, userOrRoleMentionContentNode.roleColors);
        }
        if (compositeEncoder.y(serialDescriptor, 6) || userOrRoleMentionContentNode.guildId != null) {
            compositeEncoder.B(serialDescriptor, 6, GuildId$$serializer.INSTANCE, userOrRoleMentionContentNode.guildId);
        }
        if (compositeEncoder.y(serialDescriptor, 7) || userOrRoleMentionContentNode.roleId != null) {
            compositeEncoder.B(serialDescriptor, 7, RoleId$$serializer.INSTANCE, userOrRoleMentionContentNode.roleId);
        }
        compositeEncoder.m(serialDescriptor, 8, (ys.o) lazyArr[8].getValue(), userOrRoleMentionContentNode.getContent());
    }

    /* renamed from: component1-qMVnFVQ */
    public final ChannelId m383component1qMVnFVQ() {
        return this.channelId;
    }

    /* renamed from: component2-wUX8bhU */
    public final UserId m384component2wUX8bhU() {
        return this.userId;
    }

    public final String component3() {
        return this.roleName;
    }

    public final String component4() {
        return this.parsedUserId;
    }

    public final int component5() {
        return this.roleColor;
    }

    public final RoleColors component6() {
        return this.roleColors;
    }

    /* renamed from: component7-qOKuAAo */
    public final GuildId m385component7qOKuAAo() {
        return this.guildId;
    }

    /* renamed from: component8-fYaclRY */
    public final RoleId m386component8fYaclRY() {
        return this.roleId;
    }

    @NotNull
    public final List<ContentNode> component9() {
        return this.content;
    }

    @NotNull
    /* renamed from: copy-5RCyINY */
    public final UserOrRoleMentionContentNode m387copy5RCyINY(ChannelId channelId, UserId userId, String str, String str2, int i10, RoleColors roleColors, GuildId guildId, RoleId roleId, @NotNull List<? extends ContentNode> content) {
        Intrinsics.checkNotNullParameter(content, "content");
        return new UserOrRoleMentionContentNode(channelId, userId, str, str2, i10, roleColors, guildId, roleId, content, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof UserOrRoleMentionContentNode) {
            UserOrRoleMentionContentNode userOrRoleMentionContentNode = (UserOrRoleMentionContentNode) obj;
            return Intrinsics.areEqual(this.channelId, userOrRoleMentionContentNode.channelId) && Intrinsics.areEqual(this.userId, userOrRoleMentionContentNode.userId) && Intrinsics.areEqual(this.roleName, userOrRoleMentionContentNode.roleName) && Intrinsics.areEqual(this.parsedUserId, userOrRoleMentionContentNode.parsedUserId) && this.roleColor == userOrRoleMentionContentNode.roleColor && Intrinsics.areEqual(this.roleColors, userOrRoleMentionContentNode.roleColors) && Intrinsics.areEqual(this.guildId, userOrRoleMentionContentNode.guildId) && Intrinsics.areEqual(this.roleId, userOrRoleMentionContentNode.roleId) && Intrinsics.areEqual(this.content, userOrRoleMentionContentNode.content);
        }
        return false;
    }

    /* renamed from: getChannelId-qMVnFVQ */
    public final ChannelId m388getChannelIdqMVnFVQ() {
        return this.channelId;
    }

    @Override // com.discord.chat.bridge.contentnode.MentionContentNode
    @NotNull
    public List<ContentNode> getContent() {
        return this.content;
    }

    /* renamed from: getGuildId-qOKuAAo */
    public final GuildId m389getGuildIdqOKuAAo() {
        return this.guildId;
    }

    public final String getParsedUserId() {
        return this.parsedUserId;
    }

    public final int getRoleColor() {
        return this.roleColor;
    }

    public final RoleColors getRoleColors() {
        return this.roleColors;
    }

    /* renamed from: getRoleId-fYaclRY */
    public final RoleId m390getRoleIdfYaclRY() {
        return this.roleId;
    }

    public final String getRoleName() {
        return this.roleName;
    }

    /* renamed from: getUserId-wUX8bhU */
    public final UserId m391getUserIdwUX8bhU() {
        return this.userId;
    }

    public int hashCode() {
        ChannelId channelId = this.channelId;
        int m1065hashCodeimpl = (channelId == null ? 0 : ChannelId.m1065hashCodeimpl(channelId.m1069unboximpl())) * 31;
        UserId userId = this.userId;
        int m1143hashCodeimpl = (m1065hashCodeimpl + (userId == null ? 0 : UserId.m1143hashCodeimpl(userId.m1147unboximpl()))) * 31;
        String str = this.roleName;
        int hashCode = (m1143hashCodeimpl + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.parsedUserId;
        int hashCode2 = (((hashCode + (str2 == null ? 0 : str2.hashCode())) * 31) + Integer.hashCode(this.roleColor)) * 31;
        RoleColors roleColors = this.roleColors;
        int hashCode3 = (hashCode2 + (roleColors == null ? 0 : roleColors.hashCode())) * 31;
        GuildId guildId = this.guildId;
        int m1078hashCodeimpl = (hashCode3 + (guildId == null ? 0 : GuildId.m1078hashCodeimpl(guildId.m1082unboximpl()))) * 31;
        RoleId roleId = this.roleId;
        return ((m1078hashCodeimpl + (roleId != null ? RoleId.m1117hashCodeimpl(roleId.m1121unboximpl()) : 0)) * 31) + this.content.hashCode();
    }

    @NotNull
    public String toString() {
        ChannelId channelId = this.channelId;
        UserId userId = this.userId;
        String str = this.roleName;
        String str2 = this.parsedUserId;
        int i10 = this.roleColor;
        RoleColors roleColors = this.roleColors;
        GuildId guildId = this.guildId;
        RoleId roleId = this.roleId;
        List<ContentNode> list = this.content;
        return "UserOrRoleMentionContentNode(channelId=" + channelId + ", userId=" + userId + ", roleName=" + str + ", parsedUserId=" + str2 + ", roleColor=" + i10 + ", roleColors=" + roleColors + ", guildId=" + guildId + ", roleId=" + roleId + ", content=" + list + ")";
    }

    public /* synthetic */ UserOrRoleMentionContentNode(ChannelId channelId, UserId userId, String str, String str2, int i10, RoleColors roleColors, GuildId guildId, RoleId roleId, List list, DefaultConstructorMarker defaultConstructorMarker) {
        this(channelId, userId, str, str2, i10, roleColors, guildId, roleId, list);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private /* synthetic */ UserOrRoleMentionContentNode(int i10, ChannelId channelId, UserId userId, String str, String str2, int i11, RoleColors roleColors, GuildId guildId, RoleId roleId, List list, SerializationConstructorMarker serializationConstructorMarker) {
        super(i10, serializationConstructorMarker);
        if (256 != (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER)) {
            v1.b(i10, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, UserOrRoleMentionContentNode$$serializer.INSTANCE.getDescriptor());
        }
        if ((i10 & 1) == 0) {
            this.channelId = null;
        } else {
            this.channelId = channelId;
        }
        if ((i10 & 2) == 0) {
            this.userId = null;
        } else {
            this.userId = userId;
        }
        if ((i10 & 4) == 0) {
            this.roleName = null;
        } else {
            this.roleName = str;
        }
        if ((i10 & 8) == 0) {
            this.parsedUserId = null;
        } else {
            this.parsedUserId = str2;
        }
        if ((i10 & 16) == 0) {
            this.roleColor = 0;
        } else {
            this.roleColor = i11;
        }
        if ((i10 & 32) == 0) {
            this.roleColors = null;
        } else {
            this.roleColors = roleColors;
        }
        if ((i10 & 64) == 0) {
            this.guildId = null;
        } else {
            this.guildId = guildId;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.roleId = null;
        } else {
            this.roleId = roleId;
        }
        this.content = list;
    }

    public /* synthetic */ UserOrRoleMentionContentNode(ChannelId channelId, UserId userId, String str, String str2, int i10, RoleColors roleColors, GuildId guildId, RoleId roleId, List list, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? null : channelId, (i11 & 2) != 0 ? null : userId, (i11 & 4) != 0 ? null : str, (i11 & 8) != 0 ? null : str2, (i11 & 16) != 0 ? 0 : i10, (i11 & 32) != 0 ? null : roleColors, (i11 & 64) != 0 ? null : guildId, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : roleId, list, null);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    private UserOrRoleMentionContentNode(ChannelId channelId, UserId userId, String str, String str2, int i10, RoleColors roleColors, GuildId guildId, RoleId roleId, List<? extends ContentNode> content) {
        super(null);
        Intrinsics.checkNotNullParameter(content, "content");
        this.channelId = channelId;
        this.userId = userId;
        this.roleName = str;
        this.parsedUserId = str2;
        this.roleColor = i10;
        this.roleColors = roleColors;
        this.guildId = guildId;
        this.roleId = roleId;
        this.content = content;
    }
}
