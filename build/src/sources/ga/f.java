package ga;

import com.facebook.common.references.CloseableReference;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final c f25899a;

    /* renamed from: b  reason: collision with root package name */
    private CloseableReference f25900b;

    /* renamed from: c  reason: collision with root package name */
    private List f25901c;

    /* renamed from: d  reason: collision with root package name */
    private int f25902d;

    /* renamed from: e  reason: collision with root package name */
    private String f25903e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(c cVar) {
        this.f25899a = cVar;
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [java.util.List, com.facebook.common.references.CloseableReference] */
    public e a() {
        try {
            return new e(this);
        } finally {
            CloseableReference.N(this.f25900b);
            this.f25900b = null;
            CloseableReference.V(this.f25901c);
            this.f25901c = null;
        }
    }

    public ab.a b() {
        return null;
    }

    public List c() {
        return CloseableReference.F(this.f25901c);
    }

    public int d() {
        return this.f25902d;
    }

    public c e() {
        return this.f25899a;
    }

    public CloseableReference f() {
        return CloseableReference.E(this.f25900b);
    }

    public String g() {
        return this.f25903e;
    }

    public f i(List list) {
        this.f25901c = CloseableReference.F(list);
        return this;
    }

    public f j(int i10) {
        this.f25902d = i10;
        return this;
    }

    public f k(CloseableReference closeableReference) {
        this.f25900b = CloseableReference.E(closeableReference);
        return this;
    }

    public f l(String str) {
        this.f25903e = str;
        return this;
    }

    public f h(ab.a aVar) {
        return this;
    }
}
