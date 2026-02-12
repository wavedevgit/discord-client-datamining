package lp;

import gn.g;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f35959b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f35960c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35961d;

    public d(Object screen, boolean z10, String name) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f35959b = screen;
        this.f35960c = z10;
        this.f35961d = name;
    }

    public final Object a() {
        return this.f35959b;
    }

    public final boolean b() {
        return this.f35960c;
    }

    @Override // gn.g
    public String c() {
        return this.f35961d;
    }
}
