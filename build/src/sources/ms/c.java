package ms;

import java.util.Map;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final Class f37467d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f37468e;

    public c(Class cls, Map map) {
        this.f37467d = cls;
        this.f37468e = map;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        String l10;
        l10 = f.l(this.f37467d, this.f37468e);
        return l10;
    }
}
