package fd;

import android.media.MediaCodec;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m extends qc.e {

    /* renamed from: d  reason: collision with root package name */
    public final q f22809d;

    /* renamed from: e  reason: collision with root package name */
    public final String f22810e;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public m(java.lang.Throwable r4, fd.q r5) {
        /*
            r3 = this;
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.String r1 = "Decoder failed: "
            r0.append(r1)
            r1 = 0
            if (r5 != 0) goto Lf
            r2 = r1
            goto L11
        Lf:
            java.lang.String r2 = r5.f22811a
        L11:
            r0.append(r2)
            java.lang.String r0 = r0.toString()
            r3.<init>(r0, r4)
            r3.f22809d = r5
            int r5 = ne.w0.f39657a
            r0 = 21
            if (r5 < r0) goto L27
            java.lang.String r1 = a(r4)
        L27:
            r3.f22810e = r1
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: fd.m.<init>(java.lang.Throwable, fd.q):void");
    }

    private static String a(Throwable th2) {
        if (th2 instanceof MediaCodec.CodecException) {
            return ((MediaCodec.CodecException) th2).getDiagnosticInfo();
        }
        return null;
    }
}
