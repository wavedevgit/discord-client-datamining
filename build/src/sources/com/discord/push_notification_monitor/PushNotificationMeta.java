package com.discord.push_notification_monitor;

import at.m;
import dt.n2;
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
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0018\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 22\u00020\u0001:\u000212BI\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\f\u0010\rB]\b\u0010\u0012\u0006\u0010\u000e\u001a\u00020\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011¢\u0006\u0004\b\f\u0010\u0012J\t\u0010\u001d\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001e\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001f\u001a\u00020\u0007HÆ\u0003J\t\u0010 \u001a\u00020\u0007HÆ\u0003J\u000b\u0010!\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\u000b\u0010\"\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\u000b\u0010#\u001a\u0004\u0018\u00010\u0007HÆ\u0003JU\u0010$\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\u00072\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u0007HÆ\u0001J\u0013\u0010%\u001a\u00020\u00052\b\u0010&\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010'\u001a\u00020\u000fHÖ\u0001J\t\u0010(\u001a\u00020\u0007HÖ\u0001J%\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020\u00002\u0006\u0010,\u001a\u00020-2\u0006\u0010.\u001a\u00020/H\u0001¢\u0006\u0002\b0R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0011\u0010\b\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0018R\u0013\u0010\t\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0018R\u0013\u0010\n\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0018R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0018¨\u00063"}, d2 = {"Lcom/discord/push_notification_monitor/PushNotificationMeta;", "", "receivedTimestamp", "", "silent", "", "type", "", "title", "content", "channelId", "messageId", "<init>", "(JZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IJZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getReceivedTimestamp", "()J", "getSilent", "()Z", "getType", "()Ljava/lang/String;", "getTitle", "getContent", "getChannelId", "getMessageId", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "copy", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$push_notification_monitor_release", "$serializer", "Companion", "push_notification_monitor_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PushNotificationMeta {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String channelId;
    private final String content;
    private final String messageId;
    private final long receivedTimestamp;
    private final boolean silent;
    @NotNull
    private final String title;
    @NotNull
    private final String type;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/push_notification_monitor/PushNotificationMeta$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/push_notification_monitor/PushNotificationMeta;", "push_notification_monitor_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return PushNotificationMeta$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ PushNotificationMeta(int i10, long j10, boolean z10, String str, String str2, String str3, String str4, String str5, SerializationConstructorMarker serializationConstructorMarker) {
        if (31 != (i10 & 31)) {
            v1.b(i10, 31, PushNotificationMeta$$serializer.INSTANCE.getDescriptor());
        }
        this.receivedTimestamp = j10;
        this.silent = z10;
        this.type = str;
        this.title = str2;
        this.content = str3;
        if ((i10 & 32) == 0) {
            this.channelId = null;
        } else {
            this.channelId = str4;
        }
        if ((i10 & 64) == 0) {
            this.messageId = null;
        } else {
            this.messageId = str5;
        }
    }

    public static /* synthetic */ PushNotificationMeta copy$default(PushNotificationMeta pushNotificationMeta, long j10, boolean z10, String str, String str2, String str3, String str4, String str5, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = pushNotificationMeta.receivedTimestamp;
        }
        long j11 = j10;
        if ((i10 & 2) != 0) {
            z10 = pushNotificationMeta.silent;
        }
        boolean z11 = z10;
        if ((i10 & 4) != 0) {
            str = pushNotificationMeta.type;
        }
        String str6 = str;
        if ((i10 & 8) != 0) {
            str2 = pushNotificationMeta.title;
        }
        String str7 = str2;
        if ((i10 & 16) != 0) {
            str3 = pushNotificationMeta.content;
        }
        return pushNotificationMeta.copy(j11, z11, str6, str7, str3, (i10 & 32) != 0 ? pushNotificationMeta.channelId : str4, (i10 & 64) != 0 ? pushNotificationMeta.messageId : str5);
    }

    public static final /* synthetic */ void write$Self$push_notification_monitor_release(PushNotificationMeta pushNotificationMeta, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.E(serialDescriptor, 0, pushNotificationMeta.receivedTimestamp);
        compositeEncoder.x(serialDescriptor, 1, pushNotificationMeta.silent);
        compositeEncoder.y(serialDescriptor, 2, pushNotificationMeta.type);
        compositeEncoder.y(serialDescriptor, 3, pushNotificationMeta.title);
        n2 n2Var = n2.f20978a;
        compositeEncoder.s(serialDescriptor, 4, n2Var, pushNotificationMeta.content);
        if (compositeEncoder.z(serialDescriptor, 5) || pushNotificationMeta.channelId != null) {
            compositeEncoder.s(serialDescriptor, 5, n2Var, pushNotificationMeta.channelId);
        }
        if (compositeEncoder.z(serialDescriptor, 6) || pushNotificationMeta.messageId != null) {
            compositeEncoder.s(serialDescriptor, 6, n2Var, pushNotificationMeta.messageId);
        }
    }

    public final long component1() {
        return this.receivedTimestamp;
    }

    public final boolean component2() {
        return this.silent;
    }

    @NotNull
    public final String component3() {
        return this.type;
    }

    @NotNull
    public final String component4() {
        return this.title;
    }

    public final String component5() {
        return this.content;
    }

    public final String component6() {
        return this.channelId;
    }

    public final String component7() {
        return this.messageId;
    }

    @NotNull
    public final PushNotificationMeta copy(long j10, boolean z10, @NotNull String type, @NotNull String title, String str, String str2, String str3) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(title, "title");
        return new PushNotificationMeta(j10, z10, type, title, str, str2, str3);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof PushNotificationMeta) {
            PushNotificationMeta pushNotificationMeta = (PushNotificationMeta) obj;
            return this.receivedTimestamp == pushNotificationMeta.receivedTimestamp && this.silent == pushNotificationMeta.silent && Intrinsics.areEqual(this.type, pushNotificationMeta.type) && Intrinsics.areEqual(this.title, pushNotificationMeta.title) && Intrinsics.areEqual(this.content, pushNotificationMeta.content) && Intrinsics.areEqual(this.channelId, pushNotificationMeta.channelId) && Intrinsics.areEqual(this.messageId, pushNotificationMeta.messageId);
        }
        return false;
    }

    public final String getChannelId() {
        return this.channelId;
    }

    public final String getContent() {
        return this.content;
    }

    public final String getMessageId() {
        return this.messageId;
    }

    public final long getReceivedTimestamp() {
        return this.receivedTimestamp;
    }

    public final boolean getSilent() {
        return this.silent;
    }

    @NotNull
    public final String getTitle() {
        return this.title;
    }

    @NotNull
    public final String getType() {
        return this.type;
    }

    public int hashCode() {
        int hashCode = ((((((Long.hashCode(this.receivedTimestamp) * 31) + Boolean.hashCode(this.silent)) * 31) + this.type.hashCode()) * 31) + this.title.hashCode()) * 31;
        String str = this.content;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.channelId;
        int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.messageId;
        return hashCode3 + (str3 != null ? str3.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        long j10 = this.receivedTimestamp;
        boolean z10 = this.silent;
        String str = this.type;
        String str2 = this.title;
        String str3 = this.content;
        String str4 = this.channelId;
        String str5 = this.messageId;
        return "PushNotificationMeta(receivedTimestamp=" + j10 + ", silent=" + z10 + ", type=" + str + ", title=" + str2 + ", content=" + str3 + ", channelId=" + str4 + ", messageId=" + str5 + ")";
    }

    public PushNotificationMeta(long j10, boolean z10, @NotNull String type, @NotNull String title, String str, String str2, String str3) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(title, "title");
        this.receivedTimestamp = j10;
        this.silent = z10;
        this.type = type;
        this.title = title;
        this.content = str;
        this.channelId = str2;
        this.messageId = str3;
    }

    public /* synthetic */ PushNotificationMeta(long j10, boolean z10, String str, String str2, String str3, String str4, String str5, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, z10, str, str2, str3, (i10 & 32) != 0 ? null : str4, (i10 & 64) != 0 ? null : str5);
    }
}
