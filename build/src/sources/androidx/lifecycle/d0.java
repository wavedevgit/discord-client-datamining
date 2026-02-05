package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import androidx.savedstate.SavedStateRegistry;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d0 implements m, AutoCloseable {

    /* renamed from: d  reason: collision with root package name */
    private final String f4600d;

    /* renamed from: e  reason: collision with root package name */
    private final b0 f4601e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f4602i;

    public d0(String key, b0 handle) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handle, "handle");
        this.f4600d = key;
        this.f4601e = handle;
    }

    public final void a(SavedStateRegistry registry, Lifecycle lifecycle) {
        Intrinsics.checkNotNullParameter(registry, "registry");
        Intrinsics.checkNotNullParameter(lifecycle, "lifecycle");
        if (!this.f4602i) {
            this.f4602i = true;
            lifecycle.a(this);
            registry.c(this.f4600d, this.f4601e.g());
            return;
        }
        throw new IllegalStateException("Already attached to lifecycleOwner");
    }

    @Override // java.lang.AutoCloseable
    public void close() {
    }

    @Override // androidx.lifecycle.m
    public void h(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        if (event == Lifecycle.a.ON_DESTROY) {
            this.f4602i = false;
            source.getLifecycle().d(this);
        }
    }

    public final b0 k() {
        return this.f4601e;
    }

    public final boolean m() {
        return this.f4602i;
    }
}
