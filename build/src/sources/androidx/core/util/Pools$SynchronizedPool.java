package androidx.core.util;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Pools$SynchronizedPool extends Pools$SimplePool {

    /* renamed from: c  reason: collision with root package name */
    private final Object f3667c;

    public Pools$SynchronizedPool(int i10) {
        super(i10);
        this.f3667c = new Object();
    }

    @Override // androidx.core.util.Pools$SimplePool, b2.d
    public Object acquire() {
        Object acquire;
        synchronized (this.f3667c) {
            acquire = super.acquire();
        }
        return acquire;
    }

    @Override // androidx.core.util.Pools$SimplePool, b2.d
    public boolean release(Object instance) {
        boolean release;
        Intrinsics.checkNotNullParameter(instance, "instance");
        synchronized (this.f3667c) {
            release = super.release(instance);
        }
        return release;
    }
}
