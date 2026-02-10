package ha;

import com.facebook.common.references.CloseableReference;
import java.util.List;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final c f27023a;

    /* renamed from: b  reason: collision with root package name */
    private final int f27024b;

    /* renamed from: c  reason: collision with root package name */
    private String f27025c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f27026d;

    /* renamed from: e  reason: collision with root package name */
    private List f27027e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar) {
        this.f27023a = (c) j.g(fVar.e());
        this.f27024b = fVar.d();
        this.f27026d = fVar.f();
        this.f27027e = fVar.c();
        fVar.b();
        this.f27025c = fVar.g();
    }

    public static e b(c cVar) {
        return new e(cVar);
    }

    public static f f(c cVar) {
        return new f(cVar);
    }

    public synchronized void a() {
        CloseableReference.z(this.f27026d);
        this.f27026d = null;
        CloseableReference.I(this.f27027e);
        this.f27027e = null;
    }

    public bb.a c() {
        return null;
    }

    public c d() {
        return this.f27023a;
    }

    public String e() {
        return this.f27025c;
    }

    private e(c cVar) {
        this.f27023a = (c) j.g(cVar);
        this.f27024b = 0;
    }
}
