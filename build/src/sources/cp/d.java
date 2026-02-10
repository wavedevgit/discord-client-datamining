package cp;

import en.g;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f20120b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f20121c;

    /* renamed from: d  reason: collision with root package name */
    private final String f20122d;

    public d(Object screen, boolean z10, String name) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f20120b = screen;
        this.f20121c = z10;
        this.f20122d = name;
    }

    public final Object a() {
        return this.f20120b;
    }

    public final boolean b() {
        return this.f20121c;
    }

    @Override // en.g
    public String c() {
        return this.f20122d;
    }
}
