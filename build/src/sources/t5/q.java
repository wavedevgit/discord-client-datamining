package t5;

import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f50655a;

    /* renamed from: b  reason: collision with root package name */
    private final List f50656b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f50657c;

    public q(String str, List list, boolean z10) {
        this.f50655a = str;
        this.f50656b = list;
        this.f50657c = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.d(nVar, bVar, this, iVar);
    }

    public List b() {
        return this.f50656b;
    }

    public String c() {
        return this.f50655a;
    }

    public boolean d() {
        return this.f50657c;
    }

    public String toString() {
        return "ShapeGroup{name='" + this.f50655a + "' Shapes: " + Arrays.toString(this.f50656b.toArray()) + '}';
    }
}
