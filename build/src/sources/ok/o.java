package ok;

import com.google.zxing.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o {

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f43974c = {1, 1, 2};

    /* renamed from: a  reason: collision with root package name */
    private final m f43975a = new m();

    /* renamed from: b  reason: collision with root package name */
    private final n f43976b = new n();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Result a(int i10, gk.a aVar, int i11) {
        int[] m10 = p.m(aVar, i11, false, f43974c);
        try {
            return this.f43976b.b(i10, aVar, m10);
        } catch (ck.n unused) {
            return this.f43975a.b(i10, aVar, m10);
        }
    }
}
