package zo;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements cn.f, ym.g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f56111b;

    /* renamed from: c  reason: collision with root package name */
    private final List f56112c;

    /* renamed from: d  reason: collision with root package name */
    private final String f56113d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f56114e;

    public c(Object baseScreen, List modals, String compatibilityKey) {
        Intrinsics.checkNotNullParameter(baseScreen, "baseScreen");
        Intrinsics.checkNotNullParameter(modals, "modals");
        Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
        this.f56111b = baseScreen;
        this.f56112c = modals;
        this.f56113d = compatibilityKey;
        this.f56114e = baseScreen;
    }

    @Override // cn.f
    public List a() {
        return this.f56112c;
    }

    @Override // cn.f
    public Object b() {
        return this.f56114e;
    }

    @Override // ym.g
    public String c() {
        return this.f56113d;
    }
}
