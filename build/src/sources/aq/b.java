package aq;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableStateFlow;
import kotlinx.coroutines.i;
import ps.j1;
import ps.m0;
import ss.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final wp.e f5998a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f5999b;

    /* renamed from: c  reason: collision with root package name */
    private final MutableStateFlow f6000c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f6001d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f6002e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f6003f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f6004g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6005d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ aq.a f6007i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(aq.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f6007i = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f6007i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f6005d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableStateFlow b10 = b.this.f5998a.b();
                uo.c cVar = new uo.c(this.f6007i.b(), this.f6007i.c(), this.f6007i.e());
                this.f6005d = 1;
                if (b10.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public b(wp.e externalInquiryController) {
        Intrinsics.checkNotNullParameter(externalInquiryController, "externalInquiryController");
        this.f5998a = externalInquiryController;
        this.f5999b = i.a(m0.a().V0(j1.b(null, 1, null)));
        this.f6000c = l0.a(new aq.a(true, true, externalInquiryController.d(), true, true));
        this.f6003f = true;
    }

    public static /* synthetic */ void d(b bVar, boolean z10, boolean z11, boolean z12, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z12 = true;
        }
        bVar.c(z10, z11, z12);
    }

    private final void f() {
        boolean z10;
        boolean z11 = this.f6001d;
        boolean z12 = this.f6002e;
        boolean d10 = this.f5998a.d();
        boolean e10 = this.f5998a.e();
        if (this.f6003f && !this.f6004g) {
            z10 = true;
        } else {
            z10 = false;
        }
        aq.a aVar = new aq.a(z11, z12, d10, e10, z10);
        if (Intrinsics.areEqual(this.f6000c.getValue(), aVar)) {
            return;
        }
        this.f6000c.setValue(aVar);
        ps.i.d(this.f5999b, null, null, new a(aVar, null), 3, null);
    }

    public final aq.a b() {
        return (aq.a) this.f6000c.getValue();
    }

    public final void c(boolean z10, boolean z11, boolean z12) {
        this.f6001d = z10;
        this.f6002e = z11;
        this.f6003f = z12;
        f();
    }

    public final void e(boolean z10) {
        this.f6004g = z10;
        f();
    }
}
