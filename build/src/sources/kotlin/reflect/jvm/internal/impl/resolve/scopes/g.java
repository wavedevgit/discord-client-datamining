package kotlin.reflect.jvm.internal.impl.resolve.scopes;

import java.util.Collection;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final SubstitutingScope f34242d;

    public g(SubstitutingScope substitutingScope) {
        this.f34242d = substitutingScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Collection a10;
        a10 = SubstitutingScope.a(this.f34242d);
        return a10;
    }
}
