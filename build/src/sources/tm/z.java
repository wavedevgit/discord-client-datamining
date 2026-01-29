package tm;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import tm.k;
import tm.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract /* synthetic */ class z {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f49762d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(String str) {
            super(0);
            this.f49762d = str;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return this.f49762d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends r {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Function1 f49763c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function0 f49764d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k f49765e;

        b(Function1 function1, Function0 function0, k kVar) {
            this.f49763c = function1;
            this.f49764d = function0;
            this.f49765e = kVar;
        }

        @Override // tm.r
        public void a(r.c cVar) {
            Intrinsics.checkNotNullParameter(cVar, "<this>");
            this.f49763c.invoke(cVar);
        }

        public String toString() {
            return "action(" + ((String) this.f49764d.invoke()) + ")-" + this.f49765e;
        }
    }

    public static final k.a a(tm.a baseContext, k workflow) {
        k.a aVar;
        Intrinsics.checkNotNullParameter(baseContext, "baseContext");
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        if (baseContext instanceof k.a) {
            aVar = (k.a) baseContext;
        } else {
            aVar = null;
        }
        if (aVar == null) {
            return new k.a(workflow, baseContext);
        }
        return aVar;
    }

    public static final r b(k kVar, String name, Function1 update) {
        Intrinsics.checkNotNullParameter(kVar, "<this>");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(update, "update");
        return w.e(kVar, new a(name), update);
    }

    public static final r c(k kVar, Function0 name, Function1 update) {
        Intrinsics.checkNotNullParameter(kVar, "<this>");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(update, "update");
        return new b(update, name, kVar);
    }

    public static /* synthetic */ r d(k kVar, String str, Function1 function1, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = "";
        }
        return w.d(kVar, str, function1);
    }
}
