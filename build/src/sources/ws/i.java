package ws;

import kotlin.jvm.functions.Function3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Object f54124a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f54125b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f54126c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f54127d;

    public i(Object obj, Function3 function3, Function3 function32, Function3 function33) {
        this.f54124a = obj;
        this.f54125b = function3;
        this.f54126c = function32;
        this.f54127d = function33;
    }

    @Override // ws.j
    public Function3 a() {
        return this.f54125b;
    }

    @Override // ws.j
    public Function3 b() {
        return this.f54127d;
    }

    @Override // ws.j
    public Function3 c() {
        return this.f54126c;
    }

    @Override // ws.j
    public Object d() {
        return this.f54124a;
    }
}
