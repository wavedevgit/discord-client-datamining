package ys;

import kotlin.jvm.internal.Intrinsics;
import ys.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d extends e {

    /* renamed from: c  reason: collision with root package name */
    private final int f55274c;

    /* renamed from: d  reason: collision with root package name */
    private final int f55275d;

    /* renamed from: e  reason: collision with root package name */
    private final a f55276e;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public d(int r3, int r4, ys.a r5, java.lang.String r6) {
        /*
            r2 = this;
            java.lang.String r0 = "setter"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            java.lang.String r0 = "name"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r6, r0)
            r0 = 0
            if (r3 != r4) goto L12
            java.lang.Integer r1 = java.lang.Integer.valueOf(r3)
            goto L13
        L12:
            r1 = r0
        L13:
            r2.<init>(r1, r6, r0)
            r2.f55274c = r3
            r2.f55275d = r4
            r2.f55276e = r5
            r5 = 1
            java.lang.String r6 = " for field "
            if (r5 > r3) goto L5c
            r5 = 10
            if (r3 >= r5) goto L5c
            if (r3 > r4) goto L2a
            if (r4 >= r5) goto L2a
            return
        L2a:
            java.lang.StringBuilder r5 = new java.lang.StringBuilder
            r5.<init>()
            java.lang.String r0 = "Invalid maximum length "
            r5.append(r0)
            r5.append(r4)
            r5.append(r6)
            java.lang.String r4 = r2.c()
            r5.append(r4)
            java.lang.String r4 = ": expected "
            r5.append(r4)
            r5.append(r3)
            java.lang.String r3 = "..9"
            r5.append(r3)
            java.lang.String r3 = r5.toString()
            java.lang.IllegalArgumentException r4 = new java.lang.IllegalArgumentException
            java.lang.String r3 = r3.toString()
            r4.<init>(r3)
            throw r4
        L5c:
            java.lang.StringBuilder r4 = new java.lang.StringBuilder
            r4.<init>()
            java.lang.String r5 = "Invalid minimum length "
            r4.append(r5)
            r4.append(r3)
            r4.append(r6)
            java.lang.String r3 = r2.c()
            r4.append(r3)
            java.lang.String r3 = ": expected 1..9"
            r4.append(r3)
            java.lang.String r3 = r4.toString()
            java.lang.IllegalArgumentException r4 = new java.lang.IllegalArgumentException
            java.lang.String r3 = r3.toString()
            r4.<init>(r3)
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: ys.d.<init>(int, int, ys.a, java.lang.String):void");
    }

    @Override // ys.e
    public g a(Object obj, CharSequence input, int i10, int i11) {
        int d10;
        g f10;
        Intrinsics.checkNotNullParameter(input, "input");
        int i12 = i11 - i10;
        int i13 = this.f55274c;
        if (i12 < i13) {
            return new g.c(i13);
        }
        int i14 = this.f55275d;
        if (i12 > i14) {
            return new g.d(i14);
        }
        a aVar = this.f55276e;
        d10 = f.d(input, i10, i11);
        f10 = f.f(aVar, obj, new vs.a(d10, i12));
        return f10;
    }
}
