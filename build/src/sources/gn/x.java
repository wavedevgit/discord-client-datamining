package gn;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class x {

    /* renamed from: a  reason: collision with root package name */
    private final t f25911a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f25912b;

    public x(t controller, Job subscription) {
        Intrinsics.checkNotNullParameter(controller, "controller");
        Intrinsics.checkNotNullParameter(subscription, "subscription");
        this.f25911a = controller;
        this.f25912b = subscription;
    }

    public final t a() {
        return this.f25911a;
    }

    public final Job b() {
        return this.f25912b;
    }
}
