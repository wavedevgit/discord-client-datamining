package com.discord.chat.bridge.codedlinks;

import at.m;
import com.discord.chat.bridge.roleicons.RoleIcon;
import com.discord.chat.bridge.roleicons.RoleIcon$$serializer;
import com.discord.recycler_view.utils.ItemDiffableType;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
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
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0002\b\b\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 -2\u00020\u0001:\u0002,-B-\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0005\u001a\u00020\u0006\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b\t\u0010\nBA\b\u0010\u0012\u0006\u0010\u000b\u001a\u00020\u0006\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\t\u0010\u000eJ\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001b\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001c\u001a\u00020\u0006HÆ\u0003J\u000b\u0010\u001d\u001a\u0004\u0018\u00010\bHÆ\u0003J3\u0010\u001e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0003\u0010\u0005\u001a\u00020\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\bHÆ\u0001J\u0013\u0010\u001f\u001a\u00020 2\b\u0010!\u001a\u0004\u0018\u00010\u0017HÖ\u0003J\t\u0010\"\u001a\u00020\u0006HÖ\u0001J\t\u0010#\u001a\u00020\u0003HÖ\u0001J%\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020\u00002\u0006\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020*H\u0001¢\u0006\u0002\b+R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010R\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0013\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0014\u0010\u0016\u001a\u00020\u00178VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0018\u0010\u0019¨\u0006."}, d2 = {"Lcom/discord/chat/bridge/codedlinks/InviteRole;", "Lcom/discord/recycler_view/utils/ItemDiffableType;", StackTraceHelper.ID_KEY, "", StackTraceHelper.NAME_KEY, ViewProps.COLOR, "", "roleIcon", "Lcom/discord/chat/bridge/roleicons/RoleIcon;", "<init>", "(Ljava/lang/String;Ljava/lang/String;ILcom/discord/chat/bridge/roleicons/RoleIcon;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;ILcom/discord/chat/bridge/roleicons/RoleIcon;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getId", "()Ljava/lang/String;", "getName", "getColor", "()I", "getRoleIcon", "()Lcom/discord/chat/bridge/roleicons/RoleIcon;", "itemId", "", "getItemId", "()Ljava/lang/Object;", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class InviteRole implements ItemDiffableType {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int color;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f8259id;
    @NotNull
    private final String name;
    private final RoleIcon roleIcon;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/InviteRole$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/codedlinks/InviteRole;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return InviteRole$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ InviteRole(int i10, String str, String str2, int i11, RoleIcon roleIcon, SerializationConstructorMarker serializationConstructorMarker) {
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, InviteRole$$serializer.INSTANCE.getDescriptor());
        }
        this.f8259id = str;
        this.name = str2;
        this.color = i11;
        if ((i10 & 8) == 0) {
            this.roleIcon = null;
        } else {
            this.roleIcon = roleIcon;
        }
    }

    public static /* synthetic */ InviteRole copy$default(InviteRole inviteRole, String str, String str2, int i10, RoleIcon roleIcon, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = inviteRole.f8259id;
        }
        if ((i11 & 2) != 0) {
            str2 = inviteRole.name;
        }
        if ((i11 & 4) != 0) {
            i10 = inviteRole.color;
        }
        if ((i11 & 8) != 0) {
            roleIcon = inviteRole.roleIcon;
        }
        return inviteRole.copy(str, str2, i10, roleIcon);
    }

    public static final /* synthetic */ void write$Self$chat_release(InviteRole inviteRole, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.y(serialDescriptor, 0, inviteRole.f8259id);
        compositeEncoder.y(serialDescriptor, 1, inviteRole.name);
        compositeEncoder.w(serialDescriptor, 2, inviteRole.color);
        if (compositeEncoder.z(serialDescriptor, 3) || inviteRole.roleIcon != null) {
            compositeEncoder.s(serialDescriptor, 3, RoleIcon$$serializer.INSTANCE, inviteRole.roleIcon);
        }
    }

    @NotNull
    public final String component1() {
        return this.f8259id;
    }

    @NotNull
    public final String component2() {
        return this.name;
    }

    public final int component3() {
        return this.color;
    }

    public final RoleIcon component4() {
        return this.roleIcon;
    }

    @NotNull
    public final InviteRole copy(@NotNull String id2, @NotNull String name, int i10, RoleIcon roleIcon) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(name, "name");
        return new InviteRole(id2, name, i10, roleIcon);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InviteRole) {
            InviteRole inviteRole = (InviteRole) obj;
            return Intrinsics.areEqual(this.f8259id, inviteRole.f8259id) && Intrinsics.areEqual(this.name, inviteRole.name) && this.color == inviteRole.color && Intrinsics.areEqual(this.roleIcon, inviteRole.roleIcon);
        }
        return false;
    }

    public final int getColor() {
        return this.color;
    }

    @NotNull
    public final String getId() {
        return this.f8259id;
    }

    @Override // com.discord.recycler_view.utils.ItemDiffableType
    @NotNull
    public Object getItemId() {
        return this.f8259id;
    }

    @NotNull
    public final String getName() {
        return this.name;
    }

    public final RoleIcon getRoleIcon() {
        return this.roleIcon;
    }

    public int hashCode() {
        int hashCode = ((((this.f8259id.hashCode() * 31) + this.name.hashCode()) * 31) + Integer.hashCode(this.color)) * 31;
        RoleIcon roleIcon = this.roleIcon;
        return hashCode + (roleIcon == null ? 0 : roleIcon.hashCode());
    }

    @NotNull
    public String toString() {
        String str = this.f8259id;
        String str2 = this.name;
        int i10 = this.color;
        RoleIcon roleIcon = this.roleIcon;
        return "InviteRole(id=" + str + ", name=" + str2 + ", color=" + i10 + ", roleIcon=" + roleIcon + ")";
    }

    public InviteRole(@NotNull String id2, @NotNull String name, int i10, RoleIcon roleIcon) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f8259id = id2;
        this.name = name;
        this.color = i10;
        this.roleIcon = roleIcon;
    }

    public /* synthetic */ InviteRole(String str, String str2, int i10, RoleIcon roleIcon, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, i10, (i11 & 8) != 0 ? null : roleIcon);
    }
}
