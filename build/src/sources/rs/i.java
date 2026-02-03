package rs;

import kotlin.jvm.functions.Function3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Object f49077a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f49078b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f49079c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f49080d;

    public i(Object obj, Function3 function3, Function3 function32, Function3 function33) {
        this.f49077a = obj;
        this.f49078b = function3;
        this.f49079c = function32;
        this.f49080d = function33;
    }

    @Override // rs.j
    public Function3 a() {
        return this.f49078b;
    }

    @Override // rs.j
    public Function3 b() {
        return this.f49080d;
    }

    @Override // rs.j
    public Function3 c() {
        return this.f49079c;
    }

    @Override // rs.j
    public Object d() {
        return this.f49077a;
    }
}
