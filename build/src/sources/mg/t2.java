package mg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t2 implements yi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final xi.d f38106d = new xi.d() { // from class: mg.s2
        @Override // xi.d
        public final void a(Object obj, Object obj2) {
            xi.e eVar = (xi.e) obj2;
            int i10 = t2.f38107e;
            throw new xi.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f38107e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f38108a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f38109b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final xi.d f38110c = f38106d;

    @Override // yi.b
    public final /* bridge */ /* synthetic */ yi.b a(Class cls, xi.d dVar) {
        this.f38108a.put(cls, dVar);
        this.f38109b.remove(cls);
        return this;
    }

    public final u2 b() {
        return new u2(new HashMap(this.f38108a), new HashMap(this.f38109b), this.f38110c);
    }
}
