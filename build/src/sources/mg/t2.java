package mg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t2 implements vi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final ui.d f38651d = new ui.d() { // from class: mg.s2
        @Override // ui.d
        public final void a(Object obj, Object obj2) {
            ui.e eVar = (ui.e) obj2;
            int i10 = t2.f38652e;
            throw new ui.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f38652e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f38653a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f38654b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f38655c = f38651d;

    @Override // vi.b
    public final /* bridge */ /* synthetic */ vi.b a(Class cls, ui.d dVar) {
        this.f38653a.put(cls, dVar);
        this.f38654b.remove(cls);
        return this;
    }

    public final u2 b() {
        return new u2(new HashMap(this.f38653a), new HashMap(this.f38654b), this.f38655c);
    }
}
