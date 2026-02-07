package un;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final x.i f51885a;

    /* renamed from: b  reason: collision with root package name */
    private final x.n0 f51886b;

    /* renamed from: c  reason: collision with root package name */
    private final v f51887c;

    public w(x.i camera, x.n0 n0Var, v cameraProperties) {
        Intrinsics.checkNotNullParameter(camera, "camera");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        this.f51885a = camera;
        this.f51886b = n0Var;
        this.f51887c = cameraProperties;
    }

    public final x.i a() {
        return this.f51885a;
    }

    public final v b() {
        return this.f51887c;
    }

    public final x.n0 c() {
        return this.f51886b;
    }
}
