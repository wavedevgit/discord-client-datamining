package ng;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements yi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final xi.d f40838d = new xi.d() { // from class: ng.m
        @Override // xi.d
        public final void a(Object obj, Object obj2) {
            xi.e eVar = (xi.e) obj2;
            int i10 = n.f40839e;
            throw new xi.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f40839e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f40840a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f40841b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final xi.d f40842c = f40838d;

    @Override // yi.b
    public final /* bridge */ /* synthetic */ yi.b a(Class cls, xi.d dVar) {
        this.f40840a.put(cls, dVar);
        this.f40841b.remove(cls);
        return this;
    }

    public final o b() {
        return new o(new HashMap(this.f40840a), new HashMap(this.f40841b), this.f40842c);
    }
}
