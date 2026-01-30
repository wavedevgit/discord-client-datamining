package wo;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements zm.f, vm.g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f52746b;

    /* renamed from: c  reason: collision with root package name */
    private final List f52747c;

    /* renamed from: d  reason: collision with root package name */
    private final String f52748d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f52749e;

    public c(Object baseScreen, List modals, String compatibilityKey) {
        Intrinsics.checkNotNullParameter(baseScreen, "baseScreen");
        Intrinsics.checkNotNullParameter(modals, "modals");
        Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
        this.f52746b = baseScreen;
        this.f52747c = modals;
        this.f52748d = compatibilityKey;
        this.f52749e = baseScreen;
    }

    @Override // zm.f
    public List a() {
        return this.f52747c;
    }

    @Override // zm.f
    public Object b() {
        return this.f52749e;
    }

    @Override // vm.g
    public String c() {
        return this.f52748d;
    }
}
