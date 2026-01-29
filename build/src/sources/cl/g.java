package cl;

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
    private final i f8459a;

    /* renamed from: b  reason: collision with root package name */
    private final n f8460b;

    /* renamed from: c  reason: collision with root package name */
    private final e f8461c;

    /* renamed from: d  reason: collision with root package name */
    private final View f8462d;

    /* renamed from: e  reason: collision with root package name */
    private c f8463e;

    /* renamed from: f  reason: collision with root package name */
    private Set f8464f = new HashSet();

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(i iVar, n nVar, e eVar, View view) {
        this.f8459a = iVar;
        this.f8461c = eVar;
        this.f8460b = nVar;
        this.f8462d = view;
    }

    private boolean d() {
        SimpleDateFormat f10 = f();
        String r10 = this.f8459a.r();
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
                String s10 = this.f8459a.s(i10);
                Calendar calendar = Calendar.getInstance(this.f8460b.D());
                calendar.setTime(f10.parse(s10));
                return calendar;
            } catch (ParseException unused) {
            }
        }
        return null;
    }

    private SimpleDateFormat f() {
        TimeZone D = this.f8460b.D();
        SimpleDateFormat d10 = this.f8461c.d();
        d10.setTimeZone(D);
        return d10;
    }

    private Calendar g() {
        SimpleDateFormat f10 = f();
        String r10 = this.f8459a.r();
        Calendar calendar = Calendar.getInstance(this.f8460b.D());
        try {
            f10.setLenient(true);
            calendar.setTime(f10.parse(r10));
            return calendar;
        } catch (ParseException e10) {
            e10.printStackTrace();
            return null;
        }
    }

    @Override // cl.f
    public void a(el.g gVar) {
        c cVar;
        if (this.f8459a.A()) {
            cVar = c.spinning;
        } else {
            cVar = c.idle;
        }
        if (!cVar.equals(this.f8463e)) {
            this.f8463e = cVar;
            com.henninghall.date_picker.e.e(cVar, this.f8460b.q(), this.f8462d);
            for (d dVar : this.f8464f) {
                dVar.a(cVar);
            }
        }
    }

    @Override // cl.f
    public void b(el.g gVar) {
        if (!this.f8459a.A()) {
            if (!d()) {
                Calendar e10 = e();
                if (e10 != null) {
                    this.f8461c.c(e10);
                    return;
                }
                return;
            }
            Calendar g10 = g();
            if (g10 == null) {
                return;
            }
            Calendar x10 = this.f8460b.x();
            if (x10 != null && g10.before(x10)) {
                this.f8461c.c(x10);
                return;
            }
            Calendar w10 = this.f8460b.w();
            if (w10 != null && g10.after(w10)) {
                this.f8461c.c(w10);
                return;
            }
            String e11 = this.f8461c.e();
            this.f8461c.i(g10);
            com.henninghall.date_picker.e.d(g10, e11, this.f8460b.q(), this.f8462d);
        }
    }

    public void c(d dVar) {
        this.f8464f.add(dVar);
    }
}
