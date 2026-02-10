package xs;

import kotlin.jvm.functions.Function3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Object f55287a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f55288b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f55289c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f55290d;

    public i(Object obj, Function3 function3, Function3 function32, Function3 function33) {
        this.f55287a = obj;
        this.f55288b = function3;
        this.f55289c = function32;
        this.f55290d = function33;
    }

    @Override // xs.j
    public Function3 a() {
        return this.f55288b;
    }

    @Override // xs.j
    public Function3 b() {
        return this.f55290d;
    }

    @Override // xs.j
    public Function3 c() {
        return this.f55289c;
    }

    @Override // xs.j
    public Object d() {
        return this.f55287a;
    }
}
