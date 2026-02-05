package com.discord.chat.reactevents;

import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import dt.m;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 '2\u00020\u0001:\u0002&'B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003¢\u0006\u0004\b\u0007\u0010\bBC\b\u0010\u0012\u0006\u0010\t\u001a\u00020\n\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u0007\u0010\rJ\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J1\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u001bHÖ\u0003J\t\u0010\u001c\u001a\u00020\nHÖ\u0001J\t\u0010\u001d\u001a\u00020\u0003HÖ\u0001J%\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u00002\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020$H\u0001¢\u0006\u0002\b%R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000fR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000f¨\u0006("}, d2 = {"Lcom/discord/chat/reactevents/TapConnectionsRoleTagData;", "Lcom/discord/reactevents/ReactEvent;", "userId", "", "guildId", "channelId", "roleId", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getUserId", "()Ljava/lang/String;", "getGuildId", "getChannelId", "getRoleId", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapConnectionsRoleTagData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String channelId;
    @NotNull
    private final String guildId;
    @NotNull
    private final String roleId;
    @NotNull
    private final String userId;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/TapConnectionsRoleTagData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/TapConnectionsRoleTagData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TapConnectionsRoleTagData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ TapConnectionsRoleTagData(int i10, String str, String str2, String str3, String str4, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, TapConnectionsRoleTagData$$serializer.INSTANCE.getDescriptor());
        }
        this.userId = str;
        this.guildId = str2;
        this.channelId = str3;
        this.roleId = str4;
    }

    public static /* synthetic */ TapConnectionsRoleTagData copy$default(TapConnectionsRoleTagData tapConnectionsRoleTagData, String str, String str2, String str3, String str4, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapConnectionsRoleTagData.userId;
        }
        if ((i10 & 2) != 0) {
            str2 = tapConnectionsRoleTagData.guildId;
        }
        if ((i10 & 4) != 0) {
            str3 = tapConnectionsRoleTagData.channelId;
        }
        if ((i10 & 8) != 0) {
            str4 = tapConnectionsRoleTagData.roleId;
        }
        return tapConnectionsRoleTagData.copy(str, str2, str3, str4);
    }

    public static final /* synthetic */ void write$Self$chat_release(TapConnectionsRoleTagData tapConnectionsRoleTagData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, tapConnectionsRoleTagData.userId);
        compositeEncoder.x(serialDescriptor, 1, tapConnectionsRoleTagData.guildId);
        compositeEncoder.x(serialDescriptor, 2, tapConnectionsRoleTagData.channelId);
        compositeEncoder.x(serialDescriptor, 3, tapConnectionsRoleTagData.roleId);
    }

    @NotNull
    public final String component1() {
        return this.userId;
    }

    @NotNull
    public final String component2() {
        return this.guildId;
    }

    @NotNull
    public final String component3() {
        return this.channelId;
    }

    @NotNull
    public final String component4() {
        return this.roleId;
    }

    @NotNull
    public final TapConnectionsRoleTagData copy(@NotNull String userId, @NotNull String guildId, @NotNull String channelId, @NotNull String roleId) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(guildId, "guildId");
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Intrinsics.checkNotNullParameter(roleId, "roleId");
        return new TapConnectionsRoleTagData(userId, guildId, channelId, roleId);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapConnectionsRoleTagData) {
            TapConnectionsRoleTagData tapConnectionsRoleTagData = (TapConnectionsRoleTagData) obj;
            return Intrinsics.areEqual(this.userId, tapConnectionsRoleTagData.userId) && Intrinsics.areEqual(this.guildId, tapConnectionsRoleTagData.guildId) && Intrinsics.areEqual(this.channelId, tapConnectionsRoleTagData.channelId) && Intrinsics.areEqual(this.roleId, tapConnectionsRoleTagData.roleId);
        }
        return false;
    }

    @NotNull
    public final String getChannelId() {
        return this.channelId;
    }

    @NotNull
    public final String getGuildId() {
        return this.guildId;
    }

    @NotNull
    public final String getRoleId() {
        return this.roleId;
    }

    @NotNull
    public final String getUserId() {
        return this.userId;
    }

    public int hashCode() {
        return (((((this.userId.hashCode() * 31) + this.guildId.hashCode()) * 31) + this.channelId.hashCode()) * 31) + this.roleId.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String str = this.userId;
        String str2 = this.guildId;
        String str3 = this.channelId;
        String str4 = this.roleId;
        return "TapConnectionsRoleTagData(userId=" + str + ", guildId=" + str2 + ", channelId=" + str3 + ", roleId=" + str4 + ")";
    }

    public TapConnectionsRoleTagData(@NotNull String userId, @NotNull String guildId, @NotNull String channelId, @NotNull String roleId) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(guildId, "guildId");
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Intrinsics.checkNotNullParameter(roleId, "roleId");
        this.userId = userId;
        this.guildId = guildId;
        this.channelId = channelId;
        this.roleId = roleId;
    }
}
