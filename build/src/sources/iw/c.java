package iw;

import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends k {

    /* renamed from: e  reason: collision with root package name */
    private final j f31016e;

    /* renamed from: i  reason: collision with root package name */
    private final int f31017i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(j replaceData, int i10) {
        super(null);
        Intrinsics.checkNotNullParameter(replaceData, "replaceData");
        this.f31016e = replaceData;
        this.f31017i = i10;
    }

    public j a() {
        return this.f31016e;
    }

    @Override // kotlin.jvm.functions.Function0
    /* renamed from: b */
    public String invoke() {
        String b10;
        b10 = l.b(a().c(), a().b(), a().a(), this.f31017i);
        return b10;
    }
}
