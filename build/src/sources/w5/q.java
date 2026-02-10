package w5;

import java.util.ArrayList;
import java.util.Collections;
import t5.s;
import x5.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class q {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f53297a = c.a.a("nm", "g", "o", "t", "s", "e", "w", "lc", "lj", "ml", "hd", "d");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f53298b = c.a.a("p", "k");

    /* renamed from: c  reason: collision with root package name */
    private static final c.a f53299c = c.a.a("n", "v");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t5.f a(x5.c cVar, l5.i iVar) {
        s5.d dVar;
        s5.d dVar2;
        t5.g gVar;
        ArrayList arrayList = new ArrayList();
        t5.g gVar2 = null;
        String str = null;
        s5.c cVar2 = null;
        s5.f fVar = null;
        s5.f fVar2 = null;
        s5.b bVar = null;
        s.b bVar2 = null;
        s.c cVar3 = null;
        s5.b bVar3 = null;
        float f10 = 0.0f;
        boolean z10 = false;
        s5.d dVar3 = null;
        while (cVar.hasNext()) {
            t5.g gVar3 = gVar2;
            switch (cVar.p(f53297a)) {
                case 0:
                    str = cVar.b1();
                    gVar2 = gVar3;
                case 1:
                    dVar2 = dVar3;
                    cVar.u();
                    int i10 = -1;
                    while (cVar.hasNext()) {
                        int p10 = cVar.p(f53298b);
                        if (p10 != 0) {
                            if (p10 != 1) {
                                cVar.s();
                                cVar.T();
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
                        gVar = t5.g.LINEAR;
                    } else {
                        gVar = t5.g.RADIAL;
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
                        s5.b bVar4 = null;
                        while (cVar.hasNext()) {
                            int p11 = cVar.p(f53299c);
                            if (p11 != 0) {
                                s5.d dVar4 = dVar3;
                                if (p11 != 1) {
                                    cVar.s();
                                    cVar.T();
                                } else {
                                    bVar4 = d.e(cVar, iVar);
                                }
                                dVar3 = dVar4;
                            } else {
                                str2 = cVar.b1();
                            }
                        }
                        s5.d dVar5 = dVar3;
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
                        arrayList.add((s5.b) arrayList.get(0));
                    }
                    gVar2 = gVar3;
                    dVar3 = dVar2;
                    break;
                default:
                    cVar.s();
                    cVar.T();
                    gVar2 = gVar3;
            }
        }
        t5.g gVar4 = gVar2;
        s5.d dVar6 = dVar3;
        if (dVar6 == null) {
            dVar = new s5.d(Collections.singletonList(new z5.a(100)));
        } else {
            dVar = dVar6;
        }
        return new t5.f(str, gVar4, cVar2, dVar, fVar, fVar2, bVar, bVar2, cVar3, f10, arrayList, bVar3, z10);
    }
}
