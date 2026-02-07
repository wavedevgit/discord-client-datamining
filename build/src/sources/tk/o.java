package tk;

import com.google.zxing.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o {

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f50771c = {1, 1, 2};

    /* renamed from: a  reason: collision with root package name */
    private final m f50772a = new m();

    /* renamed from: b  reason: collision with root package name */
    private final n f50773b = new n();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Result a(int i10, lk.a aVar, int i11) {
        int[] m10 = p.m(aVar, i11, false, f50771c);
        try {
            return this.f50773b.b(i10, aVar, m10);
        } catch (hk.n unused) {
            return this.f50772a.b(i10, aVar, m10);
        }
    }
}
