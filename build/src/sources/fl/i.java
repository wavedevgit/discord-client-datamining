package fl;

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
    private final n f23122a;

    /* renamed from: b  reason: collision with root package name */
    private hl.d f23123b;

    /* renamed from: c  reason: collision with root package name */
    private hl.c f23124c;

    /* renamed from: d  reason: collision with root package name */
    private hl.e f23125d;

    /* renamed from: e  reason: collision with root package name */
    private hl.a f23126e;

    /* renamed from: f  reason: collision with root package name */
    private hl.b f23127f;

    /* renamed from: g  reason: collision with root package name */
    private hl.f f23128g;

    /* renamed from: h  reason: collision with root package name */
    private hl.h f23129h;

    /* renamed from: i  reason: collision with root package name */
    private View f23130i;

    /* renamed from: j  reason: collision with root package name */
    private final fl.b f23131j;

    /* renamed from: k  reason: collision with root package name */
    private HashMap f23132k = z();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements a.b {
        a() {
        }

        @Override // com.henninghall.date_picker.pickers.a.b
        public void a(com.henninghall.date_picker.pickers.a aVar, int i10, int i11) {
            if (i.this.f23122a.f16717o.g()) {
                String m10 = i.this.f23123b.m(i10);
                String m11 = i.this.f23123b.m(i11);
                if ((m10.equals("12") && m11.equals("11")) || (m10.equals("11") && m11.equals("12"))) {
                    i.this.f23126e.f25951d.a((i.this.f23126e.f25951d.getValue() + 1) % 2, false);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends HashMap {
        b() {
            put(dl.c.DAY, i.this.f23124c);
            put(dl.c.YEAR, i.this.f23129h);
            put(dl.c.MONTH, i.this.f23128g);
            put(dl.c.DATE, i.this.f23127f);
            put(dl.c.HOUR, i.this.f23123b);
            put(dl.c.MINUTE, i.this.f23125d);
            put(dl.c.AM_PM, i.this.f23126e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(n nVar, View view) {
        this.f23122a = nVar;
        this.f23130i = view;
        this.f23131j = new fl.b(view);
        this.f23129h = new hl.h(w(k.f16689i), nVar);
        this.f23128g = new hl.f(w(k.f16686f), nVar);
        this.f23127f = new hl.b(w(k.f16682b), nVar);
        this.f23124c = new hl.c(w(k.f16683c), nVar);
        this.f23125d = new hl.e(w(k.f16685e), nVar);
        this.f23126e = new hl.a(w(k.f16681a), nVar);
        this.f23123b = new hl.d(w(k.f16684d), nVar);
        m();
    }

    private void i() {
        Iterator it = this.f23122a.f16717o.b().iterator();
        while (it.hasNext()) {
            this.f23131j.a(y((dl.c) it.next()).f25951d.getView());
        }
    }

    private void m() {
        this.f23123b.f25951d.setOnValueChangeListenerInScrolling(new a());
    }

    private List n() {
        return new ArrayList(Arrays.asList(this.f23129h, this.f23128g, this.f23127f, this.f23124c, this.f23123b, this.f23125d, this.f23126e));
    }

    private String o() {
        ArrayList v10 = v();
        if (this.f23122a.z() == dl.b.date) {
            return ((hl.g) v10.get(0)).e() + " " + ((hl.g) v10.get(1)).e() + " " + ((hl.g) v10.get(2)).e();
        }
        return this.f23124c.e();
    }

    private String p(int i10) {
        ArrayList v10 = v();
        StringBuilder sb2 = new StringBuilder();
        for (int i11 = 0; i11 < 3; i11++) {
            if (i11 != 0) {
                sb2.append(" ");
            }
            hl.g gVar = (hl.g) v10.get(i11);
            if (gVar instanceof hl.b) {
                sb2.append(gVar.i(i10));
            } else {
                sb2.append(gVar.l());
            }
        }
        return sb2.toString();
    }

    private String q(int i10) {
        if (this.f23122a.z() == dl.b.date) {
            return p(i10);
        }
        return this.f23124c.l();
    }

    private ArrayList v() {
        ArrayList arrayList = new ArrayList();
        Iterator it = this.f23122a.f16717o.b().iterator();
        while (it.hasNext()) {
            arrayList.add(y((dl.c) it.next()));
        }
        return arrayList;
    }

    private com.henninghall.date_picker.pickers.a w(int i10) {
        return (com.henninghall.date_picker.pickers.a) this.f23130i.findViewById(i10);
    }

    private HashMap z() {
        return new b();
    }

    public boolean A() {
        for (hl.g gVar : n()) {
            if (gVar.f25951d.c()) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B() {
        this.f23131j.b();
        i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j(gl.h hVar) {
        for (hl.g gVar : n()) {
            hVar.a(gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(gl.h hVar) {
        for (hl.g gVar : n()) {
            if (!gVar.u()) {
                hVar.a(gVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(gl.h hVar) {
        for (hl.g gVar : n()) {
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
            sb2.append(((hl.g) it.next()).b());
        }
        return sb2.toString();
    }

    public String u() {
        return o() + " " + this.f23123b.e() + " " + this.f23125d.e() + this.f23126e.e();
    }

    String x() {
        return this.f23123b.l() + " " + this.f23125d.l() + this.f23126e.l();
    }

    hl.g y(dl.c cVar) {
        return (hl.g) this.f23132k.get(cVar);
    }
}
