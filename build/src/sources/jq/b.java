package jq;

import bt.l0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableStateFlow;
import kotlinx.coroutines.i;
import ys.j1;
import ys.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final fq.e f31852a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f31853b;

    /* renamed from: c  reason: collision with root package name */
    private final MutableStateFlow f31854c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f31855d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f31856e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f31857f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f31858g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f31859d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ jq.a f31861i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(jq.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f31861i = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f31861i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f31859d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableStateFlow b10 = b.this.f31852a.b();
                dp.c cVar = new dp.c(this.f31861i.b(), this.f31861i.c(), this.f31861i.e());
                this.f31859d = 1;
                if (b10.emit(cVar, this) == f10) {
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

    public b(fq.e externalInquiryController) {
        Intrinsics.checkNotNullParameter(externalInquiryController, "externalInquiryController");
        this.f31852a = externalInquiryController;
        this.f31853b = i.a(m0.a().O0(j1.b(null, 1, null)));
        this.f31854c = l0.a(new jq.a(true, true, externalInquiryController.d(), true, true));
        this.f31857f = true;
    }

    public static /* synthetic */ void d(b bVar, boolean z10, boolean z11, boolean z12, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z12 = true;
        }
        bVar.c(z10, z11, z12);
    }

    private final void f() {
        boolean z10;
        boolean z11 = this.f31855d;
        boolean z12 = this.f31856e;
        boolean d10 = this.f31852a.d();
        boolean e10 = this.f31852a.e();
        if (this.f31857f && !this.f31858g) {
            z10 = true;
        } else {
            z10 = false;
        }
        jq.a aVar = new jq.a(z11, z12, d10, e10, z10);
        if (Intrinsics.areEqual(this.f31854c.getValue(), aVar)) {
            return;
        }
        this.f31854c.setValue(aVar);
        ys.i.d(this.f31853b, null, null, new a(aVar, null), 3, null);
    }

    public final jq.a b() {
        return (jq.a) this.f31854c.getValue();
    }

    public final void c(boolean z10, boolean z11, boolean z12) {
        this.f31855d = z10;
        this.f31856e = z11;
        this.f31857f = z12;
        f();
    }

    public final void e(boolean z10) {
        this.f31858g = z10;
        f();
    }
}
