package com.discord.chat.reactevents;

import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.contentnode.LinkContextData;
import com.discord.logging.Log;
import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.primitives.ChannelId;
import com.discord.primitives.GuildId;
import com.discord.primitives.MessageId;
import com.discord.primitives.UserId;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B5\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\b\u0002\u0010\b\u001a\u00020\u0005¢\u0006\u0004\b\t\u0010\nB\u001b\b\u0016\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u000b\u001a\u00020\f¢\u0006\u0004\b\t\u0010\rJ\f\u0010\u0015\u001a\u00020\u0016*\u00020\u0007H\u0002J\b\u0010\u0017\u001a\u00020\u0018H\u0016J\u0012\u0010\u0019\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0004\b\u001a\u0010\u000fJ\u000b\u0010\u001b\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010\u001c\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0005HÆ\u0003J>\u0010\u001e\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\b\u001a\u00020\u0005HÆ\u0001¢\u0006\u0004\b\u001f\u0010 J\u0013\u0010!\u001a\u00020\"2\b\u0010#\u001a\u0004\u0018\u00010$HÖ\u0003J\t\u0010%\u001a\u00020&HÖ\u0001J\t\u0010'\u001a\u00020\u0005HÖ\u0001R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u0010\u001a\u0004\b\u000e\u0010\u000fR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000fR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\b\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u000f¨\u0006("}, d2 = {"Lcom/discord/chat/reactevents/TapLinkData;", "Lcom/discord/reactevents/ReactEvent;", "messageId", "Lcom/discord/primitives/MessageId;", "title", "", "target", "Lcom/discord/chat/bridge/contentnode/LinkContextData;", "content", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/contentnode/LinkContextData;Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "node", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "(Ljava/lang/String;Lcom/discord/chat/bridge/contentnode/LinkContentNode;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-N_6c4I0", "()Ljava/lang/String;", "Ljava/lang/String;", "getTitle", "getTarget", "()Lcom/discord/chat/bridge/contentnode/LinkContextData;", "getContent", "toMap", "Lcom/facebook/react/bridge/WritableNativeMap;", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "component1-N_6c4I0", "component2", "component3", "component4", "copy", "copy-Efb-KrI", "(Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/contentnode/LinkContextData;Ljava/lang/String;)Lcom/discord/chat/reactevents/TapLinkData;", "equals", "", "other", "", "hashCode", "", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nTapLinkData.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TapLinkData.kt\ncom/discord/chat/reactevents/TapLinkData\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,136:1\n1#2:137\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapLinkData implements ReactEvent {
    @NotNull
    private final String content;
    private final String messageId;
    private final LinkContextData target;
    private final String title;

    public /* synthetic */ TapLinkData(String str, LinkContentNode linkContentNode, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, linkContentNode);
    }

    /* renamed from: copy-Efb-KrI$default  reason: not valid java name */
    public static /* synthetic */ TapLinkData m816copyEfbKrI$default(TapLinkData tapLinkData, String str, String str2, LinkContextData linkContextData, String str3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapLinkData.messageId;
        }
        if ((i10 & 2) != 0) {
            str2 = tapLinkData.title;
        }
        if ((i10 & 4) != 0) {
            linkContextData = tapLinkData.target;
        }
        if ((i10 & 8) != 0) {
            str3 = tapLinkData.content;
        }
        return tapLinkData.m818copyEfbKrI(str, str2, linkContextData, str3);
    }

    private final WritableNativeMap toMap(LinkContextData linkContextData) {
        WritableNativeMap nativeMapOf = NativeMapExtensionsKt.nativeMapOf(new Pair[0]);
        LinkContextData linkContextData2 = this.target;
        if (linkContextData2 instanceof LinkContextData.LinkUrl) {
            NativeMapExtensionsKt.put(nativeMapOf, "url", ((LinkContextData.LinkUrl) linkContextData2).getUrl());
            return nativeMapOf;
        } else if (linkContextData2 instanceof LinkContextData.BindOpenThreadChannel) {
            NativeMapExtensionsKt.put(nativeMapOf, "action", ((LinkContextData.BindOpenThreadChannel) linkContextData2).getAction());
            NativeMapExtensionsKt.put(nativeMapOf, "threadId", ChannelId.m1066toStringimpl(((LinkContextData.BindOpenThreadChannel) this.target).m336getThreadIdo4g7jtM()));
            return nativeMapOf;
        } else {
            if (linkContextData2 instanceof LinkContextData.BindUserMenu) {
                NativeMapExtensionsKt.put(nativeMapOf, "action", ((LinkContextData.BindUserMenu) linkContextData2).getAction());
                NativeMapExtensionsKt.put(nativeMapOf, "userId", UserId.m1144toStringimpl(((LinkContextData.BindUserMenu) this.target).m364getUserIdre6GcUE()));
                ChannelId m363getMessageChannelIdqMVnFVQ = ((LinkContextData.BindUserMenu) this.target).m363getMessageChannelIdqMVnFVQ();
                if (m363getMessageChannelIdqMVnFVQ != null) {
                    NativeMapExtensionsKt.put(nativeMapOf, "messageChannelId", ChannelId.m1066toStringimpl(m363getMessageChannelIdqMVnFVQ.m1068unboximpl()));
                    return nativeMapOf;
                }
            } else if (linkContextData2 instanceof LinkContextData.BindTapCommandName) {
                NativeMapExtensionsKt.put(nativeMapOf, "action", ((LinkContextData.BindTapCommandName) linkContextData2).getAction());
                NativeMapExtensionsKt.put(nativeMapOf, "userId", UserId.m1144toStringimpl(((LinkContextData.BindTapCommandName) this.target).m352getUserIdre6GcUE()));
                NativeMapExtensionsKt.put(nativeMapOf, "messageType", Integer.valueOf(((LinkContextData.BindTapCommandName) this.target).getMessageType().getSerialNumber()));
                NativeMapExtensionsKt.put(nativeMapOf, "messageId", MessageId.m1092toStringimpl(((LinkContextData.BindTapCommandName) this.target).m351getMessageId3Eiw7ao()));
                NativeMapExtensionsKt.put(nativeMapOf, "applicationUserId", UserId.m1144toStringimpl(((LinkContextData.BindTapCommandName) this.target).m349getApplicationUserIdre6GcUE()));
                NativeMapExtensionsKt.put(nativeMapOf, "messageChannelId", ChannelId.m1066toStringimpl(((LinkContextData.BindTapCommandName) this.target).m350getMessageChannelIdo4g7jtM()));
                return nativeMapOf;
            } else if (linkContextData2 instanceof LinkContextData.BindOpenPins) {
                NativeMapExtensionsKt.put(nativeMapOf, "action", ((LinkContextData.BindOpenPins) linkContextData2).getAction());
                NativeMapExtensionsKt.put(nativeMapOf, "messageChannelId", ChannelId.m1066toStringimpl(((LinkContextData.BindOpenPins) this.target).m332getMessageChannelIdo4g7jtM()));
                return nativeMapOf;
            } else if (linkContextData2 instanceof LinkContextData.BindGuildMenu) {
                NativeMapExtensionsKt.put(nativeMapOf, "action", ((LinkContextData.BindGuildMenu) linkContextData2).getAction());
                LinkContextData.BindGuildMenu.MessageReference messageReference = ((LinkContextData.BindGuildMenu) this.target).getMessageReference();
                if (messageReference != null) {
                    WritableNativeMap nativeMapOf2 = NativeMapExtensionsKt.nativeMapOf(new Pair[0]);
                    NativeMapExtensionsKt.put(nativeMapOf2, "channel_id", ChannelId.m1066toStringimpl(messageReference.m315getChannelIdo4g7jtM()));
                    GuildId m316getGuildIdqOKuAAo = messageReference.m316getGuildIdqOKuAAo();
                    if (m316getGuildIdqOKuAAo != null) {
                        m316getGuildIdqOKuAAo.m1081unboximpl();
                        NativeMapExtensionsKt.put(nativeMapOf2, "guild_id", ((LinkContextData.BindGuildMenu) this.target).toString());
                    }
                    Unit unit = Unit.f31988a;
                    NativeMapExtensionsKt.put(nativeMapOf, "messageReference", nativeMapOf2);
                    return nativeMapOf;
                }
            } else if (linkContextData2 instanceof LinkContextData.BindDismissMessage) {
                NativeMapExtensionsKt.put(nativeMapOf, "action", ((LinkContextData.BindDismissMessage) linkContextData2).getAction());
                NativeMapExtensionsKt.put(nativeMapOf, "message", NativeMapExtensionsKt.nativeMapOf(v.a(StackTraceHelper.ID_KEY, ((LinkContextData.BindDismissMessage) this.target).getMessage().m308getId3Eiw7ao()), v.a("channel_id", ChannelId.m1066toStringimpl(((LinkContextData.BindDismissMessage) this.target).getMessage().m307getChannelIdo4g7jtM())), v.a("loggingName", ((LinkContextData.BindDismissMessage) this.target).getMessage().getLoggingName()), v.a("author", NativeMapExtensionsKt.nativeMapOf(v.a(NotificationRenderer.USERNAME, ((LinkContextData.BindDismissMessage) this.target).getMessage().getAuthor().getUsername())))));
                return nativeMapOf;
            } else if (linkContextData2 instanceof LinkContextData.BindOpenRoleSubscriptionOverview) {
                NativeMapExtensionsKt.put(nativeMapOf, "action", ((LinkContextData.BindOpenRoleSubscriptionOverview) linkContextData2).getAction());
                NativeMapExtensionsKt.put(nativeMapOf, "guildId", ((LinkContextData.BindOpenRoleSubscriptionOverview) this.target).getGuildId());
                NativeMapExtensionsKt.put(nativeMapOf, "channelId", ((LinkContextData.BindOpenRoleSubscriptionOverview) this.target).getChannelId());
                NativeMapExtensionsKt.put(nativeMapOf, "messageId", ((LinkContextData.BindOpenRoleSubscriptionOverview) this.target).getMessageId());
                NativeMapExtensionsKt.put(nativeMapOf, "roleSubscriptionListingId", ((LinkContextData.BindOpenRoleSubscriptionOverview) this.target).getRoleSubscriptionListingId());
                return nativeMapOf;
            } else if (linkContextData2 instanceof LinkContextData.BindUserSurvey) {
                NativeMapExtensionsKt.put(nativeMapOf, "action", ((LinkContextData.BindUserSurvey) linkContextData2).getAction());
                NativeMapExtensionsKt.put(nativeMapOf, "message", NativeMapExtensionsKt.nativeMapOf(v.a(StackTraceHelper.ID_KEY, ((LinkContextData.BindUserSurvey) this.target).getMessage().m371getId3Eiw7ao()), v.a("channel_id", ChannelId.m1066toStringimpl(((LinkContextData.BindUserSurvey) this.target).getMessage().m370getChannelIdo4g7jtM())), v.a("loggingName", ((LinkContextData.BindUserSurvey) this.target).getMessage().getLoggingName())));
                NativeMapExtensionsKt.put(nativeMapOf, "notificationType", ((LinkContextData.BindUserSurvey) this.target).getNotificationType());
                return nativeMapOf;
            } else if (linkContextData2 instanceof LinkContextData.BindJumpToMessage) {
                NativeMapExtensionsKt.put(nativeMapOf, "action", ((LinkContextData.BindJumpToMessage) linkContextData2).getAction());
                NativeMapExtensionsKt.put(nativeMapOf, "targetChannelId", ((LinkContextData.BindJumpToMessage) this.target).getTargetChannelId());
                NativeMapExtensionsKt.put(nativeMapOf, "targetMessageId", ((LinkContextData.BindJumpToMessage) this.target).getTargetMessageId());
                return nativeMapOf;
            } else if (linkContextData2 instanceof LinkContextData.BindOpenUrl) {
                NativeMapExtensionsKt.put(nativeMapOf, "url", ((LinkContextData.BindOpenUrl) linkContextData2).getUrl());
                NativeMapExtensionsKt.put(nativeMapOf, "linkColor", ((LinkContextData.BindOpenUrl) this.target).getLinkColor());
                return nativeMapOf;
            } else if (linkContextData2 instanceof LinkContextData.BindOpenGdmCustomizeActionSheet) {
                NativeMapExtensionsKt.put(nativeMapOf, "action", ((LinkContextData.BindOpenGdmCustomizeActionSheet) linkContextData2).getAction());
                NativeMapExtensionsKt.put(nativeMapOf, "messageChannelId", ((LinkContextData.BindOpenGdmCustomizeActionSheet) this.target).getMessageChannelId());
                NativeMapExtensionsKt.put(nativeMapOf, "linkColor", ((LinkContextData.BindOpenGdmCustomizeActionSheet) this.target).getLinkColor());
                return nativeMapOf;
            } else if (linkContextData2 instanceof LinkContextData.BindInsertText) {
                NativeMapExtensionsKt.put(nativeMapOf, "action", ((LinkContextData.BindInsertText) linkContextData2).getAction());
                NativeMapExtensionsKt.put(nativeMapOf, "text", ((LinkContextData.BindInsertText) this.target).getText());
                Boolean addSpace = ((LinkContextData.BindInsertText) this.target).getAddSpace();
                if (addSpace != null) {
                    NativeMapExtensionsKt.put(nativeMapOf, "addSpace", addSpace);
                }
            } else {
                Log log = Log.INSTANCE;
                Log.e$default(log, "TapLink", "Missing target type data: " + linkContextData2, (Throwable) null, 4, (Object) null);
                return nativeMapOf;
            }
            return nativeMapOf;
        }
    }

    /* renamed from: component1-N_6c4I0  reason: not valid java name */
    public final String m817component1N_6c4I0() {
        return this.messageId;
    }

    public final String component2() {
        return this.title;
    }

    public final LinkContextData component3() {
        return this.target;
    }

    @NotNull
    public final String component4() {
        return this.content;
    }

    @NotNull
    /* renamed from: copy-Efb-KrI  reason: not valid java name */
    public final TapLinkData m818copyEfbKrI(String str, String str2, LinkContextData linkContextData, @NotNull String content) {
        Intrinsics.checkNotNullParameter(content, "content");
        return new TapLinkData(str, str2, linkContextData, content, null);
    }

    public boolean equals(Object obj) {
        boolean m1089equalsimpl0;
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapLinkData) {
            TapLinkData tapLinkData = (TapLinkData) obj;
            String str = this.messageId;
            String str2 = tapLinkData.messageId;
            if (str == null) {
                if (str2 == null) {
                    m1089equalsimpl0 = true;
                }
                m1089equalsimpl0 = false;
            } else {
                if (str2 != null) {
                    m1089equalsimpl0 = MessageId.m1089equalsimpl0(str, str2);
                }
                m1089equalsimpl0 = false;
            }
            return m1089equalsimpl0 && Intrinsics.areEqual(this.title, tapLinkData.title) && Intrinsics.areEqual(this.target, tapLinkData.target) && Intrinsics.areEqual(this.content, tapLinkData.content);
        }
        return false;
    }

    @NotNull
    public final String getContent() {
        return this.content;
    }

    /* renamed from: getMessageId-N_6c4I0  reason: not valid java name */
    public final String m819getMessageIdN_6c4I0() {
        return this.messageId;
    }

    public final LinkContextData getTarget() {
        return this.target;
    }

    public final String getTitle() {
        return this.title;
    }

    public int hashCode() {
        String str = this.messageId;
        int m1090hashCodeimpl = (str == null ? 0 : MessageId.m1090hashCodeimpl(str)) * 31;
        String str2 = this.title;
        int hashCode = (m1090hashCodeimpl + (str2 == null ? 0 : str2.hashCode())) * 31;
        LinkContextData linkContextData = this.target;
        return ((hashCode + (linkContextData != null ? linkContextData.hashCode() : 0)) * 31) + this.content.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        String m1092toStringimpl;
        WritableNativeMap nativeMapOf;
        LinkContextData linkContextData = this.target;
        if (linkContextData == null || (nativeMapOf = toMap(linkContextData)) == null) {
            String str = this.messageId;
            if (str == null) {
                m1092toStringimpl = "null";
            } else {
                m1092toStringimpl = MessageId.m1092toStringimpl(str);
            }
            nativeMapOf = NativeMapExtensionsKt.nativeMapOf(v.a("messageId", m1092toStringimpl), v.a("url", this.target), v.a("node", NativeMapExtensionsKt.nativeMapOf(v.a("title", this.title), v.a("target", this.target), v.a("content", this.content))));
        }
        return NativeMapExtensionsKt.nativeMapOf(v.a("data", nativeMapOf));
    }

    @NotNull
    public String toString() {
        String str = this.messageId;
        String m1092toStringimpl = str == null ? "null" : MessageId.m1092toStringimpl(str);
        String str2 = this.title;
        LinkContextData linkContextData = this.target;
        String str3 = this.content;
        return "TapLinkData(messageId=" + m1092toStringimpl + ", title=" + str2 + ", target=" + linkContextData + ", content=" + str3 + ")";
    }

    public /* synthetic */ TapLinkData(String str, String str2, LinkContextData linkContextData, String str3, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, linkContextData, str3);
    }

    private TapLinkData(String str, String str2, LinkContextData linkContextData, String content) {
        Intrinsics.checkNotNullParameter(content, "content");
        this.messageId = str;
        this.title = str2;
        this.target = linkContextData;
        this.content = content;
    }

    public /* synthetic */ TapLinkData(String str, String str2, LinkContextData linkContextData, String str3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : linkContextData, (i10 & 8) != 0 ? "" : str3, null);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private TapLinkData(java.lang.String r9, com.discord.chat.bridge.contentnode.LinkContentNode r10) {
        /*
            r8 = this;
            java.lang.String r0 = "node"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r10, r0)
            com.discord.chat.bridge.contentnode.LinkContextData r4 = r10.getTarget()
            java.lang.String r10 = r10.getTextContent()
            if (r10 != 0) goto L11
            java.lang.String r10 = ""
        L11:
            r5 = r10
            r6 = 2
            r7 = 0
            r3 = 0
            r1 = r8
            r2 = r9
            r1.<init>(r2, r3, r4, r5, r6, r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.reactevents.TapLinkData.<init>(java.lang.String, com.discord.chat.bridge.contentnode.LinkContentNode):void");
    }
}
