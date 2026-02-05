package ga;

import com.facebook.common.references.CloseableReference;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final c f24598a;

    /* renamed from: b  reason: collision with root package name */
    private CloseableReference f24599b;

    /* renamed from: c  reason: collision with root package name */
    private List f24600c;

    /* renamed from: d  reason: collision with root package name */
    private int f24601d;

    /* renamed from: e  reason: collision with root package name */
    private String f24602e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(c cVar) {
        this.f24598a = cVar;
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [java.util.List, com.facebook.common.references.CloseableReference] */
    public e a() {
        try {
            return new e(this);
        } finally {
            CloseableReference.N(this.f24599b);
            this.f24599b = null;
            CloseableReference.W(this.f24600c);
            this.f24600c = null;
        }
    }

    public ab.a b() {
        return null;
    }

    public List c() {
        return CloseableReference.F(this.f24600c);
    }

    public int d() {
        return this.f24601d;
    }

    public c e() {
        return this.f24598a;
    }

    public CloseableReference f() {
        return CloseableReference.E(this.f24599b);
    }

    public String g() {
        return this.f24602e;
    }

    public f i(List list) {
        this.f24600c = CloseableReference.F(list);
        return this;
    }

    public f j(int i10) {
        this.f24601d = i10;
        return this;
    }

    public f k(CloseableReference closeableReference) {
        this.f24599b = CloseableReference.E(closeableReference);
        return this;
    }

    public f l(String str) {
        this.f24602e = str;
        return this;
    }

    public f h(ab.a aVar) {
        return this;
    }
}
