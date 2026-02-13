package t5;

import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49156a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49157b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f49158c;

    public q(String str, List list, boolean z10) {
        this.f49156a = str;
        this.f49157b = list;
        this.f49158c = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.d(nVar, bVar, this, iVar);
    }

    public List b() {
        return this.f49157b;
    }

    public String c() {
        return this.f49156a;
    }

    public boolean d() {
        return this.f49158c;
    }

    public String toString() {
        return "ShapeGroup{name='" + this.f49156a + "' Shapes: " + Arrays.toString(this.f49157b.toArray()) + '}';
    }
}
