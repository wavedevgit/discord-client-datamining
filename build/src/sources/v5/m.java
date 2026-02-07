package v5;

import java.util.ArrayList;
import w5.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class m {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52263a = c.a.a("ch", "size", "w", "style", "fFamily", "data");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f52264b = c.a.a("shapes");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static q5.d a(w5.c cVar, l5.i iVar) {
        ArrayList arrayList = new ArrayList();
        cVar.u();
        double d10 = 0.0d;
        String str = null;
        String str2 = null;
        char c10 = 0;
        double d11 = 0.0d;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52263a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        if (p10 != 3) {
                            if (p10 != 4) {
                                if (p10 != 5) {
                                    cVar.s();
                                    cVar.S();
                                } else {
                                    cVar.u();
                                    while (cVar.hasNext()) {
                                        if (cVar.p(f52264b) != 0) {
                                            cVar.s();
                                            cVar.S();
                                        } else {
                                            cVar.x();
                                            while (cVar.hasNext()) {
                                                arrayList.add((s5.q) h.a(cVar, iVar));
                                            }
                                            cVar.v();
                                        }
                                    }
                                    cVar.D();
                                }
                            } else {
                                str2 = cVar.e1();
                            }
                        } else {
                            str = cVar.e1();
                        }
                    } else {
                        d10 = cVar.nextDouble();
                    }
                } else {
                    d11 = cVar.nextDouble();
                }
            } else {
                c10 = cVar.e1().charAt(0);
            }
        }
        cVar.D();
        return new q5.d(arrayList, c10, d11, d10, str, str2);
    }
}
