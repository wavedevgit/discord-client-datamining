package r5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i implements m {

    /* renamed from: a  reason: collision with root package name */
    private final b f48651a;

    /* renamed from: b  reason: collision with root package name */
    private final b f48652b;

    public i(b bVar, b bVar2) {
        this.f48651a = bVar;
        this.f48652b = bVar2;
    }

    @Override // r5.m
    public o5.a a() {
        return new o5.n(this.f48651a.a(), this.f48652b.a());
    }

    @Override // r5.m
    public List b() {
        throw new UnsupportedOperationException("Cannot call getKeyframes on AnimatableSplitDimensionPathValue.");
    }

    @Override // r5.m
    public boolean isStatic() {
        if (this.f48651a.isStatic() && this.f48652b.isStatic()) {
            return true;
        }
        return false;
    }
}
