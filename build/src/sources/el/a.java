package el;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends g {
    public a(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
    }

    @Override // el.g
    public String e() {
        if (this.f21636a.f16323o.g()) {
            return " a ";
        }
        return "";
    }

    @Override // el.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // el.g
    public ArrayList n() {
        Calendar calendar = Calendar.getInstance();
        calendar.set(2000, 0, 0, 0, 0, 0);
        ArrayList arrayList = new ArrayList();
        calendar.set(11, 0);
        arrayList.add(this.f21640e.format(calendar.getTime()));
        calendar.add(11, 12);
        arrayList.add(this.f21640e.format(calendar.getTime()));
        return arrayList;
    }

    @Override // el.g
    public boolean u() {
        if (this.f21636a.f16323o.g() && this.f21636a.z() != al.b.date) {
            return true;
        }
        return false;
    }

    @Override // el.g
    public boolean v() {
        return false;
    }
}
