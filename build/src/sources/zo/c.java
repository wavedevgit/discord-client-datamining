package zo;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements cn.f, ym.g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f56114b;

    /* renamed from: c  reason: collision with root package name */
    private final List f56115c;

    /* renamed from: d  reason: collision with root package name */
    private final String f56116d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f56117e;

    public c(Object baseScreen, List modals, String compatibilityKey) {
        Intrinsics.checkNotNullParameter(baseScreen, "baseScreen");
        Intrinsics.checkNotNullParameter(modals, "modals");
        Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
        this.f56114b = baseScreen;
        this.f56115c = modals;
        this.f56116d = compatibilityKey;
        this.f56117e = baseScreen;
    }

    @Override // cn.f
    public List a() {
        return this.f56115c;
    }

    @Override // cn.f
    public Object b() {
        return this.f56117e;
    }

    @Override // ym.g
    public String c() {
        return this.f56116d;
    }
}
