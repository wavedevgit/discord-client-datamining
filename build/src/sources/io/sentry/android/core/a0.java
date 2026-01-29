package io.sentry.android.core;

import android.os.Debug;
import io.sentry.k3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a0 implements io.sentry.t0 {
    @Override // io.sentry.t0
    public void c() {
    }

    @Override // io.sentry.t0
    public void d(k3 k3Var) {
        k3Var.f(Long.valueOf(Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory()));
        k3Var.g(Long.valueOf(Debug.getNativeHeapSize() - Debug.getNativeHeapFreeSize()));
    }
}
