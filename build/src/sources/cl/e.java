package cl;

import android.view.View;
import com.henninghall.date_picker.n;
import java.text.SimpleDateFormat;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final n f8454a;

    /* renamed from: b  reason: collision with root package name */
    private final View f8455b;

    /* renamed from: c  reason: collision with root package name */
    private i f8456c;

    /* renamed from: d  reason: collision with root package name */
    private h f8457d = new h();

    /* renamed from: e  reason: collision with root package name */
    private g f8458e;

    public e(n nVar, View view) {
        this.f8454a = nVar;
        this.f8455b = view;
        this.f8456c = new i(nVar, view);
        a();
    }

    private void a() {
        g gVar = new g(this.f8456c, this.f8454a, this, this.f8455b);
        this.f8458e = gVar;
        this.f8456c.j(new dl.a(gVar));
    }

    public void b(d dVar) {
        this.f8458e.c(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Calendar calendar) {
        this.f8456c.k(new dl.d(calendar));
        this.f8456c.l(new dl.b(calendar));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleDateFormat d() {
        return new SimpleDateFormat(this.f8456c.u(), this.f8454a.u());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String e() {
        return this.f8456c.t();
    }

    public void f(String str) {
        this.f8456c.j(new dl.e(str));
    }

    public void g() {
        this.f8456c.j(new dl.d(this.f8454a.A()));
    }

    public void h() {
        this.f8456c.j(new dl.c());
    }

    public void i(Calendar calendar) {
        this.f8454a.E(calendar);
    }

    public void j() {
        this.f8456c.j(new dl.f(this.f8454a.C()));
    }

    public void k() {
        this.f8456c.B();
    }

    public void l() {
        this.f8456c.j(new dl.g());
    }
}
