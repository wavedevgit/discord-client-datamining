package com.swmansion.reanimated.nativeProxy;

import com.facebook.jni.HybridData;
import com.swmansion.reanimated.NodesManager;
@gb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AnimationFrameCallback implements NodesManager.OnAnimationFrame {
    @gb.a
    private final HybridData mHybridData;

    @gb.a
    private AnimationFrameCallback(HybridData hybridData) {
        this.mHybridData = hybridData;
    }

    @Override // com.swmansion.reanimated.NodesManager.OnAnimationFrame
    public native void onAnimationFrame(double d10);
}
