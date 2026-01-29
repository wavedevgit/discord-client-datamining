package wo;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements zm.f, vm.g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f52730b;

    /* renamed from: c  reason: collision with root package name */
    private final List f52731c;

    /* renamed from: d  reason: collision with root package name */
    private final String f52732d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f52733e;

    public c(Object baseScreen, List modals, String compatibilityKey) {
        Intrinsics.checkNotNullParameter(baseScreen, "baseScreen");
        Intrinsics.checkNotNullParameter(modals, "modals");
        Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
        this.f52730b = baseScreen;
        this.f52731c = modals;
        this.f52732d = compatibilityKey;
        this.f52733e = baseScreen;
    }

    @Override // zm.f
    public List a() {
        return this.f52731c;
    }

    @Override // zm.f
    public Object b() {
        return this.f52733e;
    }

    @Override // vm.g
    public String c() {
        return this.f52732d;
    }
}
