package tp;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableSharedFlow;
import ms.j1;
import ms.m0;
import ro.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final e f50889a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f50890b;

    /* renamed from: c  reason: collision with root package name */
    private i f50891c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50892d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ro.b f50894i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(ro.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f50894i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f50894i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f50892d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow a10 = c.this.f50889a.a();
                ro.b bVar = this.f50894i;
                this.f50892d = 1;
                if (a10.emit(bVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public c(e externalInquiryController) {
        Intrinsics.checkNotNullParameter(externalInquiryController, "externalInquiryController");
        this.f50889a = externalInquiryController;
        this.f50890b = kotlinx.coroutines.i.a(m0.a().V0(j1.b(null, 1, null)));
    }

    public final void b(ro.b inquiryEvent) {
        Intrinsics.checkNotNullParameter(inquiryEvent, "inquiryEvent");
        ms.i.d(this.f50890b, null, null, new a(inquiryEvent, null), 3, null);
    }

    public final void c(i page) {
        Intrinsics.checkNotNullParameter(page, "page");
        if (Intrinsics.areEqual(this.f50891c, page)) {
            return;
        }
        this.f50891c = page;
        b(new b.a(page.a(), page.toString()));
    }
}
