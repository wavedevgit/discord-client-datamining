package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.automod.AutoModerationContext;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\u0010\u0010\u0011\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0012\u0010\u000bJ\t\u0010\u0013\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0007HÆ\u0003J.\u0010\u0015\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001¢\u0006\u0004\b\u0016\u0010\u0017J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u001bHÖ\u0003J\t\u0010\u001c\u001a\u00020\u001dHÖ\u0001J\t\u0010\u001e\u001a\u00020\u001fHÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\f\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006 "}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/AutoModerationNotificationEmbedAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "message", "Lcom/discord/chat/bridge/Message;", "moderationContext", "Lcom/discord/chat/bridge/automod/AutoModerationContext;", "<init>", "(Ljava/lang/String;Lcom/discord/chat/bridge/Message;Lcom/discord/chat/bridge/automod/AutoModerationContext;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getMessage", "()Lcom/discord/chat/bridge/Message;", "getModerationContext", "()Lcom/discord/chat/bridge/automod/AutoModerationContext;", "component1", "component1-3Eiw7ao", "component2", "component3", "copy", "copy-u7_MRrM", "(Ljava/lang/String;Lcom/discord/chat/bridge/Message;Lcom/discord/chat/bridge/automod/AutoModerationContext;)Lcom/discord/chat/presentation/message/messagepart/AutoModerationNotificationEmbedAccessory;", "equals", "", "other", "", "hashCode", "", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AutoModerationNotificationEmbedAccessory extends MessageAccessory {
    @NotNull
    private final Message message;
    @NotNull
    private final String messageId;
    @NotNull
    private final AutoModerationContext moderationContext;

    public /* synthetic */ AutoModerationNotificationEmbedAccessory(String str, Message message, AutoModerationContext autoModerationContext, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, message, autoModerationContext);
    }

    /* renamed from: copy-u7_MRrM$default  reason: not valid java name */
    public static /* synthetic */ AutoModerationNotificationEmbedAccessory m552copyu7_MRrM$default(AutoModerationNotificationEmbedAccessory autoModerationNotificationEmbedAccessory, String str, Message message, AutoModerationContext autoModerationContext, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = autoModerationNotificationEmbedAccessory.messageId;
        }
        if ((i10 & 2) != 0) {
            message = autoModerationNotificationEmbedAccessory.message;
        }
        if ((i10 & 4) != 0) {
            autoModerationContext = autoModerationNotificationEmbedAccessory.moderationContext;
        }
        return autoModerationNotificationEmbedAccessory.m554copyu7_MRrM(str, message, autoModerationContext);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m553component13Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final Message component2() {
        return this.message;
    }

    @NotNull
    public final AutoModerationContext component3() {
        return this.moderationContext;
    }

    @NotNull
    /* renamed from: copy-u7_MRrM  reason: not valid java name */
    public final AutoModerationNotificationEmbedAccessory m554copyu7_MRrM(@NotNull String messageId, @NotNull Message message, @NotNull AutoModerationContext moderationContext) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(moderationContext, "moderationContext");
        return new AutoModerationNotificationEmbedAccessory(messageId, message, moderationContext, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof AutoModerationNotificationEmbedAccessory) {
            AutoModerationNotificationEmbedAccessory autoModerationNotificationEmbedAccessory = (AutoModerationNotificationEmbedAccessory) obj;
            return MessageId.m1089equalsimpl0(this.messageId, autoModerationNotificationEmbedAccessory.messageId) && Intrinsics.areEqual(this.message, autoModerationNotificationEmbedAccessory.message) && Intrinsics.areEqual(this.moderationContext, autoModerationNotificationEmbedAccessory.moderationContext);
        }
        return false;
    }

    @NotNull
    public final Message getMessage() {
        return this.message;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo538getMessageId3Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final AutoModerationContext getModerationContext() {
        return this.moderationContext;
    }

    public int hashCode() {
        return (((MessageId.m1090hashCodeimpl(this.messageId) * 31) + this.message.hashCode()) * 31) + this.moderationContext.hashCode();
    }

    @NotNull
    public String toString() {
        String m1092toStringimpl = MessageId.m1092toStringimpl(this.messageId);
        Message message = this.message;
        AutoModerationContext autoModerationContext = this.moderationContext;
        return "AutoModerationNotificationEmbedAccessory(messageId=" + m1092toStringimpl + ", message=" + message + ", moderationContext=" + autoModerationContext + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private AutoModerationNotificationEmbedAccessory(String messageId, Message message, AutoModerationContext moderationContext) {
        super(messageId, "auto moderation notification message", false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(moderationContext, "moderationContext");
        this.messageId = messageId;
        this.message = message;
        this.moderationContext = moderationContext;
    }
}
