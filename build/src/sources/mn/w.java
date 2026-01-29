package mn;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final x.i f39324a;

    /* renamed from: b  reason: collision with root package name */
    private final x.n0 f39325b;

    /* renamed from: c  reason: collision with root package name */
    private final v f39326c;

    public w(x.i camera, x.n0 n0Var, v cameraProperties) {
        Intrinsics.checkNotNullParameter(camera, "camera");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        this.f39324a = camera;
        this.f39325b = n0Var;
        this.f39326c = cameraProperties;
    }

    public final x.i a() {
        return this.f39324a;
    }

    public final v b() {
        return this.f39326c;
    }

    public final x.n0 c() {
        return this.f39325b;
    }
}
