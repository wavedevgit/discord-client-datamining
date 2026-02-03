package com.facebook.yoga;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends b {
    public void c() {
        long j10 = this.f12214a;
        if (j10 != 0) {
            this.f12214a = 0L;
            YogaNative.jni_YGConfigFreeJNI(j10);
        }
    }

    protected void finalize() {
        try {
            c();
        } finally {
            super.finalize();
        }
    }
}
