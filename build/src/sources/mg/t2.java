package mg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t2 implements vi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final ui.d f38444d = new ui.d() { // from class: mg.s2
        @Override // ui.d
        public final void a(Object obj, Object obj2) {
            ui.e eVar = (ui.e) obj2;
            int i10 = t2.f38445e;
            throw new ui.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f38445e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f38446a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f38447b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f38448c = f38444d;

    @Override // vi.b
    public final /* bridge */ /* synthetic */ vi.b a(Class cls, ui.d dVar) {
        this.f38446a.put(cls, dVar);
        this.f38447b.remove(cls);
        return this;
    }

    public final u2 b() {
        return new u2(new HashMap(this.f38446a), new HashMap(this.f38447b), this.f38448c);
    }
}
