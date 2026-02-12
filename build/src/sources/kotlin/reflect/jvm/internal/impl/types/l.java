package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final l f34718d = new l();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        String e10;
        e10 = IntersectionTypeConstructor.e((KotlinType) obj);
        return e10;
    }
}
