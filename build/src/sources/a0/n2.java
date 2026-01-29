package a0;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n2 {

    /* renamed from: a  reason: collision with root package name */
    private final List f178a = new ArrayList();

    private static void b(List list, int i10, int[] iArr, int i11) {
        if (i11 >= iArr.length) {
            list.add((int[]) iArr.clone());
            return;
        }
        for (int i12 = 0; i12 < i10; i12++) {
            int i13 = 0;
            while (true) {
                if (i13 < i11) {
                    if (i12 == iArr[i13]) {
                        break;
                    }
                    i13++;
                } else {
                    iArr[i11] = i12;
                    b(list, i10, iArr, i11 + 1);
                    break;
                }
            }
        }
    }

    private List c(int i10) {
        ArrayList arrayList = new ArrayList();
        b(arrayList, i10, new int[i10], 0);
        return arrayList;
    }

    public boolean a(o2 o2Var) {
        return this.f178a.add(o2Var);
    }

    /* JADX WARN: Code restructure failed: missing block: B:31:0x0074, code lost:
        continue;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.util.List d(java.util.List r10) {
        /*
            r9 = this;
            boolean r0 = r10.isEmpty()
            if (r0 == 0) goto Lc
            java.util.ArrayList r10 = new java.util.ArrayList
            r10.<init>()
            return r10
        Lc:
            int r0 = r10.size()
            java.util.List r1 = r9.f178a
            int r1 = r1.size()
            r2 = 0
            if (r0 == r1) goto L1a
            return r2
        L1a:
            java.util.List r0 = r9.f178a
            int r0 = r0.size()
            java.util.List r0 = r9.c(r0)
            int r1 = r10.size()
            a0.o2[] r1 = new a0.o2[r1]
            java.util.Iterator r0 = r0.iterator()
        L2e:
            boolean r3 = r0.hasNext()
            r4 = 0
            if (r3 == 0) goto L77
            java.lang.Object r3 = r0.next()
            int[] r3 = (int[]) r3
            r5 = 1
            r6 = r5
        L3d:
            java.util.List r7 = r9.f178a
            int r7 = r7.size()
            if (r4 >= r7) goto L74
            r7 = r3[r4]
            int r8 = r10.size()
            if (r7 >= r8) goto L71
            java.util.List r7 = r9.f178a
            java.lang.Object r7 = r7.get(r4)
            a0.o2 r7 = (a0.o2) r7
            r8 = r3[r4]
            java.lang.Object r8 = r10.get(r8)
            a0.o2 r8 = (a0.o2) r8
            boolean r7 = r7.g(r8)
            r6 = r6 & r7
            if (r6 != 0) goto L65
            goto L74
        L65:
            r7 = r3[r4]
            java.util.List r8 = r9.f178a
            java.lang.Object r8 = r8.get(r4)
            a0.o2 r8 = (a0.o2) r8
            r1[r7] = r8
        L71:
            int r4 = r4 + 1
            goto L3d
        L74:
            if (r6 == 0) goto L2e
            r4 = r5
        L77:
            if (r4 == 0) goto L7e
            java.util.List r10 = java.util.Arrays.asList(r1)
            return r10
        L7e:
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: a0.n2.d(java.util.List):java.util.List");
    }
}
