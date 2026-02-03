package s5;

import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48878a;

    /* renamed from: b  reason: collision with root package name */
    private final List f48879b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f48880c;

    public q(String str, List list, boolean z10) {
        this.f48878a = str;
        this.f48879b = list;
        this.f48880c = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.d(nVar, bVar, this, iVar);
    }

    public List b() {
        return this.f48879b;
    }

    public String c() {
        return this.f48878a;
    }

    public boolean d() {
        return this.f48880c;
    }

    public String toString() {
        return "ShapeGroup{name='" + this.f48878a + "' Shapes: " + Arrays.toString(this.f48879b.toArray()) + '}';
    }
}
