package vu;

import java.util.List;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
import lu.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements ku.b, lu.c {

    /* renamed from: a  reason: collision with root package name */
    public static final a f51973a = new a();

    /* renamed from: vu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0707a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0707a f51974d = new C0707a();

        C0707a() {
            super(2);
        }

        public final Boolean a(int i10, int i11) {
            boolean z10;
            if (i10 > i11) {
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

    private a() {
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
        return Boolean.valueOf(b(pv.a.c(obj), C0707a.f51974d));
    }

    @Override // lu.b
    public List g(Comparable comparable, Comparable comparable2) {
        return c.a.d(this, comparable, comparable2);
    }
}
