package qu;

import kotlin.collections.CollectionsKt;
import tu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements ku.b, tu.d {

    /* renamed from: a  reason: collision with root package name */
    public static final d f47693a = new d();

    private d() {
    }

    @Override // ku.b
    /* renamed from: a */
    public Boolean f(Object obj, Object obj2) {
        return Boolean.valueOf(!b(CollectionsKt.firstOrNull(pv.a.c(obj))));
    }

    public boolean b(Object obj) {
        return d.a.a(this, obj);
    }
}
