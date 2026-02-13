package kl;

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
    private final n f32467a;

    /* renamed from: b  reason: collision with root package name */
    private ml.d f32468b;

    /* renamed from: c  reason: collision with root package name */
    private ml.c f32469c;

    /* renamed from: d  reason: collision with root package name */
    private ml.e f32470d;

    /* renamed from: e  reason: collision with root package name */
    private ml.a f32471e;

    /* renamed from: f  reason: collision with root package name */
    private ml.b f32472f;

    /* renamed from: g  reason: collision with root package name */
    private ml.f f32473g;

    /* renamed from: h  reason: collision with root package name */
    private ml.h f32474h;

    /* renamed from: i  reason: collision with root package name */
    private View f32475i;

    /* renamed from: j  reason: collision with root package name */
    private final kl.b f32476j;

    /* renamed from: k  reason: collision with root package name */
    private HashMap f32477k = z();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements a.b {
        a() {
        }

        @Override // com.henninghall.date_picker.pickers.a.b
        public void a(com.henninghall.date_picker.pickers.a aVar, int i10, int i11) {
            if (i.this.f32467a.f17587o.g()) {
                String m10 = i.this.f32468b.m(i10);
                String m11 = i.this.f32468b.m(i11);
                if ((m10.equals("12") && m11.equals("11")) || (m10.equals("11") && m11.equals("12"))) {
                    i.this.f32471e.f37116d.a((i.this.f32471e.f37116d.getValue() + 1) % 2, false);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends HashMap {
        b() {
            put(il.c.DAY, i.this.f32469c);
            put(il.c.YEAR, i.this.f32474h);
            put(il.c.MONTH, i.this.f32473g);
            put(il.c.DATE, i.this.f32472f);
            put(il.c.HOUR, i.this.f32468b);
            put(il.c.MINUTE, i.this.f32470d);
            put(il.c.AM_PM, i.this.f32471e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(n nVar, View view) {
        this.f32467a = nVar;
        this.f32475i = view;
        this.f32476j = new kl.b(view);
        this.f32474h = new ml.h(w(k.f17559i), nVar);
        this.f32473g = new ml.f(w(k.f17556f), nVar);
        this.f32472f = new ml.b(w(k.f17552b), nVar);
        this.f32469c = new ml.c(w(k.f17553c), nVar);
        this.f32470d = new ml.e(w(k.f17555e), nVar);
        this.f32471e = new ml.a(w(k.f17551a), nVar);
        this.f32468b = new ml.d(w(k.f17554d), nVar);
        m();
    }

    private void i() {
        Iterator it = this.f32467a.f17587o.b().iterator();
        while (it.hasNext()) {
            this.f32476j.a(y((il.c) it.next()).f37116d.getView());
        }
    }

    private void m() {
        this.f32468b.f37116d.setOnValueChangeListenerInScrolling(new a());
    }

    private List n() {
        return new ArrayList(Arrays.asList(this.f32474h, this.f32473g, this.f32472f, this.f32469c, this.f32468b, this.f32470d, this.f32471e));
    }

    private String o() {
        ArrayList v10 = v();
        if (this.f32467a.z() == il.b.date) {
            return ((ml.g) v10.get(0)).e() + " " + ((ml.g) v10.get(1)).e() + " " + ((ml.g) v10.get(2)).e();
        }
        return this.f32469c.e();
    }

    private String p(int i10) {
        ArrayList v10 = v();
        StringBuilder sb2 = new StringBuilder();
        for (int i11 = 0; i11 < 3; i11++) {
            if (i11 != 0) {
                sb2.append(" ");
            }
            ml.g gVar = (ml.g) v10.get(i11);
            if (gVar instanceof ml.b) {
                sb2.append(gVar.i(i10));
            } else {
                sb2.append(gVar.l());
            }
        }
        return sb2.toString();
    }

    private String q(int i10) {
        if (this.f32467a.z() == il.b.date) {
            return p(i10);
        }
        return this.f32469c.l();
    }

    private ArrayList v() {
        ArrayList arrayList = new ArrayList();
        Iterator it = this.f32467a.f17587o.b().iterator();
        while (it.hasNext()) {
            arrayList.add(y((il.c) it.next()));
        }
        return arrayList;
    }

    private com.henninghall.date_picker.pickers.a w(int i10) {
        return (com.henninghall.date_picker.pickers.a) this.f32475i.findViewById(i10);
    }

    private HashMap z() {
        return new b();
    }

    public boolean A() {
        for (ml.g gVar : n()) {
            if (gVar.f37116d.c()) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B() {
        this.f32476j.b();
        i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j(ll.h hVar) {
        for (ml.g gVar : n()) {
            hVar.a(gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(ll.h hVar) {
        for (ml.g gVar : n()) {
            if (!gVar.u()) {
                hVar.a(gVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(ll.h hVar) {
        for (ml.g gVar : n()) {
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
            sb2.append(((ml.g) it.next()).b());
        }
        return sb2.toString();
    }

    public String u() {
        return o() + " " + this.f32468b.e() + " " + this.f32470d.e() + this.f32471e.e();
    }

    String x() {
        return this.f32468b.l() + " " + this.f32470d.l() + this.f32471e.l();
    }

    ml.g y(il.c cVar) {
        return (ml.g) this.f32477k.get(cVar);
    }
}
