package us;

import kotlin.jvm.functions.Function3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Object f51676a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f51677b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f51678c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f51679d;

    public i(Object obj, Function3 function3, Function3 function32, Function3 function33) {
        this.f51676a = obj;
        this.f51677b = function3;
        this.f51678c = function32;
        this.f51679d = function33;
    }

    @Override // us.j
    public Function3 a() {
        return this.f51677b;
    }

    @Override // us.j
    public Function3 b() {
        return this.f51679d;
    }

    @Override // us.j
    public Function3 c() {
        return this.f51678c;
    }

    @Override // us.j
    public Object d() {
        return this.f51676a;
    }
}
