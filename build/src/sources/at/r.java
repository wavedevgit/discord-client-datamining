package at;

import at.k;
import dt.q0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r extends e {

    /* renamed from: x  reason: collision with root package name */
    private final int f6174x;

    /* renamed from: y  reason: collision with root package name */
    private final a f6175y;

    public r(int i10, a aVar, Function1 function1) {
        super(i10, function1);
        this.f6174x = i10;
        this.f6175y = aVar;
        if (aVar != a.f6104d) {
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
            Function1 function1 = rVar.f6125e;
            if (function1 != null && (c10 = dt.x.c(function1, obj, null, 2, null)) != null) {
                as.e.a(c10, rVar.p0());
                throw c10;
            }
            throw rVar.p0();
        }
        return Unit.f31988a;
    }

    private final Object y1(Object obj, boolean z10) {
        Function1 function1;
        q0 c10;
        Object d10 = super.d(obj);
        if (!k.i(d10) && !k.h(d10)) {
            if (z10 && (function1 = this.f6125e) != null && (c10 = dt.x.c(function1, obj, null, 2, null)) != null) {
                throw c10;
            }
            return k.f6168b.c(Unit.f31988a);
        }
        return d10;
    }

    private final Object z1(Object obj, boolean z10) {
        if (this.f6175y == a.f6106i) {
            return y1(obj, z10);
        }
        return n1(obj);
    }

    @Override // at.e
    protected boolean C0() {
        if (this.f6175y == a.f6105e) {
            return true;
        }
        return false;
    }

    @Override // at.e, at.w
    public Object d(Object obj) {
        return z1(obj, false);
    }

    @Override // at.e, at.w
    public Object x(Object obj, Continuation continuation) {
        return x1(this, obj, continuation);
    }
}
