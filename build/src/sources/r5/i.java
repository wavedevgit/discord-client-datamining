package r5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i implements m {

    /* renamed from: a  reason: collision with root package name */
    private final b f48251a;

    /* renamed from: b  reason: collision with root package name */
    private final b f48252b;

    public i(b bVar, b bVar2) {
        this.f48251a = bVar;
        this.f48252b = bVar2;
    }

    @Override // r5.m
    public o5.a a() {
        return new o5.n(this.f48251a.a(), this.f48252b.a());
    }

    @Override // r5.m
    public List b() {
        throw new UnsupportedOperationException("Cannot call getKeyframes on AnimatableSplitDimensionPathValue.");
    }

    @Override // r5.m
    public boolean isStatic() {
        if (this.f48251a.isStatic() && this.f48252b.isStatic()) {
            return true;
        }
        return false;
    }
}
