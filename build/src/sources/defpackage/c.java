package defpackage;

import defpackage.d;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.text.StringsKt;
import lr.p;
/* renamed from: c  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements nu.b {

    /* renamed from: a  reason: collision with root package name */
    public static final c f6870a = new c();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f6871d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f6872e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Object obj, int i10) {
            super(0);
            this.f6871d = obj;
            this.f6872e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return StringsKt.p1((String) this.f6871d, this.f6872e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$b */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f6875d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f6876e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Object obj, int i10) {
            super(0);
            this.f6875d = obj;
            this.f6876e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return StringsKt.q1((String) this.f6875d, this.f6876e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0114c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f6884d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f6885e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0114c(Object obj, int i10) {
            super(0);
            this.f6884d = obj;
            this.f6885e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return CollectionsKt.f0((Iterable) this.f6884d, this.f6885e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$d */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f6886d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f6887e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(Object obj, int i10) {
            super(0);
            this.f6886d = obj;
            this.f6887e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return CollectionsKt.g0((List) this.f6886d, this.f6887e);
        }
    }

    private c() {
    }

    private final Object a(Object obj, int i10, defpackage.d dVar) {
        if (obj instanceof String) {
            return b(dVar, new a(obj, i10), new b(obj, i10));
        }
        if (obj instanceof List) {
            return b(dVar, new C0114c(obj, i10), new d(obj, i10));
        }
        return null;
    }

    private final Object b(defpackage.d dVar, Function0 function0, Function0 function02) {
        if (Intrinsics.areEqual(dVar, d.a.f19884a)) {
            return function0.invoke();
        }
        if (Intrinsics.areEqual(dVar, d.b.f19888a)) {
            return function02.invoke();
        }
        if (Intrinsics.areEqual(dVar, d.c.f19889a)) {
            return null;
        }
        throw new p();
    }

    private final defpackage.d c(String str) {
        if (Intrinsics.areEqual(str, "first")) {
            return d.a.f19884a;
        }
        if (Intrinsics.areEqual(str, "last")) {
            return d.b.f19888a;
        }
        return d.c.f19889a;
    }

    @Override // nu.b
    public Object f(Object obj, Object obj2) {
        String str;
        Integer num;
        List c10 = sv.a.c(obj);
        Object firstOrNull = CollectionsKt.firstOrNull(c10);
        Object b10 = sv.c.b(c10);
        c cVar = f6870a;
        Object c11 = sv.c.c(c10);
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
