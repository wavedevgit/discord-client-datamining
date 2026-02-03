package es;

import java.util.Map;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final Class f23167d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f23168e;

    public c(Class cls, Map map) {
        this.f23167d = cls;
        this.f23168e = map;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        String l10;
        l10 = f.l(this.f23167d, this.f23168e);
        return l10;
    }
}
