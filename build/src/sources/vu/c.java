package vu;

import java.util.List;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
import vu.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements ku.b, e {

    /* renamed from: a  reason: collision with root package name */
    public static final c f51977a = new c();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f51978d = new a();

        a() {
            super(2);
        }

        public final Boolean a(int i10, int i11) {
            boolean z10;
            if (i10 < i11) {
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

    private c() {
    }

    @Override // lu.c
    public boolean b(List list, Function2 function2) {
        return e.a.b(this, list, function2);
    }

    @Override // lu.a
    public Boolean c(Object obj) {
        return e.a.f(this, obj);
    }

    @Override // lu.b
    public List d(Comparable comparable, Comparable comparable2) {
        return e.a.e(this, comparable, comparable2);
    }

    public boolean e(List list, Function2 function2) {
        return e.a.c(this, list, function2);
    }

    @Override // ku.b
    public Object f(Object obj, Object obj2) {
        return Boolean.valueOf(e(pv.a.c(obj), a.f51978d));
    }

    @Override // lu.b
    public List g(Comparable comparable, Comparable comparable2) {
        return e.a.d(this, comparable, comparable2);
    }
}
