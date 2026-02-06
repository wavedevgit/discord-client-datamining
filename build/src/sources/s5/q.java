package s5;

import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49769a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49770b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f49771c;

    public q(String str, List list, boolean z10) {
        this.f49769a = str;
        this.f49770b = list;
        this.f49771c = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.d(nVar, bVar, this, iVar);
    }

    public List b() {
        return this.f49770b;
    }

    public String c() {
        return this.f49769a;
    }

    public boolean d() {
        return this.f49771c;
    }

    public String toString() {
        return "ShapeGroup{name='" + this.f49769a + "' Shapes: " + Arrays.toString(this.f49770b.toArray()) + '}';
    }
}
