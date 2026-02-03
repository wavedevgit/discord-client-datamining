package com.discord.chat.presentation.list;

import com.discord.chat.listmanager.ChatListAction;
import com.discord.chat.listmanager.ListOperation;
import kotlin.Metadata;
@Metadata(d1 = {"\u0000\u0010\n\u0000\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\u001a\f\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u0002\u001a\f\u0010\u0000\u001a\u00020\u0001*\u00020\u0003H\u0002¨\u0006\u0004"}, d2 = {"label", "", "Lcom/discord/chat/listmanager/ChatListAction;", "Lcom/discord/chat/listmanager/ListOperation;", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatListAdapterUpdateLogKt {
    /* JADX INFO: Access modifiers changed from: private */
    public static final String label(ChatListAction chatListAction) {
        if (chatListAction instanceof ChatListAction.Clear) {
            return "Clear";
        }
        if (chatListAction instanceof ChatListAction.Noop) {
            return "Noop";
        }
        if (chatListAction instanceof ChatListAction.ScrollTo) {
            return "ScrollTo";
        }
        if (chatListAction instanceof ChatListAction.StickToBottomIfAtBottom) {
            return "StickToBottomIfAtBottom";
        }
        throw new jr.p();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String label(ListOperation listOperation) {
        if (listOperation instanceof ListOperation.Insert) {
            int index = ((ListOperation.Insert) listOperation).getIndex();
            return "INS(" + index + ")";
        } else if (listOperation instanceof ListOperation.InsertRange) {
            ListOperation.InsertRange insertRange = (ListOperation.InsertRange) listOperation;
            int first = insertRange.getFirst();
            int last = insertRange.getLast();
            return "IRNG(" + first + "-" + last + ")";
        } else if (listOperation instanceof ListOperation.Remove) {
            int index2 = ((ListOperation.Remove) listOperation).getIndex();
            return "REM(" + index2 + ")";
        } else if (listOperation instanceof ListOperation.RemoveRange) {
            ListOperation.RemoveRange removeRange = (ListOperation.RemoveRange) listOperation;
            int first2 = removeRange.getFirst();
            int last2 = removeRange.getLast();
            return "RRNG(" + first2 + "-" + last2 + ")";
        } else if (listOperation instanceof ListOperation.Change) {
            int index3 = ((ListOperation.Change) listOperation).getIndex();
            return "CHA(" + index3 + ")";
        } else if (listOperation instanceof ListOperation.ChangeRange) {
            ListOperation.ChangeRange changeRange = (ListOperation.ChangeRange) listOperation;
            int first3 = changeRange.getFirst();
            int last3 = changeRange.getLast();
            return "CRNG(" + first3 + "-" + last3 + ")";
        } else {
            throw new jr.p();
        }
    }
}
