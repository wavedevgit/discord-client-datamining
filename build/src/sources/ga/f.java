package ga;

import com.facebook.common.references.CloseableReference;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final c f24851a;

    /* renamed from: b  reason: collision with root package name */
    private CloseableReference f24852b;

    /* renamed from: c  reason: collision with root package name */
    private List f24853c;

    /* renamed from: d  reason: collision with root package name */
    private int f24854d;

    /* renamed from: e  reason: collision with root package name */
    private String f24855e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(c cVar) {
        this.f24851a = cVar;
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [java.util.List, com.facebook.common.references.CloseableReference] */
    public e a() {
        try {
            return new e(this);
        } finally {
            CloseableReference.z(this.f24852b);
            this.f24852b = null;
            CloseableReference.I(this.f24853c);
            this.f24853c = null;
        }
    }

    public ab.a b() {
        return null;
    }

    public List c() {
        return CloseableReference.y(this.f24853c);
    }

    public int d() {
        return this.f24854d;
    }

    public c e() {
        return this.f24851a;
    }

    public CloseableReference f() {
        return CloseableReference.n(this.f24852b);
    }

    public String g() {
        return this.f24855e;
    }

    public f i(List list) {
        this.f24853c = CloseableReference.y(list);
        return this;
    }

    public f j(int i10) {
        this.f24854d = i10;
        return this;
    }

    public f k(CloseableReference closeableReference) {
        this.f24852b = CloseableReference.n(closeableReference);
        return this;
    }

    public f l(String str) {
        this.f24855e = str;
        return this;
    }

    public f h(ab.a aVar) {
        return this;
    }
}
