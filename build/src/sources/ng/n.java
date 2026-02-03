package ng;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements vi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final ui.d f41339d = new ui.d() { // from class: ng.m
        @Override // ui.d
        public final void a(Object obj, Object obj2) {
            ui.e eVar = (ui.e) obj2;
            int i10 = n.f41340e;
            throw new ui.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f41340e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f41341a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f41342b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f41343c = f41339d;

    @Override // vi.b
    public final /* bridge */ /* synthetic */ vi.b a(Class cls, ui.d dVar) {
        this.f41341a.put(cls, dVar);
        this.f41342b.remove(cls);
        return this;
    }

    public final o b() {
        return new o(new HashMap(this.f41341a), new HashMap(this.f41342b), this.f41343c);
    }
}
