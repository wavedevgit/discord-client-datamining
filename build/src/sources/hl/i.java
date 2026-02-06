package hl;

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
    private final n f26147a;

    /* renamed from: b  reason: collision with root package name */
    private jl.d f26148b;

    /* renamed from: c  reason: collision with root package name */
    private jl.c f26149c;

    /* renamed from: d  reason: collision with root package name */
    private jl.e f26150d;

    /* renamed from: e  reason: collision with root package name */
    private jl.a f26151e;

    /* renamed from: f  reason: collision with root package name */
    private jl.b f26152f;

    /* renamed from: g  reason: collision with root package name */
    private jl.f f26153g;

    /* renamed from: h  reason: collision with root package name */
    private jl.h f26154h;

    /* renamed from: i  reason: collision with root package name */
    private View f26155i;

    /* renamed from: j  reason: collision with root package name */
    private final hl.b f26156j;

    /* renamed from: k  reason: collision with root package name */
    private HashMap f26157k = z();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements a.b {
        a() {
        }

        @Override // com.henninghall.date_picker.pickers.a.b
        public void a(com.henninghall.date_picker.pickers.a aVar, int i10, int i11) {
            if (i.this.f26147a.f16697o.g()) {
                String m10 = i.this.f26148b.m(i10);
                String m11 = i.this.f26148b.m(i11);
                if ((m10.equals("12") && m11.equals("11")) || (m10.equals("11") && m11.equals("12"))) {
                    i.this.f26151e.f29947d.a((i.this.f26151e.f29947d.getValue() + 1) % 2, false);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends HashMap {
        b() {
            put(fl.c.DAY, i.this.f26149c);
            put(fl.c.YEAR, i.this.f26154h);
            put(fl.c.MONTH, i.this.f26153g);
            put(fl.c.DATE, i.this.f26152f);
            put(fl.c.HOUR, i.this.f26148b);
            put(fl.c.MINUTE, i.this.f26150d);
            put(fl.c.AM_PM, i.this.f26151e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(n nVar, View view) {
        this.f26147a = nVar;
        this.f26155i = view;
        this.f26156j = new hl.b(view);
        this.f26154h = new jl.h(w(k.f16669i), nVar);
        this.f26153g = new jl.f(w(k.f16666f), nVar);
        this.f26152f = new jl.b(w(k.f16662b), nVar);
        this.f26149c = new jl.c(w(k.f16663c), nVar);
        this.f26150d = new jl.e(w(k.f16665e), nVar);
        this.f26151e = new jl.a(w(k.f16661a), nVar);
        this.f26148b = new jl.d(w(k.f16664d), nVar);
        m();
    }

    private void i() {
        Iterator it = this.f26147a.f16697o.b().iterator();
        while (it.hasNext()) {
            this.f26156j.a(y((fl.c) it.next()).f29947d.getView());
        }
    }

    private void m() {
        this.f26148b.f29947d.setOnValueChangeListenerInScrolling(new a());
    }

    private List n() {
        return new ArrayList(Arrays.asList(this.f26154h, this.f26153g, this.f26152f, this.f26149c, this.f26148b, this.f26150d, this.f26151e));
    }

    private String o() {
        ArrayList v10 = v();
        if (this.f26147a.z() == fl.b.date) {
            return ((jl.g) v10.get(0)).e() + " " + ((jl.g) v10.get(1)).e() + " " + ((jl.g) v10.get(2)).e();
        }
        return this.f26149c.e();
    }

    private String p(int i10) {
        ArrayList v10 = v();
        StringBuilder sb2 = new StringBuilder();
        for (int i11 = 0; i11 < 3; i11++) {
            if (i11 != 0) {
                sb2.append(" ");
            }
            jl.g gVar = (jl.g) v10.get(i11);
            if (gVar instanceof jl.b) {
                sb2.append(gVar.i(i10));
            } else {
                sb2.append(gVar.l());
            }
        }
        return sb2.toString();
    }

    private String q(int i10) {
        if (this.f26147a.z() == fl.b.date) {
            return p(i10);
        }
        return this.f26149c.l();
    }

    private ArrayList v() {
        ArrayList arrayList = new ArrayList();
        Iterator it = this.f26147a.f16697o.b().iterator();
        while (it.hasNext()) {
            arrayList.add(y((fl.c) it.next()));
        }
        return arrayList;
    }

    private com.henninghall.date_picker.pickers.a w(int i10) {
        return (com.henninghall.date_picker.pickers.a) this.f26155i.findViewById(i10);
    }

    private HashMap z() {
        return new b();
    }

    public boolean A() {
        for (jl.g gVar : n()) {
            if (gVar.f29947d.c()) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B() {
        this.f26156j.b();
        i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j(il.h hVar) {
        for (jl.g gVar : n()) {
            hVar.a(gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(il.h hVar) {
        for (jl.g gVar : n()) {
            if (!gVar.u()) {
                hVar.a(gVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(il.h hVar) {
        for (jl.g gVar : n()) {
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
            sb2.append(((jl.g) it.next()).b());
        }
        return sb2.toString();
    }

    public String u() {
        return o() + " " + this.f26148b.e() + " " + this.f26150d.e() + this.f26151e.e();
    }

    String x() {
        return this.f26148b.l() + " " + this.f26150d.l() + this.f26151e.l();
    }

    jl.g y(fl.c cVar) {
        return (jl.g) this.f26157k.get(cVar);
    }
}
