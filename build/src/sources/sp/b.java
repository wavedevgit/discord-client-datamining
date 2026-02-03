package sp;

import hs.j1;
import hs.m0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableStateFlow;
import kotlinx.coroutines.i;
import ks.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final op.e f49227a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f49228b;

    /* renamed from: c  reason: collision with root package name */
    private final MutableStateFlow f49229c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f49230d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f49231e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f49232f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f49233g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f49234d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ sp.a f49236i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(sp.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f49236i = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f49236i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f49234d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableStateFlow b10 = b.this.f49227a.b();
                mo.c cVar = new mo.c(this.f49236i.b(), this.f49236i.c(), this.f49236i.e());
                this.f49234d = 1;
                if (b10.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public b(op.e externalInquiryController) {
        Intrinsics.checkNotNullParameter(externalInquiryController, "externalInquiryController");
        this.f49227a = externalInquiryController;
        this.f49228b = i.a(m0.a().Z0(j1.b(null, 1, null)));
        this.f49229c = l0.a(new sp.a(true, true, externalInquiryController.d(), true, true));
        this.f49232f = true;
    }

    public static /* synthetic */ void d(b bVar, boolean z10, boolean z11, boolean z12, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z12 = true;
        }
        bVar.c(z10, z11, z12);
    }

    private final void f() {
        boolean z10;
        boolean z11 = this.f49230d;
        boolean z12 = this.f49231e;
        boolean d10 = this.f49227a.d();
        boolean e10 = this.f49227a.e();
        if (this.f49232f && !this.f49233g) {
            z10 = true;
        } else {
            z10 = false;
        }
        sp.a aVar = new sp.a(z11, z12, d10, e10, z10);
        if (Intrinsics.areEqual(this.f49229c.getValue(), aVar)) {
            return;
        }
        this.f49229c.setValue(aVar);
        hs.i.d(this.f49228b, null, null, new a(aVar, null), 3, null);
    }

    public final sp.a b() {
        return (sp.a) this.f49229c.getValue();
    }

    public final void c(boolean z10, boolean z11, boolean z12) {
        this.f49230d = z10;
        this.f49231e = z11;
        this.f49232f = z12;
        f();
    }

    public final void e(boolean z10) {
        this.f49233g = z10;
        f();
    }
}
