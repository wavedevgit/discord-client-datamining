package sn;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final x.i f49991a;

    /* renamed from: b  reason: collision with root package name */
    private final x.n0 f49992b;

    /* renamed from: c  reason: collision with root package name */
    private final v f49993c;

    public w(x.i camera, x.n0 n0Var, v cameraProperties) {
        Intrinsics.checkNotNullParameter(camera, "camera");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        this.f49991a = camera;
        this.f49992b = n0Var;
        this.f49993c = cameraProperties;
    }

    public final x.i a() {
        return this.f49991a;
    }

    public final v b() {
        return this.f49993c;
    }

    public final x.n0 c() {
        return this.f49992b;
    }
}
