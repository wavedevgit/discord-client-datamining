package kl;

import android.view.View;
import com.henninghall.date_picker.n;
import java.text.SimpleDateFormat;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final n f31888a;

    /* renamed from: b  reason: collision with root package name */
    private final View f31889b;

    /* renamed from: c  reason: collision with root package name */
    private i f31890c;

    /* renamed from: d  reason: collision with root package name */
    private h f31891d = new h();

    /* renamed from: e  reason: collision with root package name */
    private g f31892e;

    public e(n nVar, View view) {
        this.f31888a = nVar;
        this.f31889b = view;
        this.f31890c = new i(nVar, view);
        a();
    }

    private void a() {
        g gVar = new g(this.f31890c, this.f31888a, this, this.f31889b);
        this.f31892e = gVar;
        this.f31890c.j(new ll.a(gVar));
    }

    public void b(d dVar) {
        this.f31892e.c(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Calendar calendar) {
        this.f31890c.k(new ll.d(calendar));
        this.f31890c.l(new ll.b(calendar));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleDateFormat d() {
        return new SimpleDateFormat(this.f31890c.u(), this.f31888a.u());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String e() {
        return this.f31890c.t();
    }

    public void f(String str) {
        this.f31890c.j(new ll.e(str));
    }

    public void g() {
        this.f31890c.j(new ll.d(this.f31888a.A()));
    }

    public void h() {
        this.f31890c.j(new ll.c());
    }

    public void i(Calendar calendar) {
        this.f31888a.E(calendar);
    }

    public void j() {
        this.f31890c.j(new ll.f(this.f31888a.C()));
    }

    public void k() {
        this.f31890c.B();
    }

    public void l() {
        this.f31890c.j(new ll.g());
    }
}
