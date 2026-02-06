package com.withpersona.sdk2.inquiry.network.dto;

import defpackage.e;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import org.jetbrains.annotations.NotNull;
import qr.l;
@Metadata(d1 = {"\u0000\b\n\u0002\u0018\u0002\n\u0002\b\u0006\"\u001b\u0010\u0005\u001a\u00020\u00008BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u0001\u0010\u0002\u001a\u0004\b\u0003\u0010\u0004¨\u0006\u0006"}, d2 = {"Le;", "jsonLogicEngine$delegate", "Lkotlin/Lazy;", "getJsonLogicEngine", "()Le;", "jsonLogicEngine", "network-inquiry_release"}, k = 2, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class JsonLogicBooleanKt {
    @NotNull
    private static final Lazy jsonLogicEngine$delegate = l.a(new Function0() { // from class: com.withpersona.sdk2.inquiry.network.dto.b
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            e jsonLogicEngine_delegate$lambda$0;
            jsonLogicEngine_delegate$lambda$0 = JsonLogicBooleanKt.jsonLogicEngine_delegate$lambda$0();
            return jsonLogicEngine_delegate$lambda$0;
        }
    });

    public static final e getJsonLogicEngine() {
        return (e) jsonLogicEngine$delegate.getValue();
    }

    public static final e jsonLogicEngine_delegate$lambda$0() {
        e.a aVar = new e.a();
        i iVar = i.f26520a;
        return aVar.d(iVar.b()).b(iVar.a()).e();
    }
}
