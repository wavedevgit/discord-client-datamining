package mn;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final x.i f39340a;

    /* renamed from: b  reason: collision with root package name */
    private final x.n0 f39341b;

    /* renamed from: c  reason: collision with root package name */
    private final v f39342c;

    public w(x.i camera, x.n0 n0Var, v cameraProperties) {
        Intrinsics.checkNotNullParameter(camera, "camera");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        this.f39340a = camera;
        this.f39341b = n0Var;
        this.f39342c = cameraProperties;
    }

    public final x.i a() {
        return this.f39340a;
    }

    public final v b() {
        return this.f39342c;
    }

    public final x.n0 c() {
        return this.f39341b;
    }
}
