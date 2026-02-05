package zo;

import bn.g;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f56136b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f56137c;

    /* renamed from: d  reason: collision with root package name */
    private final String f56138d;

    public d(Object screen, boolean z10, String name) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f56136b = screen;
        this.f56137c = z10;
        this.f56138d = name;
    }

    public final Object a() {
        return this.f56136b;
    }

    public final boolean b() {
        return this.f56137c;
    }

    @Override // bn.g
    public String c() {
        return this.f56138d;
    }
}
