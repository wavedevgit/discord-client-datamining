package ha;

import com.facebook.common.references.CloseableReference;
import java.util.List;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final c f25805a;

    /* renamed from: b  reason: collision with root package name */
    private final int f25806b;

    /* renamed from: c  reason: collision with root package name */
    private String f25807c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f25808d;

    /* renamed from: e  reason: collision with root package name */
    private List f25809e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar) {
        this.f25805a = (c) j.g(fVar.e());
        this.f25806b = fVar.d();
        this.f25808d = fVar.f();
        this.f25809e = fVar.c();
        fVar.b();
        this.f25807c = fVar.g();
    }

    public static e b(c cVar) {
        return new e(cVar);
    }

    public static f f(c cVar) {
        return new f(cVar);
    }

    public synchronized void a() {
        CloseableReference.z(this.f25808d);
        this.f25808d = null;
        CloseableReference.I(this.f25809e);
        this.f25809e = null;
    }

    public bb.a c() {
        return null;
    }

    public c d() {
        return this.f25805a;
    }

    public String e() {
        return this.f25807c;
    }

    private e(c cVar) {
        this.f25805a = (c) j.g(cVar);
        this.f25806b = 0;
    }
}
