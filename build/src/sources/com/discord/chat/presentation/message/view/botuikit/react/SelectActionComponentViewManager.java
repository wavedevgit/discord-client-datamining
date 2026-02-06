package com.discord.chat.presentation.message.view.botuikit.react;

import android.content.res.Resources;
import com.discord.chat.bridge.botuikit.Component;
import com.discord.chat.bridge.botuikit.ComponentSerializer;
import com.discord.chat.bridge.botuikit.SelectComponent;
import com.discord.chat.presentation.message.messagepart.MessageMargins;
import com.discord.chat.presentation.message.view.botuikit.ComponentActionEventHandlers;
import com.discord.chat.presentation.message.view.botuikit.ComponentContext;
import com.discord.chat.presentation.message.view.botuikit.WidthInfo;
import com.discord.chat.presentation.message.view.botuikit.components.SelectComponentView;
import com.discord.chat.presentation.message.view.botuikit.react.deserialization.ComponentDeserializerKt;
import com.discord.misc.utilities.measure.ViewMeasureExtensionsKt;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.serialization.json.Json;
import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u0000 \u00182\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0001\u0018B\u0007¢\u0006\u0004\b\u0003\u0010\u0004J\u0014\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\n0\bH\u0016J\b\u0010\u000b\u001a\u00020\tH\u0016J\u0010\u0010\f\u001a\u00020\u00022\u0006\u0010\r\u001a\u00020\u000eH\u0014J\u0018\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\u0006\u0010\u0012\u001a\u00020\u0013H\u0007J\u001e\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0011\u001a\u00020\u00022\f\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00100\u0017H\u0002R\u000e\u0010\u0005\u001a\u00020\u0006X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0019"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/react/SelectActionComponentViewManager;", "Lcom/facebook/react/uimanager/SimpleViewManager;", "Lcom/discord/chat/presentation/message/view/botuikit/components/SelectComponentView;", "<init>", "()V", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "getExportedCustomDirectEventTypeConstants", "", "", "", "getName", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "setModel", "", "view", "model", "Lcom/facebook/react/bridge/ReadableMap;", "createSelectComponentContext", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentContext;", "onTap", "Lkotlin/Function0;", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ReactModule(name = SelectActionComponentViewManager.NAME)
@SourceDebugExtension({"SMAP\nSelectActionComponentViewManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SelectActionComponentViewManager.kt\ncom/discord/chat/presentation/message/view/botuikit/react/SelectActionComponentViewManager\n+ 2 ComponentDeserializer.kt\ncom/discord/chat/presentation/message/view/botuikit/react/deserialization/ComponentDeserializerKt\n*L\n1#1,72:1\n14#2,10:73\n*S KotlinDebug\n*F\n+ 1 SelectActionComponentViewManager.kt\ncom/discord/chat/presentation/message/view/botuikit/react/SelectActionComponentViewManager\n*L\n35#1:73,10\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SelectActionComponentViewManager extends SimpleViewManager<SelectComponentView> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "SelectActionComponentView";
    @NotNull
    private final ReactEvents reactEvents = new ReactEvents(qr.v.a("onTap", Reflection.getOrCreateKotlinClass(OnSelectComponentTapEvent.class)));

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/react/SelectActionComponentViewManager$Companion;", "", "<init>", "()V", "NAME", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    private final ComponentContext createSelectComponentContext(SelectComponentView selectComponentView, final Function0<Unit> function0) {
        Resources resources = selectComponentView.getResources();
        Intrinsics.checkNotNullExpressionValue(resources, "getResources(...)");
        MessageMargins messageMargins = new MessageMargins(resources);
        ComponentContextDefaults componentContextDefaults = ComponentContextDefaults.INSTANCE;
        return new ComponentContext(messageMargins, "", componentContextDefaults.getGENERAL_HANDLERS(), componentContextDefaults.getMARKDOWN_OPTIONS(), componentContextDefaults.getMARKDOWN_HANDLERS(), componentContextDefaults.getMEDIA_HANDLERS(), ComponentActionEventHandlers.copy$default(componentContextDefaults.getCOMPONENT_HANDLERS(), null, null, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.b0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit createSelectComponentContext$lambda$1;
                createSelectComponentContext$lambda$1 = SelectActionComponentViewManager.createSelectComponentContext$lambda$1(Function0.this, (String) obj);
                return createSelectComponentContext$lambda$1;
            }
        }, null, null, 27, null), new WidthInfo(0, 0, 0, 4, null), false, false, false, true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createSelectComponentContext$lambda$1(Function0 function0, String str) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        function0.invoke();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setModel$lambda$0(SelectActionComponentViewManager selectActionComponentViewManager, SelectComponentView selectComponentView) {
        selectActionComponentViewManager.reactEvents.emitEvent(selectComponentView, new OnSelectComponentTapEvent());
        return Unit.f32008a;
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

    @ReactProp(name = "model")
    public final void setModel(@NotNull final SelectComponentView view, @NotNull ReadableMap model) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(model, "model");
        try {
            Json json = ComponentDeserializerKt.getJson();
            ComponentSerializer componentSerializer = ComponentSerializer.INSTANCE;
            String jSONObject = new JSONObject(model.toHashMap()).toString();
            Intrinsics.checkNotNullExpressionValue(jSONObject, "toString(...)");
            Component component = (Component) json.b(componentSerializer, jSONObject);
            if (component instanceof SelectComponent) {
                view.configure((SelectComponent) component, createSelectComponentContext(view, new Function0() { // from class: com.discord.chat.presentation.message.view.botuikit.react.a0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit model$lambda$0;
                        model$lambda$0 = SelectActionComponentViewManager.setModel$lambda$0(SelectActionComponentViewManager.this, view);
                        return model$lambda$0;
                    }
                }));
                ViewMeasureExtensionsKt.measureAndLayout(view);
                return;
            }
            String simpleName = Reflection.getOrCreateKotlinClass(SelectComponent.class).getSimpleName();
            String simpleName2 = Reflection.getOrCreateKotlinClass(component.getClass()).getSimpleName();
            throw new IllegalStateException(("Expected " + simpleName + " but got " + simpleName2).toString());
        } catch (Exception e10) {
            String simpleName3 = Reflection.getOrCreateKotlinClass(SelectComponent.class).getSimpleName();
            String message = e10.getMessage();
            throw new IllegalStateException(("Error while deserializing " + simpleName3 + ": " + message).toString());
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public SelectComponentView createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new SelectComponentView(reactContext, null, 0, 6, null);
    }
}
