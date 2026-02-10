package fp;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements in.f, en.g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f23170b;

    /* renamed from: c  reason: collision with root package name */
    private final List f23171c;

    /* renamed from: d  reason: collision with root package name */
    private final String f23172d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f23173e;

    public c(Object baseScreen, List modals, String compatibilityKey) {
        Intrinsics.checkNotNullParameter(baseScreen, "baseScreen");
        Intrinsics.checkNotNullParameter(modals, "modals");
        Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
        this.f23170b = baseScreen;
        this.f23171c = modals;
        this.f23172d = compatibilityKey;
        this.f23173e = baseScreen;
    }

    @Override // in.f
    public List a() {
        return this.f23171c;
    }

    @Override // in.f
    public Object b() {
        return this.f23173e;
    }

    @Override // en.g
    public String c() {
        return this.f23172d;
    }
}
