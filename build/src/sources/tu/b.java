package tu;

import kotlin.collections.CollectionsKt;
import wu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements nu.b, wu.d {

    /* renamed from: a  reason: collision with root package name */
    public static final b f50297a = new b();

    private b() {
    }

    @Override // nu.b
    /* renamed from: a */
    public Boolean f(Object obj, Object obj2) {
        return Boolean.valueOf(b(CollectionsKt.firstOrNull(sv.a.c(obj))));
    }

    public boolean b(Object obj) {
        return d.a.a(this, obj);
    }
}
