package ds;

import java.util.Map;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final Class f22364d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f22365e;

    public c(Class cls, Map map) {
        this.f22364d = cls;
        this.f22365e = map;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        String l10;
        l10 = f.l(this.f22364d, this.f22365e);
        return l10;
    }
}
