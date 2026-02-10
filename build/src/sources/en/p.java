package en;

import en.k;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KType;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends k implements c {

    /* renamed from: a  reason: collision with root package name */
    private final KType f23003a;

    /* renamed from: b  reason: collision with root package name */
    private final String f23004b;

    /* renamed from: c  reason: collision with root package name */
    private final s f23005c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23006d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ o f23007e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ p f23008i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ k.a f23009o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(o oVar, p pVar, k.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f23007e = oVar;
            this.f23008i = pVar;
            this.f23009o = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f23007e, this.f23008i, this.f23009o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f23006d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                o oVar = this.f23007e;
                String str = this.f23008i.f23004b;
                h c10 = this.f23009o.c();
                this.f23006d = 1;
                if (w.k(oVar, str, c10, this) == f10) {
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

    public p(KType workerType, String key) {
        Intrinsics.checkNotNullParameter(workerType, "workerType");
        Intrinsics.checkNotNullParameter(key, "key");
        this.f23003a = workerType;
        this.f23004b = key;
        this.f23005c = w.n(workerType);
    }

    @Override // en.c
    public String a() {
        return Intrinsics.stringPlus("worker ", this.f23003a);
    }

    @Override // en.c
    public s c() {
        return this.f23005c;
    }

    @Override // en.k
    public /* bridge */ /* synthetic */ Object e(Object obj, Object obj2, Object obj3) {
        return j((o) obj, (o) obj2, ((Number) obj3).intValue());
    }

    @Override // en.k
    public /* bridge */ /* synthetic */ Object f(Object obj, Object obj2, k.a aVar) {
        k((o) obj, ((Number) obj2).intValue(), aVar);
        return Unit.f31987a;
    }

    @Override // en.k
    public /* bridge */ /* synthetic */ i g(Object obj) {
        return l(((Number) obj).intValue());
    }

    @Override // en.k
    /* renamed from: i */
    public Integer d(o props, i iVar) {
        Intrinsics.checkNotNullParameter(props, "props");
        return 0;
    }

    public Integer j(o old, o oVar, int i10) {
        Intrinsics.checkNotNullParameter(old, "old");
        Intrinsics.checkNotNullParameter(oVar, "new");
        if (!old.a(oVar)) {
            i10++;
        }
        return Integer.valueOf(i10);
    }

    public void k(o renderProps, int i10, k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(context, "context");
        context.a(String.valueOf(i10), new a(renderProps, this, context, null));
    }

    public i l(int i10) {
        return null;
    }
}
