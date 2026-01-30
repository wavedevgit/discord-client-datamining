package com.discord.chat.messagemanager;

import android.content.Context;
import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.MessageBase;
import com.discord.chat.bridge.row.MessageRow;
import com.discord.chat.bridge.row.Row;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.events.CreateChatReactEventsKt;
import com.discord.chat.presentation.message.DecoratedMessageView;
import com.discord.chat.presentation.message.system.AutomodSystemMessageWrapperView;
import com.discord.chat.presentation.message.system.SystemMessageWrapperView;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.discord.chat.presentation.root.MessageContext;
import com.discord.chat.presentation.root.MessageContextKt;
import com.discord.chat.presentation.root.MessageContextType;
import com.discord.chat.reactevents.ChatViewEventHandler;
import com.discord.reactevents.ReactEvents;
import com.discord.theme.ThemeManager;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.DCDAutoModerationSystemMessageViewManagerDelegate;
import com.facebook.react.viewmanagers.DCDAutoModerationSystemMessageViewManagerInterface;
import com.facebook.react.viewmanagers.DCDMessageViewManagerDelegate;
import com.facebook.react.viewmanagers.DCDMessageViewManagerInterface;
import com.facebook.react.viewmanagers.DCDSystemMessageViewManagerDelegate;
import com.facebook.react.viewmanagers.DCDSystemMessageViewManagerInterface;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonBuilder;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0004\bÆ\u0002\u0018\u00002\u00020\u0001:\u0003\u0010\u0011\u0012B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0014\u0010\b\u001a\u00020\t*\u00020\n2\u0006\u0010\u000b\u001a\u00020\fH\u0002J\u0010\u0010\r\u001a\u00020\n2\u0006\u0010\u000e\u001a\u00020\u000fH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0013"}, d2 = {"Lcom/discord/chat/messagemanager/MessageViewManagers;", "", "<init>", "()V", "json", "Lkotlinx/serialization/json/Json;", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "getEventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "Lcom/discord/chat/bridge/row/MessageRow;", "context", "Landroid/content/Context;", "convertRowJsonToMessageRow", "rowJson", "", "MessageViewManager", "SystemMessageViewManager", "AutoModerationSystemMessageViewManager", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMessageViewManagers.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MessageViewManagers.kt\ncom/discord/chat/messagemanager/MessageViewManagers\n+ 2 Json.kt\nkotlinx/serialization/json/Json\n*L\n1#1,152:1\n147#2:153\n*S KotlinDebug\n*F\n+ 1 MessageViewManagers.kt\ncom/discord/chat/messagemanager/MessageViewManagers\n*L\n150#1:153\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageViewManagers {
    @NotNull
    public static final MessageViewManagers INSTANCE = new MessageViewManagers();
    @NotNull
    private static final Json json = kotlinx.serialization.json.b.b(null, new Function1() { // from class: com.discord.chat.messagemanager.b
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit json$lambda$0;
            json$lambda$0 = MessageViewManagers.json$lambda$0((JsonBuilder) obj);
            return json$lambda$0;
        }
    }, 1, null);
    @NotNull
    private static final ReactEvents reactEvents;

    @Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\b\u0007\u0018\u0000 \u00132\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001\u0013B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J$\u0010\t\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007H\u0014J\b\u0010\n\u001a\u00020\u000bH\u0016J\u0010\u0010\f\u001a\u00020\u00022\u0006\u0010\r\u001a\u00020\u000eH\u0014J\u001a\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\b\u0010\u0012\u001a\u0004\u0018\u00010\u000bH\u0017R*\u0010\u0006\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0014"}, d2 = {"Lcom/discord/chat/messagemanager/MessageViewManagers$AutoModerationSystemMessageViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/discord/chat/presentation/message/system/AutomodSystemMessageWrapperView;", "Lcom/facebook/react/viewmanagers/DCDAutoModerationSystemMessageViewManagerInterface;", "<init>", "()V", "delegate", "Lcom/facebook/react/viewmanagers/DCDAutoModerationSystemMessageViewManagerDelegate;", "kotlin.jvm.PlatformType", "getDelegate", "getName", "", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "setRow", "", "view", "value", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @ReactModule(name = AutoModerationSystemMessageViewManager.NAME)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AutoModerationSystemMessageViewManager extends ViewGroupManager<AutomodSystemMessageWrapperView> implements DCDAutoModerationSystemMessageViewManagerInterface<AutomodSystemMessageWrapperView> {
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        public static final String NAME = "DCDAutoModerationSystemMessageView";
        @NotNull
        private final DCDAutoModerationSystemMessageViewManagerDelegate<AutomodSystemMessageWrapperView, AutoModerationSystemMessageViewManager> delegate;

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/chat/messagemanager/MessageViewManagers$AutoModerationSystemMessageViewManager$Companion;", "", "<init>", "()V", "NAME", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        public AutoModerationSystemMessageViewManager() {
            super(null, 1, null);
            this.delegate = new DCDAutoModerationSystemMessageViewManagerDelegate<>(this);
        }

        @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
        @NotNull
        public String getName() {
            return NAME;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.react.uimanager.ViewManager
        @NotNull
        public AutomodSystemMessageWrapperView createViewInstance(@NotNull ThemedReactContext reactContext) {
            Intrinsics.checkNotNullParameter(reactContext, "reactContext");
            return new AutomodSystemMessageWrapperView(reactContext, null, 2, null);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.react.uimanager.ViewManager
        @NotNull
        public DCDAutoModerationSystemMessageViewManagerDelegate<AutomodSystemMessageWrapperView, AutoModerationSystemMessageViewManager> getDelegate() {
            return this.delegate;
        }

        @Override // com.facebook.react.viewmanagers.DCDAutoModerationSystemMessageViewManagerInterface
        @ReactProp(name = "row")
        public void setRow(@NotNull AutomodSystemMessageWrapperView view, String str) {
            Intrinsics.checkNotNullParameter(view, "view");
            if (str != null) {
                MessageViewManagers messageViewManagers = MessageViewManagers.INSTANCE;
                MessageRow convertRowJsonToMessageRow = messageViewManagers.convertRowJsonToMessageRow(str);
                MessageBase message = convertRowJsonToMessageRow.getMessage();
                Intrinsics.checkNotNull(message, "null cannot be cast to non-null type com.discord.chat.bridge.Message");
                MessageContext messageContext = MessageContextKt.getMessageContext(convertRowJsonToMessageRow);
                Context context = view.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                view.setMessage((Message) message, messageContext, messageViewManagers.getEventHandler(convertRowJsonToMessageRow, context));
            }
        }
    }

    @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\b\u0007\u0018\u0000 \u00152\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001\u0015B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J$\u0010\u000b\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007H\u0014J\b\u0010\f\u001a\u00020\rH\u0016J\u0010\u0010\u000e\u001a\u00020\u00022\u0006\u0010\u000f\u001a\u00020\u0010H\u0014J\u001a\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010\u0014\u001a\u0004\u0018\u00010\rH\u0017R*\u0010\u0006\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\t\u001a\u0004\u0018\u00010\nX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0016"}, d2 = {"Lcom/discord/chat/messagemanager/MessageViewManagers$MessageViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/discord/chat/presentation/message/DecoratedMessageView;", "Lcom/facebook/react/viewmanagers/DCDMessageViewManagerInterface;", "<init>", "()V", "delegate", "Lcom/facebook/react/viewmanagers/DCDMessageViewManagerDelegate;", "kotlin.jvm.PlatformType", "componentProvider", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "getDelegate", "getName", "", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "setRow", "", "view", "value", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @ReactModule(name = MessageViewManager.NAME)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class MessageViewManager extends ViewGroupManager<DecoratedMessageView> implements DCDMessageViewManagerInterface<DecoratedMessageView> {
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        public static final String NAME = "DCDMessageView";
        private ComponentProvider componentProvider;
        @NotNull
        private final DCDMessageViewManagerDelegate<DecoratedMessageView, MessageViewManager> delegate;

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/chat/messagemanager/MessageViewManagers$MessageViewManager$Companion;", "", "<init>", "()V", "NAME", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        public MessageViewManager() {
            super(null, 1, null);
            this.delegate = new DCDMessageViewManagerDelegate<>(this);
        }

        @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
        @NotNull
        public String getName() {
            return NAME;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        /* JADX WARN: Code restructure failed: missing block: B:8:0x0016, code lost:
            if (kotlin.jvm.internal.Intrinsics.areEqual(r0 != null ? r0.getContext() : null, r4) == false) goto L11;
         */
        @Override // com.facebook.react.uimanager.ViewManager
        @org.jetbrains.annotations.NotNull
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public com.discord.chat.presentation.message.DecoratedMessageView createViewInstance(@org.jetbrains.annotations.NotNull com.facebook.react.uimanager.ThemedReactContext r4) {
            /*
                r3 = this;
                java.lang.String r0 = "reactContext"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
                com.discord.chat.presentation.message.view.botuikit.ComponentProvider r0 = r3.componentProvider
                r1 = 0
                if (r0 == 0) goto L18
                if (r0 == 0) goto L11
                android.content.Context r0 = r0.getContext()
                goto L12
            L11:
                r0 = r1
            L12:
                boolean r0 = kotlin.jvm.internal.Intrinsics.areEqual(r0, r4)
                if (r0 != 0) goto L20
            L18:
                com.discord.chat.presentation.message.view.botuikit.ComponentProvider r0 = new com.discord.chat.presentation.message.view.botuikit.ComponentProvider
                r2 = 0
                r0.<init>(r4, r2)
                r3.componentProvider = r0
            L20:
                com.discord.chat.presentation.message.DecoratedMessageView r0 = new com.discord.chat.presentation.message.DecoratedMessageView
                r2 = 2
                r0.<init>(r4, r1, r2, r1)
                return r0
            */
            throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.messagemanager.MessageViewManagers.MessageViewManager.createViewInstance(com.facebook.react.uimanager.ThemedReactContext):com.discord.chat.presentation.message.DecoratedMessageView");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.react.uimanager.ViewManager
        @NotNull
        public DCDMessageViewManagerDelegate<DecoratedMessageView, MessageViewManager> getDelegate() {
            return this.delegate;
        }

        @Override // com.facebook.react.viewmanagers.DCDMessageViewManagerInterface
        @ReactProp(name = "row")
        public void setRow(@NotNull DecoratedMessageView view, String str) {
            Intrinsics.checkNotNullParameter(view, "view");
            if (str != null) {
                MessageViewManagers messageViewManagers = MessageViewManagers.INSTANCE;
                MessageRow convertRowJsonToMessageRow = messageViewManagers.convertRowJsonToMessageRow(str);
                if (convertRowJsonToMessageRow.getContextType() == MessageContextType.MEDIA_VIEWER) {
                    ThemeManager.INSTANCE.setDarkThemeOverride();
                }
                MessageBase message = convertRowJsonToMessageRow.getMessage();
                Intrinsics.checkNotNull(message, "null cannot be cast to non-null type com.discord.chat.bridge.Message");
                Message message2 = (Message) message;
                MessageContext messageContext = MessageContextKt.getMessageContext(convertRowJsonToMessageRow);
                Context context = view.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                DecoratedMessageView.setMessage$default(view, message2, messageContext, messageViewManagers.getEventHandler(convertRowJsonToMessageRow, context), this.componentProvider, null, false, false, 112, null);
                ThemeManager.INSTANCE.clearThemeOverride();
            }
        }
    }

    @Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\b\u0007\u0018\u0000 \u00132\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001\u0013B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J$\u0010\t\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007H\u0014J\b\u0010\n\u001a\u00020\u000bH\u0016J\u0010\u0010\f\u001a\u00020\u00022\u0006\u0010\r\u001a\u00020\u000eH\u0014J\u001a\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\b\u0010\u0012\u001a\u0004\u0018\u00010\u000bH\u0017R*\u0010\u0006\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0014"}, d2 = {"Lcom/discord/chat/messagemanager/MessageViewManagers$SystemMessageViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/discord/chat/presentation/message/system/SystemMessageWrapperView;", "Lcom/facebook/react/viewmanagers/DCDSystemMessageViewManagerInterface;", "<init>", "()V", "delegate", "Lcom/facebook/react/viewmanagers/DCDSystemMessageViewManagerDelegate;", "kotlin.jvm.PlatformType", "getDelegate", "getName", "", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "setRow", "", "view", "value", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @ReactModule(name = SystemMessageViewManager.NAME)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class SystemMessageViewManager extends ViewGroupManager<SystemMessageWrapperView> implements DCDSystemMessageViewManagerInterface<SystemMessageWrapperView> {
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        public static final String NAME = "DCDSystemMessageView";
        @NotNull
        private final DCDSystemMessageViewManagerDelegate<SystemMessageWrapperView, SystemMessageViewManager> delegate;

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/chat/messagemanager/MessageViewManagers$SystemMessageViewManager$Companion;", "", "<init>", "()V", "NAME", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        public SystemMessageViewManager() {
            super(null, 1, null);
            this.delegate = new DCDSystemMessageViewManagerDelegate<>(this);
        }

        @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
        @NotNull
        public String getName() {
            return NAME;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.react.uimanager.ViewManager
        @NotNull
        public SystemMessageWrapperView createViewInstance(@NotNull ThemedReactContext reactContext) {
            Intrinsics.checkNotNullParameter(reactContext, "reactContext");
            return new SystemMessageWrapperView(reactContext, null, 2, null);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.react.uimanager.ViewManager
        @NotNull
        public DCDSystemMessageViewManagerDelegate<SystemMessageWrapperView, SystemMessageViewManager> getDelegate() {
            return this.delegate;
        }

        @Override // com.facebook.react.viewmanagers.DCDSystemMessageViewManagerInterface
        @ReactProp(name = "row")
        public void setRow(@NotNull SystemMessageWrapperView view, String str) {
            Intrinsics.checkNotNullParameter(view, "view");
            if (str != null) {
                MessageViewManagers messageViewManagers = MessageViewManagers.INSTANCE;
                MessageRow convertRowJsonToMessageRow = messageViewManagers.convertRowJsonToMessageRow(str);
                MessageBase message = convertRowJsonToMessageRow.getMessage();
                Intrinsics.checkNotNull(message, "null cannot be cast to non-null type com.discord.chat.bridge.Message");
                MessageContext messageContext = MessageContextKt.getMessageContext(convertRowJsonToMessageRow);
                Context context = view.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                view.setMessage((Message) message, messageContext, messageViewManagers.getEventHandler(convertRowJsonToMessageRow, context));
            }
        }
    }

    static {
        ReactEvents createChatReactEvents = CreateChatReactEventsKt.createChatReactEvents();
        createChatReactEvents.exportEventConstants();
        reactEvents = createChatReactEvents;
    }

    private MessageViewManagers() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final MessageRow convertRowJsonToMessageRow(String str) {
        Json json2 = json;
        json2.a();
        Object b10 = json2.b(Row.Companion.serializer(), str);
        Intrinsics.checkNotNull(b10, "null cannot be cast to non-null type com.discord.chat.bridge.row.MessageRow");
        return (MessageRow) b10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ChatEventHandler getEventHandler(final MessageRow messageRow, Context context) {
        if (messageRow.getReactTag() != null) {
            return new ChatViewEventHandler(context, reactEvents, new Function0() { // from class: com.discord.chat.messagemanager.a
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    int eventHandler$lambda$2;
                    eventHandler$lambda$2 = MessageViewManagers.getEventHandler$lambda$2(MessageRow.this);
                    return Integer.valueOf(eventHandler$lambda$2);
                }
            });
        }
        return ChatEventHandler.Empty.INSTANCE;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int getEventHandler$lambda$2(MessageRow messageRow) {
        return messageRow.getReactTag().intValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit json$lambda$0(JsonBuilder Json) {
        Intrinsics.checkNotNullParameter(Json, "$this$Json");
        Json.c(true);
        return Unit.f33298a;
    }
}
