package el;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends g {
    public e(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
    }

    @Override // el.g
    public String e() {
        return "mm";
    }

    @Override // el.g
    public Paint.Align k() {
        if (this.f22913a.f17726o.f()) {
            return Paint.Align.LEFT;
        }
        return Paint.Align.RIGHT;
    }

    @Override // el.g
    public ArrayList n() {
        Calendar calendar = Calendar.getInstance();
        ArrayList arrayList = new ArrayList();
        int i10 = 0;
        calendar.set(12, 0);
        while (i10 < 60) {
            arrayList.add(this.f22917e.format(calendar.getTime()));
            calendar.add(12, this.f22913a.y());
            i10 += this.f22913a.y();
        }
        return arrayList;
    }

    @Override // el.g
    public boolean u() {
        if (this.f22913a.z() != al.b.date) {
            return true;
        }
        return false;
    }

    @Override // el.g
    public boolean v() {
        return true;
    }
}
