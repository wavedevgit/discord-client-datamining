package defpackage;

import com.facebook.react.uimanager.ViewProps;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import lr.v;
import ru.b;
import ru.c;
import xu.f;
import xu.g;
import xu.h;
import yu.d;
/* renamed from: e  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface e {

    /* renamed from: e$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Function1 f21199a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f21200b = o0.n(v.a("var", c.f49127a), v.a("missing_some", b.f49126a), v.a("missing", ru.a.f49125a), v.a(">", yu.a.f55335a), v.a(">=", yu.b.f55337a), v.a("<", yu.c.f55339a), v.a("<=", d.f55341a), v.a("min", xu.e.f53578a), v.a("max", xu.d.f53576a), v.a("+", xu.a.f53573a), v.a("-", h.f53583a), v.a("*", g.f53581a), v.a("/", xu.b.f53575a), v.a("%", f.f53580a), v.a("==", uu.a.f51035a), v.a("!=", uu.d.f51039a), v.a("===", vu.b.f51765a), v.a("!==", vu.a.f51763a), v.a("!", tu.d.f50296a), v.a("!!", tu.b.f50294a), v.a("and", tu.a.f50293a), v.a("or", tu.e.f50297a), v.a("if", tu.c.f50295a), v.a("cat", av.a.f6164a), v.a("substr", av.c.f6165a), v.a("merge", pu.e.f46631a), v.a("in", ou.d.f44797a));

        /* renamed from: c  reason: collision with root package name */
        private final Map f21201c = o0.n(v.a("map", pu.d.f46630a), v.a(ViewProps.FILTER, pu.c.f46629a), v.a("reduce", pu.g.f46632a), v.a("all", qu.a.f48195a), v.a(ViewProps.NONE, qu.b.f48196a), v.a("some", qu.e.f48201a));

        private final boolean f(String str) {
            if (!this.f21201c.containsKey(str) && !this.f21200b.containsKey(str)) {
                return true;
            }
            return false;
        }

        public final a a(String operationName, nu.a operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f21201c.put(operationName, operation);
            }
            return this;
        }

        public final a b(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                a((String) entry.getKey(), (nu.a) entry.getValue());
            }
            return this;
        }

        public final a c(String operationName, nu.b operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f21200b.put(operationName, operation);
            }
            return this;
        }

        public final a d(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                c((String) entry.getKey(), (nu.b) entry.getValue());
            }
            return this;
        }

        public final e e() {
            nu.b bVar = (nu.b) this.f21200b.put("log", new ou.e(this.f21199a));
            return new defpackage.a(new yq.a(new yq.b(this.f21200b, this.f21201c)));
        }
    }

    g a(Map map, Object obj);
}
