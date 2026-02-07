package ls;

import java.util.Map;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final Map f36636d;

    public b(Map map) {
        this.f36636d = map;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        int j10;
        j10 = f.j(this.f36636d);
        return Integer.valueOf(j10);
    }
}
