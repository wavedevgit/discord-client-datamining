package np;

import gs.j1;
import gs.m0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableSharedFlow;
import lo.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final e f42044a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f42045b;

    /* renamed from: c  reason: collision with root package name */
    private i f42046c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f42047d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ lo.b f42049i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(lo.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f42049i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f42049i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f42047d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow a10 = c.this.f42044a.a();
                lo.b bVar = this.f42049i;
                this.f42047d = 1;
                if (a10.emit(bVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public c(e externalInquiryController) {
        Intrinsics.checkNotNullParameter(externalInquiryController, "externalInquiryController");
        this.f42044a = externalInquiryController;
        this.f42045b = kotlinx.coroutines.i.a(m0.a().U0(j1.b(null, 1, null)));
    }

    public final void b(lo.b inquiryEvent) {
        Intrinsics.checkNotNullParameter(inquiryEvent, "inquiryEvent");
        gs.i.d(this.f42045b, null, null, new a(inquiryEvent, null), 3, null);
    }

    public final void c(i page) {
        Intrinsics.checkNotNullParameter(page, "page");
        if (Intrinsics.areEqual(this.f42046c, page)) {
            return;
        }
        this.f42046c = page;
        b(new b.a(page.a(), page.toString()));
    }
}
