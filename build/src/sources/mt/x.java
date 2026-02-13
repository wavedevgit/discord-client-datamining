package mt;

import kotlin.jvm.internal.Intrinsics;
import mt.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements b {

    /* renamed from: a  reason: collision with root package name */
    private final kotlin.reflect.g f37211a;

    public x(kotlin.reflect.g property) {
        Intrinsics.checkNotNullParameter(property, "property");
        this.f37211a = property;
    }

    @Override // mt.b
    public Object a(Object obj) {
        return this.f37211a.get(obj);
    }

    @Override // mt.b
    public Object b(Object obj) {
        return b.a.a(this, obj);
    }

    @Override // ot.a
    public Object c(Object obj, Object obj2) {
        Object obj3 = this.f37211a.get(obj);
        if (obj3 == null) {
            this.f37211a.set(obj, obj2);
            return null;
        } else if (Intrinsics.areEqual(obj3, obj2)) {
            return null;
        } else {
            return obj3;
        }
    }

    @Override // ot.a
    public String getName() {
        return this.f37211a.getName();
    }
}
