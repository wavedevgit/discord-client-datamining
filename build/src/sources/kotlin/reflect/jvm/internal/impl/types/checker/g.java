package kotlin.reflect.jvm.internal.impl.types.checker;

import java.util.Set;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final Set f34739d;

    public g(Set set) {
        this.f34739d = set;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        String d10;
        d10 = TypeIntersector.d(this.f34739d);
        return d10;
    }
}
