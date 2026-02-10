package w5;

import java.util.Collections;
import x5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52281a = c.a.a("s", "a");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f52282b = c.a.a("s", "e", "o", "r");

    /* renamed from: c  reason: collision with root package name */
    private static final c.a f52283c = c.a.a("fc", "sc", "sw", "t", "o");

    public static s5.k a(x5.c cVar, l5.i iVar) {
        cVar.u();
        s5.m mVar = null;
        s5.l lVar = null;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52281a);
            if (p10 != 0) {
                if (p10 != 1) {
                    cVar.s();
                    cVar.T();
                } else {
                    mVar = c(cVar, iVar);
                }
            } else {
                lVar = b(cVar, iVar);
            }
        }
        cVar.D();
        return new s5.k(mVar, lVar);
    }

    private static s5.l b(x5.c cVar, l5.i iVar) {
        cVar.u();
        s5.d dVar = null;
        s5.d dVar2 = null;
        s5.d dVar3 = null;
        t5.u uVar = null;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52282b);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        if (p10 != 3) {
                            cVar.s();
                            cVar.T();
                        } else {
                            int nextInt = cVar.nextInt();
                            if (nextInt != 1 && nextInt != 2) {
                                iVar.a("Unsupported text range units: " + nextInt);
                                uVar = t5.u.INDEX;
                            } else if (nextInt == 1) {
                                uVar = t5.u.PERCENT;
                            } else {
                                uVar = t5.u.INDEX;
                            }
                        }
                    } else {
                        dVar3 = d.h(cVar, iVar);
                    }
                } else {
                    dVar2 = d.h(cVar, iVar);
                }
            } else {
                dVar = d.h(cVar, iVar);
            }
        }
        cVar.D();
        if (dVar == null && dVar2 != null) {
            dVar = new s5.d(Collections.singletonList(new z5.a(0)));
        }
        return new s5.l(dVar, dVar2, dVar3, uVar);
    }

    private static s5.m c(x5.c cVar, l5.i iVar) {
        cVar.u();
        s5.a aVar = null;
        s5.a aVar2 = null;
        s5.b bVar = null;
        s5.b bVar2 = null;
        s5.d dVar = null;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52283c);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        if (p10 != 3) {
                            if (p10 != 4) {
                                cVar.s();
                                cVar.T();
                            } else {
                                dVar = d.h(cVar, iVar);
                            }
                        } else {
                            bVar2 = d.e(cVar, iVar);
                        }
                    } else {
                        bVar = d.e(cVar, iVar);
                    }
                } else {
                    aVar2 = d.c(cVar, iVar);
                }
            } else {
                aVar = d.c(cVar, iVar);
            }
        }
        cVar.D();
        return new s5.m(aVar, aVar2, bVar, bVar2, dVar);
    }
}
