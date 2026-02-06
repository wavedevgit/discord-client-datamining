package dn;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class x {

    /* renamed from: a  reason: collision with root package name */
    private final t f20975a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f20976b;

    public x(t controller, Job subscription) {
        Intrinsics.checkNotNullParameter(controller, "controller");
        Intrinsics.checkNotNullParameter(subscription, "subscription");
        this.f20975a = controller;
        this.f20976b = subscription;
    }

    public final t a() {
        return this.f20975a;
    }

    public final Job b() {
        return this.f20976b;
    }
}
