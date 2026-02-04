package up;

import js.j1;
import js.m0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableStateFlow;
import kotlinx.coroutines.i;
import ms.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final qp.e f50820a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f50821b;

    /* renamed from: c  reason: collision with root package name */
    private final MutableStateFlow f50822c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f50823d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f50824e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f50825f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f50826g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50827d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ up.a f50829i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(up.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f50829i = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f50829i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f50827d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableStateFlow b10 = b.this.f50820a.b();
                oo.c cVar = new oo.c(this.f50829i.b(), this.f50829i.c(), this.f50829i.e());
                this.f50827d = 1;
                if (b10.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public b(qp.e externalInquiryController) {
        Intrinsics.checkNotNullParameter(externalInquiryController, "externalInquiryController");
        this.f50820a = externalInquiryController;
        this.f50821b = i.a(m0.a().V0(j1.b(null, 1, null)));
        this.f50822c = l0.a(new up.a(true, true, externalInquiryController.d(), true, true));
        this.f50825f = true;
    }

    public static /* synthetic */ void d(b bVar, boolean z10, boolean z11, boolean z12, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z12 = true;
        }
        bVar.c(z10, z11, z12);
    }

    private final void f() {
        boolean z10;
        boolean z11 = this.f50823d;
        boolean z12 = this.f50824e;
        boolean d10 = this.f50820a.d();
        boolean e10 = this.f50820a.e();
        if (this.f50825f && !this.f50826g) {
            z10 = true;
        } else {
            z10 = false;
        }
        up.a aVar = new up.a(z11, z12, d10, e10, z10);
        if (Intrinsics.areEqual(this.f50822c.getValue(), aVar)) {
            return;
        }
        this.f50822c.setValue(aVar);
        js.i.d(this.f50821b, null, null, new a(aVar, null), 3, null);
    }

    public final up.a b() {
        return (up.a) this.f50822c.getValue();
    }

    public final void c(boolean z10, boolean z11, boolean z12) {
        this.f50823d = z10;
        this.f50824e = z11;
        this.f50825f = z12;
        f();
    }

    public final void e(boolean z10) {
        this.f50826g = z10;
        f();
    }
}
