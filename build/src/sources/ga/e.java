package ga;

import com.facebook.common.references.CloseableReference;
import java.util.List;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final c f26570a;

    /* renamed from: b  reason: collision with root package name */
    private final int f26571b;

    /* renamed from: c  reason: collision with root package name */
    private String f26572c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f26573d;

    /* renamed from: e  reason: collision with root package name */
    private List f26574e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar) {
        this.f26570a = (c) j.g(fVar.e());
        this.f26571b = fVar.d();
        this.f26573d = fVar.f();
        this.f26574e = fVar.c();
        fVar.b();
        this.f26572c = fVar.g();
    }

    public static e b(c cVar) {
        return new e(cVar);
    }

    public static f f(c cVar) {
        return new f(cVar);
    }

    public synchronized void a() {
        CloseableReference.N(this.f26573d);
        this.f26573d = null;
        CloseableReference.V(this.f26574e);
        this.f26574e = null;
    }

    public ab.a c() {
        return null;
    }

    public c d() {
        return this.f26570a;
    }

    public String e() {
        return this.f26572c;
    }

    private e(c cVar) {
        this.f26570a = (c) j.g(cVar);
        this.f26571b = 0;
    }
}
