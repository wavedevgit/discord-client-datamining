package ha;

import com.facebook.common.references.CloseableReference;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final c f27028a;

    /* renamed from: b  reason: collision with root package name */
    private CloseableReference f27029b;

    /* renamed from: c  reason: collision with root package name */
    private List f27030c;

    /* renamed from: d  reason: collision with root package name */
    private int f27031d;

    /* renamed from: e  reason: collision with root package name */
    private String f27032e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(c cVar) {
        this.f27028a = cVar;
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [java.util.List, com.facebook.common.references.CloseableReference] */
    public e a() {
        try {
            return new e(this);
        } finally {
            CloseableReference.z(this.f27029b);
            this.f27029b = null;
            CloseableReference.I(this.f27030c);
            this.f27030c = null;
        }
    }

    public bb.a b() {
        return null;
    }

    public List c() {
        return CloseableReference.y(this.f27030c);
    }

    public int d() {
        return this.f27031d;
    }

    public c e() {
        return this.f27028a;
    }

    public CloseableReference f() {
        return CloseableReference.n(this.f27029b);
    }

    public String g() {
        return this.f27032e;
    }

    public f i(List list) {
        this.f27030c = CloseableReference.y(list);
        return this;
    }

    public f j(int i10) {
        this.f27031d = i10;
        return this;
    }

    public f k(CloseableReference closeableReference) {
        this.f27029b = CloseableReference.n(closeableReference);
        return this;
    }

    public f l(String str) {
        this.f27032e = str;
        return this;
    }

    public f h(bb.a aVar) {
        return this;
    }
}
