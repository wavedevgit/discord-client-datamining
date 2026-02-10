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
    private final i f31892a;

    /* renamed from: b  reason: collision with root package name */
    private final n f31893b;

    /* renamed from: c  reason: collision with root package name */
    private final e f31894c;

    /* renamed from: d  reason: collision with root package name */
    private final View f31895d;

    /* renamed from: e  reason: collision with root package name */
    private c f31896e;

    /* renamed from: f  reason: collision with root package name */
    private Set f31897f = new HashSet();

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(i iVar, n nVar, e eVar, View view) {
        this.f31892a = iVar;
        this.f31894c = eVar;
        this.f31893b = nVar;
        this.f31895d = view;
    }

    private boolean d() {
        SimpleDateFormat f10 = f();
        String r10 = this.f31892a.r();
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
                String s10 = this.f31892a.s(i10);
                Calendar calendar = Calendar.getInstance(this.f31893b.D());
                calendar.setTime(f10.parse(s10));
                return calendar;
            } catch (ParseException unused) {
            }
        }
        return null;
    }

    private SimpleDateFormat f() {
        TimeZone D = this.f31893b.D();
        SimpleDateFormat d10 = this.f31894c.d();
        d10.setTimeZone(D);
        return d10;
    }

    private Calendar g() {
        SimpleDateFormat f10 = f();
        String r10 = this.f31892a.r();
        Calendar calendar = Calendar.getInstance(this.f31893b.D());
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
        if (this.f31892a.A()) {
            cVar = c.spinning;
        } else {
            cVar = c.idle;
        }
        if (!cVar.equals(this.f31896e)) {
            this.f31896e = cVar;
            com.henninghall.date_picker.e.e(cVar, this.f31893b.q(), this.f31895d);
            for (d dVar : this.f31897f) {
                dVar.a(cVar);
            }
        }
    }

    @Override // kl.f
    public void b(ml.g gVar) {
        if (!this.f31892a.A()) {
            if (!d()) {
                Calendar e10 = e();
                if (e10 != null) {
                    this.f31894c.c(e10);
                    return;
                }
                return;
            }
            Calendar g10 = g();
            if (g10 == null) {
                return;
            }
            Calendar x10 = this.f31893b.x();
            if (x10 != null && g10.before(x10)) {
                this.f31894c.c(x10);
                return;
            }
            Calendar w10 = this.f31893b.w();
            if (w10 != null && g10.after(w10)) {
                this.f31894c.c(w10);
                return;
            }
            String e11 = this.f31894c.e();
            this.f31894c.i(g10);
            com.henninghall.date_picker.e.d(g10, e11, this.f31893b.q(), this.f31895d);
        }
    }

    public void c(d dVar) {
        this.f31897f.add(dVar);
    }
}
