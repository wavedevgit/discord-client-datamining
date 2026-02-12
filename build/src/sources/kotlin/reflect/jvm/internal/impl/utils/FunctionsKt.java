package kotlin.reflect.jvm.internal.impl.utils;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class FunctionsKt {

    /* renamed from: a  reason: collision with root package name */
    private static final Function1 f34801a = kotlin.reflect.jvm.internal.impl.utils.a.f34821d;

    /* renamed from: b  reason: collision with root package name */
    private static final Function1 f34802b = b.f34823d;

    /* renamed from: c  reason: collision with root package name */
    private static final Function1 f34803c = a.f34807d;

    /* renamed from: d  reason: collision with root package name */
    private static final Function1 f34804d = c.f34824d;

    /* renamed from: e  reason: collision with root package name */
    private static final Function2 f34805e = d.f34825d;

    /* renamed from: f  reason: collision with root package name */
    private static final Function3 f34806f = e.f34826d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f34807d = new a();

        a() {
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Void invoke(Object obj) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean a(Object obj) {
        return true;
    }

    @NotNull
    public static final <T> Function1<T, Boolean> alwaysTrue() {
        return f34802b;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b(Object obj) {
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(Object obj, Object obj2) {
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(Object obj, Object obj2, Object obj3) {
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object e(Object obj) {
        return obj;
    }

    @NotNull
    public static final Function3 getDO_NOTHING_3() {
        return f34806f;
    }
}
