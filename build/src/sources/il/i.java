package il;

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
    private final n f27010a;

    /* renamed from: b  reason: collision with root package name */
    private kl.d f27011b;

    /* renamed from: c  reason: collision with root package name */
    private kl.c f27012c;

    /* renamed from: d  reason: collision with root package name */
    private kl.e f27013d;

    /* renamed from: e  reason: collision with root package name */
    private kl.a f27014e;

    /* renamed from: f  reason: collision with root package name */
    private kl.b f27015f;

    /* renamed from: g  reason: collision with root package name */
    private kl.f f27016g;

    /* renamed from: h  reason: collision with root package name */
    private kl.h f27017h;

    /* renamed from: i  reason: collision with root package name */
    private View f27018i;

    /* renamed from: j  reason: collision with root package name */
    private final il.b f27019j;

    /* renamed from: k  reason: collision with root package name */
    private HashMap f27020k = z();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements a.b {
        a() {
        }

        @Override // com.henninghall.date_picker.pickers.a.b
        public void a(com.henninghall.date_picker.pickers.a aVar, int i10, int i11) {
            if (i.this.f27010a.f16837o.g()) {
                String m10 = i.this.f27011b.m(i10);
                String m11 = i.this.f27011b.m(i11);
                if ((m10.equals("12") && m11.equals("11")) || (m10.equals("11") && m11.equals("12"))) {
                    i.this.f27014e.f30946d.a((i.this.f27014e.f30946d.getValue() + 1) % 2, false);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends HashMap {
        b() {
            put(gl.c.DAY, i.this.f27012c);
            put(gl.c.YEAR, i.this.f27017h);
            put(gl.c.MONTH, i.this.f27016g);
            put(gl.c.DATE, i.this.f27015f);
            put(gl.c.HOUR, i.this.f27011b);
            put(gl.c.MINUTE, i.this.f27013d);
            put(gl.c.AM_PM, i.this.f27014e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(n nVar, View view) {
        this.f27010a = nVar;
        this.f27018i = view;
        this.f27019j = new il.b(view);
        this.f27017h = new kl.h(w(k.f16809i), nVar);
        this.f27016g = new kl.f(w(k.f16806f), nVar);
        this.f27015f = new kl.b(w(k.f16802b), nVar);
        this.f27012c = new kl.c(w(k.f16803c), nVar);
        this.f27013d = new kl.e(w(k.f16805e), nVar);
        this.f27014e = new kl.a(w(k.f16801a), nVar);
        this.f27011b = new kl.d(w(k.f16804d), nVar);
        m();
    }

    private void i() {
        Iterator it = this.f27010a.f16837o.b().iterator();
        while (it.hasNext()) {
            this.f27019j.a(y((gl.c) it.next()).f30946d.getView());
        }
    }

    private void m() {
        this.f27011b.f30946d.setOnValueChangeListenerInScrolling(new a());
    }

    private List n() {
        return new ArrayList(Arrays.asList(this.f27017h, this.f27016g, this.f27015f, this.f27012c, this.f27011b, this.f27013d, this.f27014e));
    }

    private String o() {
        ArrayList v10 = v();
        if (this.f27010a.z() == gl.b.date) {
            return ((kl.g) v10.get(0)).e() + " " + ((kl.g) v10.get(1)).e() + " " + ((kl.g) v10.get(2)).e();
        }
        return this.f27012c.e();
    }

    private String p(int i10) {
        ArrayList v10 = v();
        StringBuilder sb2 = new StringBuilder();
        for (int i11 = 0; i11 < 3; i11++) {
            if (i11 != 0) {
                sb2.append(" ");
            }
            kl.g gVar = (kl.g) v10.get(i11);
            if (gVar instanceof kl.b) {
                sb2.append(gVar.i(i10));
            } else {
                sb2.append(gVar.l());
            }
        }
        return sb2.toString();
    }

    private String q(int i10) {
        if (this.f27010a.z() == gl.b.date) {
            return p(i10);
        }
        return this.f27012c.l();
    }

    private ArrayList v() {
        ArrayList arrayList = new ArrayList();
        Iterator it = this.f27010a.f16837o.b().iterator();
        while (it.hasNext()) {
            arrayList.add(y((gl.c) it.next()));
        }
        return arrayList;
    }

    private com.henninghall.date_picker.pickers.a w(int i10) {
        return (com.henninghall.date_picker.pickers.a) this.f27018i.findViewById(i10);
    }

    private HashMap z() {
        return new b();
    }

    public boolean A() {
        for (kl.g gVar : n()) {
            if (gVar.f30946d.c()) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B() {
        this.f27019j.b();
        i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j(jl.h hVar) {
        for (kl.g gVar : n()) {
            hVar.a(gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(jl.h hVar) {
        for (kl.g gVar : n()) {
            if (!gVar.u()) {
                hVar.a(gVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(jl.h hVar) {
        for (kl.g gVar : n()) {
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
            sb2.append(((kl.g) it.next()).b());
        }
        return sb2.toString();
    }

    public String u() {
        return o() + " " + this.f27011b.e() + " " + this.f27013d.e() + this.f27014e.e();
    }

    String x() {
        return this.f27011b.l() + " " + this.f27013d.l() + this.f27014e.l();
    }

    kl.g y(gl.c cVar) {
        return (kl.g) this.f27020k.get(cVar);
    }
}
