package kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure;

import java.lang.reflect.ParameterizedType;
import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final a f32716d = new a();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        ParameterizedType a10;
        a10 = ReflectClassUtilKt.a((ParameterizedType) obj);
        return a10;
    }
}
