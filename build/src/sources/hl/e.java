package hl;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends g {
    public e(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
    }

    @Override // hl.g
    public String e() {
        return "mm";
    }

    @Override // hl.g
    public Paint.Align k() {
        if (this.f25948a.f16717o.f()) {
            return Paint.Align.LEFT;
        }
        return Paint.Align.RIGHT;
    }

    @Override // hl.g
    public ArrayList n() {
        Calendar calendar = Calendar.getInstance();
        ArrayList arrayList = new ArrayList();
        int i10 = 0;
        calendar.set(12, 0);
        while (i10 < 60) {
            arrayList.add(this.f25952e.format(calendar.getTime()));
            calendar.add(12, this.f25948a.y());
            i10 += this.f25948a.y();
        }
        return arrayList;
    }

    @Override // hl.g
    public boolean u() {
        if (this.f25948a.z() != dl.b.date) {
            return true;
        }
        return false;
    }

    @Override // hl.g
    public boolean v() {
        return true;
    }
}
