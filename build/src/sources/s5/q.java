package s5;

import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49288a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49289b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f49290c;

    public q(String str, List list, boolean z10) {
        this.f49288a = str;
        this.f49289b = list;
        this.f49290c = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.d(nVar, bVar, this, iVar);
    }

    public List b() {
        return this.f49289b;
    }

    public String c() {
        return this.f49288a;
    }

    public boolean d() {
        return this.f49290c;
    }

    public String toString() {
        return "ShapeGroup{name='" + this.f49288a + "' Shapes: " + Arrays.toString(this.f49289b.toArray()) + '}';
    }
}
