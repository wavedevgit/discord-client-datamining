package com.withpersona.sdk2.inquiry;

import js.j1;
import js.m0;
import kotlin.Metadata;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableSharedFlow;
import kotlinx.coroutines.i;
import ms.a0;
import ms.c0;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\r\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0003R\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0007\u0010\bR\u001a\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\n0\t8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000b\u0010\fR\u0017\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\n0\r8F¢\u0006\u0006\u001a\u0004\b\u000e\u0010\u000f¨\u0006\u0011"}, d2 = {"Lcom/withpersona/sdk2/inquiry/InquiryActivityBroadcastManager;", "", "<init>", "()V", "", "cancelRunningInquiries", "Lkotlinx/coroutines/CoroutineScope;", "coroutineScope", "Lkotlinx/coroutines/CoroutineScope;", "Lkotlinx/coroutines/flow/MutableSharedFlow;", "Lcom/withpersona/sdk2/inquiry/InquiryActivityEvent;", "_eventFlow", "Lkotlinx/coroutines/flow/MutableSharedFlow;", "Lms/a0;", "getEventFlow", "()Lms/a0;", "eventFlow", "inquiry-dynamic-feature_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InquiryActivityBroadcastManager {
    @NotNull
    public static final InquiryActivityBroadcastManager INSTANCE = new InquiryActivityBroadcastManager();
    @NotNull
    private static final CoroutineScope coroutineScope = i.a(m0.a().V0(j1.b(null, 1, null)));
    @NotNull
    private static final MutableSharedFlow _eventFlow = c0.b(0, 0, null, 7, null);

    private InquiryActivityBroadcastManager() {
    }

    public final void cancelRunningInquiries() {
        js.i.d(coroutineScope, null, null, new InquiryActivityBroadcastManager$cancelRunningInquiries$1(null), 3, null);
    }

    @NotNull
    public final a0 getEventFlow() {
        return _eventFlow;
    }
}
