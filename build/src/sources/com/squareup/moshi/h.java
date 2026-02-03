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
        final /* synthetic */ h f17515a;

        a(h hVar) {
            this.f17515a = hVar;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            return this.f17515a.fromJson(mVar);
        }

        @Override // com.squareup.moshi.h
        boolean isLenient() {
            return this.f17515a.isLenient();
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            boolean L = tVar.L();
            tVar.R0(true);
            try {
                this.f17515a.toJson(tVar, obj);
            } finally {
                tVar.R0(L);
            }
        }

        public String toString() {
            return this.f17515a + ".serializeNulls()";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ h f17517a;

        b(h hVar) {
            this.f17517a = hVar;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            boolean h10 = mVar.h();
            mVar.v(true);
            try {
                return this.f17517a.fromJson(mVar);
            } finally {
                mVar.v(h10);
            }
        }

        @Override // com.squareup.moshi.h
        boolean isLenient() {
            return true;
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            boolean N = tVar.N();
            tVar.v(true);
            try {
                this.f17517a.toJson(tVar, obj);
            } finally {
                tVar.v(N);
            }
        }

        public String toString() {
            return this.f17517a + ".lenient()";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ h f17519a;

        c(h hVar) {
            this.f17519a = hVar;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            boolean a10 = mVar.a();
            mVar.D0(true);
            try {
                return this.f17519a.fromJson(mVar);
            } finally {
                mVar.D0(a10);
            }
        }

        @Override // com.squareup.moshi.h
        boolean isLenient() {
            return this.f17519a.isLenient();
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            this.f17519a.toJson(tVar, obj);
        }

        public String toString() {
            return this.f17519a + ".failOnUnknown()";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ h f17521a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ String f17522b;

        d(h hVar, String str) {
            this.f17521a = hVar;
            this.f17522b = str;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            return this.f17521a.fromJson(mVar);
        }

        @Override // com.squareup.moshi.h
        boolean isLenient() {
            return this.f17521a.isLenient();
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            String F = tVar.F();
            tVar.M0(this.f17522b);
            try {
                this.f17521a.toJson(tVar, obj);
            } finally {
                tVar.M0(F);
            }
        }

        public String toString() {
            return this.f17521a + ".indent(\"" + this.f17522b + "\")";
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
        return fromJson(m.B(bufferedSource));
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
        if (this instanceof vm.a) {
            return this;
        }
        return new vm.a(this);
    }

    public final h nullSafe() {
        if (this instanceof vm.b) {
            return this;
        }
        return new vm.b(this);
    }

    public final h serializeNulls() {
        return new a(this);
    }

    public abstract void toJson(t tVar, Object obj);

    public final void toJson(BufferedSink bufferedSink, Object obj) {
        toJson(t.D0(bufferedSink), obj);
    }

    public final Object toJsonValue(Object obj) {
        s sVar = new s();
        try {
            toJson(sVar, obj);
            return sVar.B1();
        } catch (IOException e10) {
            throw new AssertionError(e10);
        }
    }

    public final Object fromJson(String str) {
        m B = m.B(new Buffer().n0(str));
        Object fromJson = fromJson(B);
        if (isLenient() || B.E() == m.c.END_DOCUMENT) {
            return fromJson;
        }
        throw new j("JSON document was not fully consumed.");
    }

    public final String toJson(Object obj) {
        Buffer buffer = new Buffer();
        try {
            toJson(buffer, obj);
            return buffer.T1();
        } catch (IOException e10) {
            throw new AssertionError(e10);
        }
    }
}
