package uk;

import com.google.zxing.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o {

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f51676c = {1, 1, 2};

    /* renamed from: a  reason: collision with root package name */
    private final m f51677a = new m();

    /* renamed from: b  reason: collision with root package name */
    private final n f51678b = new n();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Result a(int i10, mk.a aVar, int i11) {
        int[] m10 = p.m(aVar, i11, false, f51676c);
        try {
            return this.f51678b.b(i10, aVar, m10);
        } catch (ik.n unused) {
            return this.f51677a.b(i10, aVar, m10);
        }
    }
}
