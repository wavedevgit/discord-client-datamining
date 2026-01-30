package s9;

import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.ranges.IntRange;
import kotlin.ranges.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f48872a;

    public c(int i10) {
        this.f48872a = i10;
    }

    public final Map a(int i10, int i11, int i12) {
        float c10 = d.c(d.i(d.d(i12, 1), this.f48872a) * b(i10), 0.0f);
        float f10 = i11;
        float h10 = f10 / d.h(c10, f10);
        int i13 = 0;
        IntRange u10 = d.u(0, i11);
        LinkedHashMap linkedHashMap = new LinkedHashMap(d.d(o0.e(CollectionsKt.w(u10, 10)), 16));
        for (Object obj : u10) {
            int intValue = ((Number) obj).intValue();
            if (((int) (intValue % h10)) == 0) {
                i13 = intValue;
            }
            linkedHashMap.put(obj, Integer.valueOf(i13));
        }
        return linkedHashMap;
    }

    public final float b(int i10) {
        return i10 / 1000.0f;
    }
}
