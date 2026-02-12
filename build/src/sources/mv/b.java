package mv;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import ov.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements cv.b, ov.a {

    /* renamed from: a  reason: collision with root package name */
    public static final b f36668a = new b();

    private b() {
    }

    @Override // cv.b
    /* renamed from: a */
    public Double f(Object obj, Object obj2) {
        List b10 = b(obj);
        if (b10.size() < 2) {
            b10 = null;
        }
        if (b10 != null) {
            Double d10 = (Double) b10.get(1);
            Double d11 = (Double) CollectionsKt.o0(b10);
            if (d11 != null && d10 != null && !Intrinsics.areEqual(d10, 0.0d)) {
                return Double.valueOf(d11.doubleValue() / d10.doubleValue());
            }
        }
        return null;
    }

    public List b(Object obj) {
        return a.C0581a.c(this, obj);
    }
}
