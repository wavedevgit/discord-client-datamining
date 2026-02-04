package xj;

import java.util.List;
import og.xe;
import og.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f53323a;

    /* renamed from: b  reason: collision with root package name */
    private final List f53324b;

    public b(int i10, List list) {
        this.f53323a = i10;
        this.f53324b = list;
    }

    public String toString() {
        xe a10 = ye.a("FaceContour");
        a10.b("type", this.f53323a);
        a10.c("points", this.f53324b.toArray());
        return a10.toString();
    }
}
