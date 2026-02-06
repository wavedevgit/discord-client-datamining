package zp;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableStateFlow;
import kotlinx.coroutines.i;
import os.j1;
import os.m0;
import rs.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final vp.e f56420a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f56421b;

    /* renamed from: c  reason: collision with root package name */
    private final MutableStateFlow f56422c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f56423d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f56424e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f56425f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f56426g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f56427d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ zp.a f56429i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(zp.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f56429i = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f56429i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f56427d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableStateFlow b10 = b.this.f56420a.b();
                to.c cVar = new to.c(this.f56429i.b(), this.f56429i.c(), this.f56429i.e());
                this.f56427d = 1;
                if (b10.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    public b(vp.e externalInquiryController) {
        Intrinsics.checkNotNullParameter(externalInquiryController, "externalInquiryController");
        this.f56420a = externalInquiryController;
        this.f56421b = i.a(m0.a().Y0(j1.b(null, 1, null)));
        this.f56422c = l0.a(new zp.a(true, true, externalInquiryController.d(), true, true));
        this.f56425f = true;
    }

    public static /* synthetic */ void d(b bVar, boolean z10, boolean z11, boolean z12, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z12 = true;
        }
        bVar.c(z10, z11, z12);
    }

    private final void f() {
        boolean z10;
        boolean z11 = this.f56423d;
        boolean z12 = this.f56424e;
        boolean d10 = this.f56420a.d();
        boolean e10 = this.f56420a.e();
        if (this.f56425f && !this.f56426g) {
            z10 = true;
        } else {
            z10 = false;
        }
        zp.a aVar = new zp.a(z11, z12, d10, e10, z10);
        if (Intrinsics.areEqual(this.f56422c.getValue(), aVar)) {
            return;
        }
        this.f56422c.setValue(aVar);
        os.i.d(this.f56421b, null, null, new a(aVar, null), 3, null);
    }

    public final zp.a b() {
        return (zp.a) this.f56422c.getValue();
    }

    public final void c(boolean z10, boolean z11, boolean z12) {
        this.f56423d = z10;
        this.f56424e = z11;
        this.f56425f = z12;
        f();
    }

    public final void e(boolean z10) {
        this.f56426g = z10;
        f();
    }
}
