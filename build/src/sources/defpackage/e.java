package defpackage;

import com.facebook.react.uimanager.ViewProps;
import java.util.Map;
import jr.v;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import pu.b;
import pu.c;
import vu.f;
import vu.g;
import vu.h;
import wu.d;
/* renamed from: e  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface e {

    /* renamed from: e$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Function1 f22508a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f22509b = o0.n(v.a("var", c.f46494a), v.a("missing_some", b.f46493a), v.a("missing", pu.a.f46492a), v.a(">", wu.a.f53049a), v.a(">=", wu.b.f53051a), v.a("<", wu.c.f53053a), v.a("<=", d.f53055a), v.a("min", vu.e.f51542a), v.a("max", vu.d.f51540a), v.a("+", vu.a.f51537a), v.a("-", h.f51547a), v.a("*", g.f51545a), v.a("/", vu.b.f51539a), v.a("%", f.f51544a), v.a("==", su.a.f49442a), v.a("!=", su.d.f49446a), v.a("===", tu.b.f50012a), v.a("!==", tu.a.f50010a), v.a("!", ru.d.f48719a), v.a("!!", ru.b.f48717a), v.a("and", ru.a.f48716a), v.a("or", ru.e.f48720a), v.a("if", ru.c.f48718a), v.a("cat", yu.a.f55206a), v.a("substr", yu.c.f55207a), v.a("merge", nu.e.f42339a), v.a("in", mu.d.f39442a));

        /* renamed from: c  reason: collision with root package name */
        private final Map f22510c = o0.n(v.a("map", nu.d.f42338a), v.a(ViewProps.FILTER, nu.c.f42337a), v.a("reduce", nu.g.f42340a), v.a("all", ou.a.f44862a), v.a(ViewProps.NONE, ou.b.f44863a), v.a("some", ou.e.f44868a));

        private final boolean f(String str) {
            if (!this.f22510c.containsKey(str) && !this.f22509b.containsKey(str)) {
                return true;
            }
            return false;
        }

        public final a a(String operationName, lu.a operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f22510c.put(operationName, operation);
            }
            return this;
        }

        public final a b(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                a((String) entry.getKey(), (lu.a) entry.getValue());
            }
            return this;
        }

        public final a c(String operationName, lu.b operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f22509b.put(operationName, operation);
            }
            return this;
        }

        public final a d(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                c((String) entry.getKey(), (lu.b) entry.getValue());
            }
            return this;
        }

        public final e e() {
            lu.b bVar = (lu.b) this.f22509b.put("log", new mu.e(this.f22508a));
            return new defpackage.a(new wq.a(new wq.b(this.f22509b, this.f22510c)));
        }
    }

    g a(Map map, Object obj);
}
