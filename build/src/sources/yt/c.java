package yt;

import kotlin.jvm.functions.Function0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends a {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Function0 f55187e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(String str, boolean z10, Function0 function0) {
        super(str, z10);
        this.f55187e = function0;
    }

    @Override // yt.a
    public long f() {
        this.f55187e.invoke();
        return -1L;
    }
}
