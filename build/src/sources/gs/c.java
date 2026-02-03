package gs;

import java.util.Map;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final Class f26570d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f26571e;

    public c(Class cls, Map map) {
        this.f26570d = cls;
        this.f26571e = map;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        String l10;
        l10 = f.l(this.f26570d, this.f26571e);
        return l10;
    }
}
