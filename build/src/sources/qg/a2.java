package qg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a2 implements aj.b {

    /* renamed from: d  reason: collision with root package name */
    private static final zi.d f45460d = new zi.d() { // from class: qg.z1
        @Override // zi.d
        public final void a(Object obj, Object obj2) {
            zi.e eVar = (zi.e) obj2;
            int i10 = a2.f45461e;
            throw new zi.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f45461e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f45462a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f45463b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final zi.d f45464c = f45460d;

    @Override // aj.b
    public final /* bridge */ /* synthetic */ aj.b a(Class cls, zi.d dVar) {
        this.f45462a.put(cls, dVar);
        this.f45463b.remove(cls);
        return this;
    }

    public final b2 b() {
        return new b2(new HashMap(this.f45462a), new HashMap(this.f45463b), this.f45464c);
    }
}
