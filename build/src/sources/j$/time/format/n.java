package j$.time.format;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class n implements e {

    /* renamed from: a  reason: collision with root package name */
    public final j$.time.temporal.n f29766a;

    /* renamed from: b  reason: collision with root package name */
    public final x f29767b;

    /* renamed from: c  reason: collision with root package name */
    public final a f29768c;

    /* renamed from: d  reason: collision with root package name */
    public volatile h f29769d;

    public n(j$.time.temporal.n nVar, x xVar, a aVar) {
        this.f29766a = nVar;
        this.f29767b = xVar;
        this.f29768c = aVar;
    }

    @Override // j$.time.format.e
    public final boolean r(q qVar, StringBuilder sb2) {
        j$.time.chrono.k kVar;
        Map map;
        Long a10 = qVar.a(this.f29766a);
        DateTimeFormatter dateTimeFormatter = qVar.f29779b;
        if (a10 == null) {
            return false;
        }
        j$.time.chrono.j jVar = (j$.time.chrono.j) qVar.f29778a.a(j$.time.temporal.o.f29820b);
        String str = null;
        if (jVar == null || jVar == (kVar = j$.time.chrono.k.f29718a)) {
            a aVar = this.f29768c;
            x xVar = this.f29767b;
            Locale locale = dateTimeFormatter.f29726b;
            Map map2 = (Map) aVar.f29737a.f29781a.get(xVar);
            if (map2 != null) {
                str = (String) map2.get(a10);
            }
        } else {
            a aVar2 = this.f29768c;
            j$.time.temporal.n nVar = this.f29766a;
            x xVar2 = this.f29767b;
            Locale locale2 = dateTimeFormatter.f29726b;
            if ((jVar == kVar || !(nVar instanceof j$.time.temporal.a)) && (map = (Map) aVar2.f29737a.f29781a.get(xVar2)) != null) {
                str = (String) map.get(a10);
            }
        }
        if (str != null) {
            sb2.append(str);
            return true;
        }
        if (this.f29769d == null) {
            this.f29769d = new h(this.f29766a, 1, 19, w.NORMAL);
        }
        return this.f29769d.r(qVar, sb2);
    }

    @Override // j$.time.format.e
    public final int t(o oVar, CharSequence charSequence, int i10) {
        List list;
        j$.time.temporal.n nVar = this.f29766a;
        a aVar = this.f29768c;
        int length = charSequence.length();
        if (i10 < 0 || i10 > length) {
            throw new IndexOutOfBoundsException();
        }
        boolean z10 = oVar.f29772c;
        DateTimeFormatter dateTimeFormatter = oVar.f29770a;
        Iterator it = null;
        x xVar = z10 ? this.f29767b : null;
        Object obj = oVar.c().f29786c;
        if (obj == null && (obj = oVar.f29770a.f29729e) == null) {
            obj = j$.time.chrono.k.f29718a;
        }
        Object obj2 = j$.time.chrono.k.f29718a;
        if (obj == obj2) {
            Locale locale = dateTimeFormatter.f29726b;
            List list2 = (List) ((HashMap) aVar.f29737a.f29782b).get(xVar);
            if (list2 != null) {
                it = list2.iterator();
            }
        } else {
            Locale locale2 = dateTimeFormatter.f29726b;
            if ((obj == obj2 || !(nVar instanceof j$.time.temporal.a)) && (list = (List) ((HashMap) aVar.f29737a.f29782b).get(xVar)) != null) {
                it = list.iterator();
            }
        }
        if (it != null) {
            while (it.hasNext()) {
                Map.Entry entry = (Map.Entry) it.next();
                String str = (String) entry.getKey();
                if (oVar.g(str, 0, charSequence, i10, str.length())) {
                    return oVar.f(this.f29766a, ((Long) entry.getValue()).longValue(), i10, str.length() + i10);
                }
            }
            if (oVar.f29772c) {
                return ~i10;
            }
        }
        if (this.f29769d == null) {
            this.f29769d = new h(this.f29766a, 1, 19, w.NORMAL);
        }
        return this.f29769d.t(oVar, charSequence, i10);
    }

    public final String toString() {
        x xVar = x.FULL;
        j$.time.temporal.n nVar = this.f29766a;
        x xVar2 = this.f29767b;
        if (xVar2 == xVar) {
            return "Text(" + nVar + ")";
        }
        return "Text(" + nVar + "," + xVar2 + ")";
    }
}
