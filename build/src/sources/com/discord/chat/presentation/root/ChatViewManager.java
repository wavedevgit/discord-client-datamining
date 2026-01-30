package com.discord.chat.presentation.root;

import android.content.Context;
import com.discord.chat.presentation.events.CreateChatReactEventsKt;
import com.discord.chat.presentation.list.ChatListView;
import com.discord.chat.reactevents.ChatViewEventHandler;
import com.discord.reactevents.ReactEvents;
import com.discord.recycler_view.scroller.Scroller;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.DCDChatManagerDelegate;
import com.facebook.react.viewmanagers.DCDChatManagerInterface;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = ChatViewManager.NAME)
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010%\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0007\b\u0007\u0018\u0000 -2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001-B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J$\u0010\u000b\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007H\u0014J\b\u0010\f\u001a\u00020\rH\u0016J\u0010\u0010\u000e\u001a\u00020\u00022\u0006\u0010\u000f\u001a\u00020\u0010H\u0014J\u0014\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u00130\u0012H\u0016J\u0018\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00022\u0006\u0010\u0017\u001a\u00020\u0018H\u0016J\u001f\u0010\u0019\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00022\b\u0010\u001a\u001a\u0004\u0018\u00010\u0018H\u0016¢\u0006\u0002\u0010\u001bJ\u001f\u0010\u001c\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00022\b\u0010\u001a\u001a\u0004\u0018\u00010\u0018H\u0016¢\u0006\u0002\u0010\u001bJ\u001f\u0010\u001d\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00022\b\u0010\u001a\u001a\u0004\u0018\u00010\u0018H\u0016¢\u0006\u0002\u0010\u001bJ\u001f\u0010\u001e\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00022\b\u0010\u001a\u001a\u0004\u0018\u00010\u0018H\u0016¢\u0006\u0002\u0010\u001bJ\u001a\u0010\u001f\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00022\b\u0010\u001a\u001a\u0004\u0018\u00010\rH\u0016J\u001a\u0010 \u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00022\b\u0010\u001a\u001a\u0004\u0018\u00010\rH\u0016J\"\u0010!\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00022\u0006\u0010\"\u001a\u00020\r2\b\u0010#\u001a\u0004\u0018\u00010$H\u0016J0\u0010%\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00022\u0006\u0010&\u001a\u00020'2\u0006\u0010(\u001a\u00020\u00182\u0006\u0010)\u001a\u00020\u00182\u0006\u0010*\u001a\u00020'H\u0016J\u0018\u0010+\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00022\u0006\u0010(\u001a\u00020\u0018H\u0016J(\u0010,\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00022\u0006\u0010&\u001a\u00020'2\u0006\u0010(\u001a\u00020\u00182\u0006\u0010)\u001a\u00020\u0018H\u0016R*\u0010\u0006\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\nX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006."}, d2 = {"Lcom/discord/chat/presentation/root/ChatViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/discord/chat/presentation/root/ChatView;", "Lcom/facebook/react/viewmanagers/DCDChatManagerInterface;", "<init>", "()V", "delegate", "Lcom/facebook/react/viewmanagers/DCDChatManagerDelegate;", "kotlin.jvm.PlatformType", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "getDelegate", "getName", "", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "getExportedCustomDirectEventTypeConstants", "", "", "setInverted", "", "view", "inverted", "", "setAnimateEmoji", "value", "(Lcom/discord/chat/presentation/root/ChatView;Ljava/lang/Boolean;)V", "setHACK_fixModalInteraction", "setAdjustContentOffsetWithBounds", "setAlwaysRespectKeyboard", "setRoleStyle", "setKeyboardBackgroundRgba", "receiveCommand", "commandId", "args", "Lcom/facebook/react/bridge/ReadableArray;", ChatViewManager.COMMAND_SCROLL_TO, "index", "", "animated", "highlight", ViewProps.POSITION, ChatViewManager.COMMAND_SCROLL_TO_BOTTOM, ChatViewManager.COMMAND_SCROLL_INTO_VIEW, "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatViewManager extends ViewGroupManager<ChatView> implements DCDChatManagerInterface<ChatView> {
    @NotNull
    private static final String COMMAND_SCROLL_INTO_VIEW = "scrollIntoView";
    @NotNull
    private static final String COMMAND_SCROLL_TO = "scrollTo";
    @NotNull
    private static final String COMMAND_SCROLL_TO_BOTTOM = "scrollToBottom";
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "DCDChat";
    @NotNull
    private final DCDChatManagerDelegate<ChatView, ChatViewManager> delegate;
    @NotNull
    private final ReactEvents reactEvents;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/discord/chat/presentation/root/ChatViewManager$Companion;", "", "<init>", "()V", "NAME", "", "COMMAND_SCROLL_TO", "COMMAND_SCROLL_TO_BOTTOM", "COMMAND_SCROLL_INTO_VIEW", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public ChatViewManager() {
        super(null, 1, null);
        this.delegate = new DCDChatManagerDelegate<>(this);
        this.reactEvents = CreateChatReactEventsKt.createChatReactEvents();
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return this.reactEvents.exportEventConstants();
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return NAME;
    }

    @Override // com.facebook.react.viewmanagers.DCDChatManagerInterface
    public void setAdjustContentOffsetWithBounds(@NotNull ChatView view, Boolean bool) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.DCDChatManagerInterface
    public void setAlwaysRespectKeyboard(@NotNull ChatView view, Boolean bool) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.DCDChatManagerInterface
    public void setAnimateEmoji(@NotNull ChatView view, Boolean bool) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.DCDChatManagerInterface
    public void setHACK_fixModalInteraction(@NotNull ChatView view, Boolean bool) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.DCDChatManagerInterface
    public void setKeyboardBackgroundRgba(@NotNull ChatView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.DCDChatManagerInterface
    public void setRoleStyle(@NotNull ChatView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ChatView createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        final ChatView chatView = new ChatView(reactContext);
        Context context = chatView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        chatView.setEventHandler(new ChatViewEventHandler(context, this.reactEvents, new Function0() { // from class: com.discord.chat.presentation.root.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int id2;
                id2 = ChatView.this.getId();
                return Integer.valueOf(id2);
            }
        }));
        return chatView;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public DCDChatManagerDelegate<ChatView, ChatViewManager> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public void receiveCommand(@NotNull ChatView view, @NotNull String commandId, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(commandId, "commandId");
        int hashCode = commandId.hashCode();
        if (hashCode == -938100109) {
            if (commandId.equals(COMMAND_SCROLL_TO_BOTTOM) && readableArray != null) {
                scrollToBottom(view, readableArray.getBoolean(0));
                return;
            }
            return;
        }
        if (hashCode != -402165208) {
            if (hashCode == 1908871954 && commandId.equals(COMMAND_SCROLL_INTO_VIEW) && readableArray != null) {
                scrollIntoView(view, readableArray.getInt(0), readableArray.getBoolean(1), readableArray.getBoolean(2));
            }
        } else if (commandId.equals(COMMAND_SCROLL_TO) && readableArray != null) {
            scrollTo(view, readableArray.getInt(0), readableArray.getBoolean(1), readableArray.getBoolean(2), readableArray.getInt(3));
        }
    }

    @Override // com.facebook.react.viewmanagers.DCDChatManagerInterface
    public void scrollIntoView(@NotNull ChatView view, int i10, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.scrollTo(i10, Scroller.TargetAlignment.Anywhere.INSTANCE, z10, z11);
    }

    @Override // com.facebook.react.viewmanagers.DCDChatManagerInterface
    public void scrollTo(@NotNull ChatView view, int i10, boolean z10, boolean z11, int i11) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.scrollTo(i10, new Scroller.TargetAlignment.Top(ChatListView.Companion.getMESSAGE_TOP_SCROLL_OFFSET_PX()), z10, z11);
    }

    @Override // com.facebook.react.viewmanagers.DCDChatManagerInterface
    public void scrollToBottom(@NotNull ChatView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.scrollTo(0, Scroller.TargetAlignment.Anywhere.INSTANCE, z10, false);
    }

    @Override // com.facebook.react.viewmanagers.DCDChatManagerInterface
    public void setInverted(@NotNull ChatView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setInverted(z10);
    }
}
