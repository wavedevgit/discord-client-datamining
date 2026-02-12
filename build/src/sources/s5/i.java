package s5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i implements o {

    /* renamed from: a  reason: collision with root package name */
    private final b f47834a;

    /* renamed from: b  reason: collision with root package name */
    private final b f47835b;

    public i(b bVar, b bVar2) {
        this.f47834a = bVar;
        this.f47835b = bVar2;
    }

    @Override // s5.o
    public o5.a a() {
        return new o5.n(this.f47834a.a(), this.f47835b.a());
    }

    @Override // s5.o
    public List b() {
        throw new UnsupportedOperationException("Cannot call getKeyframes on AnimatableSplitDimensionPathValue.");
    }

    @Override // s5.o
    public boolean isStatic() {
        if (this.f47834a.isStatic() && this.f47835b.isStatic()) {
            return true;
        }
        return false;
    }
}
