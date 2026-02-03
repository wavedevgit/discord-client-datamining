package us;

import kotlin.jvm.internal.Intrinsics;
import us.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements b {

    /* renamed from: a  reason: collision with root package name */
    private final kotlin.reflect.g f50672a;

    public x(kotlin.reflect.g property) {
        Intrinsics.checkNotNullParameter(property, "property");
        this.f50672a = property;
    }

    @Override // us.b
    public Object a(Object obj) {
        return this.f50672a.get(obj);
    }

    @Override // us.b
    public Object b(Object obj) {
        return b.a.a(this, obj);
    }

    @Override // ws.a
    public Object c(Object obj, Object obj2) {
        Object obj3 = this.f50672a.get(obj);
        if (obj3 == null) {
            this.f50672a.set(obj, obj2);
            return null;
        } else if (Intrinsics.areEqual(obj3, obj2)) {
            return null;
        } else {
            return obj3;
        }
    }

    @Override // ws.a
    public String getName() {
        return this.f50672a.getName();
    }
}
