package wm;

import kotlin.Pair;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import wm.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract /* synthetic */ class b0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f52521d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(String str) {
            super(0);
            this.f52521d = str;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return this.f52521d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends r {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Function1 f52522c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function0 f52523d;

        b(Function1 function1, Function0 function0) {
            this.f52522c = function1;
            this.f52523d = function0;
        }

        @Override // wm.r
        public void a(r.c cVar) {
            Intrinsics.checkNotNullParameter(cVar, "<this>");
            this.f52522c.invoke(cVar);
        }

        public String toString() {
            return "WorkflowAction(" + ((String) this.f52523d.invoke()) + ")@" + hashCode();
        }
    }

    public static final r a(String name, Function1 apply) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(apply, "apply");
        return w.c(new a(name), apply);
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
        return w.b(str, function1);
    }

    public static final Pair d(r rVar, Object obj, Object obj2) {
        Intrinsics.checkNotNullParameter(rVar, "<this>");
        r.c cVar = new r.c(rVar, obj, obj2);
        rVar.a(cVar);
        return new Pair(cVar.c(), cVar.a());
    }
}
