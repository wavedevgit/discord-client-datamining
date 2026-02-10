package rg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e2 implements cj.b {

    /* renamed from: d  reason: collision with root package name */
    private static final bj.d f46630d = new bj.d() { // from class: rg.d2
        @Override // bj.d
        public final void a(Object obj, Object obj2) {
            bj.e eVar = (bj.e) obj2;
            int i10 = e2.f46631e;
            throw new bj.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f46631e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f46632a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f46633b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final bj.d f46634c = f46630d;

    @Override // cj.b
    public final /* bridge */ /* synthetic */ cj.b a(Class cls, bj.d dVar) {
        this.f46632a.put(cls, dVar);
        this.f46633b.remove(cls);
        return this;
    }

    public final f2 b() {
        return new f2(new HashMap(this.f46632a), new HashMap(this.f46633b), this.f46634c);
    }
}
