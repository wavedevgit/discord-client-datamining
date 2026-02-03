package cl;

import android.view.View;
import com.henninghall.date_picker.n;
import java.text.SimpleDateFormat;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final n f8310a;

    /* renamed from: b  reason: collision with root package name */
    private final View f8311b;

    /* renamed from: c  reason: collision with root package name */
    private i f8312c;

    /* renamed from: d  reason: collision with root package name */
    private h f8313d = new h();

    /* renamed from: e  reason: collision with root package name */
    private g f8314e;

    public e(n nVar, View view) {
        this.f8310a = nVar;
        this.f8311b = view;
        this.f8312c = new i(nVar, view);
        a();
    }

    private void a() {
        g gVar = new g(this.f8312c, this.f8310a, this, this.f8311b);
        this.f8314e = gVar;
        this.f8312c.j(new dl.a(gVar));
    }

    public void b(d dVar) {
        this.f8314e.c(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Calendar calendar) {
        this.f8312c.k(new dl.d(calendar));
        this.f8312c.l(new dl.b(calendar));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleDateFormat d() {
        return new SimpleDateFormat(this.f8312c.u(), this.f8310a.u());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String e() {
        return this.f8312c.t();
    }

    public void f(String str) {
        this.f8312c.j(new dl.e(str));
    }

    public void g() {
        this.f8312c.j(new dl.d(this.f8310a.A()));
    }

    public void h() {
        this.f8312c.j(new dl.c());
    }

    public void i(Calendar calendar) {
        this.f8310a.E(calendar);
    }

    public void j() {
        this.f8312c.j(new dl.f(this.f8310a.C()));
    }

    public void k() {
        this.f8312c.B();
    }

    public void l() {
        this.f8312c.j(new dl.g());
    }
}
