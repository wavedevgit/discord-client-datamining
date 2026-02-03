package pn;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final x.i f46375a;

    /* renamed from: b  reason: collision with root package name */
    private final x.n0 f46376b;

    /* renamed from: c  reason: collision with root package name */
    private final v f46377c;

    public w(x.i camera, x.n0 n0Var, v cameraProperties) {
        Intrinsics.checkNotNullParameter(camera, "camera");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        this.f46375a = camera;
        this.f46376b = n0Var;
        this.f46377c = cameraProperties;
    }

    public final x.i a() {
        return this.f46375a;
    }

    public final v b() {
        return this.f46377c;
    }

    public final x.n0 c() {
        return this.f46376b;
    }
}
