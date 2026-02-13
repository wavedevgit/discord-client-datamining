package rg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e2 implements cj.b {

    /* renamed from: d  reason: collision with root package name */
    private static final bj.d f47199d = new bj.d() { // from class: rg.d2
        @Override // bj.d
        public final void a(Object obj, Object obj2) {
            bj.e eVar = (bj.e) obj2;
            int i10 = e2.f47200e;
            throw new bj.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f47200e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f47201a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f47202b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final bj.d f47203c = f47199d;

    @Override // cj.b
    public final /* bridge */ /* synthetic */ cj.b a(Class cls, bj.d dVar) {
        this.f47201a.put(cls, dVar);
        this.f47202b.remove(cls);
        return this;
    }

    public final f2 b() {
        return new f2(new HashMap(this.f47201a), new HashMap(this.f47202b), this.f47203c);
    }
}
