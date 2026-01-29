package vm;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class x {

    /* renamed from: a  reason: collision with root package name */
    private final t f51329a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f51330b;

    public x(t controller, Job subscription) {
        Intrinsics.checkNotNullParameter(controller, "controller");
        Intrinsics.checkNotNullParameter(subscription, "subscription");
        this.f51329a = controller;
        this.f51330b = subscription;
    }

    public final t a() {
        return this.f51329a;
    }

    public final Job b() {
        return this.f51330b;
    }
}
