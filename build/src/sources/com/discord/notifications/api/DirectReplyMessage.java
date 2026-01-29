package com.discord.notifications.api;

import at.n2;
import at.p0;
import at.v1;
import com.discord.notifications.api.DirectReplyMessage;
import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.primitives.ApplicationId;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.GuildId;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.discord.primitives.UserId;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonBuilder;
import kotlinx.serialization.json.b;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b \n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 @2\u00020\u0001:\u0002@AB[\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\u000f\u0010\u0010Bk\b\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\r\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u000f\u0010\u0014J\u0010\u0010&\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b'\u0010\u0016J\u0010\u0010(\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b)\u0010\u001bJ\t\u0010*\u001a\u00020\u0007HÆ\u0003J\u000b\u0010+\u001a\u0004\u0018\u00010\tHÆ\u0003J\u0010\u0010,\u001a\u0004\u0018\u00010\u000bHÆ\u0003¢\u0006\u0002\u0010!J\u0010\u0010-\u001a\u0004\u0018\u00010\u000bHÆ\u0003¢\u0006\u0002\u0010!J\u000b\u0010.\u001a\u0004\u0018\u00010\tHÆ\u0003J\u000b\u0010/\u001a\u0004\u0018\u00010\tHÆ\u0003Jj\u00100\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\tHÆ\u0001¢\u0006\u0004\b1\u00102J\u0013\u00103\u001a\u0002042\b\u00105\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u00106\u001a\u00020\u000bHÖ\u0001J\t\u00107\u001a\u00020\tHÖ\u0001J%\u00108\u001a\u0002092\u0006\u0010:\u001a\u00020\u00002\u0006\u0010;\u001a\u00020<2\u0006\u0010=\u001a\u00020>H\u0001¢\u0006\u0002\b?R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0017\u001a\u0004\b\u0015\u0010\u0016R\u001e\u0010\u0004\u001a\u00020\u00058\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010\u001c\u0012\u0004\b\u0018\u0010\u0019\u001a\u0004\b\u001a\u0010\u001bR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001eR\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u0016R\u0015\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\n\n\u0002\u0010\"\u001a\u0004\b \u0010!R\u0015\u0010\f\u001a\u0004\u0018\u00010\u000b¢\u0006\n\n\u0002\u0010\"\u001a\u0004\b#\u0010!R\u0013\u0010\r\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b$\u0010\u0016R\u0013\u0010\u000e\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b%\u0010\u0016¨\u0006B"}, d2 = {"Lcom/discord/notifications/api/DirectReplyMessage;", "", StackTraceHelper.ID_KEY, "Lcom/discord/primitives/MessageId;", "channelId", "Lcom/discord/primitives/ChannelId;", "author", "Lcom/discord/notifications/api/DirectReplyUser;", "content", "", "type", "", "channelType", NotificationRenderer.CHANNEL_NAME, "guildName", "<init>", "(Ljava/lang/String;JLcom/discord/notifications/api/DirectReplyUser;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lcom/discord/primitives/ChannelId;Lcom/discord/notifications/api/DirectReplyUser;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getChannelId-o4g7jtM$annotations", "()V", "getChannelId-o4g7jtM", "()J", "J", "getAuthor", "()Lcom/discord/notifications/api/DirectReplyUser;", "getContent", "getType", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getChannelType", "getChannelName", "getGuildName", "component1", "component1-3Eiw7ao", "component2", "component2-o4g7jtM", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "copy-_6Dih7Q", "(Ljava/lang/String;JLcom/discord/notifications/api/DirectReplyUser;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;)Lcom/discord/notifications/api/DirectReplyMessage;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$notification_api_release", "Companion", "$serializer", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DirectReplyMessage {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Json json = b.b(null, new Function1() { // from class: p7.a
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit json$lambda$0;
            json$lambda$0 = DirectReplyMessage.json$lambda$0((JsonBuilder) obj);
            return json$lambda$0;
        }
    }, 1, null);
    @NotNull
    private final DirectReplyUser author;
    private final long channelId;
    private final String channelName;
    private final Integer channelType;
    private final String content;
    private final String guildName;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f10646id;
    private final Integer type;

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tJ\f\u0010\n\u001a\b\u0012\u0004\u0012\u00020\f0\u000bR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/discord/notifications/api/DirectReplyMessage$Companion;", "", "<init>", "()V", "json", "Lkotlinx/serialization/json/Json;", "toNotificationData", "Lcom/discord/notifications/api/NotificationData;", "data", "", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/notifications/api/DirectReplyMessage;", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nDirectReplyMessage.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DirectReplyMessage.kt\ncom/discord/notifications/api/DirectReplyMessage$Companion\n+ 2 SerialFormat.kt\nkotlinx/serialization/SerialFormatKt\n*L\n1#1,57:1\n123#2:58\n*S KotlinDebug\n*F\n+ 1 DirectReplyMessage.kt\ncom/discord/notifications/api/DirectReplyMessage$Companion\n*L\n26#1:58\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final KSerializer serializer() {
            return DirectReplyMessage$$serializer.INSTANCE;
        }

        @NotNull
        public final NotificationData toNotificationData(@NotNull String data) {
            Integer num;
            Intrinsics.checkNotNullParameter(data, "data");
            Json json = DirectReplyMessage.json;
            json.a();
            DirectReplyMessage directReplyMessage = (DirectReplyMessage) json.b(DirectReplyMessage.Companion.serializer(), data);
            String m991getId3Eiw7ao = directReplyMessage.m991getId3Eiw7ao();
            Integer type = directReplyMessage.getType();
            String content = directReplyMessage.getContent();
            long m990getChannelIdo4g7jtM = directReplyMessage.m990getChannelIdo4g7jtM();
            Integer channelType = directReplyMessage.getChannelType();
            List l10 = CollectionsKt.l();
            long m995getIdre6GcUE = directReplyMessage.getAuthor().m995getIdre6GcUE();
            String username = directReplyMessage.getAuthor().getUsername();
            if (username == null) {
                username = "";
            }
            String str = username;
            String discriminator = directReplyMessage.getAuthor().getDiscriminator();
            if (discriminator != null) {
                num = StringsKt.toIntOrNull(discriminator);
            } else {
                num = null;
            }
            Integer num2 = num;
            String avatar = directReplyMessage.getAuthor().getAvatar();
            return new NotificationData(NotificationData.TYPE_MESSAGE_CREATE, m991getId3Eiw7ao, (Integer) null, (String) null, type, content, (Long) null, channelType, directReplyMessage.getChannelName(), ChannelId.m1058boximpl(m990getChannelIdo4g7jtM), (String) null, (String) null, (ChannelId) null, (Integer) null, (String) null, l10, UserId.m1136boximpl(m995getIdre6GcUE), str, (String) null, num2, avatar, (String) null, (String) null, (Integer) null, (GuildId) null, directReplyMessage.getGuildName(), (String) null, (String) null, (Integer) null, (String) null, (ApplicationId) null, (String) null, (String) null, (NotificationMessage) null, (String) null, (Integer) null, true, true, (UserId) null, (String) null, (String) null, (String) null, (String) null, (String) null, (String) null, (Boolean) null, (String) null, (String) null, (Integer) null, (Integer) null, (Integer) null, (String) null, false, (Map) null, false, (String) null, (String) null, (String) null, (String) null, (String) null, (String) null, (Integer) null, (String) null, -35357620, 2147483599, (DefaultConstructorMarker) null);
        }

        private Companion() {
        }
    }

    public /* synthetic */ DirectReplyMessage(int i10, String str, ChannelId channelId, DirectReplyUser directReplyUser, String str2, Integer num, Integer num2, String str3, String str4, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, channelId, directReplyUser, str2, num, num2, str3, str4, serializationConstructorMarker);
    }

    /* renamed from: copy-_6Dih7Q$default  reason: not valid java name */
    public static /* synthetic */ DirectReplyMessage m985copy_6Dih7Q$default(DirectReplyMessage directReplyMessage, String str, long j10, DirectReplyUser directReplyUser, String str2, Integer num, Integer num2, String str3, String str4, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = directReplyMessage.f10646id;
        }
        if ((i10 & 2) != 0) {
            j10 = directReplyMessage.channelId;
        }
        if ((i10 & 4) != 0) {
            directReplyUser = directReplyMessage.author;
        }
        if ((i10 & 8) != 0) {
            str2 = directReplyMessage.content;
        }
        if ((i10 & 16) != 0) {
            num = directReplyMessage.type;
        }
        if ((i10 & 32) != 0) {
            num2 = directReplyMessage.channelType;
        }
        if ((i10 & 64) != 0) {
            str3 = directReplyMessage.channelName;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            str4 = directReplyMessage.guildName;
        }
        String str5 = str3;
        String str6 = str4;
        return directReplyMessage.m989copy_6Dih7Q(str, j10, directReplyUser, str2, num, num2, str5, str6);
    }

    /* renamed from: getChannelId-o4g7jtM$annotations  reason: not valid java name */
    public static /* synthetic */ void m986getChannelIdo4g7jtM$annotations() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit json$lambda$0(JsonBuilder Json) {
        Intrinsics.checkNotNullParameter(Json, "$this$Json");
        Json.c(true);
        return Unit.f33282a;
    }

    public static final /* synthetic */ void write$Self$notification_api_release(DirectReplyMessage directReplyMessage, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.j(serialDescriptor, 0, MessageId$$serializer.INSTANCE, MessageId.m1084boximpl(directReplyMessage.f10646id));
        compositeEncoder.j(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, ChannelId.m1058boximpl(directReplyMessage.channelId));
        compositeEncoder.j(serialDescriptor, 2, DirectReplyUser$$serializer.INSTANCE, directReplyMessage.author);
        if (compositeEncoder.A(serialDescriptor, 3) || directReplyMessage.content != null) {
            compositeEncoder.z(serialDescriptor, 3, n2.f6848a, directReplyMessage.content);
        }
        if (compositeEncoder.A(serialDescriptor, 4) || directReplyMessage.type != null) {
            compositeEncoder.z(serialDescriptor, 4, p0.f6864a, directReplyMessage.type);
        }
        if (compositeEncoder.A(serialDescriptor, 5) || directReplyMessage.channelType != null) {
            compositeEncoder.z(serialDescriptor, 5, p0.f6864a, directReplyMessage.channelType);
        }
        if (compositeEncoder.A(serialDescriptor, 6) || directReplyMessage.channelName != null) {
            compositeEncoder.z(serialDescriptor, 6, n2.f6848a, directReplyMessage.channelName);
        }
        if (compositeEncoder.A(serialDescriptor, 7) || directReplyMessage.guildName != null) {
            compositeEncoder.z(serialDescriptor, 7, n2.f6848a, directReplyMessage.guildName);
        }
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m987component13Eiw7ao() {
        return this.f10646id;
    }

    /* renamed from: component2-o4g7jtM  reason: not valid java name */
    public final long m988component2o4g7jtM() {
        return this.channelId;
    }

    @NotNull
    public final DirectReplyUser component3() {
        return this.author;
    }

    public final String component4() {
        return this.content;
    }

    public final Integer component5() {
        return this.type;
    }

    public final Integer component6() {
        return this.channelType;
    }

    public final String component7() {
        return this.channelName;
    }

    public final String component8() {
        return this.guildName;
    }

    @NotNull
    /* renamed from: copy-_6Dih7Q  reason: not valid java name */
    public final DirectReplyMessage m989copy_6Dih7Q(@NotNull String id2, long j10, @NotNull DirectReplyUser author, String str, Integer num, Integer num2, String str2, String str3) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(author, "author");
        return new DirectReplyMessage(id2, j10, author, str, num, num2, str2, str3, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof DirectReplyMessage) {
            DirectReplyMessage directReplyMessage = (DirectReplyMessage) obj;
            return MessageId.m1088equalsimpl0(this.f10646id, directReplyMessage.f10646id) && ChannelId.m1062equalsimpl0(this.channelId, directReplyMessage.channelId) && Intrinsics.areEqual(this.author, directReplyMessage.author) && Intrinsics.areEqual(this.content, directReplyMessage.content) && Intrinsics.areEqual(this.type, directReplyMessage.type) && Intrinsics.areEqual(this.channelType, directReplyMessage.channelType) && Intrinsics.areEqual(this.channelName, directReplyMessage.channelName) && Intrinsics.areEqual(this.guildName, directReplyMessage.guildName);
        }
        return false;
    }

    @NotNull
    public final DirectReplyUser getAuthor() {
        return this.author;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m990getChannelIdo4g7jtM() {
        return this.channelId;
    }

    public final String getChannelName() {
        return this.channelName;
    }

    public final Integer getChannelType() {
        return this.channelType;
    }

    public final String getContent() {
        return this.content;
    }

    public final String getGuildName() {
        return this.guildName;
    }

    @NotNull
    /* renamed from: getId-3Eiw7ao  reason: not valid java name */
    public final String m991getId3Eiw7ao() {
        return this.f10646id;
    }

    public final Integer getType() {
        return this.type;
    }

    public int hashCode() {
        int m1089hashCodeimpl = ((((MessageId.m1089hashCodeimpl(this.f10646id) * 31) + ChannelId.m1063hashCodeimpl(this.channelId)) * 31) + this.author.hashCode()) * 31;
        String str = this.content;
        int hashCode = (m1089hashCodeimpl + (str == null ? 0 : str.hashCode())) * 31;
        Integer num = this.type;
        int hashCode2 = (hashCode + (num == null ? 0 : num.hashCode())) * 31;
        Integer num2 = this.channelType;
        int hashCode3 = (hashCode2 + (num2 == null ? 0 : num2.hashCode())) * 31;
        String str2 = this.channelName;
        int hashCode4 = (hashCode3 + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.guildName;
        return hashCode4 + (str3 != null ? str3.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String m1091toStringimpl = MessageId.m1091toStringimpl(this.f10646id);
        String m1065toStringimpl = ChannelId.m1065toStringimpl(this.channelId);
        DirectReplyUser directReplyUser = this.author;
        String str = this.content;
        Integer num = this.type;
        Integer num2 = this.channelType;
        String str2 = this.channelName;
        String str3 = this.guildName;
        return "DirectReplyMessage(id=" + m1091toStringimpl + ", channelId=" + m1065toStringimpl + ", author=" + directReplyUser + ", content=" + str + ", type=" + num + ", channelType=" + num2 + ", channelName=" + str2 + ", guildName=" + str3 + ")";
    }

    public /* synthetic */ DirectReplyMessage(String str, long j10, DirectReplyUser directReplyUser, String str2, Integer num, Integer num2, String str3, String str4, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, directReplyUser, str2, num, num2, str3, str4);
    }

    private /* synthetic */ DirectReplyMessage(int i10, String str, ChannelId channelId, DirectReplyUser directReplyUser, String str2, Integer num, Integer num2, String str3, String str4, SerializationConstructorMarker serializationConstructorMarker) {
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, DirectReplyMessage$$serializer.INSTANCE.getDescriptor());
        }
        this.f10646id = str;
        this.channelId = channelId.m1067unboximpl();
        this.author = directReplyUser;
        if ((i10 & 8) == 0) {
            this.content = null;
        } else {
            this.content = str2;
        }
        if ((i10 & 16) == 0) {
            this.type = null;
        } else {
            this.type = num;
        }
        if ((i10 & 32) == 0) {
            this.channelType = null;
        } else {
            this.channelType = num2;
        }
        if ((i10 & 64) == 0) {
            this.channelName = null;
        } else {
            this.channelName = str3;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.guildName = null;
        } else {
            this.guildName = str4;
        }
    }

    private DirectReplyMessage(String id2, long j10, DirectReplyUser author, String str, Integer num, Integer num2, String str2, String str3) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(author, "author");
        this.f10646id = id2;
        this.channelId = j10;
        this.author = author;
        this.content = str;
        this.type = num;
        this.channelType = num2;
        this.channelName = str2;
        this.guildName = str3;
    }

    public /* synthetic */ DirectReplyMessage(String str, long j10, DirectReplyUser directReplyUser, String str2, Integer num, Integer num2, String str3, String str4, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, directReplyUser, (i10 & 8) != 0 ? null : str2, (i10 & 16) != 0 ? null : num, (i10 & 32) != 0 ? null : num2, (i10 & 64) != 0 ? null : str3, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str4, null);
    }
}
