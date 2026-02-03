package vu;

import java.util.List;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
import vu.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements nu.b, c {

    /* renamed from: a  reason: collision with root package name */
    public static final a f51766a = new a();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: vu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0686a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0686a f51767d = new C0686a();

        C0686a() {
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

    private a() {
    }

    @Override // vu.c, wu.a
    public Object a(Object obj) {
        return c.a.f(this, obj);
    }

    @Override // ou.c
    public boolean b(List list, Function2 function2) {
        return c.a.b(this, list, function2);
    }

    @Override // ou.a
    public Boolean c(Object obj) {
        return c.a.g(this, obj);
    }

    @Override // ou.b
    public List d(Comparable comparable, Comparable comparable2) {
        return c.a.d(this, comparable, comparable2);
    }

    @Override // wu.c
    public Object e(Object obj) {
        return c.a.e(this, obj);
    }

    @Override // ou.b
    public List g(Comparable comparable, Comparable comparable2) {
        return c.a.c(this, comparable, comparable2);
    }

    public boolean h(Object obj, Function2 function2) {
        return c.a.a(this, obj, function2);
    }

    @Override // nu.b
    /* renamed from: i */
    public Boolean f(Object obj, Object obj2) {
        return Boolean.valueOf(!h(obj, C0686a.f51767d));
    }
}
