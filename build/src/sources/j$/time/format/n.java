package j$.time.format;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class n implements e {

    /* renamed from: a  reason: collision with root package name */
    public final j$.time.temporal.n f30567a;

    /* renamed from: b  reason: collision with root package name */
    public final x f30568b;

    /* renamed from: c  reason: collision with root package name */
    public final a f30569c;

    /* renamed from: d  reason: collision with root package name */
    public volatile h f30570d;

    public n(j$.time.temporal.n nVar, x xVar, a aVar) {
        this.f30567a = nVar;
        this.f30568b = xVar;
        this.f30569c = aVar;
    }

    @Override // j$.time.format.e
    public final boolean r(q qVar, StringBuilder sb2) {
        j$.time.chrono.k kVar;
        Map map;
        Long a10 = qVar.a(this.f30567a);
        DateTimeFormatter dateTimeFormatter = qVar.f30580b;
        if (a10 == null) {
            return false;
        }
        j$.time.chrono.j jVar = (j$.time.chrono.j) qVar.f30579a.a(j$.time.temporal.o.f30621b);
        String str = null;
        if (jVar == null || jVar == (kVar = j$.time.chrono.k.f30519a)) {
            a aVar = this.f30569c;
            x xVar = this.f30568b;
            Locale locale = dateTimeFormatter.f30527b;
            Map map2 = (Map) aVar.f30538a.f30582a.get(xVar);
            if (map2 != null) {
                str = (String) map2.get(a10);
            }
        } else {
            a aVar2 = this.f30569c;
            j$.time.temporal.n nVar = this.f30567a;
            x xVar2 = this.f30568b;
            Locale locale2 = dateTimeFormatter.f30527b;
            if ((jVar == kVar || !(nVar instanceof j$.time.temporal.a)) && (map = (Map) aVar2.f30538a.f30582a.get(xVar2)) != null) {
                str = (String) map.get(a10);
            }
        }
        if (str != null) {
            sb2.append(str);
            return true;
        }
        if (this.f30570d == null) {
            this.f30570d = new h(this.f30567a, 1, 19, w.NORMAL);
        }
        return this.f30570d.r(qVar, sb2);
    }

    @Override // j$.time.format.e
    public final int t(o oVar, CharSequence charSequence, int i10) {
        List list;
        j$.time.temporal.n nVar = this.f30567a;
        a aVar = this.f30569c;
        int length = charSequence.length();
        if (i10 < 0 || i10 > length) {
            throw new IndexOutOfBoundsException();
        }
        boolean z10 = oVar.f30573c;
        DateTimeFormatter dateTimeFormatter = oVar.f30571a;
        Iterator it = null;
        x xVar = z10 ? this.f30568b : null;
        Object obj = oVar.c().f30587c;
        if (obj == null && (obj = oVar.f30571a.f30530e) == null) {
            obj = j$.time.chrono.k.f30519a;
        }
        Object obj2 = j$.time.chrono.k.f30519a;
        if (obj == obj2) {
            Locale locale = dateTimeFormatter.f30527b;
            List list2 = (List) ((HashMap) aVar.f30538a.f30583b).get(xVar);
            if (list2 != null) {
                it = list2.iterator();
            }
        } else {
            Locale locale2 = dateTimeFormatter.f30527b;
            if ((obj == obj2 || !(nVar instanceof j$.time.temporal.a)) && (list = (List) ((HashMap) aVar.f30538a.f30583b).get(xVar)) != null) {
                it = list.iterator();
            }
        }
        if (it != null) {
            while (it.hasNext()) {
                Map.Entry entry = (Map.Entry) it.next();
                String str = (String) entry.getKey();
                if (oVar.g(str, 0, charSequence, i10, str.length())) {
                    return oVar.f(this.f30567a, ((Long) entry.getValue()).longValue(), i10, str.length() + i10);
                }
            }
            if (oVar.f30573c) {
                return ~i10;
            }
        }
        if (this.f30570d == null) {
            this.f30570d = new h(this.f30567a, 1, 19, w.NORMAL);
        }
        return this.f30570d.t(oVar, charSequence, i10);
    }

    public final String toString() {
        x xVar = x.FULL;
        j$.time.temporal.n nVar = this.f30567a;
        x xVar2 = this.f30568b;
        if (xVar2 == xVar) {
            return "Text(" + nVar + ")";
        }
        return "Text(" + nVar + "," + xVar2 + ")";
    }
}
