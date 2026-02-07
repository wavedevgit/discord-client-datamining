package t9;

import java.util.Date;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m {

    /* renamed from: a  reason: collision with root package name */
    private final j f50484a;

    /* renamed from: b  reason: collision with root package name */
    private final Date f50485b;

    public m(j frameLoader, Date insertedTime) {
        Intrinsics.checkNotNullParameter(frameLoader, "frameLoader");
        Intrinsics.checkNotNullParameter(insertedTime, "insertedTime");
        this.f50484a = frameLoader;
        this.f50485b = insertedTime;
    }

    public final j a() {
        return this.f50484a;
    }

    public final Date b() {
        return this.f50485b;
    }
}
