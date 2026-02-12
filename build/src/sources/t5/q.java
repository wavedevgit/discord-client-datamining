package t5;

import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48588a;

    /* renamed from: b  reason: collision with root package name */
    private final List f48589b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f48590c;

    public q(String str, List list, boolean z10) {
        this.f48588a = str;
        this.f48589b = list;
        this.f48590c = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.d(nVar, bVar, this, iVar);
    }

    public List b() {
        return this.f48589b;
    }

    public String c() {
        return this.f48588a;
    }

    public boolean d() {
        return this.f48590c;
    }

    public String toString() {
        return "ShapeGroup{name='" + this.f48588a + "' Shapes: " + Arrays.toString(this.f48589b.toArray()) + '}';
    }
}
