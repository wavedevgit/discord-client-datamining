package ga;

import com.facebook.common.references.CloseableReference;
import java.util.List;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final c f24846a;

    /* renamed from: b  reason: collision with root package name */
    private final int f24847b;

    /* renamed from: c  reason: collision with root package name */
    private String f24848c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f24849d;

    /* renamed from: e  reason: collision with root package name */
    private List f24850e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar) {
        this.f24846a = (c) j.g(fVar.e());
        this.f24847b = fVar.d();
        this.f24849d = fVar.f();
        this.f24850e = fVar.c();
        fVar.b();
        this.f24848c = fVar.g();
    }

    public static e b(c cVar) {
        return new e(cVar);
    }

    public static f f(c cVar) {
        return new f(cVar);
    }

    public synchronized void a() {
        CloseableReference.z(this.f24849d);
        this.f24849d = null;
        CloseableReference.I(this.f24850e);
        this.f24850e = null;
    }

    public ab.a c() {
        return null;
    }

    public c d() {
        return this.f24846a;
    }

    public String e() {
        return this.f24848c;
    }

    private e(c cVar) {
        this.f24846a = (c) j.g(cVar);
        this.f24847b = 0;
    }
}
