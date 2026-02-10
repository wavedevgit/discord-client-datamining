package wv;

import java.lang.annotation.Annotation;
import java.lang.reflect.Type;
import kotlin.Unit;
import okhttp3.RequestBody;
import okhttp3.ResponseBody;
import wv.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b extends h.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a implements h {

        /* renamed from: a  reason: collision with root package name */
        static final a f54091a = new a();

        a() {
        }

        @Override // wv.h
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
        static final d f54094a = new d();

        d() {
        }

        @Override // wv.h
        /* renamed from: b */
        public String a(Object obj) {
            return obj.toString();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e implements h {

        /* renamed from: a  reason: collision with root package name */
        static final e f54095a = new e();

        e() {
        }

        @Override // wv.h
        /* renamed from: b */
        public Unit a(ResponseBody responseBody) {
            responseBody.close();
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f implements h {

        /* renamed from: a  reason: collision with root package name */
        static final f f54096a = new f();

        f() {
        }

        @Override // wv.h
        /* renamed from: b */
        public Void a(ResponseBody responseBody) {
            responseBody.close();
            return null;
        }
    }

    @Override // wv.h.a
    public h c(Type type, Annotation[] annotationArr, Annotation[] annotationArr2, a0 a0Var) {
        if (RequestBody.class.isAssignableFrom(e0.h(type))) {
            return C0758b.f54092a;
        }
        return null;
    }

    @Override // wv.h.a
    public h d(Type type, Annotation[] annotationArr, a0 a0Var) {
        if (type == ResponseBody.class) {
            if (e0.l(annotationArr, yv.w.class)) {
                return c.f54093a;
            }
            return a.f54091a;
        } else if (type == Void.class) {
            return f.f54096a;
        } else {
            if (e0.m(type)) {
                return e.f54095a;
            }
            return null;
        }
    }

    /* renamed from: wv.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0758b implements h {

        /* renamed from: a  reason: collision with root package name */
        static final C0758b f54092a = new C0758b();

        C0758b() {
        }

        @Override // wv.h
        /* renamed from: b */
        public RequestBody a(RequestBody requestBody) {
            return requestBody;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class c implements h {

        /* renamed from: a  reason: collision with root package name */
        static final c f54093a = new c();

        c() {
        }

        @Override // wv.h
        /* renamed from: b */
        public ResponseBody a(ResponseBody responseBody) {
            return responseBody;
        }
    }
}
