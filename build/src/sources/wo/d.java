package wo;

import kotlin.jvm.internal.Intrinsics;
import ym.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f52610b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f52611c;

    /* renamed from: d  reason: collision with root package name */
    private final String f52612d;

    public d(Object screen, boolean z10, String name) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f52610b = screen;
        this.f52611c = z10;
        this.f52612d = name;
    }

    public final Object a() {
        return this.f52610b;
    }

    public final boolean b() {
        return this.f52611c;
    }

    @Override // ym.g
    public String c() {
        return this.f52612d;
    }
}
