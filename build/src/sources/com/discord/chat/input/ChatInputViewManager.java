package com.discord.chat.input;

import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import android.net.Uri;
import android.view.Window;
import at.f;
import com.discord.chat.input.bridge.ChatInputNode;
import com.discord.chat.input.events.OnContentSizeChangeEvent;
import com.discord.chat.input.events.OnEndBlurEvent;
import com.discord.chat.input.events.OnFocusEvent;
import com.discord.chat.input.events.OnPasteCommandEvent;
import com.discord.chat.input.events.OnPasteImageEvent;
import com.discord.chat.input.events.OnRequestSendEvent;
import com.discord.chat.input.events.OnSelectionOrTextChangeEvent;
import com.discord.chat.input.events.OnTextFlushedEvent;
import com.discord.chat.input.views.ChatInputRootView;
import com.discord.keyboard.KeyboardManager;
import com.discord.misc.utilities.keyboard.KeyboardExtensionsKt;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.viewmanagers.DCDChatInputManagerDelegate;
import com.facebook.react.viewmanagers.DCDChatInputManagerInterface;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import ir.v;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonBuilder;
import kotlinx.serialization.json.b;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000t\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\b\n\u0002\u0010\u0007\n\u0002\b\t\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0013\n\u0002\u0010%\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u0000 N2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001NB\u0007¢\u0006\u0004\b\u0004\u0010\u0005J$\u0010\u000b\u001a\u001e\u0012\f\u0012\n \n*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \n*\u0004\u0018\u00010\u00000\u00000\tH\u0014J\b\u0010\f\u001a\u00020\rH\u0016J\u0010\u0010\u0012\u001a\u00020\u00022\u0006\u0010\u0013\u001a\u00020\u0014H\u0014J\u0010\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0002H\u0016J\u0018\u0010\u0018\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\u0006\u0010\u0019\u001a\u00020\u001aH\u0016J\u0018\u0010\u001b\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\u0006\u0010\u001c\u001a\u00020\u001aH\u0016J\u001a\u0010\u001d\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\b\u0010\u001e\u001a\u0004\u0018\u00010\rH\u0016J\u001a\u0010\u001f\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\b\u0010 \u001a\u0004\u0018\u00010\rH\u0016J!\u0010!\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u00022\b\u0010\"\u001a\u0004\u0018\u00010#H\u0016¢\u0006\u0002\u0010$J\u001a\u0010%\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\b\u0010&\u001a\u0004\u0018\u00010\rH\u0016J\u001a\u0010'\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\b\u0010(\u001a\u0004\u0018\u00010\rH\u0016J\u001f\u0010)\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\b\u0010\"\u001a\u0004\u0018\u00010\u001aH\u0016¢\u0006\u0002\u0010*J\u0018\u0010+\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\u0006\u0010,\u001a\u00020-H\u0016J\u001a\u0010.\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\b\u0010/\u001a\u0004\u0018\u00010\rH\u0016J\u001a\u00100\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\b\u00101\u001a\u0004\u0018\u00010\rH\u0016J\"\u00102\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\u0006\u00103\u001a\u00020\r2\b\u00104\u001a\u0004\u0018\u000105H\u0016J\u001a\u00106\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\b\u00107\u001a\u0004\u0018\u00010\rH\u0016J\u0018\u00108\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\u0006\u00109\u001a\u00020\rH\u0016J\u0010\u0010:\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0002H\u0016J\u0010\u0010;\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0002H\u0016J\u0010\u0010<\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0002H\u0016J\u0010\u0010=\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0002H\u0016J\u0010\u0010>\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0002H\u0016J \u0010?\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\u0006\u0010@\u001a\u00020-2\u0006\u0010A\u001a\u00020-H\u0016J\"\u0010B\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\u0006\u0010C\u001a\u00020\r2\b\u0010D\u001a\u0004\u0018\u00010\rH\u0016JB\u0010E\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00022\u0006\u0010@\u001a\u00020-2\u0006\u0010A\u001a\u00020-2\u0006\u00107\u001a\u00020\r2\u0006\u0010F\u001a\u00020\r2\u0006\u0010G\u001a\u00020\u001a2\b\u0010D\u001a\u0004\u0018\u00010\rH\u0016J\u0014\u0010H\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020J0IH\u0016J\u0016\u0010K\u001a\b\u0012\u0004\u0012\u00020M0L2\u0006\u0010C\u001a\u00020\rH\u0002R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R*\u0010\b\u001a\u001e\u0012\f\u0012\n \n*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \n*\u0004\u0018\u00010\u00000\u00000\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u000e\u001a\u00020\u000fX\u0080\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011¨\u0006O"}, d2 = {"Lcom/discord/chat/input/ChatInputViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/discord/chat/input/views/ChatInputRootView;", "Lcom/facebook/react/viewmanagers/DCDChatInputManagerInterface;", "<init>", "()V", "json", "Lkotlinx/serialization/json/Json;", "delegate", "Lcom/facebook/react/viewmanagers/DCDChatInputManagerDelegate;", "kotlin.jvm.PlatformType", "getDelegate", "getName", "", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "getReactEvents$chat_input_release", "()Lcom/discord/reactevents/ReactEvents;", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "onDropViewInstance", "", "view", "setEditable", "editable", "", "setShouldShowCursor", "shouldShowCursor", "setPlaceholder", ReactTextInputShadowNode.PROP_PLACEHOLDER, "setPlaceholderColor", "placeholderColor", "setMaxHeight", "value", "", "(Lcom/discord/chat/input/views/ChatInputRootView;Ljava/lang/Float;)V", "setMarkAsSpoilerTitle", "spoilerTitle", "setTextColor", "textColor", "setSetNoExtractUI", "(Lcom/discord/chat/input/views/ChatInputRootView;Ljava/lang/Boolean;)V", "setKeyboardAppearance", "keyboardAppearance", "", "setSelectionColor", "selectionColor", "setKeyboardType", "keyboardType", "receiveCommand", "commandId", "args", "Lcom/facebook/react/bridge/ReadableArray;", ChatInputViewManager.COMMAND_SET_TEXT, "text", ChatInputViewManager.COMMAND_FLUSH_TEXT, "requestId", ChatInputViewManager.COMMAND_FOCUS, ChatInputViewManager.COMMAND_BLUR, ChatInputViewManager.COMMAND_OPEN_CUSTOM_KEYBOARD, ChatInputViewManager.COMMAND_OPEN_SYSTEM_KEYBOARD, ChatInputViewManager.COMMAND_BACKSPACE, ChatInputViewManager.COMMAND_SET_SELECTED_RANGE, "location", "length", ChatInputViewManager.COMMAND_UPDATE_TEXT_BLOCKS, "blocks", "editId", ChatInputViewManager.COMMAND_REPLACE_RANGE, "styleBlocks", "keepCursorPosition", "getExportedCustomDirectEventTypeConstants", "", "", "decodeStyleBlocks", "", "Lcom/discord/chat/input/bridge/ChatInputNode;", "Companion", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ReactModule(name = ChatInputViewManager.NAME)
@SourceDebugExtension({"SMAP\nChatInputViewManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChatInputViewManager.kt\ncom/discord/chat/input/ChatInputViewManager\n+ 2 Color.kt\nandroidx/core/graphics/ColorKt\n+ 3 Json.kt\nkotlinx/serialization/json/Json\n*L\n1#1,321:1\n404#2:322\n404#2:323\n147#3:324\n*S KotlinDebug\n*F\n+ 1 ChatInputViewManager.kt\ncom/discord/chat/input/ChatInputViewManager\n*L\n131#1:322\n148#1:323\n319#1:324\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatInputViewManager extends ViewGroupManager<ChatInputRootView> implements DCDChatInputManagerInterface<ChatInputRootView> {
    @NotNull
    private static final String COMMAND_BACKSPACE = "backspace";
    @NotNull
    private static final String COMMAND_BLUR = "blur";
    @NotNull
    private static final String COMMAND_FLUSH_TEXT = "flushText";
    @NotNull
    private static final String COMMAND_FOCUS = "focus";
    @NotNull
    private static final String COMMAND_OPEN_CUSTOM_KEYBOARD = "openCustomKeyboard";
    @NotNull
    private static final String COMMAND_OPEN_SYSTEM_KEYBOARD = "openSystemKeyboard";
    @NotNull
    private static final String COMMAND_REPLACE_RANGE = "replaceRange";
    @NotNull
    private static final String COMMAND_SET_SELECTED_RANGE = "setSelectedRange";
    @NotNull
    private static final String COMMAND_SET_TEXT = "setText";
    @NotNull
    private static final String COMMAND_UPDATE_TEXT_BLOCKS = "updateTextBlocks";
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "DCDChatInput";
    @NotNull
    private final DCDChatInputManagerDelegate<ChatInputRootView, ChatInputViewManager> delegate;
    @NotNull
    private final Json json;
    @NotNull
    private final ReactEvents reactEvents;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u000b\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/discord/chat/input/ChatInputViewManager$Companion;", "", "<init>", "()V", "NAME", "", "COMMAND_BACKSPACE", "COMMAND_BLUR", "COMMAND_FOCUS", "COMMAND_OPEN_CUSTOM_KEYBOARD", "COMMAND_OPEN_SYSTEM_KEYBOARD", "COMMAND_REPLACE_RANGE", "COMMAND_SET_SELECTED_RANGE", "COMMAND_SET_TEXT", "COMMAND_FLUSH_TEXT", "COMMAND_UPDATE_TEXT_BLOCKS", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public ChatInputViewManager() {
        super(null, 1, null);
        this.json = b.b(null, new Function1() { // from class: com.discord.chat.input.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit json$lambda$0;
                json$lambda$0 = ChatInputViewManager.json$lambda$0((JsonBuilder) obj);
                return json$lambda$0;
            }
        }, 1, null);
        this.delegate = new DCDChatInputManagerDelegate<>(this);
        this.reactEvents = new ReactEvents(v.a("onChangeContentSize", Reflection.getOrCreateKotlinClass(OnContentSizeChangeEvent.class)), v.a("onEndBlur", Reflection.getOrCreateKotlinClass(OnEndBlurEvent.class)), v.a("onBeginFocus", Reflection.getOrCreateKotlinClass(OnFocusEvent.class)), v.a("onSelectionOrTextChange", Reflection.getOrCreateKotlinClass(OnSelectionOrTextChangeEvent.class)), v.a("onPasteImage", Reflection.getOrCreateKotlinClass(OnPasteImageEvent.class)), v.a("onRequestSend", Reflection.getOrCreateKotlinClass(OnRequestSendEvent.class)), v.a("onPasteCommand", Reflection.getOrCreateKotlinClass(OnPasteCommandEvent.class)), v.a("onTextFlushed", Reflection.getOrCreateKotlinClass(OnTextFlushedEvent.class)));
    }

    private final List<ChatInputNode> decodeStyleBlocks(String str) {
        Json json = this.json;
        json.a();
        return (List) json.b(new f(ChatInputNode.Companion.serializer()), str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit json$lambda$0(JsonBuilder Json) {
        Intrinsics.checkNotNullParameter(Json, "$this$Json");
        Json.c(true);
        return Unit.f33298a;
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

    @NotNull
    public final ReactEvents getReactEvents$chat_input_release() {
        return this.reactEvents;
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void setKeyboardAppearance(@NotNull ChatInputRootView view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void setKeyboardType(@NotNull ChatInputRootView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void setMarkAsSpoilerTitle(@NotNull ChatInputRootView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void setMaxHeight(ChatInputRootView chatInputRootView, Float f10) {
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void setSelectionColor(@NotNull ChatInputRootView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void backspace(@NotNull ChatInputRootView view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.backspace();
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void blur(@NotNull ChatInputRootView view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.clearInputFocus();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ChatInputRootView createViewInstance(@NotNull final ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        final ChatInputRootView chatInputRootView = new ChatInputRootView(reactContext, null, 0, 6, null);
        chatInputRootView.setListener(new ChatInputRootView.ChatInputListener() { // from class: com.discord.chat.input.ChatInputViewManager$createViewInstance$1$1
            @Override // com.discord.chat.input.views.ChatInputRootView.ChatInputListener
            public void onCommandInserted(String data) {
                Intrinsics.checkNotNullParameter(data, "data");
                ChatInputViewManager.this.getReactEvents$chat_input_release().emitEvent(reactContext, chatInputRootView, new OnPasteCommandEvent(data));
            }

            @Override // com.discord.chat.input.views.ChatInputRootView.ChatInputListener
            public void onContentSizeChange(int i10, int i11) {
                ChatInputViewManager.this.getReactEvents$chat_input_release().emitEvent(reactContext, chatInputRootView, new OnContentSizeChangeEvent(i10, i11));
            }

            @Override // com.discord.chat.input.views.ChatInputRootView.ChatInputListener
            public void onEndBlur(String text) {
                Intrinsics.checkNotNullParameter(text, "text");
                ChatInputViewManager.this.getReactEvents$chat_input_release().emitEvent(reactContext, chatInputRootView, new OnEndBlurEvent(text));
            }

            @Override // com.discord.chat.input.views.ChatInputRootView.ChatInputListener
            public void onFocus(int i10, int i11) {
                ChatInputViewManager.this.getReactEvents$chat_input_release().emitEvent(reactContext, chatInputRootView, new OnFocusEvent(i10, i11, 0, 4, (DefaultConstructorMarker) null));
            }

            @Override // com.discord.chat.input.views.ChatInputRootView.ChatInputListener
            public void onImageInserted(Uri uri) {
                Intrinsics.checkNotNullParameter(uri, "uri");
                ReactEvents reactEvents$chat_input_release = ChatInputViewManager.this.getReactEvents$chat_input_release();
                ThemedReactContext themedReactContext = reactContext;
                ChatInputRootView chatInputRootView2 = chatInputRootView;
                String uri2 = uri.toString();
                Intrinsics.checkNotNullExpressionValue(uri2, "toString(...)");
                reactEvents$chat_input_release.emitEvent(themedReactContext, chatInputRootView2, new OnPasteImageEvent(uri2, reactContext.getContentResolver().getType(uri)));
            }

            @Override // com.discord.chat.input.views.ChatInputRootView.ChatInputListener
            public void onRequestSend() {
                ChatInputViewManager.this.getReactEvents$chat_input_release().emitEvent(reactContext, chatInputRootView, new OnRequestSendEvent());
            }

            @Override // com.discord.chat.input.views.ChatInputRootView.ChatInputListener
            public void onTextOrSelectionChanged(int i10, int i11, String text, String editId) {
                Intrinsics.checkNotNullParameter(text, "text");
                Intrinsics.checkNotNullParameter(editId, "editId");
                ChatInputViewManager.this.getReactEvents$chat_input_release().emitEvent(reactContext, chatInputRootView, new OnSelectionOrTextChangeEvent(i10, i11, text, editId));
            }
        });
        KeyboardManager.INSTANCE.addKeyboardListener(chatInputRootView);
        return chatInputRootView;
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void flushText(@NotNull ChatInputRootView view, @NotNull String requestId) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(requestId, "requestId");
        this.reactEvents.emitEvent(view, new OnTextFlushedEvent(view.getText(), requestId));
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void focus(@NotNull ChatInputRootView view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.requestInputFocus();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public DCDChatInputManagerDelegate<ChatInputRootView, ChatInputViewManager> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onDropViewInstance(@NotNull ChatInputRootView view) {
        Intrinsics.checkNotNullParameter(view, "view");
        KeyboardManager.INSTANCE.removeKeyboardListener(view);
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void openCustomKeyboard(@NotNull ChatInputRootView view) {
        Window window;
        Intrinsics.checkNotNullParameter(view, "view");
        Context context = view.getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        Activity currentActivity = ((ReactContext) context).getCurrentActivity();
        if (currentActivity == null || (window = currentActivity.getWindow()) == null) {
            return;
        }
        KeyboardExtensionsKt.hideKeyboard(view, window);
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void openSystemKeyboard(@NotNull ChatInputRootView view) {
        Window window;
        Intrinsics.checkNotNullParameter(view, "view");
        Context context = view.getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        Activity currentActivity = ((ReactContext) context).getCurrentActivity();
        if (currentActivity == null || (window = currentActivity.getWindow()) == null) {
            return;
        }
        view.showKeyboard(window);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public void receiveCommand(@NotNull ChatInputRootView view, @NotNull String commandId, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(commandId, "commandId");
        switch (commandId.hashCode()) {
            case -1505238496:
                if (commandId.equals(COMMAND_SET_SELECTED_RANGE) && readableArray != null) {
                    setSelectedRange(view, readableArray.getInt(0), readableArray.getInt(1));
                    return;
                }
                return;
            case -1482107872:
                if (commandId.equals(COMMAND_OPEN_SYSTEM_KEYBOARD)) {
                    openSystemKeyboard(view);
                    return;
                }
                return;
            case -577056175:
                if (commandId.equals(COMMAND_FLUSH_TEXT) && readableArray != null) {
                    String string = readableArray.getString(0);
                    Intrinsics.checkNotNull(string);
                    flushText(view, string);
                    return;
                }
                return;
            case 3027047:
                if (commandId.equals(COMMAND_BLUR)) {
                    blur(view);
                    return;
                }
                return;
            case 73995964:
                if (commandId.equals(COMMAND_UPDATE_TEXT_BLOCKS) && readableArray != null) {
                    String string2 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string2);
                    updateTextBlocks(view, string2, readableArray.getString(1));
                    return;
                }
                return;
            case 97604824:
                if (commandId.equals(COMMAND_FOCUS)) {
                    focus(view);
                    return;
                }
                return;
            case 448538345:
                if (commandId.equals(COMMAND_REPLACE_RANGE) && readableArray != null) {
                    int i10 = readableArray.getInt(0);
                    int i11 = readableArray.getInt(1);
                    String string3 = readableArray.getString(2);
                    Intrinsics.checkNotNull(string3);
                    String string4 = readableArray.getString(3);
                    Intrinsics.checkNotNull(string4);
                    replaceRange(view, i10, i11, string3, string4, readableArray.getBoolean(4), readableArray.getString(5));
                    return;
                }
                break;
            case 1353507967:
                if (commandId.equals(COMMAND_BACKSPACE)) {
                    backspace(view);
                    return;
                }
                break;
            case 1520339810:
                if (commandId.equals(COMMAND_OPEN_CUSTOM_KEYBOARD)) {
                    openCustomKeyboard(view);
                    return;
                }
                break;
            case 1984984239:
                if (commandId.equals(COMMAND_SET_TEXT) && readableArray != null) {
                    setText(view, readableArray.getString(0));
                    return;
                }
                break;
        }
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void replaceRange(@NotNull ChatInputRootView view, int i10, int i11, @NotNull String text, @NotNull String styleBlocks, boolean z10, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(styleBlocks, "styleBlocks");
        view.replaceRange(i10, i11, text, decodeStyleBlocks(styleBlocks), z10, str);
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void setEditable(@NotNull ChatInputRootView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setEditTextEnabled(z10);
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void setPlaceholder(@NotNull ChatInputRootView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setHint(str);
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void setPlaceholderColor(@NotNull ChatInputRootView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (str != null) {
            view.setHintTextColor(Color.parseColor(str));
        }
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void setSelectedRange(@NotNull ChatInputRootView view, int i10, int i11) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSelection(i10, i11 + i10);
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void setSetNoExtractUI(@NotNull ChatInputRootView view, Boolean bool) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setNoExtractUI(Intrinsics.areEqual(bool, Boolean.TRUE));
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void setShouldShowCursor(@NotNull ChatInputRootView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setCursorVisible(z10);
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void setText(@NotNull ChatInputRootView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (str != null) {
            view.setText(str);
            ChatInputRootView.setSelection$default(view, str.length(), 0, 2, null);
        }
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void setTextColor(@NotNull ChatInputRootView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (str != null) {
            view.setTextColor(Color.parseColor(str));
        }
    }

    @Override // com.facebook.react.viewmanagers.DCDChatInputManagerInterface
    public void updateTextBlocks(@NotNull ChatInputRootView view, @NotNull String blocks, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(blocks, "blocks");
        if (str == null) {
            str = "";
        }
        view.clearAndApplyChatNodes(str, decodeStyleBlocks(blocks));
    }
}
