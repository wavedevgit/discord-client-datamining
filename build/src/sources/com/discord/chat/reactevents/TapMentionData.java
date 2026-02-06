package com.discord.chat.reactevents;

import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import ft.m;
import jt.n2;
import jt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 '2\u00020\u0001:\u0002&'B-\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0007\u0010\bBC\b\u0010\u0012\u0006\u0010\t\u001a\u00020\n\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u0007\u0010\rJ\u000b\u0010\u0013\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0015\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0016\u001a\u0004\u0018\u00010\u0003HÆ\u0003J7\u0010\u0017\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u001bHÖ\u0003J\t\u0010\u001c\u001a\u00020\nHÖ\u0001J\t\u0010\u001d\u001a\u00020\u0003HÖ\u0001J%\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u00002\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020$H\u0001¢\u0006\u0002\b%R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000fR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000f¨\u0006("}, d2 = {"Lcom/discord/chat/reactevents/TapMentionData;", "Lcom/discord/reactevents/ReactEvent;", "userId", "", "channelId", "roleName", "parsedUserId", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getUserId", "()Ljava/lang/String;", "getChannelId", "getRoleName", "getParsedUserId", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapMentionData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String channelId;
    private final String parsedUserId;
    private final String roleName;
    private final String userId;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/TapMentionData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/TapMentionData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TapMentionData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ TapMentionData(int i10, String str, String str2, String str3, String str4, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, TapMentionData$$serializer.INSTANCE.getDescriptor());
        }
        this.userId = str;
        this.channelId = str2;
        this.roleName = str3;
        this.parsedUserId = str4;
    }

    public static /* synthetic */ TapMentionData copy$default(TapMentionData tapMentionData, String str, String str2, String str3, String str4, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapMentionData.userId;
        }
        if ((i10 & 2) != 0) {
            str2 = tapMentionData.channelId;
        }
        if ((i10 & 4) != 0) {
            str3 = tapMentionData.roleName;
        }
        if ((i10 & 8) != 0) {
            str4 = tapMentionData.parsedUserId;
        }
        return tapMentionData.copy(str, str2, str3, str4);
    }

    public static final /* synthetic */ void write$Self$chat_release(TapMentionData tapMentionData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        n2 n2Var = n2.f31041a;
        compositeEncoder.l(serialDescriptor, 0, n2Var, tapMentionData.userId);
        compositeEncoder.z(serialDescriptor, 1, tapMentionData.channelId);
        compositeEncoder.l(serialDescriptor, 2, n2Var, tapMentionData.roleName);
        compositeEncoder.l(serialDescriptor, 3, n2Var, tapMentionData.parsedUserId);
    }

    public final String component1() {
        return this.userId;
    }

    @NotNull
    public final String component2() {
        return this.channelId;
    }

    public final String component3() {
        return this.roleName;
    }

    public final String component4() {
        return this.parsedUserId;
    }

    @NotNull
    public final TapMentionData copy(String str, @NotNull String channelId, String str2, String str3) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        return new TapMentionData(str, channelId, str2, str3);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapMentionData) {
            TapMentionData tapMentionData = (TapMentionData) obj;
            return Intrinsics.areEqual(this.userId, tapMentionData.userId) && Intrinsics.areEqual(this.channelId, tapMentionData.channelId) && Intrinsics.areEqual(this.roleName, tapMentionData.roleName) && Intrinsics.areEqual(this.parsedUserId, tapMentionData.parsedUserId);
        }
        return false;
    }

    @NotNull
    public final String getChannelId() {
        return this.channelId;
    }

    public final String getParsedUserId() {
        return this.parsedUserId;
    }

    public final String getRoleName() {
        return this.roleName;
    }

    public final String getUserId() {
        return this.userId;
    }

    public int hashCode() {
        String str = this.userId;
        int hashCode = (((str == null ? 0 : str.hashCode()) * 31) + this.channelId.hashCode()) * 31;
        String str2 = this.roleName;
        int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.parsedUserId;
        return hashCode2 + (str3 != null ? str3.hashCode() : 0);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String str = this.userId;
        String str2 = this.channelId;
        String str3 = this.roleName;
        String str4 = this.parsedUserId;
        return "TapMentionData(userId=" + str + ", channelId=" + str2 + ", roleName=" + str3 + ", parsedUserId=" + str4 + ")";
    }

    public TapMentionData(String str, @NotNull String channelId, String str2, String str3) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        this.userId = str;
        this.channelId = channelId;
        this.roleName = str2;
        this.parsedUserId = str3;
    }
}
