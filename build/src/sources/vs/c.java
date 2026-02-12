package vs;

import java.util.Map;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final Class f51828d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f51829e;

    public c(Class cls, Map map) {
        this.f51828d = cls;
        this.f51829e = map;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        String l10;
        l10 = f.l(this.f51828d, this.f51829e);
        return l10;
    }
}
