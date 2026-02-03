package cl;

import android.view.View;
import com.henninghall.date_picker.n;
import java.text.SimpleDateFormat;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final n f7297a;

    /* renamed from: b  reason: collision with root package name */
    private final View f7298b;

    /* renamed from: c  reason: collision with root package name */
    private i f7299c;

    /* renamed from: d  reason: collision with root package name */
    private h f7300d = new h();

    /* renamed from: e  reason: collision with root package name */
    private g f7301e;

    public e(n nVar, View view) {
        this.f7297a = nVar;
        this.f7298b = view;
        this.f7299c = new i(nVar, view);
        a();
    }

    private void a() {
        g gVar = new g(this.f7299c, this.f7297a, this, this.f7298b);
        this.f7301e = gVar;
        this.f7299c.j(new dl.a(gVar));
    }

    public void b(d dVar) {
        this.f7301e.c(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Calendar calendar) {
        this.f7299c.k(new dl.d(calendar));
        this.f7299c.l(new dl.b(calendar));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleDateFormat d() {
        return new SimpleDateFormat(this.f7299c.u(), this.f7297a.u());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String e() {
        return this.f7299c.t();
    }

    public void f(String str) {
        this.f7299c.j(new dl.e(str));
    }

    public void g() {
        this.f7299c.j(new dl.d(this.f7297a.A()));
    }

    public void h() {
        this.f7299c.j(new dl.c());
    }

    public void i(Calendar calendar) {
        this.f7297a.E(calendar);
    }

    public void j() {
        this.f7299c.j(new dl.f(this.f7297a.C()));
    }

    public void k() {
        this.f7299c.B();
    }

    public void l() {
        this.f7299c.j(new dl.g());
    }
}
