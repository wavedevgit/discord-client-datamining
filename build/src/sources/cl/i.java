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
    private final n f8465a;

    /* renamed from: b  reason: collision with root package name */
    private el.d f8466b;

    /* renamed from: c  reason: collision with root package name */
    private el.c f8467c;

    /* renamed from: d  reason: collision with root package name */
    private el.e f8468d;

    /* renamed from: e  reason: collision with root package name */
    private el.a f8469e;

    /* renamed from: f  reason: collision with root package name */
    private el.b f8470f;

    /* renamed from: g  reason: collision with root package name */
    private el.f f8471g;

    /* renamed from: h  reason: collision with root package name */
    private el.h f8472h;

    /* renamed from: i  reason: collision with root package name */
    private View f8473i;

    /* renamed from: j  reason: collision with root package name */
    private final cl.b f8474j;

    /* renamed from: k  reason: collision with root package name */
    private HashMap f8475k = z();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements a.b {
        a() {
        }

        @Override // com.henninghall.date_picker.pickers.a.b
        public void a(com.henninghall.date_picker.pickers.a aVar, int i10, int i11) {
            if (i.this.f8465a.f17726o.g()) {
                String m10 = i.this.f8466b.m(i10);
                String m11 = i.this.f8466b.m(i11);
                if ((m10.equals("12") && m11.equals("11")) || (m10.equals("11") && m11.equals("12"))) {
                    i.this.f8469e.f22916d.a((i.this.f8469e.f22916d.getValue() + 1) % 2, false);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends HashMap {
        b() {
            put(al.c.DAY, i.this.f8467c);
            put(al.c.YEAR, i.this.f8472h);
            put(al.c.MONTH, i.this.f8471g);
            put(al.c.DATE, i.this.f8470f);
            put(al.c.HOUR, i.this.f8466b);
            put(al.c.MINUTE, i.this.f8468d);
            put(al.c.AM_PM, i.this.f8469e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(n nVar, View view) {
        this.f8465a = nVar;
        this.f8473i = view;
        this.f8474j = new cl.b(view);
        this.f8472h = new el.h(w(k.f17698i), nVar);
        this.f8471g = new el.f(w(k.f17695f), nVar);
        this.f8470f = new el.b(w(k.f17691b), nVar);
        this.f8467c = new el.c(w(k.f17692c), nVar);
        this.f8468d = new el.e(w(k.f17694e), nVar);
        this.f8469e = new el.a(w(k.f17690a), nVar);
        this.f8466b = new el.d(w(k.f17693d), nVar);
        m();
    }

    private void i() {
        Iterator it = this.f8465a.f17726o.b().iterator();
        while (it.hasNext()) {
            this.f8474j.a(y((al.c) it.next()).f22916d.getView());
        }
    }

    private void m() {
        this.f8466b.f22916d.setOnValueChangeListenerInScrolling(new a());
    }

    private List n() {
        return new ArrayList(Arrays.asList(this.f8472h, this.f8471g, this.f8470f, this.f8467c, this.f8466b, this.f8468d, this.f8469e));
    }

    private String o() {
        ArrayList v10 = v();
        if (this.f8465a.z() == al.b.date) {
            return ((el.g) v10.get(0)).e() + " " + ((el.g) v10.get(1)).e() + " " + ((el.g) v10.get(2)).e();
        }
        return this.f8467c.e();
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
        if (this.f8465a.z() == al.b.date) {
            return p(i10);
        }
        return this.f8467c.l();
    }

    private ArrayList v() {
        ArrayList arrayList = new ArrayList();
        Iterator it = this.f8465a.f17726o.b().iterator();
        while (it.hasNext()) {
            arrayList.add(y((al.c) it.next()));
        }
        return arrayList;
    }

    private com.henninghall.date_picker.pickers.a w(int i10) {
        return (com.henninghall.date_picker.pickers.a) this.f8473i.findViewById(i10);
    }

    private HashMap z() {
        return new b();
    }

    public boolean A() {
        for (el.g gVar : n()) {
            if (gVar.f22916d.c()) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B() {
        this.f8474j.b();
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
        return o() + " " + this.f8466b.e() + " " + this.f8468d.e() + this.f8469e.e();
    }

    String x() {
        return this.f8466b.l() + " " + this.f8468d.l() + this.f8469e.l();
    }

    el.g y(al.c cVar) {
        return (el.g) this.f8475k.get(cVar);
    }
}
