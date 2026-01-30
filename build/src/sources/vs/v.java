package vs;

import kotlin.jvm.internal.Intrinsics;
import vs.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v extends e {

    /* renamed from: c  reason: collision with root package name */
    private final Integer f51967c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f51968d;

    /* renamed from: e  reason: collision with root package name */
    private final a f51969e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f51970f;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public v(java.lang.Integer r3, java.lang.Integer r4, vs.a r5, java.lang.String r6, boolean r7) {
        /*
            r2 = this;
            java.lang.String r0 = "setter"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            java.lang.String r0 = "name"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r6, r0)
            boolean r0 = kotlin.jvm.internal.Intrinsics.areEqual(r3, r4)
            r1 = 0
            if (r0 == 0) goto L13
            r0 = r3
            goto L14
        L13:
            r0 = r1
        L14:
            r2.<init>(r0, r6, r1)
            r2.f51967c = r3
            r2.f51968d = r4
            r2.f51969e = r5
            r2.f51970f = r7
            java.lang.Integer r3 = r2.b()
            if (r3 == 0) goto L67
            kotlin.ranges.IntRange r3 = new kotlin.ranges.IntRange
            r4 = 1
            r5 = 9
            r3.<init>(r4, r5)
            java.lang.Integer r4 = r2.b()
            int r4 = r4.intValue()
            boolean r3 = r3.contains(r4)
            if (r3 == 0) goto L3c
            goto L67
        L3c:
            java.lang.StringBuilder r3 = new java.lang.StringBuilder
            r3.<init>()
            java.lang.String r4 = "Invalid length for field "
            r3.append(r4)
            java.lang.String r4 = r2.c()
            r3.append(r4)
            java.lang.String r4 = ": "
            r3.append(r4)
            java.lang.Integer r4 = r2.b()
            r3.append(r4)
            java.lang.String r3 = r3.toString()
            java.lang.IllegalArgumentException r4 = new java.lang.IllegalArgumentException
            java.lang.String r3 = r3.toString()
            r4.<init>(r3)
            throw r4
        L67:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: vs.v.<init>(java.lang.Integer, java.lang.Integer, vs.a, java.lang.String, boolean):void");
    }

    @Override // vs.e
    public g a(Object obj, CharSequence input, int i10, int i11) {
        Integer e10;
        g f10;
        Intrinsics.checkNotNullParameter(input, "input");
        Integer num = this.f51968d;
        if (num != null && i11 - i10 > num.intValue()) {
            return new g.d(this.f51968d.intValue());
        }
        Integer num2 = this.f51967c;
        if (num2 == null || i11 - i10 >= num2.intValue()) {
            e10 = f.e(input, i10, i11);
            if (e10 == null) {
                return g.b.f51918a;
            }
            a aVar = this.f51969e;
            boolean z10 = this.f51970f;
            int intValue = e10.intValue();
            if (z10) {
                intValue = -intValue;
            }
            f10 = f.f(aVar, obj, Integer.valueOf(intValue));
            return f10;
        }
        return new g.c(this.f51967c.intValue());
    }
}
