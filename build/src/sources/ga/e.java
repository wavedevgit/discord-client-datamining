package ga;

import com.facebook.common.references.CloseableReference;
import java.util.List;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final c f24894a;

    /* renamed from: b  reason: collision with root package name */
    private final int f24895b;

    /* renamed from: c  reason: collision with root package name */
    private String f24896c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f24897d;

    /* renamed from: e  reason: collision with root package name */
    private List f24898e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar) {
        this.f24894a = (c) j.g(fVar.e());
        this.f24895b = fVar.d();
        this.f24897d = fVar.f();
        this.f24898e = fVar.c();
        fVar.b();
        this.f24896c = fVar.g();
    }

    public static e b(c cVar) {
        return new e(cVar);
    }

    public static f f(c cVar) {
        return new f(cVar);
    }

    public synchronized void a() {
        CloseableReference.z(this.f24897d);
        this.f24897d = null;
        CloseableReference.I(this.f24898e);
        this.f24898e = null;
    }

    public ab.a c() {
        return null;
    }

    public c d() {
        return this.f24894a;
    }

    public String e() {
        return this.f24896c;
    }

    private e(c cVar) {
        this.f24894a = (c) j.g(cVar);
        this.f24895b = 0;
    }
}
