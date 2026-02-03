package com.discord.chat.bridge.contentnode;

import com.discord.chat.bridge.MessageType;
import com.discord.chat.bridge.contentnode.LinkContextData;
import com.discord.chat.bridge.rolecolors.RoleColors;
import com.discord.chat.bridge.rolecolors.RoleColors$$serializer;
import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ct.e;
import dt.n2;
import dt.o1;
import dt.p0;
import dt.v1;
import java.lang.annotation.Annotation;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.SealedClassSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@at.m(with = LinkContextDataSerializer.class)
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b7\u0018\u0000 \u00172\u00020\u0001:\u0014\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017B\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003\u0082\u0001\u0002\u0018\u0019¨\u0006\u001a"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData;", "", "<init>", "()V", "LinkUrl", "LinkContext", "BindUserMenu", "BindJoinStream", "BindTapUsername", "BindTapCommandName", "BindTapActivityText", "BindOpenThreadChannel", "BindOpenInviteSheet", "BindOpenPins", "BindGuildMenu", "BindDismissMessage", "BindOpenRoleSubscriptionOverview", "BindUserSurvey", "BindJumpToMessage", "BindOpenGdmCustomizeActionSheet", "BindOpenUrl", "BindInsertText", "BindDoNothing", "Companion", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkUrl;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class LinkContextData {
    @NotNull
    public static final Companion Companion = new Companion(null);

    @at.m
    @Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\b\u0087\b\u0018\u0000 #2\u00020\u0001:\u0004 !\"#B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005B9\b\u0010\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u0004\u0010\u000eJ\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\u0012\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u000b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0007HÖ\u0001J\t\u0010\u0017\u001a\u00020\tHÖ\u0001J%\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u00002\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001eH\u0001¢\u0006\u0002\b\u001fR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006$"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "message", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessage;", "<init>", "(Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessage;)V", "seen0", "", "action", "", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessage;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getMessage", "()Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessage;", "component1", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "DismissedMessage", "DismissedMessageAuthor", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindDismissMessage extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private final DismissedMessage message;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindDismissMessage$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        @at.m
        @Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0016\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 32\u00020\u0001:\u000223B+\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bBC\b\u0010\u0012\u0006\u0010\f\u001a\u00020\r\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b\n\u0010\u0010J\u0010\u0010\u001c\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u001d\u0010\u0012J\u0010\u0010\u001e\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u001f\u0010\u0017J\u000b\u0010 \u001a\u0004\u0018\u00010\u0007HÆ\u0003J\t\u0010!\u001a\u00020\tHÆ\u0003J:\u0010\"\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\b\u001a\u00020\tHÆ\u0001¢\u0006\u0004\b#\u0010$J\u0013\u0010%\u001a\u00020&2\b\u0010'\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010(\u001a\u00020\rHÖ\u0001J\t\u0010)\u001a\u00020\u0007HÖ\u0001J%\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020\u00002\u0006\u0010-\u001a\u00020.2\u0006\u0010/\u001a\u000200H\u0001¢\u0006\u0002\b1R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012R\u001e\u0010\u0004\u001a\u00020\u00058\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010\u0018\u0012\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0012R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001b¨\u00064"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessage;", "", StackTraceHelper.ID_KEY, "Lcom/discord/primitives/MessageId;", "channelId", "Lcom/discord/primitives/ChannelId;", "loggingName", "", "author", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessageAuthor;", "<init>", "(Ljava/lang/String;JLjava/lang/String;Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessageAuthor;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lcom/discord/primitives/ChannelId;Ljava/lang/String;Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessageAuthor;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getChannelId-o4g7jtM$annotations", "()V", "getChannelId-o4g7jtM", "()J", "J", "getLoggingName", "getAuthor", "()Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessageAuthor;", "component1", "component1-3Eiw7ao", "component2", "component2-o4g7jtM", "component3", "component4", "copy", "copy-8a0ehIg", "(Ljava/lang/String;JLjava/lang/String;Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessageAuthor;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessage;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class DismissedMessage {
            @NotNull
            public static final Companion Companion = new Companion(null);
            @NotNull
            private final DismissedMessageAuthor author;
            private final long channelId;
            @NotNull

            /* renamed from: id  reason: collision with root package name */
            private final String f8262id;
            private final String loggingName;

            @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessage$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessage;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class Companion {
                private Companion() {
                }

                @NotNull
                public final KSerializer serializer() {
                    return LinkContextData$BindDismissMessage$DismissedMessage$$serializer.INSTANCE;
                }

                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }
            }

            public /* synthetic */ DismissedMessage(int i10, String str, ChannelId channelId, String str2, DismissedMessageAuthor dismissedMessageAuthor, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
                this(i10, str, channelId, str2, dismissedMessageAuthor, serializationConstructorMarker);
            }

            /* renamed from: copy-8a0ehIg$default  reason: not valid java name */
            public static /* synthetic */ DismissedMessage m302copy8a0ehIg$default(DismissedMessage dismissedMessage, String str, long j10, String str2, DismissedMessageAuthor dismissedMessageAuthor, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = dismissedMessage.f8262id;
                }
                if ((i10 & 2) != 0) {
                    j10 = dismissedMessage.channelId;
                }
                if ((i10 & 4) != 0) {
                    str2 = dismissedMessage.loggingName;
                }
                if ((i10 & 8) != 0) {
                    dismissedMessageAuthor = dismissedMessage.author;
                }
                return dismissedMessage.m306copy8a0ehIg(str, j10, str2, dismissedMessageAuthor);
            }

            /* renamed from: getChannelId-o4g7jtM$annotations  reason: not valid java name */
            public static /* synthetic */ void m303getChannelIdo4g7jtM$annotations() {
            }

            public static final /* synthetic */ void write$Self$chat_release(DismissedMessage dismissedMessage, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
                compositeEncoder.D(serialDescriptor, 0, MessageId$$serializer.INSTANCE, MessageId.m1085boximpl(dismissedMessage.f8262id));
                compositeEncoder.D(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(dismissedMessage.channelId));
                if (compositeEncoder.z(serialDescriptor, 2) || dismissedMessage.loggingName != null) {
                    compositeEncoder.s(serialDescriptor, 2, n2.f20978a, dismissedMessage.loggingName);
                }
                compositeEncoder.D(serialDescriptor, 3, LinkContextData$BindDismissMessage$DismissedMessageAuthor$$serializer.INSTANCE, dismissedMessage.author);
            }

            @NotNull
            /* renamed from: component1-3Eiw7ao  reason: not valid java name */
            public final String m304component13Eiw7ao() {
                return this.f8262id;
            }

            /* renamed from: component2-o4g7jtM  reason: not valid java name */
            public final long m305component2o4g7jtM() {
                return this.channelId;
            }

            public final String component3() {
                return this.loggingName;
            }

            @NotNull
            public final DismissedMessageAuthor component4() {
                return this.author;
            }

            @NotNull
            /* renamed from: copy-8a0ehIg  reason: not valid java name */
            public final DismissedMessage m306copy8a0ehIg(@NotNull String id2, long j10, String str, @NotNull DismissedMessageAuthor author) {
                Intrinsics.checkNotNullParameter(id2, "id");
                Intrinsics.checkNotNullParameter(author, "author");
                return new DismissedMessage(id2, j10, str, author, null);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof DismissedMessage) {
                    DismissedMessage dismissedMessage = (DismissedMessage) obj;
                    return MessageId.m1089equalsimpl0(this.f8262id, dismissedMessage.f8262id) && ChannelId.m1063equalsimpl0(this.channelId, dismissedMessage.channelId) && Intrinsics.areEqual(this.loggingName, dismissedMessage.loggingName) && Intrinsics.areEqual(this.author, dismissedMessage.author);
                }
                return false;
            }

            @NotNull
            public final DismissedMessageAuthor getAuthor() {
                return this.author;
            }

            /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
            public final long m307getChannelIdo4g7jtM() {
                return this.channelId;
            }

            @NotNull
            /* renamed from: getId-3Eiw7ao  reason: not valid java name */
            public final String m308getId3Eiw7ao() {
                return this.f8262id;
            }

            public final String getLoggingName() {
                return this.loggingName;
            }

            public int hashCode() {
                int m1090hashCodeimpl = ((MessageId.m1090hashCodeimpl(this.f8262id) * 31) + ChannelId.m1064hashCodeimpl(this.channelId)) * 31;
                String str = this.loggingName;
                return ((m1090hashCodeimpl + (str == null ? 0 : str.hashCode())) * 31) + this.author.hashCode();
            }

            @NotNull
            public String toString() {
                String m1092toStringimpl = MessageId.m1092toStringimpl(this.f8262id);
                String m1066toStringimpl = ChannelId.m1066toStringimpl(this.channelId);
                String str = this.loggingName;
                DismissedMessageAuthor dismissedMessageAuthor = this.author;
                return "DismissedMessage(id=" + m1092toStringimpl + ", channelId=" + m1066toStringimpl + ", loggingName=" + str + ", author=" + dismissedMessageAuthor + ")";
            }

            public /* synthetic */ DismissedMessage(String str, long j10, String str2, DismissedMessageAuthor dismissedMessageAuthor, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, j10, str2, dismissedMessageAuthor);
            }

            private /* synthetic */ DismissedMessage(int i10, String str, ChannelId channelId, String str2, DismissedMessageAuthor dismissedMessageAuthor, SerializationConstructorMarker serializationConstructorMarker) {
                if (11 != (i10 & 11)) {
                    v1.b(i10, 11, LinkContextData$BindDismissMessage$DismissedMessage$$serializer.INSTANCE.getDescriptor());
                }
                this.f8262id = str;
                this.channelId = channelId.m1068unboximpl();
                if ((i10 & 4) == 0) {
                    this.loggingName = null;
                } else {
                    this.loggingName = str2;
                }
                this.author = dismissedMessageAuthor;
            }

            private DismissedMessage(String id2, long j10, String str, DismissedMessageAuthor author) {
                Intrinsics.checkNotNullParameter(id2, "id");
                Intrinsics.checkNotNullParameter(author, "author");
                this.f8262id = id2;
                this.channelId = j10;
                this.loggingName = str;
                this.author = author;
            }

            public /* synthetic */ DismissedMessage(String str, long j10, String str2, DismissedMessageAuthor dismissedMessageAuthor, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, j10, (i10 & 4) != 0 ? null : str2, dismissedMessageAuthor, null);
            }
        }

        @at.m
        @Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \u001d2\u00020\u0001:\u0002\u001c\u001dB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005B%\b\u0010\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\u0004\u0010\nJ\t\u0010\r\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0007HÖ\u0001J\t\u0010\u0013\u001a\u00020\u0003HÖ\u0001J%\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00002\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001aH\u0001¢\u0006\u0002\b\u001bR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\u001e"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessageAuthor;", "", NotificationRenderer.USERNAME, "", "<init>", "(Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getUsername", "()Ljava/lang/String;", "component1", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class DismissedMessageAuthor {
            @NotNull
            public static final Companion Companion = new Companion(null);
            @NotNull
            private final String username;

            @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessageAuthor$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage$DismissedMessageAuthor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class Companion {
                private Companion() {
                }

                @NotNull
                public final KSerializer serializer() {
                    return LinkContextData$BindDismissMessage$DismissedMessageAuthor$$serializer.INSTANCE;
                }

                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }
            }

            public /* synthetic */ DismissedMessageAuthor(int i10, String str, SerializationConstructorMarker serializationConstructorMarker) {
                if (1 != (i10 & 1)) {
                    v1.b(i10, 1, LinkContextData$BindDismissMessage$DismissedMessageAuthor$$serializer.INSTANCE.getDescriptor());
                }
                this.username = str;
            }

            public static /* synthetic */ DismissedMessageAuthor copy$default(DismissedMessageAuthor dismissedMessageAuthor, String str, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = dismissedMessageAuthor.username;
                }
                return dismissedMessageAuthor.copy(str);
            }

            @NotNull
            public final String component1() {
                return this.username;
            }

            @NotNull
            public final DismissedMessageAuthor copy(@NotNull String username) {
                Intrinsics.checkNotNullParameter(username, "username");
                return new DismissedMessageAuthor(username);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof DismissedMessageAuthor) && Intrinsics.areEqual(this.username, ((DismissedMessageAuthor) obj).username);
            }

            @NotNull
            public final String getUsername() {
                return this.username;
            }

            public int hashCode() {
                return this.username.hashCode();
            }

            @NotNull
            public String toString() {
                String str = this.username;
                return "DismissedMessageAuthor(username=" + str + ")";
            }

            public DismissedMessageAuthor(@NotNull String username) {
                Intrinsics.checkNotNullParameter(username, "username");
                this.username = username;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public /* synthetic */ BindDismissMessage(int i10, String str, Boolean bool, DismissedMessage dismissedMessage, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (5 != (i10 & 5)) {
                v1.b(i10, 5, LinkContextData$BindDismissMessage$$serializer.INSTANCE.getDescriptor());
            }
            this.message = dismissedMessage;
        }

        public static /* synthetic */ BindDismissMessage copy$default(BindDismissMessage bindDismissMessage, DismissedMessage dismissedMessage, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                dismissedMessage = bindDismissMessage.message;
            }
            return bindDismissMessage.copy(dismissedMessage);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindDismissMessage bindDismissMessage, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindDismissMessage, compositeEncoder, serialDescriptor);
            compositeEncoder.D(serialDescriptor, 2, LinkContextData$BindDismissMessage$DismissedMessage$$serializer.INSTANCE, bindDismissMessage.message);
        }

        @NotNull
        public final DismissedMessage component1() {
            return this.message;
        }

        @NotNull
        public final BindDismissMessage copy(@NotNull DismissedMessage message) {
            Intrinsics.checkNotNullParameter(message, "message");
            return new BindDismissMessage(message);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof BindDismissMessage) && Intrinsics.areEqual(this.message, ((BindDismissMessage) obj).message);
        }

        @NotNull
        public final DismissedMessage getMessage() {
            return this.message;
        }

        public int hashCode() {
            return this.message.hashCode();
        }

        @NotNull
        public String toString() {
            DismissedMessage dismissedMessage = this.message;
            return "BindDismissMessage(message=" + dismissedMessage + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public BindDismissMessage(@NotNull DismissedMessage message) {
            super("bindDismissMessage", (Boolean) null, 2, (DefaultConstructorMarker) null);
            Intrinsics.checkNotNullParameter(message, "message");
            this.message = message;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\bÇ\n\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\b\u001a\u00020\tHÖ\u0001J\f\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00000\u000bJ\t\u0010\f\u001a\u00020\rHÖ\u0001¨\u0006\u000e"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDoNothing;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "<init>", "()V", "equals", "", "other", "", "hashCode", "", "serializer", "Lkotlinx/serialization/KSerializer;", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindDoNothing extends LinkContext {
        @NotNull
        public static final BindDoNothing INSTANCE = new BindDoNothing();
        private static final /* synthetic */ Lazy $cachedSerializer$delegate = lr.l.b(lr.o.f37120e, new Function0() { // from class: com.discord.chat.bridge.contentnode.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _init_$_anonymous_;
                _init_$_anonymous_ = LinkContextData.BindDoNothing._init_$_anonymous_();
                return _init_$_anonymous_;
            }
        });

        private BindDoNothing() {
            super("bindDoNothing", (Boolean) null, 2, (DefaultConstructorMarker) null);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final /* synthetic */ KSerializer _init_$_anonymous_() {
            return new o1("com.discord.chat.bridge.contentnode.LinkContextData.BindDoNothing", INSTANCE, new Annotation[]{new LinkContextData$LinkContext$Companion$annotationImpl$kotlinx_serialization_json_JsonClassDiscriminator$0("action")});
        }

        private final /* synthetic */ KSerializer get$cachedSerializer() {
            return (KSerializer) $cachedSerializer$delegate.getValue();
        }

        public boolean equals(Object obj) {
            return this == obj || (obj instanceof BindDoNothing);
        }

        public int hashCode() {
            return -1136646459;
        }

        @NotNull
        public final KSerializer serializer() {
            return get$cachedSerializer();
        }

        @NotNull
        public String toString() {
            return "BindDoNothing";
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0087\b\u0018\u0000 \"2\u00020\u0001:\u0003 !\"B\u0013\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005B9\b\u0010\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u0004\u0010\u000eJ\u000b\u0010\u0011\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0015\u0010\u0012\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u000b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0007HÖ\u0001J\t\u0010\u0017\u001a\u00020\tHÖ\u0001J%\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u00002\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001eH\u0001¢\u0006\u0002\b\u001fR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006#"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "messageReference", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu$MessageReference;", "<init>", "(Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu$MessageReference;)V", "seen0", "", "action", "", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu$MessageReference;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getMessageReference", "()Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu$MessageReference;", "component1", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "MessageReference", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindGuildMenu extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final MessageReference messageReference;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindGuildMenu$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        @at.m
        @Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 +2\u00020\u0001:\u0002*+B\u001b\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007B/\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\u0010\u0010\u0015\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0016\u0010\u0010J\u0010\u0010\u0017\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\b\u0018J&\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001¢\u0006\u0004\b\u001a\u0010\u001bJ\u0013\u0010\u001c\u001a\u00020\u001d2\b\u0010\u001e\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001f\u001a\u00020\tHÖ\u0001J\t\u0010 \u001a\u00020!HÖ\u0001J%\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020\u00002\u0006\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020(H\u0001¢\u0006\u0002\b)R\u001e\u0010\u0002\u001a\u00020\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010\u0011\u0012\u0004\b\r\u0010\u000e\u001a\u0004\b\u000f\u0010\u0010R\u001e\u0010\u0004\u001a\u0004\u0018\u00010\u00058\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u0012\u0010\u000e\u001a\u0004\b\u0013\u0010\u0014¨\u0006,"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu$MessageReference;", "", "channelId", "Lcom/discord/primitives/ChannelId;", "guildId", "Lcom/discord/primitives/GuildId;", "<init>", "(JLcom/discord/primitives/GuildId;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/primitives/ChannelId;Lcom/discord/primitives/GuildId;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getChannelId-o4g7jtM$annotations", "()V", "getChannelId-o4g7jtM", "()J", "J", "getGuildId-qOKuAAo$annotations", "getGuildId-qOKuAAo", "()Lcom/discord/primitives/GuildId;", "component1", "component1-o4g7jtM", "component2", "component2-qOKuAAo", "copy", "copy-2_zTmBg", "(JLcom/discord/primitives/GuildId;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu$MessageReference;", "equals", "", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class MessageReference {
            @NotNull
            public static final Companion Companion = new Companion(null);
            private final long channelId;
            private final GuildId guildId;

            @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu$MessageReference$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu$MessageReference;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class Companion {
                private Companion() {
                }

                @NotNull
                public final KSerializer serializer() {
                    return LinkContextData$BindGuildMenu$MessageReference$$serializer.INSTANCE;
                }

                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }
            }

            public /* synthetic */ MessageReference(int i10, ChannelId channelId, GuildId guildId, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
                this(i10, channelId, guildId, serializationConstructorMarker);
            }

            /* renamed from: copy-2_zTmBg$default  reason: not valid java name */
            public static /* synthetic */ MessageReference m309copy2_zTmBg$default(MessageReference messageReference, long j10, GuildId guildId, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    j10 = messageReference.channelId;
                }
                if ((i10 & 2) != 0) {
                    guildId = messageReference.guildId;
                }
                return messageReference.m314copy2_zTmBg(j10, guildId);
            }

            /* renamed from: getChannelId-o4g7jtM$annotations  reason: not valid java name */
            public static /* synthetic */ void m310getChannelIdo4g7jtM$annotations() {
            }

            /* renamed from: getGuildId-qOKuAAo$annotations  reason: not valid java name */
            public static /* synthetic */ void m311getGuildIdqOKuAAo$annotations() {
            }

            public static final /* synthetic */ void write$Self$chat_release(MessageReference messageReference, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
                compositeEncoder.D(serialDescriptor, 0, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(messageReference.channelId));
                if (compositeEncoder.z(serialDescriptor, 1) || messageReference.guildId != null) {
                    compositeEncoder.s(serialDescriptor, 1, GuildId$$serializer.INSTANCE, messageReference.guildId);
                }
            }

            /* renamed from: component1-o4g7jtM  reason: not valid java name */
            public final long m312component1o4g7jtM() {
                return this.channelId;
            }

            /* renamed from: component2-qOKuAAo  reason: not valid java name */
            public final GuildId m313component2qOKuAAo() {
                return this.guildId;
            }

            @NotNull
            /* renamed from: copy-2_zTmBg  reason: not valid java name */
            public final MessageReference m314copy2_zTmBg(long j10, GuildId guildId) {
                return new MessageReference(j10, guildId, null);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof MessageReference) {
                    MessageReference messageReference = (MessageReference) obj;
                    return ChannelId.m1063equalsimpl0(this.channelId, messageReference.channelId) && Intrinsics.areEqual(this.guildId, messageReference.guildId);
                }
                return false;
            }

            /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
            public final long m315getChannelIdo4g7jtM() {
                return this.channelId;
            }

            /* renamed from: getGuildId-qOKuAAo  reason: not valid java name */
            public final GuildId m316getGuildIdqOKuAAo() {
                return this.guildId;
            }

            public int hashCode() {
                int m1064hashCodeimpl = ChannelId.m1064hashCodeimpl(this.channelId) * 31;
                GuildId guildId = this.guildId;
                return m1064hashCodeimpl + (guildId == null ? 0 : GuildId.m1077hashCodeimpl(guildId.m1081unboximpl()));
            }

            @NotNull
            public String toString() {
                String m1066toStringimpl = ChannelId.m1066toStringimpl(this.channelId);
                GuildId guildId = this.guildId;
                return "MessageReference(channelId=" + m1066toStringimpl + ", guildId=" + guildId + ")";
            }

            public /* synthetic */ MessageReference(long j10, GuildId guildId, DefaultConstructorMarker defaultConstructorMarker) {
                this(j10, guildId);
            }

            private /* synthetic */ MessageReference(int i10, ChannelId channelId, GuildId guildId, SerializationConstructorMarker serializationConstructorMarker) {
                if (1 != (i10 & 1)) {
                    v1.b(i10, 1, LinkContextData$BindGuildMenu$MessageReference$$serializer.INSTANCE.getDescriptor());
                }
                this.channelId = channelId.m1068unboximpl();
                if ((i10 & 2) == 0) {
                    this.guildId = null;
                } else {
                    this.guildId = guildId;
                }
            }

            private MessageReference(long j10, GuildId guildId) {
                this.channelId = j10;
                this.guildId = guildId;
            }

            public /* synthetic */ MessageReference(long j10, GuildId guildId, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(j10, (i10 & 2) != 0 ? null : guildId, null);
            }
        }

        public BindGuildMenu() {
            this(null, 1, null);
        }

        public static /* synthetic */ BindGuildMenu copy$default(BindGuildMenu bindGuildMenu, MessageReference messageReference, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                messageReference = bindGuildMenu.messageReference;
            }
            return bindGuildMenu.copy(messageReference);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindGuildMenu bindGuildMenu, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindGuildMenu, compositeEncoder, serialDescriptor);
            if (compositeEncoder.z(serialDescriptor, 2) || bindGuildMenu.messageReference != null) {
                compositeEncoder.s(serialDescriptor, 2, LinkContextData$BindGuildMenu$MessageReference$$serializer.INSTANCE, bindGuildMenu.messageReference);
            }
        }

        public final MessageReference component1() {
            return this.messageReference;
        }

        @NotNull
        public final BindGuildMenu copy(MessageReference messageReference) {
            return new BindGuildMenu(messageReference);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof BindGuildMenu) && Intrinsics.areEqual(this.messageReference, ((BindGuildMenu) obj).messageReference);
        }

        public final MessageReference getMessageReference() {
            return this.messageReference;
        }

        public int hashCode() {
            MessageReference messageReference = this.messageReference;
            if (messageReference == null) {
                return 0;
            }
            return messageReference.hashCode();
        }

        @NotNull
        public String toString() {
            MessageReference messageReference = this.messageReference;
            return "BindGuildMenu(messageReference=" + messageReference + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public /* synthetic */ BindGuildMenu(int i10, String str, Boolean bool, MessageReference messageReference, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (1 != (i10 & 1)) {
                v1.b(i10, 1, LinkContextData$BindGuildMenu$$serializer.INSTANCE.getDescriptor());
            }
            if ((i10 & 4) == 0) {
                this.messageReference = null;
            } else {
                this.messageReference = messageReference;
            }
        }

        public /* synthetic */ BindGuildMenu(MessageReference messageReference, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : messageReference);
        }

        public BindGuildMenu(MessageReference messageReference) {
            super("bindGuildMenu", (Boolean) null, 2, (DefaultConstructorMarker) null);
            this.messageReference = messageReference;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 &2\u00020\u0001:\u0002%&B\u001b\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007BC\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u0006\u0010\u000eJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0015\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010\u0012J$\u0010\u0016\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001¢\u0006\u0002\u0010\u0017J\u0013\u0010\u0018\u001a\u00020\u00052\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aHÖ\u0003J\t\u0010\u001b\u001a\u00020\tHÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001J%\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u00002\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#H\u0001¢\u0006\u0002\b$R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012¨\u0006'"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindInsertText;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "text", "", "addSpace", "", "<init>", "(Ljava/lang/String;Ljava/lang/Boolean;)V", "seen0", "", "action", "medium", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/Boolean;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getText", "()Ljava/lang/String;", "getAddSpace", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "component1", "component2", "copy", "(Ljava/lang/String;Ljava/lang/Boolean;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindInsertText;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindInsertText extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final Boolean addSpace;
        @NotNull
        private final String text;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindInsertText$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindInsertText;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindInsertText$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public /* synthetic */ BindInsertText(int i10, String str, Boolean bool, String str2, Boolean bool2, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (5 != (i10 & 5)) {
                v1.b(i10, 5, LinkContextData$BindInsertText$$serializer.INSTANCE.getDescriptor());
            }
            this.text = str2;
            if ((i10 & 8) == 0) {
                this.addSpace = null;
            } else {
                this.addSpace = bool2;
            }
        }

        public static /* synthetic */ BindInsertText copy$default(BindInsertText bindInsertText, String str, Boolean bool, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = bindInsertText.text;
            }
            if ((i10 & 2) != 0) {
                bool = bindInsertText.addSpace;
            }
            return bindInsertText.copy(str, bool);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindInsertText bindInsertText, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindInsertText, compositeEncoder, serialDescriptor);
            compositeEncoder.y(serialDescriptor, 2, bindInsertText.text);
            if (compositeEncoder.z(serialDescriptor, 3) || bindInsertText.addSpace != null) {
                compositeEncoder.s(serialDescriptor, 3, dt.h.f20942a, bindInsertText.addSpace);
            }
        }

        @NotNull
        public final String component1() {
            return this.text;
        }

        public final Boolean component2() {
            return this.addSpace;
        }

        @NotNull
        public final BindInsertText copy(@NotNull String text, Boolean bool) {
            Intrinsics.checkNotNullParameter(text, "text");
            return new BindInsertText(text, bool);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BindInsertText) {
                BindInsertText bindInsertText = (BindInsertText) obj;
                return Intrinsics.areEqual(this.text, bindInsertText.text) && Intrinsics.areEqual(this.addSpace, bindInsertText.addSpace);
            }
            return false;
        }

        public final Boolean getAddSpace() {
            return this.addSpace;
        }

        @NotNull
        public final String getText() {
            return this.text;
        }

        public int hashCode() {
            int hashCode = this.text.hashCode() * 31;
            Boolean bool = this.addSpace;
            return hashCode + (bool == null ? 0 : bool.hashCode());
        }

        @NotNull
        public String toString() {
            String str = this.text;
            Boolean bool = this.addSpace;
            return "BindInsertText(text=" + str + ", addSpace=" + bool + ")";
        }

        public /* synthetic */ BindInsertText(String str, Boolean bool, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? null : bool);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public BindInsertText(@NotNull String text, Boolean bool) {
            super("bindInsertText", (Boolean) null, 2, (DefaultConstructorMarker) null);
            Intrinsics.checkNotNullParameter(text, "text");
            this.text = text;
            this.addSpace = bool;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0087\b\u0018\u0000 \"2\u00020\u0001:\u0003 !\"B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005B9\b\u0010\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u0004\u0010\u000eJ\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\u0012\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u000b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0007HÖ\u0001J\t\u0010\u0017\u001a\u00020\tHÖ\u0001J%\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u00002\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001eH\u0001¢\u0006\u0002\b\u001fR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006#"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "stream", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream$ApplicationStream;", "<init>", "(Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream$ApplicationStream;)V", "seen0", "", "action", "", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream$ApplicationStream;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getStream", "()Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream$ApplicationStream;", "component1", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "ApplicationStream", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindJoinStream extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private final ApplicationStream stream;

        @at.m
        @Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001c\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 62\u00020\u0001:\u000256B7\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\f\u0010\rBM\b\u0010\u0012\u0006\u0010\u000e\u001a\u00020\u000f\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011¢\u0006\u0004\b\f\u0010\u0012J\u0010\u0010\u001e\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u001f\u0010\u0014J\u0010\u0010 \u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b!\u0010\u0014J\u0010\u0010\"\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\b#J\t\u0010$\u001a\u00020\tHÆ\u0003J\u0010\u0010%\u001a\u0004\u0018\u00010\u000bHÆ\u0003¢\u0006\u0002\u0010\u001cJF\u0010&\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000bHÆ\u0001¢\u0006\u0004\b'\u0010(J\u0013\u0010)\u001a\u00020\u000b2\b\u0010*\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010+\u001a\u00020\u000fHÖ\u0001J\t\u0010,\u001a\u00020\tHÖ\u0001J%\u0010-\u001a\u00020.2\u0006\u0010/\u001a\u00020\u00002\u0006\u00100\u001a\u0002012\u0006\u00102\u001a\u000203H\u0001¢\u0006\u0002\b4R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0015\u001a\u0004\b\u0013\u0010\u0014R\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010\u0015\u001a\u0004\b\u0016\u0010\u0014R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0015\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\n\n\u0002\u0010\u001d\u001a\u0004\b\u001b\u0010\u001c¨\u00067"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream$ApplicationStream;", "", "ownerId", "Lcom/discord/primitives/UserId;", "channelId", "Lcom/discord/primitives/ChannelId;", "guildId", "Lcom/discord/primitives/GuildId;", "streamType", "", "discoverable", "", "<init>", "(JJLcom/discord/primitives/GuildId;Ljava/lang/String;Ljava/lang/Boolean;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/primitives/UserId;Lcom/discord/primitives/ChannelId;Lcom/discord/primitives/GuildId;Ljava/lang/String;Ljava/lang/Boolean;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getOwnerId-re6GcUE", "()J", "J", "getChannelId-o4g7jtM", "getGuildId-qOKuAAo", "()Lcom/discord/primitives/GuildId;", "getStreamType", "()Ljava/lang/String;", "getDiscoverable", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "component1", "component1-re6GcUE", "component2", "component2-o4g7jtM", "component3", "component3-qOKuAAo", "component4", "component5", "copy", "copy-t0eeQLs", "(JJLcom/discord/primitives/GuildId;Ljava/lang/String;Ljava/lang/Boolean;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream$ApplicationStream;", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class ApplicationStream {
            @NotNull
            public static final Companion Companion = new Companion(null);
            private final long channelId;
            private final Boolean discoverable;
            private final GuildId guildId;
            private final long ownerId;
            @NotNull
            private final String streamType;

            @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream$ApplicationStream$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream$ApplicationStream;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class Companion {
                private Companion() {
                }

                @NotNull
                public final KSerializer serializer() {
                    return LinkContextData$BindJoinStream$ApplicationStream$$serializer.INSTANCE;
                }

                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }
            }

            public /* synthetic */ ApplicationStream(int i10, UserId userId, ChannelId channelId, GuildId guildId, String str, Boolean bool, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
                this(i10, userId, channelId, guildId, str, bool, serializationConstructorMarker);
            }

            /* renamed from: copy-t0eeQLs$default  reason: not valid java name */
            public static /* synthetic */ ApplicationStream m317copyt0eeQLs$default(ApplicationStream applicationStream, long j10, long j11, GuildId guildId, String str, Boolean bool, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    j10 = applicationStream.ownerId;
                }
                long j12 = j10;
                if ((i10 & 2) != 0) {
                    j11 = applicationStream.channelId;
                }
                long j13 = j11;
                if ((i10 & 4) != 0) {
                    guildId = applicationStream.guildId;
                }
                GuildId guildId2 = guildId;
                if ((i10 & 8) != 0) {
                    str = applicationStream.streamType;
                }
                String str2 = str;
                if ((i10 & 16) != 0) {
                    bool = applicationStream.discoverable;
                }
                return applicationStream.m321copyt0eeQLs(j12, j13, guildId2, str2, bool);
            }

            public static final /* synthetic */ void write$Self$chat_release(ApplicationStream applicationStream, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
                compositeEncoder.D(serialDescriptor, 0, UserId$$serializer.INSTANCE, UserId.m1137boximpl(applicationStream.ownerId));
                compositeEncoder.D(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(applicationStream.channelId));
                if (compositeEncoder.z(serialDescriptor, 2) || applicationStream.guildId != null) {
                    compositeEncoder.s(serialDescriptor, 2, GuildId$$serializer.INSTANCE, applicationStream.guildId);
                }
                compositeEncoder.y(serialDescriptor, 3, applicationStream.streamType);
                if (compositeEncoder.z(serialDescriptor, 4) || applicationStream.discoverable != null) {
                    compositeEncoder.s(serialDescriptor, 4, dt.h.f20942a, applicationStream.discoverable);
                }
            }

            /* renamed from: component1-re6GcUE  reason: not valid java name */
            public final long m318component1re6GcUE() {
                return this.ownerId;
            }

            /* renamed from: component2-o4g7jtM  reason: not valid java name */
            public final long m319component2o4g7jtM() {
                return this.channelId;
            }

            /* renamed from: component3-qOKuAAo  reason: not valid java name */
            public final GuildId m320component3qOKuAAo() {
                return this.guildId;
            }

            @NotNull
            public final String component4() {
                return this.streamType;
            }

            public final Boolean component5() {
                return this.discoverable;
            }

            @NotNull
            /* renamed from: copy-t0eeQLs  reason: not valid java name */
            public final ApplicationStream m321copyt0eeQLs(long j10, long j11, GuildId guildId, @NotNull String streamType, Boolean bool) {
                Intrinsics.checkNotNullParameter(streamType, "streamType");
                return new ApplicationStream(j10, j11, guildId, streamType, bool, null);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof ApplicationStream) {
                    ApplicationStream applicationStream = (ApplicationStream) obj;
                    return UserId.m1141equalsimpl0(this.ownerId, applicationStream.ownerId) && ChannelId.m1063equalsimpl0(this.channelId, applicationStream.channelId) && Intrinsics.areEqual(this.guildId, applicationStream.guildId) && Intrinsics.areEqual(this.streamType, applicationStream.streamType) && Intrinsics.areEqual(this.discoverable, applicationStream.discoverable);
                }
                return false;
            }

            /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
            public final long m322getChannelIdo4g7jtM() {
                return this.channelId;
            }

            public final Boolean getDiscoverable() {
                return this.discoverable;
            }

            /* renamed from: getGuildId-qOKuAAo  reason: not valid java name */
            public final GuildId m323getGuildIdqOKuAAo() {
                return this.guildId;
            }

            /* renamed from: getOwnerId-re6GcUE  reason: not valid java name */
            public final long m324getOwnerIdre6GcUE() {
                return this.ownerId;
            }

            @NotNull
            public final String getStreamType() {
                return this.streamType;
            }

            public int hashCode() {
                int m1142hashCodeimpl = ((UserId.m1142hashCodeimpl(this.ownerId) * 31) + ChannelId.m1064hashCodeimpl(this.channelId)) * 31;
                GuildId guildId = this.guildId;
                int m1077hashCodeimpl = (((m1142hashCodeimpl + (guildId == null ? 0 : GuildId.m1077hashCodeimpl(guildId.m1081unboximpl()))) * 31) + this.streamType.hashCode()) * 31;
                Boolean bool = this.discoverable;
                return m1077hashCodeimpl + (bool != null ? bool.hashCode() : 0);
            }

            @NotNull
            public String toString() {
                String m1144toStringimpl = UserId.m1144toStringimpl(this.ownerId);
                String m1066toStringimpl = ChannelId.m1066toStringimpl(this.channelId);
                GuildId guildId = this.guildId;
                String str = this.streamType;
                Boolean bool = this.discoverable;
                return "ApplicationStream(ownerId=" + m1144toStringimpl + ", channelId=" + m1066toStringimpl + ", guildId=" + guildId + ", streamType=" + str + ", discoverable=" + bool + ")";
            }

            public /* synthetic */ ApplicationStream(long j10, long j11, GuildId guildId, String str, Boolean bool, DefaultConstructorMarker defaultConstructorMarker) {
                this(j10, j11, guildId, str, bool);
            }

            private /* synthetic */ ApplicationStream(int i10, UserId userId, ChannelId channelId, GuildId guildId, String str, Boolean bool, SerializationConstructorMarker serializationConstructorMarker) {
                if (11 != (i10 & 11)) {
                    v1.b(i10, 11, LinkContextData$BindJoinStream$ApplicationStream$$serializer.INSTANCE.getDescriptor());
                }
                this.ownerId = userId.m1146unboximpl();
                this.channelId = channelId.m1068unboximpl();
                if ((i10 & 4) == 0) {
                    this.guildId = null;
                } else {
                    this.guildId = guildId;
                }
                this.streamType = str;
                if ((i10 & 16) == 0) {
                    this.discoverable = null;
                } else {
                    this.discoverable = bool;
                }
            }

            private ApplicationStream(long j10, long j11, GuildId guildId, String streamType, Boolean bool) {
                Intrinsics.checkNotNullParameter(streamType, "streamType");
                this.ownerId = j10;
                this.channelId = j11;
                this.guildId = guildId;
                this.streamType = streamType;
                this.discoverable = bool;
            }

            public /* synthetic */ ApplicationStream(long j10, long j11, GuildId guildId, String str, Boolean bool, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(j10, j11, (i10 & 4) != 0 ? null : guildId, str, (i10 & 16) != 0 ? null : bool, null);
            }
        }

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindJoinStream$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public /* synthetic */ BindJoinStream(int i10, String str, Boolean bool, ApplicationStream applicationStream, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (5 != (i10 & 5)) {
                v1.b(i10, 5, LinkContextData$BindJoinStream$$serializer.INSTANCE.getDescriptor());
            }
            this.stream = applicationStream;
        }

        public static /* synthetic */ BindJoinStream copy$default(BindJoinStream bindJoinStream, ApplicationStream applicationStream, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                applicationStream = bindJoinStream.stream;
            }
            return bindJoinStream.copy(applicationStream);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindJoinStream bindJoinStream, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindJoinStream, compositeEncoder, serialDescriptor);
            compositeEncoder.D(serialDescriptor, 2, LinkContextData$BindJoinStream$ApplicationStream$$serializer.INSTANCE, bindJoinStream.stream);
        }

        @NotNull
        public final ApplicationStream component1() {
            return this.stream;
        }

        @NotNull
        public final BindJoinStream copy(@NotNull ApplicationStream stream) {
            Intrinsics.checkNotNullParameter(stream, "stream");
            return new BindJoinStream(stream);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof BindJoinStream) && Intrinsics.areEqual(this.stream, ((BindJoinStream) obj).stream);
        }

        @NotNull
        public final ApplicationStream getStream() {
            return this.stream;
        }

        public int hashCode() {
            return this.stream.hashCode();
        }

        @NotNull
        public String toString() {
            ApplicationStream applicationStream = this.stream;
            return "BindJoinStream(stream=" + applicationStream + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public BindJoinStream(@NotNull ApplicationStream stream) {
            super("bindTapUsername", (Boolean) null, 2, (DefaultConstructorMarker) null);
            Intrinsics.checkNotNullParameter(stream, "stream");
            this.stream = stream;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 #2\u00020\u0001:\u0002\"#B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006BC\b\u0010\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u0005\u0010\u000eJ\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0015\u001a\u00020\u000b2\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017HÖ\u0003J\t\u0010\u0018\u001a\u00020\bHÖ\u0001J\t\u0010\u0019\u001a\u00020\u0003HÖ\u0001J%\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00002\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020 H\u0001¢\u0006\u0002\b!R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010¨\u0006$"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJumpToMessage;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "targetChannelId", "", "targetMessageId", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "action", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getTargetChannelId", "()Ljava/lang/String;", "getTargetMessageId", "component1", "component2", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindJumpToMessage extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private final String targetChannelId;
        @NotNull
        private final String targetMessageId;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJumpToMessage$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJumpToMessage;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindJumpToMessage$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public /* synthetic */ BindJumpToMessage(int i10, String str, Boolean bool, String str2, String str3, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (13 != (i10 & 13)) {
                v1.b(i10, 13, LinkContextData$BindJumpToMessage$$serializer.INSTANCE.getDescriptor());
            }
            this.targetChannelId = str2;
            this.targetMessageId = str3;
        }

        public static /* synthetic */ BindJumpToMessage copy$default(BindJumpToMessage bindJumpToMessage, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = bindJumpToMessage.targetChannelId;
            }
            if ((i10 & 2) != 0) {
                str2 = bindJumpToMessage.targetMessageId;
            }
            return bindJumpToMessage.copy(str, str2);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindJumpToMessage bindJumpToMessage, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindJumpToMessage, compositeEncoder, serialDescriptor);
            compositeEncoder.y(serialDescriptor, 2, bindJumpToMessage.targetChannelId);
            compositeEncoder.y(serialDescriptor, 3, bindJumpToMessage.targetMessageId);
        }

        @NotNull
        public final String component1() {
            return this.targetChannelId;
        }

        @NotNull
        public final String component2() {
            return this.targetMessageId;
        }

        @NotNull
        public final BindJumpToMessage copy(@NotNull String targetChannelId, @NotNull String targetMessageId) {
            Intrinsics.checkNotNullParameter(targetChannelId, "targetChannelId");
            Intrinsics.checkNotNullParameter(targetMessageId, "targetMessageId");
            return new BindJumpToMessage(targetChannelId, targetMessageId);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BindJumpToMessage) {
                BindJumpToMessage bindJumpToMessage = (BindJumpToMessage) obj;
                return Intrinsics.areEqual(this.targetChannelId, bindJumpToMessage.targetChannelId) && Intrinsics.areEqual(this.targetMessageId, bindJumpToMessage.targetMessageId);
            }
            return false;
        }

        @NotNull
        public final String getTargetChannelId() {
            return this.targetChannelId;
        }

        @NotNull
        public final String getTargetMessageId() {
            return this.targetMessageId;
        }

        public int hashCode() {
            return (this.targetChannelId.hashCode() * 31) + this.targetMessageId.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.targetChannelId;
            String str2 = this.targetMessageId;
            return "BindJumpToMessage(targetChannelId=" + str + ", targetMessageId=" + str2 + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public BindJumpToMessage(@NotNull String targetChannelId, @NotNull String targetMessageId) {
            super("bindJumpToMessage", (Boolean) null, 2, (DefaultConstructorMarker) null);
            Intrinsics.checkNotNullParameter(targetChannelId, "targetChannelId");
            Intrinsics.checkNotNullParameter(targetMessageId, "targetMessageId");
            this.targetChannelId = targetChannelId;
            this.targetMessageId = targetMessageId;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 &2\u00020\u0001:\u0002%&B\u001b\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007BC\b\u0010\u0012\u0006\u0010\b\u001a\u00020\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u0006\u0010\u000eJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0015\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010\u0012J$\u0010\u0016\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001¢\u0006\u0002\u0010\u0017J\u0013\u0010\u0018\u001a\u00020\u000b2\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aHÖ\u0003J\t\u0010\u001b\u001a\u00020\u0005HÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001J%\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u00002\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#H\u0001¢\u0006\u0002\b$R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012¨\u0006'"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenGdmCustomizeActionSheet;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "messageChannelId", "", "linkColor", "", "<init>", "(Ljava/lang/String;Ljava/lang/Integer;)V", "seen0", "action", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/Integer;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getMessageChannelId", "()Ljava/lang/String;", "getLinkColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "component1", "component2", "copy", "(Ljava/lang/String;Ljava/lang/Integer;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenGdmCustomizeActionSheet;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindOpenGdmCustomizeActionSheet extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final Integer linkColor;
        @NotNull
        private final String messageChannelId;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenGdmCustomizeActionSheet$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenGdmCustomizeActionSheet;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindOpenGdmCustomizeActionSheet$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public /* synthetic */ BindOpenGdmCustomizeActionSheet(int i10, String str, Boolean bool, String str2, Integer num, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (5 != (i10 & 5)) {
                v1.b(i10, 5, LinkContextData$BindOpenGdmCustomizeActionSheet$$serializer.INSTANCE.getDescriptor());
            }
            this.messageChannelId = str2;
            if ((i10 & 8) == 0) {
                this.linkColor = null;
            } else {
                this.linkColor = num;
            }
        }

        public static /* synthetic */ BindOpenGdmCustomizeActionSheet copy$default(BindOpenGdmCustomizeActionSheet bindOpenGdmCustomizeActionSheet, String str, Integer num, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = bindOpenGdmCustomizeActionSheet.messageChannelId;
            }
            if ((i10 & 2) != 0) {
                num = bindOpenGdmCustomizeActionSheet.linkColor;
            }
            return bindOpenGdmCustomizeActionSheet.copy(str, num);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindOpenGdmCustomizeActionSheet bindOpenGdmCustomizeActionSheet, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindOpenGdmCustomizeActionSheet, compositeEncoder, serialDescriptor);
            compositeEncoder.y(serialDescriptor, 2, bindOpenGdmCustomizeActionSheet.messageChannelId);
            if (compositeEncoder.z(serialDescriptor, 3) || bindOpenGdmCustomizeActionSheet.linkColor != null) {
                compositeEncoder.s(serialDescriptor, 3, p0.f20994a, bindOpenGdmCustomizeActionSheet.linkColor);
            }
        }

        @NotNull
        public final String component1() {
            return this.messageChannelId;
        }

        public final Integer component2() {
            return this.linkColor;
        }

        @NotNull
        public final BindOpenGdmCustomizeActionSheet copy(@NotNull String messageChannelId, Integer num) {
            Intrinsics.checkNotNullParameter(messageChannelId, "messageChannelId");
            return new BindOpenGdmCustomizeActionSheet(messageChannelId, num);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BindOpenGdmCustomizeActionSheet) {
                BindOpenGdmCustomizeActionSheet bindOpenGdmCustomizeActionSheet = (BindOpenGdmCustomizeActionSheet) obj;
                return Intrinsics.areEqual(this.messageChannelId, bindOpenGdmCustomizeActionSheet.messageChannelId) && Intrinsics.areEqual(this.linkColor, bindOpenGdmCustomizeActionSheet.linkColor);
            }
            return false;
        }

        public final Integer getLinkColor() {
            return this.linkColor;
        }

        @NotNull
        public final String getMessageChannelId() {
            return this.messageChannelId;
        }

        public int hashCode() {
            int hashCode = this.messageChannelId.hashCode() * 31;
            Integer num = this.linkColor;
            return hashCode + (num == null ? 0 : num.hashCode());
        }

        @NotNull
        public String toString() {
            String str = this.messageChannelId;
            Integer num = this.linkColor;
            return "BindOpenGdmCustomizeActionSheet(messageChannelId=" + str + ", linkColor=" + num + ")";
        }

        public /* synthetic */ BindOpenGdmCustomizeActionSheet(String str, Integer num, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? null : num);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public BindOpenGdmCustomizeActionSheet(@NotNull String messageChannelId, Integer num) {
            super("bindOpenGdmCustomizeActionSheet", (Boolean) null, 2, (DefaultConstructorMarker) null);
            Intrinsics.checkNotNullParameter(messageChannelId, "messageChannelId");
            this.messageChannelId = messageChannelId;
            this.linkColor = num;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 %2\u00020\u0001:\u0002$%B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005B9\b\u0010\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u0004\u0010\u000eJ\u0010\u0010\u0012\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0013\u0010\u0010J\u001a\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001¢\u0006\u0004\b\u0015\u0010\u0016J\u0013\u0010\u0017\u001a\u00020\u000b2\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019HÖ\u0003J\t\u0010\u001a\u001a\u00020\u0007HÖ\u0001J\t\u0010\u001b\u001a\u00020\tHÖ\u0001J%\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u00002\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"H\u0001¢\u0006\u0002\b#R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0011\u001a\u0004\b\u000f\u0010\u0010¨\u0006&"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenInviteSheet;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "messageChannelId", "Lcom/discord/primitives/ChannelId;", "<init>", "(JLkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "action", "", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Lcom/discord/primitives/ChannelId;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageChannelId-o4g7jtM", "()J", "J", "component1", "component1-o4g7jtM", "copy", "copy-R7gqayM", "(J)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenInviteSheet;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindOpenInviteSheet extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final long messageChannelId;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenInviteSheet$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenInviteSheet;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindOpenInviteSheet$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        public /* synthetic */ BindOpenInviteSheet(int i10, String str, Boolean bool, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, str, bool, channelId, serializationConstructorMarker);
        }

        /* renamed from: copy-R7gqayM$default  reason: not valid java name */
        public static /* synthetic */ BindOpenInviteSheet m325copyR7gqayM$default(BindOpenInviteSheet bindOpenInviteSheet, long j10, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                j10 = bindOpenInviteSheet.messageChannelId;
            }
            return bindOpenInviteSheet.m327copyR7gqayM(j10);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindOpenInviteSheet bindOpenInviteSheet, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindOpenInviteSheet, compositeEncoder, serialDescriptor);
            compositeEncoder.D(serialDescriptor, 2, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(bindOpenInviteSheet.messageChannelId));
        }

        /* renamed from: component1-o4g7jtM  reason: not valid java name */
        public final long m326component1o4g7jtM() {
            return this.messageChannelId;
        }

        @NotNull
        /* renamed from: copy-R7gqayM  reason: not valid java name */
        public final BindOpenInviteSheet m327copyR7gqayM(long j10) {
            return new BindOpenInviteSheet(j10, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof BindOpenInviteSheet) && ChannelId.m1063equalsimpl0(this.messageChannelId, ((BindOpenInviteSheet) obj).messageChannelId);
        }

        /* renamed from: getMessageChannelId-o4g7jtM  reason: not valid java name */
        public final long m328getMessageChannelIdo4g7jtM() {
            return this.messageChannelId;
        }

        public int hashCode() {
            return ChannelId.m1064hashCodeimpl(this.messageChannelId);
        }

        @NotNull
        public String toString() {
            String m1066toStringimpl = ChannelId.m1066toStringimpl(this.messageChannelId);
            return "BindOpenInviteSheet(messageChannelId=" + m1066toStringimpl + ")";
        }

        public /* synthetic */ BindOpenInviteSheet(long j10, DefaultConstructorMarker defaultConstructorMarker) {
            this(j10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        private /* synthetic */ BindOpenInviteSheet(int i10, String str, Boolean bool, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (5 != (i10 & 5)) {
                v1.b(i10, 5, LinkContextData$BindOpenInviteSheet$$serializer.INSTANCE.getDescriptor());
            }
            this.messageChannelId = channelId.m1068unboximpl();
        }

        private BindOpenInviteSheet(long j10) {
            super("bindOpenInviteSheet", (Boolean) null, 2, (DefaultConstructorMarker) null);
            this.messageChannelId = j10;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 %2\u00020\u0001:\u0002$%B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005B9\b\u0010\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u0004\u0010\u000eJ\u0010\u0010\u0012\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0013\u0010\u0010J\u001a\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001¢\u0006\u0004\b\u0015\u0010\u0016J\u0013\u0010\u0017\u001a\u00020\u000b2\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019HÖ\u0003J\t\u0010\u001a\u001a\u00020\u0007HÖ\u0001J\t\u0010\u001b\u001a\u00020\tHÖ\u0001J%\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u00002\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"H\u0001¢\u0006\u0002\b#R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0011\u001a\u0004\b\u000f\u0010\u0010¨\u0006&"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenPins;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "messageChannelId", "Lcom/discord/primitives/ChannelId;", "<init>", "(JLkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "action", "", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Lcom/discord/primitives/ChannelId;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageChannelId-o4g7jtM", "()J", "J", "component1", "component1-o4g7jtM", "copy", "copy-R7gqayM", "(J)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenPins;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindOpenPins extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final long messageChannelId;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenPins$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenPins;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindOpenPins$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        public /* synthetic */ BindOpenPins(int i10, String str, Boolean bool, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, str, bool, channelId, serializationConstructorMarker);
        }

        /* renamed from: copy-R7gqayM$default  reason: not valid java name */
        public static /* synthetic */ BindOpenPins m329copyR7gqayM$default(BindOpenPins bindOpenPins, long j10, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                j10 = bindOpenPins.messageChannelId;
            }
            return bindOpenPins.m331copyR7gqayM(j10);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindOpenPins bindOpenPins, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindOpenPins, compositeEncoder, serialDescriptor);
            compositeEncoder.D(serialDescriptor, 2, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(bindOpenPins.messageChannelId));
        }

        /* renamed from: component1-o4g7jtM  reason: not valid java name */
        public final long m330component1o4g7jtM() {
            return this.messageChannelId;
        }

        @NotNull
        /* renamed from: copy-R7gqayM  reason: not valid java name */
        public final BindOpenPins m331copyR7gqayM(long j10) {
            return new BindOpenPins(j10, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof BindOpenPins) && ChannelId.m1063equalsimpl0(this.messageChannelId, ((BindOpenPins) obj).messageChannelId);
        }

        /* renamed from: getMessageChannelId-o4g7jtM  reason: not valid java name */
        public final long m332getMessageChannelIdo4g7jtM() {
            return this.messageChannelId;
        }

        public int hashCode() {
            return ChannelId.m1064hashCodeimpl(this.messageChannelId);
        }

        @NotNull
        public String toString() {
            String m1066toStringimpl = ChannelId.m1066toStringimpl(this.messageChannelId);
            return "BindOpenPins(messageChannelId=" + m1066toStringimpl + ")";
        }

        public /* synthetic */ BindOpenPins(long j10, DefaultConstructorMarker defaultConstructorMarker) {
            this(j10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        private /* synthetic */ BindOpenPins(int i10, String str, Boolean bool, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (5 != (i10 & 5)) {
                v1.b(i10, 5, LinkContextData$BindOpenPins$$serializer.INSTANCE.getDescriptor());
            }
            this.messageChannelId = channelId.m1068unboximpl();
        }

        private BindOpenPins(long j10) {
            super("bindOpenPins", (Boolean) null, 2, (DefaultConstructorMarker) null);
            this.messageChannelId = j10;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 )2\u00020\u0001:\u0002()B-\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0007\u0010\bBW\b\u0010\u0012\u0006\u0010\t\u001a\u00020\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b\u0007\u0010\u0010J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0017\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0018\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0019\u001a\u0004\u0018\u00010\u0003HÆ\u0003J7\u0010\u001a\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u001b\u001a\u00020\r2\b\u0010\u001c\u001a\u0004\u0018\u00010\u001dHÖ\u0003J\t\u0010\u001e\u001a\u00020\nHÖ\u0001J\t\u0010\u001f\u001a\u00020\u0003HÖ\u0001J%\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020\u00002\u0006\u0010#\u001a\u00020$2\u0006\u0010%\u001a\u00020&H\u0001¢\u0006\u0002\b'R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0012R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0012R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0012¨\u0006*"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenRoleSubscriptionOverview;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "guildId", "", "messageId", "channelId", "roleSubscriptionListingId", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "action", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getGuildId", "()Ljava/lang/String;", "getMessageId", "getChannelId", "getRoleSubscriptionListingId", "component1", "component2", "component3", "component4", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindOpenRoleSubscriptionOverview extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final String channelId;
        @NotNull
        private final String guildId;
        private final String messageId;
        private final String roleSubscriptionListingId;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenRoleSubscriptionOverview$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenRoleSubscriptionOverview;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindOpenRoleSubscriptionOverview$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public /* synthetic */ BindOpenRoleSubscriptionOverview(int i10, String str, Boolean bool, String str2, String str3, String str4, String str5, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (61 != (i10 & 61)) {
                v1.b(i10, 61, LinkContextData$BindOpenRoleSubscriptionOverview$$serializer.INSTANCE.getDescriptor());
            }
            this.guildId = str2;
            this.messageId = str3;
            this.channelId = str4;
            this.roleSubscriptionListingId = str5;
        }

        public static /* synthetic */ BindOpenRoleSubscriptionOverview copy$default(BindOpenRoleSubscriptionOverview bindOpenRoleSubscriptionOverview, String str, String str2, String str3, String str4, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = bindOpenRoleSubscriptionOverview.guildId;
            }
            if ((i10 & 2) != 0) {
                str2 = bindOpenRoleSubscriptionOverview.messageId;
            }
            if ((i10 & 4) != 0) {
                str3 = bindOpenRoleSubscriptionOverview.channelId;
            }
            if ((i10 & 8) != 0) {
                str4 = bindOpenRoleSubscriptionOverview.roleSubscriptionListingId;
            }
            return bindOpenRoleSubscriptionOverview.copy(str, str2, str3, str4);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindOpenRoleSubscriptionOverview bindOpenRoleSubscriptionOverview, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindOpenRoleSubscriptionOverview, compositeEncoder, serialDescriptor);
            compositeEncoder.y(serialDescriptor, 2, bindOpenRoleSubscriptionOverview.guildId);
            n2 n2Var = n2.f20978a;
            compositeEncoder.s(serialDescriptor, 3, n2Var, bindOpenRoleSubscriptionOverview.messageId);
            compositeEncoder.s(serialDescriptor, 4, n2Var, bindOpenRoleSubscriptionOverview.channelId);
            compositeEncoder.s(serialDescriptor, 5, n2Var, bindOpenRoleSubscriptionOverview.roleSubscriptionListingId);
        }

        @NotNull
        public final String component1() {
            return this.guildId;
        }

        public final String component2() {
            return this.messageId;
        }

        public final String component3() {
            return this.channelId;
        }

        public final String component4() {
            return this.roleSubscriptionListingId;
        }

        @NotNull
        public final BindOpenRoleSubscriptionOverview copy(@NotNull String guildId, String str, String str2, String str3) {
            Intrinsics.checkNotNullParameter(guildId, "guildId");
            return new BindOpenRoleSubscriptionOverview(guildId, str, str2, str3);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BindOpenRoleSubscriptionOverview) {
                BindOpenRoleSubscriptionOverview bindOpenRoleSubscriptionOverview = (BindOpenRoleSubscriptionOverview) obj;
                return Intrinsics.areEqual(this.guildId, bindOpenRoleSubscriptionOverview.guildId) && Intrinsics.areEqual(this.messageId, bindOpenRoleSubscriptionOverview.messageId) && Intrinsics.areEqual(this.channelId, bindOpenRoleSubscriptionOverview.channelId) && Intrinsics.areEqual(this.roleSubscriptionListingId, bindOpenRoleSubscriptionOverview.roleSubscriptionListingId);
            }
            return false;
        }

        public final String getChannelId() {
            return this.channelId;
        }

        @NotNull
        public final String getGuildId() {
            return this.guildId;
        }

        public final String getMessageId() {
            return this.messageId;
        }

        public final String getRoleSubscriptionListingId() {
            return this.roleSubscriptionListingId;
        }

        public int hashCode() {
            int hashCode = this.guildId.hashCode() * 31;
            String str = this.messageId;
            int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
            String str2 = this.channelId;
            int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
            String str3 = this.roleSubscriptionListingId;
            return hashCode3 + (str3 != null ? str3.hashCode() : 0);
        }

        @NotNull
        public String toString() {
            String str = this.guildId;
            String str2 = this.messageId;
            String str3 = this.channelId;
            String str4 = this.roleSubscriptionListingId;
            return "BindOpenRoleSubscriptionOverview(guildId=" + str + ", messageId=" + str2 + ", channelId=" + str3 + ", roleSubscriptionListingId=" + str4 + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public BindOpenRoleSubscriptionOverview(@NotNull String guildId, String str, String str2, String str3) {
            super("bindOpenRoleSubscriptionOverview", (Boolean) null, 2, (DefaultConstructorMarker) null);
            Intrinsics.checkNotNullParameter(guildId, "guildId");
            this.guildId = guildId;
            this.messageId = str;
            this.channelId = str2;
            this.roleSubscriptionListingId = str3;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 %2\u00020\u0001:\u0002$%B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005B9\b\u0010\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u0004\u0010\u000eJ\u0010\u0010\u0012\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0013\u0010\u0010J\u001a\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001¢\u0006\u0004\b\u0015\u0010\u0016J\u0013\u0010\u0017\u001a\u00020\u000b2\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019HÖ\u0003J\t\u0010\u001a\u001a\u00020\u0007HÖ\u0001J\t\u0010\u001b\u001a\u00020\tHÖ\u0001J%\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u00002\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"H\u0001¢\u0006\u0002\b#R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0011\u001a\u0004\b\u000f\u0010\u0010¨\u0006&"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenThreadChannel;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "threadId", "Lcom/discord/primitives/ChannelId;", "<init>", "(JLkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "action", "", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Lcom/discord/primitives/ChannelId;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getThreadId-o4g7jtM", "()J", "J", "component1", "component1-o4g7jtM", "copy", "copy-R7gqayM", "(J)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenThreadChannel;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindOpenThreadChannel extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final long threadId;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenThreadChannel$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenThreadChannel;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindOpenThreadChannel$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        public /* synthetic */ BindOpenThreadChannel(int i10, String str, Boolean bool, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, str, bool, channelId, serializationConstructorMarker);
        }

        /* renamed from: copy-R7gqayM$default  reason: not valid java name */
        public static /* synthetic */ BindOpenThreadChannel m333copyR7gqayM$default(BindOpenThreadChannel bindOpenThreadChannel, long j10, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                j10 = bindOpenThreadChannel.threadId;
            }
            return bindOpenThreadChannel.m335copyR7gqayM(j10);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindOpenThreadChannel bindOpenThreadChannel, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindOpenThreadChannel, compositeEncoder, serialDescriptor);
            compositeEncoder.D(serialDescriptor, 2, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(bindOpenThreadChannel.threadId));
        }

        /* renamed from: component1-o4g7jtM  reason: not valid java name */
        public final long m334component1o4g7jtM() {
            return this.threadId;
        }

        @NotNull
        /* renamed from: copy-R7gqayM  reason: not valid java name */
        public final BindOpenThreadChannel m335copyR7gqayM(long j10) {
            return new BindOpenThreadChannel(j10, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof BindOpenThreadChannel) && ChannelId.m1063equalsimpl0(this.threadId, ((BindOpenThreadChannel) obj).threadId);
        }

        /* renamed from: getThreadId-o4g7jtM  reason: not valid java name */
        public final long m336getThreadIdo4g7jtM() {
            return this.threadId;
        }

        public int hashCode() {
            return ChannelId.m1064hashCodeimpl(this.threadId);
        }

        @NotNull
        public String toString() {
            String m1066toStringimpl = ChannelId.m1066toStringimpl(this.threadId);
            return "BindOpenThreadChannel(threadId=" + m1066toStringimpl + ")";
        }

        public /* synthetic */ BindOpenThreadChannel(long j10, DefaultConstructorMarker defaultConstructorMarker) {
            this(j10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        private /* synthetic */ BindOpenThreadChannel(int i10, String str, Boolean bool, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (5 != (i10 & 5)) {
                v1.b(i10, 5, LinkContextData$BindOpenThreadChannel$$serializer.INSTANCE.getDescriptor());
            }
            this.threadId = channelId.m1068unboximpl();
        }

        private BindOpenThreadChannel(long j10) {
            super("bindOpenThreadChannel", (Boolean) null, 2, (DefaultConstructorMarker) null);
            this.threadId = j10;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 &2\u00020\u0001:\u0002%&B\u001b\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007BC\b\u0010\u0012\u0006\u0010\b\u001a\u00020\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u0006\u0010\u000eJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0015\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010\u0012J$\u0010\u0016\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001¢\u0006\u0002\u0010\u0017J\u0013\u0010\u0018\u001a\u00020\u000b2\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aHÖ\u0003J\t\u0010\u001b\u001a\u00020\u0005HÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001J%\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u00002\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#H\u0001¢\u0006\u0002\b$R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012¨\u0006'"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenUrl;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "url", "", "linkColor", "", "<init>", "(Ljava/lang/String;Ljava/lang/Integer;)V", "seen0", "action", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/Integer;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getUrl", "()Ljava/lang/String;", "getLinkColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "component1", "component2", "copy", "(Ljava/lang/String;Ljava/lang/Integer;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenUrl;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindOpenUrl extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final Integer linkColor;
        @NotNull
        private final String url;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenUrl$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenUrl;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindOpenUrl$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public /* synthetic */ BindOpenUrl(int i10, String str, Boolean bool, String str2, Integer num, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (5 != (i10 & 5)) {
                v1.b(i10, 5, LinkContextData$BindOpenUrl$$serializer.INSTANCE.getDescriptor());
            }
            this.url = str2;
            if ((i10 & 8) == 0) {
                this.linkColor = null;
            } else {
                this.linkColor = num;
            }
        }

        public static /* synthetic */ BindOpenUrl copy$default(BindOpenUrl bindOpenUrl, String str, Integer num, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = bindOpenUrl.url;
            }
            if ((i10 & 2) != 0) {
                num = bindOpenUrl.linkColor;
            }
            return bindOpenUrl.copy(str, num);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindOpenUrl bindOpenUrl, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindOpenUrl, compositeEncoder, serialDescriptor);
            compositeEncoder.y(serialDescriptor, 2, bindOpenUrl.url);
            if (compositeEncoder.z(serialDescriptor, 3) || bindOpenUrl.linkColor != null) {
                compositeEncoder.s(serialDescriptor, 3, p0.f20994a, bindOpenUrl.linkColor);
            }
        }

        @NotNull
        public final String component1() {
            return this.url;
        }

        public final Integer component2() {
            return this.linkColor;
        }

        @NotNull
        public final BindOpenUrl copy(@NotNull String url, Integer num) {
            Intrinsics.checkNotNullParameter(url, "url");
            return new BindOpenUrl(url, num);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BindOpenUrl) {
                BindOpenUrl bindOpenUrl = (BindOpenUrl) obj;
                return Intrinsics.areEqual(this.url, bindOpenUrl.url) && Intrinsics.areEqual(this.linkColor, bindOpenUrl.linkColor);
            }
            return false;
        }

        public final Integer getLinkColor() {
            return this.linkColor;
        }

        @NotNull
        public final String getUrl() {
            return this.url;
        }

        public int hashCode() {
            int hashCode = this.url.hashCode() * 31;
            Integer num = this.linkColor;
            return hashCode + (num == null ? 0 : num.hashCode());
        }

        @NotNull
        public String toString() {
            String str = this.url;
            Integer num = this.linkColor;
            return "BindOpenUrl(url=" + str + ", linkColor=" + num + ")";
        }

        public /* synthetic */ BindOpenUrl(String str, Integer num, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? null : num);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public BindOpenUrl(@NotNull String url, Integer num) {
            super("bindOpenUrl", (Boolean) null, 2, (DefaultConstructorMarker) null);
            Intrinsics.checkNotNullParameter(url, "url");
            this.url = url;
            this.linkColor = num;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 *2\u00020\u0001:\u0002)*B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007BC\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b\u0006\u0010\u0010J\u0010\u0010\u0015\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0016\u0010\u0012J\u0010\u0010\u0017\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u0018\u0010\u0012J$\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001¢\u0006\u0004\b\u001a\u0010\u001bJ\u0013\u0010\u001c\u001a\u00020\r2\b\u0010\u001d\u001a\u0004\u0018\u00010\u001eHÖ\u0003J\t\u0010\u001f\u001a\u00020\tHÖ\u0001J\t\u0010 \u001a\u00020\u000bHÖ\u0001J%\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020\u00002\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020'H\u0001¢\u0006\u0002\b(R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012R\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0014\u0010\u0012¨\u0006+"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapActivityText;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "applicationUserId", "Lcom/discord/primitives/UserId;", "messageChannelId", "Lcom/discord/primitives/ChannelId;", "<init>", "(JJLkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "action", "", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Lcom/discord/primitives/UserId;Lcom/discord/primitives/ChannelId;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getApplicationUserId-re6GcUE", "()J", "J", "getMessageChannelId-o4g7jtM", "component1", "component1-re6GcUE", "component2", "component2-o4g7jtM", "copy", "copy-mgJWFPo", "(JJ)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapActivityText;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindTapActivityText extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final long applicationUserId;
        private final long messageChannelId;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapActivityText$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapActivityText;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindTapActivityText$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        public /* synthetic */ BindTapActivityText(int i10, String str, Boolean bool, UserId userId, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, str, bool, userId, channelId, serializationConstructorMarker);
        }

        /* renamed from: copy-mgJWFPo$default  reason: not valid java name */
        public static /* synthetic */ BindTapActivityText m337copymgJWFPo$default(BindTapActivityText bindTapActivityText, long j10, long j11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                j10 = bindTapActivityText.applicationUserId;
            }
            if ((i10 & 2) != 0) {
                j11 = bindTapActivityText.messageChannelId;
            }
            return bindTapActivityText.m340copymgJWFPo(j10, j11);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindTapActivityText bindTapActivityText, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindTapActivityText, compositeEncoder, serialDescriptor);
            compositeEncoder.D(serialDescriptor, 2, UserId$$serializer.INSTANCE, UserId.m1137boximpl(bindTapActivityText.applicationUserId));
            compositeEncoder.D(serialDescriptor, 3, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(bindTapActivityText.messageChannelId));
        }

        /* renamed from: component1-re6GcUE  reason: not valid java name */
        public final long m338component1re6GcUE() {
            return this.applicationUserId;
        }

        /* renamed from: component2-o4g7jtM  reason: not valid java name */
        public final long m339component2o4g7jtM() {
            return this.messageChannelId;
        }

        @NotNull
        /* renamed from: copy-mgJWFPo  reason: not valid java name */
        public final BindTapActivityText m340copymgJWFPo(long j10, long j11) {
            return new BindTapActivityText(j10, j11, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BindTapActivityText) {
                BindTapActivityText bindTapActivityText = (BindTapActivityText) obj;
                return UserId.m1141equalsimpl0(this.applicationUserId, bindTapActivityText.applicationUserId) && ChannelId.m1063equalsimpl0(this.messageChannelId, bindTapActivityText.messageChannelId);
            }
            return false;
        }

        /* renamed from: getApplicationUserId-re6GcUE  reason: not valid java name */
        public final long m341getApplicationUserIdre6GcUE() {
            return this.applicationUserId;
        }

        /* renamed from: getMessageChannelId-o4g7jtM  reason: not valid java name */
        public final long m342getMessageChannelIdo4g7jtM() {
            return this.messageChannelId;
        }

        public int hashCode() {
            return (UserId.m1142hashCodeimpl(this.applicationUserId) * 31) + ChannelId.m1064hashCodeimpl(this.messageChannelId);
        }

        @NotNull
        public String toString() {
            String m1144toStringimpl = UserId.m1144toStringimpl(this.applicationUserId);
            String m1066toStringimpl = ChannelId.m1066toStringimpl(this.messageChannelId);
            return "BindTapActivityText(applicationUserId=" + m1144toStringimpl + ", messageChannelId=" + m1066toStringimpl + ")";
        }

        public /* synthetic */ BindTapActivityText(long j10, long j11, DefaultConstructorMarker defaultConstructorMarker) {
            this(j10, j11);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        private /* synthetic */ BindTapActivityText(int i10, String str, Boolean bool, UserId userId, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (13 != (i10 & 13)) {
                v1.b(i10, 13, LinkContextData$BindTapActivityText$$serializer.INSTANCE.getDescriptor());
            }
            this.applicationUserId = userId.m1146unboximpl();
            this.messageChannelId = channelId.m1068unboximpl();
        }

        private BindTapActivityText(long j10, long j11) {
            super("bindTapActivityText", (Boolean) null, 2, (DefaultConstructorMarker) null);
            this.applicationUserId = j10;
            this.messageChannelId = j11;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000^\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0019\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 :2\u00020\u0001:\u00029:B/\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u0006\u0010\t\u001a\u00020\n¢\u0006\u0004\b\u000b\u0010\fBa\b\u0010\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014¢\u0006\u0004\b\u000b\u0010\u0015J\u0010\u0010 \u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b!\u0010\u0017J\u0010\u0010\"\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b#\u0010\u001aJ\u0010\u0010$\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b%\u0010\u0017J\t\u0010&\u001a\u00020\bHÆ\u0003J\u0010\u0010'\u001a\u00020\nHÆ\u0003¢\u0006\u0004\b(\u0010\u0017JB\u0010)\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00032\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\nHÆ\u0001¢\u0006\u0004\b*\u0010+J\u0013\u0010,\u001a\u00020\u00122\b\u0010-\u001a\u0004\u0018\u00010.HÖ\u0003J\t\u0010/\u001a\u00020\u000eHÖ\u0001J\t\u00100\u001a\u00020\u0010HÖ\u0001J%\u00101\u001a\u0002022\u0006\u00103\u001a\u00020\u00002\u0006\u00104\u001a\u0002052\u0006\u00106\u001a\u000207H\u0001¢\u0006\u0002\b8R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0018\u001a\u0004\b\u0016\u0010\u0017R\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010\u001b\u001a\u0004\b\u0019\u0010\u001aR\u0013\u0010\u0006\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0018\u001a\u0004\b\u001c\u0010\u0017R\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001eR\u0013\u0010\t\u001a\u00020\n¢\u0006\n\n\u0002\u0010\u0018\u001a\u0004\b\u001f\u0010\u0017¨\u0006;"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapCommandName;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "userId", "Lcom/discord/primitives/UserId;", "messageId", "Lcom/discord/primitives/MessageId;", "applicationUserId", "messageType", "Lcom/discord/chat/bridge/MessageType;", "messageChannelId", "Lcom/discord/primitives/ChannelId;", "<init>", "(JLjava/lang/String;JLcom/discord/chat/bridge/MessageType;JLkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "action", "", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Lcom/discord/primitives/UserId;Ljava/lang/String;Lcom/discord/primitives/UserId;Lcom/discord/chat/bridge/MessageType;Lcom/discord/primitives/ChannelId;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getUserId-re6GcUE", "()J", "J", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getApplicationUserId-re6GcUE", "getMessageType", "()Lcom/discord/chat/bridge/MessageType;", "getMessageChannelId-o4g7jtM", "component1", "component1-re6GcUE", "component2", "component2-3Eiw7ao", "component3", "component3-re6GcUE", "component4", "component5", "component5-o4g7jtM", "copy", "copy-7bunf98", "(JLjava/lang/String;JLcom/discord/chat/bridge/MessageType;J)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapCommandName;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindTapCommandName extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final long applicationUserId;
        private final long messageChannelId;
        @NotNull
        private final String messageId;
        @NotNull
        private final MessageType messageType;
        private final long userId;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapCommandName$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapCommandName;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindTapCommandName$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        public /* synthetic */ BindTapCommandName(int i10, String str, Boolean bool, UserId userId, String str2, UserId userId2, MessageType messageType, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, str, bool, userId, str2, userId2, messageType, channelId, serializationConstructorMarker);
        }

        /* renamed from: copy-7bunf98$default  reason: not valid java name */
        public static /* synthetic */ BindTapCommandName m343copy7bunf98$default(BindTapCommandName bindTapCommandName, long j10, String str, long j11, MessageType messageType, long j12, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                j10 = bindTapCommandName.userId;
            }
            long j13 = j10;
            if ((i10 & 2) != 0) {
                str = bindTapCommandName.messageId;
            }
            String str2 = str;
            if ((i10 & 4) != 0) {
                j11 = bindTapCommandName.applicationUserId;
            }
            long j14 = j11;
            if ((i10 & 8) != 0) {
                messageType = bindTapCommandName.messageType;
            }
            return bindTapCommandName.m348copy7bunf98(j13, str2, j14, messageType, (i10 & 16) != 0 ? bindTapCommandName.messageChannelId : j12);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindTapCommandName bindTapCommandName, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindTapCommandName, compositeEncoder, serialDescriptor);
            UserId$$serializer userId$$serializer = UserId$$serializer.INSTANCE;
            compositeEncoder.D(serialDescriptor, 2, userId$$serializer, UserId.m1137boximpl(bindTapCommandName.userId));
            compositeEncoder.D(serialDescriptor, 3, MessageId$$serializer.INSTANCE, MessageId.m1085boximpl(bindTapCommandName.messageId));
            compositeEncoder.D(serialDescriptor, 4, userId$$serializer, UserId.m1137boximpl(bindTapCommandName.applicationUserId));
            compositeEncoder.D(serialDescriptor, 5, MessageType.Serializer.INSTANCE, bindTapCommandName.messageType);
            compositeEncoder.D(serialDescriptor, 6, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(bindTapCommandName.messageChannelId));
        }

        /* renamed from: component1-re6GcUE  reason: not valid java name */
        public final long m344component1re6GcUE() {
            return this.userId;
        }

        @NotNull
        /* renamed from: component2-3Eiw7ao  reason: not valid java name */
        public final String m345component23Eiw7ao() {
            return this.messageId;
        }

        /* renamed from: component3-re6GcUE  reason: not valid java name */
        public final long m346component3re6GcUE() {
            return this.applicationUserId;
        }

        @NotNull
        public final MessageType component4() {
            return this.messageType;
        }

        /* renamed from: component5-o4g7jtM  reason: not valid java name */
        public final long m347component5o4g7jtM() {
            return this.messageChannelId;
        }

        @NotNull
        /* renamed from: copy-7bunf98  reason: not valid java name */
        public final BindTapCommandName m348copy7bunf98(long j10, @NotNull String messageId, long j11, @NotNull MessageType messageType, long j12) {
            Intrinsics.checkNotNullParameter(messageId, "messageId");
            Intrinsics.checkNotNullParameter(messageType, "messageType");
            return new BindTapCommandName(j10, messageId, j11, messageType, j12, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BindTapCommandName) {
                BindTapCommandName bindTapCommandName = (BindTapCommandName) obj;
                return UserId.m1141equalsimpl0(this.userId, bindTapCommandName.userId) && MessageId.m1089equalsimpl0(this.messageId, bindTapCommandName.messageId) && UserId.m1141equalsimpl0(this.applicationUserId, bindTapCommandName.applicationUserId) && this.messageType == bindTapCommandName.messageType && ChannelId.m1063equalsimpl0(this.messageChannelId, bindTapCommandName.messageChannelId);
            }
            return false;
        }

        /* renamed from: getApplicationUserId-re6GcUE  reason: not valid java name */
        public final long m349getApplicationUserIdre6GcUE() {
            return this.applicationUserId;
        }

        /* renamed from: getMessageChannelId-o4g7jtM  reason: not valid java name */
        public final long m350getMessageChannelIdo4g7jtM() {
            return this.messageChannelId;
        }

        @NotNull
        /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
        public final String m351getMessageId3Eiw7ao() {
            return this.messageId;
        }

        @NotNull
        public final MessageType getMessageType() {
            return this.messageType;
        }

        /* renamed from: getUserId-re6GcUE  reason: not valid java name */
        public final long m352getUserIdre6GcUE() {
            return this.userId;
        }

        public int hashCode() {
            return (((((((UserId.m1142hashCodeimpl(this.userId) * 31) + MessageId.m1090hashCodeimpl(this.messageId)) * 31) + UserId.m1142hashCodeimpl(this.applicationUserId)) * 31) + this.messageType.hashCode()) * 31) + ChannelId.m1064hashCodeimpl(this.messageChannelId);
        }

        @NotNull
        public String toString() {
            String m1144toStringimpl = UserId.m1144toStringimpl(this.userId);
            String m1092toStringimpl = MessageId.m1092toStringimpl(this.messageId);
            String m1144toStringimpl2 = UserId.m1144toStringimpl(this.applicationUserId);
            MessageType messageType = this.messageType;
            String m1066toStringimpl = ChannelId.m1066toStringimpl(this.messageChannelId);
            return "BindTapCommandName(userId=" + m1144toStringimpl + ", messageId=" + m1092toStringimpl + ", applicationUserId=" + m1144toStringimpl2 + ", messageType=" + messageType + ", messageChannelId=" + m1066toStringimpl + ")";
        }

        public /* synthetic */ BindTapCommandName(long j10, String str, long j11, MessageType messageType, long j12, DefaultConstructorMarker defaultConstructorMarker) {
            this(j10, str, j11, messageType, j12);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        private /* synthetic */ BindTapCommandName(int i10, String str, Boolean bool, UserId userId, String str2, UserId userId2, MessageType messageType, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (125 != (i10 & 125)) {
                v1.b(i10, 125, LinkContextData$BindTapCommandName$$serializer.INSTANCE.getDescriptor());
            }
            this.userId = userId.m1146unboximpl();
            this.messageId = str2;
            this.applicationUserId = userId2.m1146unboximpl();
            this.messageType = messageType;
            this.messageChannelId = channelId.m1068unboximpl();
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        private BindTapCommandName(long j10, String messageId, long j11, MessageType messageType, long j12) {
            super("bindTapCommandName", (Boolean) null, 2, (DefaultConstructorMarker) null);
            Intrinsics.checkNotNullParameter(messageId, "messageId");
            Intrinsics.checkNotNullParameter(messageType, "messageType");
            this.userId = j10;
            this.messageId = messageId;
            this.applicationUserId = j11;
            this.messageType = messageType;
            this.messageChannelId = j12;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 *2\u00020\u0001:\u0002)*B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007BC\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b\u0006\u0010\u0010J\u0010\u0010\u0015\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0016\u0010\u0012J\u0010\u0010\u0017\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u0018\u0010\u0012J$\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001¢\u0006\u0004\b\u001a\u0010\u001bJ\u0013\u0010\u001c\u001a\u00020\r2\b\u0010\u001d\u001a\u0004\u0018\u00010\u001eHÖ\u0003J\t\u0010\u001f\u001a\u00020\tHÖ\u0001J\t\u0010 \u001a\u00020\u000bHÖ\u0001J%\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020\u00002\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020'H\u0001¢\u0006\u0002\b(R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012R\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0014\u0010\u0012¨\u0006+"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapUsername;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "userId", "Lcom/discord/primitives/UserId;", "messageChannelId", "Lcom/discord/primitives/ChannelId;", "<init>", "(JJLkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "action", "", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Lcom/discord/primitives/UserId;Lcom/discord/primitives/ChannelId;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getUserId-re6GcUE", "()J", "J", "getMessageChannelId-o4g7jtM", "component1", "component1-re6GcUE", "component2", "component2-o4g7jtM", "copy", "copy-mgJWFPo", "(JJ)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapUsername;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindTapUsername extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final long messageChannelId;
        private final long userId;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapUsername$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapUsername;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindTapUsername$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        public /* synthetic */ BindTapUsername(int i10, String str, Boolean bool, UserId userId, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, str, bool, userId, channelId, serializationConstructorMarker);
        }

        /* renamed from: copy-mgJWFPo$default  reason: not valid java name */
        public static /* synthetic */ BindTapUsername m353copymgJWFPo$default(BindTapUsername bindTapUsername, long j10, long j11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                j10 = bindTapUsername.userId;
            }
            if ((i10 & 2) != 0) {
                j11 = bindTapUsername.messageChannelId;
            }
            return bindTapUsername.m356copymgJWFPo(j10, j11);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindTapUsername bindTapUsername, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindTapUsername, compositeEncoder, serialDescriptor);
            compositeEncoder.D(serialDescriptor, 2, UserId$$serializer.INSTANCE, UserId.m1137boximpl(bindTapUsername.userId));
            compositeEncoder.D(serialDescriptor, 3, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(bindTapUsername.messageChannelId));
        }

        /* renamed from: component1-re6GcUE  reason: not valid java name */
        public final long m354component1re6GcUE() {
            return this.userId;
        }

        /* renamed from: component2-o4g7jtM  reason: not valid java name */
        public final long m355component2o4g7jtM() {
            return this.messageChannelId;
        }

        @NotNull
        /* renamed from: copy-mgJWFPo  reason: not valid java name */
        public final BindTapUsername m356copymgJWFPo(long j10, long j11) {
            return new BindTapUsername(j10, j11, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BindTapUsername) {
                BindTapUsername bindTapUsername = (BindTapUsername) obj;
                return UserId.m1141equalsimpl0(this.userId, bindTapUsername.userId) && ChannelId.m1063equalsimpl0(this.messageChannelId, bindTapUsername.messageChannelId);
            }
            return false;
        }

        /* renamed from: getMessageChannelId-o4g7jtM  reason: not valid java name */
        public final long m357getMessageChannelIdo4g7jtM() {
            return this.messageChannelId;
        }

        /* renamed from: getUserId-re6GcUE  reason: not valid java name */
        public final long m358getUserIdre6GcUE() {
            return this.userId;
        }

        public int hashCode() {
            return (UserId.m1142hashCodeimpl(this.userId) * 31) + ChannelId.m1064hashCodeimpl(this.messageChannelId);
        }

        @NotNull
        public String toString() {
            String m1144toStringimpl = UserId.m1144toStringimpl(this.userId);
            String m1066toStringimpl = ChannelId.m1066toStringimpl(this.messageChannelId);
            return "BindTapUsername(userId=" + m1144toStringimpl + ", messageChannelId=" + m1066toStringimpl + ")";
        }

        public /* synthetic */ BindTapUsername(long j10, long j11, DefaultConstructorMarker defaultConstructorMarker) {
            this(j10, j11);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        private /* synthetic */ BindTapUsername(int i10, String str, Boolean bool, UserId userId, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (13 != (i10 & 13)) {
                v1.b(i10, 13, LinkContextData$BindTapUsername$$serializer.INSTANCE.getDescriptor());
            }
            this.userId = userId.m1146unboximpl();
            this.messageChannelId = channelId.m1068unboximpl();
        }

        private BindTapUsername(long j10, long j11) {
            super("bindTapUsername", (Boolean) null, 2, (DefaultConstructorMarker) null);
            this.userId = j10;
            this.messageChannelId = j11;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u001e\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 @2\u00020\u0001:\u0002?@BW\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u000e\u0010\u000fBu\b\u0010\u0012\u0006\u0010\u0010\u001a\u00020\u0005\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015¢\u0006\u0004\b\u000e\u0010\u0016J\u0010\u0010&\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b'\u0010\u0018J\u0010\u0010(\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010\u001bJ\u0010\u0010)\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010\u001bJ\u0010\u0010*\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010\u001bJ\u000b\u0010+\u001a\u0004\u0018\u00010\tHÆ\u0003J\u0010\u0010,\u001a\u0004\u0018\u00010\u000bHÆ\u0003¢\u0006\u0002\u0010\"J\u0010\u0010-\u001a\u0004\u0018\u00010\rHÆ\u0003¢\u0006\u0002\b.Jb\u0010/\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\rHÆ\u0001¢\u0006\u0004\b0\u00101J\u0013\u00102\u001a\u00020\u000b2\b\u00103\u001a\u0004\u0018\u000104HÖ\u0003J\t\u00105\u001a\u00020\u0005HÖ\u0001J\t\u00106\u001a\u00020\u0012HÖ\u0001J%\u00107\u001a\u0002082\u0006\u00109\u001a\u00020\u00002\u0006\u0010:\u001a\u00020;2\u0006\u0010<\u001a\u00020=H\u0001¢\u0006\u0002\b>R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0019\u001a\u0004\b\u0017\u0010\u0018R\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010\u001c\u001a\u0004\b\u001a\u0010\u001bR\u0015\u0010\u0006\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010\u001c\u001a\u0004\b\u001d\u0010\u001bR\u0015\u0010\u0007\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010\u001c\u001a\u0004\b\u001e\u0010\u001bR\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010 R\u0015\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\n\n\u0002\u0010#\u001a\u0004\b!\u0010\"R\u0013\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\b\n\u0000\u001a\u0004\b$\u0010%¨\u0006A"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserMenu;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "userId", "Lcom/discord/primitives/UserId;", "colorString", "", "linkColor", "roleColor", "roleColors", "Lcom/discord/chat/bridge/rolecolors/RoleColors;", "shouldShowRoleDot", "", "messageChannelId", "Lcom/discord/primitives/ChannelId;", "<init>", "(JLjava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Lcom/discord/chat/bridge/rolecolors/RoleColors;Ljava/lang/Boolean;Lcom/discord/primitives/ChannelId;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "action", "", "medium", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Lcom/discord/primitives/UserId;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Lcom/discord/chat/bridge/rolecolors/RoleColors;Ljava/lang/Boolean;Lcom/discord/primitives/ChannelId;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getUserId-re6GcUE", "()J", "J", "getColorString", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getLinkColor", "getRoleColor", "getRoleColors", "()Lcom/discord/chat/bridge/rolecolors/RoleColors;", "getShouldShowRoleDot", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getMessageChannelId-qMVnFVQ", "()Lcom/discord/primitives/ChannelId;", "component1", "component1-re6GcUE", "component2", "component3", "component4", "component5", "component6", "component7", "component7-qMVnFVQ", "copy", "copy-wSCuitM", "(JLjava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Lcom/discord/chat/bridge/rolecolors/RoleColors;Ljava/lang/Boolean;Lcom/discord/primitives/ChannelId;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserMenu;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindUserMenu extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final Integer colorString;
        private final Integer linkColor;
        private final ChannelId messageChannelId;
        private final Integer roleColor;
        private final RoleColors roleColors;
        private final Boolean shouldShowRoleDot;
        private final long userId;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserMenu$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserMenu;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindUserMenu$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        public /* synthetic */ BindUserMenu(int i10, String str, Boolean bool, UserId userId, Integer num, Integer num2, Integer num3, RoleColors roleColors, Boolean bool2, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, str, bool, userId, num, num2, num3, roleColors, bool2, channelId, serializationConstructorMarker);
        }

        /* renamed from: copy-wSCuitM$default  reason: not valid java name */
        public static /* synthetic */ BindUserMenu m359copywSCuitM$default(BindUserMenu bindUserMenu, long j10, Integer num, Integer num2, Integer num3, RoleColors roleColors, Boolean bool, ChannelId channelId, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                j10 = bindUserMenu.userId;
            }
            long j11 = j10;
            if ((i10 & 2) != 0) {
                num = bindUserMenu.colorString;
            }
            Integer num4 = num;
            if ((i10 & 4) != 0) {
                num2 = bindUserMenu.linkColor;
            }
            Integer num5 = num2;
            if ((i10 & 8) != 0) {
                num3 = bindUserMenu.roleColor;
            }
            Integer num6 = num3;
            if ((i10 & 16) != 0) {
                roleColors = bindUserMenu.roleColors;
            }
            return bindUserMenu.m362copywSCuitM(j11, num4, num5, num6, roleColors, (i10 & 32) != 0 ? bindUserMenu.shouldShowRoleDot : bool, (i10 & 64) != 0 ? bindUserMenu.messageChannelId : channelId);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindUserMenu bindUserMenu, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindUserMenu, compositeEncoder, serialDescriptor);
            compositeEncoder.D(serialDescriptor, 2, UserId$$serializer.INSTANCE, UserId.m1137boximpl(bindUserMenu.userId));
            if (compositeEncoder.z(serialDescriptor, 3) || bindUserMenu.colorString != null) {
                compositeEncoder.s(serialDescriptor, 3, p0.f20994a, bindUserMenu.colorString);
            }
            if (compositeEncoder.z(serialDescriptor, 4) || bindUserMenu.linkColor != null) {
                compositeEncoder.s(serialDescriptor, 4, p0.f20994a, bindUserMenu.linkColor);
            }
            if (compositeEncoder.z(serialDescriptor, 5) || bindUserMenu.roleColor != null) {
                compositeEncoder.s(serialDescriptor, 5, p0.f20994a, bindUserMenu.roleColor);
            }
            if (compositeEncoder.z(serialDescriptor, 6) || bindUserMenu.roleColors != null) {
                compositeEncoder.s(serialDescriptor, 6, RoleColors$$serializer.INSTANCE, bindUserMenu.roleColors);
            }
            if (compositeEncoder.z(serialDescriptor, 7) || bindUserMenu.shouldShowRoleDot != null) {
                compositeEncoder.s(serialDescriptor, 7, dt.h.f20942a, bindUserMenu.shouldShowRoleDot);
            }
            if (compositeEncoder.z(serialDescriptor, 8) || bindUserMenu.messageChannelId != null) {
                compositeEncoder.s(serialDescriptor, 8, ChannelId$$serializer.INSTANCE, bindUserMenu.messageChannelId);
            }
        }

        /* renamed from: component1-re6GcUE  reason: not valid java name */
        public final long m360component1re6GcUE() {
            return this.userId;
        }

        public final Integer component2() {
            return this.colorString;
        }

        public final Integer component3() {
            return this.linkColor;
        }

        public final Integer component4() {
            return this.roleColor;
        }

        public final RoleColors component5() {
            return this.roleColors;
        }

        public final Boolean component6() {
            return this.shouldShowRoleDot;
        }

        /* renamed from: component7-qMVnFVQ  reason: not valid java name */
        public final ChannelId m361component7qMVnFVQ() {
            return this.messageChannelId;
        }

        @NotNull
        /* renamed from: copy-wSCuitM  reason: not valid java name */
        public final BindUserMenu m362copywSCuitM(long j10, Integer num, Integer num2, Integer num3, RoleColors roleColors, Boolean bool, ChannelId channelId) {
            return new BindUserMenu(j10, num, num2, num3, roleColors, bool, channelId, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BindUserMenu) {
                BindUserMenu bindUserMenu = (BindUserMenu) obj;
                return UserId.m1141equalsimpl0(this.userId, bindUserMenu.userId) && Intrinsics.areEqual(this.colorString, bindUserMenu.colorString) && Intrinsics.areEqual(this.linkColor, bindUserMenu.linkColor) && Intrinsics.areEqual(this.roleColor, bindUserMenu.roleColor) && Intrinsics.areEqual(this.roleColors, bindUserMenu.roleColors) && Intrinsics.areEqual(this.shouldShowRoleDot, bindUserMenu.shouldShowRoleDot) && Intrinsics.areEqual(this.messageChannelId, bindUserMenu.messageChannelId);
            }
            return false;
        }

        public final Integer getColorString() {
            return this.colorString;
        }

        public final Integer getLinkColor() {
            return this.linkColor;
        }

        /* renamed from: getMessageChannelId-qMVnFVQ  reason: not valid java name */
        public final ChannelId m363getMessageChannelIdqMVnFVQ() {
            return this.messageChannelId;
        }

        public final Integer getRoleColor() {
            return this.roleColor;
        }

        public final RoleColors getRoleColors() {
            return this.roleColors;
        }

        public final Boolean getShouldShowRoleDot() {
            return this.shouldShowRoleDot;
        }

        /* renamed from: getUserId-re6GcUE  reason: not valid java name */
        public final long m364getUserIdre6GcUE() {
            return this.userId;
        }

        public int hashCode() {
            int m1142hashCodeimpl = UserId.m1142hashCodeimpl(this.userId) * 31;
            Integer num = this.colorString;
            int hashCode = (m1142hashCodeimpl + (num == null ? 0 : num.hashCode())) * 31;
            Integer num2 = this.linkColor;
            int hashCode2 = (hashCode + (num2 == null ? 0 : num2.hashCode())) * 31;
            Integer num3 = this.roleColor;
            int hashCode3 = (hashCode2 + (num3 == null ? 0 : num3.hashCode())) * 31;
            RoleColors roleColors = this.roleColors;
            int hashCode4 = (hashCode3 + (roleColors == null ? 0 : roleColors.hashCode())) * 31;
            Boolean bool = this.shouldShowRoleDot;
            int hashCode5 = (hashCode4 + (bool == null ? 0 : bool.hashCode())) * 31;
            ChannelId channelId = this.messageChannelId;
            return hashCode5 + (channelId != null ? ChannelId.m1064hashCodeimpl(channelId.m1068unboximpl()) : 0);
        }

        @NotNull
        public String toString() {
            String m1144toStringimpl = UserId.m1144toStringimpl(this.userId);
            Integer num = this.colorString;
            Integer num2 = this.linkColor;
            Integer num3 = this.roleColor;
            RoleColors roleColors = this.roleColors;
            Boolean bool = this.shouldShowRoleDot;
            ChannelId channelId = this.messageChannelId;
            return "BindUserMenu(userId=" + m1144toStringimpl + ", colorString=" + num + ", linkColor=" + num2 + ", roleColor=" + num3 + ", roleColors=" + roleColors + ", shouldShowRoleDot=" + bool + ", messageChannelId=" + channelId + ")";
        }

        public /* synthetic */ BindUserMenu(long j10, Integer num, Integer num2, Integer num3, RoleColors roleColors, Boolean bool, ChannelId channelId, DefaultConstructorMarker defaultConstructorMarker) {
            this(j10, num, num2, num3, roleColors, bool, channelId);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        private /* synthetic */ BindUserMenu(int i10, String str, Boolean bool, UserId userId, Integer num, Integer num2, Integer num3, RoleColors roleColors, Boolean bool2, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (5 != (i10 & 5)) {
                v1.b(i10, 5, LinkContextData$BindUserMenu$$serializer.INSTANCE.getDescriptor());
            }
            this.userId = userId.m1146unboximpl();
            if ((i10 & 8) == 0) {
                this.colorString = null;
            } else {
                this.colorString = num;
            }
            if ((i10 & 16) == 0) {
                this.linkColor = null;
            } else {
                this.linkColor = num2;
            }
            if ((i10 & 32) == 0) {
                this.roleColor = null;
            } else {
                this.roleColor = num3;
            }
            if ((i10 & 64) == 0) {
                this.roleColors = null;
            } else {
                this.roleColors = roleColors;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                this.shouldShowRoleDot = null;
            } else {
                this.shouldShowRoleDot = bool2;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
                this.messageChannelId = null;
            } else {
                this.messageChannelId = channelId;
            }
        }

        public /* synthetic */ BindUserMenu(long j10, Integer num, Integer num2, Integer num3, RoleColors roleColors, Boolean bool, ChannelId channelId, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(j10, (i10 & 2) != 0 ? null : num, (i10 & 4) != 0 ? null : num2, (i10 & 8) != 0 ? null : num3, (i10 & 16) != 0 ? null : roleColors, (i10 & 32) != 0 ? null : bool, (i10 & 64) != 0 ? null : channelId, null);
        }

        private BindUserMenu(long j10, Integer num, Integer num2, Integer num3, RoleColors roleColors, Boolean bool, ChannelId channelId) {
            super("bindUserMenu", (Boolean) null, 2, (DefaultConstructorMarker) null);
            this.userId = j10;
            this.colorString = num;
            this.linkColor = num2;
            this.roleColor = num3;
            this.roleColors = roleColors;
            this.shouldShowRoleDot = bool;
            this.messageChannelId = channelId;
        }
    }

    @at.m
    @Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0087\b\u0018\u0000 &2\u00020\u0001:\u0003$%&B\u001b\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007BC\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\u0006\u0010\u000fJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0015\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u001f\u0010\u0016\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0013\u0010\u0017\u001a\u00020\f2\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019HÖ\u0003J\t\u0010\u001a\u001a\u00020\tHÖ\u0001J\t\u0010\u001b\u001a\u00020\u0005HÖ\u0001J%\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u00002\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"H\u0001¢\u0006\u0002\b#R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013¨\u0006'"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserSurvey;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "message", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserSurvey$SurveyMessage;", "notificationType", "", "<init>", "(Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserSurvey$SurveyMessage;Ljava/lang/String;)V", "seen0", "", "action", "medium", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserSurvey$SurveyMessage;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getMessage", "()Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserSurvey$SurveyMessage;", "getNotificationType", "()Ljava/lang/String;", "component1", "component2", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "SurveyMessage", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BindUserSurvey extends LinkContext {
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private final SurveyMessage message;
        private final String notificationType;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserSurvey$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserSurvey;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkContextData$BindUserSurvey$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        @at.m
        @Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0013\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 .2\u00020\u0001:\u0002-.B#\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tB9\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\b\u0010\u000eJ\u0010\u0010\u0018\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0019\u0010\u0010J\u0010\u0010\u001a\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u001b\u0010\u0015J\u000b\u0010\u001c\u001a\u0004\u0018\u00010\u0007HÆ\u0003J0\u0010\u001d\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÆ\u0001¢\u0006\u0004\b\u001e\u0010\u001fJ\u0013\u0010 \u001a\u00020!2\b\u0010\"\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010#\u001a\u00020\u000bHÖ\u0001J\t\u0010$\u001a\u00020\u0007HÖ\u0001J%\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020\u00002\u0006\u0010(\u001a\u00020)2\u0006\u0010*\u001a\u00020+H\u0001¢\u0006\u0002\b,R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0011\u001a\u0004\b\u000f\u0010\u0010R\u001e\u0010\u0004\u001a\u00020\u00058\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010\u0016\u0012\u0004\b\u0012\u0010\u0013\u001a\u0004\b\u0014\u0010\u0015R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0010¨\u0006/"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserSurvey$SurveyMessage;", "", StackTraceHelper.ID_KEY, "Lcom/discord/primitives/MessageId;", "channelId", "Lcom/discord/primitives/ChannelId;", "loggingName", "", "<init>", "(Ljava/lang/String;JLjava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lcom/discord/primitives/ChannelId;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getChannelId-o4g7jtM$annotations", "()V", "getChannelId-o4g7jtM", "()J", "J", "getLoggingName", "component1", "component1-3Eiw7ao", "component2", "component2-o4g7jtM", "component3", "copy", "copy-Eqy5D80", "(Ljava/lang/String;JLjava/lang/String;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserSurvey$SurveyMessage;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class SurveyMessage {
            @NotNull
            public static final Companion Companion = new Companion(null);
            private final long channelId;
            @NotNull

            /* renamed from: id  reason: collision with root package name */
            private final String f8263id;
            private final String loggingName;

            @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserSurvey$SurveyMessage$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserSurvey$SurveyMessage;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class Companion {
                private Companion() {
                }

                @NotNull
                public final KSerializer serializer() {
                    return LinkContextData$BindUserSurvey$SurveyMessage$$serializer.INSTANCE;
                }

                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }
            }

            public /* synthetic */ SurveyMessage(int i10, String str, ChannelId channelId, String str2, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
                this(i10, str, channelId, str2, serializationConstructorMarker);
            }

            /* renamed from: copy-Eqy5D80$default  reason: not valid java name */
            public static /* synthetic */ SurveyMessage m365copyEqy5D80$default(SurveyMessage surveyMessage, String str, long j10, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = surveyMessage.f8263id;
                }
                if ((i10 & 2) != 0) {
                    j10 = surveyMessage.channelId;
                }
                if ((i10 & 4) != 0) {
                    str2 = surveyMessage.loggingName;
                }
                return surveyMessage.m369copyEqy5D80(str, j10, str2);
            }

            /* renamed from: getChannelId-o4g7jtM$annotations  reason: not valid java name */
            public static /* synthetic */ void m366getChannelIdo4g7jtM$annotations() {
            }

            public static final /* synthetic */ void write$Self$chat_release(SurveyMessage surveyMessage, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
                compositeEncoder.D(serialDescriptor, 0, MessageId$$serializer.INSTANCE, MessageId.m1085boximpl(surveyMessage.f8263id));
                compositeEncoder.D(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(surveyMessage.channelId));
                if (compositeEncoder.z(serialDescriptor, 2) || surveyMessage.loggingName != null) {
                    compositeEncoder.s(serialDescriptor, 2, n2.f20978a, surveyMessage.loggingName);
                }
            }

            @NotNull
            /* renamed from: component1-3Eiw7ao  reason: not valid java name */
            public final String m367component13Eiw7ao() {
                return this.f8263id;
            }

            /* renamed from: component2-o4g7jtM  reason: not valid java name */
            public final long m368component2o4g7jtM() {
                return this.channelId;
            }

            public final String component3() {
                return this.loggingName;
            }

            @NotNull
            /* renamed from: copy-Eqy5D80  reason: not valid java name */
            public final SurveyMessage m369copyEqy5D80(@NotNull String id2, long j10, String str) {
                Intrinsics.checkNotNullParameter(id2, "id");
                return new SurveyMessage(id2, j10, str, null);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof SurveyMessage) {
                    SurveyMessage surveyMessage = (SurveyMessage) obj;
                    return MessageId.m1089equalsimpl0(this.f8263id, surveyMessage.f8263id) && ChannelId.m1063equalsimpl0(this.channelId, surveyMessage.channelId) && Intrinsics.areEqual(this.loggingName, surveyMessage.loggingName);
                }
                return false;
            }

            /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
            public final long m370getChannelIdo4g7jtM() {
                return this.channelId;
            }

            @NotNull
            /* renamed from: getId-3Eiw7ao  reason: not valid java name */
            public final String m371getId3Eiw7ao() {
                return this.f8263id;
            }

            public final String getLoggingName() {
                return this.loggingName;
            }

            public int hashCode() {
                int m1090hashCodeimpl = ((MessageId.m1090hashCodeimpl(this.f8263id) * 31) + ChannelId.m1064hashCodeimpl(this.channelId)) * 31;
                String str = this.loggingName;
                return m1090hashCodeimpl + (str == null ? 0 : str.hashCode());
            }

            @NotNull
            public String toString() {
                String m1092toStringimpl = MessageId.m1092toStringimpl(this.f8263id);
                String m1066toStringimpl = ChannelId.m1066toStringimpl(this.channelId);
                String str = this.loggingName;
                return "SurveyMessage(id=" + m1092toStringimpl + ", channelId=" + m1066toStringimpl + ", loggingName=" + str + ")";
            }

            public /* synthetic */ SurveyMessage(String str, long j10, String str2, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, j10, str2);
            }

            private /* synthetic */ SurveyMessage(int i10, String str, ChannelId channelId, String str2, SerializationConstructorMarker serializationConstructorMarker) {
                if (3 != (i10 & 3)) {
                    v1.b(i10, 3, LinkContextData$BindUserSurvey$SurveyMessage$$serializer.INSTANCE.getDescriptor());
                }
                this.f8263id = str;
                this.channelId = channelId.m1068unboximpl();
                if ((i10 & 4) == 0) {
                    this.loggingName = null;
                } else {
                    this.loggingName = str2;
                }
            }

            private SurveyMessage(String id2, long j10, String str) {
                Intrinsics.checkNotNullParameter(id2, "id");
                this.f8263id = id2;
                this.channelId = j10;
                this.loggingName = str;
            }

            public /* synthetic */ SurveyMessage(String str, long j10, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, j10, (i10 & 4) != 0 ? null : str2, null);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public /* synthetic */ BindUserSurvey(int i10, String str, Boolean bool, SurveyMessage surveyMessage, String str2, SerializationConstructorMarker serializationConstructorMarker) {
            super(i10, str, bool, serializationConstructorMarker);
            if (5 != (i10 & 5)) {
                v1.b(i10, 5, LinkContextData$BindUserSurvey$$serializer.INSTANCE.getDescriptor());
            }
            this.message = surveyMessage;
            if ((i10 & 8) == 0) {
                this.notificationType = null;
            } else {
                this.notificationType = str2;
            }
        }

        public static /* synthetic */ BindUserSurvey copy$default(BindUserSurvey bindUserSurvey, SurveyMessage surveyMessage, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                surveyMessage = bindUserSurvey.message;
            }
            if ((i10 & 2) != 0) {
                str = bindUserSurvey.notificationType;
            }
            return bindUserSurvey.copy(surveyMessage, str);
        }

        public static final /* synthetic */ void write$Self$chat_release(BindUserSurvey bindUserSurvey, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            LinkContext.write$Self(bindUserSurvey, compositeEncoder, serialDescriptor);
            compositeEncoder.D(serialDescriptor, 2, LinkContextData$BindUserSurvey$SurveyMessage$$serializer.INSTANCE, bindUserSurvey.message);
            if (compositeEncoder.z(serialDescriptor, 3) || bindUserSurvey.notificationType != null) {
                compositeEncoder.s(serialDescriptor, 3, n2.f20978a, bindUserSurvey.notificationType);
            }
        }

        @NotNull
        public final SurveyMessage component1() {
            return this.message;
        }

        public final String component2() {
            return this.notificationType;
        }

        @NotNull
        public final BindUserSurvey copy(@NotNull SurveyMessage message, String str) {
            Intrinsics.checkNotNullParameter(message, "message");
            return new BindUserSurvey(message, str);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BindUserSurvey) {
                BindUserSurvey bindUserSurvey = (BindUserSurvey) obj;
                return Intrinsics.areEqual(this.message, bindUserSurvey.message) && Intrinsics.areEqual(this.notificationType, bindUserSurvey.notificationType);
            }
            return false;
        }

        @NotNull
        public final SurveyMessage getMessage() {
            return this.message;
        }

        public final String getNotificationType() {
            return this.notificationType;
        }

        public int hashCode() {
            int hashCode = this.message.hashCode() * 31;
            String str = this.notificationType;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        @NotNull
        public String toString() {
            SurveyMessage surveyMessage = this.message;
            String str = this.notificationType;
            return "BindUserSurvey(message=" + surveyMessage + ", notificationType=" + str + ")";
        }

        public /* synthetic */ BindUserSurvey(SurveyMessage surveyMessage, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(surveyMessage, (i10 & 2) != 0 ? null : str);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public BindUserSurvey(@NotNull SurveyMessage message, String str) {
            super("bindUserSurvey", (Boolean) null, 2, (DefaultConstructorMarker) null);
            Intrinsics.checkNotNullParameter(message, "message");
            this.message = message;
            this.notificationType = str;
        }
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return LinkContextDataSerializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    @et.c(discriminator = "action")
    @at.m
    @Metadata(d1 = {"\u0000\u0080\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b7\u0018\u0000 \u00192\u00020\u0001:\u0001\u0019B\u001d\b\u0004\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007B/\b\u0016\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ \u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00002\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0018H\u0007R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010\u0011\u001a\u0004\b\u000f\u0010\u0010\u0082\u0001\u0011\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*¨\u0006+"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "Lcom/discord/chat/bridge/contentnode/LinkContextData;", "action", "", "medium", "", "<init>", "(Ljava/lang/String;Ljava/lang/Boolean;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/Boolean;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getAction", "()Ljava/lang/String;", "getMedium", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "Companion", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDismissMessage;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindDoNothing;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindInsertText;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJumpToMessage;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenGdmCustomizeActionSheet;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenInviteSheet;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenPins;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenRoleSubscriptionOverview;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenThreadChannel;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindOpenUrl;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapActivityText;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapCommandName;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindTapUsername;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserMenu;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserSurvey;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class LinkContext extends LinkContextData {
        @NotNull
        private final String action;
        private final Boolean medium;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private static final Lazy $cachedSerializer$delegate = lr.l.b(lr.o.f37120e, new Function0() { // from class: com.discord.chat.bridge.contentnode.o
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _init_$_anonymous_;
                _init_$_anonymous_ = LinkContextData.LinkContext._init_$_anonymous_();
                return _init_$_anonymous_;
            }
        });

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkContext;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            private final /* synthetic */ KSerializer get$cachedSerializer() {
                return (KSerializer) LinkContext.$cachedSerializer$delegate.getValue();
            }

            @NotNull
            public final KSerializer serializer() {
                return get$cachedSerializer();
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        public /* synthetic */ LinkContext(String str, Boolean bool, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, bool);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final /* synthetic */ KSerializer _init_$_anonymous_() {
            return new SealedClassSerializer("com.discord.chat.bridge.contentnode.LinkContextData.LinkContext", Reflection.getOrCreateKotlinClass(LinkContext.class), new KClass[]{Reflection.getOrCreateKotlinClass(BindDismissMessage.class), Reflection.getOrCreateKotlinClass(BindDoNothing.class), Reflection.getOrCreateKotlinClass(BindGuildMenu.class), Reflection.getOrCreateKotlinClass(BindInsertText.class), Reflection.getOrCreateKotlinClass(BindJoinStream.class), Reflection.getOrCreateKotlinClass(BindJumpToMessage.class), Reflection.getOrCreateKotlinClass(BindOpenGdmCustomizeActionSheet.class), Reflection.getOrCreateKotlinClass(BindOpenInviteSheet.class), Reflection.getOrCreateKotlinClass(BindOpenPins.class), Reflection.getOrCreateKotlinClass(BindOpenRoleSubscriptionOverview.class), Reflection.getOrCreateKotlinClass(BindOpenThreadChannel.class), Reflection.getOrCreateKotlinClass(BindOpenUrl.class), Reflection.getOrCreateKotlinClass(BindTapActivityText.class), Reflection.getOrCreateKotlinClass(BindTapCommandName.class), Reflection.getOrCreateKotlinClass(BindTapUsername.class), Reflection.getOrCreateKotlinClass(BindUserMenu.class), Reflection.getOrCreateKotlinClass(BindUserSurvey.class)}, new KSerializer[]{LinkContextData$BindDismissMessage$$serializer.INSTANCE, new o1("com.discord.chat.bridge.contentnode.LinkContextData.BindDoNothing", BindDoNothing.INSTANCE, new Annotation[]{new LinkContextData$LinkContext$Companion$annotationImpl$kotlinx_serialization_json_JsonClassDiscriminator$0("action")}), LinkContextData$BindGuildMenu$$serializer.INSTANCE, LinkContextData$BindInsertText$$serializer.INSTANCE, LinkContextData$BindJoinStream$$serializer.INSTANCE, LinkContextData$BindJumpToMessage$$serializer.INSTANCE, LinkContextData$BindOpenGdmCustomizeActionSheet$$serializer.INSTANCE, LinkContextData$BindOpenInviteSheet$$serializer.INSTANCE, LinkContextData$BindOpenPins$$serializer.INSTANCE, LinkContextData$BindOpenRoleSubscriptionOverview$$serializer.INSTANCE, LinkContextData$BindOpenThreadChannel$$serializer.INSTANCE, LinkContextData$BindOpenUrl$$serializer.INSTANCE, LinkContextData$BindTapActivityText$$serializer.INSTANCE, LinkContextData$BindTapCommandName$$serializer.INSTANCE, LinkContextData$BindTapUsername$$serializer.INSTANCE, LinkContextData$BindUserMenu$$serializer.INSTANCE, LinkContextData$BindUserSurvey$$serializer.INSTANCE}, new Annotation[]{new LinkContextData$LinkContext$Companion$annotationImpl$kotlinx_serialization_json_JsonClassDiscriminator$0("action")});
        }

        public static final /* synthetic */ void write$Self(LinkContext linkContext, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            compositeEncoder.y(serialDescriptor, 0, linkContext.action);
            if (compositeEncoder.z(serialDescriptor, 1) || linkContext.medium != null) {
                compositeEncoder.s(serialDescriptor, 1, dt.h.f20942a, linkContext.medium);
            }
        }

        @NotNull
        public final String getAction() {
            return this.action;
        }

        public final Boolean getMedium() {
            return this.medium;
        }

        public /* synthetic */ LinkContext(int i10, String str, Boolean bool, SerializationConstructorMarker serializationConstructorMarker) {
            super(null);
            this.action = str;
            if ((i10 & 2) == 0) {
                this.medium = null;
            } else {
                this.medium = bool;
            }
        }

        public /* synthetic */ LinkContext(String str, Boolean bool, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? null : bool, null);
        }

        private LinkContext(String str, Boolean bool) {
            super(null);
            this.action = str;
            this.medium = bool;
        }
    }

    @at.m(with = LinkUrlSerializer.class)
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \u00122\u00020\u0001:\u0002\u0011\u0012B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\t\u0010\b\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\t\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rHÖ\u0003J\t\u0010\u000e\u001a\u00020\u000fHÖ\u0001J\t\u0010\u0010\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0013"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkUrl;", "Lcom/discord/chat/bridge/contentnode/LinkContextData;", "url", "", "<init>", "(Ljava/lang/String;)V", "getUrl", "()Ljava/lang/String;", "component1", "copy", "equals", "", "other", "", "hashCode", "", "toString", "LinkUrlSerializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class LinkUrl extends LinkContextData {
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private final String url;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkUrl$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkUrl;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return LinkUrlSerializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\bÆ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0010\u0010\t\u001a\u00020\u00022\u0006\u0010\n\u001a\u00020\u000bH\u0016J\u0018\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u0002H\u0016R\u0014\u0010\u0005\u001a\u00020\u00068VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0007\u0010\b¨\u0006\u0011"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkUrl$LinkUrlSerializer;", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$LinkUrl;", "<init>", "()V", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "deserialize", "decoder", "Lkotlinx/serialization/encoding/Decoder;", "serialize", "", "encoder", "Lkotlinx/serialization/encoding/Encoder;", "value", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class LinkUrlSerializer implements KSerializer {
            @NotNull
            public static final LinkUrlSerializer INSTANCE = new LinkUrlSerializer();

            private LinkUrlSerializer() {
            }

            @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
            @NotNull
            public SerialDescriptor getDescriptor() {
                return ct.j.b("LinkUrl", e.i.f19842a);
            }

            @Override // kotlinx.serialization.DeserializationStrategy
            @NotNull
            public LinkUrl deserialize(@NotNull Decoder decoder) {
                Intrinsics.checkNotNullParameter(decoder, "decoder");
                try {
                    if (decoder instanceof et.f) {
                        return new LinkUrl(et.h.o(((et.f) decoder).g()).b());
                    }
                    throw new IllegalArgumentException("Failed requirement.");
                } catch (Exception unused) {
                    return new LinkUrl("");
                }
            }

            @Override // at.o
            public void serialize(@NotNull Encoder encoder, @NotNull LinkUrl value) {
                Intrinsics.checkNotNullParameter(encoder, "encoder");
                Intrinsics.checkNotNullParameter(value, "value");
                throw new UnsupportedOperationException();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public LinkUrl(@NotNull String url) {
            super(null);
            Intrinsics.checkNotNullParameter(url, "url");
            this.url = url;
        }

        public static /* synthetic */ LinkUrl copy$default(LinkUrl linkUrl, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = linkUrl.url;
            }
            return linkUrl.copy(str);
        }

        @NotNull
        public final String component1() {
            return this.url;
        }

        @NotNull
        public final LinkUrl copy(@NotNull String url) {
            Intrinsics.checkNotNullParameter(url, "url");
            return new LinkUrl(url);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof LinkUrl) && Intrinsics.areEqual(this.url, ((LinkUrl) obj).url);
        }

        @NotNull
        public final String getUrl() {
            return this.url;
        }

        public int hashCode() {
            return this.url.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.url;
            return "LinkUrl(url=" + str + ")";
        }
    }

    public /* synthetic */ LinkContextData(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private LinkContextData() {
    }
}
