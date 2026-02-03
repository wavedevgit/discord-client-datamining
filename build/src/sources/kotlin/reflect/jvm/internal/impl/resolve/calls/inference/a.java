package kotlin.reflect.jvm.internal.impl.resolve.calls.inference;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeProjection f34588d;

    public a(TypeProjection typeProjection) {
        this.f34588d = typeProjection;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType c10;
        c10 = CapturedTypeConstructorKt.c(this.f34588d);
        return c10;
    }
}
