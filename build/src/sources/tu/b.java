package tu;

import java.util.List;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
import tu.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements lu.b, c {

    /* renamed from: a  reason: collision with root package name */
    public static final b f50012a = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f50013d = new a();

        a() {
            super(2);
        }

        public final Boolean a(int i10, int i11) {
            boolean z10;
            if (i10 == i11) {
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

    @Override // tu.c, uu.a
    public Object a(Object obj) {
        return c.a.f(this, obj);
    }

    @Override // mu.c
    public boolean b(List list, Function2 function2) {
        return c.a.b(this, list, function2);
    }

    @Override // mu.a
    public Boolean c(Object obj) {
        return c.a.g(this, obj);
    }

    @Override // mu.b
    public List d(Comparable comparable, Comparable comparable2) {
        return c.a.d(this, comparable, comparable2);
    }

    @Override // uu.c
    public Object e(Object obj) {
        return c.a.e(this, obj);
    }

    @Override // mu.b
    public List g(Comparable comparable, Comparable comparable2) {
        return c.a.c(this, comparable, comparable2);
    }

    public boolean h(Object obj, Function2 function2) {
        return c.a.a(this, obj, function2);
    }

    @Override // lu.b
    /* renamed from: i */
    public Boolean f(Object obj, Object obj2) {
        return Boolean.valueOf(h(obj, a.f50013d));
    }
}
