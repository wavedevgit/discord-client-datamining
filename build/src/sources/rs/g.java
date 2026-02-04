package rs;

import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f49070a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f49071b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f49072c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f49073d;

    public g(Object obj, Function3 function3, Function3 function32) {
        Function3 function33;
        this.f49070a = obj;
        this.f49071b = function3;
        this.f49072c = function32;
        function33 = m.f49097a;
        this.f49073d = function33;
    }

    @Override // rs.j
    public Function3 a() {
        return this.f49071b;
    }

    @Override // rs.j
    public Function3 b() {
        return this.f49072c;
    }

    @Override // rs.j
    public Function3 c() {
        return this.f49073d;
    }

    @Override // rs.j
    public Object d() {
        return this.f49070a;
    }

    public /* synthetic */ g(Object obj, Function3 function3, Function3 function32, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, function3, (i10 & 4) != 0 ? null : function32);
    }
}
