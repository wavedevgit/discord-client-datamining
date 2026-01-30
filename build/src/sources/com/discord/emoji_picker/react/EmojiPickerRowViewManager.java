package com.discord.emoji_picker.react;

import com.discord.emoji_picker.EmojiPickerRowView;
import com.discord.emoji_picker.react_events.OnLongPressEmojiEvent;
import com.discord.emoji_picker.react_events.OnPressEmojiEvent;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.EmojiPickerRowViewManagerInterface;
import ir.v;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = EmojiPickerRowViewManager.NAME)
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010%\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0001\u0018\u0000 \u00152\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001\u0015B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0006\u001a\u00020\u0007H\u0016J\u0010\u0010\n\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\fH\u0014J\u0014\u0010\r\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u000f0\u000eH\u0016J\u001a\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00022\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014H\u0017R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0016"}, d2 = {"Lcom/discord/emoji_picker/react/EmojiPickerRowViewManager;", "Lcom/facebook/react/uimanager/SimpleViewManager;", "Lcom/discord/emoji_picker/EmojiPickerRowView;", "Lcom/facebook/react/viewmanagers/EmojiPickerRowViewManagerInterface;", "<init>", "()V", "getName", "", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "getExportedCustomDirectEventTypeConstants", "", "", "setRowData", "", "view", "data", "Lcom/facebook/react/bridge/ReadableMap;", "Companion", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class EmojiPickerRowViewManager extends SimpleViewManager<EmojiPickerRowView> implements EmojiPickerRowViewManagerInterface<EmojiPickerRowView> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "EmojiPickerRowView";
    @NotNull
    private final ReactEvents reactEvents = new ReactEvents(v.a("onPressEmoji", Reflection.getOrCreateKotlinClass(OnPressEmojiEvent.class)), v.a("onLongPressEmoji", Reflection.getOrCreateKotlinClass(OnLongPressEmojiEvent.class)));

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/emoji_picker/react/EmojiPickerRowViewManager$Companion;", "", "<init>", "()V", "NAME", "", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createViewInstance$lambda$2$lambda$0(EmojiPickerRowViewManager emojiPickerRowViewManager, ThemedReactContext themedReactContext, EmojiPickerRowView emojiPickerRowView, String emojiName) {
        Intrinsics.checkNotNullParameter(emojiName, "emojiName");
        emojiPickerRowViewManager.reactEvents.emitEvent(themedReactContext, emojiPickerRowView, new OnPressEmojiEvent(emojiName, (String) null, 2, (DefaultConstructorMarker) null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createViewInstance$lambda$2$lambda$1(EmojiPickerRowViewManager emojiPickerRowViewManager, ThemedReactContext themedReactContext, EmojiPickerRowView emojiPickerRowView, String emojiName) {
        Intrinsics.checkNotNullParameter(emojiName, "emojiName");
        emojiPickerRowViewManager.reactEvents.emitEvent(themedReactContext, emojiPickerRowView, new OnLongPressEmojiEvent(emojiName, (String) null, 2, (DefaultConstructorMarker) null));
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

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public EmojiPickerRowView createViewInstance(@NotNull final ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        final EmojiPickerRowView emojiPickerRowView = new EmojiPickerRowView(reactContext);
        emojiPickerRowView.setOnPressEmoji(new Function1() { // from class: com.discord.emoji_picker.react.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit createViewInstance$lambda$2$lambda$0;
                createViewInstance$lambda$2$lambda$0 = EmojiPickerRowViewManager.createViewInstance$lambda$2$lambda$0(EmojiPickerRowViewManager.this, reactContext, emojiPickerRowView, (String) obj);
                return createViewInstance$lambda$2$lambda$0;
            }
        });
        emojiPickerRowView.setOnLongPressEmoji(new Function1() { // from class: com.discord.emoji_picker.react.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit createViewInstance$lambda$2$lambda$1;
                createViewInstance$lambda$2$lambda$1 = EmojiPickerRowViewManager.createViewInstance$lambda$2$lambda$1(EmojiPickerRowViewManager.this, reactContext, emojiPickerRowView, (String) obj);
                return createViewInstance$lambda$2$lambda$1;
            }
        });
        return emojiPickerRowView;
    }

    @Override // com.facebook.react.viewmanagers.EmojiPickerRowViewManagerInterface
    @ReactProp(name = "rowData")
    public void setRowData(@NotNull EmojiPickerRowView view, ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (readableMap != null) {
            view.setRowData(EmojiPickerRowDataSerializationUtilsKt.deserializeEmojiPickerRowData(readableMap));
        }
    }
}
