package ws;

import kotlin.Unit;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
import os.i0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final long f54115a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f54116d = new a();

        a() {
            super(3, b.class, "register", "register(Lkotlinx/coroutines/selects/SelectInstance;Ljava/lang/Object;)V", 0);
        }

        public final void a(b bVar, l lVar, Object obj) {
            bVar.d(lVar, obj);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            a((b) obj, (l) obj2, obj3);
            return Unit.f32056a;
        }
    }

    public b(long j10) {
        this.f54115a = j10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void d(final l lVar, Object obj) {
        if (this.f54115a <= 0) {
            lVar.c(Unit.f32056a);
            return;
        }
        Runnable runnable = new Runnable() { // from class: ws.a
            @Override // java.lang.Runnable
            public final void run() {
                b.e(l.this, this);
            }
        };
        Intrinsics.checkNotNull(lVar, "null cannot be cast to non-null type kotlinx.coroutines.selects.SelectImplementation<*>");
        k kVar = (k) lVar;
        CoroutineContext context = kVar.getContext();
        kVar.n(i0.c(context).Y(this.f54115a, runnable, context));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(l lVar, b bVar) {
        lVar.e(bVar, Unit.f32056a);
    }

    public final f c() {
        a aVar = a.f54116d;
        Intrinsics.checkNotNull(aVar, "null cannot be cast to non-null type kotlin.Function3<@[ParameterName(name = \"clauseObject\")] kotlin.Any, @[ParameterName(name = \"select\")] kotlinx.coroutines.selects.SelectInstance<*>, @[ParameterName(name = \"param\")] kotlin.Any?, kotlin.Unit>");
        return new g(this, (Function3) TypeIntrinsics.beforeCheckcastToFunctionOfArity(aVar, 3), null, 4, null);
    }
}
