package vu;

import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import vu.c;
import xu.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements lu.b, c, xu.b {

    /* renamed from: a  reason: collision with root package name */
    public static final g f51545a = new g();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f51546d = new a();

        a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Double invoke(List it) {
            Intrinsics.checkNotNullParameter(it, "it");
            Iterator it2 = it.iterator();
            if (it2.hasNext()) {
                Object next = it2.next();
                while (it2.hasNext()) {
                    next = Double.valueOf(((Number) next).doubleValue() * ((Number) it2.next()).doubleValue());
                }
                return (Double) next;
            }
            throw new UnsupportedOperationException("Empty collection can't be reduced.");
        }
    }

    private g() {
    }

    public Double a(Object obj, Function1 function1) {
        return c.a.a(this, obj, function1);
    }

    public List b(Object obj) {
        return b.a.b(this, obj);
    }

    @Override // lu.b
    public Object f(Object obj, Object obj2) {
        List c10 = qv.a.c(obj);
        int size = c10.size();
        if (size != 0) {
            if (size != 1) {
                return a(b(obj), a.f51546d);
            }
            return CollectionsKt.o0(c10);
        }
        return null;
    }
}
