package q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class o2 {
    public static x.r a(r.f fVar) {
        int d10 = fVar.d();
        int i10 = 1;
        if (d10 != 1) {
            i10 = 2;
            if (d10 != 2) {
                i10 = 3;
                if (d10 != 3) {
                    i10 = 4;
                    if (d10 != 4) {
                        i10 = 5;
                        if (d10 != 5) {
                            if (d10 != 10001) {
                                i10 = 0;
                            } else {
                                i10 = 6;
                            }
                        }
                    }
                }
            }
        }
        return new x.r(i10, fVar);
    }
}
