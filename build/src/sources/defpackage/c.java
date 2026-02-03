package defpackage;

import defpackage.d;
import java.util.List;
import jr.p;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.text.StringsKt;
/* renamed from: c  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements lu.b {

    /* renamed from: a  reason: collision with root package name */
    public static final c f7883a = new c();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f7884d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7885e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Object obj, int i10) {
            super(0);
            this.f7884d = obj;
            this.f7885e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return StringsKt.p1((String) this.f7884d, this.f7885e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$b */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f7888d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7889e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Object obj, int i10) {
            super(0);
            this.f7888d = obj;
            this.f7889e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return StringsKt.q1((String) this.f7888d, this.f7889e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0135c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f7897d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7898e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0135c(Object obj, int i10) {
            super(0);
            this.f7897d = obj;
            this.f7898e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return CollectionsKt.f0((Iterable) this.f7897d, this.f7898e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$d */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f7899d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7900e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(Object obj, int i10) {
            super(0);
            this.f7899d = obj;
            this.f7900e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return CollectionsKt.g0((List) this.f7899d, this.f7900e);
        }
    }

    private c() {
    }

    private final Object a(Object obj, int i10, defpackage.d dVar) {
        if (obj instanceof String) {
            return b(dVar, new a(obj, i10), new b(obj, i10));
        }
        if (obj instanceof List) {
            return b(dVar, new C0135c(obj, i10), new d(obj, i10));
        }
        return null;
    }

    private final Object b(defpackage.d dVar, Function0 function0, Function0 function02) {
        if (Intrinsics.areEqual(dVar, d.a.f21025a)) {
            return function0.invoke();
        }
        if (Intrinsics.areEqual(dVar, d.b.f21029a)) {
            return function02.invoke();
        }
        if (Intrinsics.areEqual(dVar, d.c.f21030a)) {
            return null;
        }
        throw new p();
    }

    private final defpackage.d c(String str) {
        if (Intrinsics.areEqual(str, "first")) {
            return d.a.f21025a;
        }
        if (Intrinsics.areEqual(str, "last")) {
            return d.b.f21029a;
        }
        return d.c.f21030a;
    }

    @Override // lu.b
    public Object f(Object obj, Object obj2) {
        String str;
        Integer num;
        List c10 = qv.a.c(obj);
        Object firstOrNull = CollectionsKt.firstOrNull(c10);
        Object b10 = qv.c.b(c10);
        c cVar = f7883a;
        Object c11 = qv.c.c(c10);
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
