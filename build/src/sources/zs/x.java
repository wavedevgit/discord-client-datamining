package zs;

import kotlin.jvm.internal.Intrinsics;
import zs.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements b {

    /* renamed from: a  reason: collision with root package name */
    private final kotlin.reflect.g f56260a;

    public x(kotlin.reflect.g property) {
        Intrinsics.checkNotNullParameter(property, "property");
        this.f56260a = property;
    }

    @Override // zs.b
    public Object a(Object obj) {
        return this.f56260a.get(obj);
    }

    @Override // zs.b
    public Object b(Object obj) {
        return b.a.a(this, obj);
    }

    @Override // bt.a
    public Object c(Object obj, Object obj2) {
        Object obj3 = this.f56260a.get(obj);
        if (obj3 == null) {
            this.f56260a.set(obj, obj2);
            return null;
        } else if (Intrinsics.areEqual(obj3, obj2)) {
            return null;
        } else {
            return obj3;
        }
    }

    @Override // bt.a
    public String getName() {
        return this.f56260a.getName();
    }
}
