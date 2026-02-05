package wu;

import kotlin.collections.CollectionsKt;
import zu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements qu.b, zu.d {

    /* renamed from: a  reason: collision with root package name */
    public static final d f53317a = new d();

    private d() {
    }

    @Override // qu.b
    /* renamed from: a */
    public Boolean f(Object obj, Object obj2) {
        return Boolean.valueOf(!b(CollectionsKt.firstOrNull(vv.a.c(obj))));
    }

    public boolean b(Object obj) {
        return d.a.a(this, obj);
    }
}
