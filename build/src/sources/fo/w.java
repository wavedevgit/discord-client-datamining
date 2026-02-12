package fo;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final x.i f24141a;

    /* renamed from: b  reason: collision with root package name */
    private final x.n0 f24142b;

    /* renamed from: c  reason: collision with root package name */
    private final v f24143c;

    public w(x.i camera, x.n0 n0Var, v cameraProperties) {
        Intrinsics.checkNotNullParameter(camera, "camera");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        this.f24141a = camera;
        this.f24142b = n0Var;
        this.f24143c = cameraProperties;
    }

    public final x.i a() {
        return this.f24141a;
    }

    public final v b() {
        return this.f24143c;
    }

    public final x.n0 c() {
        return this.f24142b;
    }
}
