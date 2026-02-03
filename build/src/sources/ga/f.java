package ga;

import com.facebook.common.references.CloseableReference;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final c f26686a;

    /* renamed from: b  reason: collision with root package name */
    private CloseableReference f26687b;

    /* renamed from: c  reason: collision with root package name */
    private List f26688c;

    /* renamed from: d  reason: collision with root package name */
    private int f26689d;

    /* renamed from: e  reason: collision with root package name */
    private String f26690e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(c cVar) {
        this.f26686a = cVar;
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [java.util.List, com.facebook.common.references.CloseableReference] */
    public e a() {
        try {
            return new e(this);
        } finally {
            CloseableReference.N(this.f26687b);
            this.f26687b = null;
            CloseableReference.V(this.f26688c);
            this.f26688c = null;
        }
    }

    public ab.a b() {
        return null;
    }

    public List c() {
        return CloseableReference.F(this.f26688c);
    }

    public int d() {
        return this.f26689d;
    }

    public c e() {
        return this.f26686a;
    }

    public CloseableReference f() {
        return CloseableReference.E(this.f26687b);
    }

    public String g() {
        return this.f26690e;
    }

    public f i(List list) {
        this.f26688c = CloseableReference.F(list);
        return this;
    }

    public f j(int i10) {
        this.f26689d = i10;
        return this;
    }

    public f k(CloseableReference closeableReference) {
        this.f26687b = CloseableReference.E(closeableReference);
        return this;
    }

    public f l(String str) {
        this.f26690e = str;
        return this;
    }

    public f h(ab.a aVar) {
        return this;
    }
}
