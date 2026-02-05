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
        final /* synthetic */ h f17921a;

        a(h hVar) {
            this.f17921a = hVar;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            return this.f17921a.fromJson(mVar);
        }

        @Override // com.squareup.moshi.h
        boolean isLenient() {
            return this.f17921a.isLenient();
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            boolean L = tVar.L();
            tVar.S0(true);
            try {
                this.f17921a.toJson(tVar, obj);
            } finally {
                tVar.S0(L);
            }
        }

        public String toString() {
            return this.f17921a + ".serializeNulls()";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ h f17923a;

        b(h hVar) {
            this.f17923a = hVar;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            boolean h10 = mVar.h();
            mVar.w(true);
            try {
                return this.f17923a.fromJson(mVar);
            } finally {
                mVar.w(h10);
            }
        }

        @Override // com.squareup.moshi.h
        boolean isLenient() {
            return true;
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            boolean N = tVar.N();
            tVar.w(true);
            try {
                this.f17923a.toJson(tVar, obj);
            } finally {
                tVar.w(N);
            }
        }

        public String toString() {
            return this.f17923a + ".lenient()";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ h f17925a;

        c(h hVar) {
            this.f17925a = hVar;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            boolean a10 = mVar.a();
            mVar.D0(true);
            try {
                return this.f17925a.fromJson(mVar);
            } finally {
                mVar.D0(a10);
            }
        }

        @Override // com.squareup.moshi.h
        boolean isLenient() {
            return this.f17925a.isLenient();
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            this.f17925a.toJson(tVar, obj);
        }

        public String toString() {
            return this.f17925a + ".failOnUnknown()";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ h f17927a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ String f17928b;

        d(h hVar, String str) {
            this.f17927a = hVar;
            this.f17928b = str;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            return this.f17927a.fromJson(mVar);
        }

        @Override // com.squareup.moshi.h
        boolean isLenient() {
            return this.f17927a.isLenient();
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            String F = tVar.F();
            tVar.N0(this.f17928b);
            try {
                this.f17927a.toJson(tVar, obj);
            } finally {
                tVar.N0(F);
            }
        }

        public String toString() {
            return this.f17927a + ".indent(\"" + this.f17928b + "\")";
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
        return fromJson(m.y(bufferedSource));
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
        if (this instanceof ym.a) {
            return this;
        }
        return new ym.a(this);
    }

    public final h nullSafe() {
        if (this instanceof ym.b) {
            return this;
        }
        return new ym.b(this);
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
        m y10 = m.y(new Buffer().o0(str));
        Object fromJson = fromJson(y10);
        if (isLenient() || y10.E() == m.c.END_DOCUMENT) {
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
