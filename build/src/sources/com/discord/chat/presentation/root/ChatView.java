package com.discord.chat.presentation.root;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.ChatModule;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.list.ChatListView;
import com.discord.crash_reporting.CrashReporting;
import com.discord.misc.utilities.threading.ThreadUtilsKt;
import com.discord.recycler_view.scroller.Scroller;
import com.discord.recycler_view.utils.RecyclerViewExtensionsKt;
import com.facebook.react.views.view.ReactViewGroup;
import jr.v;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.flow.Flow;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 \u001d2\u00020\u0001:\u0001\u001dB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\"\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013H\u0016J\u0010\u0010\u0014\u001a\u00020\r2\u0006\u0010\n\u001a\u00020\u000bH\u0007J\u0010\u0010\u0015\u001a\u00020\r2\u0006\u0010\b\u001a\u00020\tH\u0007J(\u0010\u0016\u001a\u00020\r2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u000b2\u0006\u0010\u001a\u001a\u00020\u000bH\u0007J\u0010\u0010\u001b\u001a\u00020\r2\u0006\u0010\u001c\u001a\u00020\u000fH\u0003R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001e"}, d2 = {"Lcom/discord/chat/presentation/root/ChatView;", "Lcom/facebook/react/views/view/ReactViewGroup;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "chatList", "Lcom/discord/chat/presentation/list/ChatListView;", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "inverted", "", "addView", "", "child", "Landroid/view/View;", "index", "", "params", "Landroid/view/ViewGroup$LayoutParams;", "setInverted", "setEventHandler", "scrollTo", "targetScreenLocation", "Lcom/discord/recycler_view/scroller/Scroller$TargetAlignment;", "animated", "highlight", "attachPortalViewToChatList", "portalView", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nChatView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChatView.kt\ncom/discord/chat/presentation/root/ChatView\n+ 2 ThreadUtils.kt\ncom/discord/misc/utilities/threading/ThreadUtilsKt\n*L\n1#1,154:1\n17#2,5:155\n17#2,5:160\n17#2,5:165\n*S KotlinDebug\n*F\n+ 1 ChatView.kt\ncom/discord/chat/presentation/root/ChatView\n*L\n50#1:155,5\n55#1:160,5\n65#1:165,5\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatView extends ReactViewGroup {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int INDEX_CHAT_LIST = 0;
    private static final int INDEX_PORTAL_VIEW = 2;
    private ChatListView chatList;
    private ChatEventHandler eventHandler;
    private boolean inverted;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/presentation/root/ChatView$Companion;", "", "<init>", "()V", "INDEX_CHAT_LIST", "", "INDEX_PORTAL_VIEW", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChatView(@NotNull Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void attachPortalViewToChatList(final View view) {
        view.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: com.discord.chat.presentation.root.b
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view2, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                ChatView.attachPortalViewToChatList$lambda$5(view, this, view2, i10, i11, i12, i13, i14, i15, i16, i17);
            }
        });
        view.setVisibility(4);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void attachPortalViewToChatList$lambda$5(final View view, final ChatView chatView, View view2, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        boolean z10;
        final Pair pair;
        boolean z11 = false;
        if (view.getMeasuredHeight() > 0 && view.getMeasuredWidth() > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ChatListView chatListView = null;
        String str = null;
        if (z10) {
            ChatListView chatListView2 = chatView.chatList;
            if (chatListView2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("chatList");
                chatListView2 = null;
            }
            if (!chatListView2.isComputingLayout()) {
                if (view.getMeasuredWidth() != view.getLayoutParams().width || view.getMeasuredHeight() != view.getLayoutParams().height) {
                    z11 = true;
                }
                if (z11) {
                    pair = v.a(Integer.valueOf(view.getMeasuredWidth()), Integer.valueOf(view.getMeasuredHeight()));
                } else {
                    pair = null;
                }
                CrashReporting crashReporting = CrashReporting.INSTANCE;
                int measuredWidth = view.getMeasuredWidth();
                int measuredHeight = view.getMeasuredHeight();
                ViewParent parent = view.getParent();
                if (parent != null) {
                    str = parent.getClass().getSimpleName();
                }
                CrashReporting.addBreadcrumb$default(crashReporting, "PortalView will detach from ChatView and portal into ChatListView; measured=" + measuredWidth + "x" + measuredHeight + ", hasDimChanged=" + z11 + ", parent=" + str, null, null, null, false, 30, null);
                chatView.post(new Runnable() { // from class: com.discord.chat.presentation.root.a
                    @Override // java.lang.Runnable
                    public final void run() {
                        ChatView.attachPortalViewToChatList$lambda$5$lambda$4(view, chatView, pair);
                    }
                });
                return;
            }
        }
        CrashReporting crashReporting2 = CrashReporting.INSTANCE;
        ChatListView chatListView3 = chatView.chatList;
        if (chatListView3 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("chatList");
        } else {
            chatListView = chatListView3;
        }
        CrashReporting.addBreadcrumb$default(crashReporting2, "PortalView layout change skipped; valid=" + z10 + ", computingLayout=" + chatListView.isComputingLayout() + ", measured=" + view.getMeasuredWidth() + "x" + view.getMeasuredHeight(), null, null, null, false, 30, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void attachPortalViewToChatList$lambda$5$lambda$4(View view, ChatView chatView, Pair pair) {
        ChatListView chatListView = null;
        try {
            if (view.getParent() instanceof ChatView) {
                ViewParent parent = view.getParent();
                Intrinsics.checkNotNull(parent, "null cannot be cast to non-null type android.view.ViewGroup");
                ((ViewGroup) parent).removeView(view);
            }
            ChatListView chatListView2 = chatView.chatList;
            if (chatListView2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("chatList");
                chatListView2 = null;
            }
            chatListView2.setPortalView(view, pair);
            CrashReporting.addBreadcrumb$default(CrashReporting.INSTANCE, "PortalView portaled into ChatListView; measuredDims=" + pair, null, null, null, false, 30, null);
        } catch (Exception unused) {
            CrashReporting crashReporting = CrashReporting.INSTANCE;
            Pair a10 = v.a("portalView", view.toString());
            Pair a11 = v.a("parent", view.getParent().toString());
            ChatListView chatListView3 = chatView.chatList;
            if (chatListView3 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("chatList");
            } else {
                chatListView = chatListView3;
            }
            CrashReporting.addBreadcrumb$default(crashReporting, "ChatList exception: failed to reparent portalView to ChatListView", o0.m(a10, a11, v.a("chatListView", chatListView.toString())), null, null, false, 28, null);
        }
    }

    @Override // android.view.ViewGroup
    public void addView(@NotNull View child, int i10, ViewGroup.LayoutParams layoutParams) {
        Intrinsics.checkNotNullParameter(child, "child");
        super.addView(child, i10, layoutParams);
        if (i10 != 0) {
            if (i10 != 2) {
                return;
            }
            attachPortalViewToChatList(child);
        } else if (child instanceof ChatListView) {
            RecyclerViewExtensionsKt.setReactNativeClipToPadding((RecyclerView) child);
            ChatListView chatListView = (ChatListView) child;
            ChatEventHandler chatEventHandler = this.eventHandler;
            if (chatEventHandler == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler = null;
            }
            chatListView.setEventHandler(chatEventHandler);
            chatListView.setInverted(this.inverted);
            chatListView.setDataSource(new ChatListView.DataSource() { // from class: com.discord.chat.presentation.root.ChatView$addView$2
                @Override // com.discord.chat.presentation.list.ChatListView.DataSource
                public Flow getUpdatesFlow() {
                    return ChatModule.Companion.getChatListManager(ChatView.this.getId()).observeUpdates();
                }
            });
            this.chatList = chatListView;
        } else {
            throw new IllegalArgumentException("Failed requirement.");
        }
    }

    public final void scrollTo(int i10, @NotNull Scroller.TargetAlignment targetScreenLocation, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(targetScreenLocation, "targetScreenLocation");
        if (ThreadUtilsKt.isOnMainThread()) {
            ChatListView chatListView = this.chatList;
            if (chatListView == null) {
                Intrinsics.throwUninitializedPropertyAccessException("chatList");
                chatListView = null;
            }
            chatListView.scrollToPosition(i10, targetScreenLocation, z10, z11);
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    public final void setEventHandler(@NotNull ChatEventHandler eventHandler) {
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        if (ThreadUtilsKt.isOnMainThread()) {
            this.eventHandler = eventHandler;
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    public final void setInverted(boolean z10) {
        if (ThreadUtilsKt.isOnMainThread()) {
            this.inverted = z10;
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }
}
