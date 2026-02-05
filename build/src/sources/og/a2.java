package og;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a2 implements yi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final xi.d f42556d = new xi.d() { // from class: og.z1
        @Override // xi.d
        public final void a(Object obj, Object obj2) {
            xi.e eVar = (xi.e) obj2;
            int i10 = a2.f42557e;
            throw new xi.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f42557e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f42558a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f42559b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final xi.d f42560c = f42556d;

    @Override // yi.b
    public final /* bridge */ /* synthetic */ yi.b a(Class cls, xi.d dVar) {
        this.f42558a.put(cls, dVar);
        this.f42559b.remove(cls);
        return this;
    }

    public final b2 b() {
        return new b2(new HashMap(this.f42558a), new HashMap(this.f42559b), this.f42560c);
    }
}
