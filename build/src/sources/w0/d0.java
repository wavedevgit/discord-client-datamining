package w0;

import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract /* synthetic */ class d0 {
    public static final a0 a() {
        r rVar = r.f53299a;
        Intrinsics.checkNotNull(rVar, "null cannot be cast to non-null type androidx.compose.runtime.SnapshotMutationPolicy<T of androidx.compose.runtime.SnapshotStateKt__SnapshotMutationPolicyKt.neverEqualPolicy>");
        return rVar;
    }

    public static final a0 b() {
        y yVar = y.f53309a;
        Intrinsics.checkNotNull(yVar, "null cannot be cast to non-null type androidx.compose.runtime.SnapshotMutationPolicy<T of androidx.compose.runtime.SnapshotStateKt__SnapshotMutationPolicyKt.referentialEqualityPolicy>");
        return yVar;
    }

    public static final a0 c() {
        i0 i0Var = i0.f53292a;
        Intrinsics.checkNotNull(i0Var, "null cannot be cast to non-null type androidx.compose.runtime.SnapshotMutationPolicy<T of androidx.compose.runtime.SnapshotStateKt__SnapshotMutationPolicyKt.structuralEqualityPolicy>");
        return i0Var;
    }
}
