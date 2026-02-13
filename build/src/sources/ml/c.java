package ml;

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
    private static int f37109h = 150;

    /* renamed from: f  reason: collision with root package name */
    private String f37110f;

    /* renamed from: g  reason: collision with root package name */
    private HashMap f37111g;

    public c(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
    }

    private Calendar A() {
        Calendar w10 = this.f37113a.w();
        Calendar x10 = this.f37113a.x();
        if (x10 != null) {
            return (Calendar) x10.clone();
        }
        if (w10 != null) {
            Calendar calendar = (Calendar) w10.clone();
            calendar.add(5, (-calendar.getActualMaximum(6)) / 2);
            return calendar;
        }
        Calendar A = this.f37113a.A();
        A.add(5, (-f37109h) / 2);
        return A;
    }

    private String B(Calendar calendar) {
        return this.f37117e.format(calendar.getTime());
    }

    private Calendar C(Calendar calendar) {
        calendar.set(11, 0);
        calendar.set(12, 0);
        calendar.set(13, 0);
        calendar.set(14, 0);
        return calendar;
    }

    private String D(String str) {
        String i10 = o.i(this.f37113a.u());
        if (Character.isUpperCase(str.charAt(0))) {
            return o.a(i10);
        }
        return i10;
    }

    private String w(Calendar calendar) {
        return x().format(calendar.getTime());
    }

    private SimpleDateFormat x() {
        return new SimpleDateFormat(y(), this.f37113a.u());
    }

    private String y() {
        return com.henninghall.date_picker.h.d(this.f37113a.v());
    }

    private Calendar z() {
        Calendar w10 = this.f37113a.w();
        Calendar x10 = this.f37113a.x();
        if (w10 != null) {
            return (Calendar) w10.clone();
        }
        if (x10 != null) {
            Calendar calendar = (Calendar) x10.clone();
            calendar.add(5, calendar.getActualMaximum(6) / 2);
            return calendar;
        }
        Calendar A = this.f37113a.A();
        A.add(5, f37109h / 2);
        return A;
    }

    @Override // ml.g
    public String e() {
        return com.henninghall.date_picker.h.b(this.f37113a.u()).replace("EEEE", "EEE").replace("MMMM", "MMM");
    }

    @Override // ml.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // ml.g
    public ArrayList n() {
        ArrayList arrayList = new ArrayList();
        this.f37111g = new HashMap();
        Calendar A = A();
        Calendar z10 = z();
        do {
            String B = B(A);
            arrayList.add(B);
            this.f37111g.put(B, w(A));
            if (o.f(A)) {
                this.f37110f = B;
            }
            A.add(5, 1);
        } while (!C((Calendar) A.clone()).after(z10));
        return arrayList;
    }

    @Override // ml.g
    public String s(String str) {
        if (str.equals(this.f37110f)) {
            return D(str);
        }
        return (String) this.f37111g.get(str);
    }

    @Override // ml.g
    public boolean u() {
        if (this.f37113a.z() == il.b.datetime) {
            return true;
        }
        return false;
    }

    @Override // ml.g
    public boolean v() {
        return false;
    }
}
