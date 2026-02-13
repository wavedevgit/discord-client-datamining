package fq;

import dp.b;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableSharedFlow;
import ys.j1;
import ys.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final e f24188a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f24189b;

    /* renamed from: c  reason: collision with root package name */
    private i f24190c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f24191d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ dp.b f24193i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(dp.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f24193i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f24193i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f24191d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow a10 = c.this.f24188a.a();
                dp.b bVar = this.f24193i;
                this.f24191d = 1;
                if (a10.emit(bVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    public c(e externalInquiryController) {
        Intrinsics.checkNotNullParameter(externalInquiryController, "externalInquiryController");
        this.f24188a = externalInquiryController;
        this.f24189b = kotlinx.coroutines.i.a(m0.a().O0(j1.b(null, 1, null)));
    }

    public final void b(dp.b inquiryEvent) {
        Intrinsics.checkNotNullParameter(inquiryEvent, "inquiryEvent");
        ys.i.d(this.f24189b, null, null, new a(inquiryEvent, null), 3, null);
    }

    public final void c(i page) {
        Intrinsics.checkNotNullParameter(page, "page");
        if (Intrinsics.areEqual(this.f24190c, page)) {
            return;
        }
        this.f24190c = page;
        b(new b.a(page.a(), page.toString()));
    }
}
