package bp;

import dn.g;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f6965b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f6966c;

    /* renamed from: d  reason: collision with root package name */
    private final String f6967d;

    public d(Object screen, boolean z10, String name) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f6965b = screen;
        this.f6966c = z10;
        this.f6967d = name;
    }

    public final Object a() {
        return this.f6965b;
    }

    public final boolean b() {
        return this.f6966c;
    }

    @Override // dn.g
    public String c() {
        return this.f6967d;
    }
}
