package uk;

import com.google.zxing.Result;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l extends p {

    /* renamed from: i  reason: collision with root package name */
    private final p f51670i = new e();

    private static Result r(Result result) {
        String f10 = result.f();
        if (f10.charAt(0) == '0') {
            Result result2 = new Result(f10.substring(1), null, result.e(), ik.a.UPC_A);
            if (result.d() != null) {
                result2.g(result.d());
            }
            return result2;
        }
        throw ik.g.a();
    }

    @Override // uk.k, ik.m
    public Result a(ik.c cVar, Map map) {
        return r(this.f51670i.a(cVar, map));
    }

    @Override // uk.p, uk.k
    public Result b(int i10, mk.a aVar, Map map) {
        return r(this.f51670i.b(i10, aVar, map));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // uk.p
    public int k(mk.a aVar, int[] iArr, StringBuilder sb2) {
        return this.f51670i.k(aVar, iArr, sb2);
    }

    @Override // uk.p
    public Result l(int i10, mk.a aVar, int[] iArr, Map map) {
        return r(this.f51670i.l(i10, aVar, iArr, map));
    }

    @Override // uk.p
    ik.a p() {
        return ik.a.UPC_A;
    }
}
