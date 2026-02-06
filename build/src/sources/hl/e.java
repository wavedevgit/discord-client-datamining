package hl;

import android.view.View;
import com.henninghall.date_picker.n;
import java.text.SimpleDateFormat;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final n f26136a;

    /* renamed from: b  reason: collision with root package name */
    private final View f26137b;

    /* renamed from: c  reason: collision with root package name */
    private i f26138c;

    /* renamed from: d  reason: collision with root package name */
    private h f26139d = new h();

    /* renamed from: e  reason: collision with root package name */
    private g f26140e;

    public e(n nVar, View view) {
        this.f26136a = nVar;
        this.f26137b = view;
        this.f26138c = new i(nVar, view);
        a();
    }

    private void a() {
        g gVar = new g(this.f26138c, this.f26136a, this, this.f26137b);
        this.f26140e = gVar;
        this.f26138c.j(new il.a(gVar));
    }

    public void b(d dVar) {
        this.f26140e.c(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Calendar calendar) {
        this.f26138c.k(new il.d(calendar));
        this.f26138c.l(new il.b(calendar));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleDateFormat d() {
        return new SimpleDateFormat(this.f26138c.u(), this.f26136a.u());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String e() {
        return this.f26138c.t();
    }

    public void f(String str) {
        this.f26138c.j(new il.e(str));
    }

    public void g() {
        this.f26138c.j(new il.d(this.f26136a.A()));
    }

    public void h() {
        this.f26138c.j(new il.c());
    }

    public void i(Calendar calendar) {
        this.f26136a.E(calendar);
    }

    public void j() {
        this.f26138c.j(new il.f(this.f26136a.C()));
    }

    public void k() {
        this.f26138c.B();
    }

    public void l() {
        this.f26138c.j(new il.g());
    }
}
