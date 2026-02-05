package v5;

import java.util.ArrayList;
import w5.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class m {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51850a = c.a.a("ch", "size", "w", "style", "fFamily", "data");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f51851b = c.a.a("shapes");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static q5.d a(w5.c cVar, l5.i iVar) {
        ArrayList arrayList = new ArrayList();
        cVar.s();
        double d10 = 0.0d;
        String str = null;
        String str2 = null;
        char c10 = 0;
        double d11 = 0.0d;
        while (cVar.hasNext()) {
            int y10 = cVar.y(f51850a);
            if (y10 != 0) {
                if (y10 != 1) {
                    if (y10 != 2) {
                        if (y10 != 3) {
                            if (y10 != 4) {
                                if (y10 != 5) {
                                    cVar.E();
                                    cVar.P();
                                } else {
                                    cVar.s();
                                    while (cVar.hasNext()) {
                                        if (cVar.y(f51851b) != 0) {
                                            cVar.E();
                                            cVar.P();
                                        } else {
                                            cVar.v();
                                            while (cVar.hasNext()) {
                                                arrayList.add((s5.q) h.a(cVar, iVar));
                                            }
                                            cVar.t();
                                        }
                                    }
                                    cVar.z();
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
        cVar.z();
        return new q5.d(arrayList, c10, d11, d10, str, str2);
    }
}
