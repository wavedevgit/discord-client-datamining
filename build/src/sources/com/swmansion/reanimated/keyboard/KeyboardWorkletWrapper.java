package com.swmansion.reanimated.keyboard;

import com.facebook.jni.HybridData;
@gb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class KeyboardWorkletWrapper {
    @gb.a
    private final HybridData mHybridData;

    @gb.a
    private KeyboardWorkletWrapper(HybridData hybridData) {
        this.mHybridData = hybridData;
    }

    public native void invoke(int i10, int i11);
}
