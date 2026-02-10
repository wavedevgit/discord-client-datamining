package zu;

import cv.d;
import kotlin.collections.CollectionsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements tu.b, cv.d {

    /* renamed from: a  reason: collision with root package name */
    public static final d f56705a = new d();

    private d() {
    }

    @Override // tu.b
    /* renamed from: a */
    public Boolean f(Object obj, Object obj2) {
        return Boolean.valueOf(!b(CollectionsKt.firstOrNull(dw.a.c(obj))));
    }

    public boolean b(Object obj) {
        return d.a.a(this, obj);
    }
}
