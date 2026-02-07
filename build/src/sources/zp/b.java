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
    private final vp.e f56468a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f56469b;

    /* renamed from: c  reason: collision with root package name */
    private final MutableStateFlow f56470c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f56471d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f56472e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f56473f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f56474g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f56475d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ zp.a f56477i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(zp.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f56477i = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f56477i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f56475d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableStateFlow b10 = b.this.f56468a.b();
                to.c cVar = new to.c(this.f56477i.b(), this.f56477i.c(), this.f56477i.e());
                this.f56475d = 1;
                if (b10.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public b(vp.e externalInquiryController) {
        Intrinsics.checkNotNullParameter(externalInquiryController, "externalInquiryController");
        this.f56468a = externalInquiryController;
        this.f56469b = i.a(m0.a().Y0(j1.b(null, 1, null)));
        this.f56470c = l0.a(new zp.a(true, true, externalInquiryController.d(), true, true));
        this.f56473f = true;
    }

    public static /* synthetic */ void d(b bVar, boolean z10, boolean z11, boolean z12, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z12 = true;
        }
        bVar.c(z10, z11, z12);
    }

    private final void f() {
        boolean z10;
        boolean z11 = this.f56471d;
        boolean z12 = this.f56472e;
        boolean d10 = this.f56468a.d();
        boolean e10 = this.f56468a.e();
        if (this.f56473f && !this.f56474g) {
            z10 = true;
        } else {
            z10 = false;
        }
        zp.a aVar = new zp.a(z11, z12, d10, e10, z10);
        if (Intrinsics.areEqual(this.f56470c.getValue(), aVar)) {
            return;
        }
        this.f56470c.setValue(aVar);
        os.i.d(this.f56469b, null, null, new a(aVar, null), 3, null);
    }

    public final zp.a b() {
        return (zp.a) this.f56470c.getValue();
    }

    public final void c(boolean z10, boolean z11, boolean z12) {
        this.f56471d = z10;
        this.f56472e = z11;
        this.f56473f = z12;
        f();
    }

    public final void e(boolean z10) {
        this.f56474g = z10;
        f();
    }
}
