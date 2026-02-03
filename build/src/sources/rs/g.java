package rs;

import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f49073a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f49074b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f49075c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f49076d;

    public g(Object obj, Function3 function3, Function3 function32) {
        Function3 function33;
        this.f49073a = obj;
        this.f49074b = function3;
        this.f49075c = function32;
        function33 = m.f49100a;
        this.f49076d = function33;
    }

    @Override // rs.j
    public Function3 a() {
        return this.f49074b;
    }

    @Override // rs.j
    public Function3 b() {
        return this.f49075c;
    }

    @Override // rs.j
    public Function3 c() {
        return this.f49076d;
    }

    @Override // rs.j
    public Object d() {
        return this.f49073a;
    }

    public /* synthetic */ g(Object obj, Function3 function3, Function3 function32, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, function3, (i10 & 4) != 0 ? null : function32);
    }
}
