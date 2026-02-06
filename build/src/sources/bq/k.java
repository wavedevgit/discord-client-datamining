package bq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final Object f6992a;

    /* renamed from: b  reason: collision with root package name */
    private final j f6993b;

    public k(Object screen, j transition) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        Intrinsics.checkNotNullParameter(transition, "transition");
        this.f6992a = screen;
        this.f6993b = transition;
    }

    public final Object a() {
        return this.f6992a;
    }

    public final j b() {
        return this.f6993b;
    }
}
