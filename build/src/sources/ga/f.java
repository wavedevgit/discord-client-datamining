package ga;

import com.facebook.common.references.CloseableReference;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final c f24899a;

    /* renamed from: b  reason: collision with root package name */
    private CloseableReference f24900b;

    /* renamed from: c  reason: collision with root package name */
    private List f24901c;

    /* renamed from: d  reason: collision with root package name */
    private int f24902d;

    /* renamed from: e  reason: collision with root package name */
    private String f24903e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(c cVar) {
        this.f24899a = cVar;
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [java.util.List, com.facebook.common.references.CloseableReference] */
    public e a() {
        try {
            return new e(this);
        } finally {
            CloseableReference.z(this.f24900b);
            this.f24900b = null;
            CloseableReference.I(this.f24901c);
            this.f24901c = null;
        }
    }

    public ab.a b() {
        return null;
    }

    public List c() {
        return CloseableReference.y(this.f24901c);
    }

    public int d() {
        return this.f24902d;
    }

    public c e() {
        return this.f24899a;
    }

    public CloseableReference f() {
        return CloseableReference.n(this.f24900b);
    }

    public String g() {
        return this.f24903e;
    }

    public f i(List list) {
        this.f24901c = CloseableReference.y(list);
        return this;
    }

    public f j(int i10) {
        this.f24902d = i10;
        return this;
    }

    public f k(CloseableReference closeableReference) {
        this.f24900b = CloseableReference.n(closeableReference);
        return this;
    }

    public f l(String str) {
        this.f24903e = str;
        return this;
    }

    public f h(ab.a aVar) {
        return this;
    }
}
