package gu;

import kotlin.jvm.functions.Function0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends a {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Function0 f24812e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(String str, boolean z10, Function0 function0) {
        super(str, z10);
        this.f24812e = function0;
    }

    @Override // gu.a
    public long f() {
        this.f24812e.invoke();
        return -1L;
    }
}
