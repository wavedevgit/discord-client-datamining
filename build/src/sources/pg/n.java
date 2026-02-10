package pg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements aj.b {

    /* renamed from: d  reason: collision with root package name */
    private static final zi.d f43798d = new zi.d() { // from class: pg.m
        @Override // zi.d
        public final void a(Object obj, Object obj2) {
            zi.e eVar = (zi.e) obj2;
            int i10 = n.f43799e;
            throw new zi.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f43799e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f43800a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f43801b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final zi.d f43802c = f43798d;

    @Override // aj.b
    public final /* bridge */ /* synthetic */ aj.b a(Class cls, zi.d dVar) {
        this.f43800a.put(cls, dVar);
        this.f43801b.remove(cls);
        return this;
    }

    public final o b() {
        return new o(new HashMap(this.f43800a), new HashMap(this.f43801b), this.f43802c);
    }
}
