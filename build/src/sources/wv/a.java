package wv;

import com.squareup.moshi.l;
import com.squareup.moshi.w;
import java.lang.annotation.Annotation;
import java.lang.reflect.Type;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.Set;
import vv.a0;
import vv.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends h.a {

    /* renamed from: a  reason: collision with root package name */
    private final w f54178a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f54179b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f54180c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f54181d;

    private a(w wVar, boolean z10, boolean z11, boolean z12) {
        this.f54178a = wVar;
        this.f54179b = z10;
        this.f54180c = z11;
        this.f54181d = z12;
    }

    public static a f(w wVar) {
        if (wVar != null) {
            return new a(wVar, false, false, false);
        }
        throw new NullPointerException("moshi == null");
    }

    private static Set g(Annotation[] annotationArr) {
        LinkedHashSet linkedHashSet = null;
        for (Annotation annotation : annotationArr) {
            if (annotation.annotationType().isAnnotationPresent(l.class)) {
                if (linkedHashSet == null) {
                    linkedHashSet = new LinkedHashSet();
                }
                linkedHashSet.add(annotation);
            }
        }
        if (linkedHashSet != null) {
            return Collections.unmodifiableSet(linkedHashSet);
        }
        return Collections.EMPTY_SET;
    }

    @Override // vv.h.a
    public h c(Type type, Annotation[] annotationArr, Annotation[] annotationArr2, a0 a0Var) {
        com.squareup.moshi.h e10 = this.f54178a.e(type, g(annotationArr));
        if (this.f54179b) {
            e10 = e10.lenient();
        }
        if (this.f54180c) {
            e10 = e10.failOnUnknown();
        }
        if (this.f54181d) {
            e10 = e10.serializeNulls();
        }
        return new b(e10);
    }

    @Override // vv.h.a
    public h d(Type type, Annotation[] annotationArr, a0 a0Var) {
        com.squareup.moshi.h e10 = this.f54178a.e(type, g(annotationArr));
        if (this.f54179b) {
            e10 = e10.lenient();
        }
        if (this.f54180c) {
            e10 = e10.failOnUnknown();
        }
        if (this.f54181d) {
            e10 = e10.serializeNulls();
        }
        return new c(e10);
    }
}
