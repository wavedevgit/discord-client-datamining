package kotlin.reflect.jvm.internal.impl.types.checker;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final List f34666d;

    public c(List list) {
        this.f34666d = list;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List h10;
        h10 = NewCapturedTypeConstructor.h(this.f34666d);
        return h10;
    }
}
