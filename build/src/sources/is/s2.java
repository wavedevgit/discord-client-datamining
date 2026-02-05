package is;

import java.lang.reflect.Type;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class s2 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final t2 f30303d;

    /* renamed from: e  reason: collision with root package name */
    private final int f30304e;

    /* renamed from: i  reason: collision with root package name */
    private final Lazy f30305i;

    public s2(t2 t2Var, int i10, Lazy lazy) {
        this.f30303d = t2Var;
        this.f30304e = i10;
        this.f30305i = lazy;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Type i10;
        i10 = t2.i(this.f30303d, this.f30304e, this.f30305i);
        return i10;
    }
}
