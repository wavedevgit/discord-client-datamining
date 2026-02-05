package bn;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements e0 {

    /* renamed from: b  reason: collision with root package name */
    private final Map f6654b;

    private y(Map map) {
        this.f6654b = map;
    }

    @Override // bn.e0
    public c0 a(KClass renderingType) {
        Intrinsics.checkNotNullParameter(renderingType, "renderingType");
        Object obj = this.f6654b.get(renderingType);
        if (obj instanceof c0) {
            return (c0) obj;
        }
        return null;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public y(bn.c0... r7) {
        /*
            r6 = this;
            java.lang.String r0 = "bindings"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r7, r0)
            java.util.ArrayList r0 = new java.util.ArrayList
            int r1 = r7.length
            r0.<init>(r1)
            int r1 = r7.length
            r2 = 0
            r3 = r2
        Le:
            if (r3 >= r1) goto L20
            r4 = r7[r3]
            int r3 = r3 + 1
            kotlin.reflect.KClass r5 = r4.getType()
            kotlin.Pair r4 = or.v.a(r5, r4)
            r0.add(r4)
            goto Le
        L20:
            java.util.Map r0 = kotlin.collections.o0.u(r0)
            java.util.Set r1 = r0.keySet()
            int r1 = r1.size()
            int r3 = r7.length
            if (r1 != r3) goto L33
            r6.<init>(r0)
            return
        L33:
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.util.ArrayList r1 = new java.util.ArrayList
            int r3 = r7.length
            r1.<init>(r3)
            int r3 = r7.length
        L3f:
            if (r2 >= r3) goto L4d
            r4 = r7[r2]
            int r2 = r2 + 1
            kotlin.reflect.KClass r4 = r4.getType()
            r1.add(r4)
            goto L3f
        L4d:
            r0.append(r1)
            java.lang.String r7 = " must not have duplicate entries."
            r0.append(r7)
            java.lang.String r7 = r0.toString()
            java.lang.IllegalStateException r0 = new java.lang.IllegalStateException
            java.lang.String r7 = r7.toString()
            r0.<init>(r7)
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: bn.y.<init>(bn.c0[]):void");
    }
}
