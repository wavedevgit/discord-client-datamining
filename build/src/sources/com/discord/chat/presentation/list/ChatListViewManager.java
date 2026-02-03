package com.discord.chat.presentation.list;

import android.content.Context;
import android.view.View;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.discord.tti_measurement_view.TTIMeasurementView;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.viewmanagers.DCDChatListManagerDelegate;
import com.facebook.react.viewmanagers.DCDChatListManagerInterface;
import java.lang.ref.WeakReference;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0005\b\u0007\u0018\u0000 \"2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001\"B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J$\u0010\t\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007H\u0014J\b\u0010\n\u001a\u00020\u000bH\u0016J\u0010\u0010\f\u001a\u00020\u00022\u0006\u0010\r\u001a\u00020\u000eH\u0014J\u0010\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0002H\u0016J \u0010\u0012\u001a\u00020\u00102\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u0017H\u0016J\u0012\u0010\u001f\u001a\u0004\u0018\u00010\u001c2\u0006\u0010 \u001a\u00020\u001bH\u0002J\u0010\u0010!\u001a\u00020\u001c2\u0006\u0010 \u001a\u00020\u001bH\u0002R*\u0010\u0006\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\"\u0010\u0018\u001a\u0016\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u001b0\u001a\u0012\u0004\u0012\u00020\u001c\u0018\u00010\u0019X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001d\u001a\u00020\u001eX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006#"}, d2 = {"Lcom/discord/chat/presentation/list/ChatListViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/discord/chat/presentation/list/ChatListView;", "Lcom/facebook/react/viewmanagers/DCDChatListManagerInterface;", "<init>", "()V", "mDelegate", "Lcom/facebook/react/viewmanagers/DCDChatListManagerDelegate;", "kotlin.jvm.PlatformType", "getDelegate", "getName", "", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "onDropViewInstance", "", "view", "addView", "parent", "child", "Landroid/view/View;", "index", "", "weakProvider", "Lkotlin/Pair;", "Ljava/lang/ref/WeakReference;", "Landroid/content/Context;", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "lock", "", "getExistingProvider", "context", "getOrCreateComponentProvider", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ReactModule(name = ChatListViewManager.NAME)
@SourceDebugExtension({"SMAP\nChatListViewManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChatListViewManager.kt\ncom/discord/chat/presentation/list/ChatListViewManager\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,72:1\n1#2:73\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatListViewManager extends ViewGroupManager<ChatListView> implements DCDChatListManagerInterface<ChatListView> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "DCDChatList";
    @NotNull
    private final Object lock;
    @NotNull
    private final DCDChatListManagerDelegate<ChatListView, ChatListViewManager> mDelegate;
    private volatile Pair<? extends WeakReference<Context>, ComponentProvider> weakProvider;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/chat/presentation/list/ChatListViewManager$Companion;", "", "<init>", "()V", "NAME", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public ChatListViewManager() {
        super(null, 1, null);
        this.mDelegate = new DCDChatListManagerDelegate<>(this);
        this.lock = new Object();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit addView$lambda$3(TTIMeasurementView tTIMeasurementView, ChatListView chatListView) {
        Function2<TTIMeasurementView, Double, Unit> measurementListener = tTIMeasurementView.getMeasurementListener();
        if (measurementListener != null) {
            measurementListener.invoke(tTIMeasurementView, Double.valueOf(System.currentTimeMillis()));
        }
        chatListView.setOnFirstDrawDoneCallback(new Function0() { // from class: com.discord.chat.presentation.list.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f32464a;
                return unit;
            }
        });
        return Unit.f32464a;
    }

    private final ComponentProvider getExistingProvider(Context context) {
        Pair<? extends WeakReference<Context>, ComponentProvider> pair = this.weakProvider;
        if (pair != null) {
            ComponentProvider componentProvider = (ComponentProvider) pair.b();
            Context context2 = (Context) ((WeakReference) pair.a()).get();
            if (context2 != null && context2 == context) {
                return componentProvider;
            }
        }
        return null;
    }

    private final ComponentProvider getOrCreateComponentProvider(Context context) {
        ComponentProvider existingProvider = getExistingProvider(context);
        if (existingProvider != null) {
            return existingProvider;
        }
        synchronized (this.lock) {
            ComponentProvider existingProvider2 = getExistingProvider(context);
            if (existingProvider2 != null) {
                return existingProvider2;
            }
            ComponentProvider componentProvider = new ComponentProvider(context, true);
            this.weakProvider = lr.v.a(new WeakReference(context), componentProvider);
            return componentProvider;
        }
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return NAME;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ChatListView createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new ChatListView(reactContext, getOrCreateComponentProvider(reactContext));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public DCDChatListManagerDelegate<ChatListView, ChatListViewManager> getDelegate() {
        return this.mDelegate;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onDropViewInstance(@NotNull ChatListView view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.cleanup();
        super.onDropViewInstance((ChatListViewManager) view);
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager
    public void addView(@NotNull final ChatListView parent, @NotNull View child, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(child, "child");
        final TTIMeasurementView tTIMeasurementView = (TTIMeasurementView) child;
        tTIMeasurementView.setMeasurementSent(true);
        parent.setOnFirstDrawDoneCallback(new Function0() { // from class: com.discord.chat.presentation.list.v
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit addView$lambda$3;
                addView$lambda$3 = ChatListViewManager.addView$lambda$3(TTIMeasurementView.this, parent);
                return addView$lambda$3;
            }
        });
    }
}
