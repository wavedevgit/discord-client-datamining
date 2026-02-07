package j$.time.format;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class n implements e {

    /* renamed from: a  reason: collision with root package name */
    public final j$.time.temporal.n f29512a;

    /* renamed from: b  reason: collision with root package name */
    public final x f29513b;

    /* renamed from: c  reason: collision with root package name */
    public final a f29514c;

    /* renamed from: d  reason: collision with root package name */
    public volatile h f29515d;

    public n(j$.time.temporal.n nVar, x xVar, a aVar) {
        this.f29512a = nVar;
        this.f29513b = xVar;
        this.f29514c = aVar;
    }

    @Override // j$.time.format.e
    public final boolean r(q qVar, StringBuilder sb2) {
        j$.time.chrono.k kVar;
        Map map;
        Long a10 = qVar.a(this.f29512a);
        DateTimeFormatter dateTimeFormatter = qVar.f29525b;
        if (a10 == null) {
            return false;
        }
        j$.time.chrono.j jVar = (j$.time.chrono.j) qVar.f29524a.a(j$.time.temporal.o.f29566b);
        String str = null;
        if (jVar == null || jVar == (kVar = j$.time.chrono.k.f29464a)) {
            a aVar = this.f29514c;
            x xVar = this.f29513b;
            Locale locale = dateTimeFormatter.f29472b;
            Map map2 = (Map) aVar.f29483a.f29527a.get(xVar);
            if (map2 != null) {
                str = (String) map2.get(a10);
            }
        } else {
            a aVar2 = this.f29514c;
            j$.time.temporal.n nVar = this.f29512a;
            x xVar2 = this.f29513b;
            Locale locale2 = dateTimeFormatter.f29472b;
            if ((jVar == kVar || !(nVar instanceof j$.time.temporal.a)) && (map = (Map) aVar2.f29483a.f29527a.get(xVar2)) != null) {
                str = (String) map.get(a10);
            }
        }
        if (str != null) {
            sb2.append(str);
            return true;
        }
        if (this.f29515d == null) {
            this.f29515d = new h(this.f29512a, 1, 19, w.NORMAL);
        }
        return this.f29515d.r(qVar, sb2);
    }

    @Override // j$.time.format.e
    public final int t(o oVar, CharSequence charSequence, int i10) {
        List list;
        j$.time.temporal.n nVar = this.f29512a;
        a aVar = this.f29514c;
        int length = charSequence.length();
        if (i10 < 0 || i10 > length) {
            throw new IndexOutOfBoundsException();
        }
        boolean z10 = oVar.f29518c;
        DateTimeFormatter dateTimeFormatter = oVar.f29516a;
        Iterator it = null;
        x xVar = z10 ? this.f29513b : null;
        Object obj = oVar.c().f29532c;
        if (obj == null && (obj = oVar.f29516a.f29475e) == null) {
            obj = j$.time.chrono.k.f29464a;
        }
        Object obj2 = j$.time.chrono.k.f29464a;
        if (obj == obj2) {
            Locale locale = dateTimeFormatter.f29472b;
            List list2 = (List) ((HashMap) aVar.f29483a.f29528b).get(xVar);
            if (list2 != null) {
                it = list2.iterator();
            }
        } else {
            Locale locale2 = dateTimeFormatter.f29472b;
            if ((obj == obj2 || !(nVar instanceof j$.time.temporal.a)) && (list = (List) ((HashMap) aVar.f29483a.f29528b).get(xVar)) != null) {
                it = list.iterator();
            }
        }
        if (it != null) {
            while (it.hasNext()) {
                Map.Entry entry = (Map.Entry) it.next();
                String str = (String) entry.getKey();
                if (oVar.g(str, 0, charSequence, i10, str.length())) {
                    return oVar.f(this.f29512a, ((Long) entry.getValue()).longValue(), i10, str.length() + i10);
                }
            }
            if (oVar.f29518c) {
                return ~i10;
            }
        }
        if (this.f29515d == null) {
            this.f29515d = new h(this.f29512a, 1, 19, w.NORMAL);
        }
        return this.f29515d.t(oVar, charSequence, i10);
    }

    public final String toString() {
        x xVar = x.FULL;
        j$.time.temporal.n nVar = this.f29512a;
        x xVar2 = this.f29513b;
        if (xVar2 == xVar) {
            return "Text(" + nVar + ")";
        }
        return "Text(" + nVar + "," + xVar2 + ")";
    }
}
