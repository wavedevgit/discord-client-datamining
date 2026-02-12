package ml;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends g {
    public a(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
    }

    @Override // ml.g
    public String e() {
        if (this.f36545a.f17587o.g()) {
            return " a ";
        }
        return "";
    }

    @Override // ml.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // ml.g
    public ArrayList n() {
        Calendar calendar = Calendar.getInstance();
        calendar.set(2000, 0, 0, 0, 0, 0);
        ArrayList arrayList = new ArrayList();
        calendar.set(11, 0);
        arrayList.add(this.f36549e.format(calendar.getTime()));
        calendar.add(11, 12);
        arrayList.add(this.f36549e.format(calendar.getTime()));
        return arrayList;
    }

    @Override // ml.g
    public boolean u() {
        if (this.f36545a.f17587o.g() && this.f36545a.z() != il.b.date) {
            return true;
        }
        return false;
    }

    @Override // ml.g
    public boolean v() {
        return false;
    }
}
