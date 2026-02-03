package wm;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class x {

    /* renamed from: a  reason: collision with root package name */
    private final t f52421a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f52422b;

    public x(t controller, Job subscription) {
        Intrinsics.checkNotNullParameter(controller, "controller");
        Intrinsics.checkNotNullParameter(subscription, "subscription");
        this.f52421a = controller;
        this.f52422b = subscription;
    }

    public final t a() {
        return this.f52421a;
    }

    public final Job b() {
        return this.f52422b;
    }
}
