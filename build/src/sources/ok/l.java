package ok;

import com.google.zxing.Result;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l extends p {

    /* renamed from: i  reason: collision with root package name */
    private final p f43984i = new e();

    private static Result r(Result result) {
        String f10 = result.f();
        if (f10.charAt(0) == '0') {
            Result result2 = new Result(f10.substring(1), null, result.e(), ck.a.UPC_A);
            if (result.d() != null) {
                result2.g(result.d());
            }
            return result2;
        }
        throw ck.g.a();
    }

    @Override // ok.k, ck.m
    public Result a(ck.c cVar, Map map) {
        return r(this.f43984i.a(cVar, map));
    }

    @Override // ok.p, ok.k
    public Result b(int i10, gk.a aVar, Map map) {
        return r(this.f43984i.b(i10, aVar, map));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ok.p
    public int k(gk.a aVar, int[] iArr, StringBuilder sb2) {
        return this.f43984i.k(aVar, iArr, sb2);
    }

    @Override // ok.p
    public Result l(int i10, gk.a aVar, int[] iArr, Map map) {
        return r(this.f43984i.l(i10, aVar, iArr, map));
    }

    @Override // ok.p
    ck.a p() {
        return ck.a.UPC_A;
    }
}
