package fl;

import android.view.View;
import com.henninghall.date_picker.n;
import java.text.SimpleDateFormat;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final n f23111a;

    /* renamed from: b  reason: collision with root package name */
    private final View f23112b;

    /* renamed from: c  reason: collision with root package name */
    private i f23113c;

    /* renamed from: d  reason: collision with root package name */
    private h f23114d = new h();

    /* renamed from: e  reason: collision with root package name */
    private g f23115e;

    public e(n nVar, View view) {
        this.f23111a = nVar;
        this.f23112b = view;
        this.f23113c = new i(nVar, view);
        a();
    }

    private void a() {
        g gVar = new g(this.f23113c, this.f23111a, this, this.f23112b);
        this.f23115e = gVar;
        this.f23113c.j(new gl.a(gVar));
    }

    public void b(d dVar) {
        this.f23115e.c(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Calendar calendar) {
        this.f23113c.k(new gl.d(calendar));
        this.f23113c.l(new gl.b(calendar));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleDateFormat d() {
        return new SimpleDateFormat(this.f23113c.u(), this.f23111a.u());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String e() {
        return this.f23113c.t();
    }

    public void f(String str) {
        this.f23113c.j(new gl.e(str));
    }

    public void g() {
        this.f23113c.j(new gl.d(this.f23111a.A()));
    }

    public void h() {
        this.f23113c.j(new gl.c());
    }

    public void i(Calendar calendar) {
        this.f23111a.E(calendar);
    }

    public void j() {
        this.f23113c.j(new gl.f(this.f23111a.C()));
    }

    public void k() {
        this.f23113c.B();
    }

    public void l() {
        this.f23113c.j(new gl.g());
    }
}
