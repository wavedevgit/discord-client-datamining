package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51820a = c.a.a("ef");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f51821b = c.a.a("ty", "v");

    private static s5.a a(w5.c cVar, l5.i iVar) {
        cVar.s();
        s5.a aVar = null;
        while (true) {
            boolean z10 = false;
            while (cVar.hasNext()) {
                int y10 = cVar.y(f51821b);
                if (y10 != 0) {
                    if (y10 != 1) {
                        cVar.E();
                        cVar.P();
                    } else if (z10) {
                        aVar = new s5.a(d.e(cVar, iVar));
                    } else {
                        cVar.P();
                    }
                } else if (cVar.nextInt() == 0) {
                    z10 = true;
                }
            }
            cVar.z();
            return aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.a b(w5.c cVar, l5.i iVar) {
        s5.a aVar = null;
        while (cVar.hasNext()) {
            if (cVar.y(f51820a) != 0) {
                cVar.E();
                cVar.P();
            } else {
                cVar.v();
                while (cVar.hasNext()) {
                    s5.a a10 = a(cVar, iVar);
                    if (a10 != null) {
                        aVar = a10;
                    }
                }
                cVar.t();
            }
        }
        return aVar;
    }
}
