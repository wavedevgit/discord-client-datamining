package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.botuikit.Component;
import com.discord.primitives.MessageId;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0017\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B5\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t\u0012\u0006\u0010\u000b\u001a\u00020\f¢\u0006\u0004\b\r\u0010\u000eJ\u0010\u0010\u001a\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u001b\u0010\u0010J\t\u0010\u001c\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0007HÆ\u0003J\u000f\u0010\u001e\u001a\b\u0012\u0004\u0012\u00020\n0\tHÆ\u0003J\t\u0010\u001f\u001a\u00020\fHÆ\u0003JH\u0010 \u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\u000e\b\u0002\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t2\b\b\u0002\u0010\u000b\u001a\u00020\fHÆ\u0001¢\u0006\u0004\b!\u0010\"J\u0013\u0010#\u001a\u00020$2\b\u0010%\u001a\u0004\u0018\u00010&HÖ\u0003J\t\u0010'\u001a\u00020\fHÖ\u0001J\t\u0010(\u001a\u00020)HÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\u0011\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0017\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019¨\u0006*"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/MessageComponentsAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "margins", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "message", "Lcom/discord/chat/bridge/Message;", "messageComponents", "", "Lcom/discord/chat/bridge/botuikit/Component;", "constrainedWidth", "", "<init>", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Lcom/discord/chat/bridge/Message;Ljava/util/List;ILkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getMargins", "()Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "getMessage", "()Lcom/discord/chat/bridge/Message;", "getMessageComponents", "()Ljava/util/List;", "getConstrainedWidth", "()I", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "component5", "copy", "copy-pPZZVto", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Lcom/discord/chat/bridge/Message;Ljava/util/List;I)Lcom/discord/chat/presentation/message/messagepart/MessageComponentsAccessory;", "equals", "", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageComponentsAccessory extends MessageAccessory {
    private final int constrainedWidth;
    @NotNull
    private final MessageMargins margins;
    @NotNull
    private final Message message;
    @NotNull
    private final List<Component> messageComponents;
    @NotNull
    private final String messageId;

    public /* synthetic */ MessageComponentsAccessory(String str, MessageMargins messageMargins, Message message, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, messageMargins, message, list, i10);
    }

    /* renamed from: copy-pPZZVto$default  reason: not valid java name */
    public static /* synthetic */ MessageComponentsAccessory m620copypPZZVto$default(MessageComponentsAccessory messageComponentsAccessory, String str, MessageMargins messageMargins, Message message, List list, int i10, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = messageComponentsAccessory.messageId;
        }
        if ((i11 & 2) != 0) {
            messageMargins = messageComponentsAccessory.margins;
        }
        if ((i11 & 4) != 0) {
            message = messageComponentsAccessory.message;
        }
        List<Component> list2 = list;
        if ((i11 & 8) != 0) {
            list2 = messageComponentsAccessory.messageComponents;
        }
        if ((i11 & 16) != 0) {
            i10 = messageComponentsAccessory.constrainedWidth;
        }
        int i12 = i10;
        Message message2 = message;
        return messageComponentsAccessory.m622copypPZZVto(str, messageMargins, message2, list2, i12);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m621component13Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final MessageMargins component2() {
        return this.margins;
    }

    @NotNull
    public final Message component3() {
        return this.message;
    }

    @NotNull
    public final List<Component> component4() {
        return this.messageComponents;
    }

    public final int component5() {
        return this.constrainedWidth;
    }

    @NotNull
    /* renamed from: copy-pPZZVto  reason: not valid java name */
    public final MessageComponentsAccessory m622copypPZZVto(@NotNull String messageId, @NotNull MessageMargins margins, @NotNull Message message, @NotNull List<? extends Component> messageComponents, int i10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(messageComponents, "messageComponents");
        return new MessageComponentsAccessory(messageId, margins, message, messageComponents, i10, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MessageComponentsAccessory) {
            MessageComponentsAccessory messageComponentsAccessory = (MessageComponentsAccessory) obj;
            return MessageId.m1087equalsimpl0(this.messageId, messageComponentsAccessory.messageId) && Intrinsics.areEqual(this.margins, messageComponentsAccessory.margins) && Intrinsics.areEqual(this.message, messageComponentsAccessory.message) && Intrinsics.areEqual(this.messageComponents, messageComponentsAccessory.messageComponents) && this.constrainedWidth == messageComponentsAccessory.constrainedWidth;
        }
        return false;
    }

    public final int getConstrainedWidth() {
        return this.constrainedWidth;
    }

    @NotNull
    public final MessageMargins getMargins() {
        return this.margins;
    }

    @NotNull
    public final Message getMessage() {
        return this.message;
    }

    @NotNull
    public final List<Component> getMessageComponents() {
        return this.messageComponents;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo536getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public int hashCode() {
        return (((((((MessageId.m1088hashCodeimpl(this.messageId) * 31) + this.margins.hashCode()) * 31) + this.message.hashCode()) * 31) + this.messageComponents.hashCode()) * 31) + Integer.hashCode(this.constrainedWidth);
    }

    @NotNull
    public String toString() {
        String m1090toStringimpl = MessageId.m1090toStringimpl(this.messageId);
        MessageMargins messageMargins = this.margins;
        Message message = this.message;
        List<Component> list = this.messageComponents;
        int i10 = this.constrainedWidth;
        return "MessageComponentsAccessory(messageId=" + m1090toStringimpl + ", margins=" + messageMargins + ", message=" + message + ", messageComponents=" + list + ", constrainedWidth=" + i10 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    private MessageComponentsAccessory(String messageId, MessageMargins margins, Message message, List<? extends Component> messageComponents, int i10) {
        super(messageId, "bot component", false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(messageComponents, "messageComponents");
        this.messageId = messageId;
        this.margins = margins;
        this.message = message;
        this.messageComponents = messageComponents;
        this.constrainedWidth = i10;
    }
}
