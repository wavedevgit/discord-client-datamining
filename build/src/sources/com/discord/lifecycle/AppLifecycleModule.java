package com.discord.lifecycle;

import com.discord.codegen.NativeAppLifecycleModuleSpec;
import com.discord.lifecycle.react.events.OnHostDestroyEvent;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000;\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0000*\u0001\u000b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\r\u001a\u00020\u000eH\u0016J\b\u0010\u000f\u001a\u00020\u000eH\u0016J\u0010\u0010\u0010\u001a\u00020\u000e2\u0006\u0010\u0011\u001a\u00020\u0012H\u0016J\u0010\u0010\u0013\u001a\u00020\u000e2\u0006\u0010\u0014\u001a\u00020\u0015H\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\f¨\u0006\u0016"}, d2 = {"Lcom/discord/lifecycle/AppLifecycleModule;", "Lcom/discord/codegen/NativeAppLifecycleModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "reactListenerCount", "", "reactLifecycleEventListener", "com/discord/lifecycle/AppLifecycleModule$reactLifecycleEventListener$1", "Lcom/discord/lifecycle/AppLifecycleModule$reactLifecycleEventListener$1;", "initialize", "", "invalidate", "addListener", "type", "", "removeListeners", "count", "", "lifecycle_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AppLifecycleModule extends NativeAppLifecycleModuleSpec {
    @NotNull
    private final ReactApplicationContext reactContext;
    @NotNull
    private final ReactEvents reactEvents;
    @NotNull
    private final AppLifecycleModule$reactLifecycleEventListener$1 reactLifecycleEventListener;
    private int reactListenerCount;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Type inference failed for: r3v2, types: [com.discord.lifecycle.AppLifecycleModule$reactLifecycleEventListener$1] */
    public AppLifecycleModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        this.reactEvents = new ReactEvents(v.a("onHostDestroy", Reflection.getOrCreateKotlinClass(OnHostDestroyEvent.class)));
        this.reactLifecycleEventListener = new LifecycleEventListener() { // from class: com.discord.lifecycle.AppLifecycleModule$reactLifecycleEventListener$1
            @Override // com.facebook.react.bridge.LifecycleEventListener
            public void onHostDestroy() {
                int i10;
                ReactEvents reactEvents;
                ReactApplicationContext reactApplicationContext;
                i10 = AppLifecycleModule.this.reactListenerCount;
                if (i10 != 0) {
                    reactEvents = AppLifecycleModule.this.reactEvents;
                    reactApplicationContext = AppLifecycleModule.this.getReactApplicationContext();
                    Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "access$getReactApplicationContext(...)");
                    reactEvents.emitModuleEvent(reactApplicationContext, new OnHostDestroyEvent());
                }
            }

            @Override // com.facebook.react.bridge.LifecycleEventListener
            public void onHostPause() {
            }

            @Override // com.facebook.react.bridge.LifecycleEventListener
            public void onHostResume() {
            }
        };
    }

    @Override // com.discord.codegen.NativeAppLifecycleModuleSpec
    public void addListener(@NotNull String type) {
        Intrinsics.checkNotNullParameter(type, "type");
        this.reactListenerCount++;
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void initialize() {
        super.initialize();
        this.reactContext.addLifecycleEventListener(this.reactLifecycleEventListener);
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        super.invalidate();
        this.reactContext.removeLifecycleEventListener(this.reactLifecycleEventListener);
    }

    @Override // com.discord.codegen.NativeAppLifecycleModuleSpec
    public void removeListeners(double d10) {
        this.reactListenerCount -= (int) d10;
    }
}
