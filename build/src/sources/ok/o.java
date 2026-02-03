package ok;

import com.google.zxing.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o {

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f44118c = {1, 1, 2};

    /* renamed from: a  reason: collision with root package name */
    private final m f44119a = new m();

    /* renamed from: b  reason: collision with root package name */
    private final n f44120b = new n();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Result a(int i10, gk.a aVar, int i11) {
        int[] m10 = p.m(aVar, i11, false, f44118c);
        try {
            return this.f44120b.b(i10, aVar, m10);
        } catch (ck.n unused) {
            return this.f44119a.b(i10, aVar, m10);
        }
    }
}
