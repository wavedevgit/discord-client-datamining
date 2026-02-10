package nv;

import dv.c;
import java.util.List;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements cv.b, dv.c {

    /* renamed from: a  reason: collision with root package name */
    public static final a f38378a = new a();

    /* renamed from: nv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0541a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0541a f38379d = new C0541a();

        C0541a() {
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

    @Override // dv.c
    public boolean b(List list, Function2 function2) {
        return c.a.b(this, list, function2);
    }

    @Override // dv.a
    public Boolean c(Object obj) {
        return c.a.f(this, obj);
    }

    @Override // dv.b
    public List d(Comparable comparable, Comparable comparable2) {
        return c.a.e(this, comparable, comparable2);
    }

    @Override // cv.b
    public Object f(Object obj, Object obj2) {
        return Boolean.valueOf(b(mw.a.c(obj), C0541a.f38379d));
    }

    @Override // dv.b
    public List g(Comparable comparable, Comparable comparable2) {
        return c.a.d(this, comparable, comparable2);
    }
}
