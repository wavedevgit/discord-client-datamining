package j$.time.format;

import java.util.ArrayList;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class d implements e {

    /* renamed from: a  reason: collision with root package name */
    public final e[] f31319a;

    /* renamed from: b  reason: collision with root package name */
    public final boolean f31320b;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public d(java.util.List r2, boolean r3) {
        /*
            r1 = this;
            java.util.ArrayList r2 = (java.util.ArrayList) r2
            int r0 = r2.size()
            j$.time.format.e[] r0 = new j$.time.format.e[r0]
            java.lang.Object[] r2 = r2.toArray(r0)
            j$.time.format.e[] r2 = (j$.time.format.e[]) r2
            r1.<init>(r2, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: j$.time.format.d.<init>(java.util.List, boolean):void");
    }

    public d(e[] eVarArr, boolean z10) {
        this.f31319a = eVarArr;
        this.f31320b = z10;
    }

    /* JADX WARN: Code restructure failed: missing block: B:12:0x0026, code lost:
        return true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x002c, code lost:
        if (r2 != false) goto L13;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x002f, code lost:
        return true;
     */
    @Override // j$.time.format.e
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final boolean r(j$.time.format.q r8, java.lang.StringBuilder r9) {
        /*
            r7 = this;
            int r0 = r9.length()
            r1 = 1
            boolean r2 = r7.f31320b
            if (r2 == 0) goto Le
            int r3 = r8.f31359c
            int r3 = r3 + r1
            r8.f31359c = r3
        Le:
            j$.time.format.e[] r3 = r7.f31319a     // Catch: java.lang.Throwable -> L27
            int r4 = r3.length     // Catch: java.lang.Throwable -> L27
            r5 = 0
        L12:
            if (r5 >= r4) goto L2c
            r6 = r3[r5]     // Catch: java.lang.Throwable -> L27
            boolean r6 = r6.r(r8, r9)     // Catch: java.lang.Throwable -> L27
            if (r6 != 0) goto L29
            r9.setLength(r0)     // Catch: java.lang.Throwable -> L27
            if (r2 == 0) goto L2f
        L21:
            int r9 = r8.f31359c
            int r9 = r9 - r1
            r8.f31359c = r9
            return r1
        L27:
            r9 = move-exception
            goto L30
        L29:
            int r5 = r5 + 1
            goto L12
        L2c:
            if (r2 == 0) goto L2f
            goto L21
        L2f:
            return r1
        L30:
            if (r2 == 0) goto L37
            int r0 = r8.f31359c
            int r0 = r0 - r1
            r8.f31359c = r0
        L37:
            throw r9
        */
        throw new UnsupportedOperationException("Method not decompiled: j$.time.format.d.r(j$.time.format.q, java.lang.StringBuilder):boolean");
    }

    @Override // j$.time.format.e
    public final int t(o oVar, CharSequence charSequence, int i10) {
        boolean z10 = this.f31320b;
        e[] eVarArr = this.f31319a;
        int i11 = 0;
        if (z10) {
            ArrayList arrayList = oVar.f31352d;
            u c10 = oVar.c();
            c10.getClass();
            u uVar = new u();
            ((HashMap) uVar.f31363a).putAll(c10.f31363a);
            uVar.f31364b = c10.f31364b;
            uVar.f31365c = c10.f31365c;
            uVar.f31366d = c10.f31366d;
            arrayList.add(uVar);
            int length = eVarArr.length;
            int i12 = i10;
            while (i11 < length) {
                i12 = eVarArr[i11].t(oVar, charSequence, i12);
                if (i12 < 0) {
                    ArrayList arrayList2 = oVar.f31352d;
                    arrayList2.remove(arrayList2.size() - 1);
                    return i10;
                }
                i11++;
            }
            ArrayList arrayList3 = oVar.f31352d;
            arrayList3.remove(arrayList3.size() - 2);
            return i12;
        }
        int length2 = eVarArr.length;
        while (i11 < length2) {
            i10 = eVarArr[i11].t(oVar, charSequence, i10);
            if (i10 < 0) {
                return i10;
            }
            i11++;
        }
        return i10;
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder();
        e[] eVarArr = this.f31319a;
        if (eVarArr != null) {
            boolean z10 = this.f31320b;
            sb2.append(z10 ? "[" : "(");
            for (e eVar : eVarArr) {
                sb2.append(eVar);
            }
            sb2.append(z10 ? "]" : ")");
        }
        return sb2.toString();
    }
}
