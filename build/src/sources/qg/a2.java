package qg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a2 implements cj.b {

    /* renamed from: d  reason: collision with root package name */
    private static final bj.d f44129d = new bj.d() { // from class: qg.z1
        @Override // bj.d
        public final void a(Object obj, Object obj2) {
            bj.e eVar = (bj.e) obj2;
            int i10 = a2.f44130e;
            throw new bj.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f44130e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f44131a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f44132b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final bj.d f44133c = f44129d;

    @Override // cj.b
    public final /* bridge */ /* synthetic */ cj.b a(Class cls, bj.d dVar) {
        this.f44131a.put(cls, dVar);
        this.f44132b.remove(cls);
        return this;
    }

    public final b2 b() {
        return new b2(new HashMap(this.f44131a), new HashMap(this.f44132b), this.f44133c);
    }
}
