package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import androidx.savedstate.SavedStateRegistry;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d0 implements m, AutoCloseable {

    /* renamed from: d  reason: collision with root package name */
    private final String f4626d;

    /* renamed from: e  reason: collision with root package name */
    private final b0 f4627e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f4628i;

    public d0(String key, b0 handle) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handle, "handle");
        this.f4626d = key;
        this.f4627e = handle;
    }

    public final void a(SavedStateRegistry registry, Lifecycle lifecycle) {
        Intrinsics.checkNotNullParameter(registry, "registry");
        Intrinsics.checkNotNullParameter(lifecycle, "lifecycle");
        if (!this.f4628i) {
            this.f4628i = true;
            lifecycle.a(this);
            registry.c(this.f4626d, this.f4627e.g());
            return;
        }
        throw new IllegalStateException("Already attached to lifecycleOwner");
    }

    @Override // java.lang.AutoCloseable
    public void close() {
    }

    public final b0 g() {
        return this.f4627e;
    }

    @Override // androidx.lifecycle.m
    public void k(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        if (event == Lifecycle.a.ON_DESTROY) {
            this.f4628i = false;
            source.getLifecycle().d(this);
        }
    }

    public final boolean m() {
        return this.f4628i;
    }
}
