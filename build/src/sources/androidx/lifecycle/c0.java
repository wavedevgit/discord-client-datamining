package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c0 implements m {

    /* renamed from: d  reason: collision with root package name */
    private final h0 f4598d;

    public c0(h0 provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f4598d = provider;
    }

    @Override // androidx.lifecycle.m
    public void h(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        if (event == Lifecycle.a.ON_CREATE) {
            source.getLifecycle().d(this);
            this.f4598d.e();
            return;
        }
        throw new IllegalStateException(("Next event must be ON_CREATE, it was " + event).toString());
    }
}
