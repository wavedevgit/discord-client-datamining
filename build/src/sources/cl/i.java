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
    private final n f8321a;

    /* renamed from: b  reason: collision with root package name */
    private el.d f8322b;

    /* renamed from: c  reason: collision with root package name */
    private el.c f8323c;

    /* renamed from: d  reason: collision with root package name */
    private el.e f8324d;

    /* renamed from: e  reason: collision with root package name */
    private el.a f8325e;

    /* renamed from: f  reason: collision with root package name */
    private el.b f8326f;

    /* renamed from: g  reason: collision with root package name */
    private el.f f8327g;

    /* renamed from: h  reason: collision with root package name */
    private el.h f8328h;

    /* renamed from: i  reason: collision with root package name */
    private View f8329i;

    /* renamed from: j  reason: collision with root package name */
    private final cl.b f8330j;

    /* renamed from: k  reason: collision with root package name */
    private HashMap f8331k = z();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements a.b {
        a() {
        }

        @Override // com.henninghall.date_picker.pickers.a.b
        public void a(com.henninghall.date_picker.pickers.a aVar, int i10, int i11) {
            if (i.this.f8321a.f17355o.g()) {
                String m10 = i.this.f8322b.m(i10);
                String m11 = i.this.f8322b.m(i11);
                if ((m10.equals("12") && m11.equals("11")) || (m10.equals("11") && m11.equals("12"))) {
                    i.this.f8325e.f22948d.a((i.this.f8325e.f22948d.getValue() + 1) % 2, false);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends HashMap {
        b() {
            put(al.c.DAY, i.this.f8323c);
            put(al.c.YEAR, i.this.f8328h);
            put(al.c.MONTH, i.this.f8327g);
            put(al.c.DATE, i.this.f8326f);
            put(al.c.HOUR, i.this.f8322b);
            put(al.c.MINUTE, i.this.f8324d);
            put(al.c.AM_PM, i.this.f8325e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(n nVar, View view) {
        this.f8321a = nVar;
        this.f8329i = view;
        this.f8330j = new cl.b(view);
        this.f8328h = new el.h(w(k.f17327i), nVar);
        this.f8327g = new el.f(w(k.f17324f), nVar);
        this.f8326f = new el.b(w(k.f17320b), nVar);
        this.f8323c = new el.c(w(k.f17321c), nVar);
        this.f8324d = new el.e(w(k.f17323e), nVar);
        this.f8325e = new el.a(w(k.f17319a), nVar);
        this.f8322b = new el.d(w(k.f17322d), nVar);
        m();
    }

    private void i() {
        Iterator it = this.f8321a.f17355o.b().iterator();
        while (it.hasNext()) {
            this.f8330j.a(y((al.c) it.next()).f22948d.getView());
        }
    }

    private void m() {
        this.f8322b.f22948d.setOnValueChangeListenerInScrolling(new a());
    }

    private List n() {
        return new ArrayList(Arrays.asList(this.f8328h, this.f8327g, this.f8326f, this.f8323c, this.f8322b, this.f8324d, this.f8325e));
    }

    private String o() {
        ArrayList v10 = v();
        if (this.f8321a.z() == al.b.date) {
            return ((el.g) v10.get(0)).e() + " " + ((el.g) v10.get(1)).e() + " " + ((el.g) v10.get(2)).e();
        }
        return this.f8323c.e();
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
        if (this.f8321a.z() == al.b.date) {
            return p(i10);
        }
        return this.f8323c.l();
    }

    private ArrayList v() {
        ArrayList arrayList = new ArrayList();
        Iterator it = this.f8321a.f17355o.b().iterator();
        while (it.hasNext()) {
            arrayList.add(y((al.c) it.next()));
        }
        return arrayList;
    }

    private com.henninghall.date_picker.pickers.a w(int i10) {
        return (com.henninghall.date_picker.pickers.a) this.f8329i.findViewById(i10);
    }

    private HashMap z() {
        return new b();
    }

    public boolean A() {
        for (el.g gVar : n()) {
            if (gVar.f22948d.c()) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B() {
        this.f8330j.b();
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
        return o() + " " + this.f8322b.e() + " " + this.f8324d.e() + this.f8325e.e();
    }

    String x() {
        return this.f8322b.l() + " " + this.f8324d.l() + this.f8325e.l();
    }

    el.g y(al.c cVar) {
        return (el.g) this.f8331k.get(cVar);
    }
}
