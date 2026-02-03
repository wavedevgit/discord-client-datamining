package yu;

import java.util.List;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
import ou.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements nu.b, ou.c {

    /* renamed from: a  reason: collision with root package name */
    public static final a f55338a = new a();

    /* renamed from: yu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0772a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0772a f55339d = new C0772a();

        C0772a() {
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

    @Override // ou.c
    public boolean b(List list, Function2 function2) {
        return c.a.b(this, list, function2);
    }

    @Override // ou.a
    public Boolean c(Object obj) {
        return c.a.f(this, obj);
    }

    @Override // ou.b
    public List d(Comparable comparable, Comparable comparable2) {
        return c.a.e(this, comparable, comparable2);
    }

    @Override // nu.b
    public Object f(Object obj, Object obj2) {
        return Boolean.valueOf(b(sv.a.c(obj), C0772a.f55339d));
    }

    @Override // ou.b
    public List g(Comparable comparable, Comparable comparable2) {
        return c.a.d(this, comparable, comparable2);
    }
}
