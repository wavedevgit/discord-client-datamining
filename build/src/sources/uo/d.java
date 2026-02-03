package uo;

import kotlin.jvm.internal.Intrinsics;
import wm.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f50548b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f50549c;

    /* renamed from: d  reason: collision with root package name */
    private final String f50550d;

    public d(Object screen, boolean z10, String name) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f50548b = screen;
        this.f50549c = z10;
        this.f50550d = name;
    }

    public final Object a() {
        return this.f50548b;
    }

    public final boolean b() {
        return this.f50549c;
    }

    @Override // wm.g
    public String c() {
        return this.f50550d;
    }
}
