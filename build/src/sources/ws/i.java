package ws;

import java.util.Collection;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i implements v {

    /* renamed from: a  reason: collision with root package name */
    private final List f52713a;

    public i(List predicates) {
        Intrinsics.checkNotNullParameter(predicates, "predicates");
        this.f52713a = predicates;
    }

    @Override // ws.v
    public boolean test(Object obj) {
        List<v> list = this.f52713a;
        if ((list instanceof Collection) && list.isEmpty()) {
            return true;
        }
        for (v vVar : list) {
            if (!vVar.test(obj)) {
                return false;
            }
        }
        return true;
    }
}
