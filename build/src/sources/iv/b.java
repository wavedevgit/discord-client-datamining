package iv;

import iv.h;
import java.lang.annotation.Annotation;
import java.lang.reflect.Type;
import kotlin.Unit;
import okhttp3.RequestBody;
import okhttp3.ResponseBody;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b extends h.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a implements h {

        /* renamed from: a  reason: collision with root package name */
        static final a f31328a = new a();

        a() {
        }

        @Override // iv.h
        /* renamed from: b */
        public ResponseBody a(ResponseBody responseBody) {
            try {
                return e0.a(responseBody);
            } finally {
                responseBody.close();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d implements h {

        /* renamed from: a  reason: collision with root package name */
        static final d f31331a = new d();

        d() {
        }

        @Override // iv.h
        /* renamed from: b */
        public String a(Object obj) {
            return obj.toString();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e implements h {

        /* renamed from: a  reason: collision with root package name */
        static final e f31332a = new e();

        e() {
        }

        @Override // iv.h
        /* renamed from: b */
        public Unit a(ResponseBody responseBody) {
            responseBody.close();
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f implements h {

        /* renamed from: a  reason: collision with root package name */
        static final f f31333a = new f();

        f() {
        }

        @Override // iv.h
        /* renamed from: b */
        public Void a(ResponseBody responseBody) {
            responseBody.close();
            return null;
        }
    }

    @Override // iv.h.a
    public h c(Type type, Annotation[] annotationArr, Annotation[] annotationArr2, a0 a0Var) {
        if (RequestBody.class.isAssignableFrom(e0.h(type))) {
            return C0408b.f31329a;
        }
        return null;
    }

    @Override // iv.h.a
    public h d(Type type, Annotation[] annotationArr, a0 a0Var) {
        if (type == ResponseBody.class) {
            if (e0.l(annotationArr, kv.w.class)) {
                return c.f31330a;
            }
            return a.f31328a;
        } else if (type == Void.class) {
            return f.f31333a;
        } else {
            if (e0.m(type)) {
                return e.f31332a;
            }
            return null;
        }
    }

    /* renamed from: iv.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0408b implements h {

        /* renamed from: a  reason: collision with root package name */
        static final C0408b f31329a = new C0408b();

        C0408b() {
        }

        @Override // iv.h
        /* renamed from: b */
        public RequestBody a(RequestBody requestBody) {
            return requestBody;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class c implements h {

        /* renamed from: a  reason: collision with root package name */
        static final c f31330a = new c();

        c() {
        }

        @Override // iv.h
        /* renamed from: b */
        public ResponseBody a(ResponseBody responseBody) {
            return responseBody;
        }
    }
}
