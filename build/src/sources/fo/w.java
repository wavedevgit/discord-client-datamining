package fo;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final x.i f24140a;

    /* renamed from: b  reason: collision with root package name */
    private final x.n0 f24141b;

    /* renamed from: c  reason: collision with root package name */
    private final v f24142c;

    public w(x.i camera, x.n0 n0Var, v cameraProperties) {
        Intrinsics.checkNotNullParameter(camera, "camera");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        this.f24140a = camera;
        this.f24141b = n0Var;
        this.f24142c = cameraProperties;
    }

    public final x.i a() {
        return this.f24140a;
    }

    public final v b() {
        return this.f24142c;
    }

    public final x.n0 c() {
        return this.f24141b;
    }
}
