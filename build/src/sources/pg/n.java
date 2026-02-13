package pg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements cj.b {

    /* renamed from: d  reason: collision with root package name */
    private static final bj.d f42825d = new bj.d() { // from class: pg.m
        @Override // bj.d
        public final void a(Object obj, Object obj2) {
            bj.e eVar = (bj.e) obj2;
            int i10 = n.f42826e;
            throw new bj.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f42826e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f42827a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f42828b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final bj.d f42829c = f42825d;

    @Override // cj.b
    public final /* bridge */ /* synthetic */ cj.b a(Class cls, bj.d dVar) {
        this.f42827a.put(cls, dVar);
        this.f42828b.remove(cls);
        return this;
    }

    public final o b() {
        return new o(new HashMap(this.f42827a), new HashMap(this.f42828b), this.f42829c);
    }
}
