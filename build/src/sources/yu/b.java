package yu;

import bv.d;
import kotlin.collections.CollectionsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements su.b, bv.d {

    /* renamed from: a  reason: collision with root package name */
    public static final b f55678a = new b();

    private b() {
    }

    @Override // su.b
    /* renamed from: a */
    public Boolean f(Object obj, Object obj2) {
        return Boolean.valueOf(b(CollectionsKt.firstOrNull(cw.a.c(obj))));
    }

    public boolean b(Object obj) {
        return d.a.a(this, obj);
    }
}
