package bn;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class x {

    /* renamed from: a  reason: collision with root package name */
    private final t f6652a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f6653b;

    public x(t controller, Job subscription) {
        Intrinsics.checkNotNullParameter(controller, "controller");
        Intrinsics.checkNotNullParameter(subscription, "subscription");
        this.f6652a = controller;
        this.f6653b = subscription;
    }

    public final t a() {
        return this.f6652a;
    }

    public final Job b() {
        return this.f6653b;
    }
}
