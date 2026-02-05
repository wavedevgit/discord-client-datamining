package com.withpersona.sdk2.inquiry;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.withpersona.sdk2.inquiry.InquiryActivityEvent;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableSharedFlow;
import ur.b;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 0, 0}, xi = 48)
@e(c = "com.withpersona.sdk2.inquiry.InquiryActivityBroadcastManager$cancelRunningInquiries$1", f = "InquiryActivityBroadcastManager.kt", l = {ChatViewRecyclerTypes.INTERACTION_STATUS}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InquiryActivityBroadcastManager$cancelRunningInquiries$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    public InquiryActivityBroadcastManager$cancelRunningInquiries$1(Continuation<? super InquiryActivityBroadcastManager$cancelRunningInquiries$1> continuation) {
        super(2, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new InquiryActivityBroadcastManager$cancelRunningInquiries$1(continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        MutableSharedFlow mutableSharedFlow;
        Object f10 = b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            c.b(obj);
            mutableSharedFlow = InquiryActivityBroadcastManager._eventFlow;
            InquiryActivityEvent.CancelInquiry cancelInquiry = InquiryActivityEvent.CancelInquiry.INSTANCE;
            this.label = 1;
            if (mutableSharedFlow.emit(cancelInquiry, this) == f10) {
                return f10;
            }
        }
        return Unit.f31988a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((InquiryActivityBroadcastManager$cancelRunningInquiries$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
    }
}
