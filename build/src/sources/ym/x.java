package ym;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class x {

    /* renamed from: a  reason: collision with root package name */
    private final t f54710a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f54711b;

    public x(t controller, Job subscription) {
        Intrinsics.checkNotNullParameter(controller, "controller");
        Intrinsics.checkNotNullParameter(subscription, "subscription");
        this.f54710a = controller;
        this.f54711b = subscription;
    }

    public final t a() {
        return this.f54710a;
    }

    public final Job b() {
        return this.f54711b;
    }
}
