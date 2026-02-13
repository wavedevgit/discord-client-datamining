package fw;

import fw.h;
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
        static final a f24417a = new a();

        a() {
        }

        @Override // fw.h
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
        static final d f24420a = new d();

        d() {
        }

        @Override // fw.h
        /* renamed from: b */
        public String a(Object obj) {
            return obj.toString();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e implements h {

        /* renamed from: a  reason: collision with root package name */
        static final e f24421a = new e();

        e() {
        }

        @Override // fw.h
        /* renamed from: b */
        public Unit a(ResponseBody responseBody) {
            responseBody.close();
            return Unit.f32556a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f implements h {

        /* renamed from: a  reason: collision with root package name */
        static final f f24422a = new f();

        f() {
        }

        @Override // fw.h
        /* renamed from: b */
        public Void a(ResponseBody responseBody) {
            responseBody.close();
            return null;
        }
    }

    @Override // fw.h.a
    public h c(Type type, Annotation[] annotationArr, Annotation[] annotationArr2, a0 a0Var) {
        if (RequestBody.class.isAssignableFrom(e0.h(type))) {
            return C0332b.f24418a;
        }
        return null;
    }

    @Override // fw.h.a
    public h d(Type type, Annotation[] annotationArr, a0 a0Var) {
        if (type == ResponseBody.class) {
            if (e0.l(annotationArr, hw.w.class)) {
                return c.f24419a;
            }
            return a.f24417a;
        } else if (type == Void.class) {
            return f.f24422a;
        } else {
            if (e0.m(type)) {
                return e.f24421a;
            }
            return null;
        }
    }

    /* renamed from: fw.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0332b implements h {

        /* renamed from: a  reason: collision with root package name */
        static final C0332b f24418a = new C0332b();

        C0332b() {
        }

        @Override // fw.h
        /* renamed from: b */
        public RequestBody a(RequestBody requestBody) {
            return requestBody;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class c implements h {

        /* renamed from: a  reason: collision with root package name */
        static final c f24419a = new c();

        c() {
        }

        @Override // fw.h
        /* renamed from: b */
        public ResponseBody a(ResponseBody responseBody) {
            return responseBody;
        }
    }
}
