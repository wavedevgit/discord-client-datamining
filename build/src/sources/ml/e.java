package ml;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends g {
    public e(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
    }

    @Override // ml.g
    public String e() {
        return "mm";
    }

    @Override // ml.g
    public Paint.Align k() {
        if (this.f36544a.f17586o.f()) {
            return Paint.Align.LEFT;
        }
        return Paint.Align.RIGHT;
    }

    @Override // ml.g
    public ArrayList n() {
        Calendar calendar = Calendar.getInstance();
        ArrayList arrayList = new ArrayList();
        int i10 = 0;
        calendar.set(12, 0);
        while (i10 < 60) {
            arrayList.add(this.f36548e.format(calendar.getTime()));
            calendar.add(12, this.f36544a.y());
            i10 += this.f36544a.y();
        }
        return arrayList;
    }

    @Override // ml.g
    public boolean u() {
        if (this.f36544a.z() != il.b.date) {
            return true;
        }
        return false;
    }

    @Override // ml.g
    public boolean v() {
        return true;
    }
}
