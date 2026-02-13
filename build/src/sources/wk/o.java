package wk;

import com.google.zxing.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o {

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f53457c = {1, 1, 2};

    /* renamed from: a  reason: collision with root package name */
    private final m f53458a = new m();

    /* renamed from: b  reason: collision with root package name */
    private final n f53459b = new n();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Result a(int i10, ok.a aVar, int i11) {
        int[] m10 = p.m(aVar, i11, false, f53457c);
        try {
            return this.f53459b.b(i10, aVar, m10);
        } catch (kk.n unused) {
            return this.f53458a.b(i10, aVar, m10);
        }
    }
}
