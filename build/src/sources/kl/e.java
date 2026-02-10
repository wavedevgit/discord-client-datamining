package kl;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends g {
    public e(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
    }

    @Override // kl.g
    public String e() {
        return "mm";
    }

    @Override // kl.g
    public Paint.Align k() {
        if (this.f30943a.f16837o.f()) {
            return Paint.Align.LEFT;
        }
        return Paint.Align.RIGHT;
    }

    @Override // kl.g
    public ArrayList n() {
        Calendar calendar = Calendar.getInstance();
        ArrayList arrayList = new ArrayList();
        int i10 = 0;
        calendar.set(12, 0);
        while (i10 < 60) {
            arrayList.add(this.f30947e.format(calendar.getTime()));
            calendar.add(12, this.f30943a.y());
            i10 += this.f30943a.y();
        }
        return arrayList;
    }

    @Override // kl.g
    public boolean u() {
        if (this.f30943a.z() != gl.b.date) {
            return true;
        }
        return false;
    }

    @Override // kl.g
    public boolean v() {
        return true;
    }
}
