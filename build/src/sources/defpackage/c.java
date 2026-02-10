package defpackage;

import as.p;
import defpackage.d;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.text.StringsKt;
/* renamed from: c  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements cv.b {

    /* renamed from: a  reason: collision with root package name */
    public static final c f7914a = new c();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f7915d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7916e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Object obj, int i10) {
            super(0);
            this.f7915d = obj;
            this.f7916e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return StringsKt.p1((String) this.f7915d, this.f7916e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$b */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f7919d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7920e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Object obj, int i10) {
            super(0);
            this.f7919d = obj;
            this.f7920e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return StringsKt.q1((String) this.f7919d, this.f7920e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0127c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f7928d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7929e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0127c(Object obj, int i10) {
            super(0);
            this.f7928d = obj;
            this.f7929e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return CollectionsKt.f0((Iterable) this.f7928d, this.f7929e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$d */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f7930d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7931e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(Object obj, int i10) {
            super(0);
            this.f7930d = obj;
            this.f7931e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return CollectionsKt.g0((List) this.f7930d, this.f7931e);
        }
    }

    private c() {
    }

    private final Object a(Object obj, int i10, defpackage.d dVar) {
        if (obj instanceof String) {
            return b(dVar, new a(obj, i10), new b(obj, i10));
        }
        if (obj instanceof List) {
            return b(dVar, new C0127c(obj, i10), new d(obj, i10));
        }
        return null;
    }

    private final Object b(defpackage.d dVar, Function0 function0, Function0 function02) {
        if (Intrinsics.areEqual(dVar, d.a.f21235a)) {
            return function0.invoke();
        }
        if (Intrinsics.areEqual(dVar, d.b.f21239a)) {
            return function02.invoke();
        }
        if (Intrinsics.areEqual(dVar, d.c.f21240a)) {
            return null;
        }
        throw new p();
    }

    private final defpackage.d c(String str) {
        if (Intrinsics.areEqual(str, "first")) {
            return d.a.f21235a;
        }
        if (Intrinsics.areEqual(str, "last")) {
            return d.b.f21239a;
        }
        return d.c.f21240a;
    }

    @Override // cv.b
    public Object f(Object obj, Object obj2) {
        String str;
        Integer num;
        List c10 = mw.a.c(obj);
        Object firstOrNull = CollectionsKt.firstOrNull(c10);
        Object b10 = mw.c.b(c10);
        c cVar = f7914a;
        Object c11 = mw.c.c(c10);
        if (c11 instanceof String) {
            str = (String) c11;
        } else {
            str = null;
        }
        defpackage.d c12 = cVar.c(str);
        if (b10 instanceof Integer) {
            num = (Integer) b10;
        } else {
            num = null;
        }
        if (num == null) {
            return null;
        }
        return cVar.a(firstOrNull, num.intValue(), c12);
    }
}
