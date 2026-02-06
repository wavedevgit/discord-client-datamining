package ep;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements hn.f, dn.g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f22094b;

    /* renamed from: c  reason: collision with root package name */
    private final List f22095c;

    /* renamed from: d  reason: collision with root package name */
    private final String f22096d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f22097e;

    public c(Object baseScreen, List modals, String compatibilityKey) {
        Intrinsics.checkNotNullParameter(baseScreen, "baseScreen");
        Intrinsics.checkNotNullParameter(modals, "modals");
        Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
        this.f22094b = baseScreen;
        this.f22095c = modals;
        this.f22096d = compatibilityKey;
        this.f22097e = baseScreen;
    }

    @Override // hn.f
    public List a() {
        return this.f22095c;
    }

    @Override // hn.f
    public Object b() {
        return this.f22097e;
    }

    @Override // dn.g
    public String c() {
        return this.f22096d;
    }
}
