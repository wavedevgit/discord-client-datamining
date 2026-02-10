package ek;

import java.util.List;
import qg.xe;
import qg.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f22902a;

    /* renamed from: b  reason: collision with root package name */
    private final List f22903b;

    public b(int i10, List list) {
        this.f22902a = i10;
        this.f22903b = list;
    }

    public String toString() {
        xe a10 = ye.a("FaceContour");
        a10.b("type", this.f22902a);
        a10.c("points", this.f22903b.toArray());
        return a10.toString();
    }
}
