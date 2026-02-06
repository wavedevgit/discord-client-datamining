package com.discord.chat.presentation.list;

import com.discord.chat.presentation.list.ChannelChatListAdapter;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b2\u0018\u00002\u00020\u0001:\u0004\u0004\u0005\u0006\u0007B\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003\u0082\u0001\u0004\b\t\n\u000b¨\u0006\f"}, d2 = {"Lcom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem;", "", "<init>", "()V", "ChatList", "PortalView", "PortalViewRemovalFromChatListItemUpdate", "NoOpDataSetChanged", "Lcom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem$ChatList;", "Lcom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem$NoOpDataSetChanged;", "Lcom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem$PortalView;", "Lcom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem$PortalViewRemovalFromChatListItemUpdate;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class ChatListAdapterUpdateLogItem {

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\b\u001a\u00020\tH\u0016R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\n"}, d2 = {"Lcom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem$ChatList;", "Lcom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem;", "chatListItemUpdate", "Lcom/discord/chat/presentation/list/ChatListItemUpdate;", "<init>", "(Lcom/discord/chat/presentation/list/ChatListItemUpdate;)V", "getChatListItemUpdate", "()Lcom/discord/chat/presentation/list/ChatListItemUpdate;", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nChatListAdapterUpdateLog.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChatListAdapterUpdateLog.kt\ncom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem$ChatList\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,99:1\n1818#2,4:100\n*S KotlinDebug\n*F\n+ 1 ChatListAdapterUpdateLog.kt\ncom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem$ChatList\n*L\n12#1:100,4\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ChatList extends ChatListAdapterUpdateLogItem {
        @NotNull
        private final ChatListItemUpdate chatListItemUpdate;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public ChatList(@NotNull ChatListItemUpdate chatListItemUpdate) {
            super(null);
            Intrinsics.checkNotNullParameter(chatListItemUpdate, "chatListItemUpdate");
            this.chatListItemUpdate = chatListItemUpdate;
        }

        @NotNull
        public final ChatListItemUpdate getChatListItemUpdate() {
            return this.chatListItemUpdate;
        }

        /* JADX WARN: Code restructure failed: missing block: B:15:0x004a, code lost:
            if (r4 == null) goto L26;
         */
        /* JADX WARN: Code restructure failed: missing block: B:19:0x0056, code lost:
            r0 = com.discord.chat.presentation.list.ChatListAdapterUpdateLogKt.label(r0);
         */
        @org.jetbrains.annotations.NotNull
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public java.lang.String toString() {
            /*
                r8 = this;
                com.discord.chat.presentation.list.ChatListItemUpdate r0 = r8.chatListItemUpdate
                java.util.List r0 = r0.getListOperations()
                if (r0 == 0) goto L4c
                r1 = r0
                java.lang.Iterable r1 = (java.lang.Iterable) r1
                java.util.Iterator r1 = r1.iterator()
                java.lang.String r2 = ""
                r3 = 0
                r4 = r2
            L13:
                boolean r5 = r1.hasNext()
                if (r5 == 0) goto L4a
                java.lang.Object r5 = r1.next()
                int r6 = r3 + 1
                if (r3 >= 0) goto L24
                kotlin.collections.CollectionsKt.v()
            L24:
                com.discord.chat.listmanager.ListOperation r5 = (com.discord.chat.listmanager.ListOperation) r5
                java.lang.String r5 = com.discord.chat.presentation.list.ChatListAdapterUpdateLogKt.access$label(r5)
                int r7 = r0.size()
                int r7 = r7 + (-1)
                if (r3 == r7) goto L35
                java.lang.String r3 = "-"
                goto L36
            L35:
                r3 = r2
            L36:
                java.lang.StringBuilder r7 = new java.lang.StringBuilder
                r7.<init>()
                r7.append(r4)
                r7.append(r5)
                r7.append(r3)
                java.lang.String r4 = r7.toString()
                r3 = r6
                goto L13
            L4a:
                if (r4 != 0) goto L4e
            L4c:
                java.lang.String r4 = "EMPTY"
            L4e:
                com.discord.chat.presentation.list.ChatListItemUpdate r0 = r8.chatListItemUpdate
                com.discord.chat.listmanager.ChatListAction r0 = r0.getChatListAction()
                if (r0 == 0) goto L5c
                java.lang.String r0 = com.discord.chat.presentation.list.ChatListAdapterUpdateLogKt.access$label(r0)
                if (r0 != 0) goto L5e
            L5c:
                java.lang.String r0 = "NoAction"
            L5e:
                java.lang.StringBuilder r1 = new java.lang.StringBuilder
                r1.<init>()
                java.lang.String r2 = "Actions: "
                r1.append(r2)
                r1.append(r0)
                java.lang.String r0 = r1.toString()
                com.discord.chat.presentation.list.ChatListItemUpdate r1 = r8.chatListItemUpdate
                java.util.List r1 = r1.getItems()
                int r1 = r1.size()
                java.lang.StringBuilder r2 = new java.lang.StringBuilder
                r2.<init>()
                java.lang.String r3 = "Items: "
                r2.append(r3)
                r2.append(r1)
                java.lang.String r1 = r2.toString()
                java.lang.StringBuilder r2 = new java.lang.StringBuilder
                r2.<init>()
                java.lang.String r3 = "Operations: "
                r2.append(r3)
                r2.append(r4)
                java.lang.String r2 = r2.toString()
                java.lang.StringBuilder r3 = new java.lang.StringBuilder
                r3.<init>()
                java.lang.String r4 = "ChatList - "
                r3.append(r4)
                r3.append(r0)
                java.lang.String r0 = ", "
                r3.append(r0)
                r3.append(r1)
                r3.append(r0)
                r3.append(r2)
                java.lang.String r0 = ", \n"
                r3.append(r0)
                java.lang.String r0 = r3.toString()
                return r0
            */
            throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.list.ChatListAdapterUpdateLogItem.ChatList.toString():java.lang.String");
        }
    }

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0004\u001a\u00020\u0005H\u0016¨\u0006\u0006"}, d2 = {"Lcom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem$NoOpDataSetChanged;", "Lcom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem;", "<init>", "()V", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class NoOpDataSetChanged extends ChatListAdapterUpdateLogItem {
        @NotNull
        public static final NoOpDataSetChanged INSTANCE = new NoOpDataSetChanged();

        private NoOpDataSetChanged() {
            super(null);
        }

        @NotNull
        public String toString() {
            return "NoOpDataSetChanged";
        }
    }

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\b\u001a\u00020\tH\u0016R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\n"}, d2 = {"Lcom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem$PortalView;", "Lcom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem;", "updateType", "Lcom/discord/chat/presentation/list/ChannelChatListAdapter$PortalViewUpdateType;", "<init>", "(Lcom/discord/chat/presentation/list/ChannelChatListAdapter$PortalViewUpdateType;)V", "getUpdateType", "()Lcom/discord/chat/presentation/list/ChannelChatListAdapter$PortalViewUpdateType;", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class PortalView extends ChatListAdapterUpdateLogItem {
        @NotNull
        private final ChannelChatListAdapter.PortalViewUpdateType updateType;

        @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public /* synthetic */ class WhenMappings {
            public static final /* synthetic */ int[] $EnumSwitchMapping$0;

            static {
                int[] iArr = new int[ChannelChatListAdapter.PortalViewUpdateType.values().length];
                try {
                    iArr[ChannelChatListAdapter.PortalViewUpdateType.ADD.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[ChannelChatListAdapter.PortalViewUpdateType.CHANGE.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[ChannelChatListAdapter.PortalViewUpdateType.REMOVE.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                $EnumSwitchMapping$0 = iArr;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public PortalView(@NotNull ChannelChatListAdapter.PortalViewUpdateType updateType) {
            super(null);
            Intrinsics.checkNotNullParameter(updateType, "updateType");
            this.updateType = updateType;
        }

        @NotNull
        public final ChannelChatListAdapter.PortalViewUpdateType getUpdateType() {
            return this.updateType;
        }

        @NotNull
        public String toString() {
            String str;
            int i10 = WhenMappings.$EnumSwitchMapping$0[this.updateType.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        str = "PortalViewUpdateType.REMOVE";
                    } else {
                        throw new qr.p();
                    }
                } else {
                    str = "PortalViewUpdateType.CHANGE";
                }
            } else {
                str = "PortalViewUpdateType.ADD";
            }
            return "PortalView - " + str;
        }
    }

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0004\u001a\u00020\u0005H\u0016¨\u0006\u0006"}, d2 = {"Lcom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem$PortalViewRemovalFromChatListItemUpdate;", "Lcom/discord/chat/presentation/list/ChatListAdapterUpdateLogItem;", "<init>", "()V", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class PortalViewRemovalFromChatListItemUpdate extends ChatListAdapterUpdateLogItem {
        @NotNull
        public static final PortalViewRemovalFromChatListItemUpdate INSTANCE = new PortalViewRemovalFromChatListItemUpdate();

        private PortalViewRemovalFromChatListItemUpdate() {
            super(null);
        }

        @NotNull
        public String toString() {
            return "PortalViewRemovalFromChatListItemUpdate";
        }
    }

    public /* synthetic */ ChatListAdapterUpdateLogItem(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private ChatListAdapterUpdateLogItem() {
    }
}
