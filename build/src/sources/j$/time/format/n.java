package j$.time.format;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class n implements e {

    /* renamed from: a  reason: collision with root package name */
    public final j$.time.temporal.n f31141a;

    /* renamed from: b  reason: collision with root package name */
    public final x f31142b;

    /* renamed from: c  reason: collision with root package name */
    public final a f31143c;

    /* renamed from: d  reason: collision with root package name */
    public volatile h f31144d;

    public n(j$.time.temporal.n nVar, x xVar, a aVar) {
        this.f31141a = nVar;
        this.f31142b = xVar;
        this.f31143c = aVar;
    }

    @Override // j$.time.format.e
    public final boolean r(q qVar, StringBuilder sb2) {
        j$.time.chrono.k kVar;
        Map map;
        Long a10 = qVar.a(this.f31141a);
        DateTimeFormatter dateTimeFormatter = qVar.f31154b;
        if (a10 == null) {
            return false;
        }
        j$.time.chrono.j jVar = (j$.time.chrono.j) qVar.f31153a.a(j$.time.temporal.o.f31196b);
        String str = null;
        if (jVar == null || jVar == (kVar = j$.time.chrono.k.f31092a)) {
            a aVar = this.f31143c;
            x xVar = this.f31142b;
            Locale locale = dateTimeFormatter.f31101b;
            Map map2 = (Map) aVar.f31112a.f31156a.get(xVar);
            if (map2 != null) {
                str = (String) map2.get(a10);
            }
        } else {
            a aVar2 = this.f31143c;
            j$.time.temporal.n nVar = this.f31141a;
            x xVar2 = this.f31142b;
            Locale locale2 = dateTimeFormatter.f31101b;
            if ((jVar == kVar || !(nVar instanceof j$.time.temporal.a)) && (map = (Map) aVar2.f31112a.f31156a.get(xVar2)) != null) {
                str = (String) map.get(a10);
            }
        }
        if (str != null) {
            sb2.append(str);
            return true;
        }
        if (this.f31144d == null) {
            this.f31144d = new h(this.f31141a, 1, 19, w.NORMAL);
        }
        return this.f31144d.r(qVar, sb2);
    }

    @Override // j$.time.format.e
    public final int t(o oVar, CharSequence charSequence, int i10) {
        List list;
        j$.time.temporal.n nVar = this.f31141a;
        a aVar = this.f31143c;
        int length = charSequence.length();
        if (i10 < 0 || i10 > length) {
            throw new IndexOutOfBoundsException();
        }
        boolean z10 = oVar.f31147c;
        DateTimeFormatter dateTimeFormatter = oVar.f31145a;
        Iterator it = null;
        x xVar = z10 ? this.f31142b : null;
        Object obj = oVar.c().f31161c;
        if (obj == null && (obj = oVar.f31145a.f31104e) == null) {
            obj = j$.time.chrono.k.f31092a;
        }
        Object obj2 = j$.time.chrono.k.f31092a;
        if (obj == obj2) {
            Locale locale = dateTimeFormatter.f31101b;
            List list2 = (List) ((HashMap) aVar.f31112a.f31157b).get(xVar);
            if (list2 != null) {
                it = list2.iterator();
            }
        } else {
            Locale locale2 = dateTimeFormatter.f31101b;
            if ((obj == obj2 || !(nVar instanceof j$.time.temporal.a)) && (list = (List) ((HashMap) aVar.f31112a.f31157b).get(xVar)) != null) {
                it = list.iterator();
            }
        }
        if (it != null) {
            while (it.hasNext()) {
                Map.Entry entry = (Map.Entry) it.next();
                String str = (String) entry.getKey();
                if (oVar.g(str, 0, charSequence, i10, str.length())) {
                    return oVar.f(this.f31141a, ((Long) entry.getValue()).longValue(), i10, str.length() + i10);
                }
            }
            if (oVar.f31147c) {
                return ~i10;
            }
        }
        if (this.f31144d == null) {
            this.f31144d = new h(this.f31141a, 1, 19, w.NORMAL);
        }
        return this.f31144d.t(oVar, charSequence, i10);
    }

    public final String toString() {
        x xVar = x.FULL;
        j$.time.temporal.n nVar = this.f31141a;
        x xVar2 = this.f31142b;
        if (xVar2 == xVar) {
            return "Text(" + nVar + ")";
        }
        return "Text(" + nVar + "," + xVar2 + ")";
    }
}
