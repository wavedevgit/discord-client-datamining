package sk;

import ck.k;
import ck.m;
import ck.o;
import ck.p;
import com.google.zxing.Result;
import gk.e;
import java.util.ArrayList;
import java.util.Map;
import tk.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements m {

    /* renamed from: a  reason: collision with root package name */
    private static final Result[] f49128a = new Result[0];

    private static Result[] b(ck.c cVar, Map map, boolean z10) {
        ArrayList arrayList = new ArrayList();
        vk.b d10 = vk.a.d(cVar, map, z10);
        for (p[] pVarArr : d10.b()) {
            e i10 = j.i(d10.a(), pVarArr[4], pVarArr[5], pVarArr[6], pVarArr[7], e(pVarArr), c(pVarArr));
            Result result = new Result(i10.k(), i10.g(), pVarArr, ck.a.PDF_417);
            result.h(o.ERROR_CORRECTION_LEVEL, i10.b());
            result.h(o.ERRORS_CORRECTED, i10.d());
            result.h(o.ERASURES_CORRECTED, i10.c());
            c cVar2 = (c) i10.f();
            if (cVar2 != null) {
                result.h(o.PDF417_EXTRA_METADATA, cVar2);
            }
            result.h(o.ORIENTATION, Integer.valueOf(d10.c()));
            o oVar = o.SYMBOLOGY_IDENTIFIER;
            result.h(oVar, "]L" + i10.j());
            arrayList.add(result);
        }
        return (Result[]) arrayList.toArray(f49128a);
    }

    private static int c(p[] pVarArr) {
        return Math.max(Math.max(d(pVarArr[0], pVarArr[4]), (d(pVarArr[6], pVarArr[2]) * 17) / 18), Math.max(d(pVarArr[1], pVarArr[5]), (d(pVarArr[7], pVarArr[3]) * 17) / 18));
    }

    private static int d(p pVar, p pVar2) {
        if (pVar != null && pVar2 != null) {
            return (int) Math.abs(pVar.c() - pVar2.c());
        }
        return 0;
    }

    private static int e(p[] pVarArr) {
        return Math.min(Math.min(f(pVarArr[0], pVarArr[4]), (f(pVarArr[6], pVarArr[2]) * 17) / 18), Math.min(f(pVarArr[1], pVarArr[5]), (f(pVarArr[7], pVarArr[3]) * 17) / 18));
    }

    private static int f(p pVar, p pVar2) {
        if (pVar != null && pVar2 != null) {
            return (int) Math.abs(pVar.c() - pVar2.c());
        }
        return Integer.MAX_VALUE;
    }

    @Override // ck.m
    public Result a(ck.c cVar, Map map) {
        Result result;
        Result[] b10 = b(cVar, map, false);
        if (b10.length != 0 && (result = b10[0]) != null) {
            return result;
        }
        throw k.a();
    }

    @Override // ck.m
    public void reset() {
    }
}
