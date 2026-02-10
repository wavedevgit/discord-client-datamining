package og;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t2 implements aj.b {

    /* renamed from: d  reason: collision with root package name */
    private static final zi.d f41342d = new zi.d() { // from class: og.s2
        @Override // zi.d
        public final void a(Object obj, Object obj2) {
            zi.e eVar = (zi.e) obj2;
            int i10 = t2.f41343e;
            throw new zi.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f41343e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f41344a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f41345b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final zi.d f41346c = f41342d;

    @Override // aj.b
    public final /* bridge */ /* synthetic */ aj.b a(Class cls, zi.d dVar) {
        this.f41344a.put(cls, dVar);
        this.f41345b.remove(cls);
        return this;
    }

    public final u2 b() {
        return new u2(new HashMap(this.f41344a), new HashMap(this.f41345b), this.f41346c);
    }
}
