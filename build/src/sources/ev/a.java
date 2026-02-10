package ev;

import java.util.List;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
import uu.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements tu.b, uu.c {

    /* renamed from: a  reason: collision with root package name */
    public static final a f22144a = new a();

    /* renamed from: ev.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0328a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0328a f22145d = new C0328a();

        C0328a() {
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

    @Override // uu.c
    public boolean b(List list, Function2 function2) {
        return c.a.b(this, list, function2);
    }

    @Override // uu.a
    public Boolean c(Object obj) {
        return c.a.f(this, obj);
    }

    @Override // uu.b
    public List d(Comparable comparable, Comparable comparable2) {
        return c.a.e(this, comparable, comparable2);
    }

    @Override // tu.b
    public Object f(Object obj, Object obj2) {
        return Boolean.valueOf(b(dw.a.c(obj), C0328a.f22145d));
    }

    @Override // uu.b
    public List g(Comparable comparable, Comparable comparable2) {
        return c.a.d(this, comparable, comparable2);
    }
}
