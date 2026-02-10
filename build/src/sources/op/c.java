package op;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements kn.f, gn.g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f41078b;

    /* renamed from: c  reason: collision with root package name */
    private final List f41079c;

    /* renamed from: d  reason: collision with root package name */
    private final String f41080d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f41081e;

    public c(Object baseScreen, List modals, String compatibilityKey) {
        Intrinsics.checkNotNullParameter(baseScreen, "baseScreen");
        Intrinsics.checkNotNullParameter(modals, "modals");
        Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
        this.f41078b = baseScreen;
        this.f41079c = modals;
        this.f41080d = compatibilityKey;
        this.f41081e = baseScreen;
    }

    @Override // kn.f
    public List a() {
        return this.f41079c;
    }

    @Override // kn.f
    public Object b() {
        return this.f41081e;
    }

    @Override // gn.g
    public String c() {
        return this.f41080d;
    }
}
