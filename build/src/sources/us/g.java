package us;

import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f51672a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f51673b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f51674c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f51675d;

    public g(Object obj, Function3 function3, Function3 function32) {
        Function3 function33;
        this.f51672a = obj;
        this.f51673b = function3;
        this.f51674c = function32;
        function33 = m.f51699a;
        this.f51675d = function33;
    }

    @Override // us.j
    public Function3 a() {
        return this.f51673b;
    }

    @Override // us.j
    public Function3 b() {
        return this.f51674c;
    }

    @Override // us.j
    public Function3 c() {
        return this.f51675d;
    }

    @Override // us.j
    public Object d() {
        return this.f51672a;
    }

    public /* synthetic */ g(Object obj, Function3 function3, Function3 function32, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, function3, (i10 & 4) != 0 ? null : function32);
    }
}
