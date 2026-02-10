package iv;

import kotlin.collections.CollectionsKt;
import lv.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements cv.b, lv.d {

    /* renamed from: a  reason: collision with root package name */
    public static final d f30442a = new d();

    private d() {
    }

    @Override // cv.b
    /* renamed from: a */
    public Boolean f(Object obj, Object obj2) {
        return Boolean.valueOf(!b(CollectionsKt.firstOrNull(mw.a.c(obj))));
    }

    public boolean b(Object obj) {
        return d.a.a(this, obj);
    }
}
