package lp;

import gn.g;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f36527b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f36528c;

    /* renamed from: d  reason: collision with root package name */
    private final String f36529d;

    public d(Object screen, boolean z10, String name) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f36527b = screen;
        this.f36528c = z10;
        this.f36529d = name;
    }

    public final Object a() {
        return this.f36527b;
    }

    public final boolean b() {
        return this.f36528c;
    }

    @Override // gn.g
    public String c() {
        return this.f36529d;
    }
}
