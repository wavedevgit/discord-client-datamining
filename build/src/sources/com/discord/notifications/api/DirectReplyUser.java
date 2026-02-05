package com.discord.notifications.api;

import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import dt.m;
import gt.n2;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 ,2\u00020\u0001:\u0002+,B3\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\b\u0010\tBC\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\b\u0010\u000eJ\u0010\u0010\u0016\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0017\u0010\u0010J\u000b\u0010\u0018\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010\u0019\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010\u001a\u001a\u0004\u0018\u00010\u0005HÆ\u0003J>\u0010\u001b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0005HÆ\u0001¢\u0006\u0004\b\u001c\u0010\u001dJ\u0013\u0010\u001e\u001a\u00020\u001f2\b\u0010 \u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010!\u001a\u00020\u000bHÖ\u0001J\t\u0010\"\u001a\u00020\u0005HÖ\u0001J%\u0010#\u001a\u00020$2\u0006\u0010%\u001a\u00020\u00002\u0006\u0010&\u001a\u00020'2\u0006\u0010(\u001a\u00020)H\u0001¢\u0006\u0002\b*R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0011\u001a\u0004\b\u000f\u0010\u0010R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0013R\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0013¨\u0006-"}, d2 = {"Lcom/discord/notifications/api/DirectReplyUser;", "", StackTraceHelper.ID_KEY, "Lcom/discord/primitives/UserId;", NotificationRenderer.USERNAME, "", "discriminator", "avatar", "<init>", "(JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/primitives/UserId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getId-re6GcUE", "()J", "J", "getUsername", "()Ljava/lang/String;", "getDiscriminator", "getAvatar", "component1", "component1-re6GcUE", "component2", "component3", "component4", "copy", "copy-ASSxI_0", "(JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/discord/notifications/api/DirectReplyUser;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$notification_api_release", "$serializer", "Companion", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DirectReplyUser {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String avatar;
    private final String discriminator;

    /* renamed from: id  reason: collision with root package name */
    private final long f9629id;
    private final String username;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/notifications/api/DirectReplyUser$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/notifications/api/DirectReplyUser;", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return DirectReplyUser$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ DirectReplyUser(int i10, UserId userId, String str, String str2, String str3, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, userId, str, str2, str3, serializationConstructorMarker);
    }

    /* renamed from: copy-ASSxI_0$default  reason: not valid java name */
    public static /* synthetic */ DirectReplyUser m993copyASSxI_0$default(DirectReplyUser directReplyUser, long j10, String str, String str2, String str3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = directReplyUser.f9629id;
        }
        long j11 = j10;
        if ((i10 & 2) != 0) {
            str = directReplyUser.username;
        }
        String str4 = str;
        if ((i10 & 4) != 0) {
            str2 = directReplyUser.discriminator;
        }
        String str5 = str2;
        if ((i10 & 8) != 0) {
            str3 = directReplyUser.avatar;
        }
        return directReplyUser.m995copyASSxI_0(j11, str4, str5, str3);
    }

    public static final /* synthetic */ void write$Self$notification_api_release(DirectReplyUser directReplyUser, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.l(serialDescriptor, 0, UserId$$serializer.INSTANCE, UserId.m1137boximpl(directReplyUser.f9629id));
        if (compositeEncoder.z(serialDescriptor, 1) || directReplyUser.username != null) {
            compositeEncoder.A(serialDescriptor, 1, n2.f25302a, directReplyUser.username);
        }
        if (compositeEncoder.z(serialDescriptor, 2) || directReplyUser.discriminator != null) {
            compositeEncoder.A(serialDescriptor, 2, n2.f25302a, directReplyUser.discriminator);
        }
        if (compositeEncoder.z(serialDescriptor, 3) || directReplyUser.avatar != null) {
            compositeEncoder.A(serialDescriptor, 3, n2.f25302a, directReplyUser.avatar);
        }
    }

    /* renamed from: component1-re6GcUE  reason: not valid java name */
    public final long m994component1re6GcUE() {
        return this.f9629id;
    }

    public final String component2() {
        return this.username;
    }

    public final String component3() {
        return this.discriminator;
    }

    public final String component4() {
        return this.avatar;
    }

    @NotNull
    /* renamed from: copy-ASSxI_0  reason: not valid java name */
    public final DirectReplyUser m995copyASSxI_0(long j10, String str, String str2, String str3) {
        return new DirectReplyUser(j10, str, str2, str3, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof DirectReplyUser) {
            DirectReplyUser directReplyUser = (DirectReplyUser) obj;
            return UserId.m1141equalsimpl0(this.f9629id, directReplyUser.f9629id) && Intrinsics.areEqual(this.username, directReplyUser.username) && Intrinsics.areEqual(this.discriminator, directReplyUser.discriminator) && Intrinsics.areEqual(this.avatar, directReplyUser.avatar);
        }
        return false;
    }

    public final String getAvatar() {
        return this.avatar;
    }

    public final String getDiscriminator() {
        return this.discriminator;
    }

    /* renamed from: getId-re6GcUE  reason: not valid java name */
    public final long m996getIdre6GcUE() {
        return this.f9629id;
    }

    public final String getUsername() {
        return this.username;
    }

    public int hashCode() {
        int m1142hashCodeimpl = UserId.m1142hashCodeimpl(this.f9629id) * 31;
        String str = this.username;
        int hashCode = (m1142hashCodeimpl + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.discriminator;
        int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.avatar;
        return hashCode2 + (str3 != null ? str3.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String m1144toStringimpl = UserId.m1144toStringimpl(this.f9629id);
        String str = this.username;
        String str2 = this.discriminator;
        String str3 = this.avatar;
        return "DirectReplyUser(id=" + m1144toStringimpl + ", username=" + str + ", discriminator=" + str2 + ", avatar=" + str3 + ")";
    }

    public /* synthetic */ DirectReplyUser(long j10, String str, String str2, String str3, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, str, str2, str3);
    }

    private /* synthetic */ DirectReplyUser(int i10, UserId userId, String str, String str2, String str3, SerializationConstructorMarker serializationConstructorMarker) {
        if (1 != (i10 & 1)) {
            v1.b(i10, 1, DirectReplyUser$$serializer.INSTANCE.getDescriptor());
        }
        this.f9629id = userId.m1146unboximpl();
        if ((i10 & 2) == 0) {
            this.username = null;
        } else {
            this.username = str;
        }
        if ((i10 & 4) == 0) {
            this.discriminator = null;
        } else {
            this.discriminator = str2;
        }
        if ((i10 & 8) == 0) {
            this.avatar = null;
        } else {
            this.avatar = str3;
        }
    }

    private DirectReplyUser(long j10, String str, String str2, String str3) {
        this.f9629id = j10;
        this.username = str;
        this.discriminator = str2;
        this.avatar = str3;
    }

    public /* synthetic */ DirectReplyUser(long j10, String str, String str2, String str3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, (i10 & 2) != 0 ? null : str, (i10 & 4) != 0 ? null : str2, (i10 & 8) != 0 ? null : str3, null);
    }
}
