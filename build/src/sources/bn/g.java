package bn;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Object f6895a;

    /* renamed from: b  reason: collision with root package name */
    private final m f6896b;

    public g(Object obj, m snapshot) {
        Intrinsics.checkNotNullParameter(snapshot, "snapshot");
        this.f6895a = obj;
        this.f6896b = snapshot;
    }

    public final Object a() {
        return this.f6895a;
    }

    public final m b() {
        return this.f6896b;
    }
}
