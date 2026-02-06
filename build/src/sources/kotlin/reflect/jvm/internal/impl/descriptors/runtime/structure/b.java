package kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure;

import java.lang.reflect.ParameterizedType;
import kotlin.jvm.functions.Function1;
import kotlin.sequences.Sequence;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final b f32669d = new b();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Sequence b10;
        b10 = ReflectClassUtilKt.b((ParameterizedType) obj);
        return b10;
    }
}
