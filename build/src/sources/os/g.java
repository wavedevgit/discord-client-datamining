package os;

import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f44738a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f44739b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f44740c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f44741d;

    public g(Object obj, Function3 function3, Function3 function32) {
        Function3 function33;
        this.f44738a = obj;
        this.f44739b = function3;
        this.f44740c = function32;
        function33 = m.f44765a;
        this.f44741d = function33;
    }

    @Override // os.j
    public Function3 a() {
        return this.f44739b;
    }

    @Override // os.j
    public Function3 b() {
        return this.f44740c;
    }

    @Override // os.j
    public Function3 c() {
        return this.f44741d;
    }

    @Override // os.j
    public Object d() {
        return this.f44738a;
    }

    public /* synthetic */ g(Object obj, Function3 function3, Function3 function32, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, function3, (i10 & 4) != 0 ? null : function32);
    }
}
