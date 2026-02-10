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
    private final n f31898a;

    /* renamed from: b  reason: collision with root package name */
    private ml.d f31899b;

    /* renamed from: c  reason: collision with root package name */
    private ml.c f31900c;

    /* renamed from: d  reason: collision with root package name */
    private ml.e f31901d;

    /* renamed from: e  reason: collision with root package name */
    private ml.a f31902e;

    /* renamed from: f  reason: collision with root package name */
    private ml.b f31903f;

    /* renamed from: g  reason: collision with root package name */
    private ml.f f31904g;

    /* renamed from: h  reason: collision with root package name */
    private ml.h f31905h;

    /* renamed from: i  reason: collision with root package name */
    private View f31906i;

    /* renamed from: j  reason: collision with root package name */
    private final kl.b f31907j;

    /* renamed from: k  reason: collision with root package name */
    private HashMap f31908k = z();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements a.b {
        a() {
        }

        @Override // com.henninghall.date_picker.pickers.a.b
        public void a(com.henninghall.date_picker.pickers.a aVar, int i10, int i11) {
            if (i.this.f31898a.f17586o.g()) {
                String m10 = i.this.f31899b.m(i10);
                String m11 = i.this.f31899b.m(i11);
                if ((m10.equals("12") && m11.equals("11")) || (m10.equals("11") && m11.equals("12"))) {
                    i.this.f31902e.f36547d.a((i.this.f31902e.f36547d.getValue() + 1) % 2, false);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends HashMap {
        b() {
            put(il.c.DAY, i.this.f31900c);
            put(il.c.YEAR, i.this.f31905h);
            put(il.c.MONTH, i.this.f31904g);
            put(il.c.DATE, i.this.f31903f);
            put(il.c.HOUR, i.this.f31899b);
            put(il.c.MINUTE, i.this.f31901d);
            put(il.c.AM_PM, i.this.f31902e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(n nVar, View view) {
        this.f31898a = nVar;
        this.f31906i = view;
        this.f31907j = new kl.b(view);
        this.f31905h = new ml.h(w(k.f17558i), nVar);
        this.f31904g = new ml.f(w(k.f17555f), nVar);
        this.f31903f = new ml.b(w(k.f17551b), nVar);
        this.f31900c = new ml.c(w(k.f17552c), nVar);
        this.f31901d = new ml.e(w(k.f17554e), nVar);
        this.f31902e = new ml.a(w(k.f17550a), nVar);
        this.f31899b = new ml.d(w(k.f17553d), nVar);
        m();
    }

    private void i() {
        Iterator it = this.f31898a.f17586o.b().iterator();
        while (it.hasNext()) {
            this.f31907j.a(y((il.c) it.next()).f36547d.getView());
        }
    }

    private void m() {
        this.f31899b.f36547d.setOnValueChangeListenerInScrolling(new a());
    }

    private List n() {
        return new ArrayList(Arrays.asList(this.f31905h, this.f31904g, this.f31903f, this.f31900c, this.f31899b, this.f31901d, this.f31902e));
    }

    private String o() {
        ArrayList v10 = v();
        if (this.f31898a.z() == il.b.date) {
            return ((ml.g) v10.get(0)).e() + " " + ((ml.g) v10.get(1)).e() + " " + ((ml.g) v10.get(2)).e();
        }
        return this.f31900c.e();
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
        if (this.f31898a.z() == il.b.date) {
            return p(i10);
        }
        return this.f31900c.l();
    }

    private ArrayList v() {
        ArrayList arrayList = new ArrayList();
        Iterator it = this.f31898a.f17586o.b().iterator();
        while (it.hasNext()) {
            arrayList.add(y((il.c) it.next()));
        }
        return arrayList;
    }

    private com.henninghall.date_picker.pickers.a w(int i10) {
        return (com.henninghall.date_picker.pickers.a) this.f31906i.findViewById(i10);
    }

    private HashMap z() {
        return new b();
    }

    public boolean A() {
        for (ml.g gVar : n()) {
            if (gVar.f36547d.c()) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B() {
        this.f31907j.b();
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
        return o() + " " + this.f31899b.e() + " " + this.f31901d.e() + this.f31902e.e();
    }

    String x() {
        return this.f31899b.l() + " " + this.f31901d.l() + this.f31902e.l();
    }

    ml.g y(il.c cVar) {
        return (ml.g) this.f31908k.get(cVar);
    }
}
