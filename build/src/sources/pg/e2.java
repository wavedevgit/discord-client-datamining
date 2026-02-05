package pg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e2 implements yi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final xi.d f45180d = new xi.d() { // from class: pg.d2
        @Override // xi.d
        public final void a(Object obj, Object obj2) {
            xi.e eVar = (xi.e) obj2;
            int i10 = e2.f45181e;
            throw new xi.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f45181e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f45182a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f45183b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final xi.d f45184c = f45180d;

    @Override // yi.b
    public final /* bridge */ /* synthetic */ yi.b a(Class cls, xi.d dVar) {
        this.f45182a.put(cls, dVar);
        this.f45183b.remove(cls);
        return this;
    }

    public final f2 b() {
        return new f2(new HashMap(this.f45182a), new HashMap(this.f45183b), this.f45184c);
    }
}
