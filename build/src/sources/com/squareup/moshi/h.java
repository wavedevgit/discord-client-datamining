package com.squareup.moshi;

import com.squareup.moshi.m;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.Set;
import okio.Buffer;
import okio.BufferedSink;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ h f18790a;

        a(h hVar) {
            this.f18790a = hVar;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            return this.f18790a.fromJson(mVar);
        }

        @Override // com.squareup.moshi.h
        boolean isLenient() {
            return this.f18790a.isLenient();
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            boolean z10 = tVar.z();
            tVar.H0(true);
            try {
                this.f18790a.toJson(tVar, obj);
            } finally {
                tVar.H0(z10);
            }
        }

        public String toString() {
            return this.f18790a + ".serializeNulls()";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ h f18792a;

        b(h hVar) {
            this.f18792a = hVar;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            boolean h10 = mVar.h();
            mVar.A(true);
            try {
                return this.f18792a.fromJson(mVar);
            } finally {
                mVar.A(h10);
            }
        }

        @Override // com.squareup.moshi.h
        boolean isLenient() {
            return true;
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            boolean C = tVar.C();
            tVar.A(true);
            try {
                this.f18792a.toJson(tVar, obj);
            } finally {
                tVar.A(C);
            }
        }

        public String toString() {
            return this.f18792a + ".lenient()";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ h f18794a;

        c(h hVar) {
            this.f18794a = hVar;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            boolean a10 = mVar.a();
            mVar.Z(true);
            try {
                return this.f18794a.fromJson(mVar);
            } finally {
                mVar.Z(a10);
            }
        }

        @Override // com.squareup.moshi.h
        boolean isLenient() {
            return this.f18794a.isLenient();
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            this.f18794a.toJson(tVar, obj);
        }

        public String toString() {
            return this.f18794a + ".failOnUnknown()";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ h f18796a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ String f18797b;

        d(h hVar, String str) {
            this.f18796a = hVar;
            this.f18797b = str;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            return this.f18796a.fromJson(mVar);
        }

        @Override // com.squareup.moshi.h
        boolean isLenient() {
            return this.f18796a.isLenient();
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            String y10 = tVar.y();
            tVar.G0(this.f18797b);
            try {
                this.f18796a.toJson(tVar, obj);
            } finally {
                tVar.G0(y10);
            }
        }

        public String toString() {
            return this.f18796a + ".indent(\"" + this.f18797b + "\")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface e {
        h create(Type type, Set set, w wVar);
    }

    public final h failOnUnknown() {
        return new c(this);
    }

    public abstract Object fromJson(m mVar);

    public final Object fromJson(BufferedSource bufferedSource) {
        return fromJson(m.p(bufferedSource));
    }

    public final Object fromJsonValue(Object obj) {
        try {
            return fromJson(new q(obj));
        } catch (IOException e10) {
            throw new AssertionError(e10);
        }
    }

    public h indent(String str) {
        if (str != null) {
            return new d(this, str);
        }
        throw new NullPointerException("indent == null");
    }

    boolean isLenient() {
        return false;
    }

    public final h lenient() {
        return new b(this);
    }

    public final h nonNull() {
        if (this instanceof dn.a) {
            return this;
        }
        return new dn.a(this);
    }

    public final h nullSafe() {
        if (this instanceof dn.b) {
            return this;
        }
        return new dn.b(this);
    }

    public final h serializeNulls() {
        return new a(this);
    }

    public abstract void toJson(t tVar, Object obj);

    public final void toJson(BufferedSink bufferedSink, Object obj) {
        toJson(t.Z(bufferedSink), obj);
    }

    public final Object toJsonValue(Object obj) {
        s sVar = new s();
        try {
            toJson(sVar, obj);
            return sVar.b1();
        } catch (IOException e10) {
            throw new AssertionError(e10);
        }
    }

    public final Object fromJson(String str) {
        m p10 = m.p(new Buffer().q0(str));
        Object fromJson = fromJson(p10);
        if (isLenient() || p10.s() == m.c.END_DOCUMENT) {
            return fromJson;
        }
        throw new j("JSON document was not fully consumed.");
    }

    public final String toJson(Object obj) {
        Buffer buffer = new Buffer();
        try {
            toJson(buffer, obj);
            return buffer.X1();
        } catch (IOException e10) {
            throw new AssertionError(e10);
        }
    }
}
