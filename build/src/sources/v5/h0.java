package v5;

import android.graphics.PointF;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h0 implements n0 {

    /* renamed from: a  reason: collision with root package name */
    public static final h0 f52193a = new h0();

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f52194b = c.a.a("c", "v", "i", "o");

    private h0() {
    }

    @Override // v5.n0
    /* renamed from: b */
    public s5.o a(w5.c cVar, float f10) {
        if (cVar.m() == c.b.BEGIN_ARRAY) {
            cVar.x();
        }
        cVar.u();
        List list = null;
        List list2 = null;
        List list3 = null;
        boolean z10 = false;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52194b);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        if (p10 != 3) {
                            cVar.s();
                            cVar.S();
                        } else {
                            list3 = s.f(cVar, f10);
                        }
                    } else {
                        list2 = s.f(cVar, f10);
                    }
                } else {
                    list = s.f(cVar, f10);
                }
            } else {
                z10 = cVar.g();
            }
        }
        cVar.D();
        if (cVar.m() == c.b.END_ARRAY) {
            cVar.v();
        }
        if (list != null && list2 != null && list3 != null) {
            if (list.isEmpty()) {
                return new s5.o(new PointF(), false, Collections.EMPTY_LIST);
            }
            int size = list.size();
            PointF pointF = (PointF) list.get(0);
            ArrayList arrayList = new ArrayList(size);
            for (int i10 = 1; i10 < size; i10++) {
                PointF pointF2 = (PointF) list.get(i10);
                int i11 = i10 - 1;
                arrayList.add(new q5.a(x5.i.a((PointF) list.get(i11), (PointF) list3.get(i11)), x5.i.a(pointF2, (PointF) list2.get(i10)), pointF2));
            }
            if (z10) {
                PointF pointF3 = (PointF) list.get(0);
                int i12 = size - 1;
                arrayList.add(new q5.a(x5.i.a((PointF) list.get(i12), (PointF) list3.get(i12)), x5.i.a(pointF3, (PointF) list2.get(0)), pointF3));
            }
            return new s5.o(pointF, z10, arrayList);
        }
        throw new IllegalArgumentException("Shape data was missing information.");
    }
}
