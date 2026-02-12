package op;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements kn.f, gn.g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f41079b;

    /* renamed from: c  reason: collision with root package name */
    private final List f41080c;

    /* renamed from: d  reason: collision with root package name */
    private final String f41081d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f41082e;

    public c(Object baseScreen, List modals, String compatibilityKey) {
        Intrinsics.checkNotNullParameter(baseScreen, "baseScreen");
        Intrinsics.checkNotNullParameter(modals, "modals");
        Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
        this.f41079b = baseScreen;
        this.f41080c = modals;
        this.f41081d = compatibilityKey;
        this.f41082e = baseScreen;
    }

    @Override // kn.f
    public List a() {
        return this.f41080c;
    }

    @Override // kn.f
    public Object b() {
        return this.f41082e;
    }

    @Override // gn.g
    public String c() {
        return this.f41081d;
    }
}
