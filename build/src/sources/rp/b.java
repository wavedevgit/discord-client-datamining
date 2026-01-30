package rp;

import gs.j1;
import gs.m0;
import js.l0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableStateFlow;
import kotlinx.coroutines.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final np.e f48446a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f48447b;

    /* renamed from: c  reason: collision with root package name */
    private final MutableStateFlow f48448c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f48449d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f48450e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f48451f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f48452g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f48453d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ rp.a f48455i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(rp.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f48455i = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f48455i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f48453d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableStateFlow b10 = b.this.f48446a.b();
                lo.c cVar = new lo.c(this.f48455i.b(), this.f48455i.c(), this.f48455i.e());
                this.f48453d = 1;
                if (b10.emit(cVar, this) == f10) {
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

    public b(np.e externalInquiryController) {
        Intrinsics.checkNotNullParameter(externalInquiryController, "externalInquiryController");
        this.f48446a = externalInquiryController;
        this.f48447b = i.a(m0.a().U0(j1.b(null, 1, null)));
        this.f48448c = l0.a(new rp.a(true, true, externalInquiryController.d(), true, true));
        this.f48451f = true;
    }

    public static /* synthetic */ void d(b bVar, boolean z10, boolean z11, boolean z12, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z12 = true;
        }
        bVar.c(z10, z11, z12);
    }

    private final void f() {
        boolean z10;
        boolean z11 = this.f48449d;
        boolean z12 = this.f48450e;
        boolean d10 = this.f48446a.d();
        boolean e10 = this.f48446a.e();
        if (this.f48451f && !this.f48452g) {
            z10 = true;
        } else {
            z10 = false;
        }
        rp.a aVar = new rp.a(z11, z12, d10, e10, z10);
        if (Intrinsics.areEqual(this.f48448c.getValue(), aVar)) {
            return;
        }
        this.f48448c.setValue(aVar);
        gs.i.d(this.f48447b, null, null, new a(aVar, null), 3, null);
    }

    public final rp.a b() {
        return (rp.a) this.f48448c.getValue();
    }

    public final void c(boolean z10, boolean z11, boolean z12) {
        this.f48449d = z10;
        this.f48450e = z11;
        this.f48451f = z12;
        f();
    }

    public final void e(boolean z10) {
        this.f48452g = z10;
        f();
    }
}
