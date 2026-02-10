package il;

import android.view.View;
import com.henninghall.date_picker.n;
import java.text.SimpleDateFormat;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final n f26999a;

    /* renamed from: b  reason: collision with root package name */
    private final View f27000b;

    /* renamed from: c  reason: collision with root package name */
    private i f27001c;

    /* renamed from: d  reason: collision with root package name */
    private h f27002d = new h();

    /* renamed from: e  reason: collision with root package name */
    private g f27003e;

    public e(n nVar, View view) {
        this.f26999a = nVar;
        this.f27000b = view;
        this.f27001c = new i(nVar, view);
        a();
    }

    private void a() {
        g gVar = new g(this.f27001c, this.f26999a, this, this.f27000b);
        this.f27003e = gVar;
        this.f27001c.j(new jl.a(gVar));
    }

    public void b(d dVar) {
        this.f27003e.c(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Calendar calendar) {
        this.f27001c.k(new jl.d(calendar));
        this.f27001c.l(new jl.b(calendar));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleDateFormat d() {
        return new SimpleDateFormat(this.f27001c.u(), this.f26999a.u());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String e() {
        return this.f27001c.t();
    }

    public void f(String str) {
        this.f27001c.j(new jl.e(str));
    }

    public void g() {
        this.f27001c.j(new jl.d(this.f26999a.A()));
    }

    public void h() {
        this.f27001c.j(new jl.c());
    }

    public void i(Calendar calendar) {
        this.f26999a.E(calendar);
    }

    public void j() {
        this.f27001c.j(new jl.f(this.f26999a.C()));
    }

    public void k() {
        this.f27001c.B();
    }

    public void l() {
        this.f27001c.j(new jl.g());
    }
}
