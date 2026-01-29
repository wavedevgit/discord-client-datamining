package kotlin.reflect.jvm.internal.impl.descriptors.runtime.components;

import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ReflectKotlinClassFinderKt {
    /* JADX INFO: Access modifiers changed from: private */
    public static final String a(ClassId classId) {
        String I = StringsKt.I(classId.getRelativeClassName().asString(), '.', '$', false, 4, null);
        if (classId.getPackageFqName().isRoot()) {
            return I;
        }
        return classId.getPackageFqName() + '.' + I;
    }
}
