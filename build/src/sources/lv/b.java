package lv;

import java.lang.annotation.Annotation;
import java.lang.reflect.Type;
import kotlin.Unit;
import lv.h;
import okhttp3.RequestBody;
import okhttp3.ResponseBody;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b extends h.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a implements h {

        /* renamed from: a  reason: collision with root package name */
        static final a f37363a = new a();

        a() {
        }

        @Override // lv.h
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
        static final d f37366a = new d();

        d() {
        }

        @Override // lv.h
        /* renamed from: b */
        public String a(Object obj) {
            return obj.toString();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e implements h {

        /* renamed from: a  reason: collision with root package name */
        static final e f37367a = new e();

        e() {
        }

        @Override // lv.h
        /* renamed from: b */
        public Unit a(ResponseBody responseBody) {
            responseBody.close();
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f implements h {

        /* renamed from: a  reason: collision with root package name */
        static final f f37368a = new f();

        f() {
        }

        @Override // lv.h
        /* renamed from: b */
        public Void a(ResponseBody responseBody) {
            responseBody.close();
            return null;
        }
    }

    @Override // lv.h.a
    public h c(Type type, Annotation[] annotationArr, Annotation[] annotationArr2, a0 a0Var) {
        if (RequestBody.class.isAssignableFrom(e0.h(type))) {
            return C0474b.f37364a;
        }
        return null;
    }

    @Override // lv.h.a
    public h d(Type type, Annotation[] annotationArr, a0 a0Var) {
        if (type == ResponseBody.class) {
            if (e0.l(annotationArr, nv.w.class)) {
                return c.f37365a;
            }
            return a.f37363a;
        } else if (type == Void.class) {
            return f.f37368a;
        } else {
            if (e0.m(type)) {
                return e.f37367a;
            }
            return null;
        }
    }

    /* renamed from: lv.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0474b implements h {

        /* renamed from: a  reason: collision with root package name */
        static final C0474b f37364a = new C0474b();

        C0474b() {
        }

        @Override // lv.h
        /* renamed from: b */
        public RequestBody a(RequestBody requestBody) {
            return requestBody;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class c implements h {

        /* renamed from: a  reason: collision with root package name */
        static final c f37365a = new c();

        c() {
        }

        @Override // lv.h
        /* renamed from: b */
        public ResponseBody a(ResponseBody responseBody) {
            return responseBody;
        }
    }
}
