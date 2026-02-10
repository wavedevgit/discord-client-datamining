package vn;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final x.i f52745a;

    /* renamed from: b  reason: collision with root package name */
    private final x.n0 f52746b;

    /* renamed from: c  reason: collision with root package name */
    private final v f52747c;

    public w(x.i camera, x.n0 n0Var, v cameraProperties) {
        Intrinsics.checkNotNullParameter(camera, "camera");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        this.f52745a = camera;
        this.f52746b = n0Var;
        this.f52747c = cameraProperties;
    }

    public final x.i a() {
        return this.f52745a;
    }

    public final v b() {
        return this.f52747c;
    }

    public final x.n0 c() {
        return this.f52746b;
    }
}
