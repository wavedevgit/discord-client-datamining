package eo;

import com.withpersona.sdk2.inquiry.governmentid.RawExtraction;
import kotlin.jvm.internal.Intrinsics;
import pn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q4 {
    public static final RawExtraction a(pn.g gVar) {
        Intrinsics.checkNotNullParameter(gVar, "<this>");
        if (gVar instanceof g.a) {
            return new RawExtraction("mrz", ((g.a) gVar).c());
        }
        if (gVar instanceof g.b) {
            return new RawExtraction("pdf417", ((g.b) gVar).a());
        }
        throw new lr.p();
    }
}
