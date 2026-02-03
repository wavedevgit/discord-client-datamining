package el;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import com.henninghall.date_picker.o;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c extends g {

    /* renamed from: h  reason: collision with root package name */
    private static int f21632h = 150;

    /* renamed from: f  reason: collision with root package name */
    private String f21633f;

    /* renamed from: g  reason: collision with root package name */
    private HashMap f21634g;

    public c(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
    }

    private Calendar A() {
        Calendar w10 = this.f21636a.w();
        Calendar x10 = this.f21636a.x();
        if (x10 != null) {
            return (Calendar) x10.clone();
        }
        if (w10 != null) {
            Calendar calendar = (Calendar) w10.clone();
            calendar.add(5, (-calendar.getActualMaximum(6)) / 2);
            return calendar;
        }
        Calendar A = this.f21636a.A();
        A.add(5, (-f21632h) / 2);
        return A;
    }

    private String B(Calendar calendar) {
        return this.f21640e.format(calendar.getTime());
    }

    private Calendar C(Calendar calendar) {
        calendar.set(11, 0);
        calendar.set(12, 0);
        calendar.set(13, 0);
        calendar.set(14, 0);
        return calendar;
    }

    private String D(String str) {
        String i10 = o.i(this.f21636a.u());
        if (Character.isUpperCase(str.charAt(0))) {
            return o.a(i10);
        }
        return i10;
    }

    private String w(Calendar calendar) {
        return x().format(calendar.getTime());
    }

    private SimpleDateFormat x() {
        return new SimpleDateFormat(y(), this.f21636a.u());
    }

    private String y() {
        return com.henninghall.date_picker.h.d(this.f21636a.v());
    }

    private Calendar z() {
        Calendar w10 = this.f21636a.w();
        Calendar x10 = this.f21636a.x();
        if (w10 != null) {
            return (Calendar) w10.clone();
        }
        if (x10 != null) {
            Calendar calendar = (Calendar) x10.clone();
            calendar.add(5, calendar.getActualMaximum(6) / 2);
            return calendar;
        }
        Calendar A = this.f21636a.A();
        A.add(5, f21632h / 2);
        return A;
    }

    @Override // el.g
    public String e() {
        return com.henninghall.date_picker.h.b(this.f21636a.u()).replace("EEEE", "EEE").replace("MMMM", "MMM");
    }

    @Override // el.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // el.g
    public ArrayList n() {
        ArrayList arrayList = new ArrayList();
        this.f21634g = new HashMap();
        Calendar A = A();
        Calendar z10 = z();
        do {
            String B = B(A);
            arrayList.add(B);
            this.f21634g.put(B, w(A));
            if (o.f(A)) {
                this.f21633f = B;
            }
            A.add(5, 1);
        } while (!C((Calendar) A.clone()).after(z10));
        return arrayList;
    }

    @Override // el.g
    public String s(String str) {
        if (str.equals(this.f21633f)) {
            return D(str);
        }
        return (String) this.f21634g.get(str);
    }

    @Override // el.g
    public boolean u() {
        if (this.f21636a.z() == al.b.datetime) {
            return true;
        }
        return false;
    }

    @Override // el.g
    public boolean v() {
        return false;
    }
}
