package ga;

import com.facebook.common.references.CloseableReference;
import java.util.List;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final c f24593a;

    /* renamed from: b  reason: collision with root package name */
    private final int f24594b;

    /* renamed from: c  reason: collision with root package name */
    private String f24595c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f24596d;

    /* renamed from: e  reason: collision with root package name */
    private List f24597e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar) {
        this.f24593a = (c) j.g(fVar.e());
        this.f24594b = fVar.d();
        this.f24596d = fVar.f();
        this.f24597e = fVar.c();
        fVar.b();
        this.f24595c = fVar.g();
    }

    public static e b(c cVar) {
        return new e(cVar);
    }

    public static f f(c cVar) {
        return new f(cVar);
    }

    public synchronized void a() {
        CloseableReference.N(this.f24596d);
        this.f24596d = null;
        CloseableReference.W(this.f24597e);
        this.f24597e = null;
    }

    public ab.a c() {
        return null;
    }

    public c d() {
        return this.f24593a;
    }

    public String e() {
        return this.f24595c;
    }

    private e(c cVar) {
        this.f24593a = (c) j.g(cVar);
        this.f24594b = 0;
    }
}
