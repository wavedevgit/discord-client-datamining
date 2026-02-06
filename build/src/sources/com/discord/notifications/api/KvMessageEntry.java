package com.discord.notifications.api;

import com.discord.notifications.api.KvMessageEntry;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import ft.m;
import java.util.List;
import jt.f;
import jt.v1;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import kotlinx.serialization.json.JsonObject;
import kt.y;
import org.jetbrains.annotations.NotNull;
import qr.l;
import qr.o;
@m
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001d\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 <2\u00020\u0001:\u0002;<B?\u0012\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u000e\b\u0002\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0004\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u0006\u0010\t\u001a\u00020\n¢\u0006\u0004\b\u000b\u0010\fBY\b\u0010\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\u000e\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\u000e\u0010\u0005\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\u0004\b\u000b\u0010\u0011J\u000f\u0010#\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\u000f\u0010$\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\t\u0010%\u001a\u00020\u0004HÆ\u0003J\u0010\u0010&\u001a\u00020\bHÆ\u0003¢\u0006\u0004\b'\u0010\u001dJ\u0010\u0010(\u001a\u00020\nHÆ\u0003¢\u0006\u0004\b)\u0010!JN\u0010*\u001a\u00020\u00002\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\u000e\b\u0002\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00042\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\nHÆ\u0001¢\u0006\u0004\b+\u0010,J\u0013\u0010-\u001a\u00020.2\b\u0010/\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u00100\u001a\u00020\u000eHÖ\u0001J\t\u00101\u001a\u000202HÖ\u0001J%\u00103\u001a\u0002042\u0006\u00105\u001a\u00020\u00002\u0006\u00106\u001a\u0002072\u0006\u00108\u001a\u000209H\u0001¢\u0006\u0002\b:R\"\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u0012\u0010\u0013\u001a\u0004\b\u0014\u0010\u0015R\"\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u0016\u0010\u0013\u001a\u0004\b\u0017\u0010\u0015R\u001c\u0010\u0006\u001a\u00020\u00048\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u0018\u0010\u0013\u001a\u0004\b\u0019\u0010\u001aR\u001e\u0010\u0007\u001a\u00020\b8\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010\u001e\u0012\u0004\b\u001b\u0010\u0013\u001a\u0004\b\u001c\u0010\u001dR\u001e\u0010\t\u001a\u00020\n8\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010\"\u0012\u0004\b\u001f\u0010\u0013\u001a\u0004\b \u0010!¨\u0006="}, d2 = {"Lcom/discord/notifications/api/KvMessageEntry;", "", "members", "", "Lkotlinx/serialization/json/JsonObject;", "users", "message", StackTraceHelper.ID_KEY, "Lcom/discord/primitives/MessageId;", "channelId", "Lcom/discord/primitives/ChannelId;", "<init>", "(Ljava/util/List;Ljava/util/List;Lkotlinx/serialization/json/JsonObject;Ljava/lang/String;JLkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/util/List;Ljava/util/List;Lkotlinx/serialization/json/JsonObject;Ljava/lang/String;Lcom/discord/primitives/ChannelId;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMembers$annotations", "()V", "getMembers", "()Ljava/util/List;", "getUsers$annotations", "getUsers", "getMessage$annotations", "getMessage", "()Lkotlinx/serialization/json/JsonObject;", "getId-3Eiw7ao$annotations", "getId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getChannelId-o4g7jtM$annotations", "getChannelId-o4g7jtM", "()J", "J", "component1", "component2", "component3", "component4", "component4-3Eiw7ao", "component5", "component5-o4g7jtM", "copy", "copy-kA7ecXY", "(Ljava/util/List;Ljava/util/List;Lkotlinx/serialization/json/JsonObject;Ljava/lang/String;J)Lcom/discord/notifications/api/KvMessageEntry;", "equals", "", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$notification_api_release", "$serializer", "Companion", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class KvMessageEntry {
    @NotNull
    private static final Lazy[] $childSerializers;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final long channelId;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f9529id;
    @NotNull
    private final List<JsonObject> members;
    @NotNull
    private final JsonObject message;
    @NotNull
    private final List<JsonObject> users;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/notifications/api/KvMessageEntry$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/notifications/api/KvMessageEntry;", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return KvMessageEntry$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    static {
        o oVar = o.f48044e;
        $childSerializers = new Lazy[]{l.b(oVar, new Function0() { // from class: p7.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_;
                _childSerializers$_anonymous_ = KvMessageEntry._childSerializers$_anonymous_();
                return _childSerializers$_anonymous_;
            }
        }), l.b(oVar, new Function0() { // from class: p7.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$0;
                _childSerializers$_anonymous_$0 = KvMessageEntry._childSerializers$_anonymous_$0();
                return _childSerializers$_anonymous_$0;
            }
        }), null, null, null};
    }

    public /* synthetic */ KvMessageEntry(int i10, List list, List list2, JsonObject jsonObject, String str, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, list, list2, jsonObject, str, channelId, serializationConstructorMarker);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new f(y.f35529a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$0() {
        return new f(y.f35529a);
    }

    /* renamed from: copy-kA7ecXY$default  reason: not valid java name */
    public static /* synthetic */ KvMessageEntry m995copykA7ecXY$default(KvMessageEntry kvMessageEntry, List list, List list2, JsonObject jsonObject, String str, long j10, int i10, Object obj) {
        List<JsonObject> list3 = list;
        if ((i10 & 1) != 0) {
            list3 = kvMessageEntry.members;
        }
        List<JsonObject> list4 = list2;
        if ((i10 & 2) != 0) {
            list4 = kvMessageEntry.users;
        }
        if ((i10 & 4) != 0) {
            jsonObject = kvMessageEntry.message;
        }
        if ((i10 & 8) != 0) {
            str = kvMessageEntry.f9529id;
        }
        if ((i10 & 16) != 0) {
            j10 = kvMessageEntry.channelId;
        }
        long j11 = j10;
        return kvMessageEntry.m1000copykA7ecXY(list3, list4, jsonObject, str, j11);
    }

    /* renamed from: getChannelId-o4g7jtM$annotations  reason: not valid java name */
    public static /* synthetic */ void m996getChannelIdo4g7jtM$annotations() {
    }

    /* renamed from: getId-3Eiw7ao$annotations  reason: not valid java name */
    public static /* synthetic */ void m997getId3Eiw7ao$annotations() {
    }

    public static /* synthetic */ void getMembers$annotations() {
    }

    public static /* synthetic */ void getMessage$annotations() {
    }

    public static /* synthetic */ void getUsers$annotations() {
    }

    public static final /* synthetic */ void write$Self$notification_api_release(KvMessageEntry kvMessageEntry, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.s(serialDescriptor, 0, (ft.o) lazyArr[0].getValue(), kvMessageEntry.members);
        compositeEncoder.s(serialDescriptor, 1, (ft.o) lazyArr[1].getValue(), kvMessageEntry.users);
        compositeEncoder.s(serialDescriptor, 2, y.f35529a, kvMessageEntry.message);
        compositeEncoder.s(serialDescriptor, 3, MessageId$$serializer.INSTANCE, MessageId.m1083boximpl(kvMessageEntry.f9529id));
        compositeEncoder.s(serialDescriptor, 4, ChannelId$$serializer.INSTANCE, ChannelId.m1057boximpl(kvMessageEntry.channelId));
    }

    @NotNull
    public final List<JsonObject> component1() {
        return this.members;
    }

    @NotNull
    public final List<JsonObject> component2() {
        return this.users;
    }

    @NotNull
    public final JsonObject component3() {
        return this.message;
    }

    @NotNull
    /* renamed from: component4-3Eiw7ao  reason: not valid java name */
    public final String m998component43Eiw7ao() {
        return this.f9529id;
    }

    /* renamed from: component5-o4g7jtM  reason: not valid java name */
    public final long m999component5o4g7jtM() {
        return this.channelId;
    }

    @NotNull
    /* renamed from: copy-kA7ecXY  reason: not valid java name */
    public final KvMessageEntry m1000copykA7ecXY(@NotNull List<JsonObject> members, @NotNull List<JsonObject> users, @NotNull JsonObject message, @NotNull String id2, long j10) {
        Intrinsics.checkNotNullParameter(members, "members");
        Intrinsics.checkNotNullParameter(users, "users");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(id2, "id");
        return new KvMessageEntry(members, users, message, id2, j10, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof KvMessageEntry) {
            KvMessageEntry kvMessageEntry = (KvMessageEntry) obj;
            return Intrinsics.areEqual(this.members, kvMessageEntry.members) && Intrinsics.areEqual(this.users, kvMessageEntry.users) && Intrinsics.areEqual(this.message, kvMessageEntry.message) && MessageId.m1087equalsimpl0(this.f9529id, kvMessageEntry.f9529id) && ChannelId.m1061equalsimpl0(this.channelId, kvMessageEntry.channelId);
        }
        return false;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m1001getChannelIdo4g7jtM() {
        return this.channelId;
    }

    @NotNull
    /* renamed from: getId-3Eiw7ao  reason: not valid java name */
    public final String m1002getId3Eiw7ao() {
        return this.f9529id;
    }

    @NotNull
    public final List<JsonObject> getMembers() {
        return this.members;
    }

    @NotNull
    public final JsonObject getMessage() {
        return this.message;
    }

    @NotNull
    public final List<JsonObject> getUsers() {
        return this.users;
    }

    public int hashCode() {
        return (((((((this.members.hashCode() * 31) + this.users.hashCode()) * 31) + this.message.hashCode()) * 31) + MessageId.m1088hashCodeimpl(this.f9529id)) * 31) + ChannelId.m1062hashCodeimpl(this.channelId);
    }

    @NotNull
    public String toString() {
        List<JsonObject> list = this.members;
        List<JsonObject> list2 = this.users;
        JsonObject jsonObject = this.message;
        String m1090toStringimpl = MessageId.m1090toStringimpl(this.f9529id);
        String m1064toStringimpl = ChannelId.m1064toStringimpl(this.channelId);
        return "KvMessageEntry(members=" + list + ", users=" + list2 + ", message=" + jsonObject + ", id=" + m1090toStringimpl + ", channelId=" + m1064toStringimpl + ")";
    }

    public /* synthetic */ KvMessageEntry(List list, List list2, JsonObject jsonObject, String str, long j10, DefaultConstructorMarker defaultConstructorMarker) {
        this(list, list2, jsonObject, str, j10);
    }

    private /* synthetic */ KvMessageEntry(int i10, List list, List list2, JsonObject jsonObject, String str, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker) {
        if (28 != (i10 & 28)) {
            v1.b(i10, 28, KvMessageEntry$$serializer.INSTANCE.getDescriptor());
        }
        this.members = (i10 & 1) == 0 ? CollectionsKt.l() : list;
        if ((i10 & 2) == 0) {
            this.users = CollectionsKt.l();
        } else {
            this.users = list2;
        }
        this.message = jsonObject;
        this.f9529id = str;
        this.channelId = channelId.m1066unboximpl();
    }

    private KvMessageEntry(List<JsonObject> members, List<JsonObject> users, JsonObject message, String id2, long j10) {
        Intrinsics.checkNotNullParameter(members, "members");
        Intrinsics.checkNotNullParameter(users, "users");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(id2, "id");
        this.members = members;
        this.users = users;
        this.message = message;
        this.f9529id = id2;
        this.channelId = j10;
    }

    public /* synthetic */ KvMessageEntry(List list, List list2, JsonObject jsonObject, String str, long j10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? CollectionsKt.l() : list, (i10 & 2) != 0 ? CollectionsKt.l() : list2, jsonObject, str, j10, null);
    }
}
