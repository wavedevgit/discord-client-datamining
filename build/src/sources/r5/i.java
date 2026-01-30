package r5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i implements m {

    /* renamed from: a  reason: collision with root package name */
    private final b f48049a;

    /* renamed from: b  reason: collision with root package name */
    private final b f48050b;

    public i(b bVar, b bVar2) {
        this.f48049a = bVar;
        this.f48050b = bVar2;
    }

    @Override // r5.m
    public o5.a a() {
        return new o5.n(this.f48049a.a(), this.f48050b.a());
    }

    @Override // r5.m
    public List b() {
        throw new UnsupportedOperationException("Cannot call getKeyframes on AnimatableSplitDimensionPathValue.");
    }

    @Override // r5.m
    public boolean isStatic() {
        if (this.f48049a.isStatic() && this.f48050b.isStatic()) {
            return true;
        }
        return false;
    }
}
