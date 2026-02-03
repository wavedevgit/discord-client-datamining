package com.withpersona.sdk2.inquiry.ui.network;

import com.withpersona.sdk2.inquiry.ui.network.ComponentParam;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import lr.p;
import lr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static final Object a(ComponentParam componentParam) {
        Intrinsics.checkNotNullParameter(componentParam, "<this>");
        if (componentParam instanceof ComponentParam.a) {
            ComponentParam.a aVar = (ComponentParam.a) componentParam;
            return o0.m(v.a("street_1", aVar.c()), v.a("street_2", aVar.d()), v.a("city", aVar.a()), v.a("subdivision", aVar.e()), v.a("postal_code", aVar.b()));
        } else if (componentParam instanceof ComponentParam.d) {
            return ((ComponentParam.d) componentParam).a();
        } else {
            if (componentParam instanceof ComponentParam.e) {
                return ((ComponentParam.e) componentParam).a();
            }
            if (componentParam instanceof ComponentParam.b) {
                return Boolean.valueOf(((ComponentParam.b) componentParam).a());
            }
            if (componentParam instanceof ComponentParam.c) {
                return ((ComponentParam.c) componentParam).a();
            }
            if (componentParam instanceof ComponentParam.f) {
                String a10 = ((ComponentParam.f) componentParam).a();
                if (a10 == null) {
                    return "";
                }
                return a10;
            } else if (componentParam instanceof ComponentParam.g) {
                ComponentParam.g gVar = (ComponentParam.g) componentParam;
                return o0.m(v.a("caFlag", gVar.a()), v.a("dg1", gVar.b()), v.a("dg2", gVar.c()), v.a("sod", gVar.d()));
            } else if (componentParam instanceof ComponentParam.h) {
                ComponentParam.h hVar = (ComponentParam.h) componentParam;
                return o0.m(v.a("idb_country", hVar.a()), v.a("idb_type", hVar.b()), v.a("idb_value", hVar.c()));
            } else {
                throw new p();
            }
        }
    }
}
