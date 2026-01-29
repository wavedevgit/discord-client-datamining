package defpackage;

import com.facebook.react.uimanager.ViewProps;
import ir.v;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import ou.b;
import ou.c;
import uu.f;
import uu.g;
import uu.h;
import vu.d;
/* renamed from: e  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface e {

    /* renamed from: e$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Function1 f22476a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f22477b = o0.n(v.a("var", c.f44779a), v.a("missing_some", b.f44778a), v.a("missing", ou.a.f44777a), v.a(">", vu.a.f51957a), v.a(">=", vu.b.f51959a), v.a("<", vu.c.f51961a), v.a("<=", d.f51963a), v.a("min", uu.e.f50570a), v.a("max", uu.d.f50568a), v.a("+", uu.a.f50565a), v.a("-", h.f50575a), v.a("*", g.f50573a), v.a("/", uu.b.f50567a), v.a("%", f.f50572a), v.a("==", ru.a.f48645a), v.a("!=", ru.d.f48649a), v.a("===", su.b.f49158a), v.a("!==", su.a.f49156a), v.a("!", qu.d.f47677a), v.a("!!", qu.b.f47675a), v.a("and", qu.a.f47674a), v.a("or", qu.e.f47678a), v.a("if", qu.c.f47676a), v.a("cat", xu.a.f53836a), v.a("substr", xu.c.f53837a), v.a("merge", mu.e.f39580a), v.a("in", lu.d.f37726a));

        /* renamed from: c  reason: collision with root package name */
        private final Map f22478c = o0.n(v.a("map", mu.d.f39579a), v.a(ViewProps.FILTER, mu.c.f39578a), v.a("reduce", mu.g.f39581a), v.a("all", nu.a.f42201a), v.a(ViewProps.NONE, nu.b.f42202a), v.a("some", nu.e.f42207a));

        private final boolean f(String str) {
            if (!this.f22478c.containsKey(str) && !this.f22477b.containsKey(str)) {
                return true;
            }
            return false;
        }

        public final a a(String operationName, ku.a operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f22478c.put(operationName, operation);
            }
            return this;
        }

        public final a b(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                a((String) entry.getKey(), (ku.a) entry.getValue());
            }
            return this;
        }

        public final a c(String operationName, ku.b operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f22477b.put(operationName, operation);
            }
            return this;
        }

        public final a d(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                c((String) entry.getKey(), (ku.b) entry.getValue());
            }
            return this;
        }

        public final e e() {
            ku.b bVar = (ku.b) this.f22477b.put("log", new lu.e(this.f22476a));
            return new defpackage.a(new vq.a(new vq.b(this.f22477b, this.f22478c)));
        }
    }

    g a(Map map, Object obj);
}
