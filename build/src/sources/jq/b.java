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
    private final fq.e f31283a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f31284b;

    /* renamed from: c  reason: collision with root package name */
    private final MutableStateFlow f31285c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f31286d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f31287e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f31288f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f31289g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f31290d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ jq.a f31292i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(jq.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f31292i = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f31292i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f31290d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableStateFlow b10 = b.this.f31283a.b();
                dp.c cVar = new dp.c(this.f31292i.b(), this.f31292i.c(), this.f31292i.e());
                this.f31290d = 1;
                if (b10.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31987a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    public b(fq.e externalInquiryController) {
        Intrinsics.checkNotNullParameter(externalInquiryController, "externalInquiryController");
        this.f31283a = externalInquiryController;
        this.f31284b = i.a(m0.a().O0(j1.b(null, 1, null)));
        this.f31285c = l0.a(new jq.a(true, true, externalInquiryController.d(), true, true));
        this.f31288f = true;
    }

    public static /* synthetic */ void d(b bVar, boolean z10, boolean z11, boolean z12, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z12 = true;
        }
        bVar.c(z10, z11, z12);
    }

    private final void f() {
        boolean z10;
        boolean z11 = this.f31286d;
        boolean z12 = this.f31287e;
        boolean d10 = this.f31283a.d();
        boolean e10 = this.f31283a.e();
        if (this.f31288f && !this.f31289g) {
            z10 = true;
        } else {
            z10 = false;
        }
        jq.a aVar = new jq.a(z11, z12, d10, e10, z10);
        if (Intrinsics.areEqual(this.f31285c.getValue(), aVar)) {
            return;
        }
        this.f31285c.setValue(aVar);
        ys.i.d(this.f31284b, null, null, new a(aVar, null), 3, null);
    }

    public final jq.a b() {
        return (jq.a) this.f31285c.getValue();
    }

    public final void c(boolean z10, boolean z11, boolean z12) {
        this.f31286d = z10;
        this.f31287e = z11;
        this.f31288f = z12;
        f();
    }

    public final void e(boolean z10) {
        this.f31289g = z10;
        f();
    }
}
