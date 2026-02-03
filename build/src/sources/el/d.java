package el;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends g {

    /* renamed from: f  reason: collision with root package name */
    private final com.henninghall.date_picker.g f21635f;

    public d(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
        this.f21635f = new com.henninghall.date_picker.g(this.f21636a);
    }

    @Override // el.g
    public String e() {
        if (this.f21636a.f16323o.g()) {
            return "h";
        }
        return "HH";
    }

    @Override // el.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // el.g
    public ArrayList n() {
        int i10;
        Calendar calendar = Calendar.getInstance();
        calendar.set(2000, 0, 0, 0, 0, 0);
        ArrayList arrayList = new ArrayList();
        if (this.f21636a.f16323o.g()) {
            i10 = 12;
        } else {
            i10 = 24;
        }
        for (int i11 = 0; i11 < i10; i11++) {
            arrayList.add(this.f21640e.format(calendar.getTime()));
            calendar.add(11, 1);
        }
        return arrayList;
    }

    @Override // el.g
    public String s(String str) {
        return this.f21635f.b(str);
    }

    @Override // el.g
    public boolean u() {
        if (this.f21636a.z() != al.b.date) {
            return true;
        }
        return false;
    }

    @Override // el.g
    public boolean v() {
        return true;
    }
}
