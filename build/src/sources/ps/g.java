package ps;

import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f46437a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f46438b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f46439c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f46440d;

    public g(Object obj, Function3 function3, Function3 function32) {
        Function3 function33;
        this.f46437a = obj;
        this.f46438b = function3;
        this.f46439c = function32;
        function33 = m.f46464a;
        this.f46440d = function33;
    }

    @Override // ps.j
    public Function3 a() {
        return this.f46438b;
    }

    @Override // ps.j
    public Function3 b() {
        return this.f46439c;
    }

    @Override // ps.j
    public Function3 c() {
        return this.f46440d;
    }

    @Override // ps.j
    public Object d() {
        return this.f46437a;
    }

    public /* synthetic */ g(Object obj, Function3 function3, Function3 function32, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, function3, (i10 & 4) != 0 ? null : function32);
    }
}
