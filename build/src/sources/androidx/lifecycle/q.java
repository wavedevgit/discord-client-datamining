package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class q {
    public static final void a(LifecycleOwner lifecycleOwner, Lifecycle.State current, Lifecycle.State next) {
        Intrinsics.checkNotNullParameter(current, "current");
        Intrinsics.checkNotNullParameter(next, "next");
        if (current == Lifecycle.State.f4544e && next == Lifecycle.State.f4543d) {
            throw new IllegalStateException(("State must be at least '" + Lifecycle.State.f4545i + "' to be moved to '" + next + "' in component " + lifecycleOwner).toString());
        }
        Lifecycle.State state = Lifecycle.State.f4543d;
        if (current == state && current != next) {
            throw new IllegalStateException(("State is '" + state + "' and cannot be moved to `" + next + "` in component " + lifecycleOwner).toString());
        }
    }
}
