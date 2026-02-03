package v5;

import java.util.ArrayList;
import java.util.Collections;
import s5.s;
import w5.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51162a = c.a.a("nm", "c", "w", "o", "lc", "lj", "ml", "hd", "d");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f51163b = c.a.a("n", "v");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.s a(w5.c cVar, l5.i iVar) {
        ArrayList arrayList = new ArrayList();
        String str = null;
        s.b bVar = null;
        s.c cVar2 = null;
        Object obj = null;
        r5.a aVar = null;
        r5.b bVar2 = null;
        String str2 = null;
        float f10 = 0.0f;
        boolean z10 = false;
        r5.d dVar = null;
        while (cVar.hasNext()) {
            switch (cVar.B(f51162a)) {
                case 0:
                    str = cVar.f1();
                    break;
                case 1:
                    aVar = d.c(cVar, iVar);
                    break;
                case 2:
                    bVar2 = d.e(cVar, iVar);
                    break;
                case 3:
                    dVar = d.h(cVar, iVar);
                    break;
                case 4:
                    bVar = s.b.values()[cVar.nextInt() - 1];
                    break;
                case 5:
                    cVar2 = s.c.values()[cVar.nextInt() - 1];
                    break;
                case 6:
                    f10 = (float) cVar.nextDouble();
                    break;
                case 7:
                    z10 = cVar.h();
                    break;
                case 8:
                    cVar.u();
                    while (cVar.hasNext()) {
                        cVar.r();
                        String str3 = str2;
                        Object obj2 = str3;
                        while (cVar.hasNext()) {
                            int B = cVar.B(f51163b);
                            if (B != 0) {
                                if (B != 1) {
                                    cVar.E();
                                    cVar.P();
                                } else {
                                    obj2 = d.e(cVar, iVar);
                                }
                            } else {
                                str3 = cVar.f1();
                            }
                            obj2 = obj2;
                        }
                        cVar.y();
                        str3.getClass();
                        char c10 = 65535;
                        switch (str3.hashCode()) {
                            case 100:
                                if (str3.equals("d")) {
                                    c10 = 0;
                                    break;
                                }
                                break;
                            case 103:
                                if (str3.equals("g")) {
                                    c10 = 1;
                                    break;
                                }
                                break;
                            case 111:
                                if (str3.equals("o")) {
                                    c10 = 2;
                                    break;
                                }
                                break;
                        }
                        switch (c10) {
                            case 0:
                            case 1:
                                iVar.u(true);
                                arrayList.add(obj2);
                                break;
                            case 2:
                                obj = obj2;
                                break;
                        }
                        str2 = null;
                    }
                    cVar.s();
                    if (arrayList.size() == 1) {
                        arrayList.add((r5.b) arrayList.get(0));
                        break;
                    }
                    break;
                default:
                    cVar.P();
                    continue;
            }
            str2 = null;
        }
        if (dVar == null) {
            dVar = new r5.d(Collections.singletonList(new y5.a(100)));
        }
        if (bVar == null) {
            bVar = s.b.BUTT;
        }
        if (cVar2 == null) {
            cVar2 = s.c.MITER;
        }
        return new s5.s(str, obj, arrayList, aVar, dVar, bVar2, bVar, cVar2, f10, z10);
    }
}
