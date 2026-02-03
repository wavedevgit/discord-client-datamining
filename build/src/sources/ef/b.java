package ef;

import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends Exception {

    /* renamed from: d  reason: collision with root package name */
    protected final Status f21486d;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public b(com.google.android.gms.common.api.Status r4) {
        /*
            r3 = this;
            int r0 = r4.d()
            java.lang.String r1 = r4.e()
            if (r1 == 0) goto Lf
            java.lang.String r1 = r4.e()
            goto L11
        Lf:
            java.lang.String r1 = ""
        L11:
            java.lang.StringBuilder r2 = new java.lang.StringBuilder
            r2.<init>()
            r2.append(r0)
            java.lang.String r0 = ": "
            r2.append(r0)
            r2.append(r1)
            java.lang.String r0 = r2.toString()
            r3.<init>(r0)
            r3.f21486d = r4
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ef.b.<init>(com.google.android.gms.common.api.Status):void");
    }

    public Status a() {
        return this.f21486d;
    }

    public int b() {
        return this.f21486d.d();
    }
}
