package is;

import is.k;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Reflection;
import ls.q0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r extends e {

    /* renamed from: x  reason: collision with root package name */
    private final int f31211x;

    /* renamed from: y  reason: collision with root package name */
    private final a f31212y;

    public r(int i10, a aVar, Function1 function1) {
        super(i10, function1);
        this.f31211x = i10;
        this.f31212y = aVar;
        if (aVar != a.f31141d) {
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
            Function1 function1 = rVar.f31162e;
            if (function1 != null && (c10 = ls.x.c(function1, obj, null, 2, null)) != null) {
                ir.e.a(c10, rVar.p0());
                throw c10;
            }
            throw rVar.p0();
        }
        return Unit.f33298a;
    }

    private final Object y1(Object obj, boolean z10) {
        Function1 function1;
        q0 c10;
        Object e10 = super.e(obj);
        if (!k.i(e10) && !k.h(e10)) {
            if (z10 && (function1 = this.f31162e) != null && (c10 = ls.x.c(function1, obj, null, 2, null)) != null) {
                throw c10;
            }
            return k.f31205b.c(Unit.f33298a);
        }
        return e10;
    }

    private final Object z1(Object obj, boolean z10) {
        if (this.f31212y == a.f31143i) {
            return y1(obj, z10);
        }
        return n1(obj);
    }

    @Override // is.e
    protected boolean C0() {
        if (this.f31212y == a.f31142e) {
            return true;
        }
        return false;
    }

    @Override // is.e, is.w
    public Object e(Object obj) {
        return z1(obj, false);
    }

    @Override // is.e, is.w
    public Object u(Object obj, Continuation continuation) {
        return x1(this, obj, continuation);
    }
}
