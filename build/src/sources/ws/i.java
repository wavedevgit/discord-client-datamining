package ws;

import kotlin.jvm.functions.Function3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Object f54076a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f54077b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f54078c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f54079d;

    public i(Object obj, Function3 function3, Function3 function32, Function3 function33) {
        this.f54076a = obj;
        this.f54077b = function3;
        this.f54078c = function32;
        this.f54079d = function33;
    }

    @Override // ws.j
    public Function3 a() {
        return this.f54077b;
    }

    @Override // ws.j
    public Function3 b() {
        return this.f54079d;
    }

    @Override // ws.j
    public Function3 c() {
        return this.f54078c;
    }

    @Override // ws.j
    public Object d() {
        return this.f54076a;
    }
}
