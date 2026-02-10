package gn;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class x {

    /* renamed from: a  reason: collision with root package name */
    private final t f25910a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f25911b;

    public x(t controller, Job subscription) {
        Intrinsics.checkNotNullParameter(controller, "controller");
        Intrinsics.checkNotNullParameter(subscription, "subscription");
        this.f25910a = controller;
        this.f25911b = subscription;
    }

    public final t a() {
        return this.f25910a;
    }

    public final Job b() {
        return this.f25911b;
    }
}
