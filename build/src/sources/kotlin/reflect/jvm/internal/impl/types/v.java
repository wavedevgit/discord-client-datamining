package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class v implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeParameterUpperBoundEraser f34753d;

    public v(TypeParameterUpperBoundEraser typeParameterUpperBoundEraser) {
        this.f34753d = typeParameterUpperBoundEraser;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ErrorType c10;
        c10 = TypeParameterUpperBoundEraser.c(this.f34753d);
        return c10;
    }
}
