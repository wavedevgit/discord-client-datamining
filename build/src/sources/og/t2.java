package og;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t2 implements cj.b {

    /* renamed from: d  reason: collision with root package name */
    private static final bj.d f39669d = new bj.d() { // from class: og.s2
        @Override // bj.d
        public final void a(Object obj, Object obj2) {
            bj.e eVar = (bj.e) obj2;
            int i10 = t2.f39670e;
            throw new bj.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f39670e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f39671a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f39672b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final bj.d f39673c = f39669d;

    @Override // cj.b
    public final /* bridge */ /* synthetic */ cj.b a(Class cls, bj.d dVar) {
        this.f39671a.put(cls, dVar);
        this.f39672b.remove(cls);
        return this;
    }

    public final u2 b() {
        return new u2(new HashMap(this.f39671a), new HashMap(this.f39672b), this.f39673c);
    }
}
