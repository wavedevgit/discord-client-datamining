package rg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e2 implements aj.b {

    /* renamed from: d  reason: collision with root package name */
    private static final zi.d f48176d = new zi.d() { // from class: rg.d2
        @Override // zi.d
        public final void a(Object obj, Object obj2) {
            zi.e eVar = (zi.e) obj2;
            int i10 = e2.f48177e;
            throw new zi.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f48177e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f48178a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f48179b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final zi.d f48180c = f48176d;

    @Override // aj.b
    public final /* bridge */ /* synthetic */ aj.b a(Class cls, zi.d dVar) {
        this.f48178a.put(cls, dVar);
        this.f48179b.remove(cls);
        return this;
    }

    public final f2 b() {
        return new f2(new HashMap(this.f48178a), new HashMap(this.f48179b), this.f48180c);
    }
}
