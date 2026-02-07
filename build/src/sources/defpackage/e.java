package defpackage;

import com.facebook.react.uimanager.ViewProps;
import cv.f;
import cv.g;
import cv.h;
import dv.d;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import qr.v;
import wu.b;
import wu.c;
/* renamed from: e  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface e {

    /* renamed from: e$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Function1 f21204a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f21205b = o0.n(v.a("var", c.f54177a), v.a("missing_some", b.f54176a), v.a("missing", wu.a.f54175a), v.a(">", dv.a.f21196a), v.a(">=", dv.b.f21198a), v.a("<", dv.c.f21200a), v.a("<=", d.f21202a), v.a("min", cv.e.f20049a), v.a("max", cv.d.f20047a), v.a("+", cv.a.f20044a), v.a("-", h.f20054a), v.a("*", g.f20052a), v.a("/", cv.b.f20046a), v.a("%", f.f20051a), v.a("==", zu.a.f56683a), v.a("!=", zu.d.f56687a), v.a("===", av.b.f6303a), v.a("!==", av.a.f6301a), v.a("!", yu.d.f55680a), v.a("!!", yu.b.f55678a), v.a("and", yu.a.f55677a), v.a("or", yu.e.f55681a), v.a("if", yu.c.f55679a), v.a("cat", fv.a.f23776a), v.a("substr", fv.c.f23777a), v.a("merge", uu.e.f52141a), v.a("in", tu.d.f51157a));

        /* renamed from: c  reason: collision with root package name */
        private final Map f21206c = o0.n(v.a("map", uu.d.f52140a), v.a(ViewProps.FILTER, uu.c.f52139a), v.a("reduce", uu.g.f52142a), v.a("all", vu.a.f53038a), v.a(ViewProps.NONE, vu.b.f53039a), v.a("some", vu.e.f53044a));

        private final boolean f(String str) {
            if (!this.f21206c.containsKey(str) && !this.f21205b.containsKey(str)) {
                return true;
            }
            return false;
        }

        public final a a(String operationName, su.a operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f21206c.put(operationName, operation);
            }
            return this;
        }

        public final a b(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                a((String) entry.getKey(), (su.a) entry.getValue());
            }
            return this;
        }

        public final a c(String operationName, su.b operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f21205b.put(operationName, operation);
            }
            return this;
        }

        public final a d(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                c((String) entry.getKey(), (su.b) entry.getValue());
            }
            return this;
        }

        public final e e() {
            su.b bVar = (su.b) this.f21205b.put("log", new tu.e(this.f21204a));
            return new defpackage.a(new dr.a(new dr.b(this.f21205b, this.f21206c)));
        }
    }

    g a(Map map, Object obj);
}
