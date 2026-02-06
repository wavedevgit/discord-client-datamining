package cv;

import ev.a;
import java.util.List;
import kotlin.collections.CollectionsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements su.b, ev.a {

    /* renamed from: a  reason: collision with root package name */
    public static final h f20054a = new h();

    private h() {
    }

    private final Double b(Double d10, Double d11) {
        if (d10 != null && d11 != null) {
            return Double.valueOf(d10.doubleValue() - d11.doubleValue());
        }
        return null;
    }

    @Override // su.b
    /* renamed from: a */
    public Double f(Object obj, Object obj2) {
        List c10 = c(obj);
        int size = c10.size();
        if (size != 0) {
            if (size != 1) {
                return f20054a.b((Double) CollectionsKt.o0(c10), (Double) c10.get(1));
            }
            Double d10 = (Double) CollectionsKt.o0(c10);
            if (d10 != null) {
                return Double.valueOf(-d10.doubleValue());
            }
        }
        return null;
    }

    public List c(Object obj) {
        return a.C0316a.c(this, obj);
    }
}
