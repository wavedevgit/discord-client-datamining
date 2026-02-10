package defpackage;

import as.v;
import com.facebook.react.uimanager.ViewProps;
import gv.b;
import gv.c;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import mv.f;
import mv.g;
import mv.h;
import nv.d;
/* renamed from: e  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface e {

    /* renamed from: e$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Function1 f22166a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f22167b = o0.n(v.a("var", c.f26042a), v.a("missing_some", b.f26041a), v.a("missing", gv.a.f26040a), v.a(">", nv.a.f38378a), v.a(">=", nv.b.f38380a), v.a("<", nv.c.f38382a), v.a("<=", d.f38384a), v.a("min", mv.e.f36670a), v.a("max", mv.d.f36668a), v.a("+", mv.a.f36665a), v.a("-", h.f36675a), v.a("*", g.f36673a), v.a("/", mv.b.f36667a), v.a("%", f.f36672a), v.a("==", jv.a.f31373a), v.a("!=", jv.d.f31377a), v.a("===", kv.b.f35351a), v.a("!==", kv.a.f35349a), v.a("!", iv.d.f30442a), v.a("!!", iv.b.f30440a), v.a("and", iv.a.f30439a), v.a("or", iv.e.f30443a), v.a("if", iv.c.f30441a), v.a("cat", pv.a.f43226a), v.a("substr", pv.c.f43227a), v.a("merge", ev.e.f23273a), v.a("in", dv.d.f22164a));

        /* renamed from: c  reason: collision with root package name */
        private final Map f22168c = o0.n(v.a("map", ev.d.f23272a), v.a(ViewProps.FILTER, ev.c.f23271a), v.a("reduce", ev.g.f23274a), v.a("all", fv.a.f24390a), v.a(ViewProps.NONE, fv.b.f24391a), v.a("some", fv.e.f24396a));

        private final boolean f(String str) {
            if (!this.f22168c.containsKey(str) && !this.f22167b.containsKey(str)) {
                return true;
            }
            return false;
        }

        public final a a(String operationName, cv.a operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f22168c.put(operationName, operation);
            }
            return this;
        }

        public final a b(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                a((String) entry.getKey(), (cv.a) entry.getValue());
            }
            return this;
        }

        public final a c(String operationName, cv.b operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f22167b.put(operationName, operation);
            }
            return this;
        }

        public final a d(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                c((String) entry.getKey(), (cv.b) entry.getValue());
            }
            return this;
        }

        public final e e() {
            cv.b bVar = (cv.b) this.f22167b.put("log", new dv.e(this.f22166a));
            return new defpackage.a(new nr.a(new nr.b(this.f22167b, this.f22168c)));
        }
    }

    g a(Map map, Object obj);
}
