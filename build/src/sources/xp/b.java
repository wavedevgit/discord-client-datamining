package xp;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableStateFlow;
import kotlinx.coroutines.i;
import ms.j1;
import ms.m0;
import ps.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final tp.e f54059a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f54060b;

    /* renamed from: c  reason: collision with root package name */
    private final MutableStateFlow f54061c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f54062d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f54063e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f54064f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f54065g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f54066d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ xp.a f54068i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(xp.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f54068i = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f54068i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f54066d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableStateFlow b10 = b.this.f54059a.b();
                ro.c cVar = new ro.c(this.f54068i.b(), this.f54068i.c(), this.f54068i.e());
                this.f54066d = 1;
                if (b10.emit(cVar, this) == f10) {
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

    public b(tp.e externalInquiryController) {
        Intrinsics.checkNotNullParameter(externalInquiryController, "externalInquiryController");
        this.f54059a = externalInquiryController;
        this.f54060b = i.a(m0.a().V0(j1.b(null, 1, null)));
        this.f54061c = l0.a(new xp.a(true, true, externalInquiryController.d(), true, true));
        this.f54064f = true;
    }

    public static /* synthetic */ void d(b bVar, boolean z10, boolean z11, boolean z12, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z12 = true;
        }
        bVar.c(z10, z11, z12);
    }

    private final void f() {
        boolean z10;
        boolean z11 = this.f54062d;
        boolean z12 = this.f54063e;
        boolean d10 = this.f54059a.d();
        boolean e10 = this.f54059a.e();
        if (this.f54064f && !this.f54065g) {
            z10 = true;
        } else {
            z10 = false;
        }
        xp.a aVar = new xp.a(z11, z12, d10, e10, z10);
        if (Intrinsics.areEqual(this.f54061c.getValue(), aVar)) {
            return;
        }
        this.f54061c.setValue(aVar);
        ms.i.d(this.f54060b, null, null, new a(aVar, null), 3, null);
    }

    public final xp.a b() {
        return (xp.a) this.f54061c.getValue();
    }

    public final void c(boolean z10, boolean z11, boolean z12) {
        this.f54062d = z10;
        this.f54063e = z11;
        this.f54064f = z12;
        f();
    }

    public final void e(boolean z10) {
        this.f54065g = z10;
        f();
    }
}
