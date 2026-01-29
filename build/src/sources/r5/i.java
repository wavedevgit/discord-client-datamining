package r5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i implements m {

    /* renamed from: a  reason: collision with root package name */
    private final b f48033a;

    /* renamed from: b  reason: collision with root package name */
    private final b f48034b;

    public i(b bVar, b bVar2) {
        this.f48033a = bVar;
        this.f48034b = bVar2;
    }

    @Override // r5.m
    public o5.a a() {
        return new o5.n(this.f48033a.a(), this.f48034b.a());
    }

    @Override // r5.m
    public List b() {
        throw new UnsupportedOperationException("Cannot call getKeyframes on AnimatableSplitDimensionPathValue.");
    }

    @Override // r5.m
    public boolean isStatic() {
        if (this.f48033a.isStatic() && this.f48034b.isStatic()) {
            return true;
        }
        return false;
    }
}
