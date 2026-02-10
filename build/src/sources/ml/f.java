package ml;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f extends g {
    public f(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
    }

    @Override // ml.g
    public String e() {
        return "LLLL";
    }

    @Override // ml.g
    public Paint.Align k() {
        return Paint.Align.LEFT;
    }

    @Override // ml.g
    public ArrayList n() {
        ArrayList arrayList = new ArrayList();
        Calendar calendar = Calendar.getInstance();
        calendar.set(2, 0);
        for (int i10 = 0; i10 <= 11; i10++) {
            arrayList.add(h(calendar));
            calendar.add(2, 1);
        }
        return arrayList;
    }

    @Override // ml.g
    public boolean u() {
        if (this.f36544a.z() == il.b.date) {
            return true;
        }
        return false;
    }

    @Override // ml.g
    public boolean v() {
        return true;
    }
}
