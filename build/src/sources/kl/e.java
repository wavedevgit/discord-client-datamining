package kl;

import android.view.View;
import com.henninghall.date_picker.n;
import java.text.SimpleDateFormat;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final n f31887a;

    /* renamed from: b  reason: collision with root package name */
    private final View f31888b;

    /* renamed from: c  reason: collision with root package name */
    private i f31889c;

    /* renamed from: d  reason: collision with root package name */
    private h f31890d = new h();

    /* renamed from: e  reason: collision with root package name */
    private g f31891e;

    public e(n nVar, View view) {
        this.f31887a = nVar;
        this.f31888b = view;
        this.f31889c = new i(nVar, view);
        a();
    }

    private void a() {
        g gVar = new g(this.f31889c, this.f31887a, this, this.f31888b);
        this.f31891e = gVar;
        this.f31889c.j(new ll.a(gVar));
    }

    public void b(d dVar) {
        this.f31891e.c(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Calendar calendar) {
        this.f31889c.k(new ll.d(calendar));
        this.f31889c.l(new ll.b(calendar));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleDateFormat d() {
        return new SimpleDateFormat(this.f31889c.u(), this.f31887a.u());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String e() {
        return this.f31889c.t();
    }

    public void f(String str) {
        this.f31889c.j(new ll.e(str));
    }

    public void g() {
        this.f31889c.j(new ll.d(this.f31887a.A()));
    }

    public void h() {
        this.f31889c.j(new ll.c());
    }

    public void i(Calendar calendar) {
        this.f31887a.E(calendar);
    }

    public void j() {
        this.f31889c.j(new ll.f(this.f31887a.C()));
    }

    public void k() {
        this.f31889c.B();
    }

    public void l() {
        this.f31889c.j(new ll.g());
    }
}
