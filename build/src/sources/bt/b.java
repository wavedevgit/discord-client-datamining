package bt;

import bt.g;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends e {

    /* renamed from: c  reason: collision with root package name */
    private final String f7218c;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public b(java.lang.String r4) {
        /*
            r3 = this;
            java.lang.String r0 = "expected"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            int r0 = r4.length()
            java.lang.Integer r0 = java.lang.Integer.valueOf(r0)
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r2 = "the predefined string "
            r1.append(r2)
            r1.append(r4)
            java.lang.String r1 = r1.toString()
            r2 = 0
            r3.<init>(r0, r1, r2)
            r3.f7218c = r4
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: bt.b.<init>(java.lang.String):void");
    }

    @Override // bt.e
    public g a(Object obj, CharSequence input, int i10, int i11) {
        Intrinsics.checkNotNullParameter(input, "input");
        if (Intrinsics.areEqual(input.subSequence(i10, i11).toString(), this.f7218c)) {
            return null;
        }
        return new g.e(this.f7218c);
    }
}
