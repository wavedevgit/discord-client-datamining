package nv;

import java.util.List;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
import nv.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements cv.b, e {

    /* renamed from: a  reason: collision with root package name */
    public static final d f38384a = new d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f38385d = new a();

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

    @Override // dv.c
    public boolean b(List list, Function2 function2) {
        return e.a.b(this, list, function2);
    }

    @Override // dv.a
    public Boolean c(Object obj) {
        return e.a.f(this, obj);
    }

    @Override // dv.b
    public List d(Comparable comparable, Comparable comparable2) {
        return e.a.e(this, comparable, comparable2);
    }

    public boolean e(List list, Function2 function2) {
        return e.a.c(this, list, function2);
    }

    @Override // cv.b
    public Object f(Object obj, Object obj2) {
        return Boolean.valueOf(e(mw.a.c(obj), a.f38385d));
    }

    @Override // dv.b
    public List g(Comparable comparable, Comparable comparable2) {
        return e.a.d(this, comparable, comparable2);
    }
}
