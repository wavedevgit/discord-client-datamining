package kotlin.reflect.jvm.internal.impl.types.checker;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final List f35975d;

    public b(List list) {
        this.f35975d = list;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List a10;
        a10 = NewCapturedTypeConstructor.a(this.f35975d);
        return a10;
    }
}
