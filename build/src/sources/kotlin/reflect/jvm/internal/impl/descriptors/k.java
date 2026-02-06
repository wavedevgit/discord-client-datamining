package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.sequences.Sequence;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final k f32599d = new k();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Sequence h10;
        h10 = TypeParameterUtilsKt.h((DeclarationDescriptor) obj);
        return h10;
    }
}
