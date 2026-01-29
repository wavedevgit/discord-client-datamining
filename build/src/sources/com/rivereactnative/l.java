package com.rivereactnative;

import androidx.lifecycle.LifecycleOwner;
import app.rive.runtime.kotlin.RiveViewLifecycleObserver;
import app.rive.runtime.kotlin.core.RefCount;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l extends RiveViewLifecycleObserver {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(List dependencies) {
        super(dependencies);
        Intrinsics.checkNotNullParameter(dependencies, "dependencies");
    }

    public final void a() {
        for (RefCount refCount : getDependencies()) {
            refCount.release();
        }
        getDependencies().clear();
    }

    @Override // app.rive.runtime.kotlin.RiveViewLifecycleObserver, androidx.lifecycle.DefaultLifecycleObserver
    public void onDestroy(LifecycleOwner owner) {
        Intrinsics.checkNotNullParameter(owner, "owner");
        owner.getLifecycle().d(this);
    }
}
