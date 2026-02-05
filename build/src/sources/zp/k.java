package zp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final Object f56163a;

    /* renamed from: b  reason: collision with root package name */
    private final j f56164b;

    public k(Object screen, j transition) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        Intrinsics.checkNotNullParameter(transition, "transition");
        this.f56163a = screen;
        this.f56164b = transition;
    }

    public final Object a() {
        return this.f56163a;
    }

    public final j b() {
        return this.f56164b;
    }
}
