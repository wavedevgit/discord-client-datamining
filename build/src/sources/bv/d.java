package bv;

import bv.e;
import java.util.List;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements qu.b, e {

    /* renamed from: a  reason: collision with root package name */
    public static final d f7286a = new d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f7287d = new a();

        a() {
            super(2);
        }

        public final Boolean a(int i10, int i11) {
            boolean z10;
            if (i10 <= i11) {
                z10 = true;
            } else {
                z10 = false;
            }
            return Boolean.valueOf(z10);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return a(((Number) obj).intValue(), ((Number) obj2).intValue());
        }
    }

    private d() {
    }

    @Override // ru.c
    public boolean b(List list, Function2 function2) {
        return e.a.b(this, list, function2);
    }

    @Override // ru.a
    public Boolean c(Object obj) {
        return e.a.f(this, obj);
    }

    @Override // ru.b
    public List d(Comparable comparable, Comparable comparable2) {
        return e.a.e(this, comparable, comparable2);
    }

    public boolean e(List list, Function2 function2) {
        return e.a.c(this, list, function2);
    }

    @Override // qu.b
    public Object f(Object obj, Object obj2) {
        return Boolean.valueOf(e(vv.a.c(obj), a.f7287d));
    }

    @Override // ru.b
    public List g(Comparable comparable, Comparable comparable2) {
        return e.a.d(this, comparable, comparable2);
    }
}
