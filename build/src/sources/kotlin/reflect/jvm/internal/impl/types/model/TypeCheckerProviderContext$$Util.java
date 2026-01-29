package kotlin.reflect.jvm.internal.impl.types.model;

import kotlin.reflect.jvm.internal.impl.types.TypeCheckerState;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public /* synthetic */ class TypeCheckerProviderContext$$Util {
    public static /* synthetic */ TypeCheckerState newTypeCheckerState$default(TypeCheckerProviderContext typeCheckerProviderContext, boolean z10, boolean z11, boolean z12, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 4) != 0) {
                z12 = false;
            }
            return typeCheckerProviderContext.newTypeCheckerState(z10, z11, z12);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: newTypeCheckerState");
    }
}
