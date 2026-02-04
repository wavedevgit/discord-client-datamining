package ym;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class x {

    /* renamed from: a  reason: collision with root package name */
    private final t f54707a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f54708b;

    public x(t controller, Job subscription) {
        Intrinsics.checkNotNullParameter(controller, "controller");
        Intrinsics.checkNotNullParameter(subscription, "subscription");
        this.f54707a = controller;
        this.f54708b = subscription;
    }

    public final t a() {
        return this.f54707a;
    }

    public final Job b() {
        return this.f54708b;
    }
}
