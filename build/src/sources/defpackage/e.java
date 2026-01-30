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
        private final Map f22477b = o0.n(v.a("var", c.f44795a), v.a("missing_some", b.f44794a), v.a("missing", ou.a.f44793a), v.a(">", vu.a.f51973a), v.a(">=", vu.b.f51975a), v.a("<", vu.c.f51977a), v.a("<=", d.f51979a), v.a("min", uu.e.f50586a), v.a("max", uu.d.f50584a), v.a("+", uu.a.f50581a), v.a("-", h.f50591a), v.a("*", g.f50589a), v.a("/", uu.b.f50583a), v.a("%", f.f50588a), v.a("==", ru.a.f48661a), v.a("!=", ru.d.f48665a), v.a("===", su.b.f49174a), v.a("!==", su.a.f49172a), v.a("!", qu.d.f47693a), v.a("!!", qu.b.f47691a), v.a("and", qu.a.f47690a), v.a("or", qu.e.f47694a), v.a("if", qu.c.f47692a), v.a("cat", xu.a.f53852a), v.a("substr", xu.c.f53853a), v.a("merge", mu.e.f39596a), v.a("in", lu.d.f37742a));

        /* renamed from: c  reason: collision with root package name */
        private final Map f22478c = o0.n(v.a("map", mu.d.f39595a), v.a(ViewProps.FILTER, mu.c.f39594a), v.a("reduce", mu.g.f39597a), v.a("all", nu.a.f42217a), v.a(ViewProps.NONE, nu.b.f42218a), v.a("some", nu.e.f42223a));

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
