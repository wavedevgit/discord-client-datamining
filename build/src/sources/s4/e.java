package s4;

import java.util.Iterator;
import java.util.List;
import k4.m;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import p4.i;
import p4.j;
import p4.o;
import p4.u;
import p4.x;
import p4.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static final String f49664a;

    static {
        String i10 = m.i("DiagnosticsWrkr");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"DiagnosticsWrkr\")");
        f49664a = i10;
    }

    private static final String c(u uVar, String str, Integer num, String str2) {
        return '\n' + uVar.f43685a + "\t " + uVar.f43687c + "\t " + num + "\t " + uVar.f43686b.name() + "\t " + str + "\t " + str2 + '\t';
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String d(o oVar, z zVar, j jVar, List list) {
        Integer num;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("\n Id \t Class Name\t Job Id\t State\t Unique Name\t Tags\t");
        Iterator it = list.iterator();
        while (it.hasNext()) {
            u uVar = (u) it.next();
            i a10 = jVar.a(x.a(uVar));
            if (a10 != null) {
                num = Integer.valueOf(a10.f43660c);
            } else {
                num = null;
            }
            sb2.append(c(uVar, CollectionsKt.x0(oVar.a(uVar.f43685a), ",", null, null, 0, null, null, 62, null), num, CollectionsKt.x0(zVar.a(uVar.f43685a), ",", null, null, 0, null, null, 62, null)));
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
        return sb3;
    }
}
