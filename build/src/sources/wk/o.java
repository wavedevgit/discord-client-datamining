package wk;

import com.google.zxing.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o {

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f52888c = {1, 1, 2};

    /* renamed from: a  reason: collision with root package name */
    private final m f52889a = new m();

    /* renamed from: b  reason: collision with root package name */
    private final n f52890b = new n();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Result a(int i10, ok.a aVar, int i11) {
        int[] m10 = p.m(aVar, i11, false, f52888c);
        try {
            return this.f52890b.b(i10, aVar, m10);
        } catch (kk.n unused) {
            return this.f52889a.b(i10, aVar, m10);
        }
    }
}
