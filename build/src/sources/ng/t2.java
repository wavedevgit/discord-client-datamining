package ng;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t2 implements zi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final yi.d f40269d = new yi.d() { // from class: ng.s2
        @Override // yi.d
        public final void a(Object obj, Object obj2) {
            yi.e eVar = (yi.e) obj2;
            int i10 = t2.f40270e;
            throw new yi.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f40270e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f40271a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f40272b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final yi.d f40273c = f40269d;

    @Override // zi.b
    public final /* bridge */ /* synthetic */ zi.b a(Class cls, yi.d dVar) {
        this.f40271a.put(cls, dVar);
        this.f40272b.remove(cls);
        return this;
    }

    public final u2 b() {
        return new u2(new HashMap(this.f40271a), new HashMap(this.f40272b), this.f40273c);
    }
}
