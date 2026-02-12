package w5;

import x5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52290a = c.a.a("ef");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f52291b = c.a.a("ty", "v");

    private static t5.a a(x5.c cVar, l5.i iVar) {
        cVar.u();
        t5.a aVar = null;
        while (true) {
            boolean z10 = false;
            while (cVar.hasNext()) {
                int p10 = cVar.p(f52291b);
                if (p10 != 0) {
                    if (p10 != 1) {
                        cVar.s();
                        cVar.T();
                    } else if (z10) {
                        aVar = new t5.a(d.e(cVar, iVar));
                    } else {
                        cVar.T();
                    }
                } else if (cVar.nextInt() == 0) {
                    z10 = true;
                }
            }
            cVar.D();
            return aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t5.a b(x5.c cVar, l5.i iVar) {
        t5.a aVar = null;
        while (cVar.hasNext()) {
            if (cVar.p(f52290a) != 0) {
                cVar.s();
                cVar.T();
            } else {
                cVar.x();
                while (cVar.hasNext()) {
                    t5.a a10 = a(cVar, iVar);
                    if (a10 != null) {
                        aVar = a10;
                    }
                }
                cVar.v();
            }
        }
        return aVar;
    }
}
