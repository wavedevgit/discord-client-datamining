package gt;

import kotlin.jvm.functions.Function3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Object f25990a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f25991b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f25992c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f25993d;

    public i(Object obj, Function3 function3, Function3 function32, Function3 function33) {
        this.f25990a = obj;
        this.f25991b = function3;
        this.f25992c = function32;
        this.f25993d = function33;
    }

    @Override // gt.j
    public Function3 a() {
        return this.f25991b;
    }

    @Override // gt.j
    public Function3 b() {
        return this.f25993d;
    }

    @Override // gt.j
    public Function3 c() {
        return this.f25992c;
    }

    @Override // gt.j
    public Object d() {
        return this.f25990a;
    }
}
