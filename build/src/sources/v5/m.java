package v5;

import java.util.ArrayList;
import w5.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class m {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51164a = c.a.a("ch", "size", "w", "style", "fFamily", "data");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f51165b = c.a.a("shapes");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static q5.d a(w5.c cVar, l5.i iVar) {
        ArrayList arrayList = new ArrayList();
        cVar.r();
        double d10 = 0.0d;
        String str = null;
        String str2 = null;
        char c10 = 0;
        double d11 = 0.0d;
        while (cVar.hasNext()) {
            int B = cVar.B(f51164a);
            if (B != 0) {
                if (B != 1) {
                    if (B != 2) {
                        if (B != 3) {
                            if (B != 4) {
                                if (B != 5) {
                                    cVar.E();
                                    cVar.P();
                                } else {
                                    cVar.r();
                                    while (cVar.hasNext()) {
                                        if (cVar.B(f51165b) != 0) {
                                            cVar.E();
                                            cVar.P();
                                        } else {
                                            cVar.u();
                                            while (cVar.hasNext()) {
                                                arrayList.add((s5.q) h.a(cVar, iVar));
                                            }
                                            cVar.s();
                                        }
                                    }
                                    cVar.y();
                                }
                            } else {
                                str2 = cVar.f1();
                            }
                        } else {
                            str = cVar.f1();
                        }
                    } else {
                        d10 = cVar.nextDouble();
                    }
                } else {
                    d11 = cVar.nextDouble();
                }
            } else {
                c10 = cVar.f1().charAt(0);
            }
        }
        cVar.y();
        return new q5.d(arrayList, c10, d11, d10, str, str2);
    }
}
