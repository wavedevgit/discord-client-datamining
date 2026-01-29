package pg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e2 implements vi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final ui.d f45202d = new ui.d() { // from class: pg.d2
        @Override // ui.d
        public final void a(Object obj, Object obj2) {
            ui.e eVar = (ui.e) obj2;
            int i10 = e2.f45203e;
            throw new ui.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f45203e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f45204a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f45205b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f45206c = f45202d;

    @Override // vi.b
    public final /* bridge */ /* synthetic */ vi.b a(Class cls, ui.d dVar) {
        this.f45204a.put(cls, dVar);
        this.f45205b.remove(cls);
        return this;
    }

    public final f2 b() {
        return new f2(new HashMap(this.f45204a), new HashMap(this.f45205b), this.f45206c);
    }
}
