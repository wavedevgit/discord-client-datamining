package op;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements kn.f, gn.g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f41647b;

    /* renamed from: c  reason: collision with root package name */
    private final List f41648c;

    /* renamed from: d  reason: collision with root package name */
    private final String f41649d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f41650e;

    public c(Object baseScreen, List modals, String compatibilityKey) {
        Intrinsics.checkNotNullParameter(baseScreen, "baseScreen");
        Intrinsics.checkNotNullParameter(modals, "modals");
        Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
        this.f41647b = baseScreen;
        this.f41648c = modals;
        this.f41649d = compatibilityKey;
        this.f41650e = baseScreen;
    }

    @Override // kn.f
    public List a() {
        return this.f41648c;
    }

    @Override // kn.f
    public Object b() {
        return this.f41650e;
    }

    @Override // gn.g
    public String c() {
        return this.f41649d;
    }
}
