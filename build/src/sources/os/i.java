package os;

import kotlin.jvm.functions.Function3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Object f44742a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f44743b;

    /* renamed from: c  reason: collision with root package name */
    private final Function3 f44744c;

    /* renamed from: d  reason: collision with root package name */
    private final Function3 f44745d;

    public i(Object obj, Function3 function3, Function3 function32, Function3 function33) {
        this.f44742a = obj;
        this.f44743b = function3;
        this.f44744c = function32;
        this.f44745d = function33;
    }

    @Override // os.j
    public Function3 a() {
        return this.f44743b;
    }

    @Override // os.j
    public Function3 b() {
        return this.f44745d;
    }

    @Override // os.j
    public Function3 c() {
        return this.f44744c;
    }

    @Override // os.j
    public Object d() {
        return this.f44742a;
    }
}
