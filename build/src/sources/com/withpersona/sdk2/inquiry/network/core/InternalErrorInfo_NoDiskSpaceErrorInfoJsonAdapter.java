package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import java.lang.reflect.Constructor;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InternalErrorInfo_NoDiskSpaceErrorInfoJsonAdapter extends h {
    private volatile Constructor<InternalErrorInfo.NoDiskSpaceErrorInfo> constructorRef;
    @NotNull
    private final m.b options = m.b.a("message");
    @NotNull
    private final h stringAdapter;

    public InternalErrorInfo_NoDiskSpaceErrorInfoJsonAdapter(@NotNull w wVar) {
        this.stringAdapter = wVar.f(String.class, x0.d(), "message");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(60);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InternalErrorInfo.NoDiskSpaceErrorInfo");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InternalErrorInfo.NoDiskSpaceErrorInfo fromJson(@NotNull m mVar) {
        mVar.r();
        String str = null;
        int i10 = -1;
        while (mVar.hasNext()) {
            int t02 = mVar.t0(this.options);
            if (t02 == -1) {
                mVar.F0();
                mVar.P();
            } else if (t02 == 0) {
                str = (String) this.stringAdapter.fromJson(mVar);
                if (str == null) {
                    throw tm.c.x("message", "message", mVar);
                }
                i10 = -2;
            } else {
                continue;
            }
        }
        mVar.y();
        if (i10 == -2) {
            return new InternalErrorInfo.NoDiskSpaceErrorInfo(str);
        }
        Constructor<InternalErrorInfo.NoDiskSpaceErrorInfo> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = InternalErrorInfo.NoDiskSpaceErrorInfo.class.getDeclaredConstructor(String.class, Integer.TYPE, tm.c.f49935c);
            this.constructorRef = constructor;
        }
        return constructor.newInstance(str, Integer.valueOf(i10), null);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, InternalErrorInfo.NoDiskSpaceErrorInfo noDiskSpaceErrorInfo) {
        if (noDiskSpaceErrorInfo != null) {
            tVar.l();
            tVar.t0("message");
            this.stringAdapter.toJson(tVar, noDiskSpaceErrorInfo.getMessage());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
