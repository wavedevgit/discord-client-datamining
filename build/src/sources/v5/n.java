package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class n {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51167a = c.a.a("fFamily", "fName", "fStyle", "ascent");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static q5.c a(w5.c cVar) {
        cVar.r();
        String str = null;
        String str2 = null;
        float f10 = 0.0f;
        String str3 = null;
        while (cVar.hasNext()) {
            int B = cVar.B(f51167a);
            if (B != 0) {
                if (B != 1) {
                    if (B != 2) {
                        if (B != 3) {
                            cVar.E();
                            cVar.P();
                        } else {
                            f10 = (float) cVar.nextDouble();
                        }
                    } else {
                        str2 = cVar.f1();
                    }
                } else {
                    str3 = cVar.f1();
                }
            } else {
                str = cVar.f1();
            }
        }
        cVar.y();
        return new q5.c(str, str3, str2, f10);
    }
}
