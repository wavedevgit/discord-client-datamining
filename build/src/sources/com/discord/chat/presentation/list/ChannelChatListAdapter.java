package com.discord.chat.presentation.list;

import android.annotation.SuppressLint;
import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.listmanager.ChatListAction;
import com.discord.chat.listmanager.ListOperation;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.list.item.ChatListItem;
import com.discord.chat.presentation.list.item.LoadingChatListItem;
import com.discord.chat.presentation.list.item.MessageItem;
import com.discord.chat.presentation.list.item.PortalViewChatListItem;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.discord.logging.Log;
import com.discord.misc.utilities.threading.ThreadUtilsKt;
import com.discord.tti_measurement_view.FirstDrawDoneListener;
import com.facebook.react.modules.dialog.AlertFragment;
import com.facebook.react.uimanager.ViewProps;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;
import java.util.Queue;
import java.util.UUID;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.Job;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000¤\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010!\n\u0002\u0010\u0000\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0007\u0018\u0000 Q2\u00020\u0001:\u0002RQBI\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002\u0012\u0010\u0010\u0007\u001a\f\u0012\u0004\u0012\u00020\u00050\u0002j\u0002`\u0006\u0012\u0010\u0010\n\u001a\f\u0012\u0004\u0012\u00020\b0\u0002j\u0002`\t\u0012\u000e\b\u0002\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002¢\u0006\u0004\b\f\u0010\rJ\u000f\u0010\u000e\u001a\u00020\u0003H\u0002¢\u0006\u0004\b\u000e\u0010\u000fJ\u0017\u0010\u0012\u001a\u00020\u00032\u0006\u0010\u0011\u001a\u00020\u0010H\u0003¢\u0006\u0004\b\u0012\u0010\u0013J\u0017\u0010\u0014\u001a\u00020\u00032\u0006\u0010\u0011\u001a\u00020\u0010H\u0003¢\u0006\u0004\b\u0014\u0010\u0013J\u000f\u0010\u0015\u001a\u00020\u0003H\u0003¢\u0006\u0004\b\u0015\u0010\u000fJ\u0017\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u0011\u001a\u00020\u0016H\u0003¢\u0006\u0004\b\u0017\u0010\u0018J\u0017\u0010\u001a\u001a\u00020\u00032\u0006\u0010\u0011\u001a\u00020\u0019H\u0002¢\u0006\u0004\b\u001a\u0010\u001bJ\u000f\u0010\u001c\u001a\u00020\u0003H\u0007¢\u0006\u0004\b\u001c\u0010\u000fJ1\u0010\"\u001a\u00020\u00032\b\u0010\u001e\u001a\u0004\u0018\u00010\u001d2\u0016\b\u0002\u0010!\u001a\u0010\u0012\u0004\u0012\u00020 \u0012\u0004\u0012\u00020 \u0018\u00010\u001fH\u0007¢\u0006\u0004\b\"\u0010#J\r\u0010$\u001a\u00020 ¢\u0006\u0004\b$\u0010%J\u001d\u0010)\u001a\u00020\u00032\f\u0010(\u001a\b\u0012\u0004\u0012\u00020'0&H\u0017¢\u0006\u0004\b)\u0010*J[\u0010)\u001a\u00020\u00032\f\u0010(\u001a\b\u0012\u0004\u0012\u00020'0&2\u000e\u0010,\u001a\n\u0012\u0004\u0012\u00020+\u0018\u00010&2\u0012\u0010/\u001a\u000e\u0012\u0004\u0012\u00020.\u0012\u0004\u0012\u00020\u00030-2\f\u00100\u001a\b\u0012\u0004\u0012\u00020\u00030\u00022\n\b\u0002\u00102\u001a\u0004\u0018\u000101H\u0007¢\u0006\u0004\b)\u00103J/\u0010:\u001a\u00020\u00032\u0006\u00105\u001a\u0002042\u0006\u00106\u001a\u00020 2\u000e\u00109\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010807H\u0016¢\u0006\u0004\b:\u0010;R\u001d\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u00028\u0006¢\u0006\f\n\u0004\b\u0004\u0010<\u001a\u0004\b=\u0010>R(\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00030\u00028\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\u000b\u0010<\u001a\u0004\b?\u0010>\"\u0004\b@\u0010AR\u0018\u0010C\u001a\u0004\u0018\u00010B8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bC\u0010DR\u0016\u0010E\u001a\u00020 8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bE\u0010FR\u001a\u0010H\u001a\b\u0012\u0004\u0012\u00020\u00100G8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bH\u0010IR\u0016\u0010J\u001a\u00020.8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bJ\u0010KR\u0018\u0010M\u001a\u0004\u0018\u00010L8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bM\u0010NR\u0016\u0010O\u001a\u00020 8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bO\u0010FR\u0016\u0010P\u001a\u00020.8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bP\u0010K¨\u0006S"}, d2 = {"Lcom/discord/chat/presentation/list/ChannelChatListAdapter;", "Lcom/discord/chat/presentation/list/BaseChatListAdapter;", "Lkotlin/Function0;", "", "doLayout", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "Lcom/discord/chat/presentation/list/delegate/EventHandlerProvider;", "eventHandlerProvider", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "Lcom/discord/chat/presentation/list/delegate/MessageComponentProvider;", "messageComponentProvider", "onFirstDraw", "<init>", "(Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V", "syncFirstMessageItemPosition", "()V", "Lcom/discord/chat/presentation/list/ChannelChatListAdapterUpdate;", "update", "enqueueUpdate", "(Lcom/discord/chat/presentation/list/ChannelChatListAdapterUpdate;)V", "processUpdate", "processNextUpdate", "Lcom/discord/chat/presentation/list/ChatListItemUpdate;", "processChatListItemUpdate", "(Lcom/discord/chat/presentation/list/ChatListItemUpdate;)V", "Lcom/discord/chat/presentation/list/PortalViewUpdate;", "processPortalViewUpdate", "(Lcom/discord/chat/presentation/list/PortalViewUpdate;)V", "onHostDetached", "Landroid/view/View;", "portalView", "Lkotlin/Pair;", "", "measuredDimensions", "setPortalView", "(Landroid/view/View;Lkotlin/Pair;)V", "getFirstMessageItemPosition", "()I", "", "Lcom/discord/chat/presentation/list/item/ChatListItem;", AlertFragment.ARG_ITEMS, "setItems", "(Ljava/util/List;)V", "Lcom/discord/chat/listmanager/ListOperation;", "listOperations", "Lkotlin/Function1;", "", "preCommit", "postCommit", "Lcom/discord/chat/listmanager/ChatListAction;", "chatListAction", "(Ljava/util/List;Ljava/util/List;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function0;Lcom/discord/chat/listmanager/ChatListAction;)V", "Landroidx/recyclerview/widget/RecyclerView$ViewHolder;", "holder", ViewProps.POSITION, "", "", "payloads", "onBindViewHolder", "(Landroidx/recyclerview/widget/RecyclerView$ViewHolder;ILjava/util/List;)V", "Lkotlin/jvm/functions/Function0;", "getDoLayout", "()Lkotlin/jvm/functions/Function0;", "getOnFirstDraw", "setOnFirstDraw", "(Lkotlin/jvm/functions/Function0;)V", "Lcom/discord/chat/presentation/list/item/PortalViewChatListItem;", "portalChatListItem", "Lcom/discord/chat/presentation/list/item/PortalViewChatListItem;", "firstMessageItemPosition", "I", "Ljava/util/Queue;", "updateQueue", "Ljava/util/Queue;", "isProcessingUpdate", "Z", "Lkotlinx/coroutines/Job;", "processNextUpdateJob", "Lkotlinx/coroutines/Job;", "updateCount", "reportedFirstDrawYet", "Companion", "PortalViewUpdateType", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nChannelChatListAdapter.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChannelChatListAdapter.kt\ncom/discord/chat/presentation/list/ChannelChatListAdapter\n+ 2 ThreadUtils.kt\ncom/discord/misc/utilities/threading/ThreadUtilsKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,250:1\n17#2,5:251\n17#2,5:264\n17#2,5:269\n17#2,5:274\n388#3,7:256\n1869#3,2:279\n1#4:263\n*S KotlinDebug\n*F\n+ 1 ChannelChatListAdapter.kt\ncom/discord/chat/presentation/list/ChannelChatListAdapter\n*L\n40#1:251,5\n97#1:264,5\n108#1:269,5\n129#1:274,5\n66#1:256,7\n165#1:279,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChannelChatListAdapter extends BaseChatListAdapter {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final String LOGGING_TAG = ChannelChatListAdapter.class.getSimpleName();
    @NotNull
    private final Function0<Unit> doLayout;
    private int firstMessageItemPosition;
    private boolean isProcessingUpdate;
    @NotNull
    private Function0<Unit> onFirstDraw;
    private PortalViewChatListItem portalChatListItem;
    private Job processNextUpdateJob;
    private boolean reportedFirstDrawYet;
    private int updateCount;
    @NotNull
    private final Queue<ChannelChatListAdapterUpdate> updateQueue;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u0016\u0010\u0004\u001a\n \u0006*\u0004\u0018\u00010\u00050\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/presentation/list/ChannelChatListAdapter$Companion;", "", "<init>", "()V", "LOGGING_TAG", "", "kotlin.jvm.PlatformType", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0080\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/presentation/list/ChannelChatListAdapter$PortalViewUpdateType;", "", "<init>", "(Ljava/lang/String;I)V", "ADD", "CHANGE", "REMOVE", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class PortalViewUpdateType {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ PortalViewUpdateType[] $VALUES;
        public static final PortalViewUpdateType ADD = new PortalViewUpdateType("ADD", 0);
        public static final PortalViewUpdateType CHANGE = new PortalViewUpdateType("CHANGE", 1);
        public static final PortalViewUpdateType REMOVE = new PortalViewUpdateType("REMOVE", 2);

        private static final /* synthetic */ PortalViewUpdateType[] $values() {
            return new PortalViewUpdateType[]{ADD, CHANGE, REMOVE};
        }

        static {
            PortalViewUpdateType[] $values = $values();
            $VALUES = $values;
            $ENTRIES = pr.a.a($values);
        }

        private PortalViewUpdateType(String str, int i10) {
            super(str, i10);
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static PortalViewUpdateType valueOf(String str) {
            return (PortalViewUpdateType) Enum.valueOf(PortalViewUpdateType.class, str);
        }

        public static PortalViewUpdateType[] values() {
            return (PortalViewUpdateType[]) $VALUES.clone();
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[PortalViewUpdateType.values().length];
            try {
                iArr[PortalViewUpdateType.ADD.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[PortalViewUpdateType.REMOVE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[PortalViewUpdateType.CHANGE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public /* synthetic */ ChannelChatListAdapter(Function0 function0, Function0 function02, Function0 function03, Function0 function04, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(function0, function02, function03, (i10 & 8) != 0 ? new Function0() { // from class: com.discord.chat.presentation.list.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f33298a;
                return unit;
            }
        } : function04);
    }

    private final void enqueueUpdate(ChannelChatListAdapterUpdate channelChatListAdapterUpdate) {
        if (ThreadUtilsKt.isOnMainThread()) {
            this.updateQueue.add(channelChatListAdapterUpdate);
            if (this.updateQueue.size() == 1 && !this.isProcessingUpdate) {
                processNextUpdate();
                return;
            } else if (!this.updateQueue.isEmpty() && !this.isProcessingUpdate) {
                Log log = Log.INSTANCE;
                String str = LOGGING_TAG;
                Intrinsics.checkNotNullExpressionValue(str, "access$getLOGGING_TAG$cp(...)");
                Log.w$default(log, str, "Skipped a chat list update. adapter may be frozen.", (Throwable) null, 4, (Object) null);
                return;
            } else {
                return;
            }
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    public static final void onBindViewHolder$lambda$11(ChannelChatListAdapter channelChatListAdapter) {
        channelChatListAdapter.onFirstDraw.invoke();
    }

    /* JADX WARN: Removed duplicated region for block: B:119:0x00e4  */
    /* JADX WARN: Removed duplicated region for block: B:87:0x003a  */
    /* JADX WARN: Removed duplicated region for block: B:95:0x0062  */
    @android.annotation.SuppressLint({"NotifyDataSetChanged"})
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void processChatListItemUpdate(com.discord.chat.presentation.list.ChatListItemUpdate r6) {
        /*
            r5 = this;
            java.util.List r0 = r6.getItems()
            java.lang.Object r1 = r5.items
            r2 = 0
            r3 = 1
            if (r1 == 0) goto L2c
            java.lang.String r4 = "items"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r4)
            java.util.Collection r1 = (java.util.Collection) r1
            boolean r1 = r1.isEmpty()
            if (r1 != 0) goto L2c
            java.lang.Object r1 = r5.items
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r4)
            java.util.List r1 = (java.util.List) r1
            java.lang.Object r1 = kotlin.collections.CollectionsKt.z0(r1)
            boolean r1 = r1 instanceof com.discord.chat.presentation.list.item.PortalViewChatListItem
            if (r1 == 0) goto L2c
            com.discord.chat.presentation.list.item.PortalViewChatListItem r1 = r5.portalChatListItem
            if (r1 == 0) goto L2c
            r1 = r3
            goto L2d
        L2c:
            r1 = r2
        L2d:
            if (r1 == 0) goto L38
            java.lang.Object r4 = kotlin.collections.CollectionsKt.B0(r0)
            boolean r4 = r4 instanceof com.discord.chat.presentation.list.item.LoadingChatListItem
            if (r4 != 0) goto L38
            r2 = r3
        L38:
            if (r2 == 0) goto L45
            java.util.Collection r0 = (java.util.Collection) r0
            com.discord.chat.presentation.list.item.PortalViewChatListItem r3 = r5.portalChatListItem
            kotlin.jvm.internal.Intrinsics.checkNotNull(r3)
            java.util.List r0 = kotlin.collections.CollectionsKt.M0(r0, r3)
        L45:
            r5.setChatListItems$chat_release(r0)
            java.util.List r0 = r5.getChatListItems$chat_release()
            super.setItems(r0)
            if (r1 == 0) goto L5c
            if (r2 != 0) goto L5c
            com.discord.chat.presentation.list.ChatListAdapterUpdateLog r6 = com.discord.chat.presentation.list.ChatListAdapterUpdateLog.INSTANCE
            r6.addPortalRemovalFromChatListItemUpdate()
            r5.notifyDataSetChanged()
            return
        L5c:
            java.util.List r0 = r6.getListOperations()
            if (r0 == 0) goto Le4
            com.discord.chat.presentation.list.ChatListAdapterUpdateLog r0 = com.discord.chat.presentation.list.ChatListAdapterUpdateLog.INSTANCE
            r0.addChatListItemUpdate(r6)
            java.util.List r6 = r6.getListOperations()
            java.lang.Iterable r6 = (java.lang.Iterable) r6
            java.util.Iterator r6 = r6.iterator()
        L71:
            boolean r0 = r6.hasNext()
            if (r0 == 0) goto Le3
            java.lang.Object r0 = r6.next()
            com.discord.chat.listmanager.ListOperation r0 = (com.discord.chat.listmanager.ListOperation) r0
            boolean r1 = r0 instanceof com.discord.chat.listmanager.ListOperation.Change
            if (r1 == 0) goto L8b
            com.discord.chat.listmanager.ListOperation$Change r0 = (com.discord.chat.listmanager.ListOperation.Change) r0
            int r0 = r0.getIndex()
            r5.notifyItemChanged(r0)
            goto L71
        L8b:
            boolean r1 = r0 instanceof com.discord.chat.listmanager.ListOperation.Insert
            if (r1 == 0) goto L99
            com.discord.chat.listmanager.ListOperation$Insert r0 = (com.discord.chat.listmanager.ListOperation.Insert) r0
            int r0 = r0.getIndex()
            r5.notifyItemInserted(r0)
            goto L71
        L99:
            boolean r1 = r0 instanceof com.discord.chat.listmanager.ListOperation.Remove
            if (r1 == 0) goto La7
            com.discord.chat.listmanager.ListOperation$Remove r0 = (com.discord.chat.listmanager.ListOperation.Remove) r0
            int r0 = r0.getIndex()
            r5.notifyItemRemoved(r0)
            goto L71
        La7:
            boolean r1 = r0 instanceof com.discord.chat.listmanager.ListOperation.ChangeRange
            if (r1 == 0) goto Lb9
            com.discord.chat.listmanager.ListOperation$ChangeRange r0 = (com.discord.chat.listmanager.ListOperation.ChangeRange) r0
            int r1 = r0.getFirst()
            int r0 = r0.getCount()
            r5.notifyItemRangeChanged(r1, r0)
            goto L71
        Lb9:
            boolean r1 = r0 instanceof com.discord.chat.listmanager.ListOperation.InsertRange
            if (r1 == 0) goto Lcb
            com.discord.chat.listmanager.ListOperation$InsertRange r0 = (com.discord.chat.listmanager.ListOperation.InsertRange) r0
            int r1 = r0.getFirst()
            int r0 = r0.getCount()
            r5.notifyItemRangeInserted(r1, r0)
            goto L71
        Lcb:
            boolean r1 = r0 instanceof com.discord.chat.listmanager.ListOperation.RemoveRange
            if (r1 == 0) goto Ldd
            com.discord.chat.listmanager.ListOperation$RemoveRange r0 = (com.discord.chat.listmanager.ListOperation.RemoveRange) r0
            int r1 = r0.getFirst()
            int r0 = r0.getCount()
            r5.notifyItemRangeRemoved(r1, r0)
            goto L71
        Ldd:
            ir.p r6 = new ir.p
            r6.<init>()
            throw r6
        Le3:
            return
        Le4:
            com.discord.chat.presentation.list.ChatListAdapterUpdateLog r6 = com.discord.chat.presentation.list.ChatListAdapterUpdateLog.INSTANCE
            r6.addNoOpDataSetChanged()
            r5.notifyDataSetChanged()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.list.ChannelChatListAdapter.processChatListItemUpdate(com.discord.chat.presentation.list.ChatListItemUpdate):void");
    }

    public final void processNextUpdate() {
        if (ThreadUtilsKt.isOnMainThread()) {
            if (!this.updateQueue.isEmpty()) {
                Object remove = this.updateQueue.remove();
                Intrinsics.checkNotNullExpressionValue(remove, "remove(...)");
                processUpdate((ChannelChatListAdapterUpdate) remove);
                return;
            }
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    public final void processPortalViewUpdate(PortalViewUpdate portalViewUpdate) {
        boolean z10;
        PortalViewUpdateType portalViewUpdateType;
        List<? extends ChatListItem> M0;
        boolean z11 = CollectionsKt.B0(getChatListItems$chat_release()) instanceof PortalViewChatListItem;
        if (portalViewUpdate.getPortalChatListItem() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10 && !z11) {
            portalViewUpdateType = PortalViewUpdateType.ADD;
        } else if (z10 && z11) {
            portalViewUpdateType = PortalViewUpdateType.CHANGE;
        } else if (!z10 && z11) {
            portalViewUpdateType = PortalViewUpdateType.REMOVE;
        } else {
            return;
        }
        ChatListAdapterUpdateLog.INSTANCE.addPortalUpdate(portalViewUpdateType);
        int[] iArr = WhenMappings.$EnumSwitchMapping$0;
        int i10 = iArr[portalViewUpdateType.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    M0 = CollectionsKt.j1(getChatListItems$chat_release());
                    int n10 = CollectionsKt.n(getChatListItems$chat_release());
                    PortalViewChatListItem portalChatListItem = portalViewUpdate.getPortalChatListItem();
                    Intrinsics.checkNotNull(portalChatListItem);
                    M0.set(n10, portalChatListItem);
                } else {
                    throw new ir.p();
                }
            } else {
                M0 = CollectionsKt.g0(getChatListItems$chat_release(), 1);
            }
        } else {
            PortalViewChatListItem portalChatListItem2 = portalViewUpdate.getPortalChatListItem();
            Intrinsics.checkNotNull(portalChatListItem2);
            M0 = CollectionsKt.M0(getChatListItems$chat_release(), portalChatListItem2);
        }
        setChatListItems$chat_release(M0);
        super.setItems((Object) getChatListItems$chat_release());
        int i11 = iArr[portalViewUpdateType.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    notifyItemChanged(CollectionsKt.n(getChatListItems$chat_release()));
                    return;
                }
                throw new ir.p();
            }
            notifyItemRemoved(CollectionsKt.n(getChatListItems$chat_release()) + 1);
            return;
        }
        notifyItemInserted(CollectionsKt.n(getChatListItems$chat_release()));
    }

    @SuppressLint({"NotifyDataSetChanged"})
    public final void processUpdate(ChannelChatListAdapterUpdate channelChatListAdapterUpdate) {
        Job d10;
        if (ThreadUtilsKt.isOnMainThread()) {
            boolean z10 = true;
            this.isProcessingUpdate = true;
            Function1<Boolean, Unit> preCommit = channelChatListAdapterUpdate.getPreCommit();
            if (getItemCount() != 0) {
                z10 = false;
            }
            preCommit.invoke(Boolean.valueOf(z10));
            if (channelChatListAdapterUpdate instanceof PortalViewUpdate) {
                processPortalViewUpdate((PortalViewUpdate) channelChatListAdapterUpdate);
            } else if (channelChatListAdapterUpdate instanceof ChatListItemUpdate) {
                processChatListItemUpdate((ChatListItemUpdate) channelChatListAdapterUpdate);
            } else {
                throw new ir.p();
            }
            getDoLayout().invoke();
            syncFirstMessageItemPosition();
            channelChatListAdapterUpdate.getPostCommit().invoke();
            d10 = gs.i.d(kotlinx.coroutines.i.b(), null, null, new ChannelChatListAdapter$processUpdate$1$1(this, null), 3, null);
            this.processNextUpdateJob = d10;
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    public static /* synthetic */ void setItems$default(ChannelChatListAdapter channelChatListAdapter, List list, List list2, Function1 function1, Function0 function0, ChatListAction chatListAction, int i10, Object obj) {
        if ((i10 & 16) != 0) {
            chatListAction = null;
        }
        channelChatListAdapter.setItems(list, list2, function1, function0, chatListAction);
    }

    public static final Unit setItems$lambda$4(boolean z10) {
        return Unit.f33298a;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ void setPortalView$default(ChannelChatListAdapter channelChatListAdapter, View view, Pair pair, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            pair = null;
        }
        channelChatListAdapter.setPortalView(view, pair);
    }

    public final void syncFirstMessageItemPosition() {
        int i10;
        int i11;
        List<ChatListItem> chatListItems$chat_release = getChatListItems$chat_release();
        ListIterator<ChatListItem> listIterator = chatListItems$chat_release.listIterator(chatListItems$chat_release.size());
        while (true) {
            i10 = -1;
            if (listIterator.hasPrevious()) {
                if (listIterator.previous() instanceof MessageItem) {
                    i11 = listIterator.nextIndex();
                    break;
                }
            } else {
                i11 = -1;
                break;
            }
        }
        if (i11 != -1) {
            i10 = i11;
        }
        this.firstMessageItemPosition = i10;
    }

    @NotNull
    public final Function0<Unit> getDoLayout() {
        return this.doLayout;
    }

    public final int getFirstMessageItemPosition() {
        return this.firstMessageItemPosition;
    }

    @NotNull
    public final Function0<Unit> getOnFirstDraw() {
        return this.onFirstDraw;
    }

    @Override // com.hannesdorfmann.adapterdelegates4.a, androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(@NotNull RecyclerView.ViewHolder holder, int i10, @NotNull List<Object> payloads) {
        Intrinsics.checkNotNullParameter(holder, "holder");
        Intrinsics.checkNotNullParameter(payloads, "payloads");
        super.onBindViewHolder(holder, i10, payloads);
        if (!this.reportedFirstDrawYet && !((List) this.items).isEmpty()) {
            ChatListItem chatListItem = (ChatListItem) ((List) this.items).get(i10);
            if (!(chatListItem instanceof PortalViewChatListItem) && !(chatListItem instanceof LoadingChatListItem)) {
                this.reportedFirstDrawYet = true;
                FirstDrawDoneListener.registerForNextDraw(holder.itemView, new Runnable() { // from class: com.discord.chat.presentation.list.a
                    @Override // java.lang.Runnable
                    public final void run() {
                        ChannelChatListAdapter.onBindViewHolder$lambda$11(ChannelChatListAdapter.this);
                    }
                });
            }
        }
    }

    public final void onHostDetached() {
        if (ThreadUtilsKt.isOnMainThread()) {
            Job job = this.processNextUpdateJob;
            if (job != null) {
                Job.a.a(job, null, 1, null);
            }
            this.processNextUpdateJob = null;
            this.isProcessingUpdate = false;
            this.updateQueue.clear();
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    public final void setOnFirstDraw(@NotNull Function0<Unit> function0) {
        Intrinsics.checkNotNullParameter(function0, "<set-?>");
        this.onFirstDraw = function0;
    }

    public final void setPortalView(View view, Pair<Integer, Integer> pair) {
        PortalViewChatListItem portalViewChatListItem;
        if (view != null) {
            String uuid = UUID.randomUUID().toString();
            Intrinsics.checkNotNullExpressionValue(uuid, "toString(...)");
            portalViewChatListItem = new PortalViewChatListItem(uuid, view, pair);
        } else {
            portalViewChatListItem = null;
        }
        this.portalChatListItem = portalViewChatListItem;
        int i10 = this.updateCount + 1;
        this.updateCount = i10;
        enqueueUpdate(new PortalViewUpdate(portalViewChatListItem, i10));
    }

    @Override // com.hannesdorfmann.adapterdelegates4.a
    public void setItems(@NotNull List<? extends ChatListItem> items) {
        Intrinsics.checkNotNullParameter(items, "items");
        setItems$default(this, items, null, new Function1() { // from class: com.discord.chat.presentation.list.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit items$lambda$4;
                items$lambda$4 = ChannelChatListAdapter.setItems$lambda$4(((Boolean) obj).booleanValue());
                return items$lambda$4;
            }
        }, new Function0() { // from class: com.discord.chat.presentation.list.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f33298a;
                return unit;
            }
        }, null, 16, null);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChannelChatListAdapter(@NotNull Function0<Unit> doLayout, @NotNull Function0<? extends ChatEventHandler> eventHandlerProvider, @NotNull Function0<ComponentProvider> messageComponentProvider, @NotNull Function0<Unit> onFirstDraw) {
        super(eventHandlerProvider, messageComponentProvider);
        Intrinsics.checkNotNullParameter(doLayout, "doLayout");
        Intrinsics.checkNotNullParameter(eventHandlerProvider, "eventHandlerProvider");
        Intrinsics.checkNotNullParameter(messageComponentProvider, "messageComponentProvider");
        Intrinsics.checkNotNullParameter(onFirstDraw, "onFirstDraw");
        this.doLayout = doLayout;
        this.onFirstDraw = onFirstDraw;
        this.firstMessageItemPosition = -1;
        this.updateQueue = new LinkedList();
    }

    public final void setItems(@NotNull List<? extends ChatListItem> items, List<? extends ListOperation> list, @NotNull Function1<? super Boolean, Unit> preCommit, @NotNull Function0<Unit> postCommit, ChatListAction chatListAction) {
        Intrinsics.checkNotNullParameter(items, "items");
        Intrinsics.checkNotNullParameter(preCommit, "preCommit");
        Intrinsics.checkNotNullParameter(postCommit, "postCommit");
        int i10 = this.updateCount + 1;
        this.updateCount = i10;
        enqueueUpdate(new ChatListItemUpdate(items, list, chatListAction, i10, preCommit, postCommit));
    }
}
