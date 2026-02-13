package kl;

import android.view.View;
import com.henninghall.date_picker.n;
import java.text.SimpleDateFormat;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final n f32456a;

    /* renamed from: b  reason: collision with root package name */
    private final View f32457b;

    /* renamed from: c  reason: collision with root package name */
    private i f32458c;

    /* renamed from: d  reason: collision with root package name */
    private h f32459d = new h();

    /* renamed from: e  reason: collision with root package name */
    private g f32460e;

    public e(n nVar, View view) {
        this.f32456a = nVar;
        this.f32457b = view;
        this.f32458c = new i(nVar, view);
        a();
    }

    private void a() {
        g gVar = new g(this.f32458c, this.f32456a, this, this.f32457b);
        this.f32460e = gVar;
        this.f32458c.j(new ll.a(gVar));
    }

    public void b(d dVar) {
        this.f32460e.c(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Calendar calendar) {
        this.f32458c.k(new ll.d(calendar));
        this.f32458c.l(new ll.b(calendar));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleDateFormat d() {
        return new SimpleDateFormat(this.f32458c.u(), this.f32456a.u());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String e() {
        return this.f32458c.t();
    }

    public void f(String str) {
        this.f32458c.j(new ll.e(str));
    }

    public void g() {
        this.f32458c.j(new ll.d(this.f32456a.A()));
    }

    public void h() {
        this.f32458c.j(new ll.c());
    }

    public void i(Calendar calendar) {
        this.f32456a.E(calendar);
    }

    public void j() {
        this.f32458c.j(new ll.f(this.f32456a.C()));
    }

    public void k() {
        this.f32458c.B();
    }

    public void l() {
        this.f32458c.j(new ll.g());
    }
}
