package bt;

import bt.b;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements b {

    /* renamed from: a  reason: collision with root package name */
    private final kotlin.reflect.g f7089a;

    public x(kotlin.reflect.g property) {
        Intrinsics.checkNotNullParameter(property, "property");
        this.f7089a = property;
    }

    @Override // bt.b
    public Object a(Object obj) {
        return this.f7089a.get(obj);
    }

    @Override // bt.b
    public Object b(Object obj) {
        return b.a.a(this, obj);
    }

    @Override // dt.a
    public Object c(Object obj, Object obj2) {
        Object obj3 = this.f7089a.get(obj);
        if (obj3 == null) {
            this.f7089a.set(obj, obj2);
            return null;
        } else if (Intrinsics.areEqual(obj3, obj2)) {
            return null;
        } else {
            return obj3;
        }
    }

    @Override // dt.a
    public String getName() {
        return this.f7089a.getName();
    }
}
