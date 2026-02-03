package com.discord.security_key;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class SecurityKeyManagerModule$webauthn$1 extends FunctionReferenceImpl implements Function1<String, Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public SecurityKeyManagerModule$webauthn$1(Object obj) {
        super(1, obj, SecurityKeyManagerModule.class, "resolve", "resolve(Ljava/lang/String;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        invoke((String) obj);
        return Unit.f32464a;
    }

    public final void invoke(String p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        ((SecurityKeyManagerModule) this.receiver).resolve(p02);
    }
}
