package bk;

import java.util.List;
import pg.xe;
import pg.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f6819a;

    /* renamed from: b  reason: collision with root package name */
    private final List f6820b;

    public b(int i10, List list) {
        this.f6819a = i10;
        this.f6820b = list;
    }

    public String toString() {
        xe a10 = ye.a("FaceContour");
        a10.b("type", this.f6819a);
        a10.c("points", this.f6820b.toArray());
        return a10.toString();
    }
}
