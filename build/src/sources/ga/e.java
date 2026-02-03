package ga;

import com.facebook.common.references.CloseableReference;
import java.util.List;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final c f25894a;

    /* renamed from: b  reason: collision with root package name */
    private final int f25895b;

    /* renamed from: c  reason: collision with root package name */
    private String f25896c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f25897d;

    /* renamed from: e  reason: collision with root package name */
    private List f25898e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar) {
        this.f25894a = (c) j.g(fVar.e());
        this.f25895b = fVar.d();
        this.f25897d = fVar.f();
        this.f25898e = fVar.c();
        fVar.b();
        this.f25896c = fVar.g();
    }

    public static e b(c cVar) {
        return new e(cVar);
    }

    public static f f(c cVar) {
        return new f(cVar);
    }

    public synchronized void a() {
        CloseableReference.N(this.f25897d);
        this.f25897d = null;
        CloseableReference.V(this.f25898e);
        this.f25898e = null;
    }

    public ab.a c() {
        return null;
    }

    public c d() {
        return this.f25894a;
    }

    public String e() {
        return this.f25896c;
    }

    private e(c cVar) {
        this.f25894a = (c) j.g(cVar);
        this.f25895b = 0;
    }
}
