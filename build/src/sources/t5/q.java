package t5;

import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48587a;

    /* renamed from: b  reason: collision with root package name */
    private final List f48588b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f48589c;

    public q(String str, List list, boolean z10) {
        this.f48587a = str;
        this.f48588b = list;
        this.f48589c = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.d(nVar, bVar, this, iVar);
    }

    public List b() {
        return this.f48588b;
    }

    public String c() {
        return this.f48587a;
    }

    public boolean d() {
        return this.f48589c;
    }

    public String toString() {
        return "ShapeGroup{name='" + this.f48587a + "' Shapes: " + Arrays.toString(this.f48588b.toArray()) + '}';
    }
}
