package v5;

import java.util.ArrayList;
import java.util.Collections;
import s5.s;
import w5.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class q {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52222a = c.a.a("nm", "g", "o", "t", "s", "e", "w", "lc", "lj", "ml", "hd", "d");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f52223b = c.a.a("p", "k");

    /* renamed from: c  reason: collision with root package name */
    private static final c.a f52224c = c.a.a("n", "v");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.f a(w5.c cVar, l5.i iVar) {
        r5.d dVar;
        r5.d dVar2;
        s5.g gVar;
        ArrayList arrayList = new ArrayList();
        s5.g gVar2 = null;
        String str = null;
        r5.c cVar2 = null;
        r5.f fVar = null;
        r5.f fVar2 = null;
        r5.b bVar = null;
        s.b bVar2 = null;
        s.c cVar3 = null;
        r5.b bVar3 = null;
        float f10 = 0.0f;
        boolean z10 = false;
        r5.d dVar3 = null;
        while (cVar.hasNext()) {
            s5.g gVar3 = gVar2;
            switch (cVar.p(f52222a)) {
                case 0:
                    str = cVar.e1();
                    gVar2 = gVar3;
                case 1:
                    dVar2 = dVar3;
                    cVar.u();
                    int i10 = -1;
                    while (cVar.hasNext()) {
                        int p10 = cVar.p(f52223b);
                        if (p10 != 0) {
                            if (p10 != 1) {
                                cVar.s();
                                cVar.S();
                            } else {
                                cVar2 = d.g(cVar, iVar, i10);
                            }
                        } else {
                            i10 = cVar.nextInt();
                        }
                    }
                    cVar.D();
                    gVar2 = gVar3;
                    dVar3 = dVar2;
                case 2:
                    dVar3 = d.h(cVar, iVar);
                    gVar2 = gVar3;
                case 3:
                    dVar2 = dVar3;
                    if (cVar.nextInt() == 1) {
                        gVar = s5.g.LINEAR;
                    } else {
                        gVar = s5.g.RADIAL;
                    }
                    gVar2 = gVar;
                    dVar3 = dVar2;
                case 4:
                    fVar = d.i(cVar, iVar);
                    gVar2 = gVar3;
                case 5:
                    fVar2 = d.i(cVar, iVar);
                    gVar2 = gVar3;
                case 6:
                    bVar = d.e(cVar, iVar);
                    gVar2 = gVar3;
                case 7:
                    dVar2 = dVar3;
                    bVar2 = s.b.values()[cVar.nextInt() - 1];
                    gVar2 = gVar3;
                    dVar3 = dVar2;
                case 8:
                    dVar2 = dVar3;
                    cVar3 = s.c.values()[cVar.nextInt() - 1];
                    gVar2 = gVar3;
                    dVar3 = dVar2;
                case 9:
                    dVar2 = dVar3;
                    f10 = (float) cVar.nextDouble();
                    gVar2 = gVar3;
                    dVar3 = dVar2;
                case 10:
                    z10 = cVar.g();
                    gVar2 = gVar3;
                case 11:
                    cVar.x();
                    while (cVar.hasNext()) {
                        cVar.u();
                        String str2 = null;
                        r5.b bVar4 = null;
                        while (cVar.hasNext()) {
                            int p11 = cVar.p(f52224c);
                            if (p11 != 0) {
                                r5.d dVar4 = dVar3;
                                if (p11 != 1) {
                                    cVar.s();
                                    cVar.S();
                                } else {
                                    bVar4 = d.e(cVar, iVar);
                                }
                                dVar3 = dVar4;
                            } else {
                                str2 = cVar.e1();
                            }
                        }
                        r5.d dVar5 = dVar3;
                        cVar.D();
                        if (str2.equals("o")) {
                            bVar3 = bVar4;
                        } else if (str2.equals("d") || str2.equals("g")) {
                            iVar.u(true);
                            arrayList.add(bVar4);
                            dVar3 = dVar5;
                        }
                        dVar3 = dVar5;
                    }
                    dVar2 = dVar3;
                    cVar.v();
                    if (arrayList.size() == 1) {
                        arrayList.add((r5.b) arrayList.get(0));
                    }
                    gVar2 = gVar3;
                    dVar3 = dVar2;
                    break;
                default:
                    cVar.s();
                    cVar.S();
                    gVar2 = gVar3;
            }
        }
        s5.g gVar4 = gVar2;
        r5.d dVar6 = dVar3;
        if (dVar6 == null) {
            dVar = new r5.d(Collections.singletonList(new y5.a(100)));
        } else {
            dVar = dVar6;
        }
        return new s5.f(str, gVar4, cVar2, dVar, fVar, fVar2, bVar, bVar2, cVar3, f10, arrayList, bVar3, z10);
    }
}
