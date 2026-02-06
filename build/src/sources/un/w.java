package un;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final x.i f51837a;

    /* renamed from: b  reason: collision with root package name */
    private final x.n0 f51838b;

    /* renamed from: c  reason: collision with root package name */
    private final v f51839c;

    public w(x.i camera, x.n0 n0Var, v cameraProperties) {
        Intrinsics.checkNotNullParameter(camera, "camera");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        this.f51837a = camera;
        this.f51838b = n0Var;
        this.f51839c = cameraProperties;
    }

    public final x.i a() {
        return this.f51837a;
    }

    public final v b() {
        return this.f51839c;
    }

    public final x.n0 c() {
        return this.f51838b;
    }
}
