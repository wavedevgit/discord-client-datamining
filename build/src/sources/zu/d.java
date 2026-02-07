package zu;

import java.util.List;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
import zu.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements su.b, b {

    /* renamed from: a  reason: collision with root package name */
    public static final d f56687a = new d();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f56688d = new a();

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

    private d() {
    }

    @Override // bv.a
    public Object a(Object obj) {
        return b.a.f(this, obj);
    }

    @Override // tu.c
    public boolean b(List list, Function2 function2) {
        return b.a.b(this, list, function2);
    }

    @Override // tu.a
    public Boolean c(Object obj) {
        return b.a.g(this, obj);
    }

    @Override // tu.b
    public List d(Comparable comparable, Comparable comparable2) {
        return b.a.d(this, comparable, comparable2);
    }

    @Override // bv.c
    public Object e(Object obj) {
        return b.a.e(this, obj);
    }

    @Override // tu.b
    public List g(Comparable comparable, Comparable comparable2) {
        return b.a.c(this, comparable, comparable2);
    }

    public boolean h(Object obj, Function2 function2) {
        return b.a.a(this, obj, function2);
    }

    @Override // su.b
    /* renamed from: i */
    public Boolean f(Object obj, Object obj2) {
        return Boolean.valueOf(!h(obj, a.f56688d));
    }
}
