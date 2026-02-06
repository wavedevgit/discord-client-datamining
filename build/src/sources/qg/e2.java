package qg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e2 implements zi.b {

    /* renamed from: d  reason: collision with root package name */
    private static final yi.d f47010d = new yi.d() { // from class: qg.d2
        @Override // yi.d
        public final void a(Object obj, Object obj2) {
            yi.e eVar = (yi.e) obj2;
            int i10 = e2.f47011e;
            throw new yi.b("Couldn't find encoder for type ".concat(String.valueOf(obj.getClass().getCanonicalName())));
        }
    };

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f47011e = 0;

    /* renamed from: a  reason: collision with root package name */
    private final Map f47012a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f47013b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final yi.d f47014c = f47010d;

    @Override // zi.b
    public final /* bridge */ /* synthetic */ zi.b a(Class cls, yi.d dVar) {
        this.f47012a.put(cls, dVar);
        this.f47013b.remove(cls);
        return this;
    }

    public final f2 b() {
        return new f2(new HashMap(this.f47012a), new HashMap(this.f47013b), this.f47014c);
    }
}
