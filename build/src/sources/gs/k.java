package gs;

import gs.h;
import gs.i;
import java.lang.reflect.Method;
import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Method f26593a;

    /* renamed from: b  reason: collision with root package name */
    private final List f26594b;

    /* renamed from: c  reason: collision with root package name */
    private final Type f26595c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends k implements g {

        /* renamed from: d  reason: collision with root package name */
        private final Object f26596d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Method unboxMethod, Object obj) {
            super(unboxMethod, CollectionsKt.l(), null);
            Intrinsics.checkNotNullParameter(unboxMethod, "unboxMethod");
            this.f26596d = obj;
        }

        @Override // gs.h
        public Object call(Object[] args) {
            Intrinsics.checkNotNullParameter(args, "args");
            e(args);
            return d(this.f26596d, args);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends k {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Method unboxMethod) {
            super(unboxMethod, CollectionsKt.e(unboxMethod.getDeclaringClass()), null);
            Intrinsics.checkNotNullParameter(unboxMethod, "unboxMethod");
        }

        @Override // gs.h
        public Object call(Object[] args) {
            Object[] r10;
            Intrinsics.checkNotNullParameter(args, "args");
            e(args);
            Object obj = args[0];
            i.d dVar = i.f26578e;
            if (args.length <= 1) {
                r10 = new Object[0];
            } else {
                r10 = kotlin.collections.i.r(args, 1, args.length);
            }
            return d(obj, r10);
        }
    }

    public /* synthetic */ k(Method method, List list, DefaultConstructorMarker defaultConstructorMarker) {
        this(method, list);
    }

    @Override // gs.h
    public final List a() {
        return this.f26594b;
    }

    @Override // gs.h
    public boolean c() {
        return h.a.b(this);
    }

    protected final Object d(Object obj, Object[] args) {
        Intrinsics.checkNotNullParameter(args, "args");
        return this.f26593a.invoke(obj, Arrays.copyOf(args, args.length));
    }

    public void e(Object[] objArr) {
        h.a.a(this, objArr);
    }

    @Override // gs.h
    /* renamed from: f */
    public final Method b() {
        return null;
    }

    @Override // gs.h
    public final Type getReturnType() {
        return this.f26595c;
    }

    private k(Method method, List list) {
        this.f26593a = method;
        this.f26594b = list;
        Class<?> returnType = method.getReturnType();
        Intrinsics.checkNotNullExpressionValue(returnType, "getReturnType(...)");
        this.f26595c = returnType;
    }
}
