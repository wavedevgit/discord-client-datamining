package pg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a2 implements zi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final yi.d f43898d = new yi.d() { // from class: pg.z1
        @Override // yi.d
        public final void a(Object obj, Object obj2) {
            yi.e eVar = (yi.e) obj2;
            int i10 = a2.f43899e;
            throw new yi.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f43899e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f43900a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f43901b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final yi.d f43902c = f43898d;

    @Override // zi.b
    public final /* bridge */ /* synthetic */ zi.b a(Class cls, yi.d dVar) {
        this.f43900a.put(cls, dVar);
        this.f43901b.remove(cls);
        return this;
    }

    public final b2 b() {
        return new b2(new HashMap(this.f43900a), new HashMap(this.f43901b), this.f43902c);
    }
}
