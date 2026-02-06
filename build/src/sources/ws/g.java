package ws;

import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f54072a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f54073b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f54074c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f54075d;

    public g(Object obj, Function3 function3, Function3 function32) {
        Function3 function33;
        this.f54072a = obj;
        this.f54073b = function3;
        this.f54074c = function32;
        function33 = m.f54099a;
        this.f54075d = function33;
    }

    @Override // ws.j
    public Function3 a() {
        return this.f54073b;
    }

    @Override // ws.j
    public Function3 b() {
        return this.f54074c;
    }

    @Override // ws.j
    public Function3 c() {
        return this.f54075d;
    }

    @Override // ws.j
    public Object d() {
        return this.f54072a;
    }

    public /* synthetic */ g(Object obj, Function3 function3, Function3 function32, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, function3, (i10 & 4) != 0 ? null : function32);
    }
}
