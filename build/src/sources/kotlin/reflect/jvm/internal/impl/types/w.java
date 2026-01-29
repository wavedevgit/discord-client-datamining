package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.TypeParameterUpperBoundEraser;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeParameterUpperBoundEraser f36048d;

    public w(TypeParameterUpperBoundEraser typeParameterUpperBoundEraser) {
        this.f36048d = typeParameterUpperBoundEraser;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        KotlinType e10;
        e10 = TypeParameterUpperBoundEraser.e(this.f36048d, (TypeParameterUpperBoundEraser.a) obj);
        return e10;
    }
}
