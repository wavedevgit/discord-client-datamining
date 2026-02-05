package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d implements m {

    /* renamed from: d  reason: collision with root package name */
    private final g[] f4599d;

    public d(g[] generatedAdapters) {
        Intrinsics.checkNotNullParameter(generatedAdapters, "generatedAdapters");
        this.f4599d = generatedAdapters;
    }

    @Override // androidx.lifecycle.m
    public void h(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        new v();
        g[] gVarArr = this.f4599d;
        if (gVarArr.length <= 0) {
            if (gVarArr.length <= 0) {
                return;
            }
            g gVar = gVarArr[0];
            throw null;
        }
        g gVar2 = gVarArr[0];
        throw null;
    }
}
