package hl;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends g {
    public b(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
    }

    @Override // hl.g
    public String e() {
        return com.henninghall.date_picker.h.a(this.f25948a.v());
    }

    @Override // hl.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // hl.g
    public ArrayList n() {
        Calendar calendar = Calendar.getInstance();
        ArrayList arrayList = new ArrayList();
        calendar.set(2, 0);
        calendar.set(5, 1);
        for (int i10 = 1; i10 <= 31; i10++) {
            arrayList.add(h(calendar));
            calendar.add(5, 1);
        }
        return arrayList;
    }

    @Override // hl.g
    public boolean u() {
        if (this.f25948a.z() == dl.b.date) {
            return true;
        }
        return false;
    }

    @Override // hl.g
    public boolean v() {
        return true;
    }
}
