package com.swmansion.reanimated.nativeProxy;

import com.facebook.jni.HybridData;
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class SensorSetter {
    @fb.a
    private final HybridData mHybridData;

    @fb.a
    private SensorSetter(HybridData hybridData) {
        this.mHybridData = hybridData;
    }

    public native void sensorSetter(float[] fArr, int i10);
}
