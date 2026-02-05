package eu;

import java.util.LinkedHashSet;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import zt.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final Set f21880a = new LinkedHashSet();

    public final synchronized void a(k route) {
        Intrinsics.checkNotNullParameter(route, "route");
        this.f21880a.remove(route);
    }

    public final synchronized void b(k failedRoute) {
        Intrinsics.checkNotNullParameter(failedRoute, "failedRoute");
        this.f21880a.add(failedRoute);
    }

    public final synchronized boolean c(k route) {
        Intrinsics.checkNotNullParameter(route, "route");
        return this.f21880a.contains(route);
    }
}
