package n4;

import kotlin.jvm.internal.Intrinsics;
import p4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends c {

    /* renamed from: b  reason: collision with root package name */
    private final int f39725b;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(o4.h tracker) {
        super(tracker);
        Intrinsics.checkNotNullParameter(tracker, "tracker");
        this.f39725b = 6;
    }

    @Override // n4.c
    public int b() {
        return this.f39725b;
    }

    @Override // n4.c
    public boolean c(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        return workSpec.f44919j.g();
    }

    @Override // n4.c
    public /* bridge */ /* synthetic */ boolean d(Object obj) {
        return g(((Boolean) obj).booleanValue());
    }

    public boolean g(boolean z10) {
        return !z10;
    }
}
