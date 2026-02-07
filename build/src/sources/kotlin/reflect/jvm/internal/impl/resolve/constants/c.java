package kotlin.reflect.jvm.internal.impl.resolve.constants;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final c f34205d = new c();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        CharSequence g10;
        g10 = IntegerLiteralTypeConstructor.g((KotlinType) obj);
        return g10;
    }
}
