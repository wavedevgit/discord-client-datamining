package vv;

import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Optional;
import okhttp3.ResponseBody;
import vv.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t extends h.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a implements h {

        /* renamed from: a  reason: collision with root package name */
        private final h f53144a;

        a(h hVar) {
            this.f53144a = hVar;
        }

        @Override // vv.h
        /* renamed from: b */
        public Optional a(ResponseBody responseBody) {
            return Optional.ofNullable(this.f53144a.a(responseBody));
        }
    }

    @Override // vv.h.a
    public h d(Type type, Annotation[] annotationArr, a0 a0Var) {
        if (h.a.b(type) != Optional.class) {
            return null;
        }
        return new a(a0Var.i(h.a.a(0, (ParameterizedType) type), annotationArr));
    }
}
