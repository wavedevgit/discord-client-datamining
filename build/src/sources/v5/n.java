package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class n {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52266a = c.a.a("fFamily", "fName", "fStyle", "ascent");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static q5.c a(w5.c cVar) {
        cVar.u();
        String str = null;
        String str2 = null;
        float f10 = 0.0f;
        String str3 = null;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52266a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        if (p10 != 3) {
                            cVar.s();
                            cVar.S();
                        } else {
                            f10 = (float) cVar.nextDouble();
                        }
                    } else {
                        str2 = cVar.e1();
                    }
                } else {
                    str3 = cVar.e1();
                }
            } else {
                str = cVar.e1();
            }
        }
        cVar.D();
        return new q5.c(str, str3, str2, f10);
    }
}
