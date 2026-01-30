package kotlin.reflect.jvm.internal.impl.types.typesApproximation;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.UnwrappedType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final a f36058d = new a();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Boolean c10;
        c10 = CapturedTypeApproximationKt.c((UnwrappedType) obj);
        return c10;
    }
}
