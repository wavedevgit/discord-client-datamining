package tk;

import com.google.zxing.Result;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l extends p {

    /* renamed from: i  reason: collision with root package name */
    private final p f50717i = new e();

    private static Result r(Result result) {
        String f10 = result.f();
        if (f10.charAt(0) == '0') {
            Result result2 = new Result(f10.substring(1), null, result.e(), hk.a.UPC_A);
            if (result.d() != null) {
                result2.g(result.d());
            }
            return result2;
        }
        throw hk.g.a();
    }

    @Override // tk.k, hk.m
    public Result a(hk.c cVar, Map map) {
        return r(this.f50717i.a(cVar, map));
    }

    @Override // tk.p, tk.k
    public Result b(int i10, lk.a aVar, Map map) {
        return r(this.f50717i.b(i10, aVar, map));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // tk.p
    public int k(lk.a aVar, int[] iArr, StringBuilder sb2) {
        return this.f50717i.k(aVar, iArr, sb2);
    }

    @Override // tk.p
    public Result l(int i10, lk.a aVar, int[] iArr, Map map) {
        return r(this.f50717i.l(i10, aVar, iArr, map));
    }

    @Override // tk.p
    hk.a p() {
        return hk.a.UPC_A;
    }
}
