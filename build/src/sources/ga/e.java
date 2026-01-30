package ga;

import com.facebook.common.references.CloseableReference;
import java.util.List;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final c f26586a;

    /* renamed from: b  reason: collision with root package name */
    private final int f26587b;

    /* renamed from: c  reason: collision with root package name */
    private String f26588c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f26589d;

    /* renamed from: e  reason: collision with root package name */
    private List f26590e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar) {
        this.f26586a = (c) j.g(fVar.e());
        this.f26587b = fVar.d();
        this.f26589d = fVar.f();
        this.f26590e = fVar.c();
        fVar.b();
        this.f26588c = fVar.g();
    }

    public static e b(c cVar) {
        return new e(cVar);
    }

    public static f f(c cVar) {
        return new f(cVar);
    }

    public synchronized void a() {
        CloseableReference.N(this.f26589d);
        this.f26589d = null;
        CloseableReference.V(this.f26590e);
        this.f26590e = null;
    }

    public ab.a c() {
        return null;
    }

    public c d() {
        return this.f26586a;
    }

    public String e() {
        return this.f26588c;
    }

    private e(c cVar) {
        this.f26586a = (c) j.g(cVar);
        this.f26587b = 0;
    }
}
