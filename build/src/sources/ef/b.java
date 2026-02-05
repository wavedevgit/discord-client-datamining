package ef;

import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends Exception {

    /* renamed from: d  reason: collision with root package name */
    protected final Status f21558d;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public b(com.google.android.gms.common.api.Status r6) {
        /*
            r5 = this;
            int r0 = r6.d()
            java.lang.String r1 = r6.e()
            if (r1 == 0) goto Lf
            java.lang.String r1 = r6.e()
            goto L11
        Lf:
            java.lang.String r1 = ""
        L11:
            java.lang.String r2 = java.lang.String.valueOf(r0)
            int r2 = r2.length()
            java.lang.String r3 = java.lang.String.valueOf(r1)
            int r2 = r2 + 2
            int r3 = r3.length()
            java.lang.StringBuilder r4 = new java.lang.StringBuilder
            int r2 = r2 + r3
            r4.<init>(r2)
            r4.append(r0)
            java.lang.String r0 = ": "
            r4.append(r0)
            r4.append(r1)
            java.lang.String r0 = r4.toString()
            r5.<init>(r0)
            r5.f21558d = r6
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ef.b.<init>(com.google.android.gms.common.api.Status):void");
    }

    public Status a() {
        return this.f21558d;
    }

    public int b() {
        return this.f21558d.d();
    }
}
