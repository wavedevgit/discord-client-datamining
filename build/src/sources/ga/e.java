package ga;

import com.facebook.common.references.CloseableReference;
import java.util.List;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final c f26681a;

    /* renamed from: b  reason: collision with root package name */
    private final int f26682b;

    /* renamed from: c  reason: collision with root package name */
    private String f26683c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f26684d;

    /* renamed from: e  reason: collision with root package name */
    private List f26685e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar) {
        this.f26681a = (c) j.g(fVar.e());
        this.f26682b = fVar.d();
        this.f26684d = fVar.f();
        this.f26685e = fVar.c();
        fVar.b();
        this.f26683c = fVar.g();
    }

    public static e b(c cVar) {
        return new e(cVar);
    }

    public static f f(c cVar) {
        return new f(cVar);
    }

    public synchronized void a() {
        CloseableReference.N(this.f26684d);
        this.f26684d = null;
        CloseableReference.V(this.f26685e);
        this.f26685e = null;
    }

    public ab.a c() {
        return null;
    }

    public c d() {
        return this.f26681a;
    }

    public String e() {
        return this.f26683c;
    }

    private e(c cVar) {
        this.f26681a = (c) j.g(cVar);
        this.f26682b = 0;
    }
}
