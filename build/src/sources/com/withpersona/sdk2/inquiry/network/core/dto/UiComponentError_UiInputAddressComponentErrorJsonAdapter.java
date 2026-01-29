package com.withpersona.sdk2.inquiry.network.core.dto;

import com.facebook.react.devsupport.StackTraceHelper;
import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError;
import java.util.Map;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
import sm.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class UiComponentError_UiInputAddressComponentErrorJsonAdapter extends h {
    @NotNull
    private final h mapOfStringStringAdapter;
    @NotNull
    private final m.b options = m.b.a(StackTraceHelper.NAME_KEY, "type", "message");
    @NotNull
    private final h stringAdapter;

    public UiComponentError_UiInputAddressComponentErrorJsonAdapter(@NotNull w wVar) {
        this.stringAdapter = wVar.f(String.class, x0.d(), StackTraceHelper.NAME_KEY);
        this.mapOfStringStringAdapter = wVar.f(a0.j(Map.class, String.class, String.class), x0.d(), "message");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(67);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("UiComponentError.UiInputAddressComponentError");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public UiComponentError.UiInputAddressComponentError fromJson(@NotNull m mVar) {
        mVar.r();
        String str = null;
        String str2 = null;
        Map map = null;
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
            } else if (A0 == 2 && (map = (Map) this.mapOfStringStringAdapter.fromJson(mVar)) == null) {
                throw c.x("message", "message", mVar);
            }
        }
        mVar.y();
        if (str != null) {
            if (str2 != null) {
                if (map != null) {
                    return new UiComponentError.UiInputAddressComponentError(str, str2, map);
                }
                throw c.o("message", "message", mVar);
            }
            throw c.o("type", "type", mVar);
        }
        throw c.o(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, UiComponentError.UiInputAddressComponentError uiInputAddressComponentError) {
        if (uiInputAddressComponentError != null) {
            tVar.l();
            tVar.A0(StackTraceHelper.NAME_KEY);
            this.stringAdapter.toJson(tVar, uiInputAddressComponentError.getName());
            tVar.A0("type");
            this.stringAdapter.toJson(tVar, uiInputAddressComponentError.getType());
            tVar.A0("message");
            this.mapOfStringStringAdapter.toJson(tVar, uiInputAddressComponentError.getMessage());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
