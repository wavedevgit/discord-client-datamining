package rk;

import com.google.zxing.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o {

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f48860c = {1, 1, 2};

    /* renamed from: a  reason: collision with root package name */
    private final m f48861a = new m();

    /* renamed from: b  reason: collision with root package name */
    private final n f48862b = new n();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Result a(int i10, jk.a aVar, int i11) {
        int[] m10 = p.m(aVar, i11, false, f48860c);
        try {
            return this.f48862b.b(i10, aVar, m10);
        } catch (fk.n unused) {
            return this.f48861a.b(i10, aVar, m10);
        }
    }
}
