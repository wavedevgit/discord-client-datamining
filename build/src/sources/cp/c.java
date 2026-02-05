package cp;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements fn.f, bn.g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f19997b;

    /* renamed from: c  reason: collision with root package name */
    private final List f19998c;

    /* renamed from: d  reason: collision with root package name */
    private final String f19999d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f20000e;

    public c(Object baseScreen, List modals, String compatibilityKey) {
        Intrinsics.checkNotNullParameter(baseScreen, "baseScreen");
        Intrinsics.checkNotNullParameter(modals, "modals");
        Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
        this.f19997b = baseScreen;
        this.f19998c = modals;
        this.f19999d = compatibilityKey;
        this.f20000e = baseScreen;
    }

    @Override // fn.f
    public List a() {
        return this.f19998c;
    }

    @Override // fn.f
    public Object b() {
        return this.f20000e;
    }

    @Override // bn.g
    public String c() {
        return this.f19999d;
    }
}
