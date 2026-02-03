package xo;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements an.f, wm.g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f53726b;

    /* renamed from: c  reason: collision with root package name */
    private final List f53727c;

    /* renamed from: d  reason: collision with root package name */
    private final String f53728d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f53729e;

    public c(Object baseScreen, List modals, String compatibilityKey) {
        Intrinsics.checkNotNullParameter(baseScreen, "baseScreen");
        Intrinsics.checkNotNullParameter(modals, "modals");
        Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
        this.f53726b = baseScreen;
        this.f53727c = modals;
        this.f53728d = compatibilityKey;
        this.f53729e = baseScreen;
    }

    @Override // an.f
    public List a() {
        return this.f53727c;
    }

    @Override // an.f
    public Object b() {
        return this.f53729e;
    }

    @Override // wm.g
    public String c() {
        return this.f53728d;
    }
}
