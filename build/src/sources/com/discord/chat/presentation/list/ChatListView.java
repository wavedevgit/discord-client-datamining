package com.discord.chat.presentation.list;

import android.annotation.SuppressLint;
import android.content.Context;
import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.listmanager.ChatListAction;
import com.discord.chat.listmanager.ChatListUpdate;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.list.ChatScrollStateObserver;
import com.discord.chat.presentation.list.item.ChatListItem;
import com.discord.chat.presentation.list.item.SeparatorChatListItem;
import com.discord.chat.presentation.list.item.SummarySeparatorChatListItem;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.discord.crash_reporting.CrashReporting;
import com.discord.misc.utilities.coroutines.CoroutineViewUtilsKt;
import com.discord.misc.utilities.measure.ViewMeasureExtensionsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.threading.ThreadUtilsKt;
import com.discord.recycler_view.decorations.VerticalSpacingItemDecoration;
import com.discord.recycler_view.scroller.Scroller;
import com.discord.recycler_view.utils.TransitionResilientLinearLayoutManager;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.uimanager.ViewProps;
import java.lang.reflect.Field;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0084\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0007\b\u0007\u0018\u0000 B2\u00020\u0001:\u0002ABB\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0012\u0010\"\u001a\u00020\u000e2\b\u0010#\u001a\u0004\u0018\u00010$H\u0016J\u0012\u0010%\u001a\u00020\u000e2\b\u0010#\u001a\u0004\u0018\u00010$H\u0016J\u000e\u0010&\u001a\u00020\u000e2\u0006\u0010\b\u001a\u00020\tJ\u0010\u0010'\u001a\u00020\u000e2\u0006\u0010(\u001a\u00020)H\u0003J\b\u0010*\u001a\u00020\u000eH\u0014J\b\u0010+\u001a\u00020\u000eH\u0014J\b\u0010.\u001a\u00020\u000eH\u0002J\u0010\u0010/\u001a\u00020\u000e2\u0006\u00100\u001a\u00020!H\u0007J\u0010\u00101\u001a\u00020\u000e2\u0006\u0010\u0014\u001a\u00020\u0015H\u0007J\b\u00102\u001a\u00020\u000eH\u0007J(\u00103\u001a\u00020\u000e2\u0006\u00104\u001a\u00020\u001d2\u0006\u00105\u001a\u0002062\u0006\u00107\u001a\u00020!2\u0006\u00108\u001a\u00020!H\u0007J&\u00109\u001a\u00020\u000e2\u0006\u0010:\u001a\u00020$2\u0014\u0010;\u001a\u0010\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\u001d\u0018\u00010<H\u0007J\b\u0010=\u001a\u00020\u000eH\u0002J\b\u0010>\u001a\u00020\u000eH\u0002J\b\u0010?\u001a\u00020\u000eH\u0003J\b\u0010@\u001a\u00020\u000eH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R0\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u000e0\r2\f\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000e0\r@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0010\u0010\u0011\"\u0004\b\u0012\u0010\u0013R\u000e\u0010\u0014\u001a\u00020\u0015X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u0017X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0018\u001a\u00020\u0019X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u001a\u001a\u00020\u001bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u001c\u001a\u00020\u001dX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001e\u001a\u00020\u001fX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010 \u001a\u00020!X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010,\u001a\u0004\u0018\u00010-X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006C"}, d2 = {"Lcom/discord/chat/presentation/list/ChatListView;", "Landroidx/recyclerview/widget/RecyclerView;", "context", "Landroid/content/Context;", "componentProvider", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "<init>", "(Landroid/content/Context;Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;)V", "dataSource", "Lcom/discord/chat/presentation/list/ChatListView$DataSource;", "chatListAdapter", "Lcom/discord/chat/presentation/list/ChannelChatListAdapter;", "value", "Lkotlin/Function0;", "", "onFirstDrawDoneCallback", "getOnFirstDrawDoneCallback", "()Lkotlin/jvm/functions/Function0;", "setOnFirstDrawDoneCallback", "(Lkotlin/jvm/functions/Function0;)V", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "scroller", "Lcom/discord/recycler_view/scroller/Scroller;", "linearLayoutManager", "Lcom/discord/recycler_view/utils/TransitionResilientLinearLayoutManager;", "verticalSpacingItemDecoration", "Lcom/discord/recycler_view/decorations/VerticalSpacingItemDecoration;", "currentChangesetUpdateId", "", "scrollStateObserver", "Lcom/discord/chat/presentation/list/ChatScrollStateObserver;", "isFirstLayout", "", "startViewTransition", "view", "Landroid/view/View;", "endViewTransition", "setDataSource", "onChatListUpdate", "update", "Lcom/discord/chat/listmanager/ChatListUpdate;", "onAttachedToWindow", "onDetachedFromWindow", "updateSubscriptionJob", "Lkotlinx/coroutines/Job;", BaseJavaModule.METHOD_TYPE_SYNC, "setInverted", "inverted", "setEventHandler", "cleanup", "scrollToPosition", ViewProps.POSITION, "targetAlignment", "Lcom/discord/recycler_view/scroller/Scroller$TargetAlignment;", "animate", "highlight", "setPortalView", "portalView", "measuredDimensions", "Lkotlin/Pair;", "addScrollStateListener", "removeScrollStateListener", "forceRecreateAllViewHolders", "measureAndLayout", "DataSource", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SuppressLint({"ViewConstructor"})
@SourceDebugExtension({"SMAP\nChatListView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChatListView.kt\ncom/discord/chat/presentation/list/ChatListView\n+ 2 ThreadUtils.kt\ncom/discord/misc/utilities/threading/ThreadUtilsKt\n+ 3 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,396:1\n17#2,5:397\n37#3,2:402\n55#3:404\n*S KotlinDebug\n*F\n+ 1 ChatListView.kt\ncom/discord/chat/presentation/list/ChatListView\n*L\n122#1:397,5\n240#1:402,2\n240#1:404\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatListView extends RecyclerView {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int MESSAGE_TOP_SCROLL_OFFSET_PX = SizeUtilsKt.getDpToPx(40);
    @NotNull
    private ChannelChatListAdapter chatListAdapter;
    @NotNull
    private final ComponentProvider componentProvider;
    private int currentChangesetUpdateId;
    private DataSource dataSource;
    private ChatEventHandler eventHandler;
    private boolean isFirstLayout;
    @NotNull
    private final TransitionResilientLinearLayoutManager linearLayoutManager;
    @NotNull
    private Function0<Unit> onFirstDrawDoneCallback;
    @NotNull
    private final ChatScrollStateObserver scrollStateObserver;
    @NotNull
    private final Scroller scroller;
    private Job updateSubscriptionJob;
    @NotNull
    private final VerticalSpacingItemDecoration verticalSpacingItemDecoration;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/discord/chat/presentation/list/ChatListView$Companion;", "", "<init>", "()V", "MESSAGE_TOP_SCROLL_OFFSET_PX", "", "getMESSAGE_TOP_SCROLL_OFFSET_PX", "()I", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final int getMESSAGE_TOP_SCROLL_OFFSET_PX() {
            return ChatListView.MESSAGE_TOP_SCROLL_OFFSET_PX;
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bf\u0018\u00002\u00020\u0001R\u0018\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0005\u0010\u0006¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/presentation/list/ChatListView$DataSource;", "", "updatesFlow", "Lkotlinx/coroutines/flow/Flow;", "Lcom/discord/chat/listmanager/ChatListUpdate;", "getUpdatesFlow", "()Lkotlinx/coroutines/flow/Flow;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface DataSource {
        @NotNull
        Flow getUpdatesFlow();
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChatListView(@NotNull Context context, @NotNull ComponentProvider componentProvider) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(componentProvider, "componentProvider");
        this.componentProvider = componentProvider;
        this.chatListAdapter = new ChannelChatListAdapter(new Function0() { // from class: com.discord.chat.presentation.list.i
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit chatListAdapter$lambda$0;
                chatListAdapter$lambda$0 = ChatListView.chatListAdapter$lambda$0(ChatListView.this);
                return chatListAdapter$lambda$0;
            }
        }, new Function0() { // from class: com.discord.chat.presentation.list.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ChatEventHandler chatListAdapter$lambda$1;
                chatListAdapter$lambda$1 = ChatListView.chatListAdapter$lambda$1(ChatListView.this);
                return chatListAdapter$lambda$1;
            }
        }, new Function0() { // from class: com.discord.chat.presentation.list.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ComponentProvider componentProvider2;
                componentProvider2 = ChatListView.this.componentProvider;
                return componentProvider2;
            }
        }, null, 8, null);
        this.onFirstDrawDoneCallback = new Function0() { // from class: com.discord.chat.presentation.list.o
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f32056a;
                return unit;
            }
        };
        this.scroller = new Scroller(this);
        TransitionResilientLinearLayoutManager transitionResilientLinearLayoutManager = new TransitionResilientLinearLayoutManager(context, 0, false, null, 14, null);
        this.linearLayoutManager = transitionResilientLinearLayoutManager;
        VerticalSpacingItemDecoration verticalSpacingItemDecoration = new VerticalSpacingItemDecoration(SizeUtilsKt.getDpToPx(16), SizeUtilsKt.getDpToPx(16), SizeUtilsKt.getDpToPx(30), false, 8, null);
        this.verticalSpacingItemDecoration = verticalSpacingItemDecoration;
        this.scrollStateObserver = new ChatScrollStateObserver(new Function1() { // from class: com.discord.chat.presentation.list.p
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit scrollStateObserver$lambda$4;
                scrollStateObserver$lambda$4 = ChatListView.scrollStateObserver$lambda$4(ChatListView.this, (ScrollState) obj);
                return scrollStateObserver$lambda$4;
            }
        });
        this.isFirstLayout = true;
        setRecycledViewPool(SharedRecycledViewPools.INSTANCE.getChatListViewPool());
        ChatListUtilsKt.configureMessageRecyclerView(this, context, verticalSpacingItemDecoration);
        setLayoutManager(transitionResilientLinearLayoutManager);
        setAdapter(this.chatListAdapter);
        addScrollStateListener();
        this.chatListAdapter.fillAdapter(this);
        setItemAnimator(null);
        new ChatListItemTouchHelper(new SwipeHelper(context, new Function0() { // from class: com.discord.chat.presentation.list.q
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit _init_$lambda$5;
                _init_$lambda$5 = ChatListView._init_$lambda$5(ChatListView.this);
                return _init_$lambda$5;
            }
        }, new Function0() { // from class: com.discord.chat.presentation.list.r
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit _init_$lambda$6;
                _init_$lambda$6 = ChatListView._init_$lambda$6(ChatListView.this);
                return _init_$lambda$6;
            }
        })).attachToRecyclerView(this);
        setClipChildren(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit _init_$lambda$5(ChatListView chatListView) {
        chatListView.setClipToPadding(false);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit _init_$lambda$6(ChatListView chatListView) {
        chatListView.setClipToPadding(true);
        return Unit.f32056a;
    }

    private final void addScrollStateListener() {
        addOnScrollListener(this.scrollStateObserver);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit chatListAdapter$lambda$0(ChatListView chatListView) {
        chatListView.measureAndLayout();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ChatEventHandler chatListAdapter$lambda$1(ChatListView chatListView) {
        ChatEventHandler chatEventHandler = chatListView.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            return null;
        }
        return chatEventHandler;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void forceRecreateAllViewHolders() {
        this.chatListAdapter.onHostDetached();
        setAdapter(null);
        setItemViewCacheSize(0);
        SharedRecycledViewPools sharedRecycledViewPools = SharedRecycledViewPools.INSTANCE;
        sharedRecycledViewPools.getChatListViewPool().forceClear();
        sharedRecycledViewPools.getAccessoriesViewPool().forceClear();
        this.chatListAdapter = new ChannelChatListAdapter(new Function0() { // from class: com.discord.chat.presentation.list.s
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit forceRecreateAllViewHolders$lambda$12;
                forceRecreateAllViewHolders$lambda$12 = ChatListView.forceRecreateAllViewHolders$lambda$12(ChatListView.this);
                return forceRecreateAllViewHolders$lambda$12;
            }
        }, new Function0() { // from class: com.discord.chat.presentation.list.t
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ChatEventHandler forceRecreateAllViewHolders$lambda$13;
                forceRecreateAllViewHolders$lambda$13 = ChatListView.forceRecreateAllViewHolders$lambda$13(ChatListView.this);
                return forceRecreateAllViewHolders$lambda$13;
            }
        }, new Function0() { // from class: com.discord.chat.presentation.list.u
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ComponentProvider componentProvider;
                componentProvider = ChatListView.this.componentProvider;
                return componentProvider;
            }
        }, this.onFirstDrawDoneCallback);
        setItemViewCacheSize(5);
        setAdapter(this.chatListAdapter);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit forceRecreateAllViewHolders$lambda$12(ChatListView chatListView) {
        chatListView.measureAndLayout();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ChatEventHandler forceRecreateAllViewHolders$lambda$13(ChatListView chatListView) {
        ChatEventHandler chatEventHandler = chatListView.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            return null;
        }
        return chatEventHandler;
    }

    private final void measureAndLayout() {
        try {
            Intrinsics.checkNotNull(this, "null cannot be cast to non-null type android.view.View");
            ViewMeasureExtensionsKt.measureAndLayout(this);
        } catch (IllegalArgumentException e10) {
            Field declaredField = RecyclerView.class.getDeclaredField("mState");
            declaredField.setAccessible(true);
            Object obj = declaredField.get(this);
            CrashReporting crashReporting = CrashReporting.INSTANCE;
            ChatListAdapterUpdateLog chatListAdapterUpdateLog = ChatListAdapterUpdateLog.INSTANCE;
            CrashReporting.addBreadcrumb$default(crashReporting, "About to crash because of ChatList, dumping update log:\n" + chatListAdapterUpdateLog + "\n Recycler State: " + obj, null, null, null, false, 30, null);
            throw e10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void onChatListUpdate(final ChatListUpdate chatListUpdate) {
        if (ThreadUtilsKt.isOnMainThread()) {
            if (Intrinsics.areEqual(chatListUpdate.getForceReload(), Boolean.TRUE)) {
                forceRecreateAllViewHolders();
            }
            if (chatListUpdate.getAction() instanceof ChatListAction.Clear) {
                this.isFirstLayout = true;
            }
            this.currentChangesetUpdateId = chatListUpdate.getChangesetUpdateId();
            final Ref.BooleanRef booleanRef = new Ref.BooleanRef();
            ChannelChatListAdapter.setItems$default(this.chatListAdapter, chatListUpdate.getItems(), chatListUpdate.getListOperations(), new Function1<Boolean, Unit>() { // from class: com.discord.chat.presentation.list.ChatListView$onChatListUpdate$1$1
                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    invoke(((Boolean) obj).booleanValue());
                    return Unit.f32056a;
                }

                public final void invoke(boolean z10) {
                    ChatScrollStateObserver chatScrollStateObserver;
                    ChatScrollStateObserver chatScrollStateObserver2;
                    Ref.BooleanRef booleanRef2 = Ref.BooleanRef.this;
                    chatScrollStateObserver = this.scrollStateObserver;
                    ScrollState scrollState = chatScrollStateObserver.getScrollState();
                    boolean z11 = false;
                    if (scrollState != null && scrollState.isAtBottom()) {
                        z11 = true;
                    }
                    booleanRef2.element = z11;
                    if (chatListUpdate.getAction() instanceof ChatListAction.Clear) {
                        chatScrollStateObserver2 = this.scrollStateObserver;
                        chatScrollStateObserver2.stopWatching();
                        if (z10) {
                            return;
                        }
                        this.removeAllViews();
                    }
                }
            }, new Function0<Unit>() { // from class: com.discord.chat.presentation.list.ChatListView$onChatListUpdate$1$2
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m495invoke();
                    return Unit.f32056a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m495invoke() {
                    ChatScrollStateObserver chatScrollStateObserver;
                    Scroller.TargetAlignment top;
                    ChatScrollStateObserver chatScrollStateObserver2;
                    ChatScrollStateObserver chatScrollStateObserver3;
                    ChatScrollStateObserver chatScrollStateObserver4;
                    ChatScrollStateObserver chatScrollStateObserver5;
                    ChatScrollStateObserver chatScrollStateObserver6;
                    ChatScrollStateObserver chatScrollStateObserver7;
                    boolean z10;
                    TransitionResilientLinearLayoutManager transitionResilientLinearLayoutManager;
                    ChatEventHandler chatEventHandler;
                    ChatEventHandler chatEventHandler2;
                    if (!(ChatListUpdate.this.getAction() instanceof ChatListAction.Clear)) {
                        chatScrollStateObserver2 = this.scrollStateObserver;
                        chatScrollStateObserver2.startWatching(this, ChatScrollStateObserver.EmitMode.NO);
                        chatScrollStateObserver3 = this.scrollStateObserver;
                        chatScrollStateObserver3.getChatListVisibilityCalculator$chat_release().updateFirstAndLastMessageVisibilityData(this);
                        chatScrollStateObserver4 = this.scrollStateObserver;
                        int firstMessagePosition = chatScrollStateObserver4.getChatListVisibilityCalculator$chat_release().getFirstMessagePosition();
                        chatScrollStateObserver5 = this.scrollStateObserver;
                        Double firstMessagePercentVisible = chatScrollStateObserver5.getChatListVisibilityCalculator$chat_release().getFirstMessagePercentVisible();
                        chatScrollStateObserver6 = this.scrollStateObserver;
                        int lastMessagePosition = chatScrollStateObserver6.getChatListVisibilityCalculator$chat_release().getLastMessagePosition();
                        chatScrollStateObserver7 = this.scrollStateObserver;
                        Double lastMessagePercentVisible = chatScrollStateObserver7.getChatListVisibilityCalculator$chat_release().getLastMessagePercentVisible();
                        z10 = this.isFirstLayout;
                        if (z10 && firstMessagePosition >= 0 && lastMessagePosition >= 0) {
                            this.isFirstLayout = false;
                            transitionResilientLinearLayoutManager = this.linearLayoutManager;
                            ChatEventHandler chatEventHandler3 = null;
                            if (transitionResilientLinearLayoutManager.getReverseLayout()) {
                                chatEventHandler2 = this.eventHandler;
                                if (chatEventHandler2 == null) {
                                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                                } else {
                                    chatEventHandler3 = chatEventHandler2;
                                }
                                chatEventHandler3.onFirstLayout(lastMessagePosition, lastMessagePercentVisible, firstMessagePosition, firstMessagePercentVisible);
                            } else {
                                chatEventHandler = this.eventHandler;
                                if (chatEventHandler == null) {
                                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                                } else {
                                    chatEventHandler3 = chatEventHandler;
                                }
                                chatEventHandler3.onFirstLayout(firstMessagePosition, firstMessagePercentVisible, lastMessagePosition, lastMessagePercentVisible);
                            }
                        }
                    }
                    ChatListAction action = ChatListUpdate.this.getAction();
                    if (action instanceof ChatListAction.ScrollTo) {
                        ChatListItem chatListItem = (ChatListItem) CollectionsKt.q0(ChatListUpdate.this.getItems(), ((ChatListAction.ScrollTo) ChatListUpdate.this.getAction()).getPosition());
                        if (chatListItem instanceof SeparatorChatListItem) {
                            top = new Scroller.TargetAlignment.Top(ChatListView.Companion.getMESSAGE_TOP_SCROLL_OFFSET_PX());
                        } else if (chatListItem instanceof SummarySeparatorChatListItem) {
                            if (((SummarySeparatorChatListItem) chatListItem).isBeforeContent()) {
                                top = new Scroller.TargetAlignment.Top(ChatListView.Companion.getMESSAGE_TOP_SCROLL_OFFSET_PX());
                            } else {
                                top = Scroller.TargetAlignment.Center.INSTANCE;
                            }
                        } else {
                            top = new Scroller.TargetAlignment.Top(ChatListView.Companion.getMESSAGE_TOP_SCROLL_OFFSET_PX());
                        }
                        this.scrollToPosition(((ChatListAction.ScrollTo) ChatListUpdate.this.getAction()).getPosition(), top, ((ChatListAction.ScrollTo) ChatListUpdate.this.getAction()).getAnimate(), ((ChatListAction.ScrollTo) ChatListUpdate.this.getAction()).getHighlight());
                    } else if (action instanceof ChatListAction.StickToBottomIfAtBottom) {
                        if (booleanRef.element) {
                            this.scrollToPosition(0, Scroller.TargetAlignment.Anywhere.INSTANCE, false, false);
                        }
                    } else if (action instanceof ChatListAction.Clear) {
                    } else {
                        if (action instanceof ChatListAction.Noop) {
                            chatScrollStateObserver = this.scrollStateObserver;
                            chatScrollStateObserver.startWatching(this, ChatScrollStateObserver.EmitMode.YES);
                            return;
                        }
                        throw new qr.p();
                    }
                }
            }, null, 16, null);
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    private final void removeScrollStateListener() {
        removeOnScrollListener(this.scrollStateObserver);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scrollStateObserver$lambda$4(ChatListView chatListView, ScrollState scrollState) {
        Intrinsics.checkNotNullParameter(scrollState, "scrollState");
        ChatEventHandler chatEventHandler = chatListView.eventHandler;
        if (chatEventHandler != null) {
            if (chatEventHandler == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler = null;
            }
            chatEventHandler.onScrollStateChanged(scrollState, chatListView.currentChangesetUpdateId);
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scrollToPosition$lambda$10(ChatListView chatListView, boolean z10, int i10) {
        View findViewByPosition;
        chatListView.scrollStateObserver.startWatching(chatListView, ChatScrollStateObserver.EmitMode.YES);
        if (z10) {
            ChatListHighlightItemAtPositionKt.chatListHighlightItemAtPosition$default(chatListView, i10, 0L, 2, null);
            RecyclerView.LayoutManager layoutManager = chatListView.getLayoutManager();
            if (layoutManager != null && (findViewByPosition = layoutManager.findViewByPosition(i10)) != null) {
                findViewByPosition.sendAccessibilityEvent(8);
            }
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scrollToPosition$lambda$11(ChatListView chatListView) {
        chatListView.measureAndLayout();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scrollToPosition$lambda$9(ChatListView chatListView) {
        chatListView.scrollStateObserver.stopWatching();
        return Unit.f32056a;
    }

    private final void sync() {
        Job job = this.updateSubscriptionJob;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.updateSubscriptionJob = os.g.d(CoroutineViewUtilsKt.attachedScope(this, true), null, null, new ChatListView$sync$1(this, null), 3, null);
    }

    public final void cleanup() {
        removeScrollStateListener();
        stopScroll();
    }

    @Override // android.view.ViewGroup
    public void endViewTransition(View view) {
        super.endViewTransition(view);
        suppressLayout(false);
        this.linearLayoutManager.disableRecycling(false);
    }

    @NotNull
    public final Function0<Unit> getOnFirstDrawDoneCallback() {
        return this.onFirstDrawDoneCallback;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.recyclerview.widget.RecyclerView, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        sync();
        addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: com.discord.chat.presentation.list.ChatListView$onAttachedToWindow$$inlined$doOnNextLayout$1
            @Override // android.view.View.OnLayoutChangeListener
            public void onLayoutChange(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                ChatEventHandler chatEventHandler;
                view.removeOnLayoutChangeListener(this);
                chatEventHandler = ChatListView.this.eventHandler;
                if (chatEventHandler == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler = null;
                }
                chatEventHandler.onCompleteFirstLayout();
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.recyclerview.widget.RecyclerView, android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.chatListAdapter.onHostDetached();
    }

    public final void scrollToPosition(final int i10, @NotNull Scroller.TargetAlignment targetAlignment, boolean z10, final boolean z11) {
        Intrinsics.checkNotNullParameter(targetAlignment, "targetAlignment");
        this.scroller.scrollToPosition(i10, targetAlignment, z10, new Function0() { // from class: com.discord.chat.presentation.list.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit scrollToPosition$lambda$9;
                scrollToPosition$lambda$9 = ChatListView.scrollToPosition$lambda$9(ChatListView.this);
                return scrollToPosition$lambda$9;
            }
        }, new Function0() { // from class: com.discord.chat.presentation.list.k
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit scrollToPosition$lambda$10;
                scrollToPosition$lambda$10 = ChatListView.scrollToPosition$lambda$10(ChatListView.this, z11, i10);
                return scrollToPosition$lambda$10;
            }
        }, new Function0() { // from class: com.discord.chat.presentation.list.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit scrollToPosition$lambda$11;
                scrollToPosition$lambda$11 = ChatListView.scrollToPosition$lambda$11(ChatListView.this);
                return scrollToPosition$lambda$11;
            }
        });
    }

    public final void setDataSource(@NotNull DataSource dataSource) {
        Intrinsics.checkNotNullParameter(dataSource, "dataSource");
        this.dataSource = dataSource;
    }

    public final void setEventHandler(@NotNull ChatEventHandler eventHandler) {
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        this.eventHandler = eventHandler;
    }

    public final void setInverted(boolean z10) {
        this.verticalSpacingItemDecoration.setRecyclerLayoutReversed(z10);
        this.linearLayoutManager.setReverseLayout(z10);
    }

    public final void setOnFirstDrawDoneCallback(@NotNull Function0<Unit> value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.onFirstDrawDoneCallback = value;
        this.chatListAdapter.setOnFirstDraw(value);
    }

    public final void setPortalView(@NotNull View portalView, Pair<Integer, Integer> pair) {
        Intrinsics.checkNotNullParameter(portalView, "portalView");
        this.chatListAdapter.setPortalView(portalView, pair);
    }

    @Override // android.view.ViewGroup
    public void startViewTransition(View view) {
        this.linearLayoutManager.disableRecycling(true);
        suppressLayout(true);
        super.startViewTransition(view);
    }
}
