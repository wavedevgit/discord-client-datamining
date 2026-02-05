package com.facebook.yoga;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends YogaNodeJNIBase {
    public j(YogaConfig yogaConfig) {
        super(yogaConfig);
    }

    protected void finalize() {
        try {
            u0();
        } finally {
            super.finalize();
        }
    }

    public void u0() {
        long j10 = this.f11533q;
        if (j10 != 0) {
            this.f11533q = 0L;
            YogaNative.jni_YGNodeFinalizeJNI(j10);
        }
    }
}
