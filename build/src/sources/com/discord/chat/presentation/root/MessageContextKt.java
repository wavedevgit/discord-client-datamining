package com.discord.chat.presentation.root;

import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.SwipeActionsType;
import com.discord.chat.bridge.reaction.ReactionsTheme;
import com.discord.chat.bridge.row.MessageRow;
import com.discord.chat.bridge.truncation.Truncation;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\f\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\u001a\n\u0010\u0000\u001a\u00020\u0001*\u00020\u0002¨\u0006\u0003"}, d2 = {"getMessageContext", "Lcom/discord/chat/presentation/root/MessageContext;", "Lcom/discord/chat/bridge/row/MessageRow;", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageContextKt {
    @NotNull
    public static final MessageContext getMessageContext(@NotNull MessageRow messageRow) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        Intrinsics.checkNotNullParameter(messageRow, "<this>");
        Boolean canAddNewReactions = messageRow.getCanAddNewReactions();
        Boolean bool = Boolean.TRUE;
        boolean areEqual = Intrinsics.areEqual(canAddNewReactions, bool);
        String addNewReactionAccessibilityLabel = messageRow.getAddNewReactionAccessibilityLabel();
        if (addNewReactionAccessibilityLabel == null) {
            addNewReactionAccessibilityLabel = "";
        }
        String str = addNewReactionAccessibilityLabel;
        ReactionsTheme reactionsTheme = messageRow.getReactionsTheme();
        boolean z15 = false;
        if ((messageRow.getMessage() instanceof Message) && Intrinsics.areEqual(((Message) messageRow.getMessage()).getUsingGradientTheme(), bool)) {
            z10 = false;
            z15 = true;
            z11 = true;
        } else {
            z10 = false;
            z11 = true;
        }
        Truncation truncation = messageRow.getTruncation();
        if ((messageRow.getMessage() instanceof Message) && Intrinsics.areEqual(((Message) messageRow.getMessage()).getUseAttachmentGridLayout(), bool)) {
            z12 = z11;
        } else {
            z12 = z11;
            z11 = z10;
        }
        if ((messageRow.getMessage() instanceof Message) && Intrinsics.areEqual(((Message) messageRow.getMessage()).getUseAttachmentUploadPreview(), bool)) {
            z13 = z12;
        } else {
            z13 = z12;
            z12 = z10;
        }
        if (messageRow.getSwipeActions() != SwipeActionsType.REPLY && messageRow.getSwipeActions() != SwipeActionsType.REPLY_EDIT) {
            z14 = z13;
            z13 = z10;
        } else {
            z14 = z13;
        }
        if (messageRow.getSwipeActions() != SwipeActionsType.REPLY_EDIT) {
            z14 = z10;
        }
        MessageContextType contextType = messageRow.getContextType();
        if (contextType == null) {
            contextType = MessageContextType.DEFAULT;
        }
        return new MessageContext(false, areEqual, str, reactionsTheme, z15, truncation, z11, z12, z13, z14, null, contextType, Intrinsics.areEqual(messageRow.getShowReplyButton(), bool), IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, null);
    }
}
