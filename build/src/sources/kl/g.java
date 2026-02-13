package kl;

import android.view.View;
import com.henninghall.date_picker.n;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashSet;
import java.util.Set;
import java.util.TimeZone;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g implements f {

    /* renamed from: a  reason: collision with root package name */
    private final i f32461a;

    /* renamed from: b  reason: collision with root package name */
    private final n f32462b;

    /* renamed from: c  reason: collision with root package name */
    private final e f32463c;

    /* renamed from: d  reason: collision with root package name */
    private final View f32464d;

    /* renamed from: e  reason: collision with root package name */
    private c f32465e;

    /* renamed from: f  reason: collision with root package name */
    private Set f32466f = new HashSet();

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(i iVar, n nVar, e eVar, View view) {
        this.f32461a = iVar;
        this.f32463c = eVar;
        this.f32462b = nVar;
        this.f32464d = view;
    }

    private boolean d() {
        SimpleDateFormat f10 = f();
        String r10 = this.f32461a.r();
        try {
            f10.setLenient(false);
            f10.parse(r10);
            return true;
        } catch (ParseException unused) {
            return false;
        }
    }

    private Calendar e() {
        SimpleDateFormat f10 = f();
        f10.setLenient(false);
        for (int i10 = 0; i10 < 10; i10++) {
            try {
                String s10 = this.f32461a.s(i10);
                Calendar calendar = Calendar.getInstance(this.f32462b.D());
                calendar.setTime(f10.parse(s10));
                return calendar;
            } catch (ParseException unused) {
            }
        }
        return null;
    }

    private SimpleDateFormat f() {
        TimeZone D = this.f32462b.D();
        SimpleDateFormat d10 = this.f32463c.d();
        d10.setTimeZone(D);
        return d10;
    }

    private Calendar g() {
        SimpleDateFormat f10 = f();
        String r10 = this.f32461a.r();
        Calendar calendar = Calendar.getInstance(this.f32462b.D());
        try {
            f10.setLenient(true);
            calendar.setTime(f10.parse(r10));
            return calendar;
        } catch (ParseException e10) {
            e10.printStackTrace();
            return null;
        }
    }

    @Override // kl.f
    public void a(ml.g gVar) {
        c cVar;
        if (this.f32461a.A()) {
            cVar = c.spinning;
        } else {
            cVar = c.idle;
        }
        if (!cVar.equals(this.f32465e)) {
            this.f32465e = cVar;
            com.henninghall.date_picker.e.e(cVar, this.f32462b.q(), this.f32464d);
            for (d dVar : this.f32466f) {
                dVar.a(cVar);
            }
        }
    }

    @Override // kl.f
    public void b(ml.g gVar) {
        if (!this.f32461a.A()) {
            if (!d()) {
                Calendar e10 = e();
                if (e10 != null) {
                    this.f32463c.c(e10);
                    return;
                }
                return;
            }
            Calendar g10 = g();
            if (g10 == null) {
                return;
            }
            Calendar x10 = this.f32462b.x();
            if (x10 != null && g10.before(x10)) {
                this.f32463c.c(x10);
                return;
            }
            Calendar w10 = this.f32462b.w();
            if (w10 != null && g10.after(w10)) {
                this.f32463c.c(w10);
                return;
            }
            String e11 = this.f32463c.e();
            this.f32463c.i(g10);
            com.henninghall.date_picker.e.d(g10, e11, this.f32462b.q(), this.f32464d);
        }
    }

    public void c(d dVar) {
        this.f32466f.add(dVar);
    }
}
