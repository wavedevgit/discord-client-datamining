package hu;

import cu.k;
import java.util.LinkedHashSet;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final Set f26594a = new LinkedHashSet();

    public final synchronized void a(k route) {
        Intrinsics.checkNotNullParameter(route, "route");
        this.f26594a.remove(route);
    }

    public final synchronized void b(k failedRoute) {
        Intrinsics.checkNotNullParameter(failedRoute, "failedRoute");
        this.f26594a.add(failedRoute);
    }

    public final synchronized boolean c(k route) {
        Intrinsics.checkNotNullParameter(route, "route");
        return this.f26594a.contains(route);
    }
}
