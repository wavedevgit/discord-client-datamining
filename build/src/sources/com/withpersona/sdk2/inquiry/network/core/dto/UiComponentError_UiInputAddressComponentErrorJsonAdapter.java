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
import ym.c;
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
        mVar.s();
        String str = null;
        String str2 = null;
        Map map = null;
        while (mVar.hasNext()) {
            int W = mVar.W(this.options);
            if (W == -1) {
                mVar.E0();
                mVar.P();
            } else if (W == 0) {
                str = (String) this.stringAdapter.fromJson(mVar);
                if (str == null) {
                    throw c.x(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, mVar);
                }
            } else if (W == 1) {
                str2 = (String) this.stringAdapter.fromJson(mVar);
                if (str2 == null) {
                    throw c.x("type", "type", mVar);
                }
            } else if (W == 2 && (map = (Map) this.mapOfStringStringAdapter.fromJson(mVar)) == null) {
                throw c.x("message", "message", mVar);
            }
        }
        mVar.z();
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
            tVar.k();
            tVar.W(StackTraceHelper.NAME_KEY);
            this.stringAdapter.toJson(tVar, uiInputAddressComponentError.getName());
            tVar.W("type");
            this.stringAdapter.toJson(tVar, uiInputAddressComponentError.getType());
            tVar.W("message");
            this.mapOfStringStringAdapter.toJson(tVar, uiInputAddressComponentError.getMessage());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
