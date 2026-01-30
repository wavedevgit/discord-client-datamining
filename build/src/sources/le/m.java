package le;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m extends IOException {

    /* renamed from: d  reason: collision with root package name */
    public final int f37220d;

    public m(int i10) {
        this.f37220d = i10;
    }

    /* JADX WARN: Code restructure failed: missing block: B:0:?, code lost:
        r2 = r2;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static boolean a(java.io.IOException r2) {
        /*
        L0:
            if (r2 == 0) goto L16
            boolean r0 = r2 instanceof le.m
            if (r0 == 0) goto L11
            r0 = r2
            le.m r0 = (le.m) r0
            int r0 = r0.f37220d
            r1 = 2008(0x7d8, float:2.814E-42)
            if (r0 != r1) goto L11
            r2 = 1
            return r2
        L11:
            java.lang.Throwable r2 = r2.getCause()
            goto L0
        L16:
            r2 = 0
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: le.m.a(java.io.IOException):boolean");
    }

    public m(Throwable th2, int i10) {
        super(th2);
        this.f37220d = i10;
    }

    public m(String str, int i10) {
        super(str);
        this.f37220d = i10;
    }

    public m(String str, Throwable th2, int i10) {
        super(str, th2);
        this.f37220d = i10;
    }
}
