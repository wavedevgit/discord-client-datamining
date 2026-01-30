package ng;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements vi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final ui.d f41476d = new ui.d() { // from class: ng.m
        @Override // ui.d
        public final void a(Object obj, Object obj2) {
            ui.e eVar = (ui.e) obj2;
            int i10 = n.f41477e;
            throw new ui.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f41477e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f41478a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f41479b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f41480c = f41476d;

    @Override // vi.b
    public final /* bridge */ /* synthetic */ vi.b a(Class cls, ui.d dVar) {
        this.f41478a.put(cls, dVar);
        this.f41479b.remove(cls);
        return this;
    }

    public final o b() {
        return new o(new HashMap(this.f41478a), new HashMap(this.f41479b), this.f41480c);
    }
}
