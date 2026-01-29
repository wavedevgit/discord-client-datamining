package ts;

import kotlin.jvm.internal.Intrinsics;
import ts.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements b {

    /* renamed from: a  reason: collision with root package name */
    private final kotlin.reflect.g f49898a;

    public x(kotlin.reflect.g property) {
        Intrinsics.checkNotNullParameter(property, "property");
        this.f49898a = property;
    }

    @Override // ts.b
    public Object a(Object obj) {
        return this.f49898a.get(obj);
    }

    @Override // ts.b
    public Object b(Object obj) {
        return b.a.a(this, obj);
    }

    @Override // vs.a
    public Object c(Object obj, Object obj2) {
        Object obj3 = this.f49898a.get(obj);
        if (obj3 == null) {
            this.f49898a.set(obj, obj2);
            return null;
        } else if (Intrinsics.areEqual(obj3, obj2)) {
            return null;
        } else {
            return obj3;
        }
    }

    @Override // vs.a
    public String getName() {
        return this.f49898a.getName();
    }
}
