package pg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a2 implements zi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final yi.d f43946d = new yi.d() { // from class: pg.z1
        @Override // yi.d
        public final void a(Object obj, Object obj2) {
            yi.e eVar = (yi.e) obj2;
            int i10 = a2.f43947e;
            throw new yi.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f43947e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f43948a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f43949b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final yi.d f43950c = f43946d;

    @Override // zi.b
    public final /* bridge */ /* synthetic */ zi.b a(Class cls, yi.d dVar) {
        this.f43948a.put(cls, dVar);
        this.f43949b.remove(cls);
        return this;
    }

    public final b2 b() {
        return new b2(new HashMap(this.f43948a), new HashMap(this.f43949b), this.f43950c);
    }
}
