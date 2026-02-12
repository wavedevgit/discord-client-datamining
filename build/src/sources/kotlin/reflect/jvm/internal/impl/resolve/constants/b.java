package kotlin.reflect.jvm.internal.impl.resolve.constants;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final IntegerLiteralTypeConstructor f34136d;

    public b(IntegerLiteralTypeConstructor integerLiteralTypeConstructor) {
        this.f34136d = integerLiteralTypeConstructor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List e10;
        e10 = IntegerLiteralTypeConstructor.e(this.f34136d);
        return e10;
    }
}
