package rv;

import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends k {

    /* renamed from: e  reason: collision with root package name */
    private final j f49251e;

    /* renamed from: i  reason: collision with root package name */
    private final int f49252i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(j replaceData, int i10) {
        super(null);
        Intrinsics.checkNotNullParameter(replaceData, "replaceData");
        this.f49251e = replaceData;
        this.f49252i = i10;
    }

    public j a() {
        return this.f49251e;
    }

    @Override // kotlin.jvm.functions.Function0
    /* renamed from: b */
    public String invoke() {
        String b10;
        b10 = l.b(a().c(), a().b(), a().a(), this.f49252i);
        return b10;
    }
}
