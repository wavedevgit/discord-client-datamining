package com.withpersona.sdk2.inquiry.network.core.dto;

import com.facebook.react.devsupport.StackTraceHelper;
import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError;
import java.lang.reflect.Constructor;
import java.util.Map;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
import sm.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class UiComponentError_UiGovernmentIdNfcScanComponentErrorJsonAdapter extends h {
    private volatile Constructor<UiComponentError.UiGovernmentIdNfcScanComponentError> constructorRef;
    @NotNull
    private final h mapOfStringStringAdapter;
    @NotNull
    private final m.b options = m.b.a(StackTraceHelper.NAME_KEY, "type", "message");
    @NotNull
    private final h stringAdapter;

    public UiComponentError_UiGovernmentIdNfcScanComponentErrorJsonAdapter(@NotNull w wVar) {
        this.stringAdapter = wVar.f(String.class, x0.d(), StackTraceHelper.NAME_KEY);
        this.mapOfStringStringAdapter = wVar.f(a0.j(Map.class, String.class, String.class), x0.d(), "message");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(74);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("UiComponentError.UiGovernmentIdNfcScanComponentError");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public UiComponentError.UiGovernmentIdNfcScanComponentError fromJson(@NotNull m mVar) {
        mVar.r();
        String str = null;
        Map map = null;
        String str2 = null;
        int i10 = -1;
        while (mVar.hasNext()) {
            int A0 = mVar.A0(this.options);
            if (A0 == -1) {
                mVar.E0();
                mVar.P();
            } else if (A0 == 0) {
                str = (String) this.stringAdapter.fromJson(mVar);
                if (str == null) {
                    throw c.x(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, mVar);
                }
            } else if (A0 == 1) {
                str2 = (String) this.stringAdapter.fromJson(mVar);
                if (str2 == null) {
                    throw c.x("type", "type", mVar);
                }
                i10 = -3;
            } else if (A0 == 2 && (map = (Map) this.mapOfStringStringAdapter.fromJson(mVar)) == null) {
                throw c.x("message", "message", mVar);
            }
        }
        mVar.y();
        if (i10 == -3) {
            if (str != null) {
                if (map != null) {
                    return new UiComponentError.UiGovernmentIdNfcScanComponentError(str, str2, map);
                }
                throw c.o("message", "message", mVar);
            }
            throw c.o(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, mVar);
        }
        Constructor<UiComponentError.UiGovernmentIdNfcScanComponentError> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = UiComponentError.UiGovernmentIdNfcScanComponentError.class.getDeclaredConstructor(String.class, String.class, Map.class, Integer.TYPE, c.f49081c);
            this.constructorRef = constructor;
        }
        if (str != null) {
            if (map != null) {
                return constructor.newInstance(str, str2, map, Integer.valueOf(i10), null);
            }
            throw c.o("message", "message", mVar);
        }
        throw c.o(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, UiComponentError.UiGovernmentIdNfcScanComponentError uiGovernmentIdNfcScanComponentError) {
        if (uiGovernmentIdNfcScanComponentError != null) {
            tVar.l();
            tVar.A0(StackTraceHelper.NAME_KEY);
            this.stringAdapter.toJson(tVar, uiGovernmentIdNfcScanComponentError.getName());
            tVar.A0("type");
            this.stringAdapter.toJson(tVar, uiGovernmentIdNfcScanComponentError.getType());
            tVar.A0("message");
            this.mapOfStringStringAdapter.toJson(tVar, uiGovernmentIdNfcScanComponentError.getMessage());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
