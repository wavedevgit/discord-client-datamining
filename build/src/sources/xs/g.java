package xs;

import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f55283a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f55284b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f55285c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f55286d;

    public g(Object obj, Function3 function3, Function3 function32) {
        Function3 function33;
        this.f55283a = obj;
        this.f55284b = function3;
        this.f55285c = function32;
        function33 = m.f55310a;
        this.f55286d = function33;
    }

    @Override // xs.j
    public Function3 a() {
        return this.f55284b;
    }

    @Override // xs.j
    public Function3 b() {
        return this.f55285c;
    }

    @Override // xs.j
    public Function3 c() {
        return this.f55286d;
    }

    @Override // xs.j
    public Object d() {
        return this.f55283a;
    }

    public /* synthetic */ g(Object obj, Function3 function3, Function3 function32, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, function3, (i10 & 4) != 0 ? null : function32);
    }
}
