package wp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final Object f52634a;

    /* renamed from: b  reason: collision with root package name */
    private final j f52635b;

    public k(Object screen, j transition) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        Intrinsics.checkNotNullParameter(transition, "transition");
        this.f52634a = screen;
        this.f52635b = transition;
    }

    public final Object a() {
        return this.f52634a;
    }

    public final j b() {
        return this.f52635b;
    }
}
