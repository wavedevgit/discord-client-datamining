package com.discord.chat.presentation.message.view.botuikit.react;

import android.content.res.Resources;
import com.discord.chat.bridge.botuikit.Component;
import com.discord.chat.bridge.botuikit.ComponentSerializer;
import com.discord.chat.bridge.botuikit.TextDisplayComponent;
import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.InlineCodeContentNode;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.contentnode.SoundmojiContentNode;
import com.discord.chat.presentation.message.messagepart.MessageMargins;
import com.discord.chat.presentation.message.view.botuikit.ComponentContext;
import com.discord.chat.presentation.message.view.botuikit.MarkdownTextRenderEventHandlers;
import com.discord.chat.presentation.message.view.botuikit.MarkdownTextRenderOptions;
import com.discord.chat.presentation.message.view.botuikit.WidthInfo;
import com.discord.chat.presentation.message.view.botuikit.components.TextDisplayComponentView;
import com.discord.chat.presentation.message.view.botuikit.react.deserialization.ComponentDeserializerKt;
import com.discord.chat.reactevents.LongPressAttachmentLinkData;
import com.discord.chat.reactevents.LongPressLinkData;
import com.discord.chat.reactevents.TapAttachmentLinkData;
import com.discord.chat.reactevents.TapEmojiData;
import com.discord.chat.reactevents.TapInlineCodeEvent;
import com.discord.chat.reactevents.TapLinkData;
import com.discord.chat.reactevents.TapMentionData;
import com.discord.chat.reactevents.TapTimestampEvent;
import com.discord.misc.utilities.measure.ViewMeasureExtensionsKt;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.serialization.json.Json;
import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010%\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u0000 \u001e2\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0001\u001eB\u0007¢\u0006\u0004\b\u0003\u0010\u0004J\u0014\u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\f0\bH\u0016J\b\u0010\r\u001a\u00020\u000bH\u0016J\u0010\u0010\u000e\u001a\u00020\u00022\u0006\u0010\u000f\u001a\u00020\u0010H\u0014J\u0010\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u0002H\u0016J\u0018\u0010\u0014\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0018\u0010\u0017\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u0018\u001a\u00020\u0016H\u0007J\u0010\u0010\u0019\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u0002H\u0002J\u0018\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u001c\u001a\u00020\u001dH\u0002R\u000e\u0010\u0005\u001a\u00020\u0006X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\t0\bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001f"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/react/TextDisplayComponentViewManager;", "Lcom/facebook/react/uimanager/SimpleViewManager;", "Lcom/discord/chat/presentation/message/view/botuikit/components/TextDisplayComponentView;", "<init>", "()V", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "viewToDataMapping", "", "Lcom/discord/chat/presentation/message/view/botuikit/react/PartialData;", "getExportedCustomDirectEventTypeConstants", "", "", "getName", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "onDropViewInstance", "", "view", "setModel", "model", "Lcom/facebook/react/bridge/ReadableMap;", "setMarkdownTextRenderOptions", "options", "tryConfigure", "createTextDisplayComponentContext", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentContext;", "data", "Lcom/discord/chat/presentation/message/view/botuikit/react/Data;", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ReactModule(name = TextDisplayComponentViewManager.NAME)
@SourceDebugExtension({"SMAP\nTextDisplayComponentViewManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TextDisplayComponentViewManager.kt\ncom/discord/chat/presentation/message/view/botuikit/react/TextDisplayComponentViewManager\n+ 2 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n+ 3 ComponentDeserializer.kt\ncom/discord/chat/presentation/message/view/botuikit/react/deserialization/ComponentDeserializerKt\n*L\n1#1,202:1\n384#2,7:203\n384#2,7:220\n14#3,10:210\n*S KotlinDebug\n*F\n+ 1 TextDisplayComponentViewManager.kt\ncom/discord/chat/presentation/message/view/botuikit/react/TextDisplayComponentViewManager\n*L\n83#1:203,7\n91#1:220,7\n84#1:210,10\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TextDisplayComponentViewManager extends SimpleViewManager<TextDisplayComponentView> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "TextDisplayComponentView";
    @NotNull
    private final ReactEvents reactEvents = new ReactEvents(jr.v.a("onTapLink", Reflection.getOrCreateKotlinClass(TapLinkData.class)), jr.v.a("onLongPressLink", Reflection.getOrCreateKotlinClass(LongPressLinkData.class)), jr.v.a("onTapAttachmentLink", Reflection.getOrCreateKotlinClass(TapAttachmentLinkData.class)), jr.v.a("onLongPressAttachmentLink", Reflection.getOrCreateKotlinClass(LongPressAttachmentLinkData.class)), jr.v.a("onTapMention", Reflection.getOrCreateKotlinClass(TapMentionData.class)), jr.v.a("onTapTimestamp", Reflection.getOrCreateKotlinClass(TapTimestampEvent.class)), jr.v.a("onTapInlineCode", Reflection.getOrCreateKotlinClass(TapInlineCodeEvent.class)), jr.v.a("onTapEmoji", Reflection.getOrCreateKotlinClass(TapEmojiData.class)));
    @NotNull
    private final Map<TextDisplayComponentView, PartialData> viewToDataMapping = new LinkedHashMap();

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/react/TextDisplayComponentViewManager$Companion;", "", "<init>", "()V", "NAME", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    private final ComponentContext createTextDisplayComponentContext(final TextDisplayComponentView textDisplayComponentView, Data data) {
        Resources resources = textDisplayComponentView.getResources();
        Intrinsics.checkNotNullExpressionValue(resources, "getResources(...)");
        MessageMargins messageMargins = new MessageMargins(resources);
        String containerId = data.getMarkdownTextRenderOptions().getContainerId();
        ComponentContextDefaults componentContextDefaults = ComponentContextDefaults.INSTANCE;
        return new ComponentContext(messageMargins, containerId, componentContextDefaults.getGENERAL_HANDLERS(), data.getMarkdownTextRenderOptions(), new MarkdownTextRenderEventHandlers(new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.c0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit createTextDisplayComponentContext$lambda$2;
                createTextDisplayComponentContext$lambda$2 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$2(TextDisplayComponentViewManager.this, textDisplayComponentView, (LinkContentNode) obj);
                return createTextDisplayComponentContext$lambda$2;
            }
        }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.l0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit createTextDisplayComponentContext$lambda$3;
                createTextDisplayComponentContext$lambda$3 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$3(TextDisplayComponentViewManager.this, textDisplayComponentView, (LinkContentNode) obj);
                return createTextDisplayComponentContext$lambda$3;
            }
        }, new Function3() { // from class: com.discord.chat.presentation.message.view.botuikit.react.m0
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj, Object obj2, Object obj3) {
                Unit createTextDisplayComponentContext$lambda$4;
                createTextDisplayComponentContext$lambda$4 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$4((String) obj, (String) obj2, (String) obj3);
                return createTextDisplayComponentContext$lambda$4;
            }
        }, new Function4() { // from class: com.discord.chat.presentation.message.view.botuikit.react.n0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                Unit createTextDisplayComponentContext$lambda$5;
                createTextDisplayComponentContext$lambda$5 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$5((String) obj, (String) obj2, (String) obj3, (String) obj4);
                return createTextDisplayComponentContext$lambda$5;
            }
        }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.o0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit createTextDisplayComponentContext$lambda$6;
                createTextDisplayComponentContext$lambda$6 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$6(TextDisplayComponentViewManager.this, textDisplayComponentView, (String) obj);
                return createTextDisplayComponentContext$lambda$6;
            }
        }, new Function2() { // from class: com.discord.chat.presentation.message.view.botuikit.react.p0
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit createTextDisplayComponentContext$lambda$7;
                createTextDisplayComponentContext$lambda$7 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$7(TextDisplayComponentViewManager.this, textDisplayComponentView, (String) obj, (String) obj2);
                return createTextDisplayComponentContext$lambda$7;
            }
        }, new Function4() { // from class: com.discord.chat.presentation.message.view.botuikit.react.d0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                Unit createTextDisplayComponentContext$lambda$8;
                createTextDisplayComponentContext$lambda$8 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$8(TextDisplayComponentViewManager.this, textDisplayComponentView, (String) obj, (String) obj2, (String) obj3, (String) obj4);
                return createTextDisplayComponentContext$lambda$8;
            }
        }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit createTextDisplayComponentContext$lambda$9;
                createTextDisplayComponentContext$lambda$9 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$9((CommandMentionContentNode) obj);
                return createTextDisplayComponentContext$lambda$9;
            }
        }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.f0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit createTextDisplayComponentContext$lambda$10;
                createTextDisplayComponentContext$lambda$10 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$10((CommandMentionContentNode) obj);
                return createTextDisplayComponentContext$lambda$10;
            }
        }, new Function0() { // from class: com.discord.chat.presentation.message.view.botuikit.react.g0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit createTextDisplayComponentContext$lambda$11;
                createTextDisplayComponentContext$lambda$11 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$11(TextDisplayComponentViewManager.this, textDisplayComponentView);
                return createTextDisplayComponentContext$lambda$11;
            }
        }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.h0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit createTextDisplayComponentContext$lambda$12;
                createTextDisplayComponentContext$lambda$12 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$12(TextDisplayComponentViewManager.this, textDisplayComponentView, (String) obj);
                return createTextDisplayComponentContext$lambda$12;
            }
        }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit createTextDisplayComponentContext$lambda$13;
                createTextDisplayComponentContext$lambda$13 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$13(TextDisplayComponentViewManager.this, textDisplayComponentView, (InlineCodeContentNode) obj);
                return createTextDisplayComponentContext$lambda$13;
            }
        }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.j0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit createTextDisplayComponentContext$lambda$14;
                createTextDisplayComponentContext$lambda$14 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$14(TextDisplayComponentViewManager.this, textDisplayComponentView, (EmojiContentNode) obj);
                return createTextDisplayComponentContext$lambda$14;
            }
        }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.k0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit createTextDisplayComponentContext$lambda$15;
                createTextDisplayComponentContext$lambda$15 = TextDisplayComponentViewManager.createTextDisplayComponentContext$lambda$15((SoundmojiContentNode) obj);
                return createTextDisplayComponentContext$lambda$15;
            }
        }), componentContextDefaults.getMEDIA_HANDLERS(), componentContextDefaults.getCOMPONENT_HANDLERS(), new WidthInfo(0, 0, 0, 4, null), false, false, false, true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$10(CommandMentionContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$11(TextDisplayComponentViewManager textDisplayComponentViewManager, TextDisplayComponentView textDisplayComponentView) {
        textDisplayComponentViewManager.tryConfigure(textDisplayComponentView);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$12(TextDisplayComponentViewManager textDisplayComponentViewManager, TextDisplayComponentView textDisplayComponentView, String timestamp) {
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        textDisplayComponentViewManager.reactEvents.emitEvent(textDisplayComponentView, new TapTimestampEvent(timestamp));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$13(TextDisplayComponentViewManager textDisplayComponentViewManager, TextDisplayComponentView textDisplayComponentView, InlineCodeContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        textDisplayComponentViewManager.reactEvents.emitEvent(textDisplayComponentView, new TapInlineCodeEvent(node));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$14(TextDisplayComponentViewManager textDisplayComponentViewManager, TextDisplayComponentView textDisplayComponentView, EmojiContentNode emojiNode) {
        Intrinsics.checkNotNullParameter(emojiNode, "emojiNode");
        textDisplayComponentViewManager.reactEvents.emitEvent(textDisplayComponentView, new TapEmojiData(emojiNode));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$15(SoundmojiContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$2(TextDisplayComponentViewManager textDisplayComponentViewManager, TextDisplayComponentView textDisplayComponentView, LinkContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        textDisplayComponentViewManager.reactEvents.emitEvent(textDisplayComponentView, new TapLinkData(null, node, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$3(TextDisplayComponentViewManager textDisplayComponentViewManager, TextDisplayComponentView textDisplayComponentView, LinkContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        textDisplayComponentViewManager.reactEvents.emitEvent(textDisplayComponentView, new LongPressLinkData(node.getUrl()));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$4(String str, String str2, String str3) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$5(String str, String str2, String str3, String str4) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$6(TextDisplayComponentViewManager textDisplayComponentViewManager, TextDisplayComponentView textDisplayComponentView, String attachmentUrl) {
        Intrinsics.checkNotNullParameter(attachmentUrl, "attachmentUrl");
        textDisplayComponentViewManager.reactEvents.emitEvent(textDisplayComponentView, new TapAttachmentLinkData(attachmentUrl));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$7(TextDisplayComponentViewManager textDisplayComponentViewManager, TextDisplayComponentView textDisplayComponentView, String attachmentUrl, String attachmentName) {
        Intrinsics.checkNotNullParameter(attachmentUrl, "attachmentUrl");
        Intrinsics.checkNotNullParameter(attachmentName, "attachmentName");
        textDisplayComponentViewManager.reactEvents.emitEvent(textDisplayComponentView, new LongPressAttachmentLinkData(attachmentUrl, attachmentName));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$8(TextDisplayComponentViewManager textDisplayComponentViewManager, TextDisplayComponentView textDisplayComponentView, String str, String channelId, String str2, String str3) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        textDisplayComponentViewManager.reactEvents.emitEvent(textDisplayComponentView, new TapMentionData(str, channelId, str2, str3));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createTextDisplayComponentContext$lambda$9(CommandMentionContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f33074a;
    }

    private final void tryConfigure(TextDisplayComponentView textDisplayComponentView) {
        Data data;
        PartialData partialData = this.viewToDataMapping.get(textDisplayComponentView);
        if (partialData != null && (data = partialData.toData()) != null) {
            textDisplayComponentView.configure(data.getComponent(), createTextDisplayComponentContext(textDisplayComponentView, data));
            ViewMeasureExtensionsKt.measureAndLayout(textDisplayComponentView);
        }
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

    @ReactProp(name = "markdownTextRenderOptions")
    public final void setMarkdownTextRenderOptions(@NotNull TextDisplayComponentView view, @NotNull ReadableMap options) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(options, "options");
        Map<TextDisplayComponentView, PartialData> map = this.viewToDataMapping;
        PartialData partialData = map.get(view);
        if (partialData == null) {
            partialData = new PartialData(null, null, 3, null);
            map.put(view, partialData);
        }
        PartialData partialData2 = partialData;
        String string = options.getString("containerId");
        if (string == null) {
            string = "";
        }
        partialData2.setMarkdownTextRenderOptions(new MarkdownTextRenderOptions(string, options.getBoolean("shouldAnimateEmoji"), options.getBoolean("shouldShowLinkDecorations"), options.getBoolean("shouldShowRoleDot"), options.getBoolean("shouldShowRoleOnName")));
        tryConfigure(view);
    }

    @ReactProp(name = "model")
    public final void setModel(@NotNull TextDisplayComponentView view, @NotNull ReadableMap model) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(model, "model");
        Map<TextDisplayComponentView, PartialData> map = this.viewToDataMapping;
        PartialData partialData = map.get(view);
        if (partialData == null) {
            partialData = new PartialData(null, null, 3, null);
            map.put(view, partialData);
        }
        PartialData partialData2 = partialData;
        try {
            Json json = ComponentDeserializerKt.getJson();
            ComponentSerializer componentSerializer = ComponentSerializer.INSTANCE;
            String jSONObject = new JSONObject(model.toHashMap()).toString();
            Intrinsics.checkNotNullExpressionValue(jSONObject, "toString(...)");
            Component component = (Component) json.b(componentSerializer, jSONObject);
            if (component instanceof TextDisplayComponent) {
                partialData2.setComponent((TextDisplayComponent) component);
                tryConfigure(view);
                return;
            }
            String simpleName = Reflection.getOrCreateKotlinClass(TextDisplayComponent.class).getSimpleName();
            String simpleName2 = Reflection.getOrCreateKotlinClass(component.getClass()).getSimpleName();
            throw new IllegalStateException(("Expected " + simpleName + " but got " + simpleName2).toString());
        } catch (Exception e10) {
            String simpleName3 = Reflection.getOrCreateKotlinClass(TextDisplayComponent.class).getSimpleName();
            String message = e10.getMessage();
            throw new IllegalStateException(("Error while deserializing " + simpleName3 + ": " + message).toString());
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public TextDisplayComponentView createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new TextDisplayComponentView(reactContext);
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onDropViewInstance(@NotNull TextDisplayComponentView view) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.viewToDataMapping.remove(view);
        super.onDropViewInstance((TextDisplayComponentViewManager) view);
    }
}
