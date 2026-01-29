package com.swmansion.reanimated.keyboard;

import com.facebook.jni.HybridData;
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class KeyboardWorkletWrapper {
    @fb.a
    private final HybridData mHybridData;

    @fb.a
    private KeyboardWorkletWrapper(HybridData hybridData) {
        this.mHybridData = hybridData;
    }

    public native void invoke(int i10, int i11);
}
