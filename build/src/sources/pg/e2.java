package pg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e2 implements vi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final ui.d f45250d = new ui.d() { // from class: pg.d2
        @Override // ui.d
        public final void a(Object obj, Object obj2) {
            ui.e eVar = (ui.e) obj2;
            int i10 = e2.f45251e;
            throw new ui.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f45251e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f45252a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f45253b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f45254c = f45250d;

    @Override // vi.b
    public final /* bridge */ /* synthetic */ vi.b a(Class cls, ui.d dVar) {
        this.f45252a.put(cls, dVar);
        this.f45253b.remove(cls);
        return this;
    }

    public final f2 b() {
        return new f2(new HashMap(this.f45252a), new HashMap(this.f45253b), this.f45254c);
    }
}
