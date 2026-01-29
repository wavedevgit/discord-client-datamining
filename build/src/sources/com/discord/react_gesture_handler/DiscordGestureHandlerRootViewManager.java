package com.discord.react_gesture_handler;

import com.facebook.react.uimanager.ThemedReactContext;
import com.swmansion.gesturehandler.react.RNGestureHandlerRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0000\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0004\u001a\u00020\u0005H\u0016J\u0010\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0014¨\u0006\n"}, d2 = {"Lcom/discord/react_gesture_handler/DiscordGestureHandlerRootViewManager;", "Lcom/swmansion/gesturehandler/react/RNGestureHandlerRootViewManager;", "<init>", "()V", "canOverrideExistingModule", "", "createViewInstance", "Lcom/swmansion/gesturehandler/react/RNGestureHandlerRootView;", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "react_gesture_handler_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DiscordGestureHandlerRootViewManager extends RNGestureHandlerRootViewManager {
    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule
    public boolean canOverrideExistingModule() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public RNGestureHandlerRootView createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new DiscordGestureHandlerEnabledRootView(reactContext);
    }
}
