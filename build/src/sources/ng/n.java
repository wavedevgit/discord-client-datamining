package ng;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements vi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final ui.d f41378d = new ui.d() { // from class: ng.m
        @Override // ui.d
        public final void a(Object obj, Object obj2) {
            ui.e eVar = (ui.e) obj2;
            int i10 = n.f41379e;
            throw new ui.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f41379e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f41380a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f41381b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f41382c = f41378d;

    @Override // vi.b
    public final /* bridge */ /* synthetic */ vi.b a(Class cls, ui.d dVar) {
        this.f41380a.put(cls, dVar);
        this.f41381b.remove(cls);
        return this;
    }

    public final o b() {
        return new o(new HashMap(this.f41380a), new HashMap(this.f41381b), this.f41382c);
    }
}
