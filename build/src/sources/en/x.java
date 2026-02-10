package en;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class x {

    /* renamed from: a  reason: collision with root package name */
    private final t f21896a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f21897b;

    public x(t controller, Job subscription) {
        Intrinsics.checkNotNullParameter(controller, "controller");
        Intrinsics.checkNotNullParameter(subscription, "subscription");
        this.f21896a = controller;
        this.f21897b = subscription;
    }

    public final t a() {
        return this.f21896a;
    }

    public final Job b() {
        return this.f21897b;
    }
}
