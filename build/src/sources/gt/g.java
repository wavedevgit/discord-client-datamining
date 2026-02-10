package gt;

import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f25985a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f25986b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f25987c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f25988d;

    public g(Object obj, Function3 function3, Function3 function32) {
        Function3 function33;
        this.f25985a = obj;
        this.f25986b = function3;
        this.f25987c = function32;
        function33 = m.f26012a;
        this.f25988d = function33;
    }

    @Override // gt.j
    public Function3 a() {
        return this.f25986b;
    }

    @Override // gt.j
    public Function3 b() {
        return this.f25987c;
    }

    @Override // gt.j
    public Function3 c() {
        return this.f25988d;
    }

    @Override // gt.j
    public Object d() {
        return this.f25985a;
    }

    public /* synthetic */ g(Object obj, Function3 function3, Function3 function32, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, function3, (i10 & 4) != 0 ? null : function32);
    }
}
