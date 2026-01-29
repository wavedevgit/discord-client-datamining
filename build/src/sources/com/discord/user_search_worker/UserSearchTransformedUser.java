package com.discord.user_search_worker;

import com.discord.notifications.renderer.NotificationRenderer;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import xs.m;
import zs.e;
import zs.j;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010$\n\u0002\b\u0017\n\u0002\u0010\b\n\u0002\b\u0004\b\u0081\b\u0018\u0000 &2\u00020\u0001:\u0002%&B]\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\u0014\u0010\n\u001a\u0010\u0012\u0004\u0012\u00020\u0003\u0012\u0006\u0012\u0004\u0018\u00010\u00030\u000b¢\u0006\u0004\b\f\u0010\rJ\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0019\u001a\u0004\u0018\u00010\u0006HÆ\u0003¢\u0006\u0002\u0010\u0011J\u0010\u0010\u001a\u001a\u0004\u0018\u00010\u0006HÆ\u0003¢\u0006\u0002\u0010\u0011J\u000b\u0010\u001b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u001c\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0017\u0010\u001d\u001a\u0010\u0012\u0004\u0012\u00020\u0003\u0012\u0006\u0012\u0004\u0018\u00010\u00030\u000bHÆ\u0003Jj\u0010\u001e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00062\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00032\u0016\b\u0002\u0010\n\u001a\u0010\u0012\u0004\u0012\u00020\u0003\u0012\u0006\u0012\u0004\u0018\u00010\u00030\u000bHÆ\u0001¢\u0006\u0002\u0010\u001fJ\u0013\u0010 \u001a\u00020\u00062\b\u0010!\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\"\u001a\u00020#HÖ\u0001J\t\u0010$\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0015\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\n\n\u0002\u0010\u0012\u001a\u0004\b\u0005\u0010\u0011R\u0015\u0010\u0007\u001a\u0004\u0018\u00010\u0006¢\u0006\n\n\u0002\u0010\u0012\u001a\u0004\b\u0007\u0010\u0011R\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u000fR\u0013\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u000fR\u001f\u0010\n\u001a\u0010\u0012\u0004\u0012\u00020\u0003\u0012\u0006\u0012\u0004\u0018\u00010\u00030\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016¨\u0006'"}, d2 = {"Lcom/discord/user_search_worker/UserSearchTransformedUser;", "", StackTraceHelper.ID_KEY, "", NotificationRenderer.USERNAME, "isBot", "", "isFriend", "friendNickname", "globalName", "nicknames", "", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/util/Map;)V", "getId", "()Ljava/lang/String;", "getUsername", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getFriendNickname", "getGlobalName", "getNicknames", "()Ljava/util/Map;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "copy", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/util/Map;)Lcom/discord/user_search_worker/UserSearchTransformedUser;", "equals", "other", "hashCode", "", "toString", "Serializer", "Companion", "user_search_worker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m(with = Serializer.class)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class UserSearchTransformedUser {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String friendNickname;
    private final String globalName;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f10848id;
    private final Boolean isBot;
    private final Boolean isFriend;
    @NotNull
    private final Map<String, String> nicknames;
    @NotNull
    private final String username;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/user_search_worker/UserSearchTransformedUser$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/user_search_worker/UserSearchTransformedUser;", "user_search_worker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return Serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bÀ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0010\u0010\u0005\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0007H\u0016J\u0018\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u0002H\u0016R\u0014\u0010\r\u001a\u00020\u000e8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0010¨\u0006\u0011"}, d2 = {"Lcom/discord/user_search_worker/UserSearchTransformedUser$Serializer;", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/user_search_worker/UserSearchTransformedUser;", "<init>", "()V", "deserialize", "decoder", "Lkotlinx/serialization/encoding/Decoder;", "serialize", "", "encoder", "Lkotlinx/serialization/encoding/Encoder;", "value", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "user_search_worker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nUserSearchTransformedUser.kt\nKotlin\n*S Kotlin\n*F\n+ 1 UserSearchTransformedUser.kt\ncom/discord/user_search_worker/UserSearchTransformedUser$Serializer\n+ 2 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n*L\n1#1,67:1\n126#2:68\n153#2,3:69\n*S KotlinDebug\n*F\n+ 1 UserSearchTransformedUser.kt\ncom/discord/user_search_worker/UserSearchTransformedUser$Serializer\n*L\n38#1:68\n38#1:69,3\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Serializer implements KSerializer {
        @NotNull
        public static final Serializer INSTANCE = new Serializer();

        private Serializer() {
        }

        @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
        @NotNull
        public SerialDescriptor getDescriptor() {
            return j.b("UserSearchTransformedUser", e.i.f56091a);
        }

        /* JADX WARN: Code restructure failed: missing block: B:16:0x0071, code lost:
            if (r0 == null) goto L52;
         */
        @Override // kotlinx.serialization.DeserializationStrategy
        @org.jetbrains.annotations.NotNull
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public com.discord.user_search_worker.UserSearchTransformedUser deserialize(@org.jetbrains.annotations.NotNull kotlinx.serialization.encoding.Decoder r11) {
            /*
                Method dump skipped, instructions count: 279
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: com.discord.user_search_worker.UserSearchTransformedUser.Serializer.deserialize(kotlinx.serialization.encoding.Decoder):com.discord.user_search_worker.UserSearchTransformedUser");
        }

        @Override // xs.o
        public void serialize(@NotNull Encoder encoder, @NotNull UserSearchTransformedUser value) {
            Intrinsics.checkNotNullParameter(encoder, "encoder");
            Intrinsics.checkNotNullParameter(value, "value");
            throw new UnsupportedOperationException();
        }
    }

    public UserSearchTransformedUser(@NotNull String id2, @NotNull String username, Boolean bool, Boolean bool2, String str, String str2, @NotNull Map<String, String> nicknames) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(username, "username");
        Intrinsics.checkNotNullParameter(nicknames, "nicknames");
        this.f10848id = id2;
        this.username = username;
        this.isBot = bool;
        this.isFriend = bool2;
        this.friendNickname = str;
        this.globalName = str2;
        this.nicknames = nicknames;
    }

    public static /* synthetic */ UserSearchTransformedUser copy$default(UserSearchTransformedUser userSearchTransformedUser, String str, String str2, Boolean bool, Boolean bool2, String str3, String str4, Map map, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = userSearchTransformedUser.f10848id;
        }
        if ((i10 & 2) != 0) {
            str2 = userSearchTransformedUser.username;
        }
        if ((i10 & 4) != 0) {
            bool = userSearchTransformedUser.isBot;
        }
        if ((i10 & 8) != 0) {
            bool2 = userSearchTransformedUser.isFriend;
        }
        if ((i10 & 16) != 0) {
            str3 = userSearchTransformedUser.friendNickname;
        }
        if ((i10 & 32) != 0) {
            str4 = userSearchTransformedUser.globalName;
        }
        Map<String, String> map2 = map;
        if ((i10 & 64) != 0) {
            map2 = userSearchTransformedUser.nicknames;
        }
        String str5 = str4;
        Map map3 = map2;
        String str6 = str3;
        Boolean bool3 = bool;
        return userSearchTransformedUser.copy(str, str2, bool3, bool2, str6, str5, map3);
    }

    @NotNull
    public final String component1() {
        return this.f10848id;
    }

    @NotNull
    public final String component2() {
        return this.username;
    }

    public final Boolean component3() {
        return this.isBot;
    }

    public final Boolean component4() {
        return this.isFriend;
    }

    public final String component5() {
        return this.friendNickname;
    }

    public final String component6() {
        return this.globalName;
    }

    @NotNull
    public final Map<String, String> component7() {
        return this.nicknames;
    }

    @NotNull
    public final UserSearchTransformedUser copy(@NotNull String id2, @NotNull String username, Boolean bool, Boolean bool2, String str, String str2, @NotNull Map<String, String> nicknames) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(username, "username");
        Intrinsics.checkNotNullParameter(nicknames, "nicknames");
        return new UserSearchTransformedUser(id2, username, bool, bool2, str, str2, nicknames);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof UserSearchTransformedUser) {
            UserSearchTransformedUser userSearchTransformedUser = (UserSearchTransformedUser) obj;
            return Intrinsics.areEqual(this.f10848id, userSearchTransformedUser.f10848id) && Intrinsics.areEqual(this.username, userSearchTransformedUser.username) && Intrinsics.areEqual(this.isBot, userSearchTransformedUser.isBot) && Intrinsics.areEqual(this.isFriend, userSearchTransformedUser.isFriend) && Intrinsics.areEqual(this.friendNickname, userSearchTransformedUser.friendNickname) && Intrinsics.areEqual(this.globalName, userSearchTransformedUser.globalName) && Intrinsics.areEqual(this.nicknames, userSearchTransformedUser.nicknames);
        }
        return false;
    }

    public final String getFriendNickname() {
        return this.friendNickname;
    }

    public final String getGlobalName() {
        return this.globalName;
    }

    @NotNull
    public final String getId() {
        return this.f10848id;
    }

    @NotNull
    public final Map<String, String> getNicknames() {
        return this.nicknames;
    }

    @NotNull
    public final String getUsername() {
        return this.username;
    }

    public int hashCode() {
        int hashCode = ((this.f10848id.hashCode() * 31) + this.username.hashCode()) * 31;
        Boolean bool = this.isBot;
        int hashCode2 = (hashCode + (bool == null ? 0 : bool.hashCode())) * 31;
        Boolean bool2 = this.isFriend;
        int hashCode3 = (hashCode2 + (bool2 == null ? 0 : bool2.hashCode())) * 31;
        String str = this.friendNickname;
        int hashCode4 = (hashCode3 + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.globalName;
        return ((hashCode4 + (str2 != null ? str2.hashCode() : 0)) * 31) + this.nicknames.hashCode();
    }

    public final Boolean isBot() {
        return this.isBot;
    }

    public final Boolean isFriend() {
        return this.isFriend;
    }

    @NotNull
    public String toString() {
        String str = this.f10848id;
        String str2 = this.username;
        Boolean bool = this.isBot;
        Boolean bool2 = this.isFriend;
        String str3 = this.friendNickname;
        String str4 = this.globalName;
        Map<String, String> map = this.nicknames;
        return "UserSearchTransformedUser(id=" + str + ", username=" + str2 + ", isBot=" + bool + ", isFriend=" + bool2 + ", friendNickname=" + str3 + ", globalName=" + str4 + ", nicknames=" + map + ")";
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ UserSearchTransformedUser(java.lang.String r2, java.lang.String r3, java.lang.Boolean r4, java.lang.Boolean r5, java.lang.String r6, java.lang.String r7, java.util.Map r8, int r9, kotlin.jvm.internal.DefaultConstructorMarker r10) {
        /*
            r1 = this;
            r10 = r9 & 4
            r0 = 0
            if (r10 == 0) goto L6
            r4 = r0
        L6:
            r10 = r9 & 8
            if (r10 == 0) goto Lb
            r5 = r0
        Lb:
            r10 = r9 & 16
            if (r10 == 0) goto L10
            r6 = r0
        L10:
            r9 = r9 & 32
            if (r9 == 0) goto L1d
            r9 = r8
            r8 = r0
        L16:
            r7 = r6
            r6 = r5
            r5 = r4
            r4 = r3
            r3 = r2
            r2 = r1
            goto L20
        L1d:
            r9 = r8
            r8 = r7
            goto L16
        L20:
            r2.<init>(r3, r4, r5, r6, r7, r8, r9)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.user_search_worker.UserSearchTransformedUser.<init>(java.lang.String, java.lang.String, java.lang.Boolean, java.lang.Boolean, java.lang.String, java.lang.String, java.util.Map, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
