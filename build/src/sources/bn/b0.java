package bn;

import bn.r;
import kotlin.Pair;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract /* synthetic */ class b0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f6876d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(String str) {
            super(0);
            this.f6876d = str;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return this.f6876d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends r {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Function1 f6877c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function0 f6878d;

        b(Function1 function1, Function0 function0) {
            this.f6877c = function1;
            this.f6878d = function0;
        }

        @Override // bn.r
        public void a(r.c cVar) {
            Intrinsics.checkNotNullParameter(cVar, "<this>");
            this.f6877c.invoke(cVar);
        }

        public String toString() {
            return "WorkflowAction(" + ((String) this.f6878d.invoke()) + ")@" + hashCode();
        }
    }

    public static final r a(String name, Function1 apply) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(apply, "apply");
        return w.e(new a(name), apply);
    }

    public static final r b(Function0 name, Function1 apply) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(apply, "apply");
        return new b(apply, name);
    }

    public static /* synthetic */ r c(String str, Function1 function1, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = "";
        }
        return w.d(str, function1);
    }

    public static final Pair d(r rVar, Object obj, Object obj2) {
        Intrinsics.checkNotNullParameter(rVar, "<this>");
        r.c cVar = new r.c(rVar, obj, obj2);
        rVar.a(cVar);
        return new Pair(cVar.c(), cVar.a());
    }
}
