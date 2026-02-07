package qs;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Reflection;
import qs.k;
import ts.q0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r extends e {

    /* renamed from: x  reason: collision with root package name */
    private final int f48184x;

    /* renamed from: y  reason: collision with root package name */
    private final a f48185y;

    public r(int i10, a aVar, Function1 function1) {
        super(i10, function1);
        this.f48184x = i10;
        this.f48185y = aVar;
        if (aVar != a.f48114d) {
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
            Function1 function1 = rVar.f48135e;
            if (function1 != null && (c10 = ts.x.c(function1, obj, null, 2, null)) != null) {
                qr.e.a(c10, rVar.p0());
                throw c10;
            }
            throw rVar.p0();
        }
        return Unit.f32056a;
    }

    private final Object y1(Object obj, boolean z10) {
        Function1 function1;
        q0 c10;
        Object i10 = super.i(obj);
        if (!k.i(i10) && !k.h(i10)) {
            if (z10 && (function1 = this.f48135e) != null && (c10 = ts.x.c(function1, obj, null, 2, null)) != null) {
                throw c10;
            }
            return k.f48178b.c(Unit.f32056a);
        }
        return i10;
    }

    private final Object z1(Object obj, boolean z10) {
        if (this.f48185y == a.f48116i) {
            return y1(obj, z10);
        }
        return n1(obj);
    }

    @Override // qs.e
    protected boolean C0() {
        if (this.f48185y == a.f48115e) {
            return true;
        }
        return false;
    }

    @Override // qs.e, qs.w
    public Object i(Object obj) {
        return z1(obj, false);
    }

    @Override // qs.e, qs.w
    public Object x(Object obj, Continuation continuation) {
        return x1(this, obj, continuation);
    }
}
