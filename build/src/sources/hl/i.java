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
    private final n f26195a;

    /* renamed from: b  reason: collision with root package name */
    private jl.d f26196b;

    /* renamed from: c  reason: collision with root package name */
    private jl.c f26197c;

    /* renamed from: d  reason: collision with root package name */
    private jl.e f26198d;

    /* renamed from: e  reason: collision with root package name */
    private jl.a f26199e;

    /* renamed from: f  reason: collision with root package name */
    private jl.b f26200f;

    /* renamed from: g  reason: collision with root package name */
    private jl.f f26201g;

    /* renamed from: h  reason: collision with root package name */
    private jl.h f26202h;

    /* renamed from: i  reason: collision with root package name */
    private View f26203i;

    /* renamed from: j  reason: collision with root package name */
    private final hl.b f26204j;

    /* renamed from: k  reason: collision with root package name */
    private HashMap f26205k = z();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements a.b {
        a() {
        }

        @Override // com.henninghall.date_picker.pickers.a.b
        public void a(com.henninghall.date_picker.pickers.a aVar, int i10, int i11) {
            if (i.this.f26195a.f16697o.g()) {
                String m10 = i.this.f26196b.m(i10);
                String m11 = i.this.f26196b.m(i11);
                if ((m10.equals("12") && m11.equals("11")) || (m10.equals("11") && m11.equals("12"))) {
                    i.this.f26199e.f29995d.a((i.this.f26199e.f29995d.getValue() + 1) % 2, false);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends HashMap {
        b() {
            put(fl.c.DAY, i.this.f26197c);
            put(fl.c.YEAR, i.this.f26202h);
            put(fl.c.MONTH, i.this.f26201g);
            put(fl.c.DATE, i.this.f26200f);
            put(fl.c.HOUR, i.this.f26196b);
            put(fl.c.MINUTE, i.this.f26198d);
            put(fl.c.AM_PM, i.this.f26199e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(n nVar, View view) {
        this.f26195a = nVar;
        this.f26203i = view;
        this.f26204j = new hl.b(view);
        this.f26202h = new jl.h(w(k.f16669i), nVar);
        this.f26201g = new jl.f(w(k.f16666f), nVar);
        this.f26200f = new jl.b(w(k.f16662b), nVar);
        this.f26197c = new jl.c(w(k.f16663c), nVar);
        this.f26198d = new jl.e(w(k.f16665e), nVar);
        this.f26199e = new jl.a(w(k.f16661a), nVar);
        this.f26196b = new jl.d(w(k.f16664d), nVar);
        m();
    }

    private void i() {
        Iterator it = this.f26195a.f16697o.b().iterator();
        while (it.hasNext()) {
            this.f26204j.a(y((fl.c) it.next()).f29995d.getView());
        }
    }

    private void m() {
        this.f26196b.f29995d.setOnValueChangeListenerInScrolling(new a());
    }

    private List n() {
        return new ArrayList(Arrays.asList(this.f26202h, this.f26201g, this.f26200f, this.f26197c, this.f26196b, this.f26198d, this.f26199e));
    }

    private String o() {
        ArrayList v10 = v();
        if (this.f26195a.z() == fl.b.date) {
            return ((jl.g) v10.get(0)).e() + " " + ((jl.g) v10.get(1)).e() + " " + ((jl.g) v10.get(2)).e();
        }
        return this.f26197c.e();
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
        if (this.f26195a.z() == fl.b.date) {
            return p(i10);
        }
        return this.f26197c.l();
    }

    private ArrayList v() {
        ArrayList arrayList = new ArrayList();
        Iterator it = this.f26195a.f16697o.b().iterator();
        while (it.hasNext()) {
            arrayList.add(y((fl.c) it.next()));
        }
        return arrayList;
    }

    private com.henninghall.date_picker.pickers.a w(int i10) {
        return (com.henninghall.date_picker.pickers.a) this.f26203i.findViewById(i10);
    }

    private HashMap z() {
        return new b();
    }

    public boolean A() {
        for (jl.g gVar : n()) {
            if (gVar.f29995d.c()) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B() {
        this.f26204j.b();
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
        return o() + " " + this.f26196b.e() + " " + this.f26198d.e() + this.f26199e.e();
    }

    String x() {
        return this.f26196b.l() + " " + this.f26198d.l() + this.f26199e.l();
    }

    jl.g y(fl.c cVar) {
        return (jl.g) this.f26205k.get(cVar);
    }
}
