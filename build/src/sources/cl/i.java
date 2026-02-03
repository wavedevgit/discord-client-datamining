package cl;

import android.view.View;
import com.henninghall.date_picker.k;
import com.henninghall.date_picker.n;
import com.henninghall.date_picker.pickers.a;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i {

    /* renamed from: a  reason: collision with root package name */
    private final n f7308a;

    /* renamed from: b  reason: collision with root package name */
    private el.d f7309b;

    /* renamed from: c  reason: collision with root package name */
    private el.c f7310c;

    /* renamed from: d  reason: collision with root package name */
    private el.e f7311d;

    /* renamed from: e  reason: collision with root package name */
    private el.a f7312e;

    /* renamed from: f  reason: collision with root package name */
    private el.b f7313f;

    /* renamed from: g  reason: collision with root package name */
    private el.f f7314g;

    /* renamed from: h  reason: collision with root package name */
    private el.h f7315h;

    /* renamed from: i  reason: collision with root package name */
    private View f7316i;

    /* renamed from: j  reason: collision with root package name */
    private final cl.b f7317j;

    /* renamed from: k  reason: collision with root package name */
    private HashMap f7318k = z();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements a.b {
        a() {
        }

        @Override // com.henninghall.date_picker.pickers.a.b
        public void a(com.henninghall.date_picker.pickers.a aVar, int i10, int i11) {
            if (i.this.f7308a.f16323o.g()) {
                String m10 = i.this.f7309b.m(i10);
                String m11 = i.this.f7309b.m(i11);
                if ((m10.equals("12") && m11.equals("11")) || (m10.equals("11") && m11.equals("12"))) {
                    i.this.f7312e.f21639d.a((i.this.f7312e.f21639d.getValue() + 1) % 2, false);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends HashMap {
        b() {
            put(al.c.DAY, i.this.f7310c);
            put(al.c.YEAR, i.this.f7315h);
            put(al.c.MONTH, i.this.f7314g);
            put(al.c.DATE, i.this.f7313f);
            put(al.c.HOUR, i.this.f7309b);
            put(al.c.MINUTE, i.this.f7311d);
            put(al.c.AM_PM, i.this.f7312e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(n nVar, View view) {
        this.f7308a = nVar;
        this.f7316i = view;
        this.f7317j = new cl.b(view);
        this.f7315h = new el.h(w(k.f16295i), nVar);
        this.f7314g = new el.f(w(k.f16292f), nVar);
        this.f7313f = new el.b(w(k.f16288b), nVar);
        this.f7310c = new el.c(w(k.f16289c), nVar);
        this.f7311d = new el.e(w(k.f16291e), nVar);
        this.f7312e = new el.a(w(k.f16287a), nVar);
        this.f7309b = new el.d(w(k.f16290d), nVar);
        m();
    }

    private void i() {
        Iterator it = this.f7308a.f16323o.b().iterator();
        while (it.hasNext()) {
            this.f7317j.a(y((al.c) it.next()).f21639d.getView());
        }
    }

    private void m() {
        this.f7309b.f21639d.setOnValueChangeListenerInScrolling(new a());
    }

    private List n() {
        return new ArrayList(Arrays.asList(this.f7315h, this.f7314g, this.f7313f, this.f7310c, this.f7309b, this.f7311d, this.f7312e));
    }

    private String o() {
        ArrayList v10 = v();
        if (this.f7308a.z() == al.b.date) {
            return ((el.g) v10.get(0)).e() + " " + ((el.g) v10.get(1)).e() + " " + ((el.g) v10.get(2)).e();
        }
        return this.f7310c.e();
    }

    private String p(int i10) {
        ArrayList v10 = v();
        StringBuilder sb2 = new StringBuilder();
        for (int i11 = 0; i11 < 3; i11++) {
            if (i11 != 0) {
                sb2.append(" ");
            }
            el.g gVar = (el.g) v10.get(i11);
            if (gVar instanceof el.b) {
                sb2.append(gVar.i(i10));
            } else {
                sb2.append(gVar.l());
            }
        }
        return sb2.toString();
    }

    private String q(int i10) {
        if (this.f7308a.z() == al.b.date) {
            return p(i10);
        }
        return this.f7310c.l();
    }

    private ArrayList v() {
        ArrayList arrayList = new ArrayList();
        Iterator it = this.f7308a.f16323o.b().iterator();
        while (it.hasNext()) {
            arrayList.add(y((al.c) it.next()));
        }
        return arrayList;
    }

    private com.henninghall.date_picker.pickers.a w(int i10) {
        return (com.henninghall.date_picker.pickers.a) this.f7316i.findViewById(i10);
    }

    private HashMap z() {
        return new b();
    }

    public boolean A() {
        for (el.g gVar : n()) {
            if (gVar.f21639d.c()) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B() {
        this.f7317j.b();
        i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j(dl.h hVar) {
        for (el.g gVar : n()) {
            hVar.a(gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(dl.h hVar) {
        for (el.g gVar : n()) {
            if (!gVar.u()) {
                hVar.a(gVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(dl.h hVar) {
        for (el.g gVar : n()) {
            if (gVar.u()) {
                hVar.a(gVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String r() {
        return s(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String s(int i10) {
        return q(i10) + " " + x();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String t() {
        StringBuilder sb2 = new StringBuilder();
        Iterator it = v().iterator();
        while (it.hasNext()) {
            sb2.append(((el.g) it.next()).b());
        }
        return sb2.toString();
    }

    public String u() {
        return o() + " " + this.f7309b.e() + " " + this.f7311d.e() + this.f7312e.e();
    }

    String x() {
        return this.f7309b.l() + " " + this.f7311d.l() + this.f7312e.l();
    }

    el.g y(al.c cVar) {
        return (el.g) this.f7318k.get(cVar);
    }
}
