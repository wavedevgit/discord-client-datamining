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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface e {

    /* renamed from: e$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Function1 f21199a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f21200b = o0.n(v.a("var", c.f49130a), v.a("missing_some", b.f49129a), v.a("missing", ru.a.f49128a), v.a(">", yu.a.f55338a), v.a(">=", yu.b.f55340a), v.a("<", yu.c.f55342a), v.a("<=", d.f55344a), v.a("min", xu.e.f53581a), v.a("max", xu.d.f53579a), v.a("+", xu.a.f53576a), v.a("-", h.f53586a), v.a("*", g.f53584a), v.a("/", xu.b.f53578a), v.a("%", f.f53583a), v.a("==", uu.a.f51038a), v.a("!=", uu.d.f51042a), v.a("===", vu.b.f51768a), v.a("!==", vu.a.f51766a), v.a("!", tu.d.f50299a), v.a("!!", tu.b.f50297a), v.a("and", tu.a.f50296a), v.a("or", tu.e.f50300a), v.a("if", tu.c.f50298a), v.a("cat", av.a.f6164a), v.a("substr", av.c.f6165a), v.a("merge", pu.e.f46631a), v.a("in", ou.d.f44797a));

        /* renamed from: c  reason: collision with root package name */
        private final Map f21201c = o0.n(v.a("map", pu.d.f46630a), v.a(ViewProps.FILTER, pu.c.f46629a), v.a("reduce", pu.g.f46632a), v.a("all", qu.a.f48198a), v.a(ViewProps.NONE, qu.b.f48199a), v.a("some", qu.e.f48204a));

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
