package og;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements zi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final yi.d f42338d = new yi.d() { // from class: og.m
        @Override // yi.d
        public final void a(Object obj, Object obj2) {
            yi.e eVar = (yi.e) obj2;
            int i10 = n.f42339e;
            throw new yi.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f42339e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f42340a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f42341b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final yi.d f42342c = f42338d;

    @Override // zi.b
    public final /* bridge */ /* synthetic */ zi.b a(Class cls, yi.d dVar) {
        this.f42340a.put(cls, dVar);
        this.f42341b.remove(cls);
        return this;
    }

    public final o b() {
        return new o(new HashMap(this.f42340a), new HashMap(this.f42341b), this.f42342c);
    }
}
