package com.discord.chat.listmanager;

import com.discord.chat.bridge.ChangeType;
import com.discord.chat.bridge.row.BlockedGroupContent;
import com.discord.chat.bridge.row.BlockedGroupRow;
import com.discord.chat.bridge.row.DeleteRow;
import com.discord.chat.bridge.row.LoadingActionType;
import com.discord.chat.bridge.row.LoadingRow;
import com.discord.chat.bridge.row.MessageRow;
import com.discord.chat.bridge.row.MessageRowKt;
import com.discord.chat.bridge.row.Row;
import com.discord.chat.bridge.row.SeparatorRow;
import com.discord.chat.bridge.row.SeparatorRowKt;
import com.discord.chat.bridge.scroll.ChatScrollData;
import com.discord.chat.bridge.scroll.ChatScrollType;
import com.discord.chat.bridge.spoiler.SpoilerManager;
import com.discord.chat.listmanager.ChatListAction;
import com.discord.chat.listmanager.ListOperation;
import com.discord.chat.presentation.list.item.BlockedGroupChatListItem;
import com.discord.chat.presentation.list.item.ChatListItem;
import com.discord.chat.presentation.list.item.DeserializationErrorChatListItem;
import com.discord.chat.presentation.list.item.LoadingChatListItem;
import com.discord.chat.presentation.root.MessageContext;
import hs.m0;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import js.a;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableSharedFlow;
import kotlinx.coroutines.i;
import ks.c0;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\u00020\u0001:\u0001)B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\u000e\u001a\u00020\u000fJ.\u0010\u0010\u001a\u00020\u00112\f\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u000b0\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u00152\u0006\u0010\u0016\u001a\u00020\u000f2\u0006\u0010\u0017\u001a\u00020\rJ\u0016\u0010\u0018\u001a\u00020\u00192\f\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u000b0\u0013H\u0002J\u0016\u0010\u001a\u001a\u00020\u00192\f\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u000b0\u0013H\u0002J\u000e\u0010\u001b\u001a\u00020\u00112\u0006\u0010\u0016\u001a\u00020\u000fJ\u001e\u0010\u001c\u001a\u00020\u00112\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u001e2\u0006\u0010\u0016\u001a\u00020\u000fJ\f\u0010 \u001a\u00020!*\u00020\u000bH\u0002J\u001a\u0010\"\u001a\u00020\u0011*\b\u0012\u0004\u0012\u00020\u000b0\n2\u0006\u0010#\u001a\u00020\u000bH\u0002J\u0010\u0010%\u001a\u00020\u00112\u0006\u0010&\u001a\u00020\bH\u0002J\f\u0010'\u001a\b\u0012\u0004\u0012\u00020\b0(R\u0014\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\b0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\t\u001a\n\u0012\u0004\u0012\u00020\u000b\u0018\u00010\nX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010$\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006*"}, d2 = {"Lcom/discord/chat/listmanager/ChatListManager;", "", "coroutineScope", "Lkotlinx/coroutines/CoroutineScope;", "<init>", "(Lkotlinx/coroutines/CoroutineScope;)V", "updatesFlow", "Lkotlinx/coroutines/flow/MutableSharedFlow;", "Lcom/discord/chat/listmanager/ChatListUpdate;", "rows", "", "Lcom/discord/chat/bridge/row/Row;", "isDisabled", "", "getRowCount", "", "updateRows", "", "updates", "", "scrollData", "Lcom/discord/chat/bridge/scroll/ChatScrollData;", "changesetUpdateId", "forceReload", "createNewRows", "Lcom/discord/chat/listmanager/ChatListManager$RowsModificationResult;", "modifyExistingRows", "clearRows", "handleError", "errorJson", "", "causeMessage", "toChatListItem", "Lcom/discord/chat/presentation/list/item/ChatListItem;", "insert", "row", "publishScope", "publishUpdate", "update", "observeUpdates", "Lkotlinx/coroutines/flow/Flow;", "RowsModificationResult", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nChatListManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChatListManager.kt\ncom/discord/chat/listmanager/ChatListManager\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,246:1\n1563#2:247\n1634#2,3:248\n1761#2,3:251\n774#2:254\n865#2,2:255\n1869#2,2:257\n774#2:259\n865#2,2:260\n1869#2,2:262\n1563#2:264\n1634#2,3:265\n*S KotlinDebug\n*F\n+ 1 ChatListManager.kt\ncom/discord/chat/listmanager/ChatListManager\n*L\n65#1:247\n65#1:248,3\n82#1:251,3\n103#1:254\n103#1:255,2\n104#1:257,2\n112#1:259\n112#1:260,2\n114#1:262,2\n211#1:264\n211#1:265,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatListManager {
    private boolean isDisabled;
    @NotNull
    private final CoroutineScope publishScope;
    private List<Row> rows;
    @NotNull
    private final MutableSharedFlow updatesFlow;

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0082\b\u0018\u00002\u00020\u0001B-\u0012\f\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u000e\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0003¢\u0006\u0004\b\t\u0010\nJ\u000f\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0006HÆ\u0003J\u0011\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0003HÆ\u0003J5\u0010\u0013\u001a\u00020\u00002\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\u0010\b\u0002\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u0014\u001a\u00020\u00062\b\u0010\u0015\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001J\t\u0010\u0018\u001a\u00020\u0019HÖ\u0001R\u0017\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0019\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\f¨\u0006\u001a"}, d2 = {"Lcom/discord/chat/listmanager/ChatListManager$RowsModificationResult;", "", "rows", "", "Lcom/discord/chat/bridge/row/Row;", "didInsertAtBottom", "", "listOperations", "Lcom/discord/chat/listmanager/ListOperation;", "<init>", "(Ljava/util/List;ZLjava/util/List;)V", "getRows", "()Ljava/util/List;", "getDidInsertAtBottom", "()Z", "getListOperations", "component1", "component2", "component3", "copy", "equals", "other", "hashCode", "", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class RowsModificationResult {
        private final boolean didInsertAtBottom;
        private final List<ListOperation> listOperations;
        @NotNull
        private final List<Row> rows;

        /* JADX WARN: Multi-variable type inference failed */
        public RowsModificationResult(@NotNull List<? extends Row> rows, boolean z10, List<? extends ListOperation> list) {
            Intrinsics.checkNotNullParameter(rows, "rows");
            this.rows = rows;
            this.didInsertAtBottom = z10;
            this.listOperations = list;
        }

        /* JADX WARN: Multi-variable type inference failed */
        public static /* synthetic */ RowsModificationResult copy$default(RowsModificationResult rowsModificationResult, List list, boolean z10, List list2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = rowsModificationResult.rows;
            }
            if ((i10 & 2) != 0) {
                z10 = rowsModificationResult.didInsertAtBottom;
            }
            if ((i10 & 4) != 0) {
                list2 = rowsModificationResult.listOperations;
            }
            return rowsModificationResult.copy(list, z10, list2);
        }

        @NotNull
        public final List<Row> component1() {
            return this.rows;
        }

        public final boolean component2() {
            return this.didInsertAtBottom;
        }

        public final List<ListOperation> component3() {
            return this.listOperations;
        }

        @NotNull
        public final RowsModificationResult copy(@NotNull List<? extends Row> rows, boolean z10, List<? extends ListOperation> list) {
            Intrinsics.checkNotNullParameter(rows, "rows");
            return new RowsModificationResult(rows, z10, list);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof RowsModificationResult) {
                RowsModificationResult rowsModificationResult = (RowsModificationResult) obj;
                return Intrinsics.areEqual(this.rows, rowsModificationResult.rows) && this.didInsertAtBottom == rowsModificationResult.didInsertAtBottom && Intrinsics.areEqual(this.listOperations, rowsModificationResult.listOperations);
            }
            return false;
        }

        public final boolean getDidInsertAtBottom() {
            return this.didInsertAtBottom;
        }

        public final List<ListOperation> getListOperations() {
            return this.listOperations;
        }

        @NotNull
        public final List<Row> getRows() {
            return this.rows;
        }

        public int hashCode() {
            int hashCode = ((this.rows.hashCode() * 31) + Boolean.hashCode(this.didInsertAtBottom)) * 31;
            List<ListOperation> list = this.listOperations;
            return hashCode + (list == null ? 0 : list.hashCode());
        }

        @NotNull
        public String toString() {
            List<Row> list = this.rows;
            boolean z10 = this.didInsertAtBottom;
            List<ListOperation> list2 = this.listOperations;
            return "RowsModificationResult(rows=" + list + ", didInsertAtBottom=" + z10 + ", listOperations=" + list2 + ")";
        }
    }

    public ChatListManager(@NotNull CoroutineScope coroutineScope) {
        Intrinsics.checkNotNullParameter(coroutineScope, "coroutineScope");
        this.updatesFlow = c0.a(1, 3, a.f32204d);
        this.publishScope = i.j(coroutineScope, m0.a());
    }

    private final RowsModificationResult createNewRows(List<? extends Row> list) {
        List<? extends Row> list2 = list;
        boolean z10 = false;
        if (!(list2 instanceof Collection) || !list2.isEmpty()) {
            Iterator<T> it = list2.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                } else if (((Row) it.next()).getChangeType() == ChangeType.DELETE) {
                    z10 = true;
                    break;
                }
            }
        }
        if (!z10) {
            this.rows = CollectionsKt.j1(list);
            return new RowsModificationResult(list, true, null);
        }
        throw new IllegalArgumentException("Deletes are not expected or allowed during syncs.");
    }

    private final void insert(List<Row> list, Row row) {
        if (!(row instanceof DeleteRow)) {
            list.add(row.getIndex(), row);
            return;
        }
        throw new IllegalStateException("Unexpected delete during insert.");
    }

    private final RowsModificationResult modifyExistingRows(List<? extends Row> list) {
        boolean z10;
        boolean z11;
        Row row;
        boolean z12;
        List<Row> list2 = this.rows;
        Intrinsics.checkNotNull(list2);
        ListOperationsBuilder listOperationsBuilder = new ListOperationsBuilder();
        List<? extends Row> list3 = list;
        ArrayList<Row> arrayList = new ArrayList();
        for (Object obj : list3) {
            if (((Row) obj).getChangeType() == ChangeType.INSERT) {
                arrayList.add(obj);
            }
        }
        loop1: while (true) {
            z10 = false;
            for (Row row2 : arrayList) {
                insert(list2, row2);
                listOperationsBuilder.add(new ListOperation.Insert(row2.getIndex()));
                if (z10 || row2.getIndex() == 0) {
                    z10 = true;
                }
            }
        }
        ArrayList arrayList2 = new ArrayList();
        for (Object obj2 : list3) {
            Row row3 = (Row) obj2;
            if (row3.getChangeType() == ChangeType.DELETE || row3.getChangeType() == ChangeType.UPDATE) {
                arrayList2.add(obj2);
            }
        }
        for (Row row4 : CollectionsKt.S(arrayList2)) {
            if (row4 instanceof DeleteRow) {
                DeleteRow deleteRow = (DeleteRow) row4;
                list2.remove(deleteRow.getIndex());
                listOperationsBuilder.add(new ListOperation.Remove(deleteRow.getIndex()));
            } else {
                if (row4 instanceof LoadingRow) {
                    LoadingRow loadingRow = (LoadingRow) row4;
                    if (loadingRow.getButton().getAction().getType() == LoadingActionType.LOAD_MORE_AFTER && loadingRow.getIndex() == 0) {
                        z11 = true;
                        row = (Row) CollectionsKt.o0(list2);
                        if (!(row instanceof LoadingRow) && ((LoadingRow) row).isLoading()) {
                            z12 = true;
                        } else {
                            z12 = false;
                        }
                        if (!z11 && z12) {
                            list2.add(1, row4);
                            list2.remove(0);
                            listOperationsBuilder.add(new ListOperation.Insert(1));
                            listOperationsBuilder.add(new ListOperation.Remove(0));
                        } else {
                            list2.set(row4.getIndex(), row4);
                            listOperationsBuilder.add(new ListOperation.Change(row4.getIndex()));
                        }
                    }
                }
                z11 = false;
                row = (Row) CollectionsKt.o0(list2);
                if (!(row instanceof LoadingRow)) {
                }
                z12 = false;
                if (!z11) {
                }
                list2.set(row4.getIndex(), row4);
                listOperationsBuilder.add(new ListOperation.Change(row4.getIndex()));
            }
        }
        return new RowsModificationResult(list2, z10, listOperationsBuilder.build());
    }

    private final void publishUpdate(ChatListUpdate chatListUpdate) {
        hs.i.d(this.publishScope, null, null, new ChatListManager$publishUpdate$1(this, chatListUpdate, null), 3, null);
    }

    private final ChatListItem toChatListItem(Row row) {
        if (row instanceof MessageRow) {
            return MessageRowKt.toChatListMessageItem((MessageRow) row);
        }
        if (row instanceof LoadingRow) {
            LoadingRow loadingRow = (LoadingRow) row;
            return new LoadingChatListItem(loadingRow.getButton(), loadingRow.isLoading());
        } else if (row instanceof SeparatorRow) {
            return SeparatorRowKt.toSeparatorChatListItem((SeparatorRow) row);
        } else {
            if (row instanceof BlockedGroupRow) {
                BlockedGroupRow blockedGroupRow = (BlockedGroupRow) row;
                String text = blockedGroupRow.getText();
                String context = blockedGroupRow.getButton().getAction().getContext();
                int color = blockedGroupRow.getColor();
                int backgroundColor = blockedGroupRow.getBackgroundColor();
                int borderColor = blockedGroupRow.getBorderColor();
                boolean revealed = blockedGroupRow.getRevealed();
                List<BlockedGroupContent> content = blockedGroupRow.getContent();
                if (content == null) {
                    content = CollectionsKt.l();
                }
                List<BlockedGroupContent> list = content;
                ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
                for (BlockedGroupContent blockedGroupContent : list) {
                    arrayList.add(MessageRowKt.toChatListMessageItem$default(blockedGroupContent.getMessage(), new MessageContext(false, false, null, null, false, null, true, false, false, false, null, null, false, 8127, null), false, false, null, null, 30, null));
                }
                return new BlockedGroupChatListItem(text, context, color, backgroundColor, borderColor, revealed, CollectionsKt.S(arrayList));
            }
            throw new IllegalStateException("Unknown row type.");
        }
    }

    public final void clearRows(int i10) {
        List<Row> list = this.rows;
        if (list != null && !list.isEmpty()) {
            SpoilerManager.INSTANCE.reset();
            publishUpdate(new ChatListUpdate(CollectionsKt.l(), ChatListAction.Clear.INSTANCE, null, i10, null, 16, null));
        }
        this.rows = null;
    }

    public final int getRowCount() {
        List<Row> list = this.rows;
        if (list != null) {
            return list.size();
        }
        return 0;
    }

    public final void handleError(@NotNull String errorJson, @NotNull String causeMessage, int i10) {
        Intrinsics.checkNotNullParameter(errorJson, "errorJson");
        Intrinsics.checkNotNullParameter(causeMessage, "causeMessage");
        publishUpdate(new ChatListUpdate(CollectionsKt.r(new DeserializationErrorChatListItem("error-id", errorJson, causeMessage)), ChatListAction.Noop.INSTANCE, null, i10, null, 16, null));
        this.isDisabled = true;
    }

    @NotNull
    public final Flow observeUpdates() {
        return this.updatesFlow;
    }

    public final void updateRows(@NotNull List<? extends Row> updates, ChatScrollData chatScrollData, int i10, boolean z10) {
        RowsModificationResult createNewRows;
        ChatListAction chatListAction;
        Intrinsics.checkNotNullParameter(updates, "updates");
        if (this.isDisabled) {
            return;
        }
        if (this.rows != null) {
            createNewRows = modifyExistingRows(updates);
        } else {
            createNewRows = createNewRows(updates);
        }
        List<Row> component1 = createNewRows.component1();
        boolean component2 = createNewRows.component2();
        List<ListOperation> component3 = createNewRows.component3();
        if (chatScrollData != null && chatScrollData.getType() == ChatScrollType.SCROLL) {
            chatListAction = new ChatListAction.ScrollTo(chatScrollData.getIndex(), chatScrollData.getAnimate(), chatScrollData.getHighlight());
        } else {
            chatListAction = null;
        }
        List<Row> list = component1;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (Row row : list) {
            arrayList.add(toChatListItem(row));
        }
        if (chatListAction == null) {
            if (component2) {
                chatListAction = ChatListAction.StickToBottomIfAtBottom.INSTANCE;
            } else {
                chatListAction = ChatListAction.Noop.INSTANCE;
            }
        }
        publishUpdate(new ChatListUpdate(arrayList, chatListAction, component3, i10, Boolean.valueOf(z10)));
    }
}
