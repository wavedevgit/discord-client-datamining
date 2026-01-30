package ok;

import com.google.zxing.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o {

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f43990c = {1, 1, 2};

    /* renamed from: a  reason: collision with root package name */
    private final m f43991a = new m();

    /* renamed from: b  reason: collision with root package name */
    private final n f43992b = new n();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Result a(int i10, gk.a aVar, int i11) {
        int[] m10 = p.m(aVar, i11, false, f43990c);
        try {
            return this.f43992b.b(i10, aVar, m10);
        } catch (ck.n unused) {
            return this.f43991a.b(i10, aVar, m10);
        }
    }
}
