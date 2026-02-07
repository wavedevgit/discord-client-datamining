package vv;

import java.lang.annotation.Annotation;
import java.lang.reflect.Type;
import kotlin.Unit;
import okhttp3.RequestBody;
import okhttp3.ResponseBody;
import vv.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b extends h.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a implements h {

        /* renamed from: a  reason: collision with root package name */
        static final a f53064a = new a();

        a() {
        }

        @Override // vv.h
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
        static final d f53067a = new d();

        d() {
        }

        @Override // vv.h
        /* renamed from: b */
        public String a(Object obj) {
            return obj.toString();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e implements h {

        /* renamed from: a  reason: collision with root package name */
        static final e f53068a = new e();

        e() {
        }

        @Override // vv.h
        /* renamed from: b */
        public Unit a(ResponseBody responseBody) {
            responseBody.close();
            return Unit.f32056a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f implements h {

        /* renamed from: a  reason: collision with root package name */
        static final f f53069a = new f();

        f() {
        }

        @Override // vv.h
        /* renamed from: b */
        public Void a(ResponseBody responseBody) {
            responseBody.close();
            return null;
        }
    }

    @Override // vv.h.a
    public h c(Type type, Annotation[] annotationArr, Annotation[] annotationArr2, a0 a0Var) {
        if (RequestBody.class.isAssignableFrom(e0.h(type))) {
            return C0705b.f53065a;
        }
        return null;
    }

    @Override // vv.h.a
    public h d(Type type, Annotation[] annotationArr, a0 a0Var) {
        if (type == ResponseBody.class) {
            if (e0.l(annotationArr, xv.w.class)) {
                return c.f53066a;
            }
            return a.f53064a;
        } else if (type == Void.class) {
            return f.f53069a;
        } else {
            if (e0.m(type)) {
                return e.f53068a;
            }
            return null;
        }
    }

    /* renamed from: vv.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0705b implements h {

        /* renamed from: a  reason: collision with root package name */
        static final C0705b f53065a = new C0705b();

        C0705b() {
        }

        @Override // vv.h
        /* renamed from: b */
        public RequestBody a(RequestBody requestBody) {
            return requestBody;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class c implements h {

        /* renamed from: a  reason: collision with root package name */
        static final c f53066a = new c();

        c() {
        }

        @Override // vv.h
        /* renamed from: b */
        public ResponseBody a(ResponseBody responseBody) {
            return responseBody;
        }
    }
}
