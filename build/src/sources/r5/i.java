package r5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i implements m {

    /* renamed from: a  reason: collision with root package name */
    private final b f48699a;

    /* renamed from: b  reason: collision with root package name */
    private final b f48700b;

    public i(b bVar, b bVar2) {
        this.f48699a = bVar;
        this.f48700b = bVar2;
    }

    @Override // r5.m
    public o5.a a() {
        return new o5.n(this.f48699a.a(), this.f48700b.a());
    }

    @Override // r5.m
    public List b() {
        throw new UnsupportedOperationException("Cannot call getKeyframes on AnimatableSplitDimensionPathValue.");
    }

    @Override // r5.m
    public boolean isStatic() {
        if (this.f48699a.isStatic() && this.f48700b.isStatic()) {
            return true;
        }
        return false;
    }
}
