package com.discord.chat.presentation.list.item;

import com.discord.chat.bridge.BackgroundHighlight;
import com.discord.chat.bridge.Message;
import com.discord.chat.presentation.root.MessageContext;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0019\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001BE\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\b\u0002\u0010\f\u001a\u00020\u0007¢\u0006\u0004\b\r\u0010\u000eJ\t\u0010\u001b\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001c\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0007HÆ\u0003J\u000b\u0010\u001e\u001a\u0004\u0018\u00010\tHÆ\u0003J\u0010\u0010\u001f\u001a\u0004\u0018\u00010\u000bHÆ\u0003¢\u0006\u0002\u0010\u0018J\t\u0010 \u001a\u00020\u0007HÆ\u0003JN\u0010!\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b2\b\b\u0002\u0010\f\u001a\u00020\u0007HÆ\u0001¢\u0006\u0002\u0010\"J\u0013\u0010#\u001a\u00020\u00072\b\u0010$\u001a\u0004\u0018\u00010%HÖ\u0003J\t\u0010&\u001a\u00020\u000bHÖ\u0001J\t\u0010'\u001a\u00020(HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0015\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\n\n\u0002\u0010\u0019\u001a\u0004\b\u0017\u0010\u0018R\u0011\u0010\f\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0014¨\u0006)"}, d2 = {"Lcom/discord/chat/presentation/list/item/MessageItem;", "Lcom/discord/chat/presentation/list/item/ChatListItem;", "message", "Lcom/discord/chat/bridge/Message;", "messageContext", "Lcom/discord/chat/presentation/root/MessageContext;", "allowChildGestures", "", "backgroundHighlight", "Lcom/discord/chat/bridge/BackgroundHighlight;", "reactTag", "", "renderContentOnly", "<init>", "(Lcom/discord/chat/bridge/Message;Lcom/discord/chat/presentation/root/MessageContext;ZLcom/discord/chat/bridge/BackgroundHighlight;Ljava/lang/Integer;Z)V", "getMessage", "()Lcom/discord/chat/bridge/Message;", "getMessageContext", "()Lcom/discord/chat/presentation/root/MessageContext;", "getAllowChildGestures", "()Z", "getBackgroundHighlight", "()Lcom/discord/chat/bridge/BackgroundHighlight;", "getReactTag", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getRenderContentOnly", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "(Lcom/discord/chat/bridge/Message;Lcom/discord/chat/presentation/root/MessageContext;ZLcom/discord/chat/bridge/BackgroundHighlight;Ljava/lang/Integer;Z)Lcom/discord/chat/presentation/list/item/MessageItem;", "equals", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageItem extends ChatListItem {
    private final boolean allowChildGestures;
    private final BackgroundHighlight backgroundHighlight;
    @NotNull
    private final Message message;
    @NotNull
    private final MessageContext messageContext;
    private final Integer reactTag;
    private final boolean renderContentOnly;

    public /* synthetic */ MessageItem(Message message, MessageContext messageContext, boolean z10, BackgroundHighlight backgroundHighlight, Integer num, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(message, (i10 & 2) != 0 ? new MessageContext(false, false, null, null, false, null, false, false, false, false, null, null, false, 8191, null) : messageContext, (i10 & 4) != 0 ? true : z10, (i10 & 8) != 0 ? null : backgroundHighlight, (i10 & 16) == 0 ? num : null, (i10 & 32) != 0 ? false : z11);
    }

    public static /* synthetic */ MessageItem copy$default(MessageItem messageItem, Message message, MessageContext messageContext, boolean z10, BackgroundHighlight backgroundHighlight, Integer num, boolean z11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            message = messageItem.message;
        }
        if ((i10 & 2) != 0) {
            messageContext = messageItem.messageContext;
        }
        if ((i10 & 4) != 0) {
            z10 = messageItem.allowChildGestures;
        }
        if ((i10 & 8) != 0) {
            backgroundHighlight = messageItem.backgroundHighlight;
        }
        if ((i10 & 16) != 0) {
            num = messageItem.reactTag;
        }
        if ((i10 & 32) != 0) {
            z11 = messageItem.renderContentOnly;
        }
        Integer num2 = num;
        boolean z12 = z11;
        return messageItem.copy(message, messageContext, z10, backgroundHighlight, num2, z12);
    }

    @NotNull
    public final Message component1() {
        return this.message;
    }

    @NotNull
    public final MessageContext component2() {
        return this.messageContext;
    }

    public final boolean component3() {
        return this.allowChildGestures;
    }

    public final BackgroundHighlight component4() {
        return this.backgroundHighlight;
    }

    public final Integer component5() {
        return this.reactTag;
    }

    public final boolean component6() {
        return this.renderContentOnly;
    }

    @NotNull
    public final MessageItem copy(@NotNull Message message, @NotNull MessageContext messageContext, boolean z10, BackgroundHighlight backgroundHighlight, Integer num, boolean z11) {
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(messageContext, "messageContext");
        return new MessageItem(message, messageContext, z10, backgroundHighlight, num, z11);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MessageItem) {
            MessageItem messageItem = (MessageItem) obj;
            return Intrinsics.areEqual(this.message, messageItem.message) && Intrinsics.areEqual(this.messageContext, messageItem.messageContext) && this.allowChildGestures == messageItem.allowChildGestures && Intrinsics.areEqual(this.backgroundHighlight, messageItem.backgroundHighlight) && Intrinsics.areEqual(this.reactTag, messageItem.reactTag) && this.renderContentOnly == messageItem.renderContentOnly;
        }
        return false;
    }

    public final boolean getAllowChildGestures() {
        return this.allowChildGestures;
    }

    public final BackgroundHighlight getBackgroundHighlight() {
        return this.backgroundHighlight;
    }

    @NotNull
    public final Message getMessage() {
        return this.message;
    }

    @NotNull
    public final MessageContext getMessageContext() {
        return this.messageContext;
    }

    public final Integer getReactTag() {
        return this.reactTag;
    }

    public final boolean getRenderContentOnly() {
        return this.renderContentOnly;
    }

    public int hashCode() {
        int hashCode = ((((this.message.hashCode() * 31) + this.messageContext.hashCode()) * 31) + Boolean.hashCode(this.allowChildGestures)) * 31;
        BackgroundHighlight backgroundHighlight = this.backgroundHighlight;
        int hashCode2 = (hashCode + (backgroundHighlight == null ? 0 : backgroundHighlight.hashCode())) * 31;
        Integer num = this.reactTag;
        return ((hashCode2 + (num != null ? num.hashCode() : 0)) * 31) + Boolean.hashCode(this.renderContentOnly);
    }

    @NotNull
    public String toString() {
        Message message = this.message;
        MessageContext messageContext = this.messageContext;
        boolean z10 = this.allowChildGestures;
        BackgroundHighlight backgroundHighlight = this.backgroundHighlight;
        Integer num = this.reactTag;
        boolean z11 = this.renderContentOnly;
        return "MessageItem(message=" + message + ", messageContext=" + messageContext + ", allowChildGestures=" + z10 + ", backgroundHighlight=" + backgroundHighlight + ", reactTag=" + num + ", renderContentOnly=" + z11 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MessageItem(@NotNull Message message, @NotNull MessageContext messageContext, boolean z10, BackgroundHighlight backgroundHighlight, Integer num, boolean z11) {
        super(MessageId.m1093toStringimpl(message.m239getId3Eiw7ao()), null);
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(messageContext, "messageContext");
        this.message = message;
        this.messageContext = messageContext;
        this.allowChildGestures = z10;
        this.backgroundHighlight = backgroundHighlight;
        this.reactTag = num;
        this.renderContentOnly = z11;
    }
}
