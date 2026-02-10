package j$.time.format;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class n implements e {

    /* renamed from: a  reason: collision with root package name */
    public final j$.time.temporal.n f30566a;

    /* renamed from: b  reason: collision with root package name */
    public final x f30567b;

    /* renamed from: c  reason: collision with root package name */
    public final a f30568c;

    /* renamed from: d  reason: collision with root package name */
    public volatile h f30569d;

    public n(j$.time.temporal.n nVar, x xVar, a aVar) {
        this.f30566a = nVar;
        this.f30567b = xVar;
        this.f30568c = aVar;
    }

    @Override // j$.time.format.e
    public final boolean r(q qVar, StringBuilder sb2) {
        j$.time.chrono.k kVar;
        Map map;
        Long a10 = qVar.a(this.f30566a);
        DateTimeFormatter dateTimeFormatter = qVar.f30579b;
        if (a10 == null) {
            return false;
        }
        j$.time.chrono.j jVar = (j$.time.chrono.j) qVar.f30578a.a(j$.time.temporal.o.f30620b);
        String str = null;
        if (jVar == null || jVar == (kVar = j$.time.chrono.k.f30518a)) {
            a aVar = this.f30568c;
            x xVar = this.f30567b;
            Locale locale = dateTimeFormatter.f30526b;
            Map map2 = (Map) aVar.f30537a.f30581a.get(xVar);
            if (map2 != null) {
                str = (String) map2.get(a10);
            }
        } else {
            a aVar2 = this.f30568c;
            j$.time.temporal.n nVar = this.f30566a;
            x xVar2 = this.f30567b;
            Locale locale2 = dateTimeFormatter.f30526b;
            if ((jVar == kVar || !(nVar instanceof j$.time.temporal.a)) && (map = (Map) aVar2.f30537a.f30581a.get(xVar2)) != null) {
                str = (String) map.get(a10);
            }
        }
        if (str != null) {
            sb2.append(str);
            return true;
        }
        if (this.f30569d == null) {
            this.f30569d = new h(this.f30566a, 1, 19, w.NORMAL);
        }
        return this.f30569d.r(qVar, sb2);
    }

    @Override // j$.time.format.e
    public final int t(o oVar, CharSequence charSequence, int i10) {
        List list;
        j$.time.temporal.n nVar = this.f30566a;
        a aVar = this.f30568c;
        int length = charSequence.length();
        if (i10 < 0 || i10 > length) {
            throw new IndexOutOfBoundsException();
        }
        boolean z10 = oVar.f30572c;
        DateTimeFormatter dateTimeFormatter = oVar.f30570a;
        Iterator it = null;
        x xVar = z10 ? this.f30567b : null;
        Object obj = oVar.c().f30586c;
        if (obj == null && (obj = oVar.f30570a.f30529e) == null) {
            obj = j$.time.chrono.k.f30518a;
        }
        Object obj2 = j$.time.chrono.k.f30518a;
        if (obj == obj2) {
            Locale locale = dateTimeFormatter.f30526b;
            List list2 = (List) ((HashMap) aVar.f30537a.f30582b).get(xVar);
            if (list2 != null) {
                it = list2.iterator();
            }
        } else {
            Locale locale2 = dateTimeFormatter.f30526b;
            if ((obj == obj2 || !(nVar instanceof j$.time.temporal.a)) && (list = (List) ((HashMap) aVar.f30537a.f30582b).get(xVar)) != null) {
                it = list.iterator();
            }
        }
        if (it != null) {
            while (it.hasNext()) {
                Map.Entry entry = (Map.Entry) it.next();
                String str = (String) entry.getKey();
                if (oVar.g(str, 0, charSequence, i10, str.length())) {
                    return oVar.f(this.f30566a, ((Long) entry.getValue()).longValue(), i10, str.length() + i10);
                }
            }
            if (oVar.f30572c) {
                return ~i10;
            }
        }
        if (this.f30569d == null) {
            this.f30569d = new h(this.f30566a, 1, 19, w.NORMAL);
        }
        return this.f30569d.t(oVar, charSequence, i10);
    }

    public final String toString() {
        x xVar = x.FULL;
        j$.time.temporal.n nVar = this.f30566a;
        x xVar2 = this.f30567b;
        if (xVar2 == xVar) {
            return "Text(" + nVar + ")";
        }
        return "Text(" + nVar + "," + xVar2 + ")";
    }
}
