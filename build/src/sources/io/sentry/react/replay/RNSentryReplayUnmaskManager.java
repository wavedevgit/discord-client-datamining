package io.sentry.react.replay;

import androidx.annotation.NonNull;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.viewmanagers.RNSentryReplayUnmaskManagerDelegate;
import com.facebook.react.viewmanagers.RNSentryReplayUnmaskManagerInterface;
@ReactModule(name = "RNSentryReplayUnmask")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class RNSentryReplayUnmaskManager extends ViewGroupManager<c> implements RNSentryReplayUnmaskManagerInterface<c> {
    private final RNSentryReplayUnmaskManagerDelegate<c, RNSentryReplayUnmaskManager> delegate = new RNSentryReplayUnmaskManagerDelegate<>(this);

    @Override // com.facebook.react.uimanager.ViewManager
    public ViewManagerDelegate<c> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NonNull
    public String getName() {
        return "RNSentryReplayUnmask";
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NonNull
    public c createViewInstance(@NonNull ThemedReactContext themedReactContext) {
        return new c(themedReactContext);
    }
}
