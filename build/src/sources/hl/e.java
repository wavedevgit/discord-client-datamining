package hl;

import android.view.View;
import com.henninghall.date_picker.n;
import java.text.SimpleDateFormat;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final n f26184a;

    /* renamed from: b  reason: collision with root package name */
    private final View f26185b;

    /* renamed from: c  reason: collision with root package name */
    private i f26186c;

    /* renamed from: d  reason: collision with root package name */
    private h f26187d = new h();

    /* renamed from: e  reason: collision with root package name */
    private g f26188e;

    public e(n nVar, View view) {
        this.f26184a = nVar;
        this.f26185b = view;
        this.f26186c = new i(nVar, view);
        a();
    }

    private void a() {
        g gVar = new g(this.f26186c, this.f26184a, this, this.f26185b);
        this.f26188e = gVar;
        this.f26186c.j(new il.a(gVar));
    }

    public void b(d dVar) {
        this.f26188e.c(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Calendar calendar) {
        this.f26186c.k(new il.d(calendar));
        this.f26186c.l(new il.b(calendar));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleDateFormat d() {
        return new SimpleDateFormat(this.f26186c.u(), this.f26184a.u());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String e() {
        return this.f26186c.t();
    }

    public void f(String str) {
        this.f26186c.j(new il.e(str));
    }

    public void g() {
        this.f26186c.j(new il.d(this.f26184a.A()));
    }

    public void h() {
        this.f26186c.j(new il.c());
    }

    public void i(Calendar calendar) {
        this.f26184a.E(calendar);
    }

    public void j() {
        this.f26186c.j(new il.f(this.f26184a.C()));
    }

    public void k() {
        this.f26186c.B();
    }

    public void l() {
        this.f26186c.j(new il.g());
    }
}
