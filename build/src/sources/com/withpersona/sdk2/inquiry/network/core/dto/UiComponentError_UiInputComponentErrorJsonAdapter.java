package com.withpersona.sdk2.inquiry.network.core.dto;

import com.facebook.react.devsupport.StackTraceHelper;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
import ym.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class UiComponentError_UiInputComponentErrorJsonAdapter extends h {
    @NotNull
    private final m.b options = m.b.a(StackTraceHelper.NAME_KEY, "type", "message");
    @NotNull
    private final h stringAdapter;

    public UiComponentError_UiInputComponentErrorJsonAdapter(@NotNull w wVar) {
        this.stringAdapter = wVar.f(String.class, x0.d(), StackTraceHelper.NAME_KEY);
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(60);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("UiComponentError.UiInputComponentError");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public UiComponentError.UiInputComponentError fromJson(@NotNull m mVar) {
        mVar.s();
        String str = null;
        String str2 = null;
        String str3 = null;
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
            } else if (W == 2 && (str3 = (String) this.stringAdapter.fromJson(mVar)) == null) {
                throw c.x("message", "message", mVar);
            }
        }
        mVar.z();
        if (str != null) {
            if (str2 != null) {
                if (str3 != null) {
                    return new UiComponentError.UiInputComponentError(str, str2, str3);
                }
                throw c.o("message", "message", mVar);
            }
            throw c.o("type", "type", mVar);
        }
        throw c.o(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, UiComponentError.UiInputComponentError uiInputComponentError) {
        if (uiInputComponentError != null) {
            tVar.k();
            tVar.W(StackTraceHelper.NAME_KEY);
            this.stringAdapter.toJson(tVar, uiInputComponentError.getName());
            tVar.W("type");
            this.stringAdapter.toJson(tVar, uiInputComponentError.getType());
            tVar.W("message");
            this.stringAdapter.toJson(tVar, uiInputComponentError.getMessage());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
