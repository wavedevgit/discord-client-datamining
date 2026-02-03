package og;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a2 implements vi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final ui.d f42650d = new ui.d() { // from class: og.z1
        @Override // ui.d
        public final void a(Object obj, Object obj2) {
            ui.e eVar = (ui.e) obj2;
            int i10 = a2.f42651e;
            throw new ui.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f42651e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f42652a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f42653b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f42654c = f42650d;

    @Override // vi.b
    public final /* bridge */ /* synthetic */ vi.b a(Class cls, ui.d dVar) {
        this.f42652a.put(cls, dVar);
        this.f42653b.remove(cls);
        return this;
    }

    public final b2 b() {
        return new b2(new HashMap(this.f42652a), new HashMap(this.f42653b), this.f42654c);
    }
}
