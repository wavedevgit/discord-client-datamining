package cs;

import java.lang.reflect.Type;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class s2 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final t2 f21239d;

    /* renamed from: e  reason: collision with root package name */
    private final int f21240e;

    /* renamed from: i  reason: collision with root package name */
    private final Lazy f21241i;

    public s2(t2 t2Var, int i10, Lazy lazy) {
        this.f21239d = t2Var;
        this.f21240e = i10;
        this.f21241i = lazy;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Type i10;
        i10 = t2.i(this.f21239d, this.f21240e, this.f21241i);
        return i10;
    }
}
