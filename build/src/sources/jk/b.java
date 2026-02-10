package jk;

import ik.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements m {
    /* JADX WARN: Removed duplicated region for block: B:17:0x003c  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x0062  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x0088  */
    /* JADX WARN: Removed duplicated region for block: B:36:0x0093  */
    @Override // ik.m
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public com.google.zxing.Result a(ik.c r10, java.util.Map r11) {
        /*
            r9 = this;
            lk.a r1 = new lk.a
            mk.b r10 = r10.a()
            r1.<init>(r10)
            r10 = 0
            r2 = 0
            jk.a r0 = r1.a(r2)     // Catch: ik.g -> L2a ik.k -> L2d
            ik.p[] r3 = r0.b()     // Catch: ik.g -> L2a ik.k -> L2d
            int r2 = r0.c()     // Catch: ik.g -> L26 ik.k -> L28
            kk.a r4 = new kk.a     // Catch: ik.g -> L26 ik.k -> L28
            r4.<init>()     // Catch: ik.g -> L26 ik.k -> L28
            mk.e r0 = r4.c(r0)     // Catch: ik.g -> L26 ik.k -> L28
            r4 = r3
            r3 = r10
            r10 = r0
            r0 = r2
            r2 = r3
            goto L3a
        L26:
            r0 = move-exception
            goto L30
        L28:
            r0 = move-exception
            goto L35
        L2a:
            r0 = move-exception
            r3 = r10
            goto L30
        L2d:
            r0 = move-exception
            r3 = r10
            goto L35
        L30:
            r4 = r3
            r3 = r0
            r0 = r2
            r2 = r10
            goto L3a
        L35:
            r4 = r2
            r2 = r0
            r0 = r4
            r4 = r3
            r3 = r10
        L3a:
            if (r10 != 0) goto L52
            r10 = 1
            jk.a r10 = r1.a(r10)     // Catch: ik.g -> L54 ik.k -> L57
            ik.p[] r4 = r10.b()     // Catch: ik.g -> L54 ik.k -> L57
            int r0 = r10.c()     // Catch: ik.g -> L54 ik.k -> L57
            kk.a r1 = new kk.a     // Catch: ik.g -> L54 ik.k -> L57
            r1.<init>()     // Catch: ik.g -> L54 ik.k -> L57
            mk.e r10 = r1.c(r10)     // Catch: ik.g -> L54 ik.k -> L57
        L52:
            r5 = r4
            goto L60
        L54:
            r0 = move-exception
        L55:
            r10 = r0
            goto L59
        L57:
            r0 = move-exception
            goto L55
        L59:
            if (r2 != 0) goto L5f
            if (r3 == 0) goto L5e
            throw r3
        L5e:
            throw r10
        L5f:
            throw r2
        L60:
            if (r11 == 0) goto L6b
            ik.e r1 = ik.e.NEED_RESULT_POINT_CALLBACK
            java.lang.Object r11 = r11.get(r1)
            android.support.v4.media.session.b.a(r11)
        L6b:
            com.google.zxing.Result r1 = new com.google.zxing.Result
            java.lang.String r2 = r10.k()
            byte[] r3 = r10.g()
            int r4 = r10.e()
            ik.a r6 = ik.a.AZTEC
            long r7 = java.lang.System.currentTimeMillis()
            r1.<init>(r2, r3, r4, r5, r6, r7)
            java.util.List r11 = r10.a()
            if (r11 == 0) goto L8d
            ik.o r2 = ik.o.BYTE_SEGMENTS
            r1.h(r2, r11)
        L8d:
            java.lang.String r11 = r10.b()
            if (r11 == 0) goto L98
            ik.o r2 = ik.o.ERROR_CORRECTION_LEVEL
            r1.h(r2, r11)
        L98:
            java.lang.Integer r11 = r10.d()
            int r11 = r11.intValue()
            int r0 = r0 + r11
            ik.o r11 = ik.o.ERRORS_CORRECTED
            java.lang.Integer r0 = java.lang.Integer.valueOf(r0)
            r1.h(r11, r0)
            ik.o r11 = ik.o.SYMBOLOGY_IDENTIFIER
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.String r2 = "]z"
            r0.append(r2)
            int r10 = r10.j()
            r0.append(r10)
            java.lang.String r10 = r0.toString()
            r1.h(r11, r10)
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: jk.b.a(ik.c, java.util.Map):com.google.zxing.Result");
    }

    @Override // ik.m
    public void reset() {
    }
}
