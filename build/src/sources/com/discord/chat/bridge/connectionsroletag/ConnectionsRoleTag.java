package com.discord.chat.bridge.connectionsroletag;

import at.v1;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 '2\u00020\u0001:\u0002&'B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tB?\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u0006\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\b\u0010\rJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0006HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0006HÆ\u0003J1\u0010\u0018\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\u0006HÆ\u0001J\u0013\u0010\u0019\u001a\u00020\u001a2\b\u0010\u001b\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001c\u001a\u00020\u0006HÖ\u0001J\t\u0010\u001d\u001a\u00020\u0003HÖ\u0001J%\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u00002\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020$H\u0001¢\u0006\u0002\b%R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0007\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0012¨\u0006("}, d2 = {"Lcom/discord/chat/bridge/connectionsroletag/ConnectionsRoleTag;", "", StackTraceHelper.ID_KEY, "", StackTraceHelper.NAME_KEY, ViewProps.BACKGROUND_COLOR, "", "iconColor", "<init>", "(Ljava/lang/String;Ljava/lang/String;II)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;IILkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getId", "()Ljava/lang/String;", "getName", "getBackgroundColor", "()I", "getIconColor", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ConnectionsRoleTag {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int backgroundColor;
    private final int iconColor;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f9663id;
    @NotNull
    private final String name;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/connectionsroletag/ConnectionsRoleTag$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/connectionsroletag/ConnectionsRoleTag;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ConnectionsRoleTag$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ConnectionsRoleTag(int i10, String str, String str2, int i11, int i12, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, ConnectionsRoleTag$$serializer.INSTANCE.getDescriptor());
        }
        this.f9663id = str;
        this.name = str2;
        this.backgroundColor = i11;
        this.iconColor = i12;
    }

    public static /* synthetic */ ConnectionsRoleTag copy$default(ConnectionsRoleTag connectionsRoleTag, String str, String str2, int i10, int i11, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            str = connectionsRoleTag.f9663id;
        }
        if ((i12 & 2) != 0) {
            str2 = connectionsRoleTag.name;
        }
        if ((i12 & 4) != 0) {
            i10 = connectionsRoleTag.backgroundColor;
        }
        if ((i12 & 8) != 0) {
            i11 = connectionsRoleTag.iconColor;
        }
        return connectionsRoleTag.copy(str, str2, i10, i11);
    }

    public static final /* synthetic */ void write$Self$chat_release(ConnectionsRoleTag connectionsRoleTag, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.y(serialDescriptor, 0, connectionsRoleTag.f9663id);
        compositeEncoder.y(serialDescriptor, 1, connectionsRoleTag.name);
        compositeEncoder.w(serialDescriptor, 2, connectionsRoleTag.backgroundColor);
        compositeEncoder.w(serialDescriptor, 3, connectionsRoleTag.iconColor);
    }

    @NotNull
    public final String component1() {
        return this.f9663id;
    }

    @NotNull
    public final String component2() {
        return this.name;
    }

    public final int component3() {
        return this.backgroundColor;
    }

    public final int component4() {
        return this.iconColor;
    }

    @NotNull
    public final ConnectionsRoleTag copy(@NotNull String id2, @NotNull String name, int i10, int i11) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(name, "name");
        return new ConnectionsRoleTag(id2, name, i10, i11);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ConnectionsRoleTag) {
            ConnectionsRoleTag connectionsRoleTag = (ConnectionsRoleTag) obj;
            return Intrinsics.areEqual(this.f9663id, connectionsRoleTag.f9663id) && Intrinsics.areEqual(this.name, connectionsRoleTag.name) && this.backgroundColor == connectionsRoleTag.backgroundColor && this.iconColor == connectionsRoleTag.iconColor;
        }
        return false;
    }

    public final int getBackgroundColor() {
        return this.backgroundColor;
    }

    public final int getIconColor() {
        return this.iconColor;
    }

    @NotNull
    public final String getId() {
        return this.f9663id;
    }

    @NotNull
    public final String getName() {
        return this.name;
    }

    public int hashCode() {
        return (((((this.f9663id.hashCode() * 31) + this.name.hashCode()) * 31) + Integer.hashCode(this.backgroundColor)) * 31) + Integer.hashCode(this.iconColor);
    }

    @NotNull
    public String toString() {
        String str = this.f9663id;
        String str2 = this.name;
        int i10 = this.backgroundColor;
        int i11 = this.iconColor;
        return "ConnectionsRoleTag(id=" + str + ", name=" + str2 + ", backgroundColor=" + i10 + ", iconColor=" + i11 + ")";
    }

    public ConnectionsRoleTag(@NotNull String id2, @NotNull String name, int i10, int i11) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f9663id = id2;
        this.name = name;
        this.backgroundColor = i10;
        this.iconColor = i11;
    }
}
