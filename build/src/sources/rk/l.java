package rk;

import com.google.zxing.Result;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l extends p {

    /* renamed from: i  reason: collision with root package name */
    private final p f48854i = new e();

    private static Result r(Result result) {
        String f10 = result.f();
        if (f10.charAt(0) == '0') {
            Result result2 = new Result(f10.substring(1), null, result.e(), fk.a.UPC_A);
            if (result.d() != null) {
                result2.g(result.d());
            }
            return result2;
        }
        throw fk.g.a();
    }

    @Override // rk.k, fk.m
    public Result a(fk.c cVar, Map map) {
        return r(this.f48854i.a(cVar, map));
    }

    @Override // rk.p, rk.k
    public Result b(int i10, jk.a aVar, Map map) {
        return r(this.f48854i.b(i10, aVar, map));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rk.p
    public int k(jk.a aVar, int[] iArr, StringBuilder sb2) {
        return this.f48854i.k(aVar, iArr, sb2);
    }

    @Override // rk.p
    public Result l(int i10, jk.a aVar, int[] iArr, Map map) {
        return r(this.f48854i.l(i10, aVar, iArr, map));
    }

    @Override // rk.p
    fk.a p() {
        return fk.a.UPC_A;
    }
}
