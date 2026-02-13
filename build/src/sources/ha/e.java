package ha;

import com.facebook.common.references.CloseableReference;
import java.util.List;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final c f27592a;

    /* renamed from: b  reason: collision with root package name */
    private final int f27593b;

    /* renamed from: c  reason: collision with root package name */
    private String f27594c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f27595d;

    /* renamed from: e  reason: collision with root package name */
    private List f27596e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar) {
        this.f27592a = (c) j.g(fVar.e());
        this.f27593b = fVar.d();
        this.f27595d = fVar.f();
        this.f27596e = fVar.c();
        fVar.b();
        this.f27594c = fVar.g();
    }

    public static e b(c cVar) {
        return new e(cVar);
    }

    public static f f(c cVar) {
        return new f(cVar);
    }

    public synchronized void a() {
        CloseableReference.z(this.f27595d);
        this.f27595d = null;
        CloseableReference.I(this.f27596e);
        this.f27596e = null;
    }

    public bb.a c() {
        return null;
    }

    public c d() {
        return this.f27592a;
    }

    public String e() {
        return this.f27594c;
    }

    private e(c cVar) {
        this.f27592a = (c) j.g(cVar);
        this.f27593b = 0;
    }
}
