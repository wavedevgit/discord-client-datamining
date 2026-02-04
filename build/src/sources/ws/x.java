package ws;

import kotlin.jvm.internal.Intrinsics;
import ws.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements b {

    /* renamed from: a  reason: collision with root package name */
    private final kotlin.reflect.g f52731a;

    public x(kotlin.reflect.g property) {
        Intrinsics.checkNotNullParameter(property, "property");
        this.f52731a = property;
    }

    @Override // ws.b
    public Object a(Object obj) {
        return this.f52731a.get(obj);
    }

    @Override // ws.b
    public Object b(Object obj) {
        return b.a.a(this, obj);
    }

    @Override // ys.a
    public Object c(Object obj, Object obj2) {
        Object obj3 = this.f52731a.get(obj);
        if (obj3 == null) {
            this.f52731a.set(obj, obj2);
            return null;
        } else if (Intrinsics.areEqual(obj3, obj2)) {
            return null;
        } else {
            return obj3;
        }
    }

    @Override // ys.a
    public String getName() {
        return this.f52731a.getName();
    }
}
