package kotlin.reflect.jvm.internal.impl.types.model;

import kotlin.reflect.jvm.internal.impl.types.TypeCheckerState;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface TypeCheckerProviderContext {
    @NotNull
    TypeCheckerState newTypeCheckerState(boolean z10, boolean z11, boolean z12);
}
