package s5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i implements o {

    /* renamed from: a  reason: collision with root package name */
    private final b f47833a;

    /* renamed from: b  reason: collision with root package name */
    private final b f47834b;

    public i(b bVar, b bVar2) {
        this.f47833a = bVar;
        this.f47834b = bVar2;
    }

    @Override // s5.o
    public o5.a a() {
        return new o5.n(this.f47833a.a(), this.f47834b.a());
    }

    @Override // s5.o
    public List b() {
        throw new UnsupportedOperationException("Cannot call getKeyframes on AnimatableSplitDimensionPathValue.");
    }

    @Override // s5.o
    public boolean isStatic() {
        if (this.f47833a.isStatic() && this.f47834b.isStatic()) {
            return true;
        }
        return false;
    }
}
