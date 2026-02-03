package at;

import dt.k2;
import dt.s1;
import dt.t1;
import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlin.reflect.KType;
import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class v {

    /* renamed from: a  reason: collision with root package name */
    private static final k2 f6136a = dt.m.a(new Function1() { // from class: at.p
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            KSerializer k10;
            k10 = v.k((KClass) obj);
            return k10;
        }
    });

    /* renamed from: b  reason: collision with root package name */
    private static final k2 f6137b = dt.m.a(new Function1() { // from class: at.q
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            KSerializer l10;
            l10 = v.l((KClass) obj);
            return l10;
        }
    });

    /* renamed from: c  reason: collision with root package name */
    private static final s1 f6138c = dt.m.b(new Function2() { // from class: at.r
        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Object obj, Object obj2) {
            KSerializer g10;
            g10 = v.g((KClass) obj, (List) obj2);
            return g10;
        }
    });

    /* renamed from: d  reason: collision with root package name */
    private static final s1 f6139d = dt.m.b(new Function2() { // from class: at.s
        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Object obj, Object obj2) {
            KSerializer i10;
            i10 = v.i((KClass) obj, (List) obj2);
            return i10;
        }
    });

    /* JADX INFO: Access modifiers changed from: private */
    public static final KSerializer g(KClass clazz, final List types) {
        Intrinsics.checkNotNullParameter(clazz, "clazz");
        Intrinsics.checkNotNullParameter(types, "types");
        List h10 = w.h(gt.c.a(), types, true);
        Intrinsics.checkNotNull(h10);
        return w.a(clazz, h10, new Function0() { // from class: at.t
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                kotlin.reflect.d h11;
                h11 = v.h(types);
                return h11;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final kotlin.reflect.d h(List list) {
        return ((KType) list.get(0)).getClassifier();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KSerializer i(KClass clazz, final List types) {
        KSerializer u10;
        Intrinsics.checkNotNullParameter(clazz, "clazz");
        Intrinsics.checkNotNullParameter(types, "types");
        List h10 = w.h(gt.c.a(), types, true);
        Intrinsics.checkNotNull(h10);
        KSerializer a10 = w.a(clazz, h10, new Function0() { // from class: at.u
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                kotlin.reflect.d j10;
                j10 = v.j(types);
                return j10;
            }
        });
        if (a10 != null && (u10 = bt.a.u(a10)) != null) {
            return u10;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final kotlin.reflect.d j(List list) {
        return ((KType) list.get(0)).getClassifier();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KSerializer k(KClass it) {
        Intrinsics.checkNotNullParameter(it, "it");
        KSerializer g10 = w.g(it);
        if (g10 == null) {
            if (t1.l(it)) {
                return new g(it);
            }
            return null;
        }
        return g10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KSerializer l(KClass it) {
        KSerializer u10;
        Intrinsics.checkNotNullParameter(it, "it");
        KSerializer g10 = w.g(it);
        if (g10 == null) {
            if (t1.l(it)) {
                g10 = new g(it);
            } else {
                g10 = null;
            }
        }
        if (g10 == null || (u10 = bt.a.u(g10)) == null) {
            return null;
        }
        return u10;
    }

    public static final KSerializer m(KClass clazz, boolean z10) {
        Intrinsics.checkNotNullParameter(clazz, "clazz");
        if (!z10) {
            KSerializer a10 = f6136a.a(clazz);
            if (a10 != null) {
                return a10;
            }
            return null;
        }
        return f6137b.a(clazz);
    }

    public static final Object n(KClass clazz, List types, boolean z10) {
        Intrinsics.checkNotNullParameter(clazz, "clazz");
        Intrinsics.checkNotNullParameter(types, "types");
        if (!z10) {
            return f6138c.a(clazz, types);
        }
        return f6139d.a(clazz, types);
    }
}
