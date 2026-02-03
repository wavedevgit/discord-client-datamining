package kotlin.reflect.jvm.internal.impl.descriptors.annotations;

import kotlin.jvm.functions.Function1;
import kotlin.sequences.Sequence;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class d implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final d f33451d = new d();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Sequence e10;
        e10 = CompositeAnnotations.e((Annotations) obj);
        return e10;
    }
}
