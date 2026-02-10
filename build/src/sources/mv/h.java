package mv;

import java.util.List;
import kotlin.collections.CollectionsKt;
import ov.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements cv.b, ov.a {

    /* renamed from: a  reason: collision with root package name */
    public static final h f36675a = new h();

    private h() {
    }

    private final Double b(Double d10, Double d11) {
        if (d10 != null && d11 != null) {
            return Double.valueOf(d10.doubleValue() - d11.doubleValue());
        }
        return null;
    }

    @Override // cv.b
    /* renamed from: a */
    public Double f(Object obj, Object obj2) {
        List c10 = c(obj);
        int size = c10.size();
        if (size != 0) {
            if (size != 1) {
                return f36675a.b((Double) CollectionsKt.o0(c10), (Double) c10.get(1));
            }
            Double d10 = (Double) CollectionsKt.o0(c10);
            if (d10 != null) {
                return Double.valueOf(-d10.doubleValue());
            }
        }
        return null;
    }

    public List c(Object obj) {
        return a.C0581a.c(this, obj);
    }
}
