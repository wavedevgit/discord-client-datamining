package ps;

import kotlin.jvm.functions.Function3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Object f46441a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f46442b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f46443c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f46444d;

    public i(Object obj, Function3 function3, Function3 function32, Function3 function33) {
        this.f46441a = obj;
        this.f46442b = function3;
        this.f46443c = function32;
        this.f46444d = function33;
    }

    @Override // ps.j
    public Function3 a() {
        return this.f46442b;
    }

    @Override // ps.j
    public Function3 b() {
        return this.f46444d;
    }

    @Override // ps.j
    public Function3 c() {
        return this.f46443c;
    }

    @Override // ps.j
    public Object d() {
        return this.f46441a;
    }
}
