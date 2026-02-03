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
    private final i f7302a;

    /* renamed from: b  reason: collision with root package name */
    private final n f7303b;

    /* renamed from: c  reason: collision with root package name */
    private final e f7304c;

    /* renamed from: d  reason: collision with root package name */
    private final View f7305d;

    /* renamed from: e  reason: collision with root package name */
    private c f7306e;

    /* renamed from: f  reason: collision with root package name */
    private Set f7307f = new HashSet();

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(i iVar, n nVar, e eVar, View view) {
        this.f7302a = iVar;
        this.f7304c = eVar;
        this.f7303b = nVar;
        this.f7305d = view;
    }

    private boolean d() {
        SimpleDateFormat f10 = f();
        String r10 = this.f7302a.r();
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
                String s10 = this.f7302a.s(i10);
                Calendar calendar = Calendar.getInstance(this.f7303b.D());
                calendar.setTime(f10.parse(s10));
                return calendar;
            } catch (ParseException unused) {
            }
        }
        return null;
    }

    private SimpleDateFormat f() {
        TimeZone D = this.f7303b.D();
        SimpleDateFormat d10 = this.f7304c.d();
        d10.setTimeZone(D);
        return d10;
    }

    private Calendar g() {
        SimpleDateFormat f10 = f();
        String r10 = this.f7302a.r();
        Calendar calendar = Calendar.getInstance(this.f7303b.D());
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
        if (this.f7302a.A()) {
            cVar = c.spinning;
        } else {
            cVar = c.idle;
        }
        if (!cVar.equals(this.f7306e)) {
            this.f7306e = cVar;
            com.henninghall.date_picker.e.e(cVar, this.f7303b.q(), this.f7305d);
            for (d dVar : this.f7307f) {
                dVar.a(cVar);
            }
        }
    }

    @Override // cl.f
    public void b(el.g gVar) {
        if (!this.f7302a.A()) {
            if (!d()) {
                Calendar e10 = e();
                if (e10 != null) {
                    this.f7304c.c(e10);
                    return;
                }
                return;
            }
            Calendar g10 = g();
            if (g10 == null) {
                return;
            }
            Calendar x10 = this.f7303b.x();
            if (x10 != null && g10.before(x10)) {
                this.f7304c.c(x10);
                return;
            }
            Calendar w10 = this.f7303b.w();
            if (w10 != null && g10.after(w10)) {
                this.f7304c.c(w10);
                return;
            }
            String e11 = this.f7304c.e();
            this.f7304c.i(g10);
            com.henninghall.date_picker.e.d(g10, e11, this.f7303b.q(), this.f7305d);
        }
    }

    public void c(d dVar) {
        this.f7307f.add(dVar);
    }
}
