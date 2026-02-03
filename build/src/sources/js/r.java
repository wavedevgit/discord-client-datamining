package js;

import js.k;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Reflection;
import ms.q0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r extends e {

    /* renamed from: x  reason: collision with root package name */
    private final int f32274x;

    /* renamed from: y  reason: collision with root package name */
    private final a f32275y;

    public r(int i10, a aVar, Function1 function1) {
        super(i10, function1);
        this.f32274x = i10;
        this.f32275y = aVar;
        if (aVar != a.f32204d) {
            if (i10 >= 1) {
                return;
            }
            throw new IllegalArgumentException(("Buffered channel capacity must be at least 1, but " + i10 + " was specified").toString());
        }
        throw new IllegalArgumentException(("This implementation does not support suspension for senders, use " + Reflection.getOrCreateKotlinClass(e.class).getSimpleName() + " instead").toString());
    }

    static /* synthetic */ Object x1(r rVar, Object obj, Continuation continuation) {
        q0 c10;
        Object z12 = rVar.z1(obj, true);
        if (z12 instanceof k.a) {
            k.e(z12);
            Function1 function1 = rVar.f32225e;
            if (function1 != null && (c10 = ms.x.c(function1, obj, null, 2, null)) != null) {
                jr.e.a(c10, rVar.p0());
                throw c10;
            }
            throw rVar.p0();
        }
        return Unit.f33074a;
    }

    private final Object y1(Object obj, boolean z10) {
        Function1 function1;
        q0 c10;
        Object d10 = super.d(obj);
        if (!k.i(d10) && !k.h(d10)) {
            if (z10 && (function1 = this.f32225e) != null && (c10 = ms.x.c(function1, obj, null, 2, null)) != null) {
                throw c10;
            }
            return k.f32268b.c(Unit.f33074a);
        }
        return d10;
    }

    private final Object z1(Object obj, boolean z10) {
        if (this.f32275y == a.f32206i) {
            return y1(obj, z10);
        }
        return n1(obj);
    }

    @Override // js.e
    protected boolean C0() {
        if (this.f32275y == a.f32205e) {
            return true;
        }
        return false;
    }

    @Override // js.e, js.w
    public Object d(Object obj) {
        return z1(obj, false);
    }

    @Override // js.e, js.w
    public Object u(Object obj, Continuation continuation) {
        return x1(this, obj, continuation);
    }
}
