package com.swmansion.reanimated.nativeProxy;

import com.facebook.jni.HybridData;
@gb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class SensorSetter {
    @gb.a
    private final HybridData mHybridData;

    @gb.a
    private SensorSetter(HybridData hybridData) {
        this.mHybridData = hybridData;
    }

    public native void sensorSetter(float[] fArr, int i10);
}
