package kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final c f33736d = new c();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean a10;
        a10 = ReflectJavaClass.a((Class) obj);
        return Boolean.valueOf(a10);
    }
}
