package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.ErrorResponse;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import java.lang.reflect.Constructor;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InternalErrorInfo_NetworkErrorInfoJsonAdapter extends h {
    @NotNull
    private final h booleanAdapter;
    private volatile Constructor<InternalErrorInfo.NetworkErrorInfo> constructorRef;
    @NotNull
    private final h intAdapter;
    @NotNull
    private final h nullableErrorAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options = m.b.a("code", "message", "isRecoverable", "responseError");

    public InternalErrorInfo_NetworkErrorInfoJsonAdapter(@NotNull w wVar) {
        this.intAdapter = wVar.f(Integer.TYPE, x0.d(), "code");
        this.nullableStringAdapter = wVar.f(String.class, x0.d(), "message");
        this.booleanAdapter = wVar.f(Boolean.TYPE, x0.d(), "isRecoverable");
        this.nullableErrorAdapter = wVar.f(ErrorResponse.Error.class, x0.d(), "responseError");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(56);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InternalErrorInfo.NetworkErrorInfo");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InternalErrorInfo.NetworkErrorInfo fromJson(@NotNull m mVar) {
        mVar.s();
        Integer num = null;
        String str = null;
        Boolean bool = null;
        ErrorResponse.Error error = null;
        int i10 = -1;
        while (mVar.hasNext()) {
            int W = mVar.W(this.options);
            if (W == -1) {
                mVar.E0();
                mVar.P();
            } else if (W == 0) {
                num = (Integer) this.intAdapter.fromJson(mVar);
                if (num == null) {
                    throw ym.c.x("code", "code", mVar);
                }
            } else if (W == 1) {
                str = (String) this.nullableStringAdapter.fromJson(mVar);
            } else if (W == 2) {
                bool = (Boolean) this.booleanAdapter.fromJson(mVar);
                if (bool == null) {
                    throw ym.c.x("isRecoverable", "isRecoverable", mVar);
                }
            } else if (W == 3) {
                error = (ErrorResponse.Error) this.nullableErrorAdapter.fromJson(mVar);
                i10 = -9;
            }
        }
        mVar.z();
        if (i10 == -9) {
            if (num != null) {
                int intValue = num.intValue();
                if (bool != null) {
                    return new InternalErrorInfo.NetworkErrorInfo(intValue, str, bool.booleanValue(), error);
                }
                throw ym.c.o("isRecoverable", "isRecoverable", mVar);
            }
            throw ym.c.o("code", "code", mVar);
        }
        Constructor<InternalErrorInfo.NetworkErrorInfo> constructor = this.constructorRef;
        if (constructor == null) {
            Class cls = ym.c.f54853c;
            Class cls2 = Integer.TYPE;
            constructor = InternalErrorInfo.NetworkErrorInfo.class.getDeclaredConstructor(cls2, String.class, Boolean.TYPE, ErrorResponse.Error.class, cls2, cls);
            this.constructorRef = constructor;
        }
        if (num != null) {
            if (bool != null) {
                return constructor.newInstance(num, str, bool, error, Integer.valueOf(i10), null);
            }
            throw ym.c.o("isRecoverable", "isRecoverable", mVar);
        }
        throw ym.c.o("code", "code", mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, InternalErrorInfo.NetworkErrorInfo networkErrorInfo) {
        if (networkErrorInfo != null) {
            tVar.k();
            tVar.W("code");
            this.intAdapter.toJson(tVar, Integer.valueOf(networkErrorInfo.getCode()));
            tVar.W("message");
            this.nullableStringAdapter.toJson(tVar, networkErrorInfo.getMessage());
            tVar.W("isRecoverable");
            this.booleanAdapter.toJson(tVar, Boolean.valueOf(networkErrorInfo.isRecoverable()));
            tVar.W("responseError");
            this.nullableErrorAdapter.toJson(tVar, networkErrorInfo.getResponseError());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
