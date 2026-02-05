package androidx.recyclerview.widget;

import androidx.recyclerview.widget.AdapterHelper;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    final a f5155a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        AdapterHelper.b a(int i10, int i11, int i12, Object obj);

        void b(AdapterHelper.b bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(a aVar) {
        this.f5155a = aVar;
    }

    private int a(List list) {
        boolean z10 = false;
        for (int size = list.size() - 1; size >= 0; size--) {
            if (((AdapterHelper.b) list.get(size)).f4824a == 8) {
                if (z10) {
                    return size;
                }
            } else {
                z10 = true;
            }
        }
        return -1;
    }

    private void c(List list, int i10, AdapterHelper.b bVar, int i11, AdapterHelper.b bVar2) {
        int i12;
        int i13 = bVar.f4827d;
        int i14 = bVar2.f4825b;
        if (i13 < i14) {
            i12 = -1;
        } else {
            i12 = 0;
        }
        int i15 = bVar.f4825b;
        if (i15 < i14) {
            i12++;
        }
        if (i14 <= i15) {
            bVar.f4825b = i15 + bVar2.f4827d;
        }
        int i16 = bVar2.f4825b;
        if (i16 <= i13) {
            bVar.f4827d = i13 + bVar2.f4827d;
        }
        bVar2.f4825b = i16 + i12;
        list.set(i10, bVar2);
        list.set(i11, bVar);
    }

    private void d(List list, int i10, int i11) {
        AdapterHelper.b bVar = (AdapterHelper.b) list.get(i10);
        AdapterHelper.b bVar2 = (AdapterHelper.b) list.get(i11);
        int i12 = bVar2.f4824a;
        if (i12 != 1) {
            if (i12 != 2) {
                if (i12 != 4) {
                    return;
                }
                f(list, i10, bVar, i11, bVar2);
                return;
            }
            e(list, i10, bVar, i11, bVar2);
            return;
        }
        c(list, i10, bVar, i11, bVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(List list) {
        while (true) {
            int a10 = a(list);
            if (a10 != -1) {
                d(list, a10, a10 + 1);
            } else {
                return;
            }
        }
    }

    void e(List list, int i10, AdapterHelper.b bVar, int i11, AdapterHelper.b bVar2) {
        boolean z10;
        int i12 = bVar.f4825b;
        int i13 = bVar.f4827d;
        boolean z11 = false;
        if (i12 < i13) {
            if (bVar2.f4825b == i12 && bVar2.f4827d == i13 - i12) {
                z10 = false;
                z11 = true;
            } else {
                z10 = false;
            }
        } else if (bVar2.f4825b == i13 + 1 && bVar2.f4827d == i12 - i13) {
            z10 = true;
            z11 = true;
        } else {
            z10 = true;
        }
        int i14 = bVar2.f4825b;
        if (i13 < i14) {
            bVar2.f4825b = i14 - 1;
        } else {
            int i15 = bVar2.f4827d;
            if (i13 < i14 + i15) {
                bVar2.f4827d = i15 - 1;
                bVar.f4824a = 2;
                bVar.f4827d = 1;
                if (bVar2.f4827d == 0) {
                    list.remove(i11);
                    this.f5155a.b(bVar2);
                    return;
                }
                return;
            }
        }
        int i16 = bVar.f4825b;
        int i17 = bVar2.f4825b;
        AdapterHelper.b bVar3 = null;
        if (i16 <= i17) {
            bVar2.f4825b = i17 + 1;
        } else {
            int i18 = bVar2.f4827d;
            if (i16 < i17 + i18) {
                bVar3 = this.f5155a.a(2, i16 + 1, (i17 + i18) - i16, null);
                bVar2.f4827d = bVar.f4825b - bVar2.f4825b;
            }
        }
        if (z11) {
            list.set(i10, bVar2);
            list.remove(i11);
            this.f5155a.b(bVar);
            return;
        }
        if (z10) {
            if (bVar3 != null) {
                int i19 = bVar.f4825b;
                if (i19 > bVar3.f4825b) {
                    bVar.f4825b = i19 - bVar3.f4827d;
                }
                int i20 = bVar.f4827d;
                if (i20 > bVar3.f4825b) {
                    bVar.f4827d = i20 - bVar3.f4827d;
                }
            }
            int i21 = bVar.f4825b;
            if (i21 > bVar2.f4825b) {
                bVar.f4825b = i21 - bVar2.f4827d;
            }
            int i22 = bVar.f4827d;
            if (i22 > bVar2.f4825b) {
                bVar.f4827d = i22 - bVar2.f4827d;
            }
        } else {
            if (bVar3 != null) {
                int i23 = bVar.f4825b;
                if (i23 >= bVar3.f4825b) {
                    bVar.f4825b = i23 - bVar3.f4827d;
                }
                int i24 = bVar.f4827d;
                if (i24 >= bVar3.f4825b) {
                    bVar.f4827d = i24 - bVar3.f4827d;
                }
            }
            int i25 = bVar.f4825b;
            if (i25 >= bVar2.f4825b) {
                bVar.f4825b = i25 - bVar2.f4827d;
            }
            int i26 = bVar.f4827d;
            if (i26 >= bVar2.f4825b) {
                bVar.f4827d = i26 - bVar2.f4827d;
            }
        }
        list.set(i10, bVar2);
        if (bVar.f4825b != bVar.f4827d) {
            list.set(i11, bVar);
        } else {
            list.remove(i11);
        }
        if (bVar3 != null) {
            list.add(i10, bVar3);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:11:0x0027  */
    /* JADX WARN: Removed duplicated region for block: B:12:0x002b  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x0048  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x004c  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0056  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x005b  */
    /* JADX WARN: Removed duplicated region for block: B:24:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    void f(java.util.List r9, int r10, androidx.recyclerview.widget.AdapterHelper.b r11, int r12, androidx.recyclerview.widget.AdapterHelper.b r13) {
        /*
            r8 = this;
            int r0 = r11.f4827d
            int r1 = r13.f4825b
            r2 = 4
            r3 = 1
            r4 = 0
            if (r0 >= r1) goto Ld
            int r1 = r1 - r3
            r13.f4825b = r1
            goto L20
        Ld:
            int r5 = r13.f4827d
            int r1 = r1 + r5
            if (r0 >= r1) goto L20
            int r5 = r5 - r3
            r13.f4827d = r5
            androidx.recyclerview.widget.n$a r0 = r8.f5155a
            int r1 = r11.f4825b
            java.lang.Object r5 = r13.f4826c
            androidx.recyclerview.widget.AdapterHelper$b r0 = r0.a(r2, r1, r3, r5)
            goto L21
        L20:
            r0 = r4
        L21:
            int r1 = r11.f4825b
            int r5 = r13.f4825b
            if (r1 > r5) goto L2b
            int r5 = r5 + r3
            r13.f4825b = r5
            goto L41
        L2b:
            int r6 = r13.f4827d
            int r7 = r5 + r6
            if (r1 >= r7) goto L41
            int r5 = r5 + r6
            int r5 = r5 - r1
            androidx.recyclerview.widget.n$a r4 = r8.f5155a
            int r1 = r1 + r3
            java.lang.Object r3 = r13.f4826c
            androidx.recyclerview.widget.AdapterHelper$b r4 = r4.a(r2, r1, r5, r3)
            int r1 = r13.f4827d
            int r1 = r1 - r5
            r13.f4827d = r1
        L41:
            r9.set(r12, r11)
            int r11 = r13.f4827d
            if (r11 <= 0) goto L4c
            r9.set(r10, r13)
            goto L54
        L4c:
            r9.remove(r10)
            androidx.recyclerview.widget.n$a r11 = r8.f5155a
            r11.b(r13)
        L54:
            if (r0 == 0) goto L59
            r9.add(r10, r0)
        L59:
            if (r4 == 0) goto L5e
            r9.add(r10, r4)
        L5e:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.recyclerview.widget.n.f(java.util.List, int, androidx.recyclerview.widget.AdapterHelper$b, int, androidx.recyclerview.widget.AdapterHelper$b):void");
    }
}
