package ha;

import com.facebook.common.references.CloseableReference;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final c f25810a;

    /* renamed from: b  reason: collision with root package name */
    private CloseableReference f25811b;

    /* renamed from: c  reason: collision with root package name */
    private List f25812c;

    /* renamed from: d  reason: collision with root package name */
    private int f25813d;

    /* renamed from: e  reason: collision with root package name */
    private String f25814e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(c cVar) {
        this.f25810a = cVar;
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [java.util.List, com.facebook.common.references.CloseableReference] */
    public e a() {
        try {
            return new e(this);
        } finally {
            CloseableReference.z(this.f25811b);
            this.f25811b = null;
            CloseableReference.I(this.f25812c);
            this.f25812c = null;
        }
    }

    public bb.a b() {
        return null;
    }

    public List c() {
        return CloseableReference.y(this.f25812c);
    }

    public int d() {
        return this.f25813d;
    }

    public c e() {
        return this.f25810a;
    }

    public CloseableReference f() {
        return CloseableReference.n(this.f25811b);
    }

    public String g() {
        return this.f25814e;
    }

    public f i(List list) {
        this.f25812c = CloseableReference.y(list);
        return this;
    }

    public f j(int i10) {
        this.f25813d = i10;
        return this;
    }

    public f k(CloseableReference closeableReference) {
        this.f25811b = CloseableReference.n(closeableReference);
        return this;
    }

    public f l(String str) {
        this.f25814e = str;
        return this;
    }

    public f h(bb.a aVar) {
        return this;
    }
}
