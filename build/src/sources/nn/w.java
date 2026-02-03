package nn;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final x.i f42083a;

    /* renamed from: b  reason: collision with root package name */
    private final x.n0 f42084b;

    /* renamed from: c  reason: collision with root package name */
    private final v f42085c;

    public w(x.i camera, x.n0 n0Var, v cameraProperties) {
        Intrinsics.checkNotNullParameter(camera, "camera");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        this.f42083a = camera;
        this.f42084b = n0Var;
        this.f42085c = cameraProperties;
    }

    public final x.i a() {
        return this.f42083a;
    }

    public final v b() {
        return this.f42085c;
    }

    public final x.n0 c() {
        return this.f42084b;
    }
}
