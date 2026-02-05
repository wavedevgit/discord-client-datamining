package defpackage;

import defpackage.d;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.text.StringsKt;
import or.p;
/* renamed from: c  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements qu.b {

    /* renamed from: a  reason: collision with root package name */
    public static final c f7288a = new c();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f7289d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7290e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Object obj, int i10) {
            super(0);
            this.f7289d = obj;
            this.f7290e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return StringsKt.p1((String) this.f7289d, this.f7290e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$b */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f7293d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7294e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Object obj, int i10) {
            super(0);
            this.f7293d = obj;
            this.f7294e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return StringsKt.q1((String) this.f7293d, this.f7294e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0133c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f7302d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7303e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0133c(Object obj, int i10) {
            super(0);
            this.f7302d = obj;
            this.f7303e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return CollectionsKt.f0((Iterable) this.f7302d, this.f7303e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: c$d */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f7304d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7305e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(Object obj, int i10) {
            super(0);
            this.f7304d = obj;
            this.f7305e = i10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return CollectionsKt.g0((List) this.f7304d, this.f7305e);
        }
    }

    private c() {
    }

    private final Object a(Object obj, int i10, defpackage.d dVar) {
        if (obj instanceof String) {
            return b(dVar, new a(obj, i10), new b(obj, i10));
        }
        if (obj instanceof List) {
            return b(dVar, new C0133c(obj, i10), new d(obj, i10));
        }
        return null;
    }

    private final Object b(defpackage.d dVar, Function0 function0, Function0 function02) {
        if (Intrinsics.areEqual(dVar, d.a.f20100a)) {
            return function0.invoke();
        }
        if (Intrinsics.areEqual(dVar, d.b.f20104a)) {
            return function02.invoke();
        }
        if (Intrinsics.areEqual(dVar, d.c.f20105a)) {
            return null;
        }
        throw new p();
    }

    private final defpackage.d c(String str) {
        if (Intrinsics.areEqual(str, "first")) {
            return d.a.f20100a;
        }
        if (Intrinsics.areEqual(str, "last")) {
            return d.b.f20104a;
        }
        return d.c.f20105a;
    }

    @Override // qu.b
    public Object f(Object obj, Object obj2) {
        String str;
        Integer num;
        List c10 = vv.a.c(obj);
        Object firstOrNull = CollectionsKt.firstOrNull(c10);
        Object b10 = vv.c.b(c10);
        c cVar = f7288a;
        Object c11 = vv.c.c(c10);
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
