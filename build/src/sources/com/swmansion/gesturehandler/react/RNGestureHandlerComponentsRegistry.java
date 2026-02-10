package com.swmansion.gesturehandler.react;

import com.facebook.jni.HybridData;
import com.facebook.react.fabric.ComponentFactory;
import com.facebook.soloader.SoLoader;
@gb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class RNGestureHandlerComponentsRegistry {
    @gb.a
    private final HybridData mHybridData;

    static {
        SoLoader.t("fabricjni");
        SoLoader.t("gesturehandler");
    }

    @gb.a
    private RNGestureHandlerComponentsRegistry(ComponentFactory componentFactory) {
        this.mHybridData = initHybrid(componentFactory);
    }

    @gb.a
    private native HybridData initHybrid(ComponentFactory componentFactory);

    @gb.a
    public static RNGestureHandlerComponentsRegistry register(ComponentFactory componentFactory) {
        return new RNGestureHandlerComponentsRegistry(componentFactory);
    }
}
