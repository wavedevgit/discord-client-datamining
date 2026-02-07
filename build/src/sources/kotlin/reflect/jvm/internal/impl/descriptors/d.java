package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.NotFoundClasses;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final NotFoundClasses f32436d;

    public d(NotFoundClasses notFoundClasses) {
        this.f32436d = notFoundClasses;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        ClassDescriptor c10;
        c10 = NotFoundClasses.c(this.f32436d, (NotFoundClasses.a) obj);
        return c10;
    }
}
