package to;

import kotlin.jvm.internal.Intrinsics;
import vm.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f49774b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f49775c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49776d;

    public d(Object screen, boolean z10, String name) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f49774b = screen;
        this.f49775c = z10;
        this.f49776d = name;
    }

    public final Object a() {
        return this.f49774b;
    }

    public final boolean b() {
        return this.f49775c;
    }

    @Override // vm.g
    public String c() {
        return this.f49776d;
    }
}
