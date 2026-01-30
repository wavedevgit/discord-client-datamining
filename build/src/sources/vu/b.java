package vu;

import java.util.List;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
import lu.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements ku.b, lu.c {

    /* renamed from: a  reason: collision with root package name */
    public static final b f51975a = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f51976d = new a();

        a() {
            super(2);
        }

        public final Boolean a(int i10, int i11) {
            boolean z10;
            if (i10 >= i11) {
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

    private b() {
    }

    @Override // lu.c
    public boolean b(List list, Function2 function2) {
        return c.a.b(this, list, function2);
    }

    @Override // lu.a
    public Boolean c(Object obj) {
        return c.a.f(this, obj);
    }

    @Override // lu.b
    public List d(Comparable comparable, Comparable comparable2) {
        return c.a.e(this, comparable, comparable2);
    }

    @Override // ku.b
    public Object f(Object obj, Object obj2) {
        return Boolean.valueOf(b(pv.a.c(obj), a.f51976d));
    }

    @Override // lu.b
    public List g(Comparable comparable, Comparable comparable2) {
        return c.a.d(this, comparable, comparable2);
    }
}
