package v5;

import java.util.ArrayList;
import java.util.Collections;
import s5.s;
import w5.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class q {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51168a = c.a.a("nm", "g", "o", "t", "s", "e", "w", "lc", "lj", "ml", "hd", "d");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f51169b = c.a.a("p", "k");

    /* renamed from: c  reason: collision with root package name */
    private static final c.a f51170c = c.a.a("n", "v");

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
            switch (cVar.B(f51168a)) {
                case 0:
                    str = cVar.f1();
                    gVar2 = gVar3;
                case 1:
                    dVar2 = dVar3;
                    cVar.r();
                    int i10 = -1;
                    while (cVar.hasNext()) {
                        int B = cVar.B(f51169b);
                        if (B != 0) {
                            if (B != 1) {
                                cVar.E();
                                cVar.P();
                            } else {
                                cVar2 = d.g(cVar, iVar, i10);
                            }
                        } else {
                            i10 = cVar.nextInt();
                        }
                    }
                    cVar.y();
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
                    z10 = cVar.h();
                    gVar2 = gVar3;
                case 11:
                    cVar.u();
                    while (cVar.hasNext()) {
                        cVar.r();
                        String str2 = null;
                        r5.b bVar4 = null;
                        while (cVar.hasNext()) {
                            int B2 = cVar.B(f51170c);
                            if (B2 != 0) {
                                r5.d dVar4 = dVar3;
                                if (B2 != 1) {
                                    cVar.E();
                                    cVar.P();
                                } else {
                                    bVar4 = d.e(cVar, iVar);
                                }
                                dVar3 = dVar4;
                            } else {
                                str2 = cVar.f1();
                            }
                        }
                        r5.d dVar5 = dVar3;
                        cVar.y();
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
                    cVar.s();
                    if (arrayList.size() == 1) {
                        arrayList.add((r5.b) arrayList.get(0));
                    }
                    gVar2 = gVar3;
                    dVar3 = dVar2;
                    break;
                default:
                    cVar.E();
                    cVar.P();
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
